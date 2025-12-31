'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AmbientGlow from './AmbientGlow'

export default function Section2Lyrics() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)
  
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" })
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" })
  const isInView3 = useInView(ref3, { once: true, margin: "-100px" })
  const isInView4 = useInView(ref4, { once: true, margin: "-100px" })
  const isInView5 = useInView(ref5, { once: true, margin: "-100px" })
  const isInView6 = useInView(ref6, { once: true, margin: "-100px" })

  return (
    <section className="min-h-[50vh] bg-warm-beige flex items-center justify-center px-6 py-12 relative overflow-hidden">
      <AmbientGlow color="warm" size="md" position="center" />
      
      <div className="max-w-4xl w-full space-y-10 relative z-10">
        
        {/* 1. "Before 2025 ends…" - small, soft */}
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

        {/* 2. "I wanted to say a few things." - calm, centered */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-soft-charcoal">
            I wanted to say a few things.
          </h2>
        </motion.div>

        {/* 3. "I'm glad you're here." - single calm card */}
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="bg-white/25 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md border border-white/30">
            <p className="text-2xl md:text-3xl font-serif text-soft-charcoal text-center leading-relaxed">
              I'm glad you're here.
            </p>
          </div>
        </motion.div>

        {/* 4. "You make me smile" & "You make me laugh" - simple floating text */}
        <div ref={ref4} className="space-y-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="text-xl md:text-2xl font-light text-soft-charcoal/80"
          >
            You make me smile.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            className="text-xl md:text-2xl font-light text-soft-charcoal/80"
          >
            You make me laugh.
          </motion.p>
        </div>

        {/* 5. "You stay." - calm, slower reveal */}
        <motion.div
          ref={ref5}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.6 }}
          className="text-center py-6"
        >
          <p className="text-3xl md:text-4xl font-serif text-soft-charcoal">
            You stay.
          </p>
        </motion.div>

        {/* 6. "You care." - final calm line */}
        <motion.div
          ref={ref6}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.8 }}
          className="text-center"
        >
          <p className="text-3xl md:text-4xl font-serif text-soft-charcoal">
            You care.
          </p>
          
          {/* Subtle outline heart - calm visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView6 ? { opacity: 0.15, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 2, delay: 1.5 }}
            className="mt-8 text-6xl text-soft-charcoal"
          >
            ♡
          </motion.div>
        </motion.div>

        {/* 7. Gentle transition heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
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
