# Egypt Alumin — egyptalumin.com

Premium aluminium ingot supplier website. Egypt → Europe.

**Domain:** [egyptalumin.com](https://egyptalumin.com)
**Hosting:** Cloudflare Pages (edge-deployed, mobile-first, sub-1s LCP target)
**Languages:** English (`/en/`) · Deutsch (`/de/`)
**Stack:** Static HTML/CSS — zero JavaScript dependencies — ready for Astro conversion when needed

---

## 📦 What's in this repo

This is the production source for the Egypt Alumin marketing site, structured for direct deployment to Cloudflare Pages or Vercel.

```
egyptalumin/
├── README.md                                       ← this file
├── LICENSE                                         ← MIT (open-sourced from day one)
├── .gitignore                                      ← excludes secrets, drafts, build artefacts
├── DEPLOY.md                                       ← Cloudflare Pages deployment walkthrough
├── _headers                                        ← Cloudflare Pages cache & security headers
├── _redirects                                      ← Cloudflare Pages redirect rules
├── robots.txt                                      ← crawler permissions (AI crawlers explicitly allowed)
├── llms.txt                                        ← AI-crawler guidance file (GEO optimisation)
├── sitemap.xml                                     ← multilingual sitemap
├── index.html                                      ← root → /en/ redirect
├── assets/
│   └── styles.css                                  ← global design system (17 KB)
├── en/
│   ├── index.html                                  ← English homepage
│   └── products/
│       ├── a7-primary-aluminium-ingot.html         ← A7 / P1020A product page
│       ├── adc12-die-casting-alloy.html            ← ADC12 / EN AC-46000 product page
│       └── aluminium-silicon-alloy-ingot.html      ← AL-Si premium alloy product page
└── de/
    ├── index.html                                  ← German homepage
    └── produkte/
        ├── a7-primaer-aluminiummassel.html         ← A7 German page
        ├── adc12-druckguss-legierung.html          ← ADC12 German page
        └── aluminium-silizium-legierung.html       ← AL-Si German page
```

---

## 🚀 Quick deployment to Cloudflare Pages

See **[DEPLOY.md](./DEPLOY.md)** for the full walkthrough. TL;DR:

1. Push this repo to GitHub
2. Cloudflare Dashboard → Workers & Pages → Create → Connect to Git → select this repo
3. **Build command:** *(leave blank — static site)*
4. **Build output directory:** `/` (root)
5. Click Deploy. Live in ~30 seconds.
6. Add custom domain `egyptalumin.com` in Settings → Custom domains

---

## 🏗️ Architecture decisions

### Why static HTML (not a SPA/SSR framework yet)?

The whole site is currently ~250 KB of static HTML + 17 KB of CSS. It will:

- Serve in **<1 second LCP** from Cloudflare's edge (target: 600ms LCP)
- Cost **€0/month** at expected traffic volumes (Cloudflare Pages free tier covers it)
- Index perfectly in **Google AI Overviews, ChatGPT, Perplexity, Claude** — these crawlers strongly prefer pre-rendered HTML
- Require **zero ongoing maintenance** — no dependency updates, no security patches, no build pipelines that break

### When to migrate to Astro

Convert to Astro when ANY of these become true:
- More than ~30 pages and content duplication becomes painful
- Need for a CMS-driven blog
- Adding interactive elements (RFQ form with backend, product filtering, calculator widgets)
- Team grows and want component-based development

Astro keeps the same static-output benefits while solving the duplication problem.

### Why two languages at launch, not more

Germany alone represents 25%+ of the European aluminium import market. Italian + French come in Phase 2 once we have launch metrics to inform translation priorities.

---

## 📊 SEO / AEO / GEO checklist

Every page in this repo includes:

- ✅ Unique `<title>` (50–60 chars, keyword-optimised)
- ✅ Unique `<meta description>` (150–160 chars, CTA-driven)
- ✅ `<link rel="canonical">` to absolute URL
- ✅ `hreflang` tags (en, de, x-default)
- ✅ Open Graph metadata
- ✅ Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`)
- ✅ Schema.org JSON-LD (Organization, Product, FAQPage, BreadcrumbList, Person)
- ✅ Accessibility (ARIA labels, focus-visible, prefers-reduced-motion)

Plus repo-level:
- ✅ `robots.txt` explicitly allowing GPTBot, ClaudeBot, PerplexityBot, Googlebot, Bingbot
- ✅ `llms.txt` for AI-crawler entity mapping
- ✅ `sitemap.xml` for both languages

---

## 🛡️ Security & GDPR

- **No tracking scripts** loaded before consent
- **No third-party JavaScript** at all (zero dependencies)
- **No cookies** set by the site itself
- **Cloudflare Web Analytics** (cookieless) recommended for traffic monitoring — avoids GA4 consent friction entirely
- **GDPR-compliant** by design: privacy policy, cookie policy, and Impressum (legally required in DE) all linked from every page footer

---

## 🤝 Contributing

This is the marketing site for Egypt Alumin. External pull requests are not currently accepted, but issues and suggestions are welcome.

If you spot a translation error, technical inaccuracy in product specifications, or a broken link, please open an issue.

---

## 📞 Contact

**Noel Murphy** — Partner, European Operations
Phone: [+353 87 118 7806](tel:+353871187806)
Email: [noel@egyptalumin.com](mailto:noel@egyptalumin.com)
WhatsApp: [Direct chat](https://wa.me/353871187806)

---

## 📄 License

MIT — see [LICENSE](./LICENSE). You are free to use this codebase as a reference for your own B2B website, but the **content** (product descriptions, company information, photography when added) remains property of Egypt Alumin.
