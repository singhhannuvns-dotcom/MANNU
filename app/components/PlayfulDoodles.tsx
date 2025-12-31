'use client'

import { motion } from 'framer-motion'

export default function PlayfulDoodles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[3] overflow-hidden opacity-10">
      {/* Floating doodle hearts */}
      <motion.svg
        className="absolute top-20 left-10 w-16 h-16 text-muted-rose"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </motion.svg>

      {/* Sparkles */}
      <motion.div
        className="absolute top-40 right-20 text-4xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        ✨
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-32 text-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        ⭐
      </motion.div>

      {/* Curved lines */}
      <motion.svg
        className="absolute bottom-20 right-10 w-32 h-32 text-dusty-rose"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M 10 50 Q 25 25, 50 50 T 90 50" strokeLinecap="round" />
      </motion.svg>

      {/* Dots pattern */}
      <motion.div
        className="absolute top-1/3 left-1/4"
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-muted-rose rounded-full" />
          <div className="w-2 h-2 bg-dusty-rose rounded-full" />
          <div className="w-2 h-2 bg-muted-rose rounded-full" />
        </div>
      </motion.div>
    </div>
  )
}

