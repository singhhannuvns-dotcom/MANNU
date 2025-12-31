'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

// Placeholder cat meme data - replace with actual images
const catMemes = [
  {
    caption: "This is how I smile when you reply",
    alt: "Happy cat smiling",
    placeholder: "😊🐱"
  },
  {
    caption: "POV: you made someone's year better",
    alt: "Cat looking grateful",
    placeholder: "🥺🐱"
  },
  {
    caption: "Me waiting for your text like",
    alt: "Cat patiently waiting",
    placeholder: "⏰🐱"
  },
  {
    caption: "When you say something nice:",
    alt: "Blushing cat",
    placeholder: "😳🐱"
  },
  {
    caption: "Trying to act casual around you",
    alt: "Awkward cat",
    placeholder: "😌🐱"
  },
  {
    caption: "You: *exists* | Me:",
    alt: "Cat heart eyes",
    placeholder: "😍🐱"
  }
]

function CatCard({ caption, alt, placeholder, index }: { 
  caption: string
  alt: string
  placeholder: string
  index: number 
}) {
  return (
    <ScrollReveal variant="scale" delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
      >
        {/* Image placeholder */}
        <div className="aspect-square bg-gradient-to-br from-champagne to-rose-blush flex items-center justify-center text-7xl p-8">
          {placeholder}
        </div>

        {/* Caption */}
        <div className="p-5">
          <p className="text-base sm:text-lg text-text-primary font-light text-center group-hover:text-warm-gold transition-colors duration-300">
            {caption}
          </p>
        </div>
      </motion.div>
    </ScrollReveal>
  )
}

export default function CatMemes() {
  return (
    <section className="relative w-full min-h-screen rose-gradient section-padding">
      <div className="max-w-7xl mx-auto">
        
        <ScrollReveal variant="slideUp">
          <h2 className="font-serif text-4xl sm:text-6xl text-center text-text-primary mb-4">
            Okay but also
          </h2>
          <p className="text-center text-text-secondary text-lg mb-16">
            Some things that reminded me of us
          </p>
        </ScrollReveal>

        {/* Pinterest-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {catMemes.map((meme, index) => (
            <CatCard
              key={index}
              caption={meme.caption}
              alt={meme.alt}
              placeholder={meme.placeholder}
              index={index}
            />
          ))}
        </div>

        {/* Gentle transition text */}
        <ScrollReveal variant="fadeIn" delay={0.5}>
          <div className="mt-20 text-center">
            <p className="text-xl sm:text-2xl text-text-secondary font-light italic">
              (Replace these with actual cat images in /public/images/cats/)
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

