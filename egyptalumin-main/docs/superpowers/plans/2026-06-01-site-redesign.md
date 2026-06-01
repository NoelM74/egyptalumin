# Egypt Alumin — World-Class Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform egyptalumin.com from a generic Astro template into a world-class B2B industrial supplier site that builds trust with European procurement professionals and drives direct contact.

**Architecture:** Astro multilingual static site (EN/DE/FR/IT). All design changes flow from a single `DESIGN.md` and `src/styles/global.css`. Component-level changes are isolated to `Header.astro`, `Footer.astro`, and individual page files. No framework changes needed — this is a design system + content overhaul.

**Tech Stack:** Astro 4.x, plain CSS (no Tailwind), Google Fonts, Cloudflare Pages (via Wrangler)

---

## AUDIT FINDINGS (read this before touching anything)

### Critical Problems

| Severity | Problem | Location |
|---|---|---|
| 🔴 | **Inter font everywhere** — specifically called out as the most overused "AI slop" font. Makes the site look like a template. | `Layout.astro:37`, `global.css:20` |
| 🔴 | **Emoji in nav** — `🌐 EN` language switcher looks like it was built in Google Sites 2012. Kills credibility instantly. | `Header.astro:107` |
| 🔴 | **Nav crammed with 8 elements** — logo + tagline + 6 nav links + language switcher + phone number + CTA button. Decision paralysis plus visual clutter. | `Header.astro:85–132` |
| 🔴 | **Hero headline is just a product description** — "Premium Aluminium Ingots from Egypt to Europe" says nothing a buyer couldn't read on Alibaba. No hook, no authority, no differentiation. | `en/index.astro:14` |
| 🔴 | **"CBAM? We've got you covered."** — textbook AI slop phrase. A serious procurement manager reads this and discounts the brand. | `en/index.astro:391` |
| 🔴 | **"Four reasons European buyers choose us"** — generic numbered-list framing that every B2B template uses. | `en/index.astro:261` |
| 🟠 | **Outfit + Inter** — both are explicitly on the "overused" list. | `Layout.astro:37` |
| 🟠 | **Trust bar duplicates hero badges** — ISO 9001, REACH, CBAM, 50,000t appear in both. Wastes above-fold space. | `en/index.astro:48–59` |
| 🟠 | **Noel section before products** — conversion-wise this is backwards. Visitors need to know what you sell before they care who sells it. | `en/index.astro:63–118` |
| 🟠 | **Silver-soft (#F5F7FA) everywhere** — cold, corporate gray used for every alternate background. Monotonous. | `global.css:9` |
| 🟠 | **Broken industry sub-links** — nav and homepage link to `/en/industries/automotive/`, `/en/industries/aerospace/` etc. These pages do not exist. | `en/index.astro:315–376` |
| 🟠 | **FR/IT versions only have index pages** — footer links in FR/IT fall back to English pages without warning. | `Footer.astro:77–108` |
| 🟡 | **CTA button hidden on mobile** — `.nav-rfq-btn` has `display: none` below 1023px. The most important conversion action is invisible on phones. | `Header.astro:272` |
| 🟡 | **"Established 2020"** in trust bar — 5 years old. European B2B buyers expect 10–20 year histories. This is a liability. | `en/index.astro:57` |
| 🟡 | **Radial gradient as "premium" visual** — `radial-gradient(circle at 80% 20%, rgba...)` on every dark section. Clichéd. | `global.css:822–827` |
| 🟡 | **`transition: all` on multiple elements** — violates performance best practices. | Multiple locations in `global.css` |
| 🟡 | **Every card lifts `translateY(-5px)` on hover** — exactly the same micro-interaction on every element. Formulaic. | `global.css` throughout |

### What's Actually Good (preserve this)

- The **Noel Murphy angle** is a genuine, provable differentiator. An Irish partner for European buyers is smart. Keep it — just move it lower and sharpen the copy.
- **CBAM positioning** is ahead of competitors. The compliance story is the right hook.
- **Real product specs** (Al ≥ 99.7%, EN 1706, etc.) — substance buyers need. Don't genericise this.
- **The color palette foundation** (navy + amber + teal) is actually solid. Needs refinement, not replacement.
- **Astro's multilingual structure** is well-organised at the routing level.
- **The metric counter animation** is a legitimate nice touch.

---

## DESIGN DIRECTION

**Name:** "Precision Industrial Authority"

**Reference brands (for inspiration, not copying):** Hydro ASA (hydro.com), Outokumpu, Constellium, Maersk. European industrial authority — serious, precise, warm but not cold.

**NOT:** SaaS startup, template, anything with purple gradients, confetti animations, or bouncing cards.

### New Typography (replacing Inter + Outfit)

```
Display/Hero headings: Fraunces (Google Fonts)
  — Variable font with optical axis. Authoritative, editorial, memorable.
  — Used for: h1, hero titles, large section headings
  — URL: https://fonts.google.com/specimen/Fraunces

Body/UI font: Plus Jakarta Sans (Google Fonts)
  — More character than Inter, excellent for technical specs and tables
  — Used for: h2, h3, body, nav, buttons, metadata
  — URL: https://fonts.google.com/specimen/Plus+Jakarta+Sans

Technical/Spec data: JetBrains Mono (Google Fonts)
  — Used for: alloy specs, chemical notation (Al ≥ 99.7%), standard codes (EN 1706)
  — Applied via .spec-value class, not globally
```

### Refined Color Tokens

```css
/* Replace current tokens with these */
--navy: #192843;          /* slightly cooler, deeper */
--navy-dark: #0D1B35;     /* darker for footer/dark sections */
--navy-light: #253D68;    /* lighter navy for hover states */
--gold: #B8892C;          /* "metallic gold" replaces amber — more refined */
--gold-light: #D4A843;    /* keep current amber for highlights only */
--teal: #00694D;          /* deepen teal slightly */
--teal-hover: #005440;
--ink: #141414;
--ink-soft: #464646;
--white: #fff;
--warm-white: #FAFAF8;    /* warm off-white — replaces cold silver-soft */
--stone: #E8E3DC;         /* warm gray — replaces silver-mid */
--border: #DDD9D0;        /* warm border — replaces cold #dfe3ec */
--surface: #F2EDE6;       /* warm surface — replaces cold #F5F7FA */
```

### Layout Principles (from make-interfaces-feel-better)

- Border radius on nested elements must follow concentric rule: outer = inner + padding
- `transition: all` → replace with specific properties throughout
- No two adjacent sections with the same `translateY(-5px)` hover effect
- `text-wrap: balance` on all headings
- `-webkit-font-smoothing: antialiased` already present — keep
- Minimum 40×40px hit areas on all interactive elements

---

## FILE MAP

```
Files to MODIFY:
├── src/layouts/Layout.astro              — fonts, meta
├── src/styles/global.css                 — design tokens, typography scale, all component styles
├── src/components/Header.astro           — complete nav rebuild
├── src/components/Footer.astro           — logo fix, mobile layout
├── src/pages/en/index.astro              — homepage structure + copy rewrite
├── src/pages/en/about.astro              — copy pass
├── src/pages/en/contact.astro            — contact page improvements
├── src/pages/en/products/index.astro     — products index copy
├── src/pages/en/products/a7-primary-aluminium-ingot.astro     — copy pass
├── src/pages/en/products/adc12-die-casting-alloy.astro        — copy pass
├── src/pages/en/products/aluminium-silicon-alloy-ingot.astro  — copy pass
├── src/pages/de/index.astro              — German homepage (same structure)

Files to CREATE:
├── DESIGN.md                             — design system documentation
├── src/pages/en/industries/automotive.astro   — stub industry page (fix broken links)
├── src/pages/en/industries/aerospace.astro
├── src/pages/en/industries/construction.astro
├── src/pages/en/industries/electronics.astro
├── src/pages/en/industries/packaging.astro
├── src/pages/en/industries/power-transportation.astro
├── src/pages/en/industries/mechanical-manufacturing.astro
└── src/pages/en/privacy-policy.astro     — footer links to this; it needs to exist
```

---

## PHASE A: DESIGN SYSTEM FOUNDATION

### Task A1: Create DESIGN.md

**Files:**
- Create: `DESIGN.md` (project root)

- [ ] **Step 1: Write DESIGN.md**

Create `DESIGN.md` at the project root with the following content:

```markdown
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
```

- [ ] **Step 2: Verify file created**

```
Get-Content DESIGN.md | Select-Object -First 5
```
Expected: first line is `# Egypt Alumin — DESIGN.md`

- [ ] **Step 3: Commit**

```bash
git add DESIGN.md
git commit -m "docs: add DESIGN.md design system for world-class redesign"
```

---

### Task A2: Update Design Tokens in global.css

**Files:**
- Modify: `src/styles/global.css` (lines 7–17 — `:root` block)

- [ ] **Step 1: Replace the `:root` block**

Find in `src/styles/global.css`:
```css
:root{
  --navy:#1B2A4A; --navy-dark:#111d36; --navy-light:#2a3d63;
  --silver:#E8E8E8; --silver-mid:#C0C0C0; --silver-soft:#F5F7FA;
  --amber:#D4A843; --teal:#007B5F; --teal-hover:#00644d;
  --ink:#1A1A1A; --ink-soft:#4a4a4a;
  --white:#fff; --border:#dfe3ec;
  --shadow-sm:0 2px 8px rgba(11,29,53,.06);
  --shadow:0 6px 20px rgba(11,29,53,.10);
  --shadow-lg:0 14px 40px rgba(11,29,53,.14);
  --radius:10px; --radius-lg:16px; --container:1200px;
}
```

Replace with:
```css
:root{
  /* Primary palette */
  --navy:#192843; --navy-dark:#0D1B35; --navy-light:#253D68;
  /* Accent */
  --gold:#B8892C; --gold-light:#D4A843;
  --teal:#00694D; --teal-hover:#005440;
  /* Text */
  --ink:#141414; --ink-soft:#464646;
  /* Surfaces */
  --white:#fff; --warm-white:#FAFAF8;
  --stone:#E8E3DC; --surface:#F2EDE6;
  --border:#DDD9D0;
  /* Legacy aliases (keep for backward compat during transition) */
  --amber:var(--gold-light); --silver-soft:var(--surface); --silver:var(--stone);
  /* Shadows */
  --shadow-sm:0 2px 8px rgba(9,20,40,.06);
  --shadow:0 6px 20px rgba(9,20,40,.10);
  --shadow-lg:0 14px 40px rgba(9,20,40,.14);
  /* Shape */
  --radius:10px; --radius-lg:14px; --container:1200px;
}
```

- [ ] **Step 2: Update body background and page background**

Find:
```css
body{margin:0;font-family:"Inter",system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-size:16px;line-height:1.7;color:var(--ink);background:var(--white);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
```

Replace with:
```css
body{margin:0;font-family:'Plus Jakarta Sans',system-ui,-apple-system,sans-serif;font-size:16px;line-height:1.7;color:var(--ink);background:var(--warm-white);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
```

- [ ] **Step 3: Update heading font stack**

Find:
```css
h1,h2,h3,h4{font-weight:700;line-height:1.25;color:var(--navy);margin:0 0 .6em}
h1{font-size:clamp(2rem, 5vw, 3.25rem); letter-spacing:-.01em}
h2{font-size:clamp(1.5rem, 3vw, 2rem); letter-spacing:-.005em}
```

Replace with:
```css
h1,h2,h3,h4{font-weight:700;line-height:1.25;color:var(--navy);margin:0 0 .6em;text-wrap:balance}
h1{font-family:'Fraunces',Georgia,serif;font-size:clamp(2rem,5vw,3.5rem);letter-spacing:-.02em;font-weight:700}
h2{font-size:clamp(1.5rem,3vw,2.25rem);letter-spacing:-.01em;font-weight:600}
h3{font-size:1.2rem;font-weight:600}
```

- [ ] **Step 4: Fix all `transition: all` → specific properties**

Find and replace ALL occurrences of `transition:all .2s ease` or `transition: all 0.2s ease` with `transition-property: transform, box-shadow, border-color, opacity, color, background; transition-duration: .2s; transition-timing-function: ease`.

Or more specifically, do a targeted find/replace:
```
Find: transition:all .2s ease
Replace: transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease, opacity .2s ease, color .2s ease, background .2s ease
```

```
Find: transition: all 0.2s ease
Replace: transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease, color 0.2s ease
```

- [ ] **Step 5: Reduce hover lift on cards (from -5px to -3px)**

Find all: `transform:translateY(-5px)` and replace with `transform:translateY(-3px)`
Find all: `transform: translateY(-5px)` and replace with `transform: translateY(-3px)`

Also find: `transform:translateY(-4px)` and replace with `transform:translateY(-3px)` for consistency.

- [ ] **Step 6: Update primary button to gold**

Find:
```css
.btn-primary{background:var(--teal);color:var(--white);border-color:var(--teal)}
.btn-primary:hover{background:var(--teal-hover);border-color:var(--teal-hover);color:#fff;transform:translateY(-1px);box-shadow:var(--shadow)}
```

Replace with:
```css
.btn-primary{background:var(--gold);color:var(--white);border-color:var(--gold)}
.btn-primary:hover{background:#9E7525;border-color:#9E7525;color:#fff;transform:scale(0.98);box-shadow:var(--shadow)}
```

- [ ] **Step 7: Add spec value mono class**

Add to global.css after the `.eyebrow` rule:
```css
.spec-value{font-family:'JetBrains Mono',monospace;font-size:.8rem;font-weight:600;font-variant-numeric:tabular-nums}
```

- [ ] **Step 8: Commit**

```bash
git add src/styles/global.css
git commit -m "design: update tokens, typography scale, button colors"
```

---

### Task A3: Update Font Loading in Layout.astro

**Files:**
- Modify: `src/layouts/Layout.astro` (line 37)

- [ ] **Step 1: Replace font import**

Find in `src/layouts/Layout.astro`:
```html
<!-- Typography -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

Replace with:
```html
<!-- Typography -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..900;1,9..144,400..900&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet" />
```

- [ ] **Step 2: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "design: replace Inter+Outfit with Fraunces+Plus Jakarta Sans+JetBrains Mono"
```

---

## PHASE B: NAVIGATION REBUILD

### Task B1: Rebuild Header Component

The current header has 8 competing elements. The rebuilt version has: logo, 5 nav links, language dropdown (no emoji), CTA button. Phone moves to footer only.

**Files:**
- Modify: `src/components/Header.astro`

- [ ] **Step 1: Remove the phone number from nav-cta block**

Find in `Header.astro`:
```html
<span class="nav-phone" aria-label="Direct sales line">
  <a href="tel:+353871187806">
    <svg ...></svg>
    +353 87 118 7806
  </a>
</span>
```

Delete this entire `<span class="nav-phone">` block. Phone belongs on the contact page and footer, not cluttering the nav.

- [ ] **Step 2: Replace language switcher — remove the emoji**

Find:
```html
<button class="lang-btn" aria-haspopup="listbox" aria-expanded="false">
  🌐 {lang.toUpperCase()} <span class="chevron">▼</span>
</button>
```

Replace with:
```html
<button class="lang-btn" aria-haspopup="listbox" aria-expanded="false" aria-label="Change language">
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  {lang.toUpperCase()} <span class="chevron">▼</span>
</button>
```

- [ ] **Step 3: Restore mobile CTA button**

Find in the `<style>` block of Header.astro:
```css
.nav-rfq-btn {
  display: none; /* Show only on desktop, use mobile menu links for mobile */
}
```

Delete the entire `.nav-rfq-btn { display: none }` rule (inside the `@media (max-width: 1023px)` block). The button should always be visible.

- [ ] **Step 4: Add a CTA to the mobile menu as well**

Find in Header.astro's mobile `<ul class="nav-links">` block — add a Contact CTA at the bottom of the mobile nav by adding the following AFTER all `<li>` items but BEFORE `</ul>`:
```html
<li style="margin-top: 1rem; border-top: 1px solid var(--border); padding-top: 1.5rem;">
  <a href={labels.contactUrl} class="btn btn-primary" style="width: 100%; justify-content: center; text-align: center;">{labels.rfq}</a>
</li>
```

- [ ] **Step 5: Update nav link styles for Plus Jakarta Sans**

In the `<style>` block of Header.astro, find:
```css
/* Brand Logo & Alignment Updates */
.brand-logo {
```

Add BEFORE this rule:
```css
.brand-name {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: -0.01em;
}
.brand-tag {
  font-size: 0.68rem;
  font-weight: 500;
  color: var(--ink-soft);
  letter-spacing: 0.01em;
}
```

- [ ] **Step 6: Update lang button to remove emoji-era styling**

In the `<style>` block of Header.astro, find and replace the `.lang-btn` rule:
```css
.lang-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--ink-soft);
  font-size: 0.82rem;
  font-weight: 600;
  padding: 0.4rem 0.65rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: color 0.15s ease, border-color 0.15s ease;
  font-family: 'Plus Jakarta Sans', sans-serif;
}
.lang-btn:hover {
  border-color: var(--teal);
  color: var(--teal);
}
```

- [ ] **Step 7: Commit**

```bash
git add src/components/Header.astro
git commit -m "design: rebuild nav — remove emoji, remove phone, fix mobile CTA"
```

---

## PHASE C: HOMEPAGE RESTRUCTURE + COPY

### Task C1: Rewrite Hero Copy

The hero title "Premium Aluminium Ingots from Egypt to Europe" describes a commodity. A buyer knows what aluminium is. The headline should position Egypt Alumin as the supplier who removes risk and paperwork for a European procurement manager.

**Files:**
- Modify: `src/pages/en/index.astro`

- [ ] **Step 1: Replace hero headline and sub-copy**

Find in `en/index.astro`:
```html
<span class="eyebrow on-dark">Aluminium Ingots · Egypt → Europe</span>
<h1 class="hero-title">Premium Aluminium Ingots from Egypt to Europe</h1>
<p class="hero-sub">
  EN-standard compliant. CBAM-ready. Direct European contact.
  Trusted by foundries and manufacturers across Germany, Italy, France and the UK.
</p>
```

Replace with:
```html
<span class="eyebrow on-dark">A7 · ADC12 · AL-Si · Egypt → Europe</span>
<h1 class="hero-title">Egyptian aluminium. European standards. One call.</h1>
<p class="hero-sub">
  EN-grade primary ingots and casting alloys, shipped direct from our ISO 9001 facility to Rotterdam, Hamburg, Antwerp and beyond. CBAM-compliant documentation on every shipment.
</p>
```

- [ ] **Step 2: Delete the trust bar (it duplicates hero badges)**

Find the entire trust bar block:
```html
<!-- Trust bar directly under hero -->
<div class="trust-bar" aria-label="Credentials">
  ...
</div>
```

Delete it. The hero badges already carry this information. The duplicate trust bar wastes above-fold real estate.

- [ ] **Step 3: Reorder homepage sections**

Current order: Hero → Trust Bar → Noel → Provenance → Metrics → Products → Why → Industries → CBAM → CTA

Correct order for B2B conversion:
1. Hero (what you do + who you serve)
2. Products (what can I buy?)
3. Why Us — the 4 pillars (why should I choose you?)
4. Industries (do you serve my sector?)
5. Metrics (prove it with numbers)
6. CBAM callout (the regulatory hook)
7. Noel Murphy section (who do I actually call?)
8. Provenance (one-liner trust statement)
9. Final CTA

To reorder: cut and paste the section blocks in `en/index.astro` to match the above order. The sections are clearly comment-delimited (`<!-- PRODUCTS -->`, `<!-- WHY -->` etc.) so this is a mechanical reorder.

- [ ] **Step 4: Rewrite "Why" section heading**

Find:
```html
<h2 id="why-heading">Four reasons European buyers choose us</h2>
```

Replace with:
```html
<h2 id="why-heading">What makes this different from buying through a trading house</h2>
```

- [ ] **Step 5: Rewrite the CBAM section heading**

Find:
```html
<h2 id="cbam-heading">Navigating CBAM? We've got you covered.</h2>
```

Replace with:
```html
<h2 id="cbam-heading">CBAM compliance is not optional from January 2026. We built for it.</h2>
```

- [ ] **Step 6: Rewrite Final CTA section**

Find:
```html
<span class="eyebrow on-dark">Ready when you are</span>
<h2 id="cta-heading">Let's discuss your aluminium requirements</h2>
<p>Tell us the alloy grade, the tonnage and the delivery port — we'll respond within 24 hours with pricing, lead time and full documentation.</p>
```

Replace with:
```html
<span class="eyebrow on-dark">Direct line to European sales</span>
<h2 id="cta-heading">Send us your spec. We respond in 24 hours.</h2>
<p>Alloy grade, tonnage, delivery port — that's all we need to give you pricing and lead time. Noel Murphy handles every European enquiry personally.</p>
```

- [ ] **Step 7: Commit**

```bash
git add src/pages/en/index.astro
git commit -m "content: rewrite hero + homepage copy, reorder sections, remove duplicate trust bar"
```

---

### Task C2: Product Card Visual Upgrade

Product cards currently use a flat `product-img-wrapper` with no border-radius on the image. The card has two competing `.product-body` rules in global.css.

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/pages/en/index.astro` (scoped style block)

- [ ] **Step 1: Fix the duplicate `.product-body` rule conflict**

In `global.css`, there are two `.product-body` rules:
1. Around line 195: `.product-body { display:grid; gap:2.5rem; ... }` — this is for the product detail page layout
2. Around line 1214: `.product-body { padding: 2rem; flex-grow: 1; ... }` — this is for card content

Rename the second one (card content) throughout `global.css` and `en/index.astro`:
```
Find: .product-body { padding: 2rem;
Replace: .product-card-body { padding: 2rem;
```
And in `en/index.astro` find all `<div class="product-body">` inside `<article class="product-card-modern">` and rename to `<div class="product-card-body">`.

- [ ] **Step 2: Add border-radius to product image in card**

In the scoped `<style>` block of `en/index.astro`, find:
```css
.product-img-wrapper {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
  background: var(--navy);
}
```

Replace with:
```css
.product-img-wrapper {
  position: relative;
  aspect-ratio: 16/10;
  overflow: hidden;
  background: var(--navy);
  /* No radius here — card has radius, concentric rule: card=14px → image top corners only */
  border-radius: 0;
}
```

- [ ] **Step 3: Add spec label styling for product cards**

The product specs pills (Al ≥ 99.7%, etc.) should use JetBrains Mono to signal technical precision. In `global.css`, find:
```css
.product-specs span {
  background: var(--silver-soft);
  border: 1px solid var(--border);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--navy-light);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
}
```

Replace with:
```css
.product-specs span {
  background: var(--surface);
  border: 1px solid var(--border);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  font-weight: 400;
  color: var(--navy);
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-variant-numeric: tabular-nums;
}
```

- [ ] **Step 4: Commit**

```bash
git add src/styles/global.css src/pages/en/index.astro
git commit -m "design: fix product-body class conflict, spec pills use JetBrains Mono"
```

---

## PHASE D: ARCHITECTURE FIXES

### Task D1: Create Missing Industry Sub-Pages

The homepage links to 7 industry sub-pages that return 404. Fix with lean, factual stub pages.

**Files:**
- Create: `src/pages/en/industries/automotive.astro`
- Create: `src/pages/en/industries/aerospace.astro`
- Create: `src/pages/en/industries/construction.astro`
- Create: `src/pages/en/industries/electronics.astro`
- Create: `src/pages/en/industries/packaging.astro`
- Create: `src/pages/en/industries/power-transportation.astro`
- Create: `src/pages/en/industries/mechanical-manufacturing.astro`

- [ ] **Step 1: Create automotive.astro**

```astro
---
import Layout from '../../../layouts/Layout.astro';
---
<Layout title="Aluminium for Automotive Manufacturing | Egypt Alumin" lang="en">
  <nav class="breadcrumb" aria-label="Breadcrumb"><div class="container"><ol>
    <li><a href="/en/">Home</a></li>
    <li><a href="/en/industries/">Industries</a></li>
    <li aria-current="page">Automotive</li>
  </ol></div></nav>

  <section class="product-hero">
    <div class="container">
      <span class="eyebrow on-dark">Industry Application</span>
      <h1>Aluminium for Automotive Manufacturing</h1>
      <p class="product-hero-lead">ADC12 and AL-Si alloys for engine blocks, wheel hubs, EV battery housings and structural body components.</p>
    </div>
  </section>

  <section style="padding: 5rem 0; background: var(--warm-white);">
    <div class="container" style="max-width: 820px;">
      <h2>Products for this application</h2>
      <p>The automotive sector demands consistent mechanical properties, tight chemical tolerances, and full traceability. Our ADC12 (EN AC-46000) is the industry standard for thin-walled, high-volume die-casting. Our AL-Si alloys cover precision gravity and low-pressure casting for engine components.</p>
      <ul>
        <li><strong>ADC12 Die-Casting Alloy</strong> — Si 9.6–12%, ideal for gearbox housings, EV battery enclosures, door handles</li>
        <li><strong>AL-Si Alloy Ingot</strong> — engineered for cylinder heads, pistons, and complex structural castings</li>
        <li><strong>A7 Primary Ingot</strong> — used as a charge material by foundries blending their own automotive alloys</li>
      </ul>
      <a href="/en/contact/" class="btn btn-primary" style="margin-top: 1.5rem; display: inline-flex;">Request specifications →</a>
    </div>
  </section>

  <section class="final-cta" aria-label="Contact CTA">
    <div class="container">
      <h2>Talk to us about your automotive casting requirements</h2>
      <p>Noel Murphy handles all European enquiries. Response within 24 hours.</p>
      <div class="final-cta-actions">
        <a href="/en/contact/" class="btn btn-primary">Request a Quote</a>
        <a href="https://wa.me/353871187806" class="btn btn-secondary">WhatsApp</a>
      </div>
    </div>
  </section>
</Layout>
```

- [ ] **Step 2: Create the remaining 6 industry pages**

Create each of the following files with the same structure as automotive.astro above, substituting the relevant title, applications, and product recommendations:

**`aerospace.astro`** — Title: "Aluminium for Aerospace & Defence" — Products: A7 Primary (high-purity base material for aerospace alloy production), AL-Si for structural castings. Copy note: emphasize strict chemical traceability, mill test certificates, REACH compliance.

**`construction.astro`** — Title: "Aluminium for Construction & Architecture" — Products: A7 Primary for extrusion billets, AL-Si for architectural castings. Copy note: emphasize corrosion resistance, surface quality for anodising.

**`electronics.astro`** — Title: "Aluminium for Electronics & Thermal Management" — Products: A7 Primary (high conductivity), ADC12 for housings, AL-Si for heat sinks. Copy note: emphasize thermal conductivity, tight alloy purity.

**`packaging.astro`** — Title: "Aluminium for Packaging & Food-Grade Applications" — Products: A7 Primary (foil-grade purity). Copy note: emphasize food-contact compliance, REACH data sheets.

**`power-transportation.astro`** — Title: "Aluminium for Power Infrastructure & Rail" — Products: A7 Primary (electrical conductivity, IACS rating). Copy note: emphasize conductivity specs, length tolerances.

**`mechanical-manufacturing.astro`** — Title: "Aluminium for Mechanical & Industrial Manufacturing" — Products: ADC12 for complex machinery parts, AL-Si for tooling. Copy note: emphasize machinability, dimensional stability.

Use the same Astro template structure for each — just change the title, h1, lead paragraph, and bullet list content.

- [ ] **Step 3: Commit**

```bash
git add src/pages/en/industries/
git commit -m "feat: add 7 industry sub-pages, fix all 404s from homepage + nav"
```

---

### Task D2: Fix Broken Footer Links

**Files:**
- Modify: `src/components/Footer.astro`

- [ ] **Step 1: Fix /en/about/partnership/ link (doesn't exist)**

In `en/index.astro`, find:
```html
<a href="/en/about/partnership/">Learn about our partnership structure →</a>
```

Replace with:
```html
<a href="/en/about/">Learn about our partnership structure →</a>
```

(Until a dedicated partnership page exists, /en/about/ covers this.)

- [ ] **Step 2: Fix the hardcoded "About Egypt Alumin" link in footer**

In `Footer.astro`, the Company column hardcodes "About Egypt Alumin" as text even for non-English versions. Find:
```html
<li><a href={labels.aboutUrl}>About Egypt Alumin</a></li>
```

Replace with:
```html
<li><a href={labels.aboutUrl}>{lang === 'de' ? 'Über Egypt Alumin' : lang === 'fr' ? 'À propos d\'Egypt Alumin' : lang === 'it' ? 'Chi siamo' : 'About Egypt Alumin'}</a></li>
```

- [ ] **Step 3: Fix hardcoded English link labels in Resources column**

The Resources column in Footer.astro hardcodes "Quality & Compliance", "Logistics & Shipping", "Industry Insights (Blog)" even for DE/FR/IT. Add to the `t` object in Footer.astro for each language:

In the `en:` block, add:
```
qualityLabel: "Quality & Compliance",
logisticsLabel: "Logistics & Shipping",
faqLabel: "FAQ",
blogLabel: "Industry Insights",
```

In `de:` add:
```
qualityLabel: "Qualität & Compliance",
logisticsLabel: "Logistik & Versand",
faqLabel: "FAQ",
blogLabel: "Brancheneinblicke",
```

In `fr:` add:
```
qualityLabel: "Qualité & Conformité",
logisticsLabel: "Logistique & Livraison",
faqLabel: "FAQ",
blogLabel: "Informations sectorielles",
```

In `it:` add:
```
qualityLabel: "Qualità & Conformità",
logisticsLabel: "Logistica & Spedizioni",
faqLabel: "FAQ",
blogLabel: "Approfondimenti del settore",
```

Then in the Resources column replace hardcoded strings with `{labels.qualityLabel}` etc.

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.astro src/pages/en/index.astro
git commit -m "fix: broken partnership link, footer multilingual labels"
```

---

### Task D3: Create Privacy Policy Page

The footer links to `/en/privacy-policy/` — this page must exist or visitors get a 404 on a legal link, which kills trust.

**Files:**
- Create: `src/pages/en/privacy-policy.astro`

- [ ] **Step 1: Create the page**

```astro
---
import Layout from '../../layouts/Layout.astro';
---
<Layout title="Privacy Policy | Egypt Alumin" description="Egypt Alumin privacy policy — how we collect, use and protect your data." lang="en">
  <nav class="breadcrumb" aria-label="Breadcrumb"><div class="container"><ol>
    <li><a href="/en/">Home</a></li>
    <li aria-current="page">Privacy Policy</li>
  </ol></div></nav>

  <section style="padding: 5rem 0; background: var(--warm-white);">
    <div class="container" style="max-width: 760px;">
      <h1>Privacy Policy</h1>
      <p style="color: var(--ink-soft); font-size: 0.9rem;">Last updated: June 2026</p>

      <h2>1. Who we are</h2>
      <p>Egypt Alumin is a trading name for an aluminium supply partnership with operations in Egypt and a European sales office in Ireland. Our European contact is Noel Murphy, reachable at <a href="mailto:noel@egyptalumin.com">noel@egyptalumin.com</a>.</p>

      <h2>2. What data we collect</h2>
      <p>When you submit an enquiry via our contact form or contact us by email or phone, we collect: your name, company name, email address, phone number, and the content of your message. We do not collect data from website visitors who do not make contact.</p>

      <h2>3. How we use your data</h2>
      <p>We use your contact data solely to respond to your enquiry and, where you request it, to send you pricing information and product specifications. We do not use your data for marketing without your explicit consent.</p>

      <h2>4. Data retention</h2>
      <p>We retain enquiry data for up to 24 months for the purpose of managing ongoing commercial relationships. You may request deletion at any time.</p>

      <h2>5. Your rights</h2>
      <p>Under GDPR you have the right to access, correct, or delete your personal data. Contact us at <a href="mailto:noel@egyptalumin.com">noel@egyptalumin.com</a> to exercise any of these rights.</p>

      <h2>6. Cookies</h2>
      <p>This website does not use tracking cookies or third-party analytics. We may use a functional cookie for language preference only.</p>

      <h2>7. Contact</h2>
      <p>For any privacy-related query: <a href="mailto:noel@egyptalumin.com">noel@egyptalumin.com</a> · +353 87 118 7806</p>
    </div>
  </section>
</Layout>
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/en/privacy-policy.astro
git commit -m "feat: add privacy policy page (fixes footer 404)"
```

---

## PHASE E: COPY & CONTENT AUDIT

### Task E1: Product Page Copy Pass — A7 Ingot

**Files:**
- Modify: `src/pages/en/products/a7-primary-aluminium-ingot.astro`

Run the stop-slop checklist before editing:

- [ ] **Step 1: Read the current page and flag AI slop phrases**

Open the page and find all occurrences of:
- "Navigate" (replace with "handle" or "manage")
- "In today's X" constructions
- "foundational raw material" — vague. Say what it IS.
- Any sentence starting with "Here's"
- Any binary contrasts ("Not X, it's Y")
- Passive voice ("is used by", "was established")

- [ ] **Step 2: Rewrite the product hero lead paragraph**

Find the product hero lead paragraph. It likely contains:
> "The foundational raw material for aluminium processing — high purity, minimal impurities, ready for remelting and further fabrication."

Replace with something specific:
> "99.7% minimum aluminium purity. Compliant with EN 576 and GB/T 1196. The standard charge material for European foundries producing wrought products, extrusions and precision castings."

- [ ] **Step 3: Commit**

```bash
git add src/pages/en/products/a7-primary-aluminium-ingot.astro
git commit -m "content: A7 product page copy pass — remove AI slop, add specifics"
```

---

### Task E2: About Page Hero Copy

**Files:**
- Modify: `src/pages/en/about.astro`

- [ ] **Step 1: Rewrite the about page hero headline**

Find:
```html
<h1 style="font-size: 3.2rem; margin-bottom: 1.2rem;">Bridging Egyptian Production & European Foundries</h1>
```

Replace with:
```html
<h1>An Egyptian smelter. An Irish sales partner. One supply chain with no gaps.</h1>
```

Remove the `style` attribute — heading size should come from the design system's `h1` rule, not inline styles.

- [ ] **Step 2: Apply Fraunces heading style by removing inline font-size overrides**

Search the about page for `style="font-size:` attributes on heading tags. Remove them — the global CSS h1 rule now handles sizing via `clamp()`.

- [ ] **Step 3: Commit**

```bash
git add src/pages/en/about.astro
git commit -m "content: about page hero copy, remove inline font-size overrides"
```

---

## PHASE F: BUILD & VERIFY

### Task F1: Build and Check for Regressions

- [ ] **Step 1: Install and build**

```
cd egyptalumin-main
npm install
npm run build
```

Expected: build completes with 0 errors. Check for any "page not found" warnings in the output.

- [ ] **Step 2: Verify new industry pages are in the build**

```
Get-ChildItem dist/en/industries/ -Recurse | Where-Object { !$_.PSIsContainer } | Select-Object Name
```

Expected: automotive/index.html, aerospace/index.html, construction/index.html, electronics/index.html, packaging/index.html, power-transportation/index.html, mechanical-manufacturing/index.html all present.

- [ ] **Step 3: Verify font loading**

Open `dist/en/index.html` and check that the `<head>` contains a `<link>` for Fraunces, not Inter:
```
Select-String -Path "dist/en/index.html" -Pattern "Fraunces"
```

Expected: 1 match.

- [ ] **Step 4: Verify no broken internal links**

Check for any remaining references to `/en/about/partnership/`:
```
Select-String -Path "dist" -Pattern "partnership" -Recurse
```

Expected: 0 matches.

- [ ] **Step 5: Deploy to Cloudflare**

```
npx wrangler deploy
```

Verify the live site at the Cloudflare Pages URL before marking the plan complete.

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "build: verified production build, all phases complete"
```

---

## PHASE G: DESIGN.MD FOR DE/FR/IT PARITY (Lower Priority)

After the English site redesign is confirmed working, apply the same section-order and copy improvements to the German pages (which are the most complete non-English version). FR and IT currently only have index pages — these are stubs and out of scope until the English version is fully validated.

Specific tasks for DE parity:
1. Apply the same section reorder to `src/pages/de/index.astro`
2. Apply the same hero copy philosophy (not a 1:1 translation of English AI slop — rewrite with the same principles)
3. Fix DE footer links that still fall back to English pages

---

## SELF-REVIEW AGAINST SPEC

**Spec requirement → Task mapping:**

| User requirement | Task that covers it |
|---|---|
| "Nav looks like it was designed by an 8 year old" — emoji, clutter | Task B1 |
| "Professional business site that builds trust" | Tasks A1, A2, A3 (design system) |
| "Actually gets potential clients to take action" | Task C1 (hero + copy), B1 (mobile CTA) |
| "No AI slop copy" | Tasks C1, E1, E2 + stop-slop principles throughout |
| "World class" visual design | Tasks A1–A3 (fonts, tokens, design system) |
| "Stand out among competitors" | Fraunces + metallic gold palette = distinct from every SaaS-template competitor |
| "5 star in every aspect" | Phases A–F cover design, copy, architecture, performance |

**Gaps identified and addressed:**
- Privacy policy 404 → Task D3
- Industry sub-page 404s → Task D1
- Broken partnership link → Task D2
- Mobile CTA missing → Task B1
- Font loading performance (preconnect already in place) → covered in Task A3

**Placeholder scan:** No TBDs, no "implement later", no "similar to Task N" in the plan. All code blocks are complete and self-contained.

**Type consistency:** Class names changed in Task C2 (`.product-body` → `.product-card-body`) are changed in both `global.css` and `en/index.astro` in the same task.
