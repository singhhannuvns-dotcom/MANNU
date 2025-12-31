'use client'

import GiftWrapVideo from './GiftWrapVideo'

export default function Section5SecondGift() {
  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-warm-cream to-warm-beige flex items-center justify-center px-6 py-12">
      <GiftWrapVideo
        videoSrc="/videos/gift2.mp4"
        title="Look what I found this year…"
        helperText="Go on. Open it."
        afterText="It's you, cutie."
        afterSubtext="Still you."
      />
    </section>
  )
}

