import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#faf8f5',
        'warm-beige': '#f5ede4',
        'soft-cream': '#ede5dc',
        'champagne': '#f4e8d8',
        'rose-blush': '#f0d5d5',
        'muted-rose': '#e8bfbf',
        'soft-charcoal': '#5a5656',
        'warm-gold': '#d4af7a',
        'text-primary': '#3d3a38',
        'text-secondary': '#6b6460',
        'text-light': '#8f8985',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'slide-up': 'slideUp 1s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 5px rgba(212, 175, 55, 0.3)' },
          '50%': { textShadow: '0 0 20px rgba(212, 175, 55, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

