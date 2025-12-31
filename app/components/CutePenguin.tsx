'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface CutePenguinProps {
  animation?: 'idle' | 'walk' | 'jump' | 'hug'
  size?: number
  className?: string
}

export default function CutePenguin({
  animation = 'idle',
  size = 80,
  className = '',
}: CutePenguinProps) {
  const prefersReducedMotion = useReducedMotion()

  const getMotionProps = () => {
    if (prefersReducedMotion) {
      return { animate: {} }
    }

    switch (animation) {
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
      case 'jump':
        return {
          animate: {
            y: [0, -20, 0],
            rotate: [0, -10, 10, 0],
          },
          transition: {
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
          },
        }
      case 'hug':
        return {
          animate: {
            scale: [1, 1.1, 1],
          },
          transition: {
            duration: 0.8,
            repeat: 3,
          },
        }
      default: // idle
        return {
          animate: {
            y: [0, -3, 0],
          },
          transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }
    }
  }

  const motionProps = getMotionProps()

  return (
    <motion.div className={className} {...motionProps}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shadow */}
        <ellipse cx="50" cy="92" rx="20" ry="4" fill="#000" opacity="0.1" />
        
        {/* Body - Chubby and round */}
        <ellipse cx="50" cy="60" rx="28" ry="32" fill="#B8E6F0" />
        <ellipse cx="50" cy="60" rx="22" ry="26" fill="#FFF" />
        
        {/* Head - Large and cute */}
        <circle cx="50" cy="32" r="20" fill="#B8E6F0" />
        
        {/* Blush */}
        <circle cx="38" cy="36" r="4" fill="#FFB6C1" opacity="0.6" />
        <circle cx="62" cy="36" r="4" fill="#FFB6C1" opacity="0.6" />
        
        {/* Eyes - Big and expressive */}
        <motion.g
          animate={{
            scaleY: [1, 0.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <circle cx="43" cy="30" r="4" fill="#2C3E50" />
          <circle cx="57" cy="30" r="4" fill="#2C3E50" />
          <circle cx="44" cy="29" r="1.5" fill="#FFF" />
          <circle cx="58" cy="29" r="1.5" fill="#FFF" />
        </motion.g>
        
        {/* Beak - Cute and small */}
        <path 
          d="M50 34 L47 37 L53 37 Z" 
          fill="#FFD700"
        />
        
        {/* Feet - Stubby */}
        <ellipse cx="42" cy="88" rx="7" ry="4" fill="#FFD700" />
        <ellipse cx="58" cy="88" rx="7" ry="4" fill="#FFD700" />
        
        {/* Wings - Small and rounded */}
        <motion.ellipse 
          cx="25" 
          cy="55" 
          rx="10" 
          ry="18" 
          fill="#B8E6F0"
          animate={animation === 'hug' ? {
            rotate: [-10, -25, -10],
          } : {}}
          style={{ transformOrigin: '25px 55px' }}
        />
        <motion.ellipse 
          cx="75" 
          cy="55" 
          rx="10" 
          ry="18" 
          fill="#B8E6F0"
          animate={animation === 'hug' ? {
            rotate: [10, 25, 10],
          } : {}}
          style={{ transformOrigin: '75px 55px' }}
        />
        
        {/* Heart for hug animation */}
        {animation === 'hug' && (
          <motion.g
            initial={{ scale: 0, y: 0 }}
            animate={{ 
              scale: [0, 1, 1, 0],
              y: [0, -15, -25, -35],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          >
            <text x="82" y="50" fontSize="16" fill="#FF69B4">💕</text>
          </motion.g>
        )}
      </svg>
    </motion.div>
  )
}

