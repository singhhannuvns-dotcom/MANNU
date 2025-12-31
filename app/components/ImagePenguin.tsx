'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { usePerformance } from '../hooks/usePerformance'

interface ImagePenguinProps {
  variant?: 'default' | 'happy' | 'sad' | 'curious' | 'loving'
  animation?: 'idle' | 'hop' | 'jump' | 'lean' | 'shake' | 'walk' | 'slide'
  size?: number
  className?: string
  showHeartEffect?: boolean
  showSparkleEffect?: boolean
  onAnimationComplete?: () => void
}

export default function ImagePenguin({
  variant = 'default',
  animation = 'idle',
  size = 100,
  className = '',
  showHeartEffect = false,
  showSparkleEffect = false,
  onAnimationComplete,
}: ImagePenguinProps) {
  const prefersReducedMotion = useReducedMotion()
  const { isLowEnd } = usePerformance()
  const [showBlink, setShowBlink] = useState(false)

  // Periodic blinking
  useEffect(() => {
    if (prefersReducedMotion) return

    const blinkInterval = setInterval(() => {
      setShowBlink(true)
      setTimeout(() => setShowBlink(false), 150)
    }, 4000 + Math.random() * 2000) // Random blink every 4-6s

    return () => clearInterval(blinkInterval)
  }, [prefersReducedMotion])

  // Get image source based on variant
  const getImageSrc = () => {
    return `/images/penguin-${variant}.png`
  }

  // Get animation properties
  const getAnimationProps = () => {
    if (prefersReducedMotion) {
      return { animate: {} }
    }

    const baseAnimation = {
      scale: [1, 1.03, 1],
      rotate: [0, -1, 1, 0],
    }

    const baseTransition = {
      scale: {
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
      rotate: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }

    switch (animation) {
      case 'hop':
        return {
          animate: {
            y: [0, -15, 0],
            scale: [1, 0.95, 1],
          },
          transition: {
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1],
          },
          onAnimationComplete,
        }

      case 'jump':
        return {
          animate: {
            y: [0, -25, 0],
            rotate: [0, -10, 10, 0],
            scale: [1, 0.9, 1.1, 1],
          },
          transition: {
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
          },
          onAnimationComplete,
        }

      case 'lean':
        return {
          animate: {
            rotate: [-5, 0],
            x: [0, 3],
          },
          transition: {
            duration: 0.3,
            ease: 'easeOut',
          },
        }

      case 'shake':
        return {
          animate: {
            rotate: [0, -15, 15, -10, 10, 0],
            x: [0, -3, 3, -2, 2, 0],
          },
          transition: {
            duration: 0.8,
            ease: 'easeInOut',
          },
          onAnimationComplete,
        }

      case 'walk':
        return {
          animate: {
            x: [0, 30, 60, 60, 30, 0],
            scaleX: [1, 1, 1, -1, -1, -1],
            rotate: [0, -3, -3, 3, 3, 0],
          },
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }

      case 'slide':
        return {
          animate: {
            y: [0, 20],
            rotate: [0, -10],
            opacity: [1, 0.7],
          },
          transition: {
            duration: 1.2,
            ease: 'easeOut',
          },
          onAnimationComplete,
        }

      default: // idle
        return {
          animate: baseAnimation,
          transition: baseTransition,
        }
    }
  }

  const animationProps = getAnimationProps()

  // Shadow animation (squash/stretch)
  const getShadowScale = () => {
    switch (animation) {
      case 'hop':
      case 'jump':
        return {
          scaleX: [1, 1.2, 1],
          scaleY: [1, 0.8, 1],
        }
      default:
        return {
          scaleX: [1, 1.05, 1],
        }
    }
  }

  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
      {/* Soft shadow beneath penguin */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[12%] bg-black/15 rounded-full blur-sm"
        animate={!prefersReducedMotion ? getShadowScale() : {}}
        transition={{
          duration: animation === 'idle' ? 2.5 : 0.6,
          repeat: animation === 'idle' ? Infinity : 0,
          ease: 'easeInOut',
        }}
      />

      {/* Main penguin image - using emoji fallback until images are added */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        {...animationProps}
      >
        <div 
          className="flex items-center justify-center"
          style={{ fontSize: `${size * 0.8}px` }}
        >
          🐧
        </div>

      </motion.div>

      {/* Heart effect */}
      <AnimatePresence>
        {showHeartEffect && !isLowEnd && (
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: [0, -20, -35, -50],
              scale: [0, 1, 1.2, 0.8],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: 'easeOut',
            }}
          >
            <span className="text-3xl">💕</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sparkle effect */}
      <AnimatePresence>
        {showSparkleEffect && !isLowEnd && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: '30%',
                  left: '50%',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, (i - 1) * 15],
                  y: [0, -10 - i * 5],
                  rotate: [0, 180 * (i % 2 === 0 ? 1 : -1)],
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: 'easeOut',
                }}
              >
                <span className="text-xl">✨</span>
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

