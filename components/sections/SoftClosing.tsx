'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

export default function SoftClosing() {
  return (
    <section className="relative w-full min-h-screen warm-gradient section-padding flex items-center">
      <div className="max-w-4xl mx-auto w-full text-center space-y-16">
        
        {/* Main closing message */}
        <ScrollReveal variant="fadeIn" duration={1.2}>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-text-primary leading-tight">
            Here's to new beginnings
          </h2>
        </ScrollReveal>

        <ScrollReveal variant="fadeIn" delay={0.5} duration={1.2}>
          <p className="text-2xl sm:text-3xl text-text-secondary font-light max-w-2xl mx-auto leading-relaxed">
            And to people who make them worth looking forward to.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fadeIn" delay={1} duration={1.2}>
          <p className="text-xl sm:text-2xl text-warm-gold font-light italic">
            Happy New Year
          </p>
        </ScrollReveal>

        {/* Soft divider */}
        <ScrollReveal variant="scale" delay={1.5}>
          <motion.div
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="flex justify-center gap-2 my-12"
          >
            <div className="w-2 h-2 bg-warm-gold rounded-full" />
            <div className="w-2 h-2 bg-muted-rose rounded-full" />
            <div className="w-2 h-2 bg-warm-gold rounded-full" />
          </motion.div>
        </ScrollReveal>

        {/* Final gentle note */}
        <ScrollReveal variant="fadeIn" delay={2} duration={1.2}>
          <p className="text-base sm:text-lg text-text-light font-light max-w-xl mx-auto">
            No expectations. No pressure.
            <br />
            Just wanted you to know you're thought of.
          </p>
        </ScrollReveal>

        {/* Signature */}
        <ScrollReveal variant="fadeIn" delay={2.5} duration={1}>
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="font-serif text-xl sm:text-2xl text-text-secondary italic mt-16"
          >
            — With warmth
          </motion.p>
        </ScrollReveal>

        {/* Final fade element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 3 }}
          className="h-32"
        />

      </div>
    </section>
  )
}

