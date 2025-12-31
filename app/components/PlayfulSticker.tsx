'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface PlayfulStickerProps {
  emoji: string
  position: 'left' | 'right'
  delay?: number
  rotation?: number
}

export default function PlayfulSticker({ 
  emoji, 
  position, 
  delay = 0,
  rotation = 0,
}: PlayfulStickerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const positionClass = position === 'left' 
    ? '-left-4 md:left-4' 
    : '-right-4 md:right-4'

  return (
    <motion.div
      ref={ref}
      className={`absolute ${positionClass} top-1/2 -translate-y-1/2 text-5xl md:text-6xl opacity-20 md:opacity-30 pointer-events-none`}
      initial={{ scale: 0, rotate: rotation }}
      animate={isInView ? { 
        scale: [0, 1.2, 1],
        rotate: [rotation, rotation + 10, rotation - 10, rotation],
      } : { scale: 0 }}
      transition={{
        scale: { duration: 0.4, delay, ease: [0.34, 1.56, 0.64, 1] },
        rotate: { duration: 2, delay: delay + 0.4, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      {emoji}
    </motion.div>
  )
}

