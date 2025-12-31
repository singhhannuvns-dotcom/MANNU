'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

// Placeholder video data - replace with actual video sources
const videos = [
  {
    src: '/videos/moment1.mp4',
    caption: 'When time stopped',
    poster: '/images/poster1.jpg'
  },
  {
    src: '/videos/moment2.mp4',
    caption: 'You, unaware',
    poster: '/images/poster2.jpg'
  },
  {
    src: '/videos/moment3.mp4',
    caption: 'Somewhere between hello and everything',
    poster: '/images/poster3.jpg'
  }
]

function VideoCard({ src, caption, poster, index }: { 
  src: string
  caption: string
  poster: string
  index: number 
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const isInView = useInView(ref, { margin: '-40% 0px -40% 0px' })

  // Auto-play when in view
  if (ref.current) {
    if (isInView) {
      ref.current.play().catch(() => {})
    } else {
      ref.current.pause()
    }
  }

  return (
    <ScrollReveal variant="fadeIn" delay={index * 0.2}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative w-full max-w-sm mx-auto aspect-[9/16] bg-dark-tertiary rounded-3xl overflow-hidden shadow-2xl border border-accent-plum/20 group"
      >
        {/* Video element */}
        <video
          ref={ref}
          src={src}
          poster={poster}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0 p-6 text-center"
        >
          <p className="text-lg sm:text-xl text-text-primary font-light italic drop-shadow-lg">
            {caption}
          </p>
        </motion.div>

        {/* Play indicator */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-accent-gold rounded-full opacity-60 animate-pulse" />
      </motion.div>
    </ScrollReveal>
  )
}

export default function VideoSection() {
  return (
    <section className="relative w-full min-h-screen bg-dark-secondary section-padding">
      <div className="max-w-7xl mx-auto">
        
        <ScrollReveal variant="slideUp">
          <h2 className="font-serif text-4xl sm:text-6xl text-center text-text-primary mb-8">
            Moments I replay
          </h2>
          <p className="text-center text-text-secondary text-lg mb-20">
            When no one's watching.
          </p>
        </ScrollReveal>

        {/* Video grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              src={video.src}
              caption={video.caption}
              poster={video.poster}
              index={index}
            />
          ))}
        </div>

        {/* Note about videos */}
        <ScrollReveal variant="fadeIn" delay={0.8}>
          <div className="mt-20 text-center">
            <p className="text-sm text-text-secondary/50 italic">
              (Replace with your actual video files in /public/videos/)
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

