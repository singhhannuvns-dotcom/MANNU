'use client'

import { useEffect, useRef } from 'react'
import { useScroll, useSpring, useTransform, useVelocity } from 'framer-motion'

/**
 * ScrollVelocitySync - Provides scroll velocity data for syncing animations
 * This component doesn't render anything, it just provides context for scroll-based animations
 */
export default function ScrollVelocitySync() {
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })

  // Store velocity in a CSS variable for other components to use
  useEffect(() => {
    const unsubscribe = smoothVelocity.on('change', (latest) => {
      document.documentElement.style.setProperty(
        '--scroll-velocity',
        Math.abs(latest).toString()
      )
    })

    return () => unsubscribe()
  }, [smoothVelocity])

  return null
}

