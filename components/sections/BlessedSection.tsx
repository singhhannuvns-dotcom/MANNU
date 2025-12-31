'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

export default function BlessedSection() {
  return (
    <section className="relative w-full min-h-screen bg-dark-primary section-padding flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Soft ambient glow */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-96 h-96 bg-accent-plum rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 text-center space-y-20">
          
          <ScrollReveal variant="fadeIn" duration={1.5}>
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-text-primary tracking-tight leading-tight">
              Blessed
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fadeIn" delay={0.5} duration={1.5}>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-text-secondary font-light tracking-wide">
              That's the word.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeIn" delay={1} duration={1.5}>
            <p className="text-xl sm:text-2xl text-accent-gold/80 font-light max-w-3xl mx-auto leading-relaxed">
              This year gave me you.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeIn" delay={1.5} duration={1.5}>
            <p className="text-lg sm:text-xl text-text-secondary/60 font-light max-w-2xl mx-auto leading-relaxed">
              Even if you never know how much that means.
            </p>
          </ScrollReveal>

          {/* Decorative divider */}
          <ScrollReveal variant="scale" delay={2}>
            <motion.div
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="w-2 h-2 mx-auto bg-accent-gold rounded-full"
            />
          </ScrollReveal>

          <ScrollReveal variant="fadeIn" delay={2.3} duration={1.5}>
            <p className="text-base sm:text-lg text-text-secondary/50 font-light italic max-w-xl mx-auto">
              Some people change everything without even trying.
            </p>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}

