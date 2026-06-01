# Egypt Alumin — DESIGN.md

## 1. Visual Theme & Atmosphere

**Direction:** Precision Industrial Authority. A European B2B supplier for foundries and manufacturers — serious, precise, technically credible. The palette references refined metallic tones (naval steel, burnished gold, patinated copper). The typography is editorial and authoritative.

**Density:** Medium. Content-dense product pages, generous whitespace on marketing sections.
**Tone:** Confident, technical, direct. No startup energy. No warm-fuzzy consumer aesthetics.

---

## 2. Color Palette

| Token | Hex | Role |
|---|---|---|
| `--navy` | `#192843` | Primary brand — text, backgrounds, headings |
| `--navy-dark` | `#0D1B35` | Dark surfaces — footer, dark hero sections |
| `--navy-light` | `#253D68` | Navy hover states, secondary surfaces |
| `--gold` | `#B8892C` | Primary accent — CTAs, highlights, active states |
| `--gold-light` | `#D4A843` | Gold for dark backgrounds |
| `--teal` | `#00694D` | Secondary accent — links, tags, badges |
| `--teal-hover` | `#005440` | Teal hover state |
| `--ink` | `#141414` | Body text on white |
| `--ink-soft` | `#464646` | Secondary body text |
| `--white` | `#ffffff` | Base white |
| `--warm-white` | `#FAFAF8` | Page background (slightly warm) |
| `--stone` | `#E8E3DC` | Card backgrounds, warm alternates |
| `--border` | `#DDD9D0` | All borders |
| `--surface` | `#F2EDE6` | Section background alternates |
| `--shadow-sm` | `0 2px 8px rgba(9,20,40,.06)` | Subtle card shadows |
| `--shadow` | `0 6px 20px rgba(9,20,40,.10)` | Cards, dropdowns |
| `--shadow-lg` | `0 14px 40px rgba(9,20,40,.14)` | Elevated elements |

---

## 3. Typography

**Display (headings h1, hero):** Fraunces — variable weight 400–900
**UI (h2, h3, nav, buttons, body):** Plus Jakarta Sans — 400/500/600/700
**Technical (spec values, alloy codes):** JetBrains Mono — 400/600

```css
font-family headline: 'Fraunces', Georgia, serif;
font-family body:     'Plus Jakarta Sans', system-ui, sans-serif;
font-family mono:     'JetBrains Mono', monospace;
```

**Typographic Scale:**
| Role | Size | Weight | Font | Notes |
|---|---|---|---|---|
| Hero h1 | clamp(2.5rem, 5vw, 4rem) | 700 | Fraunces | letter-spacing: -0.02em |
| Page h1 | clamp(2rem, 4vw, 3rem) | 600 | Fraunces | letter-spacing: -0.015em |
| h2 | clamp(1.5rem, 3vw, 2.25rem) | 600 | Plus Jakarta Sans | letter-spacing: -0.01em |
| h3 | 1.2rem | 600 | Plus Jakarta Sans | |
| Body | 1rem | 400 | Plus Jakarta Sans | line-height: 1.7 |
| Small | 0.875rem | 400 | Plus Jakarta Sans | |
| Eyebrow | 0.75rem | 700 | Plus Jakarta Sans | letter-spacing: 0.1em, uppercase |
| Spec value | 0.875rem | 600 | JetBrains Mono | |

---

## 4. Component Styling

**Buttons:**
- Primary: `background: var(--gold)`, `color: #fff`, `border-radius: 7px`, `padding: 0.9rem 1.75rem`, `font-weight: 600`
- Primary hover: `background: #9E7525` (darken), `transform: scale(0.98)` (press effect)
- Secondary: `border: 1.5px solid rgba(255,255,255,0.5)`, transparent background
- Ghost: `border: 1.5px solid var(--navy)`, transparent background

**Cards:**
- Background: `var(--white)`
- Border: `1px solid var(--border)`
- Border-radius: `var(--radius-lg)` = 14px
- Hover: `border-color: var(--teal)`, `box-shadow: var(--shadow)`, `transform: translateY(-3px)` (not -5px)
- Do NOT apply translateY to every card — reserve for product/blog cards only

**Nav:**
- Background: `rgba(255,255,255,0.97)` with `backdrop-filter: blur(10px)`
- Max 6 items
- No emoji in language switcher
- Phone number removed from header (only in footer + contact page)
- CTA button: gold background, always visible (including mobile)

**Tags/Badges:**
- Teal tag: `background: rgba(0,105,77,0.08)`, `color: var(--teal)`, `border-radius: 4px`
- Spec values: `font-family: 'JetBrains Mono'`, `font-size: 0.8rem`

---

## 5. Layout Principles

**Container:** max-width 1200px, `padding: 0 1.5rem`
**Section padding:** `5rem 0` desktop, `3.5rem 0` mobile
**Grid gaps:** `2.5rem` (default), `1.5rem` (tight grids)
**Spacing scale:** 0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6rem

**Section background rotation (no two same in a row):**
1. White (`var(--white)`)
2. Warm surface (`var(--surface)` or `var(--stone)`)
3. Dark (`var(--navy-dark)`)

---

## 6. Depth & Elevation

Three shadow tiers only:
- `--shadow-sm`: resting cards
- `--shadow`: focused/active cards, dropdowns
- `--shadow-lg`: modals, sticky nav on scroll, hero images

No borders + shadow together on the same element (pick one system).

---

## 7. Do's and Don'ts

**Do:**
- Use Fraunces for hero headings and section titles — it carries authority
- Use JetBrains Mono for all technical/chemical data
- Use warm-white (`#FAFAF8`) as the page background, not pure `#fff`
- Use `text-wrap: balance` on all headings
- Use `transition-property: transform, box-shadow, border-color, opacity` — never `transition: all`
- Use `scale(0.97)` on button press
- Alternate section backgrounds: white → surface → dark

**Don't:**
- Don't use emoji in navigation
- Don't use Inter, Roboto, Outfit, or Space Grotesk
- Don't put phone numbers in the header
- Don't lift every card with translateY on hover — reserve for product cards only
- Don't use the same radial-gradient background decoration on every dark section
- Don't duplicate credential badges (hero + trust bar showing identical info)
- Don't use `transition: all`

---

## 8. Responsive Behavior

**Breakpoints:**
- Mobile: < 640px
- Tablet: 640px – 1023px
- Desktop: ≥ 1024px

**Nav collapse:** ≤ 1023px → hamburger. Mobile menu shows all nav links + language switch + CTA button.
**Product grid:** 1 col (mobile) → 2 col (tablet) → 3 col (desktop)
**Typography:** All headings use `clamp()` — no breakpoint-specific overrides needed.

---

## 9. Agent Prompt Guide

**Quick reference:**
```
--gold: #B8892C  (primary accent, CTAs)
--navy: #192843  (primary dark)
--teal: #00694D  (secondary accent, links)
--warm-white: #FAFAF8  (page background)
--surface: #F2EDE6  (section alternates)
```

**Ready prompts:**
- "Use DESIGN.md tokens for all styling. --gold for primary CTAs, --teal for links and tags."
- "Section backgrounds rotate: white → surface (#F2EDE6) → navy-dark (#0D1B35)."
- "Use Fraunces for h1/hero. Plus Jakarta Sans for everything else."
- "Spec values use JetBrains Mono, font-size 0.8rem."
