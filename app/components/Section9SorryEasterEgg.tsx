'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAudio } from '../context/AudioContext'

export default function Section9SorryEasterEgg() {
  const [showButton, setShowButton] = useState(true)
  const [showPopup, setShowPopup] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const { muteForVideo, resumeAfterVideo } = useAudio()

  const handleButtonClick = () => {
    setShowPopup(true)
  }

  const handleYes = () => {
    setShowPopup(false)
    setShowVideo(true)
    muteForVideo()
  }

  const handleNo = () => {
    setShowPopup(false)
    setShowButton(false)
  }

  const handleVideoEnd = () => {
    resumeAfterVideo()
    // Optionally close video after it ends (user can also click outside)
    // setTimeout(() => setShowVideo(false), 2000)
  }

  const handleVideoError = () => {
    setVideoError(true)
    resumeAfterVideo()
  }

  return (
    <section className="min-h-[40vh] bg-gradient-to-b from-warm-beige to-warm-cream flex items-center justify-center px-6 py-12 relative">
      <AnimatePresence>
        {showButton && !showVideo && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleButtonClick}
            className="fixed bottom-40 left-8 z-40 w-20 h-20 bg-gradient-to-br from-muted-rose/90 to-dusty-rose/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-3xl border border-white/20 hover:shadow-2xl transition-shadow duration-300"
          >
            😼
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-6"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 max-w-md shadow-2xl border border-white/30"
            >
              <div className="mb-6 text-center">
                <h3 className="text-2xl md:text-3xl font-serif text-soft-charcoal mb-2">
                  Want to see something in Marathi? 👉👈
                </h3>
                <p className="text-lg text-soft-charcoal/60 italic">
                  (sorry)
                </p>
              </div>
              
              <div className="flex gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleYes}
                  className="px-8 py-3 bg-gradient-to-r from-muted-rose/90 to-dusty-rose/90 backdrop-blur-sm text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                >
                  Yes
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNo}
                  className="px-8 py-3 bg-gray-200/80 backdrop-blur-sm text-soft-charcoal rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-300/50"
                >
                  No
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[60] px-6"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full"
            >
              {videoError ? (
                <div className="w-full aspect-video bg-soft-charcoal/10 rounded-2xl shadow-2xl flex items-center justify-center">
                  <p className="text-warm-cream/60">
                    Video not available
                  </p>
                </div>
              ) : (
                <video
                  src="/videos/sorry-marathi.mp4"
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
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

