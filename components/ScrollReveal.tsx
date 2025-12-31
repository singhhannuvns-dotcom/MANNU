'use client'

import { ReactNode, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, Variants } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  variant?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'blur'
  once?: boolean
}

export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.8,
  variant = 'fadeIn',
  once = true
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else if (!once) {
      controls.start('hidden')
    }
  }, [isInView, controls, once])

  const variants: Record<string, Variants> = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration, delay, ease: 'easeInOut' }
      }
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration, delay, ease: 'easeOut' }
      }
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, delay, ease: 'easeOut' }
      }
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, delay, ease: 'easeOut' }
      }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration, delay, ease: 'easeOut' }
      }
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(10px)' },
      visible: { 
        opacity: 1, 
        filter: 'blur(0px)',
        transition: { duration, delay, ease: 'easeOut' }
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </motion.div>
  )
}

