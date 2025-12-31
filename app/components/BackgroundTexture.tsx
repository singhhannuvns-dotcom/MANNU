'use client'

import { motion } from 'framer-motion'

export default function BackgroundTexture() {
  return (
    <>
      {/* Grain texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[5] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Soft light blobs - animated */}
      <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-muted-rose/10 rounded-full blur-[120px]"
          animate={{
            x: ['-20%', '20%', '-20%'],
            y: ['-10%', '10%', '-10%'],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            top: '10%',
            left: '10%',
          }}
        />
        
        <motion.div
          className="absolute w-[800px] h-[800px] bg-dusty-rose/8 rounded-full blur-[140px]"
          animate={{
            x: ['20%', '-20%', '20%'],
            y: ['10%', '-10%', '10%'],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            bottom: '20%',
            right: '10%',
          }}
        />
        
        <motion.div
          className="absolute w-[700px] h-[700px] bg-warm-cream/15 rounded-full blur-[130px]"
          animate={{
            x: ['-10%', '10%', '-10%'],
            y: ['20%', '-20%', '20%'],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </>
  )
}

