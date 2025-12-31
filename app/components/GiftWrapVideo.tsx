'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAudio } from '../context/AudioContext'

interface GiftWrapVideoProps {
  videoSrc: string
  caption?: string
  title?: string
  helperText?: string
  afterText?: string
  afterSubtext?: string
}

export default function GiftWrapVideo({
  videoSrc,
  caption,
  title,
  helperText,
  afterText,
  afterSubtext,
}: GiftWrapVideoProps) {
  const [isUnwrapped, setIsUnwrapped] = useState(false)
  const [videoEnded, setVideoEnded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const { muteForVideo, resumeAfterVideo } = useAudio()

  const handleUnwrap = () => {
    setIsUnwrapped(true)
    muteForVideo()
  }
  
  // Fabric-like easing curve
  const fabricEasing = [0.19, 1.0, 0.22, 1.0]

  const handleVideoEnd = () => {
    setVideoEnded(true)
    resumeAfterVideo()
  }

  const handleVideoError = () => {
    setVideoError(true)
    resumeAfterVideo()
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {title && (
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-serif text-soft-charcoal text-center mb-4"
        >
          {title}
        </motion.h3>
      )}
      
      {caption && !isUnwrapped && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-soft-charcoal/80 text-center mb-8"
        >
          {caption}
        </motion.p>
      )}
      
      {helperText && !isUnwrapped && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-sm md:text-base text-soft-charcoal/60 text-center mb-6 italic"
        >
          {helperText}
        </motion.p>
      )}

      <AnimatePresence mode="wait">
        {!isUnwrapped ? (
          <motion.div
            key="gift"
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ 
              opacity: 0, 
              scale: 1.2, 
              rotateY: 10,
              filter: 'blur(20px)',
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.03, 
              y: -8,
              rotateY: 2,
            }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
            }}
            className="relative cursor-pointer perspective-1000"
            onClick={handleUnwrap}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="bg-gradient-to-br from-muted-rose/90 to-dusty-rose/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-all duration-300 border border-white/10">
              {/* Gift wrap pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.3)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
              </div>
              
              {/* Ribbon */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-full bg-gradient-to-b from-dusty-rose to-muted-rose opacity-80"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 w-full bg-gradient-to-r from-dusty-rose to-muted-rose opacity-80"></div>
              
              {/* Bow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-20 h-20 bg-dusty-rose rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
              </div>
              
              {/* Gift content placeholder */}
              <div className="aspect-video bg-soft-charcoal/10 rounded-xl relative z-0"></div>
              
              {/* Tap hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-center text-soft-charcoal/70 text-sm"
              >
                Tap to unwrap
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="video"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {videoError ? (
              <div className="w-full aspect-video bg-soft-charcoal/10 rounded-2xl shadow-2xl flex items-center justify-center">
                <p className="text-soft-charcoal/60">
                  Video not available
                </p>
              </div>
            ) : (
              <video
                src={videoSrc}
                controls
                autoPlay
                className="w-full rounded-2xl shadow-2xl"
                onEnded={handleVideoEnd}
                onError={handleVideoError}
              >
                Your browser does not support the video tag.
              </video>
            )}
            
            {videoEnded && afterText && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-8 text-center"
              >
                <p className="text-2xl md:text-3xl font-serif text-soft-charcoal mb-2">
                  {afterText}
                </p>
                {afterSubtext && (
                  <p className="text-lg text-soft-charcoal/70">
                    {afterSubtext}
                  </p>
                )}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

