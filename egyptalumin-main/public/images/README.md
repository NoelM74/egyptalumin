# Egypt Alumin `/images` Library

This folder is the production image library for the Egypt Alumin website.

It is designed for:
- clean GitHub structure
- fast Cloudflare Pages deployment
- predictable file naming
- strong image SEO
- easy future expansion across English, German, French, and Italian

---

## Folder structure

```txt
/images
├── /hero
├── /products
├── /factory
├── /applications
├── /branding
└── /blog
```

### Folder purpose

#### `/hero`
Use for homepage banners, page hero sections, and major landing page headers.

#### `/products`
Use for A7, ADC12, AL-Si, and future product photography.

#### `/factory`
Use for facility, casting lines, storage, loading, quality lab, and plant proof images.

#### `/applications`
Use for end-use industries like automotive, die-casting, EV battery housings, electrical, packaging, and construction.

#### `/branding`
Use for logos, certifications, badges, Noel Murphy portraits, and trust-building brand visuals.

#### `/blog`
Use for blog featured images and article thumbnails.

---

## Upload rules

1. **Always upload web-ready files only**  
   Do not upload raw camera originals if they are oversized.

2. **Use lowercase file names only**  
   Correct: `hero-home-egypt-to-europe-01.webp`  
   Wrong: `Hero Home FINAL.JPG`

3. **Use hyphens, never spaces or underscores**  
   Correct: `product-adc12-ingot-stack-01.webp`  
   Wrong: `product_ADC12 stack 1.jpg`

4. **Always include a numeric version at the end**  
   Example: `01`, `02`, `03`

5. **Keep one master image per purpose where possible**  
   Avoid uploading 8 nearly identical files unless they are genuinely needed.

6. **Use the correct folder from day one**  
   Do not dump everything into `/images` root.

7. **Prefer WebP for photographic assets**  
   Use SVG for logos and vector badges.

8. **If an image is replaced, keep the same filename only when the page should auto-update**  
   If the image is a different concept or crop, create a new numbered file instead.

9. **Do not use vague names**  
   Avoid: `final.webp`, `new-image.png`, `hero2.jpg`, `img001.jpg`

10. **Every uploaded image should be usable by marketing, SEO, and dev without guessing what it is**

---

## File naming convention

Use this structure:

```txt
category-subject-detail-##.ext
```

### Format
- `category` = folder/use type
- `subject` = main topic or product
- `detail` = shot type, page purpose, or visual context
- `##` = version number
- `ext` = file format

### Examples

#### Hero
- `hero-home-egypt-to-europe-01.webp`
- `hero-cbam-guide-aluminium-imports-01.webp`
- `hero-about-egypt-alumin-01.webp`

#### Products
- `product-a7-ingot-stack-01.webp`
- `product-adc12-surface-closeup-02.webp`
- `product-al-si-alloy-closeup-01.webp`

#### Factory
- `factory-facility-exterior-01.webp`
- `factory-quality-control-lab-01.webp`
- `factory-loading-and-dispatch-01.webp`

#### Applications
- `application-automotive-components-01.webp`
- `application-ev-battery-housings-01.webp`
- `application-electrical-conductors-01.webp`

#### Branding
- `brand-logo-primary-01.svg`
- `brand-badge-cbam-ready-01.svg`
- `brand-noel-murphy-portrait-01.webp`

#### Blog
- `blog-cbam-2026-guide-01.webp`
- `blog-die-casting-alloy-selection-01.webp`
- `blog-egypt-to-europe-logistics-guide-01.webp`

---

## Recommended formats

### Use `.webp` for
- hero banners
- product photography
- facility photos
- application/industry images
- blog featured images
- portraits

### Use `.svg` for
- logos
- trust badges
- certification icons
- simple flat design marks

### Use `.png` only when needed
Use PNG only if:
- transparency is required
- SVG is not possible
- the asset is not photographic

### Avoid when possible
- `.bmp`
- `.tiff`
- oversized `.jpg` originals
- random screenshots used as final production assets

---

## Recommended dimensions

These are the production targets for this site.

### 1) Hero banners
**Use for:** homepage hero, CBAM guide hero, About hero, Quality hero, major landing pages  
**Recommended size:** `1920 × 1080 px`  
**Aspect ratio:** `16:9`  
**Format:** `.webp`  
**Target file size:** ideally `200–450 KB`

### 2) Product photography
**Use for:** product pages, product cards, spec sections  
**Recommended size:** `1600 × 1200 px`  
**Aspect ratio:** `4:3`  
**Format:** `.webp`  
**Target file size:** ideally `120–300 KB`

### 3) Factory & facility images
**Use for:** About, Quality & Compliance, Logistics, Sustainability  
**Recommended size:** `1600 × 900 px`  
**Aspect ratio:** `16:9`  
**Format:** `.webp`  
**Target file size:** ideally `140–320 KB`

### 4) Application / industry images
**Use for:** industry pages and use-case sections  
**Recommended size:** `1600 × 900 px`  
**Aspect ratio:** `16:9`  
**Format:** `.webp`  
**Target file size:** ideally `140–320 KB`

### 5) Portrait / branding images
**Use for:** Noel Murphy profile blocks, team/trust sections  
**Recommended size:** `1200 × 1500 px`  
**Aspect ratio:** `4:5`  
**Format:** `.webp`  
**Target file size:** ideally `120–250 KB`

### 6) Blog featured images
**Use for:** blog cards, article headers, social previews  
**Recommended size:** `1600 × 900 px`  
**Aspect ratio:** `16:9`  
**Format:** `.webp`  
**Target file size:** ideally `120–280 KB`

### 7) Logos and badges
**Primary choice:** `.svg`  
If raster is required:  
- logos: minimum `600 px` wide  
- badges/icons: minimum `200–400 px` wide

---

## Responsive variants

If multiple versions are needed, use suffixes like:

- `-desktop`
- `-mobile`
- `-square`
- `-thumb`

### Examples
- `hero-home-egypt-to-europe-01-desktop.webp`
- `hero-home-egypt-to-europe-01-mobile.webp`
- `blog-cbam-2026-guide-01-thumb.webp`
- `product-adc12-ingot-stack-01-square.webp`

Only create variants when the layout truly needs them.

---

## Alt-text guidelines

Every image used on the live site must have meaningful alt text.

### Good alt text should
- describe what is actually visible
- mention the product, location, or action when relevant
- support accessibility
- help image SEO naturally
- stay concise

### Good examples
- `Stacked ADC12 aluminium alloy ingots ready for export shipment`
- `A7 primary aluminium ingots bundled at Egypt Alumin facility`
- `Noel Murphy, partner and European Operations lead at Egypt Alumin`
- `Factory quality control inspection of aluminium ingots`
- `CBAM compliance concept for aluminium imports into Europe`
- `Aluminium die-cast automotive housing application`

### Bad examples
- `image`
- `photo`
- `hero banner`
- `Egypt Alumin image`
- `final version`
- keyword-stuffed text like `aluminium ingot supplier egypt europe best premium aluminium ingot`

### Alt-text rules
1. Be specific.
2. Do not stuff keywords.
3. Do not start every alt with “Image of”.
4. If the image is purely decorative, use empty alt text in code: `alt=""`.
5. If Noel Murphy appears, name him correctly and keep the role consistent:  
   **Partner — European Operations**

---

## SEO image rules

For every production image:
- use descriptive filenames
- use matching alt text
- serve WebP where possible
- keep file size compressed
- avoid duplicate near-identical filenames
- match the image subject to the page topic

### Example of strong alignment
**Page:** ADC12 product page  
**Filename:** `product-adc12-ingot-stack-01.webp`  
**Alt text:** `ADC12 aluminium alloy ingots stacked for export`

---

## Image quality rules

Before upload, check:
- sharp focus
- no visible compression damage
- no cluttered background unless intentional
- good lighting
- brand-safe composition
- no watermarks
- no unrelated objects in frame
- correct orientation

Do not upload low-quality placeholders as final assets.

---

## GitHub workflow rules

When adding images to the repo:
- upload into the correct subfolder
- keep filenames final before commit
- avoid renaming files repeatedly after pages already reference them
- if replacing an image in use, confirm whether the filename should remain the same or increment to a new version

### Recommended commit style
- `Add homepage and CBAM hero banners`
- `Add A7 and ADC12 product photography`
- `Add Noel Murphy portrait and trust badge assets`
- `Add blog featured images for cornerstone articles`

---

## Suggested mapping for current site pages

### Homepage
- `hero/hero-home-egypt-to-europe-01.webp`
- `branding/brand-noel-murphy-portrait-01.webp`

### CBAM Guide
- `hero/hero-cbam-guide-aluminium-imports-01.webp`

### A7 page
- `hero/hero-a7-primary-aluminium-01.webp`
- `products/product-a7-ingot-stack-01.webp`

### ADC12 page
- `hero/hero-adc12-die-casting-alloy-01.webp`
- `products/product-adc12-ingot-stack-01.webp`

### AL-Si page
- `hero/hero-al-si-alloy-range-01.webp`
- `products/product-al-si-ingot-stack-01.webp`

### About / Quality pages
- `factory/factory-facility-exterior-01.webp`
- `factory/factory-quality-control-lab-01.webp`
- `branding/brand-noel-murphy-portrait-02.webp`

### Blog
- matching files from `/blog`

---

## Final rule

If someone looking at the filename cannot immediately tell:
- what the image is
- where it belongs
- and what page it should support

then the file name is not good enough.
