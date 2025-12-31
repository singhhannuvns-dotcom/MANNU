'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AmbientGlow from './AmbientGlow'
import KineticText from './KineticText'
import InteractiveButton from './InteractiveButton'
import ParallaxLayer from './ParallaxLayer'
import PlayfulSticker from './PlayfulSticker'
import TextReactionPenguin from './TextReactionPenguin'

const phrases = [
  "Choosing you",
  "Choosing you, again",
  "Still choosing you",
  "Always choosing you",
  "Choosing you every time",
  "It's always been you",
]

export default function Section4Decision() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section className="min-h-[50vh] bg-warm-cream flex items-center justify-center px-6 py-10 relative overflow-hidden">
      <AmbientGlow color="rose" size="lg" position="center" />
      
      <ParallaxLayer speed={-0.2}>
        <div className="max-w-4xl w-full text-center relative z-10">
          <PlayfulSticker emoji="💝" position="left" delay={0.5} rotation={-15} />
          <PlayfulSticker emoji="✨" position="right" delay={0.7} rotation={20} />
          <KineticText
            text="My best decision of 2025"
            type="word"
            style="float"
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-soft-charcoal mb-12"
          />

          <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="button"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
            >
              <InteractiveButton
                onClick={() => setRevealed(true)}
                glowColor="rose"
                className="px-12 py-4 bg-gradient-to-r from-muted-rose/90 to-dusty-rose/90 backdrop-blur-sm text-white text-xl rounded-full shadow-lg transition-all duration-300 border border-white/20"
              >
                Reveal
              </InteractiveButton>
            </motion.div>
          ) : (
            <motion.div
              key="phrases"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8 mt-12 relative"
            >
              {/* Penguin claps for this sweet moment */}
              <TextReactionPenguin reaction="clap" position="bottom" size={60} delay={1000} />
              {phrases.map((phrase, index) => (
                <motion.div
                  key={phrase}
                  initial={{ opacity: 0, x: -50, filter: 'blur(15px)', scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)', scale: 1 }}
                  transition={{
                    delay: index * 0.35,
                    duration: 1,
                    ease: [0.19, 1.0, 0.22, 1.0], // Fabric-like easing
                  }}
                >
                  <KineticText
                    text={phrase}
                    type="letter"
                    style="emerge"
                    delay={index * 0.35}
                    className="text-3xl md:text-5xl lg:text-6xl font-serif text-soft-charcoal"
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </ParallaxLayer>
    </section>
  )
}

