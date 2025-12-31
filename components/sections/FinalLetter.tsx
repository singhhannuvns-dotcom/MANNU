'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const letterLines = [
  "I'm not asking for anything.",
  "No expectations. No timelines.",
  "Just wanted you to know—",
  "You matter.",
  "More than you probably realize.",
  "And if nothing comes of this?",
  "That's okay too.",
  "Some people are meant to be felt,",
  "not held."
]

export default function FinalLetter() {
  return (
    <section className="relative w-full min-h-screen bg-dark-primary section-padding flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Soft spotlight effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <div className="w-[800px] h-[800px] bg-accent-gold rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 space-y-12">
          
          <ScrollReveal variant="fadeIn">
            <h2 className="font-serif text-3xl sm:text-5xl text-text-primary mb-16 text-center">
              One last thing
            </h2>
          </ScrollReveal>

          {/* Letter content */}
          <div className="space-y-8 max-w-2xl mx-auto">
            {letterLines.map((line, index) => (
              <ScrollReveal 
                key={index} 
                variant="fadeIn" 
                delay={index * 0.15}
                duration={1}
              >
                <motion.p
                  whileHover={{ x: 10, color: '#d4af37' }}
                  className={`
                    text-text-primary transition-colors duration-300
                    ${index === 3 || index === 4 || index === 8 
                      ? 'text-2xl sm:text-3xl font-serif text-accent-gold' 
                      : 'text-lg sm:text-xl font-light'
                    }
                    ${index === 5 || index === 7 
                      ? 'italic text-text-secondary' 
                      : ''
                    }
                  `}
                >
                  {line}
                </motion.p>
              </ScrollReveal>
            ))}
          </div>

          {/* Signature */}
          <ScrollReveal variant="fadeIn" delay={letterLines.length * 0.15 + 0.5}>
            <div className="mt-20 text-right pr-8">
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="font-serif text-2xl sm:text-3xl text-accent-gold/60 italic"
              >
                — Always
              </motion.p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}

