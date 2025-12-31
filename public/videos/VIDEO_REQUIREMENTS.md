# 🎥 VIDEO FILES REQUIRED FOR YES/NO GAME

## 📍 File Locations

Place these video files in the `public/videos/` directory:

```
public/videos/
├── behave-yes.mp4      ← NEW: YES button video (5th click)
└── behave-no-new.mp4   ← NEW: NO button video (instant)
```

---

## 📋 VIDEO SPECIFICATIONS

### **1. behave-yes.mp4**
**Trigger**: User clicks YES button 5 times in a row

**Context**:
- User has been teased 4 times
- They kept clicking YES despite teasing
- This is the "reward" for persistence
- Should feel playful, mischievous, flirty

**Suggested Content**:
- Playful reaction to their "persistence"
- "I knew you couldn't resist" vibe
- Light teasing about clicking YES so many times
- Flirty, wholesome, cute

**End Message**: "Knew you couldn't resist. 😏"

**Specs**:
- Format: MP4 (H.264)
- Resolution: 720p or 1080p
- Duration: 15-45 seconds
- Size: Under 30MB
- Tone: Playful, flirty, teasing

---

### **2. behave-no-new.mp4**
**Trigger**: User clicks NO button immediately

**Context**:
- Question: "Should I stop being naughty?"
- User chose "No 😈" option
- This is the "instant payoff" for choosing NO
- Should feel cheeky, confident, direct

**Suggested Content**:
- Reaction to choosing "NO"
- "I knew it" or "Thought so" energy
- Confidence, playfulness, no apology
- Flirty, bold, wholesome

**End Message**: "Thought so. 😈"

**Specs**:
- Format: MP4 (H.264)
- Resolution: 720p or 1080p
- Duration: 15-45 seconds
- Size: Under 30MB
- Tone: Cheeky, confident, direct

---

## 🎬 GAME FLOW REFERENCE

### YES Path (5 clicks)
```
Click 1: "Are you sure?" 🐧
Click 2: "Really?" 😿
Click 3: "Think again." 😾
Click 4: "You're lying." 🙃
Click 5: → behave-yes.mp4 plays ⚡
```

### NO Path (instant)
```
Click 1: → behave-no-new.mp4 plays ⚡
```

---

## 🎨 VIDEO CONTENT GUIDELINES

### DO Include:
✅ Personal, direct address (talking to camera)
✅ Playful facial expressions
✅ Light teasing or flirty tone
✅ Wholesome, warm energy
✅ Clear audio quality
✅ Good lighting (soft, warm if possible)

### DON'T Include:
❌ Loud or jarring content
❌ Anything too serious or dramatic
❌ Low-quality audio/video
❌ Overly long videos (keep under 45s)

---

## 🔄 REPLACEMENT NOTES

### Old Video (DEPRECATED)
- **File**: `behave-no.mp4`
- **Status**: No longer used
- **Action**: Can be removed or renamed

### New Videos (REQUIRED)
- **YES video**: `behave-yes.mp4` (NEW)
- **NO video**: `behave-no-new.mp4` (NEW)

---

## 🧪 TESTING YOUR VIDEOS

### Upload Steps
1. Place video files in `public/videos/`
2. Ensure filenames match exactly:
   - `behave-yes.mp4`
   - `behave-no-new.mp4`
3. Restart Next.js dev server
4. Navigate to the game section
5. Test both YES and NO paths

### Verification Checklist
- [ ] Video plays automatically when triggered
- [ ] Video has sound (background audio mutes)
- [ ] Video controls appear and work
- [ ] Video fits screen nicely on mobile
- [ ] After video: Background audio resumes
- [ ] After video: Correct end message shows
- [ ] No console errors

---

## 🎯 EMOTIONAL GOALS

### YES Video (behave-yes.mp4)
**Emotion**: Playful reward
**Message**: "I knew you'd keep clicking"
**Vibe**: Teasing but affectionate

### NO Video (behave-no-new.mp4)
**Emotion**: Confident acknowledgment
**Message**: "Of course you chose NO"
**Vibe**: Cheeky and direct

---

## 📱 MOBILE OPTIMIZATION

### Best Practices
- **Vertical or square aspect ratio** works better on mobile
- **Subtitles** optional but helpful (silent autoplay)
- **First frame** should be meaningful (video preview)
- **File size** under 30MB for fast loading

### Testing on Mobile
- Test on actual mobile device
- Check video controls are touch-friendly
- Verify audio mutes background music
- Ensure smooth playback

---

## 🚨 FALLBACK BEHAVIOR

### If Video Files Are Missing
- Browser shows native "video not available" UI
- Error is logged to console
- Background audio resumes (won't stay muted)
- User can scroll away
- Website doesn't crash

**Recommendation**: Add videos before sharing!

---

## ✅ CURRENT STATUS

- [x] Game logic fixed
- [x] Dynamic video source implemented
- [x] Button disabling added
- [x] Error handling in place
- [ ] **behave-yes.mp4** uploaded
- [ ] **behave-no-new.mp4** uploaded
- [ ] Videos tested in browser
- [ ] Videos tested on mobile

---

**Ready to add your videos!** 🎥
Place them in `public/videos/` with the exact filenames above.

