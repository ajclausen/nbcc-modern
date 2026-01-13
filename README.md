# New Brunswick Church of Christ Website

A modern, high-performance website for New Brunswick Church of Christ (NBCC) in Lebanon, Indiana. Built with Astro SSG and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/          # Optimized images
│   │   └── videos/          # Hero video (add your own)
│   ├── components/
│   │   ├── global/          # Header, Footer, Navigation
│   │   ├── hero/            # VideoHero, AnimatedTitle
│   │   ├── sections/        # ServiceTimes, WelcomeSection, etc.
│   │   ├── cards/           # EventCard, InfoCard
│   │   ├── ui/              # Button, Container, Icon, etc.
│   │   └── media/           # FacebookEmbed
│   ├── content/
│   │   └── events/          # Event markdown files
│   ├── data/
│   │   ├── siteConfig.ts    # Church info, contact, social
│   │   ├── serviceTimes.ts  # Service schedule
│   │   └── navigation.ts    # Site navigation
│   ├── layouts/
│   │   ├── BaseLayout.astro # Root layout with SEO
│   │   └── PageLayout.astro # Standard page layout
│   ├── pages/               # All site pages
│   ├── styles/
│   │   └── global.css       # Tailwind + design tokens
│   └── utils/
│       └── formatDate.ts    # Date formatting helpers
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Customization Guide

### Updating Service Times

Edit `src/data/serviceTimes.ts`:

```typescript
export const serviceTimes: ServiceTime[] = [
  {
    id: 'sunday-school',
    name: 'Sunday School',
    time: '9:00 AM',
    day: 'Sundays',
    icon: 'book',
    note: 'Classes for all ages',
    order: 1,
  },
  // ... add or modify services
];
```

### Updating Church Information

Edit `src/data/siteConfig.ts`:

```typescript
export const siteConfig = {
  name: 'New Brunswick Church of Christ',
  shortName: 'NBCC',
  tagline: 'Uplifting Christ to bring Salvation to the Lost',

  contact: {
    address: '6480 S State Road 39',
    city: 'Lebanon',
    state: 'IN',
    zip: '46052',
    phone: '765-482-5265',
    email: 'office@nbcc-church.org',
  },

  social: {
    facebook: 'https://www.facebook.com/...',
  },
  // ...
};
```

### Adding Events

Create a new markdown file in `src/content/events/`:

```markdown
---
title: "Event Title"
date: 2025-03-15
time: "6:00 PM"
location: "NBCC Fellowship Hall"
description: "Brief description of the event."
category: "fellowship"  # worship, fellowship, outreach, youth, children, education, special
featured: false
published: true
---

## About This Event

Full event details in markdown...
```

### Adding a Hero Video

1. Prepare your video:
   - Format: MP4 (H.264)
   - Resolution: 1920x1080 or 1280x720
   - Duration: 15-30 seconds, seamless loop
   - File size: Under 5MB for best performance

2. Add to `src/assets/videos/hero-background.mp4`

3. Update the VideoHero component in `src/pages/index.astro`:
   ```astro
   <VideoHero
     videoSrc="/path/to/video.mp4"
     posterSrc="https://..."
   />
   ```

### Updating the Logo

When you have the church logo:

1. Add the logo file to `public/logo.svg` or `src/assets/images/`
2. Update the Header component in `src/components/global/Header.astro`
3. Update the Footer component in `src/components/global/Footer.astro`

### Adding Online Giving

1. Get your giving platform embed code (Tithe.ly, Pushpay, etc.)
2. Update `src/pages/giving.astro` to include the embed
3. Replace the placeholder section with your iframe

### Updating Livestream

1. Update the Facebook page URL in `src/data/siteConfig.ts`
2. If using a different platform, update `src/pages/livestream.astro`

## Deployment

### Static Hosting (Recommended)

The site builds to static HTML and can be deployed anywhere:

**Netlify:**
```bash
npm run build
# Deploy the `dist` folder
```

Or connect your Git repository and Netlify will auto-deploy.

**Vercel:**
```bash
npx vercel
```

**Cloudflare Pages:**
1. Connect your repository
2. Build command: `npm run build`
3. Output directory: `dist`

### Custom Domain

1. Update the `site` field in `astro.config.mjs`:
   ```javascript
   export default defineConfig({
     site: 'https://your-domain.com',
     // ...
   });
   ```

2. Update `public/robots.txt` with the correct sitemap URL

## Performance Checklist

The site is optimized for Lighthouse 100 scores. To maintain performance:

- [ ] Images are optimized and properly sized
- [ ] Hero video is under 5MB
- [ ] Fonts are limited to Cormorant Garamond, Inter, and Caveat
- [ ] No large third-party scripts added
- [ ] Images have width/height attributes
- [ ] Below-fold images use `loading="lazy"`

### Running Lighthouse

1. Build the site: `npm run build`
2. Preview: `npm run preview`
3. Open Chrome DevTools > Lighthouse
4. Run audit on desktop and mobile

## Content Checklist

Items the church can update or provide:

- [ ] Church logo (to replace text logo)
- [ ] Hero video (community/worship footage)
- [ ] Staff/leadership photos and bios (if desired)
- [ ] Ministry descriptions (if desired)
- [ ] Online giving platform integration
- [ ] Additional events
- [ ] Photo gallery images

## Tech Stack

- **Framework:** [Astro](https://astro.build) 5.x (Static Site Generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) 4.x
- **Content:** Astro Content Collections with Zod validation
- **Fonts:** Google Fonts (Cormorant Garamond, Inter, Caveat)
- **Icons:** Custom SVG icon system

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari
- Chrome for Android

## Accessibility

The site follows WCAG 2.1 AA guidelines:

- Semantic HTML structure
- Skip link for keyboard navigation
- ARIA labels where needed
- Color contrast ratios > 4.5:1
- Reduced motion support
- Focus indicators

## License

This website was built for New Brunswick Church of Christ. All rights reserved.

---

Built with care for NBCC.
