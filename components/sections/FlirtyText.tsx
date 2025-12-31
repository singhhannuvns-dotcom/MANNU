'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const flirtyLines = [
  {
    text: "I know you think about me.",
    subtext: "Don't worry, I think about you too.",
    position: 'left'
  },
  {
    text: "You're not easy to forget.",
    subtext: "Trust me, I tried.",
    position: 'right'
  },
  {
    text: "I could write a book about the way you smile.",
    subtext: "But I'd rather just keep it to myself.",
    position: 'left'
  },
  {
    text: "You're dangerous, you know that?",
    subtext: "The kind of dangerous I don't mind losing to.",
    position: 'right'
  },
  {
    text: "I'm not good at this.",
    subtext: "But for you, I'll pretend I am.",
    position: 'center'
  }
]

export default function FlirtyText() {
  return (
    <section className="relative w-full min-h-screen bg-dark-secondary section-padding">
      <div className="max-w-6xl mx-auto space-y-32">
        {flirtyLines.map((line, index) => (
          <ScrollReveal 
            key={index} 
            variant="slideUp" 
            delay={0.2}
            className={`
              ${line.position === 'left' ? 'text-left' : ''}
              ${line.position === 'right' ? 'text-right' : ''}
              ${line.position === 'center' ? 'text-center' : ''}
            `}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group cursor-default"
            >
              {/* Main text */}
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-text-primary mb-6 leading-tight group-hover:text-accent-gold transition-colors duration-500">
                {line.text}
              </h2>
              
              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg sm:text-xl lg:text-2xl text-text-secondary font-light italic group-hover:text-accent-wine transition-colors duration-500"
              >
                {line.subtext}
              </motion.p>

              {/* Decorative line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-8 h-px bg-gradient-to-r from-transparent via-accent-plum to-transparent opacity-30"
              />
            </motion.div>
          </ScrollReveal>
        ))}

        {/* Final statement */}
        <ScrollReveal variant="fadeIn" delay={0.3}>
          <div className="text-center pt-20">
            <motion.p
              whileHover={{ scale: 1.05, textShadow: '0 0 20px rgba(212, 175, 55, 0.6)' }}
              className="font-serif text-2xl sm:text-4xl gradient-text tracking-wide"
            >
              You make it impossible not to care.
            </motion.p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

