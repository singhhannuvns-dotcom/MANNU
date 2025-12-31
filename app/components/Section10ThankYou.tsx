'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAudio } from '../context/AudioContext'
import InteractiveButton from './InteractiveButton'
import KineticText from './KineticText'

export default function Section10ThankYou() {
  const [showVideo, setShowVideo] = useState(false)
  const [videoEnded, setVideoEnded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const { muteForVideo, resumeAfterVideo } = useAudio()

  const handleReveal = () => {
    setShowVideo(true)
    muteForVideo()
  }

  const handleVideoEnd = () => {
    setVideoEnded(true)
    resumeAfterVideo()
  }

  const handleVideoError = () => {
    setVideoError(true)
    resumeAfterVideo()
  }

  return (
    <section className="min-h-[70vh] bg-gradient-to-br from-warm-cream via-warm-beige to-dusty-rose flex items-center justify-center px-6 py-12 relative overflow-hidden">
      <div className="max-w-3xl w-full text-center relative z-10">
        <KineticText
          text="Thank you."
          type="word"
          style="float"
          className="text-5xl md:text-7xl font-serif text-soft-charcoal mb-16"
        />

        <AnimatePresence mode="wait">
          {!showVideo ? (
            <motion.div
              key="button"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <InteractiveButton
                onClick={handleReveal}
                glowColor="warm"
                className="px-12 py-4 bg-white/40 backdrop-blur-md text-soft-charcoal text-xl rounded-full shadow-lg transition-all duration-300 border border-white/30"
              >
                One more thing...
              </InteractiveButton>
            </motion.div>
          ) : (
            <motion.div
              key="video"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="relative">
                {/* Theatre-style reveal effect */}
                <motion.div
                  initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                  animate={{ clipPath: 'circle(100% at 50% 50%)' }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                >
                  {videoError ? (
                    <div className="w-full aspect-video bg-soft-charcoal/10 rounded-2xl shadow-2xl flex items-center justify-center">
                      <p className="text-soft-charcoal/60">
                        Video not available
                      </p>
                    </div>
                  ) : (
                    <video
                      src="/videos/thank-you.mp4"
                      controls
                      autoPlay
                      className="w-full rounded-2xl shadow-2xl"
                      onEnded={handleVideoEnd}
                      onError={handleVideoError}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </motion.div>
              </div>

              {videoEnded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="mt-12 max-w-2xl mx-auto"
                >
                  <p className="text-lg md:text-xl text-soft-charcoal/90 leading-relaxed">
                    For every late-night call, every shared silence, every laugh and every moment—
                    thank you for being exactly who you are. You make everything better just by existing.
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

