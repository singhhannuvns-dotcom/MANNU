'use client'

import { useState, useCallback } from 'react'

export function usePenguinInteractions() {
  const [animation, setAnimation] = useState<'idle' | 'hop' | 'jump' | 'lean' | 'shake' | 'walk' | 'slide'>('idle')
  const [showHeart, setShowHeart] = useState(false)
  const [showSparkle, setShowSparkle] = useState(false)

  const triggerHop = useCallback(() => {
    setAnimation('hop')
    setTimeout(() => setAnimation('idle'), 600)
  }, [])

  const triggerJump = useCallback(() => {
    setAnimation('jump')
    setShowSparkle(true)
    setTimeout(() => {
      setAnimation('idle')
      setShowSparkle(false)
    }, 700)
  }, [])

  const triggerLean = useCallback(() => {
    setAnimation('lean')
    setTimeout(() => setAnimation('idle'), 400)
  }, [])

  const triggerShake = useCallback(() => {
    setAnimation('shake')
    setTimeout(() => setAnimation('idle'), 900)
  }, [])

  const triggerWalk = useCallback(() => {
    setAnimation('walk')
  }, [])

  const triggerSlide = useCallback(() => {
    setAnimation('slide')
    setTimeout(() => setAnimation('idle'), 1300)
  }, [])

  const triggerHeart = useCallback(() => {
    setShowHeart(true)
    setTimeout(() => setShowHeart(false), 1300)
  }, [])

  const resetToIdle = useCallback(() => {
    setAnimation('idle')
    setShowHeart(false)
    setShowSparkle(false)
  }, [])

  return {
    animation,
    showHeart,
    showSparkle,
    triggerHop,
    triggerJump,
    triggerLean,
    triggerShake,
    triggerWalk,
    triggerSlide,
    triggerHeart,
    resetToIdle,
  }
}

