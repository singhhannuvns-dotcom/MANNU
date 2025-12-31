# Deployment Guide

## 🚀 Deploying to Vercel (Recommended)

Vercel is the easiest option for Next.js apps and offers free hosting.

### Step 1: Prepare Your Repository

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Romantic scroll site"

# Create GitHub repo and push
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Next.js settings
6. Click "Deploy"

**Done!** Your site will be live at `your-project.vercel.app`

### Custom Domain (Optional)

In Vercel dashboard:
1. Go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

## 🌐 Alternative: Netlify

### Step 1: Build Settings

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "New site from Git"
4. Connect repository
5. Deploy

---

## 💻 Self-Hosted VPS

### Requirements
- Node.js 18+ installed
- PM2 for process management

### Setup

```bash
# On your server
git clone your-repo-url
cd your-project

# Install dependencies
npm install

# Build
npm run build

# Install PM2
npm install -g pm2

# Start with PM2
pm2 start npm --name "romantic-site" -- start

# Save PM2 config
pm2 save
pm2 startup
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🔒 Privacy & Security

### Make it Private

**Option 1: Password Protection (Vercel)**

Install `next-password-protect`:
```bash
npm install next-password-protect
```

Create `middleware.ts`:
```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const password = request.cookies.get('password')?.value
  
  if (password !== 'your-secret-password') {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/',
}
```

**Option 2: Vercel Authentication**

Use Vercel's built-in password protection:
1. Project Settings → Protection
2. Enable "Password Protection"
3. Set a password

**Option 3: Private Link**

- Don't link publicly
- Share only the direct URL
- Use obscure subdomain: `your-unique-code.vercel.app`

---

## 📱 Sharing the Link

### Getting the Perfect Share Experience

**Mobile Deep Link Setup:**

Add to `app/layout.tsx`:
```tsx
export const metadata = {
  title: 'For You',
  openGraph: {
    title: 'Something I made for you',
    description: 'Open this when you're alone.',
  },
}
```

### How to Share

**Over Text:**
```
"Made something for you. 
Open it when you're alone.
[link]"
```

**In Person:**
```
"There's something I want you to see.
I'll text you the link.
No pressure to open it right away."
```

**Note/Letter:**
```
Scan this QR code when you're alone.
[QR code to site]
```

---

## 🎯 Pre-Launch Checklist

Before sharing with them:

- [ ] Test on your phone (iOS and Android if possible)
- [ ] Check all media files load correctly
- [ ] Test music plays (and mute button works)
- [ ] Verify all text is personalized
- [ ] Check for typos/grammar
- [ ] Test scroll animations are smooth
- [ ] Verify mobile responsiveness
- [ ] Test in different browsers (Safari, Chrome, Firefox)
- [ ] Check page load speed
- [ ] Test with slow internet connection
- [ ] Clear browser cache and test again
- [ ] Have a friend test it (without context)
- [ ] Check privacy settings if needed
- [ ] Screenshot key sections as backup

---

## 📊 Analytics (Optional)

Track if they visit without notifying them:

### Vercel Analytics

```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

Shows you:
- If they visited
- How long they stayed
- Which device they used
- (But not who specifically, unless you know when you sent it)

---

## 🆘 Emergency Actions

### If You Need to Take it Down Fast

**Vercel:**
```bash
vercel --prod --delete
```

Or in dashboard: Settings → Delete Project

**GitHub:**
- Make repo private immediately
- Or delete the repo

### If You Want to Update After Deploying

```bash
# Make changes locally
git add .
git commit -m "Update content"
git push

# Auto-deploys on Vercel/Netlify
```

---

## 💡 Pro Tips

1. **Timing matters**: Deploy before you share, but share when the moment feels right
2. **Test privately first**: Use a different subdomain for testing
3. **Have a backup plan**: Screenshot the site in case you need to take it down
4. **Don't overthink**: Once it's deployed, let it speak for itself
5. **Respect their response**: Whether they say something or nothing

---

## 🎬 Final Thoughts

This is vulnerable. That's the point.

Make sure you're ready for any response:
- They love it
- They don't respond
- They're not interested
- They feel overwhelmed

Whatever happens, you were brave. That matters.

Good luck. 🖤

