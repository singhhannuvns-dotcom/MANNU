'use client'

import React, { createContext, useContext, useRef, useState, useEffect, ReactNode } from 'react'

interface AudioContextType {
  isMuted: boolean
  toggleMute: () => void
  muteForVideo: () => void
  resumeAfterVideo: () => void
  isVideoPlaying: boolean
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isMuted, setIsMuted] = useState(true) // Start muted until user interaction
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    try {
      // Create audio element
      const audio = new Audio('/audio/background.mp3')
      audio.loop = true
      audio.volume = 0.3
      audio.preload = 'auto'
      
      // Handle when audio is ready to play
      audio.addEventListener('canplaythrough', () => {
        setIsReady(true)
      })
      
      // Handle audio loading errors gracefully (don't block UI)
      audio.addEventListener('error', (e) => {
        console.warn('Background audio failed to load:', e)
        // Don't set as permanently failed - file might just not exist yet
      })

      audioRef.current = audio

      // Try to play on first user interaction
      const handleInteraction = () => {
        if (audioRef.current && isMuted) {
          audioRef.current.play()
            .then(() => {
              setIsMuted(false)
            })
            .catch((error) => {
              console.log('Autoplay blocked, waiting for user to unmute')
            })
        }
      }

      // Listen for various interaction events
      document.addEventListener('click', handleInteraction, { once: true })
      document.addEventListener('touchstart', handleInteraction, { once: true })
      document.addEventListener('keydown', handleInteraction, { once: true })

      return () => {
        if (audioRef.current) {
          audioRef.current.pause()
          audioRef.current.src = ''
          audioRef.current = null
        }
      }
    } catch (error) {
      console.warn('Audio API not available:', error)
    }
  }, [])

  const toggleMute = () => {
    if (!audioRef.current) return

    try {
      if (isMuted) {
        audioRef.current.play()
          .then(() => setIsMuted(false))
          .catch((error) => {
            console.warn('Failed to play audio:', error)
          })
      } else {
        audioRef.current.pause()
        setIsMuted(true)
      }
    } catch (error) {
      console.warn('Toggle mute failed:', error)
    }
  }

  const muteForVideo = () => {
    if (!audioRef.current || isVideoPlaying) return

    try {
      // Only pause if audio is currently playing (not muted)
      if (!isMuted && !audioRef.current.paused) {
        audioRef.current.pause()
        setIsVideoPlaying(true)
      }
    } catch (error) {
      console.warn('Mute for video failed:', error)
    }
  }

  const resumeAfterVideo = () => {
    if (!audioRef.current) return

    try {
      setIsVideoPlaying(false)
      
      // Only resume if audio was playing before (not muted by user)
      if (!isMuted) {
        audioRef.current.play()
          .catch((error) => {
            console.warn('Resume after video failed:', error)
          })
      }
    } catch (error) {
      console.warn('Resume after video failed:', error)
    }
  }

  return (
    <AudioContext.Provider
      value={{
        isMuted,
        toggleMute,
        muteForVideo,
        resumeAfterVideo,
        isVideoPlaying,
      }}
    >
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}

