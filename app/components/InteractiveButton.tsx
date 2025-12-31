'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface InteractiveButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  glowColor?: 'rose' | 'warm' | 'green'
  disabled?: boolean
}

export default function InteractiveButton({
  children,
  onClick,
  className = '',
  glowColor = 'rose',
  disabled = false,
}: InteractiveButtonProps) {
  const glowColors = {
    rose: 'shadow-muted-rose/50',
    warm: 'shadow-warm-cream/50',
    green: 'shadow-green-300/50',
  }

  return (
    <motion.button
      onClick={disabled ? undefined : onClick}
      whileHover={disabled ? undefined : { 
        scale: 1.1, 
        y: -5,
      }}
      whileTap={disabled ? undefined : { 
        scale: 0.93,
      }}
      transition={{ duration: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
      disabled={disabled}
      className={`relative ${className}`}
    >
      {/* Pulse effect on hover - disabled when button is disabled */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 rounded-full blur-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ 
            opacity: [0, 0.6, 0],
            scale: [0.8, 1.4, 1.6],
          }}
          transition={{
            duration: 0.4,
            ease: 'easeOut',
          }}
          style={{
            background: glowColor === 'rose' 
              ? 'radial-gradient(circle, rgba(232, 180, 184, 0.4) 0%, transparent 70%)'
              : glowColor === 'green'
              ? 'radial-gradient(circle, rgba(134, 239, 172, 0.4) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(255, 248, 240, 0.4) 0%, transparent 70%)',
          }}
        />
      )}
      
      {/* Shimmer on hover - disabled when button is disabled */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-full"
          whileHover="hover"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            variants={{
              hover: {
                x: ['-200%', '200%'],
                transition: {
                  duration: 0.5,
                  ease: 'easeInOut',
                },
              },
            }}
          />
        </motion.div>
      )}
      
      {/* Button content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

