'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Countdown() {
  const [count, setCount] = useState<number | null>(null)
  const [showQuestion, setShowQuestion] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    // Start countdown when section is visible
    const timer = setTimeout(() => {
      if (!hasStarted) {
        setHasStarted(true)
        setCount(3)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [hasStarted])

  useEffect(() => {
    if (count === null || count === 0) return

    const timer = setTimeout(() => {
      if (count > 1) {
        setCount(count - 1)
      } else {
        setCount(0)
        setTimeout(() => {
          setShowQuestion(true)
        }, 800)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [count])

  // Calculate background brightness based on countdown
  const getBrightness = () => {
    if (showQuestion) return 'from-warm-white via-champagne to-rose-blush'
    if (count === null) return 'from-soft-cream to-warm-beige'
    if (count === 0) return 'from-champagne to-rose-blush'
    return 'from-soft-cream to-warm-beige'
  }

  return (
    <section className={`relative w-full min-h-screen flex items-center justify-center transition-all duration-1000 bg-gradient-to-br ${getBrightness()} section-padding`}>
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        
        <AnimatePresence mode="wait">
          {!showQuestion && count !== null && (
            <motion.div
              key={`count-${count}`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative"
            >
              <h1 className="font-serif text-[12rem] sm:text-[16rem] lg:text-[20rem] text-warm-gold leading-none">
                {count === 0 ? '🎉' : count}
              </h1>
              
              {count > 0 && (
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-full h-full border-4 border-warm-gold/20 rounded-full" />
                </motion.div>
              )}
            </motion.div>
          )}

          {showQuestion && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-text-primary mb-6 leading-tight">
                So...
              </h2>
              <p className="text-2xl sm:text-3xl lg:text-4xl text-text-secondary font-light">
                Can I ask you something?
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

