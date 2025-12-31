'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAudio } from '../context/AudioContext'
import InteractiveButton from './InteractiveButton'
import ImagePenguin from './ImagePenguin'
import { usePenguinInteractions } from '../hooks/usePenguinInteractions'

// Teasing questions for YES clicks
const yesQuestions = [
  "Should I stop being naughty?",
  "Are you sure?",
  "Really?",
  "Think again.",
  "You're lying.",
  "Last chance.",
  "I don't believe you.",
]

// Playful reactions for YES clicks
const yesReactions = [
  "Are you sure?",
  "Really?",
  "Think again.",
  "You're lying.",
  "Last chance.",
  "I don't believe you.",
]

// Penguin emojis for reactions
const penguinEmojis = [
  "🐧",
  "😿",
  "😾",
  "🙃",
  "😤",
  "😏",
]

export default function Section7QuestionGame() {
  const [yesCount, setYesCount] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [videoSource, setVideoSource] = useState('')
  const [videoEnded, setVideoEnded] = useState(false)
  const [showPenguinReaction, setShowPenguinReaction] = useState(false)
  const [gameEnded, setGameEnded] = useState(false)
  const { muteForVideo, resumeAfterVideo } = useAudio()
  const penguin = usePenguinInteractions()
  
  // Update penguin variant based on YES clicks
  const getPenguinVariant = () => {
    if (yesCount >= 5) return 'sad'
    if (yesCount >= 3) return 'curious'
    return 'default'
  }
  
  useEffect(() => {
    if (yesCount === 0) return
    // Trigger penguin shake on YES clicks
    penguin.triggerShake()
  }, [yesCount, penguin])

  // YES button - Loop 4 times, then trigger video on 5th click
  const handleYes = () => {
    const newCount = yesCount + 1
    setYesCount(newCount)
    
    // Clicks 1-4: Show teasing reactions only
    if (newCount < 5) {
      setShowPenguinReaction(true)
      setTimeout(() => setShowPenguinReaction(false), 1500)
    }
    // Click 5: IMMEDIATELY trigger YES video
    else if (newCount === 5) {
      setShowPenguinReaction(false)
      setGameEnded(true)
      setVideoSource('/videos/behave-yes.mp4')
      setShowVideo(true)
      muteForVideo()
    }
  }

  // NO button - Instant payoff with NEW video
  const handleNo = () => {
    setGameEnded(true)
    setVideoSource('/videos/behave-no-new.mp4')
    setShowVideo(true)
    muteForVideo()
  }

  const handleVideoEnd = () => {
    setVideoEnded(true)
    resumeAfterVideo()
  }

  const handleVideoError = () => {
    console.error('Video failed to load:', videoSource)
    resumeAfterVideo()
    setVideoEnded(true)
  }

  return (
    <section className="min-h-[50vh] bg-gradient-to-br from-warm-cream to-warm-beige flex items-center justify-center px-6 py-10 relative">
      
      {/* Penguin shows dramatic reaction after YES clicks */}
      {yesCount >= 3 && !showVideo && (
        <motion.div
          className="absolute top-1/4 left-1/4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <ImagePenguin 
            variant={getPenguinVariant()}
            animation={yesCount >= 5 ? 'slide' : penguin.animation}
            size={90}
          />
        </motion.div>
      )}
      
      <div className="max-w-2xl w-full text-center">
        <AnimatePresence mode="wait">
          {!showVideo ? (
            <motion.div
              key={`question-${yesCount}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Question changes based on YES clicks */}
              <motion.h2
                key={`question-text-${yesCount}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-4xl md:text-5xl font-serif text-soft-charcoal mb-12"
              >
                {yesQuestions[yesCount]}
              </motion.h2>

              {/* Show reaction after YES clicks */}
              {yesCount > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                  className="mb-8"
                >
                  <motion.div 
                    className="text-6xl mb-4"
                    animate={{
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: 2,
                    }}
                  >
                    {penguinEmojis[Math.min(yesCount - 1, penguinEmojis.length - 1)]}
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl text-soft-charcoal/70 font-serif italic"
                  >
                    {yesReactions[Math.min(yesCount - 1, yesReactions.length - 1)]}
                  </motion.p>
                </motion.div>
              )}

              {/* Small teasing text for multiple YES clicks */}
              {yesCount >= 4 && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg text-soft-charcoal/60 italic mb-6"
                >
                  I don't believe you.
                </motion.p>
              )}

              <div className="flex gap-6 justify-center flex-wrap relative">
                {/* YES button - Loops 4 times, triggers video on 5th click */}
                <motion.div 
                  className="relative"
                  whileHover={gameEnded ? undefined : "hover"}
                  animate={showPenguinReaction ? {
                    x: [0, -5, 5, -5, 5, 0],
                    rotate: [0, -2, 2, -2, 2, 0],
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <InteractiveButton
                    onClick={handleYes}
                    glowColor="green"
                    disabled={gameEnded}
                    className={`px-10 py-4 bg-gradient-to-r from-green-200/80 to-green-300/80 backdrop-blur-md text-soft-charcoal text-xl rounded-full shadow-lg transition-all duration-300 border border-white/20 ${
                      gameEnded ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    Yes 😇
                  </InteractiveButton>
                </motion.div>
                
                {/* NO button - Instant video with NEW source */}
                <motion.div 
                  className="relative"
                  whileHover={gameEnded ? undefined : "hover"}
                >
                  <InteractiveButton
                    onClick={handleNo}
                    glowColor="rose"
                    disabled={gameEnded}
                    className={`px-10 py-4 bg-gradient-to-r from-muted-rose/90 to-dusty-rose/90 backdrop-blur-md text-white text-xl rounded-full shadow-lg transition-all duration-300 border border-white/20 ${
                      gameEnded ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    No 😈
                  </InteractiveButton>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="video"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
            >
              {videoSource ? (
                <>
                  <video
                    key={videoSource}
                    src={videoSource}
                    controls
                    autoPlay
                    className="w-full rounded-2xl shadow-2xl"
                    onEnded={handleVideoEnd}
                    onError={handleVideoError}
                  >
                    Your browser does not support the video tag.
                  </video>
                  
                  {videoEnded && (
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-6 text-xl text-soft-charcoal/70 italic"
                    >
                      {videoSource.includes('behave-yes') 
                        ? "Knew you couldn't resist. 😏" 
                        : "Thought so. 😈"}
                    </motion.p>
                  )}
                </>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xl text-soft-charcoal/70 italic"
                >
                  Video loading...
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
