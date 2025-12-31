'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface YesNoGameProps {
  onFinalNo: () => void
}

const noResponses = [
  "Okay, fair...",
  "Not even a little?",
  "Come on, be honest",
  "I don't believe you",
  "Really though?",
  "One more chance...",
  "Alright, fine. Watch this."
]

export default function YesNoGame({ onFinalNo }: YesNoGameProps) {
  const [noCount, setNoCount] = useState(0)
  const [response, setResponse] = useState<string | null>(null)
  const [showButtons, setShowButtons] = useState(true)

  const handleYes = () => {
    setResponse("I knew it! 😊")
    setShowButtons(false)
  }

  const handleNo = () => {
    if (noCount >= noResponses.length - 1) {
      setResponse(noResponses[noCount])
      setShowButtons(false)
      setTimeout(() => {
        onFinalNo()
      }, 1500)
    } else {
      setResponse(noResponses[noCount])
      setNoCount(noCount + 1)
      setTimeout(() => setResponse(null), 2000)
    }
  }

  return (
    <section className="relative w-full min-h-screen bg-warm-white section-padding flex items-center">
      <div className="max-w-3xl mx-auto w-full text-center">
        
        {/* Question */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl text-text-primary mb-16 leading-tight"
        >
          Did this make you smile?
        </motion.h2>

        {/* Buttons */}
        <AnimatePresence>
          {showButtons && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              {/* Yes Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYes}
                className="w-48 py-4 bg-warm-gold text-white rounded-full text-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Yes
              </motion.button>

              {/* No Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNo}
                className="w-48 py-4 border-2 border-muted-rose text-text-secondary rounded-full text-xl font-medium hover:bg-rose-blush/30 transition-all duration-300"
              >
                No
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Response text */}
        <AnimatePresence mode="wait">
          {response && (
            <motion.p
              key={response}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl text-text-secondary font-light italic"
            >
              {response}
            </motion.p>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

