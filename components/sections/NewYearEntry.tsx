'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface NewYearEntryProps {
  onMusicStart?: () => void
}

export default function NewYearEntry({ onMusicStart }: NewYearEntryProps) {
  const [showContinue, setShowContinue] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContinue(true), 3500)
    return () => clearTimeout(timer)
  }, [])

  const handleContinue = () => {
    if (onMusicStart) onMusicStart()
    window.scrollTo({ 
      top: window.innerHeight, 
      behavior: 'smooth' 
    })
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center champagne-gradient overflow-hidden">
      {/* Soft floating sparkles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-warm-gold rounded-full"
            initial={{ 
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Line 1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl text-text-primary mb-6 tracking-tight"
        >
          New year
        </motion.h1>

        {/* Line 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
          className="text-xl sm:text-2xl lg:text-3xl text-text-secondary font-light tracking-wide mb-3"
        >
          New memories
        </motion.p>

        {/* Line 3 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.1, ease: 'easeOut' }}
          className="text-base sm:text-lg text-warm-gold font-light"
        >
          Same curiosity
        </motion.p>

        {/* Continue button */}
        {showContinue && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onClick={handleContinue}
            className="mt-16 px-10 py-3 border-2 border-warm-gold/40 rounded-full text-warm-gold hover:bg-warm-gold/10 hover:border-warm-gold/70 transition-all duration-300 text-sm tracking-widest uppercase font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue
          </motion.button>
        )}
      </div>

      {/* Gentle scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 4 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-warm-gold/40 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-warm-gold/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

