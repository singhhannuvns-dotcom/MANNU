'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const wholesomeLines = [
  {
    text: "You know that feeling when someone texts you back?",
    subtext: "Yeah, that one. You're kind of responsible for that.",
    position: 'left'
  },
  {
    text: "I don't say this to everyone...",
    subtext: "But you make Monday mornings slightly more bearable.",
    position: 'right'
  },
  {
    text: "Fun fact:",
    subtext: "My phone lights up differently when it's you.",
    position: 'center'
  },
  {
    text: "Not to be dramatic,",
    subtext: "But you're kind of the reason I check my notifications.",
    position: 'left'
  },
  {
    text: "Here's the thing—",
    subtext: "You're surprisingly easy to think about.",
    position: 'right'
  }
]

export default function WholesomeFlirty() {
  return (
    <section className="relative w-full min-h-screen bg-warm-beige section-padding">
      <div className="max-w-6xl mx-auto space-y-28">
        {wholesomeLines.map((line, index) => (
          <ScrollReveal 
            key={index} 
            variant="slideUp" 
            delay={0.15}
            className={`
              ${line.position === 'left' ? 'text-left' : ''}
              ${line.position === 'right' ? 'text-right' : ''}
              ${line.position === 'center' ? 'text-center' : ''}
            `}
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="group cursor-default"
            >
              {/* Main text */}
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-text-primary mb-5 leading-tight group-hover:text-warm-gold transition-colors duration-500">
                {line.text}
              </h2>
              
              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg sm:text-xl lg:text-2xl text-text-secondary font-light group-hover:text-muted-rose transition-colors duration-500"
              >
                {line.subtext}
              </motion.p>

              {/* Decorative line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.7, duration: 1 }}
                className="mt-6 h-px bg-gradient-to-r from-transparent via-muted-rose/30 to-transparent"
              />
            </motion.div>
          </ScrollReveal>
        ))}

        {/* Final gentle statement */}
        <ScrollReveal variant="fadeIn" delay={0.2}>
          <div className="text-center pt-16">
            <motion.p
              whileHover={{ scale: 1.03 }}
              className="font-serif text-2xl sm:text-4xl text-warm-gold tracking-wide"
            >
              So yeah, happy new year to you especially.
            </motion.p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

