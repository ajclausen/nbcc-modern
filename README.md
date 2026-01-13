# New Brunswick Church of Christ Website

A modern, high-performance website for New Brunswick Church of Christ (NBCC) in Lebanon, Indiana. Built with Astro SSG and Tailwind CSS v4, featuring the "Indiana Heritage" design system.

**Live Site:** [Coming Soon]

## Features

- Static site generation for blazing-fast performance
- Responsive design optimized for all devices
- Editorial design aesthetic with warm, welcoming feel
- Events system with content collections
- Facebook livestream integration
- SEO optimized with sitemap generation
- WCAG 2.1 AA accessible

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

## Documentation

| Document | Description |
|----------|-------------|
| [Brand Guidelines](./docs/BRAND_GUIDELINES.md) | Colors, typography, UI components, design patterns |
| [Content Guide](./docs/CONTENT_GUIDE.md) | How to update content without coding |

## Project Structure

```
/
├── docs/
│   ├── BRAND_GUIDELINES.md    # Design system documentation
│   └── CONTENT_GUIDE.md       # Content editing guide
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── global/            # Header, Footer, Navigation
│   │   ├── hero/              # VideoHero
│   │   ├── sections/          # ServiceTimes, LocationCard, etc.
│   │   ├── cards/             # EventCard
│   │   ├── ui/                # Button, Container, Icon, etc.
│   │   └── media/             # FacebookEmbed
│   ├── content/
│   │   └── events/            # Event markdown files
│   ├── data/
│   │   ├── siteConfig.ts      # Church info, contact, social
│   │   ├── serviceTimes.ts    # Service schedule
│   │   └── navigation.ts      # Site navigation
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Root layout with SEO
│   │   └── PageLayout.astro   # Standard page with hero
│   ├── pages/                 # All site pages
│   │   ├── index.astro        # Homepage
│   │   ├── about.astro
│   │   ├── beliefs.astro
│   │   ├── contact.astro
│   │   ├── giving.astro
│   │   ├── livestream.astro
│   │   ├── visit.astro
│   │   └── events/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   ├── styles/
│   │   └── global.css         # Tailwind + design tokens
│   └── utils/
│       └── formatDate.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Design System: "Indiana Heritage"

A warm, editorial aesthetic honoring 168 years of faithful ministry.

### Color Palette

| Color | Primary Use |
|-------|-------------|
| **Primary Blues** | Brand colors from logo (#1B4F72, #8BB8D3) |
| **Terra (Terracotta)** | Call-to-action buttons, accents (#c56a42) |
| **Golden** | Highlights, special emphasis (#edc545) |
| **Cream** | Warm backgrounds (#fefdfb) |
| **Stone** | Text colors (#524a40) |

### Typography

| Font | Usage |
|------|-------|
| **Playfair Display** | Headings, display text |
| **Source Sans 3** | Body text, UI elements |
| **Caveat** | Handwritten accents, scripture |

See [Brand Guidelines](./docs/BRAND_GUIDELINES.md) for complete design documentation.

## Common Tasks

### Update Service Times

Edit `src/data/serviceTimes.ts`:

```typescript
{
  id: 'sunday-school',
  name: 'Sunday School',
  time: '9:00 AM',
  day: 'Sundays',
  icon: 'book',
  order: 1,
}
```

### Update Church Information

Edit `src/data/siteConfig.ts`:

```typescript
contact: {
  address: '6480 S State Road 39',
  city: 'Lebanon',
  state: 'IN',
  zip: '46052',
  phone: '765-482-5265',
  email: 'office@nbcc-church.org',
}
```

### Add an Event

Create a markdown file in `src/content/events/`:

```markdown
---
title: "Event Title"
date: 2025-03-15
time: "6:00 PM"
location: "NBCC Fellowship Hall"
description: "Brief description."
category: "fellowship"
featured: false
published: true
---

Event details in markdown...
```

### Update Page Hero Images

Edit the page file and add/change the `heroImage` prop:

```astro
<PageLayout
  title="Page Title"
  heroImage="https://images.unsplash.com/photo-xxx?w=1920&q=80"
>
```

See [Content Guide](./docs/CONTENT_GUIDE.md) for detailed instructions.

## Deployment

### Recommended: Static Hosting

The site builds to static HTML and can be deployed anywhere.

**Netlify:**
1. Connect your Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`

**Vercel:**
```bash
npx vercel
```

**Cloudflare Pages:**
1. Connect your repository
2. Build command: `npm run build`
3. Output directory: `dist`

### Custom Domain Setup

1. Update `site` in `astro.config.mjs`:
   ```javascript
   site: 'https://your-domain.com',
   ```
2. Update `public/robots.txt` with correct sitemap URL
3. Configure DNS with your hosting provider

## Performance

The site is optimized for Lighthouse 100 scores:

- Images optimized with Sharp
- Self-hosted fonts with `font-display: swap`
- Minimal JavaScript (islands architecture)
- Critical CSS inlined
- Lazy loading for below-fold content

### Maintaining Performance

- Keep images under 500KB
- Limit hero video to 5MB
- Don't add heavy third-party scripts
- Use `loading="lazy"` on below-fold images

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Astro](https://astro.build) | 5.x | Static site generation |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Utility-first styling |
| TypeScript | 5.x | Type safety |
| Sharp | - | Image optimization |
| Zod | - | Content validation |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari / Chrome

## Accessibility

WCAG 2.1 AA compliant:

- Semantic HTML structure
- Skip link for keyboard navigation
- Color contrast > 4.5:1
- Focus indicators on interactive elements
- `prefers-reduced-motion` respected
- ARIA labels where needed

## Content Checklist

Items the church can provide:

- [ ] Official church logo (to replace text logo)
- [ ] Hero video (community/worship footage)
- [ ] Staff photos and bios (optional)
- [ ] Online giving platform integration
- [ ] Additional events
- [ ] Photo gallery images

## License

This website was built for New Brunswick Church of Christ. All rights reserved.

---

Built with care for NBCC | Serving Lebanon, Indiana since 1856
