'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useAudio } from '../context/AudioContext'
import ImagePenguin from './ImagePenguin'

export default function ScrollPenguin() {
  const [showPenguin, setShowPenguin] = useState(false)
  const { isVideoPlaying } = useAudio()
  const { scrollYProgress } = useScroll()
  
  // Show penguin when user has scrolled a bit
  const opacity = useTransform(scrollYProgress, [0.1, 0.15, 0.8, 0.85], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, -5])

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setShowPenguin(latest > 0.1 && latest < 0.85)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  // Hide during video playback
  if (isVideoPlaying || !showPenguin) return null

  return (
    <motion.div
      className="fixed bottom-20 right-8 z-30 pointer-events-none"
      style={{ opacity, y, rotate }}
    >
      <ImagePenguin 
        variant="curious"
        animation="idle" 
        size={55} 
      />
    </motion.div>
  )
}

