'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import KineticText from './KineticText'

const finalLines = [
  "Happy New Year, Manasvi.",
  "",
  "",
  "I don't really have anything big to say.",
  "",
  "",
  "I just like the way",
  "'I hate you'",
  "sounds when you say it.",
  "",
  "",
  "Somehow,",
  "it never feels like hate.",
]

function FinalLine({ text, delay }: { text: string; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  if (!text) {
    return <div className="h-6" />
  }

  return (
    <div ref={ref}>
      {isInView && (
        <KineticText
          text={text}
          type="word"
          style="emerge"
          delay={delay * 0.2}
          className="text-2xl md:text-4xl lg:text-5xl font-light text-warm-cream leading-relaxed text-center"
        />
      )}
    </div>
  )
}

export default function Section11FinalWish() {
  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-soft-charcoal to-[#2a2a2a] flex items-center justify-center px-6 py-16 relative overflow-hidden">
      <div className="max-w-4xl space-y-12 relative z-10">
        {finalLines.map((line, index) => (
          <FinalLine key={index} text={line} delay={index} />
        ))}
      </div>
    </section>
  )
}

