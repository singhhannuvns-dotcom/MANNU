'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAudio } from '../context/AudioContext'
import InteractiveButton from './InteractiveButton'

export default function Section8MoodSwings() {
  const [showVideo, setShowVideo] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const { muteForVideo, resumeAfterVideo } = useAudio()

  const handleReveal = () => {
    setShowVideo(true)
    muteForVideo()
  }

  const handleVideoEnd = () => {
    resumeAfterVideo()
  }

  const handleVideoError = () => {
    setVideoError(true)
    resumeAfterVideo()
  }

  return (
    <section className="min-h-[50vh] bg-warm-beige flex items-center justify-center px-6 py-10">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-soft-charcoal mb-4">
            I try to handle your moods like this…
          </h2>
          <p className="text-xl md:text-2xl text-soft-charcoal/70 mb-8">
            sometimes I win, sometimes I get beaten.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showVideo ? (
            <motion.div
              key="button"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <InteractiveButton
                onClick={handleReveal}
                glowColor="rose"
                className="px-12 py-4 bg-gradient-to-r from-muted-rose/90 to-dusty-rose/90 backdrop-blur-md text-white text-xl rounded-full shadow-lg transition-all duration-300 border border-white/20"
              >
                Show me
              </InteractiveButton>
            </motion.div>
          ) : (
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              {videoError ? (
                <div className="w-full aspect-video bg-soft-charcoal/10 rounded-2xl shadow-2xl flex items-center justify-center">
                  <p className="text-soft-charcoal/60">
                    Video not available
                  </p>
                </div>
              ) : (
                <video
                  src="/videos/mood-swings.mp4"
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
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

