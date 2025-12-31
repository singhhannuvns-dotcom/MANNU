'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CatReactionProps {
  show: boolean
  emoji?: string
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'center'
  duration?: number
}

export default function CatReaction({ 
  show, 
  emoji = '😼', 
  position = 'bottom-right',
  duration = 2000,
}: CatReactionProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setVisible(true)
      const timer = setTimeout(() => setVisible(false), duration)
      return () => clearTimeout(timer)
    }
  }, [show, duration])

  const positionClasses = {
    'bottom-right': 'bottom-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'top-right': 'top-8 right-8',
    'top-left': 'top-8 left-8',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, rotate: -180, y: 50 }}
          animate={{ 
            scale: [0, 1.3, 1], 
            rotate: [0, 10, -10, 0],
            y: 0,
          }}
          exit={{ scale: 0, rotate: 180, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className={`fixed ${positionClasses[position]} z-50 text-7xl pointer-events-none`}
        >
          {emoji}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

