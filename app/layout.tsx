import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Happy New Year 2025, Mansasvi',
  description: 'A special message for you',
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
