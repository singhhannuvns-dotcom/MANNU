'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

export default function MusicMood() {
  return (
    <section className="relative w-full min-h-screen plum-gradient section-padding flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Vinyl record visual */}
        <ScrollReveal variant="scale" delay={0.2}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-16 relative"
          >
            {/* Outer circle (vinyl) */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-dark-tertiary via-accent-plum to-dark-tertiary border-4 border-accent-gold/20" />
            
            {/* Inner circle (label) */}
            <div className="absolute inset-16 sm:inset-20 rounded-full bg-dark-primary border-2 border-accent-gold/30 flex items-center justify-center">
              <div className="text-center">
                <p className="text-accent-gold text-sm sm:text-base">Now Playing</p>
              </div>
            </div>

            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-accent-gold/50" />
            
            {/* Grooves */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-accent-plum/20"
                style={{
                  inset: `${20 + i * 8}px`,
                }}
              />
            ))}
          </motion.div>
        </ScrollReveal>

        {/* Song details */}
        <div className="text-center space-y-8">
          <ScrollReveal variant="fadeIn" delay={0.4}>
            <h2 className="font-serif text-4xl sm:text-6xl text-text-primary mb-4">
              This song feels like you
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fadeIn" delay={0.6}>
            <p className="text-xl sm:text-2xl text-accent-gold/80 font-light italic">
              "Slowdive - When the Sun Hits"
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeIn" delay={0.8}>
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Overwhelming. Beautiful. A little bit painful.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeIn" delay={1}>
            <p className="text-base sm:text-lg text-text-secondary/60 max-w-xl mx-auto leading-relaxed">
              The kind of sound that makes you feel everything at once
              and nothing at all.
            </p>
          </ScrollReveal>

          {/* Decorative audio wave */}
          <ScrollReveal variant="scale" delay={1.2}>
            <div className="flex items-center justify-center gap-1 mt-12">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: [20, 40, 20],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: 'easeInOut'
                  }}
                  className="w-1 bg-accent-gold rounded-full"
                  style={{ height: 20 }}
                />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fadeIn" delay={1.5}>
            <p className="text-sm text-text-secondary/40 italic mt-8">
              Listen to it when you think of me.
            </p>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}

