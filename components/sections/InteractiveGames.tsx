'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

export default function InteractiveGames() {
  const [choice1, setChoice1] = useState<string | null>(null)
  const [choice2, setChoice2] = useState<string | null>(null)
  const [hearts, setHearts] = useState(0)

  const handleChoice1 = (choice: string) => {
    setChoice1(choice)
  }

  const handleChoice2 = (choice: string) => {
    setChoice2(choice)
  }

  const handleHeartClick = () => {
    setHearts(prev => prev + 1)
  }

  return (
    <section className="relative w-full min-h-screen plum-gradient section-padding">
      <div className="max-w-4xl mx-auto space-y-24">
        
        {/* Intro */}
        <ScrollReveal variant="slideUp">
          <h2 className="font-serif text-4xl sm:text-6xl text-center text-text-primary mb-12">
            Let's play a little
          </h2>
          <p className="text-center text-text-secondary text-lg">
            No pressure. Just curious what you'd choose.
          </p>
        </ScrollReveal>

        {/* Game 1: Binary choice */}
        <ScrollReveal variant="fadeIn" delay={0.2}>
          <div className="bg-dark-tertiary/50 backdrop-blur-sm border border-accent-plum/30 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-serif text-text-primary mb-8 text-center">
              If we had one evening together...
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.button
                whileHover={{ scale: 1.05, borderColor: 'rgba(212, 175, 55, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleChoice1('quiet')}
                className={`p-6 border-2 rounded-xl transition-all duration-300 ${
                  choice1 === 'quiet' 
                    ? 'border-accent-gold bg-accent-gold/10' 
                    : 'border-accent-plum/30 hover:border-accent-gold/40'
                }`}
              >
                <p className="text-lg text-text-primary">Quiet rooftop with stars</p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, borderColor: 'rgba(212, 175, 55, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleChoice1('drive')}
                className={`p-6 border-2 rounded-xl transition-all duration-300 ${
                  choice1 === 'drive' 
                    ? 'border-accent-gold bg-accent-gold/10' 
                    : 'border-accent-plum/30 hover:border-accent-gold/40'
                }`}
              >
                <p className="text-lg text-text-primary">Late night drive, no destination</p>
              </motion.button>
            </div>

            <AnimatePresence>
              {choice1 && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 text-center text-accent-gold italic"
                >
                  {choice1 === 'quiet' 
                    ? "Perfect. I'd bring wine and comfortable silence." 
                    : "Good choice. Music loud, thoughts quiet."}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* Game 2: Another choice */}
        <ScrollReveal variant="fadeIn" delay={0.3}>
          <div className="bg-dark-tertiary/50 backdrop-blur-sm border border-accent-plum/30 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-serif text-text-primary mb-8 text-center">
              What scares you more?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleChoice2('feeling')}
                className={`p-6 border-2 rounded-xl transition-all duration-300 ${
                  choice2 === 'feeling' 
                    ? 'border-accent-gold bg-accent-gold/10' 
                    : 'border-accent-plum/30 hover:border-accent-gold/40'
                }`}
              >
                <p className="text-lg text-text-primary">Feeling too much</p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleChoice2('nothing')}
                className={`p-6 border-2 rounded-xl transition-all duration-300 ${
                  choice2 === 'nothing' 
                    ? 'border-accent-gold bg-accent-gold/10' 
                    : 'border-accent-plum/30 hover:border-accent-gold/40'
                }`}
              >
                <p className="text-lg text-text-primary">Feeling nothing at all</p>
              </motion.button>
            </div>

            <AnimatePresence>
              {choice2 && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 text-center text-accent-gold italic"
                >
                  {choice2 === 'feeling' 
                    ? "I get it. Sometimes intensity is terrifying." 
                    : "Yeah. Numbness is its own kind of hell."}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* Game 3: Heart counter */}
        <ScrollReveal variant="fadeIn" delay={0.4}>
          <div className="bg-dark-tertiary/50 backdrop-blur-sm border border-accent-plum/30 rounded-2xl p-8 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-serif text-text-primary mb-6">
              How many times have you smiled today?
            </h3>
            <p className="text-text-secondary mb-8">
              Click for each one. I'm counting on you.
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleHeartClick}
              className="text-6xl sm:text-8xl transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]"
            >
              ❤️
            </motion.button>

            <AnimatePresence>
              {hearts > 0 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 text-3xl text-accent-gold"
                >
                  {hearts} {hearts === 1 ? 'smile' : 'smiles'}
                </motion.p>
              )}
            </AnimatePresence>

            {hearts >= 5 && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-text-secondary italic"
              >
                That's beautiful. Keep them coming.
              </motion.p>
            )}
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

