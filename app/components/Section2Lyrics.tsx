'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AmbientGlow from './AmbientGlow'

export default function Section2Lyrics() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" })
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" })
  const isInView3 = useInView(ref3, { once: true, margin: "-100px" })
  const isInView4 = useInView(ref4, { once: true, margin: "-100px" })

  return (
    <section className="min-h-[50vh] bg-warm-beige flex items-center justify-center px-6 py-12 relative overflow-hidden">
      <AmbientGlow color="warm" size="md" position="center" />
      
      <div className="max-w-4xl w-full space-y-10 relative z-10">
        
        {/* 1. "Before 2025 ends…" */}
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-soft-charcoal/60 font-light italic">
            Before 2025 ends…
          </p>
        </motion.div>

        {/* 2. "I wasn't trying to say anything important." */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-light text-soft-charcoal">
            I wasn't trying to say anything important.
          </p>
        </motion.div>

        {/* 3. "I just didn't want this moment to pass unnoticed." */}
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.6 }}
          className="text-center space-y-2"
        >
          <p className="text-2xl md:text-3xl font-light text-soft-charcoal leading-relaxed">
            I just didn't want this moment
          </p>
          <p className="text-2xl md:text-3xl font-light text-soft-charcoal leading-relaxed">
            to pass unnoticed.
          </p>
        </motion.div>

        {/* 4. "And somehow, it felt right that you were part of it." */}
        <motion.div
          ref={ref4}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.9 }}
          className="text-center space-y-2 pt-6"
        >
          <p className="text-2xl md:text-3xl font-light text-soft-charcoal leading-relaxed">
            And somehow,
          </p>
          <p className="text-2xl md:text-3xl font-light text-soft-charcoal leading-relaxed">
            it felt right
          </p>
          <p className="text-2xl md:text-3xl font-light text-soft-charcoal leading-relaxed">
            that you were part of it.
          </p>
        </motion.div>

        {/* Gentle transition heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 2 }}
          className="text-center pt-16"
        >
          <p className="text-xl md:text-2xl font-light text-soft-charcoal/70 italic">
            My small recap with you, hehe
          </p>
        </motion.div>

      </div>
    </section>
  )
}
