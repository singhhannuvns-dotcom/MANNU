'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ExitSectionProps {
  onMusicStop: () => void
}

export default function ExitSection({ onMusicStop }: ExitSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin: '-40%' })

  useEffect(() => {
    // Fade out music when this section is in view
    if (isInView) {
      const timer = setTimeout(() => {
        onMusicStop()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isInView, onMusicStop])

  return (
    <section 
      ref={ref}
      className="relative w-full h-screen bg-gradient-to-b from-dark-primary via-dark-secondary to-black flex items-center justify-center"
    >
      
      {/* Fading particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-gold rounded-full"
            initial={{ 
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
              opacity: 0.6
            }}
            animate={{ 
              opacity: 0,
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1180
            }}
            transition={{ 
              duration: 4 + Math.random() * 3,
              delay: Math.random() * 2,
              ease: 'easeOut'
            }}
          />
        ))}
      </div>

      {/* Final message */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-text-primary mb-8 tracking-tight">
            I'll be here
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1, ease: 'easeOut' }}
        >
          <p className="text-xl sm:text-2xl text-text-secondary font-light">
            Whenever you're ready.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2, ease: 'easeOut' }}
        >
          <p className="text-sm sm:text-base text-accent-gold/40 mt-12 italic">
            Or not. That's okay too.
          </p>
        </motion.div>

        {/* Final fade to black */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3, delay: 4 }}
          className="absolute inset-0 bg-black pointer-events-none"
        />
      </div>

    </section>
  )
}

