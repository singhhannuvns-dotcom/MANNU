'use client'

import { useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAudio } from '../context/AudioContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { usePerformance } from '../hooks/usePerformance'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export default function WinterParticles() {
  const { isVideoPlaying } = useAudio()
  const [mounted, setMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const { isLowEnd } = usePerformance()
  
  // Reduce particle count on low-end devices
  const particleCount = isLowEnd ? 10 : 25
  
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: (i * 4) % 100, // Deterministic for SSR
      y: (i * 3.7) % 100,
      size: 2 + (i % 3),
      duration: 20 + (i % 15),
      delay: (i % 10),
      opacity: 0.05 + ((i % 3) * 0.05),
    }))
  }, [particleCount])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render particles if user prefers reduced motion
  if (!mounted || prefersReducedMotion) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          initial={{ y: '-10%' }}
          animate={
            isVideoPlaying
              ? { y: `${particle.y}%` }
              : {
                  y: ['0%', '110%'],
                  x: [0, Math.sin(particle.id) * 20, 0],
                }
          }
          transition={
            isVideoPlaying
              ? { duration: 0 }
              : {
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: 'linear',
                }
          }
        />
      ))}
    </div>
  )
}

