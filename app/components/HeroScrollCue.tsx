'use client'

import { motion } from 'framer-motion'

export default function HeroScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.2, duration: 0.4 }}
      className="relative inline-block"
    >
      {/* Sparkle trail */}
      <motion.div
        className="absolute -top-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 1, 0], y: [10, 0, -10] }}
        transition={{
          delay: 3,
          duration: 2,
          repeat: Infinity,
          repeatDelay: 5,
        }}
      >
        <span className="text-xl">✨</span>
      </motion.div>

      {/* Pulsing glow */}
      <motion.div
        className="absolute inset-0 blur-lg bg-dusty-rose/30 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Arrow with bounce */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <motion.svg
          className="w-6 h-6 mx-auto text-soft-charcoal/60 relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </motion.svg>
      </motion.div>
    </motion.div>
  )
}

