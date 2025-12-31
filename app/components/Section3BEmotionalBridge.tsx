'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'
import AmbientGlow from './AmbientGlow'
import ImagePenguin from './ImagePenguin'
import { usePenguinInteractions } from '../hooks/usePenguinInteractions'
import { usePerformance } from '../hooks/usePerformance'

export default function Section3BEmotionalBridge() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { isLowEnd } = usePerformance()
  const [variant, setVariant] = useState<'default' | 'loving'>('default')
  const penguin = usePenguinInteractions()

  useEffect(() => {
    if (!isInView) return

    // Penguin animation sequence
    const timeline = [
      { time: 2000, action: () => penguin.triggerWalk() },
      { time: 4000, action: () => penguin.resetToIdle() },
      { time: 6000, action: () => penguin.triggerJump() },
      { time: 7000, action: () => penguin.resetToIdle() },
      { time: 9000, action: () => { setVariant('loving'); penguin.triggerHeart() } },
      { time: 12000, action: () => penguin.resetToIdle() },
    ]

    const timers = timeline.map(({ time, action }) =>
      setTimeout(action, time)
    )

    return () => timers.forEach(clearTimeout)
  }, [isInView, penguin])

  return (
    <section className="min-h-[50vh] bg-gradient-to-b from-warm-beige to-warm-cream flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Pulsing light ring behind card */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(232, 180, 184, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Soft warm glow */}
      <AmbientGlow color="warm" size="lg" position="center" />
      
      {/* Light heart particles at top */}
      {!isLowEnd && (
        <div className="absolute top-20 left-0 right-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-20"
              style={{
                left: `${15 + i * 15}%`,
                top: `${i % 2 === 0 ? 0 : 20}px`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
              }}
            >
              💕
            </motion.div>
          ))}
        </div>
      )}
      
      <div ref={ref} className="max-w-3xl w-full relative z-10">
        {/* Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          {/* Card glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-muted-rose/20 to-warm-cream/20 rounded-[32px] blur-2xl" />
          
          {/* Glass card */}
          <div className="relative bg-white/40 backdrop-blur-xl rounded-[32px] p-8 md:p-12 lg:p-16 shadow-2xl border border-white/60">
            {/* Text with hierarchy */}
            <div className="space-y-6 text-center">
              {/* Line 1: Small, faded */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                className="text-xl md:text-2xl font-light text-soft-charcoal/60 leading-relaxed"
              >
                It wasn't my best year…
              </motion.p>

              {/* Line 2: Larger, warmer */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
                className="text-2xl md:text-3xl lg:text-4xl font-normal text-muted-rose leading-relaxed"
              >
                but I met you.
              </motion.p>

              {/* Line 3: Bold, emotional highlight */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 1, delay: 1.5, ease: 'easeOut' }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-soft-charcoal leading-relaxed pt-4"
              >
                And somehow, that changed everything.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Cute penguin with interactions */}
        {!isLowEnd && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute -bottom-16 left-4 md:left-8"
          >
            <ImagePenguin 
              variant={variant}
              animation={penguin.animation}
              size={100}
              showHeartEffect={penguin.showHeart}
              showSparkleEffect={penguin.showSparkle}
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
