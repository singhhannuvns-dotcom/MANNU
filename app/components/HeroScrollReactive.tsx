'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function HeroScrollReactive() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Gradient shifts from cooler to warmer
  const backgroundOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.3])
  const warmthScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity: backgroundOpacity,
        scale: warmthScale,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dusty-rose/40 via-muted-rose/30 to-warm-cream/20" />
    </motion.div>
  )
}

