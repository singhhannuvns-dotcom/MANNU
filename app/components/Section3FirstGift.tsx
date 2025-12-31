'use client'

import GiftWrapVideo from './GiftWrapVideo'

export default function Section3FirstGift() {
  return (
    <section className="min-h-[70vh] bg-gradient-to-b from-warm-beige to-warm-cream flex items-center justify-center px-6 py-12">
      <GiftWrapVideo
        videoSrc="/videos/gift1.mp4"
        caption="I wrapped this for a reason."
      />
    </section>
  )
}

