'use client'

import { motion } from 'framer-motion'
import { useMemo, useState, useEffect } from 'react'
import { useAudio } from '../context/AudioContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { usePerformance } from '../hooks/usePerformance'

interface Heart {
  id: number
  x: number
  delay: number
  duration: number
  size: number
  emoji: string
}

export default function FloatingHearts() {
  const { isVideoPlaying } = useAudio()
  const [mounted, setMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const { isLowEnd } = usePerformance()
  
  // Reduce heart count on low-end devices
  const heartCount = isLowEnd ? 5 : 12
  
  const hearts = useMemo<Heart[]>(() => {
    const emojis = ['💖', '💗', '💓', '💕', '💝', '❤️']
    return Array.from({ length: heartCount }, (_, i) => ({
      id: i,
      x: (i * 8.33) % 100, // Deterministic positioning
      delay: (i * 0.67) % 8,
      duration: 15 + ((i % 10)),
      size: 20 + ((i % 3) * 5),
      emoji: emojis[i % emojis.length],
    }))
  }, [heartCount])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || prefersReducedMotion || isVideoPlaying) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[8] overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
            opacity: 0.15,
          }}
          initial={{ y: '110%', rotate: 0 }}
          animate={{
            y: '-20%',
            rotate: [0, 10, -10, 0],
            x: [0, 30, -30, 0],
          }}
          transition={{
            y: {
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: 'linear',
            },
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            x: {
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  )
}

