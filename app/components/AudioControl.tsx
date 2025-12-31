'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useAudio } from '../context/AudioContext'
import { useState, useEffect } from 'react'

export default function AudioControl() {
  const { isMuted, toggleMute } = useAudio()
  const [isVisible, setIsVisible] = useState(false)
  const [showHint, setShowHint] = useState(false)

  useEffect(() => {
    // Show after a brief delay
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Show hint for muted state
      if (isMuted) {
        setShowHint(true)
        setTimeout(() => setShowHint(false), 5000)
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [isMuted])

  useEffect(() => {
    // Hide hint when unmuted
    if (!isMuted) {
      setShowHint(false)
    }
  }, [isMuted])

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
          <AnimatePresence>
            {showHint && isMuted && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg text-sm text-soft-charcoal border border-white/30"
              >
                Tap to play music 🎵
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-soft-charcoal hover:bg-white/70 hover:shadow-xl transition-all duration-300 border border-white/30"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}
