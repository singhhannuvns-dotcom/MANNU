# Winter & Cozy Visual Enhancements ❄️

All enhancements have been added to make the experience more intimate, premium, and emotionally engaging.

## ✨ What's Been Added

### 1. **Winter Particle Effects** 
- Subtle, slow-moving particles (25 particles total)
- Very low opacity (0.05-0.2) for romantic ambiance
- Automatically **pauses during video playback**
- Resumes when videos end
- 20-35 second animation cycles for natural movement
- Component: `WinterParticles.tsx`

### 2. **Ambient Glow Breathing Animations**
- Warm radial gradient glows behind key sections
- Slow 6-second breathing animation (scale + opacity)
- Three color variants:
  - `rose` - Muted rose tones
  - `warm` - Warm cream/beige
  - `soft` - Soft charcoal for dark sections
- Component: `AmbientGlow.tsx`
- Added to: Landing, Lyrics, Decision, Final Wish sections

### 3. **Glassmorphism Design**
Applied to all interactive elements:
- **Cards**: `bg-white/40 backdrop-blur-md` with borders
- **Buttons**: Translucent backgrounds with `backdrop-blur-sm/md`
- **Gift wraps**: 90% opacity with subtle borders
- **Popups**: `bg-white/90 backdrop-blur-lg`
- **Audio control**: Enhanced with better transparency

### 4. **Scroll-Based Background Warmth Gradient**
- Cooler tones at the top (#F5E6D3 → #FFF8F0)
- Gradually warms as you scroll
- Ends with warmer rose tones (#E8B4B8 → #D4A5A5)
- Smooth transition using Framer Motion's `useScroll`
- Component: `ScrollGradientBackground.tsx`

### 5. **Enhanced Micro-Interactions**

#### Blur-to-Clear Text Reveals
All major text elements now use:
```
initial: { opacity: 0, filter: 'blur(10px)' }
animate: { opacity: 1, filter: 'blur(0px)' }
```

#### Button Interactions
- Hover: `scale: 1.08, y: -3` (lifts up gently)
- Tap: `scale: 0.95`
- Duration: 300ms with custom easing
- Enhanced shadow on hover

#### Gift Unwrap Animations
- Hover: `scale: 1.03, y: -5`
- Tap: `scale: 0.97`
- Smooth exit with `scale: 1.1`

#### Card Animations
- Hover: `scale: 1.02, y: -5`
- Blur-to-clear reveal
- Custom easing: `[0.25, 0.46, 0.45, 0.94]`

#### Easter Egg Button
- Special hover: `scale: 1.2, rotate: 10`
- Playful interaction

## 📐 Technical Details

### Custom Tailwind Config
Added to `tailwind.config.js`:
- `bg-gradient-radial` utility
- `backdrop-blur-xs` variant
- Custom animations: `breathe`, `float`
- Custom keyframes for breathing effect

### Performance Considerations
- Particles use CSS transforms (GPU accelerated)
- Blur effects use `backdrop-filter` (hardware accelerated)
- All animations optimized for 60fps
- Particles automatically pause during video (saves resources)

## 🎨 Design Principles

All effects follow these rules:
- ✅ Subtle and romantic
- ✅ Calming and intimate
- ✅ Premium feel
- ✅ Mobile-optimized
- ❌ No heavy snow
- ❌ No sparkles or flashy effects
- ❌ Never overwhelming

## 📱 Mobile Experience

All enhancements are fully responsive:
- Touch interactions optimized
- Reduced particle count suitable for mobile GPUs
- Backdrop blur gracefully degrades on unsupported devices
- All animations use `will-change` for performance

## 🔧 Usage

All components are automatically integrated into the main page:
```tsx
<ScrollGradientBackground />  // Fixed background that responds to scroll
<WinterParticles />           // Fixed overlay with particles
<AmbientGlow />               // Used in specific sections
```

## 🎯 Result

The website now feels:
- Warmer and more inviting
- Premium and intentional
- Cozy and intimate
- Smooth and satisfying to interact with
- Perfect for a romantic New Year experience

---

Made with ❄️ and 💙

