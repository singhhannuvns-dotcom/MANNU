'use client'

import { motion } from 'framer-motion'

export default function HeroCenterGlow() {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
    >
      {/* Outer glow */}
      <motion.div
        className="w-[600px] h-[600px] rounded-full bg-gradient-radial from-warm-cream/30 via-dusty-rose/15 to-transparent"
        style={{
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Inner focus glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-radial from-muted-rose/40 via-warm-beige/20 to-transparent"
        style={{
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
}

