'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface KineticTextProps {
  text: string
  className?: string
  delay?: number
  type?: 'word' | 'letter' | 'line'
  style?: 'float' | 'emerge' | 'assemble'
}

export default function KineticText({
  text,
  className = '',
  delay = 0,
  type = 'word',
  style = 'emerge',
}: KineticTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()
  
  // Simplify animations for reduced motion
  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{text}</div>
  }

  const getVariants = () => {
    switch (style) {
      case 'float':
        return {
          hidden: { opacity: 0, y: 20, scale: 0.95 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }
      case 'emerge':
        return {
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0 },
        }
      case 'assemble':
        return {
          hidden: { opacity: 0, x: -10, scale: 0.95 },
          visible: { opacity: 1, x: 0, scale: 1 },
        }
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }
    }
  }

  const variants = getVariants()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: type === 'letter' ? 0.02 : type === 'word' ? 0.05 : 0.1,
        delayChildren: delay,
      },
    },
  }

  const splitText = () => {
    if (type === 'letter') {
      return text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={variants}
          transition={{
            duration: 0.4,
            ease: [0.34, 1.56, 0.64, 1], // Bouncy
          }}
          whileHover={{ scale: 1.2, y: -5 }}
          className="inline-block"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))
    } else if (type === 'word') {
      return text.split(' ').map((word, i) => (
        <motion.span
          key={i}
          variants={variants}
          transition={{
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1], // Bouncy
          }}
          whileHover={{ scale: 1.1, y: -3 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))
    } else {
      return (
        <motion.span
          variants={variants}
          transition={{
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          {text}
        </motion.span>
      )
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {splitText()}
    </motion.div>
  )
}

