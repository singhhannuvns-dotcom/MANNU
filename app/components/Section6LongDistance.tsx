'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'
import PlayfulSticker from './PlayfulSticker'
import KineticText from './KineticText'

const cards = [
  {
    title: "Calls that accidentally lasted forever",
    text: "We'd start with 'just 10 minutes'\nand suddenly it was… morning again.",
    icon: "📞",
    effect: "heart",
  },
  {
    title: "Movie nights we barely watched",
    text: "Same movie.\nDifferent screens.\nSomehow still cuddling.",
    icon: "🎬",
    effect: "glow",
  },
  {
    title: "Gaming… and pretending to be serious",
    text: "Winning didn't matter.\nPlaying with you did.",
    icon: "🎮",
    effect: "bounce",
  },
  {
    title: "Different places. Same chaos.",
    text: "Miles apart…\nbut somehow always in the same moment.",
    icon: "💕",
    effect: "warmGlow",
  },
]

function Card({ 
  title, 
  text, 
  index, 
  icon, 
  effect 
}: { 
  title: string
  text: string
  index: number
  icon: string
  effect: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showHeart, setShowHeart] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleHover = () => {
    if (effect === 'heart' && mounted) {
      setShowHeart(true)
      setTimeout(() => setShowHeart(false), 1000)
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)', scale: 0.9, rotateY: -5 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        filter: 'blur(0px)', 
        scale: 1,
        rotateY: 0,
      } : { 
        opacity: 0, 
        y: 40, 
        filter: 'blur(8px)', 
        scale: 0.9,
        rotateY: -5,
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        rotateY: effect === 'bounce' ? [0, 2, -2, 0] : 0,
        rotateZ: effect === 'bounce' ? [0, 1, -1, 0] : 0,
      }}
      onHoverStart={handleHover}
      transition={{ 
        delay: index * 0.12, 
        duration: 0.4, 
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className={`bg-white/35 backdrop-blur-lg rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:bg-white/45 transition-all duration-200 border border-white/30 relative group ${
        effect === 'warmGlow' ? 'hover:border-muted-rose/50' : ''
      }`}
      style={{ 
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Icon badge */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ delay: index * 0.12 + 0.3, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        className="absolute -top-5 -right-5 text-5xl bg-white/80 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-2 border-white/50"
      >
        {icon}
      </motion.div>

      {/* Heart pop effect */}
      {effect === 'heart' && showHeart && (
        <motion.div
          initial={{ scale: 0, opacity: 0, y: 0 }}
          animate={{ 
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            y: -50,
          }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 text-4xl pointer-events-none z-10"
        >
          💖
        </motion.div>
      )}

      {/* Warm glow effect on last card */}
      {effect === 'warmGlow' && (
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'radial-gradient(circle at center, rgba(232, 180, 184, 0.2) 0%, transparent 70%)',
          }}
        />
      )}

      <h3 className="text-xl md:text-2xl font-serif text-soft-charcoal mb-3 group-hover:text-muted-rose transition-colors duration-200">
        {title}
      </h3>
      <p className="text-base md:text-lg text-soft-charcoal/70 leading-relaxed whitespace-pre-line font-light">
        {text}
      </p>
    </motion.div>
  )
}

export default function Section6LongDistance() {
  return (
    <section className="min-h-[50vh] bg-warm-beige py-8 px-6 relative overflow-hidden">
      <PlayfulSticker emoji="💭" position="left" delay={0.3} rotation={-10} />
      <PlayfulSticker emoji="🌙" position="right" delay={0.5} rotation={15} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <KineticText
            text="Funny how distance forgot about us."
            type="word"
            style="float"
            className="text-3xl md:text-5xl font-serif text-soft-charcoal"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="text-lg text-soft-charcoal/60 mt-4 italic"
          >
            (or maybe we just didn't care)
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

