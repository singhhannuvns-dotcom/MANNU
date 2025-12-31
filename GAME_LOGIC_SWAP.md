# 🎮 QUESTION GAME - LOGIC SWAP (MISCHIEVOUS MODE)

## Overview
Intentionally swapped the Yes/No button behavior to create a playful, teasing experience where expectations are subverted.

## 🔄 BEHAVIOR SWAP

### ❌ OLD BEHAVIOR (Removed)
- **YES button**: Played video immediately
- **NO button**: Looped with reactions, then played video after 4+ clicks

### ✅ NEW BEHAVIOR (Implemented)

#### YES Button (😇) - **LOOP & TEASE**
**Never plays video. Ever.**

**What it does**:
1. Changes the question text playfully
2. Shows penguin reactions
3. Adds teasing messages
4. Loops indefinitely
5. Button shakes when clicked

**Question Progression** (7 levels):
```
Click 0: "Should I stop being naughty?"
Click 1: "Are you sure?"
Click 2: "Really?"
Click 3: "Think again."
Click 4: "You're lying."
Click 5: "Last chance."
Click 6+: "I don't believe you." (stays here)
```

**Reactions After Each YES Click**:
- Emoji appears (penguin/sad faces): 🐧 😿 😾 🙃 😤 😏
- Teasing text: "Are you sure?", "Really?", etc.
- Emoji rotates and scales (wobble animation)
- Button shakes briefly

**After 3+ YES Clicks**:
- Large sad penguin appears in top-left
- Stays visible until video plays
- Size: 70px
- Animation: Sad wobble

**After 4+ YES Clicks**:
- Additional italic text: "I don't believe you."
- Appears below main question
- Soft charcoal/60 color
- Emphasizes the teasing

---

#### NO Button (😈) - **INSTANT PAYOFF**
**Boom. Immediate reward.**

**What it does**:
1. ✅ Instantly triggers video
2. ✅ Mutes background audio
3. ✅ No confirmation
4. ✅ No delay
5. ✅ Smooth transition

**Video**:
- File: `/videos/behave-no.mp4`
- Auto-plays immediately
- Shows video controls
- After video ends:
  - Audio resumes automatically
  - Shows text: "Thought so. 😏"
  - Normal scroll flow continues

---

## 🎭 PSYCHOLOGICAL DESIGN

### The Tease
1. User sees "Should I stop being naughty?"
2. Expects YES = good behavior, NO = naughty
3. Clicks YES (trying to be good)
4. **Plot twist**: "Are you sure?"
5. Confusion → Clicks YES again
6. "Really?" → More confusion
7. "Think again." → User realizes the game
8. Eventually clicks NO to see what happens
9. **Instant reward** - video plays immediately

### Why This Works
- **Subverts expectations** - YES should mean "yes", but it doesn't
- **Creates curiosity** - "What happens if I click NO?"
- **Playful frustration** - YES keeps teasing, never satisfies
- **Instant gratification** - NO delivers immediately
- **Mischievous tone** - Matches "naughty" theme
- **Clever, not buggy** - Feels intentional

---

## 🎨 UI/UX DETAILS

### Question Animation
- Key: `question-${yesCount}` (forces re-render on change)
- Initial: opacity 0, scale 0.95, y: -10
- Animate: opacity 1, scale 1, y: 0
- Duration: 0.3-0.4s
- Smooth text transitions

### Reaction Display
- Appears after first YES click
- Large emoji (text-6xl, 60px)
- Wobble animation: rotate ±10°, scale 1 → 1.1
- Repeats 2 times, 0.5s duration
- Text below: italic, 2xl, soft-charcoal/70

### Button Shake (YES)
- Triggers on click when `showPenguinReaction` is true
- X-axis shake: 0 → -5 → 5 → -5 → 5 → 0
- Rotate: 0 → -2° → 2° → -2° → 2° → 0
- Duration: 0.5s
- Conveys "rejected" feeling

### Video Transition
- Scale: 0.8 → 1
- Rotate: -10° → 0°
- Opacity: 0 → 1
- Spring animation (stiffness: 100, damping: 15)
- Feels dynamic and satisfying

---

## 📊 CLICK FLOW COMPARISON

### User Clicks YES Multiple Times
```
Click 1: "Should I stop being naughty?"
         ↓ (YES)
Click 2: "Are you sure?" 🐧
         ↓ (YES)
Click 3: "Really?" 😿
         ↓ (YES)
Click 4: "Think again." 😾
         ↓ (YES)
Click 5: "You're lying." 🙃
         + Sad penguin appears
         ↓ (YES)
Click 6: "Last chance." 😤
         + "I don't believe you." (italic)
         ↓ (YES)
Click 7+: "I don't believe you." 😏
         + Stays at this level
         ↓ (User gives up, clicks NO)
         = VIDEO PLAYS INSTANTLY ✨
```

### User Clicks NO Immediately
```
Click 1: "Should I stop being naughty?"
         ↓ (NO)
         = VIDEO PLAYS INSTANTLY ✨
         = "Thought so. 😏"
```

---

## 🎯 KEY FEATURES

### YES Button Behavior
✅ **Never plays video** - Loops indefinitely
✅ **7 question variations** - Gets more teasing
✅ **Penguin reactions** - Emoji + text changes
✅ **Button shake** - Visual feedback
✅ **Sad penguin** - Appears after 3+ clicks
✅ **Italic text** - "I don't believe you" after 4+ clicks
✅ **Smooth transitions** - Question slides in/out

### NO Button Behavior
✅ **Instant video** - No delay, no confirmation
✅ **Auto-mute audio** - Background audio pauses
✅ **Auto-resume audio** - Resumes after video
✅ **Error handling** - Graceful fallback
✅ **Smooth animation** - Spring-based entrance
✅ **End message** - "Thought so. 😏"

---

## 🛠️ TECHNICAL IMPLEMENTATION

### State Management
```typescript
const [yesCount, setYesCount] = useState(0)              // YES click count
const [showVideo, setShowVideo] = useState(false)        // Video visibility
const [videoEnded, setVideoEnded] = useState(false)      // Video completion
const [showPenguinReaction, setShowPenguinReaction] = useState(false) // Button shake trigger
```

### YES Handler Logic
```typescript
const handleYes = () => {
  if (yesCount < yesQuestions.length - 1) {
    setYesCount(yesCount + 1)  // Next question
  } else {
    setYesCount(yesQuestions.length - 1)  // Stay at last
  }
  // Trigger reaction
  setShowPenguinReaction(true)
  setTimeout(() => setShowPenguinReaction(false), 1500)
}
```

### NO Handler Logic
```typescript
const handleNo = () => {
  setShowVideo(true)      // Show video immediately
  muteForVideo()          // Mute background audio
}
```

### Dynamic Question Display
```typescript
<motion.h2 key={`question-text-${yesCount}`}>
  {yesQuestions[yesCount]}
</motion.h2>
```
- Key changes force re-animation
- Smooth question transitions

---

## 📱 MOBILE OPTIMIZATION

### Responsive
- Text sizes: 4xl → 5xl (responsive)
- Button sizes: px-10 py-4 (touch-friendly)
- Gap: 6 (comfortable spacing)
- Video: w-full (full width)

### Touch Interactions
- Buttons have clear tap targets
- Shake animation visible on mobile
- Video controls are native (mobile-friendly)
- No hover-only interactions

---

## 🎉 RESULT

### What Makes This Clever
1. **Unexpected** - YES doesn't do what you think
2. **Playful** - Teasing tone matches content
3. **Rewarding** - NO gives instant satisfaction
4. **Smooth** - Animations feel intentional
5. **Memorable** - Users remember the twist

### User Experience
- **First impression**: Normal choice
- **After YES click**: "Wait, what?"
- **After 2-3 YES**: "Is this broken?"
- **Realization**: "Oh, it's teasing me!"
- **Clicks NO**: "Finally! Let's see..."
- **Video plays**: "Ah, that's the reward!"
- **Reaction**: Smile 😏

### Emotional Arc
```
Expectation → Confusion → Frustration → 
Realization → Curiosity → Satisfaction
```

**Perfect mischievous interaction!** 😈✨

The game now feels clever, intentional, and perfectly matches the "naughty" theme!

