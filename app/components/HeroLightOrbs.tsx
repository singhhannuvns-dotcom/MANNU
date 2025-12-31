'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function HeroLightOrbs() {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) return null

  const orbs = [
    {
      id: 1,
      size: 'w-[500px] h-[500px]',
      color: 'bg-gradient-radial from-warm-cream/40 via-warm-beige/20 to-transparent',
      position: 'top-[10%] left-[5%]',
      duration: 25,
      delay: 0,
    },
    {
      id: 2,
      size: 'w-[600px] h-[600px]',
      color: 'bg-gradient-radial from-dusty-rose/30 via-muted-rose/15 to-transparent',
      position: 'bottom-[15%] right-[10%]',
      duration: 30,
      delay: 5,
    },
    {
      id: 3,
      size: 'w-[400px] h-[400px]',
      color: 'bg-gradient-radial from-muted-rose/25 via-warm-cream/10 to-transparent',
      position: 'top-[40%] right-[15%]',
      duration: 28,
      delay: 10,
    },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute ${orb.size} ${orb.color} ${orb.position} rounded-full`}
          style={{
            filter: 'blur(80px)',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.6, 0.8, 0.6, 0],
            scale: [0.8, 1, 1.1, 1, 0.8],
            x: [0, 30, -20, 30, 0],
            y: [0, -40, 20, -30, 0],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

