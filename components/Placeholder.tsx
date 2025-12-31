'use client'

import { motion } from 'framer-motion'

interface PlaceholderProps {
  type: 'video' | 'image' | 'audio'
  className?: string
}

/**
 * Placeholder component for missing media files
 * Shows elegant placeholders during development
 */
export default function Placeholder({ type, className = '' }: PlaceholderProps) {
  const icons = {
    video: (
      <svg className="w-16 h-16 text-accent-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    image: (
      <svg className="w-16 h-16 text-accent-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    audio: (
      <svg className="w-16 h-16 text-accent-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    )
  }

  const labels = {
    video: 'Add your video',
    image: 'Add your image',
    audio: 'Add your audio'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex flex-col items-center justify-center bg-dark-tertiary/30 border-2 border-dashed border-accent-plum/30 rounded-2xl ${className}`}
    >
      {icons[type]}
      <p className="mt-4 text-sm text-text-secondary/50">{labels[type]}</p>
      <p className="text-xs text-text-secondary/30 mt-1">/public/{type}s/</p>
    </motion.div>
  )
}

