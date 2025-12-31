'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ImagePenguin from './ImagePenguin'

export default function HeroPenguin() {
  const [showPenguin, setShowPenguin] = useState(false)
  const [isPeeking, setIsPeeking] = useState(true)

  useEffect(() => {
    // Penguin peeks in after text appears
    const peekTimer = setTimeout(() => {
      setShowPenguin(true)
    }, 3000)

    // Penguin slides away after a while
    const hideTimer = setTimeout(() => {
      setIsPeeking(false)
      setTimeout(() => setShowPenguin(false), 500)
    }, 8000)

    return () => {
      clearTimeout(peekTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!showPenguin) return null

  return (
    <motion.div
      className="absolute bottom-8 left-8 z-20"
      initial={{ x: -100, opacity: 0 }}
      animate={isPeeking ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <ImagePenguin 
        variant="happy"
        animation="idle" 
        size={60} 
      />
    </motion.div>
  )
}

