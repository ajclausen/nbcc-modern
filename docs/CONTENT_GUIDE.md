# NBCC Content Guide

A guide for updating website content without touching code.

---

## Quick Reference

| What to Update | File Location |
|----------------|---------------|
| Service times | `src/data/serviceTimes.ts` |
| Church info (address, phone, etc.) | `src/data/siteConfig.ts` |
| Navigation links | `src/data/navigation.ts` |
| Events | `src/content/events/*.md` |
| Page hero images | Individual page files in `src/pages/` |

---

## Updating Service Times

Edit `src/data/serviceTimes.ts`:

```typescript
export const serviceTimes: ServiceTime[] = [
  {
    id: 'sunday-school',
    name: 'Sunday School',
    time: '9:00 AM',
    day: 'Sundays',
    icon: 'book',
    note: 'Classes for all ages',  // Optional
    order: 1,  // Display order
  },
  {
    id: 'main-service',
    name: 'Sunday Worship',
    time: '10:00 AM',
    day: 'Sundays',
    icon: 'church',
    order: 2,
  },
  // Add more services...
];
```

### Available Icons
- `book` - Open book
- `church` - Church building
- `users` - Group of people
- `heart` - Heart
- `calendar` - Calendar
- `clock` - Clock

---

## Updating Church Information

Edit `src/data/siteConfig.ts`:

```typescript
export const siteConfig = {
  name: 'New Brunswick Church of Christ',
  shortName: 'NBCC',
  tagline: 'Uplifting Christ to bring Salvation to the Lost',
  founded: 1856,

  contact: {
    address: '6480 S State Road 39',
    city: 'Lebanon',
    state: 'IN',
    zip: '46052',
    phone: '765-482-5265',
    phoneFormatted: '(765) 482-5265',
    email: 'office@nbcc-church.org',
    mapUrl: 'https://maps.google.com/?q=...',
  },

  social: {
    facebook: 'https://www.facebook.com/...',
    // Add more social links as needed
  },
};
```

---

## Adding Events

### Create a New Event

1. Create a new file in `src/content/events/`
2. Name it descriptively: `2025-03-easter-sunrise.md`

### Event Template

```markdown
---
title: "Easter Sunrise Service"
date: 2025-04-20
time: "7:00 AM"
endTime: "8:00 AM"
location: "NBCC Outdoor Area"
description: "Join us for a special sunrise service celebrating the resurrection of our Lord."
category: "worship"
featured: true
published: true
image: "./easter-2025.jpg"
---

## About This Event

Full description of the event goes here. You can use **bold**, *italic*, and other markdown formatting.

### What to Bring

- Lawn chairs or blankets
- Warm clothing
- A friend!

### Schedule

- 6:45 AM - Gather
- 7:00 AM - Service begins
- 8:00 AM - Fellowship breakfast
```

### Event Categories

| Category | Description |
|----------|-------------|
| `worship` | Sunday services, special worship events |
| `fellowship` | Potlucks, gatherings, social events |
| `outreach` | Community service, mission events |
| `youth` | Teen/young adult events |
| `children` | Kids programs and events |
| `education` | Bible studies, classes |
| `special` | Holidays, one-time events |

### Featured Events

Set `featured: true` to highlight an event on the homepage.

### Unpublishing Events

Set `published: false` to hide an event without deleting it.

---

## Updating Page Content

### Hero Images

Each page can have a unique hero background. Edit the page file and update the `heroImage` prop:

```astro
<PageLayout
  title="About Us"
  heroTitle="Our Story"
  heroSubtitle="A Spirit-filled community..."
  heroImage="https://images.unsplash.com/photo-xxxxx?w=1920&q=80"
>
```

### Finding Good Images

1. Visit [Unsplash](https://unsplash.com)
2. Search for relevant terms (church, community, worship, etc.)
3. Copy the image URL
4. Add `?w=1920&q=80` for optimal size

### Hero Image Guidelines

- Use landscape orientation
- Minimum 1920px wide
- Avoid busy/cluttered images
- Warm, welcoming tones preferred
- Avoid images with prominent text

---

## Updating Navigation

Edit `src/data/navigation.ts`:

```typescript
export const mainNavigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Beliefs', href: '/beliefs' },
  { label: 'Events', href: '/events' },
  { label: 'Giving', href: '/giving' },
  { label: 'Livestream', href: '/livestream' },
];

export const footerNavigation = {
  connect: [
    { label: 'About Us', href: '/about' },
    { label: 'What We Believe', href: '/beliefs' },
    { label: 'Plan a Visit', href: '/visit' },
    { label: 'Contact', href: '/contact' },
  ],
};
```

---

## Updating the Giving Page

### Adding Online Giving

1. Get your giving platform embed code (Tithe.ly, Pushpay, etc.)
2. Open `src/pages/giving.astro`
3. Find the "Online Giving Coming Soon" section
4. Replace with your embed code

### Example Tithe.ly Integration

```html
<div class="rounded-2xl overflow-hidden">
  <iframe
    src="https://tithe.ly/give?c=xxxxx"
    width="100%"
    height="500"
    frameborder="0"
  ></iframe>
</div>
```

---

## Updating Livestream

### Facebook Live (Current Setup)

The livestream page automatically links to your Facebook page. Update the URL in `src/data/siteConfig.ts`:

```typescript
social: {
  facebook: 'https://www.facebook.com/your-page',
},
```

### Using a Different Platform

Edit `src/pages/livestream.astro` to embed your preferred platform (YouTube, Vimeo, etc.).

---

## Adding Staff/Leadership (Future)

If you want to add a staff page later:

1. Create `src/content/staff/` directory
2. Add markdown files for each person:

```markdown
---
name: "Pastor John Smith"
role: "Senior Pastor"
image: "./john-smith.jpg"
email: "john@nbcc-church.org"
order: 1
---

Pastor John has been serving at NBCC since...
```

---

## Image Optimization

### Best Practices

1. **Size**: Keep images under 500KB when possible
2. **Format**: Use JPEG for photos, PNG for graphics, SVG for icons
3. **Dimensions**:
   - Hero images: 1920px wide
   - Card images: 800px wide
   - Thumbnails: 400px wide

### Using Unsplash

Unsplash URLs can be optimized with parameters:
- `?w=1920` - Set width
- `&q=80` - Set quality (80 is good balance)
- `&fit=crop` - Crop to fit
- `&crop=center` - Crop from center

Example:
```
https://images.unsplash.com/photo-xxxxx?w=1920&q=80&fit=crop
```

---

## Content Writing Tips

### Headlines
- Keep them short (2-6 words)
- Use active voice
- Focus on benefit to visitor

### Body Text
- Write at 8th grade reading level
- Use short paragraphs (2-3 sentences)
- Avoid church jargon
- Be warm and welcoming

### Calls to Action
- Use action words: "Join," "Discover," "Plan"
- Be specific: "Plan Your Visit" vs "Learn More"
- Create urgency when appropriate: "This Sunday"

---

## Getting Help

If you need to make changes beyond what's covered here:

1. Check the main [README.md](../README.md) for technical details
2. Review the [Brand Guidelines](./BRAND_GUIDELINES.md) for design standards
3. Contact your web developer for complex changes
