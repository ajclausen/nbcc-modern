# NBCC Brand Style Guidelines

## Design System: "Indiana Heritage"

A warm, editorial aesthetic honoring 168 years of faithful ministry. The design balances modern sophistication with rooted, authentic warmth—reflecting both the heritage of the church and its welcoming community spirit.

---

## Color Palette

### Primary Colors (NBCC Brand Blues)

Based on the church logo colors.

| Name | Hex | Usage |
|------|-----|-------|
| Primary 950 | `#0f2536` | Darkest backgrounds, footer |
| Primary 900 | `#173852` | Dark sections, hero overlays |
| Primary 800 | `#1a4463` | Dark accents |
| Primary 700 | `#1b4f72` | **Logo dark blue**, headings, primary text |
| Primary 600 | `#2d648c` | Links, interactive elements |
| Primary 500 | `#3a7da8` | Buttons, highlights |
| Primary 400 | `#5a9bc4` | Light accents |
| Primary 300 | `#8bb8d3` | **Logo light blue**, decorative |
| Primary 200 | `#b8dced` | Light backgrounds |
| Primary 100 | `#daeef7` | Subtle backgrounds |
| Primary 50 | `#f0f7fb` | Near-white backgrounds |

### Accent Colors

#### Terracotta (Earth, Indiana Clay)
Warm accent for calls-to-action and highlights.

| Name | Hex | Usage |
|------|-----|-------|
| Terra 700 | `#924a2d` | Dark accent |
| Terra 600 | `#b05836` | Hover states |
| Terra 500 | `#c56a42` | **Primary accent**, buttons |
| Terra 400 | `#d4815e` | Light accent |
| Terra 300 | `#e09b7d` | Decorative |

#### Golden (Harvest, Warmth)
Used for highlights and special emphasis.

| Name | Hex | Usage |
|------|-----|-------|
| Golden 600 | `#c49a1f` | Dark gold |
| Golden 500 | `#dbb02d` | Primary gold |
| Golden 400 | `#edc545` | **Highlight accent** |
| Golden 300 | `#f5d98a` | Light gold |

#### Sage (Fields, Growth)
Secondary accent for variety.

| Name | Hex | Usage |
|------|-----|-------|
| Sage 600 | `#557a4e` | Dark sage |
| Sage 500 | `#6d9964` | Primary sage |
| Sage 400 | `#8eb386` | Light sage |
| Sage 300 | `#a7c4a0` | Decorative |

### Neutral Colors

#### Cream (Aged Paper, Warmth)
Background colors throughout the site.

| Name | Hex | Usage |
|------|-----|-------|
| Cream 500 | `#e2cca0` | Darkest cream |
| Cream 400 | `#eddcbc` | Medium cream |
| Cream 300 | `#f5e9d4` | Light sections |
| Cream 200 | `#faf3e6` | Card backgrounds |
| Cream 100 | `#fdf9f3` | Page backgrounds |
| Cream 50 | `#fefdfb` | **Main background** |

#### Stone (Warm Grays)
Text and subtle UI elements.

| Name | Hex | Usage |
|------|-----|-------|
| Stone 950 | `#2a2520` | Darkest text |
| Stone 800 | `#524a40` | **Body text** |
| Stone 700 | `#635a4d` | Secondary text |
| Stone 600 | `#7a6f5f` | Muted text |
| Stone 500 | `#968a78` | Placeholder text |
| Stone 400 | `#b5ab9c` | Borders |
| Stone 200 | `#e8e4dd` | Light borders |
| Stone 100 | `#f5f3ef` | Light backgrounds |

---

## Typography

### Font Families

| Font | CSS Variable | Usage |
|------|--------------|-------|
| **Playfair Display** | `--font-display` | Headings, titles, display text |
| **Source Sans 3** | `--font-body` | Body text, paragraphs, UI |
| **Caveat** | `--font-accent` | Handwritten accents, quotes, scripture references |

### Type Scale

```css
h1 { font-size: clamp(2.5rem, 5vw + 1rem, 4.5rem); }  /* 40-72px */
h2 { font-size: clamp(2rem, 4vw + 0.5rem, 3.25rem); } /* 32-52px */
h3 { font-size: clamp(1.5rem, 2vw + 0.5rem, 2rem); }  /* 24-32px */
body { font-size: 1.0625rem; line-height: 1.7; }      /* 17px */
```

### Heading Styles

- Font family: Playfair Display
- Font weight: 600 (semibold)
- Line height: 1.15
- Letter spacing: -0.01em
- Color: `primary-900` for light backgrounds, `white` for dark

### Body Text

- Font family: Source Sans 3
- Font size: 17px base
- Line height: 1.7
- Color: `stone-800` for primary, `stone-600` for secondary

---

## UI Components

### Buttons

#### Primary Button (`.btn-warm`)
- Background: `terra-500`
- Text: White
- Padding: `0.875rem 2rem`
- Border radius: `0.75rem`
- Hover: `terra-600`

#### Secondary Button (`.btn-secondary`)
- Background: `primary-800`
- Text: White
- Padding: `0.875rem 2rem`
- Border radius: `0.75rem`
- Hover: `primary-900`

#### Outline Button (`.btn-outline`)
- Background: Transparent
- Border: 2px `primary-700`
- Text: `primary-700`
- Hover: `primary-50` background

### Cards

- Background: White or `cream-100`
- Border: 1px `cream-200`
- Border radius: `1rem` (16px)
- Padding: `2rem` (32px)
- Shadow: `shadow-soft`
- Hover shadow: `shadow-card`

### Number Badges

Used for numbered lists and steps.

- Size: `3rem x 3rem` (48px)
- Background: `terra-500`
- Text: White, bold
- Border radius: `0.75rem`
- Position: Overlapping card corner (`-top-3 -left-3`)

---

## Section Patterns

### Light Sections
- Background: `cream-50` to `cream-100` gradient
- Text: `primary-900` headings, `stone-600` body
- Decorative: Terra/golden accent lines

### Dark Sections
- Background: `primary-950` or `primary-900`
- Text: White headings, `primary-200` body
- Accents: `golden-400` for highlights, `terra-400` for emphasis
- Texture: Subtle noise overlay at 3% opacity

### Hero Sections
- Background: Full-bleed image with `primary-950/70` overlay
- Text: White
- Height: `py-20 md:py-28`

### Section Labels
```html
<div class="inline-flex items-center gap-2 mb-4">
  <span class="w-12 h-[2px] bg-terra-500"></span>
  <span class="text-terra-600 text-sm font-medium tracking-widest uppercase">Label</span>
</div>
```

For centered labels:
```html
<div class="inline-flex items-center gap-3 mb-4">
  <span class="w-8 h-[1px] bg-terra-400"></span>
  <span class="text-terra-600 text-sm font-medium tracking-widest uppercase">Label</span>
  <span class="w-8 h-[1px] bg-terra-400"></span>
</div>
```

---

## Shadows

| Name | Value | Usage |
|------|-------|-------|
| `shadow-soft` | `0 4px 20px -4px rgba(30, 52, 72, 0.08)` | Default cards |
| `shadow-card` | `0 8px 30px -8px rgba(30, 52, 72, 0.12)` | Hover states |
| `shadow-elevated` | `0 24px 48px -12px rgba(30, 52, 72, 0.18)` | Modals, hero elements |

---

## Spacing

Standard Tailwind spacing scale, with additions:

| Class | Value |
|-------|-------|
| `spacing-18` | 4.5rem (72px) |
| `spacing-22` | 5.5rem (88px) |
| `section-padding` | `py-20` (80px) |

---

## Border Radius

| Name | Value | Usage |
|------|-------|-------|
| `radius-soft` | 0.625rem (10px) | Small elements |
| `radius-card` | 1rem (16px) | Cards |
| `radius-large` | 1.5rem (24px) | Large cards, images |
| `rounded-2xl` | 1rem | Standard card rounding |

---

## Imagery Guidelines

### Photography Style
- Warm, golden-hour lighting preferred
- Authentic community moments (not stock-feeling)
- Indiana/heartland aesthetic
- Diverse, welcoming imagery
- Avoid overly staged or corporate looks

### Hero Images
Each page has a unique hero background:

| Page | Image Theme |
|------|-------------|
| About | Community worship/gathering |
| Beliefs | Open Bible, warm lighting |
| Events | Family/fellowship gathering |
| Giving | Community teamwork |
| Visit | Outdoor community scene |
| Livestream | Concert/worship atmosphere |
| Contact | Connection/handshake |

### Image Treatment
- Use dark overlay (`primary-950/70` to `primary-950/90`) on hero images
- Lazy load below-fold images
- Always include alt text
- Optimize for web (Sharp/Astro Image)

---

## Animations

### Transitions
- Duration: 300ms default
- Easing: `ease-out` or `cubic-bezier(0.22, 1, 0.36, 1)`
- Properties: `colors`, `shadow`, `transform`

### Hover Effects
- Cards: Lift with enhanced shadow
- Buttons: Darken background
- Links: Color shift
- Icons: Scale 110%

### Motion Preference
Always respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

---

## Accessibility

- Color contrast: Minimum 4.5:1 for normal text
- Focus indicators: Visible ring on interactive elements
- Skip links: Present for keyboard navigation
- ARIA labels: On icon-only buttons
- Semantic HTML: Proper heading hierarchy

---

## Logo Usage

Current: Text-based logo with "N" monogram in a rounded square.

- Primary: White text on `primary-700` background
- Monogram: Bold "N" in `primary-700` square
- Future: Replace with official church logo when available

---

## Voice & Tone

- **Warm**: Welcoming, friendly, like family
- **Authentic**: Real, honest, unpretentious
- **Hopeful**: Encouraging, positive, faith-filled
- **Clear**: Simple language, no church jargon
- **Inclusive**: Everyone is welcome

---

## CSS Classes Quick Reference

```css
/* Buttons */
.btn-warm      /* Terra/orange primary button */
.btn-primary   /* Blue primary button */
.btn-secondary /* Dark blue button */
.btn-outline   /* Outlined button */

/* Cards */
.card          /* Standard card styling */
.shadow-soft   /* Subtle shadow */
.shadow-card   /* Elevated shadow */

/* Layout */
.container-default  /* Max-width container with padding */
.section-padding    /* Standard section vertical padding */

/* Typography */
.font-display  /* Playfair Display */
.font-body     /* Source Sans 3 */
.font-accent   /* Caveat handwriting */
```
