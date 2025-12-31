'use client'

import { motion } from 'framer-motion'
import KineticText from './KineticText'
import ParallaxLayer from './ParallaxLayer'
import HeroLightOrbs from './HeroLightOrbs'
import HeroFloatingElements from './HeroFloatingElements'
import HeroScrollReactive from './HeroScrollReactive'
import HeroCenterGlow from './HeroCenterGlow'
import HeroScrollCue from './HeroScrollCue'
import HeroPenguin from './HeroPenguin'

export default function Section1Landing() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-warm-cream via-warm-beige to-dusty-rose px-6 relative overflow-hidden">
      {/* Layered background motion - fades in first */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0 }}
        className="absolute inset-0"
      >
        <HeroScrollReactive />
      </motion.div>

      {/* Light orbs - fade in second */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0"
      >
        <HeroLightOrbs />
      </motion.div>

      {/* Center focus glow */}
      <HeroCenterGlow />
      
      {/* Text appears third */}
      <ParallaxLayer speed={-0.3}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center max-w-2xl relative z-10"
        >
          <div className="relative">
            <KineticText
              text="Hi again, Manasvi."
              type="word"
              style="float"
              delay={1}
              className="text-5xl md:text-7xl font-serif text-soft-charcoal mb-8"
            />
            {/* Cute heart decoration */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 2.2, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -right-4 top-0 text-4xl"
            >
              💕
            </motion.div>
          </div>
          
          <KineticText
            text="I made something for you."
            type="word"
            style="emerge"
            delay={1.8}
            className="text-xl md:text-2xl text-soft-charcoal/80 mb-12"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.4 }}
            className="text-sm md:text-base text-soft-charcoal/60 italic"
          >
            Scroll slowly. No rush.
          </motion.p>
          
          <div className="mt-16">
            <HeroScrollCue />
          </div>
        </motion.div>
      </ParallaxLayer>

      {/* Floating elements - appear last */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute inset-0"
      >
        <HeroFloatingElements />
      </motion.div>

      {/* Penguin peeks in */}
      <HeroPenguin />
    </section>
  )
}

