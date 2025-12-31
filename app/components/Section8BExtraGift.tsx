'use client'

import GiftWrapVideo from './GiftWrapVideo'

export default function Section8BExtraGift() {
  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-warm-beige to-warm-cream flex items-center justify-center px-6 py-12">
      <GiftWrapVideo
        videoSrc="/videos/extra-gift.mp4"
        title="One more thing..."
        helperText="Go ahead, open it."
      />
    </section>
  )
}

