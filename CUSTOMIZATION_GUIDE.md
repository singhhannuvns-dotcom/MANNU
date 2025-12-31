# 🎨 Customization Guide - New Year Edition

## Quick Customization Checklist

### ✏️ Text Content (Priority: HIGH)

#### 1. Wholesome Flirty Lines
**File:** `components/sections/WholesomeFlirty.tsx`

**Current lines:**
- "You know that feeling when someone texts you back?"
- "I don't say this to everyone..."
- "Fun fact: My phone lights up differently when it's you."
- etc.

**How to change:**
1. Open the file
2. Find the `wholesomeLines` array (around line 6)
3. Edit `text` and `subtext` for each line
4. Keep the tone: sweet, safe, gently flirty

**Example:**
```typescript
{
  text: "Your own custom line here",
  subtext: "Your follow-up here",
  position: 'left' // or 'right' or 'center'
}
```

---

#### 2. Cat Meme Captions
**File:** `components/sections/CatMemes.tsx`

**Current captions:**
- "This is how I smile when you reply"
- "POV: you made someone's year better"
- etc.

**How to change:**
1. Open the file
2. Find the `catMemes` array (around line 7)
3. Edit `caption` for each meme
4. Keep it wholesome and relatable

---

#### 3. Yes/No Game Responses
**File:** `components/sections/YesNoGame.tsx`

**Current responses after clicking "No":**
- "Okay, fair..."
- "Not even a little?"
- "Come on, be honest"
- etc.

**How to change:**
1. Open the file
2. Find `noResponses` array (line 14)
3. Edit each response
4. Last response triggers the video reveal!

---

#### 4. Opening Lines
**File:** `components/sections/NewYearEntry.tsx`

**Current text:**
- "New year"
- "New memories"
- "Same curiosity"

**How to change:**
Edit lines 46, 56, and 66 directly in the component.

---

#### 5. Closing Message
**File:** `components/sections/SoftClosing.tsx`

**Current text:**
- "Here's to new beginnings"
- "And to people who make them worth looking forward to."

**How to change:**
Edit the text in the ScrollReveal components (around lines 14-40).

---

### 🖼️ Adding Images

#### Cat Meme Images

**Step 1:** Collect 6 cat images
- Find wholesome, relatable cat memes
- Pinterest, Google Images, or create your own
- Square format works best (500x500px minimum)

**Step 2:** Save to project
```
/public/images/cats/
  - cat1.jpg
  - cat2.jpg
  - cat3.jpg
  - cat4.jpg
  - cat5.jpg
  - cat6.jpg
```

**Step 3:** Update `CatMemes.tsx`

Replace the placeholder emoji section with:
```typescript
<img 
  src={`/images/cats/cat${index + 1}.jpg`}
  alt={alt}
  className="w-full h-full object-cover"
/>
```

Replace this section (around line 52):
```typescript
<div className="aspect-square bg-gradient-to-br from-champagne to-rose-blush flex items-center justify-center text-7xl p-8">
  {placeholder}
</div>
```

With:
```typescript
<div className="aspect-square overflow-hidden">
  <img 
    src={`/images/cats/cat${index + 1}.jpg`}
    alt={alt}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  />
</div>
```

---

### 🎬 Adding Your Video

**File location:** `/public/videos/special-video.mp4`

**Poster image:** `/public/images/video-poster.jpg`

**Recommendations:**
- Keep video under 30 seconds for emotional impact
- Use horizontal format (16:9)
- Good lighting, clear audio
- Personal message or montage works great

**Already wired up!** Just drop the file in and it will auto-play when the final "No" is clicked.

---

### 🎵 Background Music (Optional)

**File location:** `/public/audio/ambient.mp4`

**Update in:** `components/AudioPlayer.tsx` (line 42)

Uncomment and update:
```typescript
<source src="/audio/ambient.mp3" type="audio/mpeg" />
```

**Music recommendations:**
- Soft piano or acoustic
- Lo-fi beats
- Ambient soundscapes
- Keep volume low (0.2-0.3)

---

### 🎨 Color Customization

**File:** `tailwind.config.ts`

**Current palette:**
```typescript
'warm-white': '#faf8f5',     // Main background
'warm-beige': '#f5ede4',     // Secondary background
'champagne': '#f4e8d8',      // Gradient accent
'rose-blush': '#f0d5d5',     // Soft pink accent
'muted-rose': '#e8bfbf',     // Hover states
'warm-gold': '#d4af7a',      // Primary accent
```

**To change:**
1. Find your preferred color codes
2. Replace the hex values
3. Save and the entire site updates!

**Pro tip:** Use [Coolors.co](https://coolors.co) to generate harmonious warm palettes.

---

### ⚙️ Animation Speed

To make animations faster or slower:

**Find in any section component:**
```typescript
<ScrollReveal 
  variant="fadeIn" 
  delay={0.5}      // Wait time before animating (seconds)
  duration={1.2}   // Animation length (seconds)
>
```

**Slower = More dramatic**  
**Faster = More energetic**

Default values are carefully tuned for gentle, warm pacing.

---

### 📐 Spacing & Layout

**Section padding:**
File: `app/globals.css` (line 17)
```css
.section-padding {
  @apply px-6 sm:px-12 lg:px-24 py-20 sm:py-32 lg:py-40;
}
```

Adjust the `py-` values to change vertical spacing.

---

## 🔧 Advanced Customizations

### Add More Flirty Lines

In `WholesomeFlirty.tsx`, just add more objects to the array:

```typescript
{
  text: "Your new line",
  subtext: "Your new subtext",
  position: 'center'
}
```

### Change Countdown Numbers

In `Countdown.tsx`, change the starting number (line 18):
```typescript
setCount(3)  // Change to 5, 10, etc.
```

### Modify Yes/No Responses

Add more variations in `YesNoGame.tsx`:
```typescript
const noResponses = [
  "Your response 1",
  "Your response 2",
  // ... add as many as you want
  "Final response before video"
]
```

---

## 🎯 Testing Your Changes

After making changes:

1. **Save all files**
2. **Check browser** - Next.js hot-reloads automatically
3. **Test on mobile** - Scroll through entire site
4. **Verify flow:**
   - Entry → Flirty text → Cat memes
   - Countdown → Yes/No game
   - Video reveal → Closing

---

## 💡 Content Writing Tips

### For Flirty Text:
- Start sweet, get slightly bolder
- Use "you" statements
- Add specific observations
- Balance confidence with gentleness

### For Cat Captions:
- Keep them relatable
- Match your humor style
- First-person perspective works well
- Reference shared moments if possible

### For Yes/No Responses:
- First few: playful, light
- Middle: slightly more direct
- Last: confident segue to video

---

## 🚨 Common Mistakes to Avoid

❌ **Too many text changes at once** - Change one section, test, repeat  
❌ **Wrong file paths** - Use `/public/` prefix for all assets  
❌ **Forgetting mobile** - Always test on actual phone  
❌ **Too much text** - Brevity = impact  
❌ **Breaking the flow** - Test the Yes/No → Video transition  

---

## ✅ Final Checklist

- [ ] Personalized all flirty lines
- [ ] Added 6 cat meme images
- [ ] Updated cat captions to match your humor
- [ ] Customized Yes/No responses
- [ ] Added your special video
- [ ] Optional: Added background music
- [ ] Tested entire flow on desktop
- [ ] Tested on mobile phone
- [ ] Checked all animations are smooth
- [ ] Verified video plays after final No

---

**You've got this!** The structure is solid, now make it uniquely yours. 🌟

