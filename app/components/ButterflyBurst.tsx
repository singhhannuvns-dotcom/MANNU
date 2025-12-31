'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useMemo } from 'react'

interface ButterflyBurstProps {
  show: boolean
  origin: { x: number; y: number }
}

export default function ButterflyBurst({ show, origin }: ButterflyBurstProps) {
  const butterflies = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      angle: (i * 45) * (Math.PI / 180),
      distance: 100 + (i % 3) * 30,
      rotation: i * 45,
      delay: i * 0.05,
    }))
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <div
          className="fixed pointer-events-none z-[100]"
          style={{
            left: origin.x,
            top: origin.y,
          }}
        >
          {butterflies.map((butterfly) => (
            <motion.div
              key={butterfly.id}
              className="absolute text-2xl"
              initial={{ 
                opacity: 1, 
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{ 
                opacity: 0,
                scale: [0, 1.2, 1],
                x: Math.cos(butterfly.angle) * butterfly.distance,
                y: Math.sin(butterfly.angle) * butterfly.distance,
                rotate: [0, butterfly.rotation, butterfly.rotation + 180],
              }}
              transition={{
                duration: 1.5,
                delay: butterfly.delay,
                ease: 'easeOut',
              }}
            >
              🦋
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  )
}

