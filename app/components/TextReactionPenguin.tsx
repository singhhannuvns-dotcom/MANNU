'use client'

import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import PenguinDoodle from './PenguinDoodle'

interface TextReactionPenguinProps {
  reaction: 'clap' | 'hug'
  position?: 'left' | 'right' | 'bottom'
  size?: number
  delay?: number
}

export default function TextReactionPenguin({
  reaction,
  position = 'right',
  size = 50,
  delay = 0,
}: TextReactionPenguinProps) {
  const [showPenguin, setShowPenguin] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setShowPenguin(true)
      }, delay)

      // Hide after reaction
      const hideTimer = setTimeout(() => {
        setShowPenguin(false)
      }, delay + 3000)

      return () => {
        clearTimeout(timer)
        clearTimeout(hideTimer)
      }
    }
  }, [isInView, delay])

  const getPositionClasses = () => {
    switch (position) {
      case 'left':
        return 'absolute -left-16 top-1/2 -translate-y-1/2'
      case 'right':
        return 'absolute -right-16 top-1/2 -translate-y-1/2'
      case 'bottom':
        return 'absolute left-1/2 -translate-x-1/2 -bottom-16'
      default:
        return 'absolute -right-16 top-1/2 -translate-y-1/2'
    }
  }

  return (
    <div ref={ref} className={getPositionClasses()}>
      <PenguinDoodle 
        animation={reaction} 
        size={size} 
        show={showPenguin}
        delay={0}
      />
    </div>
  )
}

