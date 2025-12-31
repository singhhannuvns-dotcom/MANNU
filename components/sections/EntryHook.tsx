'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface EntryHookProps {
  onMusicStart: () => void
}

export default function EntryHook({ onMusicStart }: EntryHookProps) {
  const [showContinue, setShowContinue] = useState(false)

  useEffect(() => {
    // Show continue prompt after initial animations
    const timer = setTimeout(() => setShowContinue(true), 4000)
    return () => clearTimeout(timer)
  }, [])

  const handleContinue = () => {
    onMusicStart()
    // Smooth scroll to next section
    window.scrollTo({ 
      top: window.innerHeight, 
      behavior: 'smooth' 
    })
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center dark-gradient overflow-hidden">
      {/* Ambient background particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-gold rounded-full"
            initial={{ 
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
              opacity: 0
            }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Line 1 - Slow fade in */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
          className="font-serif text-5xl sm:text-7xl lg:text-8xl text-text-primary mb-8 tracking-tight"
        >
          This is for you
        </motion.h1>

        {/* Line 2 - Delayed fade */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.8, ease: 'easeOut' }}
          className="text-xl sm:text-2xl lg:text-3xl text-text-secondary font-light tracking-wide mb-4"
        >
          And no one else.
        </motion.p>

        {/* Line 3 - Final delayed fade */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.8, ease: 'easeOut' }}
          className="text-base sm:text-lg text-accent-gold/70 font-light italic"
        >
          You already know why you're here.
        </motion.p>

        {/* Continue prompt */}
        {showContinue && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            onClick={handleContinue}
            className="mt-16 px-8 py-3 border border-accent-gold/30 rounded-full text-accent-gold hover:bg-accent-gold/10 hover:border-accent-gold/60 transition-all duration-300 text-sm tracking-widest uppercase"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue
          </motion.button>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 4 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent-gold/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-accent-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

