'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AudioPlayerProps {
  isPlaying: boolean
  setIsPlaying: (playing: boolean) => void
}

export default function AudioPlayer({ isPlaying, setIsPlaying }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => {
          console.log('Audio autoplay prevented:', err)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : 0.3
    }
  }, [isMuted])

  return (
    <>
      {/* Hidden audio element - Replace src with actual audio file */}
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
      >
        {/* Add your audio source here */}
        {/* <source src="/audio/ambient.mp3" type="audio/mpeg" /> */}
      </audio>

      {/* Floating mute/unmute button */}
      <AnimatePresence>
        {isPlaying && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsMuted(!isMuted)}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-white border-2 border-warm-gold/30 flex items-center justify-center hover:border-warm-gold hover:shadow-lg transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6 text-warm-gold group-hover:text-muted-rose transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMuted ? (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </>
              ) : (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </>
              )}
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

