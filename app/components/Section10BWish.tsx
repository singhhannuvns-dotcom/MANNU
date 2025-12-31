'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import GiftWrapVideo from './GiftWrapVideo'
import AmbientGlow from './AmbientGlow'

export default function Section10BWish() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      ref={ref}
      className="min-h-[70vh] bg-gradient-to-b from-dusty-rose via-warm-beige to-warm-cream flex items-center justify-center px-6 py-16 relative overflow-hidden"
    >
      {/* Soft warm glow */}
      <AmbientGlow color="warm" size="md" position="center" />
      
      <div className="max-w-3xl w-full relative z-10">
        {/* Title with soft glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center mb-12 relative"
        >
          {/* Soft glow behind title */}
          <motion.div
            className="absolute inset-0 blur-3xl opacity-30"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              background: 'radial-gradient(circle, rgba(232, 180, 184, 0.4) 0%, transparent 70%)',
            }}
          />
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-soft-charcoal relative z-10">
            I wish T_T
          </h2>
        </motion.div>

        {/* Gift-wrapped video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          <GiftWrapVideo
            videoSrc="/videos/wish.mp4"
            helperText="Open it…"
          />
        </motion.div>
      </div>
    </section>
  )
}

