'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function VideoReveal() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger reveal animation
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay prevented:', err)
      })
    }
  }, [isVisible])

  return (
    <section className="relative w-full min-h-screen champagne-gradient section-padding flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-5xl text-text-primary mb-4">
            Okay...
          </h2>
          <p className="text-xl sm:text-2xl text-text-secondary font-light">
            This one's just for you.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Video element */}
          <video
            ref={videoRef}
            controls
            className="w-full h-full object-cover"
            poster="/images/video-poster.jpg"
          >
            <source src="/videos/special-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Placeholder if no video */}
          <div className="absolute inset-0 bg-gradient-to-br from-champagne to-rose-blush flex items-center justify-center text-6xl">
            🎬
          </div>
        </motion.div>

        {/* Caption below video */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-8"
        >
          <p className="text-base sm:text-lg text-text-light italic">
            (Add your video to /public/videos/special-video.mp4)
          </p>
        </motion.div>

      </div>
    </section>
  )
}

