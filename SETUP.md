# Quick Setup Guide

## 🚀 First Time Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Media Files

#### Background Music
1. Find a calm, ambient track (something dreamy/ethereal)
2. Save as `/public/audio/ambient.mp3`
3. Recommended: 2-3 minute loop, 128-192 kbps

#### Videos (Optional)
1. Record or find 3 vertical videos (1080x1920 recommended)
2. Save to `/public/videos/` as:
   - `moment1.mp4`
   - `moment2.mp4`
   - `moment3.mp4`
3. Keep file sizes under 10MB each for performance

#### Poster Images
1. Create thumbnail images for each video
2. Save to `/public/images/` as:
   - `poster1.jpg`
   - `poster2.jpg`
   - `poster3.jpg`

### 3. Customize the Content

Edit these files to personalize your message:

- **Opening lines**: `components/sections/EntryHook.tsx`
- **Flirty text**: `components/sections/FlirtyText.tsx` (lines 6-32)
- **Interactive questions**: `components/sections/InteractiveGames.tsx`
- **Final letter**: `components/sections/FinalLetter.tsx` (lines 8-16)

### 4. Run the Development Server

```bash
npm run dev
```

Open http://localhost:3000

### 5. Preview on Mobile

Find your computer's local IP:
- **Mac/Linux**: `ifconfig | grep inet`
- **Windows**: `ipconfig`

Then open `http://YOUR_IP:3000` on your phone (same WiFi network)

## 🎨 Quick Customization Tips

### Change Colors

Edit `tailwind.config.ts`:
```ts
'dark-primary': '#0a0a0a',      // Main background
'accent-plum': '#4a2645',        // Subtle accents
'accent-gold': '#d4af37',        // Highlight color
```

### Adjust Animation Speed

In any section component:
```tsx
<ScrollReveal 
  variant="fadeIn" 
  delay={0.5}      // Wait 0.5s before animating
  duration={1.2}   // Animation takes 1.2s
>
```

### Change Fonts

Edit `app/layout.tsx` to use different Google Fonts

## 🐛 Troubleshooting

### Music not playing?
- Check audio file path is correct
- Browsers block autoplay - user must interact first
- Make sure file is .mp3 format

### Videos not showing?
- Check file paths match exactly
- Try a different video codec (H.264 recommended)
- Reduce file size if loading slowly

### Animations stuttering?
- Test on different device
- Reduce number of animated elements
- Check browser performance in DevTools

## 📱 Production Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

1. **Vercel** (Recommended)
   - Push to GitHub
   - Connect repo to Vercel
   - Auto-deploy on push

2. **Netlify**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Self-hosted**
   ```bash
   npm run build
   npm start
   ```

## ⚠️ Before Sharing

- [ ] Test on mobile device
- [ ] Check all text is personalized
- [ ] Verify media files load correctly
- [ ] Test music controls work
- [ ] Scroll through entire page slowly
- [ ] Check on different browsers (Chrome, Safari, Firefox)

## 💡 Pro Tips

1. **Music choice matters**: Pick something that represents your feelings
2. **Keep it personal**: Edit the text to match your voice
3. **Test timing**: The pacing of scroll animations affects emotion
4. **Mobile first**: Most people will view on phone
5. **Don't overthink**: Sometimes simpler is more powerful

---

Need help? Check the main README.md for detailed documentation.

