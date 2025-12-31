'use client'

import { motion } from 'framer-motion'

interface SectionConnectorProps {
  variant?: 'fade' | 'glow' | 'wave'
}

export default function SectionConnector({ variant = 'fade' }: SectionConnectorProps) {
  if (variant === 'fade') {
    return (
      <div className="relative h-32 -my-16 z-[2]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-warm-beige/50 to-transparent" />
      </div>
    )
  }

  if (variant === 'glow') {
    return (
      <div className="relative h-40 -my-20 z-[2] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-dusty-rose/40 to-transparent blur-sm" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-24 bg-radial-gradient from-muted-rose/10 to-transparent blur-xl" />
        </motion.div>
      </div>
    )
  }

  // wave variant
  return (
    <div className="relative h-24 -my-12 z-[2]">
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,50 Q300,20 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
          className="text-warm-beige/30"
          animate={{
            d: [
              'M0,50 Q300,20 600,50 T1200,50 L1200,120 L0,120 Z',
              'M0,50 Q300,80 600,50 T1200,50 L1200,120 L0,120 Z',
              'M0,50 Q300,20 600,50 T1200,50 L1200,120 L0,120 Z',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  )
}

