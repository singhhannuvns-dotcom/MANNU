'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { useAudio } from '../context/AudioContext'
import ButterflyBurst from './ButterflyBurst'

export default function SecretSadButton() {
  const [showButton, setShowButton] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popupStep, setPopupStep] = useState(1)
  const [showVideo, setShowVideo] = useState(false)
  const [videoEnded, setVideoEnded] = useState(false)
  const [burstPosition, setBurstPosition] = useState({ x: 0, y: 0 })
  const [showBurst, setShowBurst] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { muteForVideo, resumeAfterVideo } = useAudio()
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    // Show button only when user has scrolled to the very end
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest > 0.95 && !videoEnded) {
        setShowButton(true)
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress, videoEnded])

  const handleButtonClick = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setBurstPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      })
    }
    setShowPopup(true)
    setPopupStep(1)
  }

  const handleNo = () => {
    if (popupStep === 1) {
      setPopupStep(2)
    } else if (popupStep === 2) {
      // Play secret video
      setShowPopup(false)
      setShowVideo(true)
      muteForVideo()
      // Trigger burst
      triggerBurst()
    }
  }

  const handleOkay = () => {
    setShowPopup(false)
    // Smooth scroll to bottom
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
    // Trigger burst and hide button
    triggerBurst()
  }

  const triggerBurst = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      setBurstPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      })
    }
    setShowBurst(true)
    setShowButton(false)
    setTimeout(() => setShowBurst(false), 2000)
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
    <>
      {/* Secret 😿 Button */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            ref={buttonRef}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleButtonClick}
            className="fixed bottom-8 left-8 z-50 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-3xl border border-white/10 transition-all duration-300 hover:bg-white/30"
          >
            😿
          </motion.button>
        )}
      </AnimatePresence>

      {/* Butterfly Burst */}
      <ButterflyBurst show={showBurst} origin={burstPosition} />

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] px-6"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 max-w-md shadow-2xl border border-white/30"
            >
              <motion.div
                key={popupStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {popupStep === 1 ? (
                  <>
                    <p className="text-2xl md:text-3xl font-light text-soft-charcoal mb-4 text-center leading-relaxed">
                      Not that important.
                    </p>
                    <p className="text-xl md:text-2xl font-light text-soft-charcoal/70 mb-8 text-center">
                      Ignore?
                    </p>
                  </>
                ) : (
                  <p className="text-2xl md:text-3xl font-light text-soft-charcoal mb-8 text-center leading-relaxed">
                    You're sure?
                  </p>
                )}

                <div className="flex gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleOkay}
                    className="px-8 py-3 bg-gray-200/80 backdrop-blur-sm text-soft-charcoal rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-300/50"
                  >
                    Okay
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNo}
                    className="px-8 py-3 bg-gradient-to-r from-muted-rose/90 to-dusty-rose/90 backdrop-blur-sm text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                  >
                    No
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Secret Video */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[60] px-6"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
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
                  src="/videos/secret-sad.mp4"
                  controls
                  autoPlay
                  className="w-full rounded-2xl shadow-2xl"
                  onEnded={handleVideoEnd}
                  onError={handleVideoError}
                >
                  Your browser does not support the video tag.
                </video>
              )}

              {videoEnded && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 text-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowVideo(false)}
                    className="px-8 py-3 bg-white/20 backdrop-blur-md text-warm-cream rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 border border-white/20"
                  >
                    Close
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

