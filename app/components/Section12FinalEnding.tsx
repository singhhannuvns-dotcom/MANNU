'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function Section12FinalEnding() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section 
      id="final-ending"
      className="min-h-screen bg-gradient-to-b from-[#2a2a2a] to-soft-charcoal flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Simple elegant background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-muted-rose/8 via-transparent to-transparent" />
      
      <div ref={ref} className="max-w-3xl w-full relative z-10">
        {/* Clean content container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center space-y-10"
        >
          {/* First line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-3xl font-light text-warm-cream/70 tracking-wide"
          >
            That's all.
          </motion.p>

          {/* Second line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl font-light text-warm-cream/60 tracking-wide"
          >
            I just wanted you to know—
          </motion.p>

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="pt-8 pb-6"
          >
            <p className="text-4xl md:text-5xl lg:text-6xl font-light text-warm-cream tracking-wide leading-relaxed">
              you matter to me.
            </p>
          </motion.div>

          {/* Simple divider line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 0.2 } : { scaleX: 0, opacity: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="w-32 h-[1px] bg-warm-cream mx-auto my-8"
          />

          {/* Subtle heart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
            transition={{ duration: 1.5, delay: 2.2 }}
            className="text-5xl text-warm-cream"
          >
            ♡
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

