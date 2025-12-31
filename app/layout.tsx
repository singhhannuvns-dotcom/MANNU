import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Happy New Year 2026, Manasvi',
  description: 'A small last gift, just for you.',
  openGraph: {
    title: 'Happy New Year 2026, Manasvi',
    description: 'A small last gift, just for you.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy New Year 2026, Manasvi',
    description: 'A small last gift, just for you.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-warm-beige" suppressHydrationWarning>{children}</body>
    </html>
  )
}
