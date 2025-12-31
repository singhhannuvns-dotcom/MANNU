'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { usePerformance } from '../hooks/usePerformance'

interface PenguinDoodleProps {
  animation?: 'idle' | 'peek' | 'clap' | 'hug' | 'wave' | 'jump' | 'sad' | 'lean'
  size?: number
  className?: string
  delay?: number
  show?: boolean
}

export default function PenguinDoodle({
  animation = 'idle',
  size = 60,
  className = '',
  delay = 0,
  show = true,
}: PenguinDoodleProps) {
  const prefersReducedMotion = useReducedMotion()
  const { isLowEnd } = usePerformance()

  // Don't render on low-end devices
  if (isLowEnd || !show) return null

  const getAnimationVariants = () => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    }

    switch (animation) {
      case 'peek':
        return {
          initial: { x: -100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: -100, opacity: 0 },
        }
      case 'clap':
        return {
          initial: { scale: 0, rotate: -45 },
          animate: { 
            scale: 1, 
            rotate: [0, -10, 10, -10, 10, 0],
          },
          exit: { scale: 0, opacity: 0 },
        }
      case 'hug':
        return {
          initial: { scale: 0, y: 20 },
          animate: { 
            scale: [1, 1.1, 1],
            y: [0, -5, 0],
          },
          exit: { scale: 0, opacity: 0 },
        }
      case 'wave':
        return {
          initial: { x: 100, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          exit: { x: 100, opacity: 0 },
        }
      case 'jump':
        return {
          initial: { y: 0 },
          animate: { y: [0, -15, 0] },
          exit: { y: 0 },
        }
      case 'sad':
        return {
          initial: { y: 0, rotate: 0 },
          animate: { 
            y: [0, 5, 0],
            rotate: [0, -5, 5, -5, 0],
          },
          exit: { opacity: 0 },
        }
      case 'lean':
        return {
          initial: { rotate: 0 },
          animate: { rotate: -10 },
          exit: { rotate: 0 },
        }
      default: // idle
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
        }
    }
  }

  const variants = getAnimationVariants()

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={className}
          initial={variants.initial}
          animate={variants.animate}
          exit={variants.exit}
          transition={{
            duration: animation === 'clap' ? 1 : 0.5,
            delay,
            ease: 'easeInOut',
          }}
        >
          <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Body */}
            <ellipse cx="50" cy="55" rx="25" ry="30" fill="#2C3E50" />
            <ellipse cx="50" cy="55" rx="18" ry="23" fill="#ECF0F1" />
            
            {/* Head */}
            <circle cx="50" cy="30" r="18" fill="#2C3E50" />
            
            {/* Eyes */}
            <circle cx="44" cy="28" r="3" fill="#fff" />
            <circle cx="56" cy="28" r="3" fill="#fff" />
            <circle cx="45" cy="28" r="1.5" fill="#2C3E50" />
            <circle cx="57" cy="28" r="1.5" fill="#2C3E50" />
            
            {/* Beak */}
            <path d="M50 32 L48 35 L52 35 Z" fill="#F39C12" />
            
            {/* Feet */}
            <ellipse cx="42" cy="85" rx="6" ry="4" fill="#F39C12" />
            <ellipse cx="58" cy="85" rx="6" ry="4" fill="#F39C12" />
            
            {/* Wings */}
            <ellipse 
              cx="28" 
              cy="50" 
              rx="8" 
              ry="15" 
              fill="#2C3E50"
              transform={animation === 'clap' ? 'rotate(-20 28 50)' : ''}
            />
            <ellipse 
              cx="72" 
              cy="50" 
              rx="8" 
              ry="15" 
              fill="#2C3E50"
              transform={animation === 'clap' ? 'rotate(20 72 50)' : ''}
            />
            
            {/* Blush (for cute reactions) */}
            {(animation === 'hug' || animation === 'clap') && (
              <>
                <circle cx="38" cy="35" r="3" fill="#FFB6C1" opacity="0.6" />
                <circle cx="62" cy="35" r="3" fill="#FFB6C1" opacity="0.6" />
              </>
            )}
            
            {/* Heart (for hug animation) */}
            {animation === 'hug' && (
              <motion.g
                initial={{ scale: 0, y: 0 }}
                animate={{ 
                  scale: [0, 1, 1, 0],
                  y: [0, -20, -30, -40],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <text x="75" y="40" fontSize="12" fill="#FF69B4">💕</text>
              </motion.g>
            )}
          </svg>
          
          {/* Idle animation - subtle bounce and blink */}
          {animation === 'idle' && !prefersReducedMotion && (
            <motion.div
              className="absolute inset-0"
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

