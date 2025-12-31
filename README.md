# New Year 2025 - A Special Website for Mansasvi 💙

A beautiful, emotionally-paced, single-page scrolling experience made with love.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Media Files

You need to add the following files to make the website work:

#### Audio (Background Music)
Create `public/audio/` folder and add:
- `background.mp3` - Soft background music that plays throughout

#### Videos
Create `public/videos/` folder and add:
- `gift1.mp4` - First gift-wrapped video
- `gift2.mp4` - Second gift-wrapped video (the special one)
- `behave-yes.mp4` - Video for when she says "Yes, behave more"
- `behave-no.mp4` - Video for when she keeps clicking "No"
- `mood-swings.mp4` - Cat video about handling mood swings
- `sorry-marathi.mp4` - "Sorry" in Marathi video
- `thank-you.mp4` - Final thank you video

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

## 📱 Features

- ✨ Smooth scroll animations with Framer Motion
- 🎵 Background music with auto-mute during videos
- 🎁 Interactive gift-wrap animations
- 💝 11 carefully crafted emotional sections
- 📱 Mobile-first responsive design
- 🎨 Warm, romantic color palette
- 🎭 Theatre-style video reveals
- 🎮 Playful interactive elements

## 🎨 Color Palette

- Warm Beige: `#F5E6D3`
- Muted Rose: `#E8B4B8`
- Soft Charcoal: `#4A4A4A`
- Warm Cream: `#FFF8F0`
- Dusty Rose: `#D4A5A5`

## 📂 Project Structure

```
├── app/
│   ├── components/
│   │   ├── Section1Landing.tsx      # Welcome screen
│   │   ├── Section2Lyrics.tsx       # Lyric-style text
│   │   ├── Section3FirstGift.tsx    # First video gift
│   │   ├── Section4Decision.tsx     # "Choosing you" reveal
│   │   ├── Section5SecondGift.tsx   # Second video gift
│   │   ├── Section6LongDistance.tsx # Love cards
│   │   ├── Section7QuestionGame.tsx # "Should I behave?" game
│   │   ├── Section8MoodSwings.tsx   # Mood swings video
│   │   ├── Section9SorryEasterEgg.tsx # Hidden sorry button
│   │   ├── Section10ThankYou.tsx    # Thank you theatre
│   │   ├── Section11FinalWish.tsx   # Happy New Year finale
│   │   ├── GiftWrapVideo.tsx        # Reusable gift component
│   │   └── AudioControl.tsx         # Mute/unmute button
│   ├── context/
│   │   └── AudioContext.tsx         # Audio state management
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── audio/
│   │   └── background.mp3
│   └── videos/
│       └── [all video files]
└── package.json
```

## 💡 Tips

1. **Video Format**: Use MP4 format for best browser compatibility
2. **Audio Volume**: Background music is set to 30% volume by default
3. **Mobile Testing**: Test on actual mobile device for best experience
4. **QR Code**: Use a QR code generator to create a scannable link
5. **Hosting**: Deploy to Vercel for free hosting with automatic HTTPS

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect to Vercel for automatic deployments.

## 🎁 Made with love for Mansasvi

Every scroll, every animation, every word chosen with care.
