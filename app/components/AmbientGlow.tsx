'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface AmbientGlowProps {
  color?: 'rose' | 'warm' | 'soft'
  size?: 'sm' | 'md' | 'lg'
  position?: 'center' | 'top' | 'bottom'
}

export default function AmbientGlow({
  color = 'rose',
  size = 'md',
  position = 'center',
}: AmbientGlowProps) {
  const prefersReducedMotion = useReducedMotion()
  
  const colorClasses = {
    rose: 'bg-gradient-radial from-muted-rose/30 via-dusty-rose/15 to-transparent',
    warm: 'bg-gradient-radial from-warm-cream/40 via-warm-beige/20 to-transparent',
    soft: 'bg-gradient-radial from-soft-charcoal/10 via-transparent to-transparent',
  }

  const sizeClasses = {
    sm: 'w-64 h-64',
    md: 'w-96 h-96',
    lg: 'w-[600px] h-[600px]',
  }

  const positionClasses = {
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    top: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
    bottom: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
  }

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} ${colorClasses[color]} rounded-full blur-3xl pointer-events-none`}
      animate={prefersReducedMotion ? {} : {
        scale: [1, 1.1, 1],
        opacity: [0.6, 0.8, 0.6],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        filter: 'blur(80px)',
        opacity: prefersReducedMotion ? 0.6 : undefined,
      }}
    />
  )
}

