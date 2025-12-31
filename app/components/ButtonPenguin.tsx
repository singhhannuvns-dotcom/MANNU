'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PenguinDoodle from './PenguinDoodle'

interface ButtonPenguinProps {
  show: boolean
  reaction: 'lean' | 'jump' | 'sad'
  position?: 'left' | 'right'
}

export default function ButtonPenguin({ 
  show, 
  reaction, 
  position = 'left' 
}: ButtonPenguinProps) {
  const positionClass = position === 'left' 
    ? 'absolute -left-20 top-1/2 -translate-y-1/2' 
    : 'absolute -right-20 top-1/2 -translate-y-1/2'

  return (
    <motion.div
      className={positionClass}
      initial={{ opacity: 0, scale: 0 }}
      animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PenguinDoodle 
        animation={reaction} 
        size={50} 
        show={show}
      />
    </motion.div>
  )
}

