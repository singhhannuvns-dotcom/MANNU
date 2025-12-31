'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ImagePenguin from './ImagePenguin'
import { usePenguinInteractions } from '../hooks/usePenguinInteractions'

export default function EndingPenguin() {
  const [showPenguin, setShowPenguin] = useState(false)
  const [variant, setVariant] = useState<'default' | 'happy'>('default')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const penguin = usePenguinInteractions()

  useEffect(() => {
    if (isInView) {
      setShowPenguin(true)
      
      // Wave, sparkle, and exit sequence
      setTimeout(() => {
        setVariant('happy')
        penguin.triggerJump()
      }, 1500)
      
      setTimeout(() => {
        setShowPenguin(false)
      }, 3500)
    }
  }, [isInView, penguin])

  return (
    <div ref={ref} className="relative flex items-center justify-center mt-12">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={showPenguin ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-4"
      >
        {showPenguin && (
          <>
            <ImagePenguin 
              variant={variant}
              animation={penguin.animation}
              size={70} 
              showSparkleEffect={penguin.showSparkle}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/30"
            >
              <span className="text-sm text-soft-charcoal font-medium">
                Happy New Year 2026! 🐧
              </span>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  )
}

