'use client'

import { motion } from 'framer-motion'
import { useMemo, useState, useEffect } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { usePerformance } from '../hooks/usePerformance'

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  type: 'heart' | 'dot' | 'sparkle'
  opacity: number
}

export default function HeroFloatingElements() {
  const [mounted, setMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const { isLowEnd } = usePerformance()

  const elementCount = isLowEnd ? 8 : 15

  const elements = useMemo<FloatingElement[]>(() => {
    const types: Array<'heart' | 'dot' | 'sparkle'> = ['heart', 'dot', 'sparkle']
    return Array.from({ length: elementCount }, (_, i) => ({
      id: i,
      x: (i * 6.67) % 100,
      y: (i * 5.33) % 100,
      size: 8 + ((i % 4) * 4),
      duration: 15 + ((i % 12)),
      delay: (i * 0.8) % 10,
      type: types[i % types.length],
      opacity: 0.15 + ((i % 3) * 0.1),
    }))
  }, [elementCount])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || prefersReducedMotion) return null

  const renderElement = (element: FloatingElement) => {
    switch (element.type) {
      case 'heart':
        return <span style={{ fontSize: `${element.size}px` }}>💕</span>
      case 'sparkle':
        return <span style={{ fontSize: `${element.size}px` }}>✨</span>
      case 'dot':
        return (
          <div
            className="rounded-full bg-gradient-to-br from-dusty-rose to-muted-rose"
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
            }}
          />
        )
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            opacity: element.opacity,
          }}
          animate={{
            y: [0, -100, -200],
            x: [0, Math.sin(element.id) * 30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {renderElement(element)}
        </motion.div>
      ))}
    </div>
  )
}

