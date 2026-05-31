# Deployment Guide

This site is designed for **Cloudflare Pages** (free tier, edge-deployed, sub-1s global LCP). It will also deploy cleanly to Vercel, Netlify, GitHub Pages, or any static host.

---

## 🚀 Cloudflare Pages — Recommended Production Setup

### Prerequisites
- A Cloudflare account (free): https://dash.cloudflare.com/sign-up
- This repo pushed to GitHub (public or private — both work)

### Step 1 — Connect the repo

1. Go to **Cloudflare Dashboard** → **Workers & Pages** → **Create**
2. Click the **Pages** tab → **Connect to Git**
3. Authorize Cloudflare to access your GitHub account
4. Select the **egyptalumin** repository

### Step 2 — Configure build

| Setting | Value |
|---|---|
| **Project name** | `egyptalumin` |
| **Production branch** | `main` |
| **Build command** | *(leave blank — this is a static site)* |
| **Build output directory** | `/` *(root of the repo)* |
| **Root directory** | `/` |

Click **Save and Deploy**.

### Step 3 — First deployment

Cloudflare will build and deploy in ~30 seconds. You'll get a temporary URL like:

```
https://egyptalumin.pages.dev
```

Test it. Every push to `main` from now on will trigger an automatic redeploy.

### Step 4 — Custom domain

1. In your Pages project → **Custom domains** → **Set up a custom domain**
2. Enter `egyptalumin.com`
3. Cloudflare will guide you through the DNS records. If your domain is already on Cloudflare, it's a one-click setup. Otherwise, you'll add a CNAME at your DNS provider pointing to `egyptalumin.pages.dev`
4. Also add `www.egyptalumin.com` as a custom domain and set it to redirect to the apex

### Step 5 — Performance & analytics

In the Pages dashboard → **Settings**:

- **Web Analytics** → Enable (free, cookieless, GDPR-friendly — no consent banner needed for this alone)
- **Speed** → Auto Minify HTML/CSS (enable) — saves a few KB per page
- **Brotli compression** is on by default

### Step 6 — Submit to search engines

- **Google Search Console** (https://search.google.com/search-console) — add property, verify via TXT record, submit `https://egyptalumin.com/sitemap.xml`
- **Bing Webmaster Tools** (https://www.bing.com/webmasters) — same procedure
- **Yandex Webmaster** (optional, for Russian-language reach) — same procedure

Indexing typically takes 1–7 days for new domains.

---

## ⚡ Alternative: Vercel

If you prefer Vercel:

1. Go to https://vercel.com/new
2. Import the GitHub repo
3. **Framework Preset:** Other
4. **Build Command:** *(leave blank)*
5. **Output Directory:** `./`
6. Deploy

Vercel will pick up the `_redirects` and `_headers` files automatically via its Cloudflare compatibility layer.

---

## 🧪 Local preview

The simplest way to preview locally:

```bash
# Python (any version)
cd egyptalumin
python3 -m http.server 8000

# Then open http://localhost:8000/en/
```

Or with Node:

```bash
npx serve .
```

---

## 🔄 Workflow: making content changes

```bash
# Pull latest
git pull

# Edit files in /en/, /de/, or assets/styles.css
# (preview locally with python3 -m http.server)

# Commit and push
git add .
git commit -m "Update ADC12 mechanical properties table"
git push

# Cloudflare auto-deploys in ~30 seconds
```

Branch-based previews work out of the box: push to any non-`main` branch and Cloudflare will give you a unique preview URL for that branch. Perfect for reviewing translation changes before merging.

---

## 🛡️ Security checklist before going live

- [ ] Custom domain has SSL enabled (Cloudflare does this automatically)
- [ ] `Strict-Transport-Security` header in `_headers` is active (it is — HTTPS forced for 1 year)
- [ ] Run https://securityheaders.com against `egyptalumin.com` — aim for grade A
- [ ] Run https://pagespeed.web.dev/ against the homepage — aim for 95+ on mobile
- [ ] Verify `robots.txt` is reachable at `https://egyptalumin.com/robots.txt`
- [ ] Verify `sitemap.xml` is reachable at `https://egyptalumin.com/sitemap.xml`
- [ ] Verify `llms.txt` is reachable at `https://egyptalumin.com/llms.txt`
- [ ] Test all forms on a real device (mobile + desktop)
- [ ] Test all `tel:` and `mailto:` links on iOS Safari and Android Chrome
- [ ] Verify language switcher works correctly between `/en/` and `/de/`
- [ ] Check Google Rich Results Test on each product page: https://search.google.com/test/rich-results

---

## 📈 Post-launch monitoring

Week 1:
- Submit sitemap to Google Search Console, Bing Webmaster
- Check Cloudflare Web Analytics for any error spikes
- Run Lighthouse audit, screenshot the results for baseline

Week 2–4:
- Watch Search Console for index coverage issues
- Monitor Core Web Vitals (LCP, CLS, INP) for any regressions

Month 2+:
- Add the remaining planned pages: CBAM Guide, Contact, About, Industries, Quality
- Add French and Italian translations (Phase 2)
- Begin blog content schedule (2 articles/month)
- Consider Cloudflare Turnstile for spam protection on the RFQ form (when built)

---

## ❓ Troubleshooting

**"My custom domain shows a Cloudflare error page"**
DNS propagation can take up to 24 hours. Use https://dnschecker.org to verify the CNAME is pointing to `egyptalumin.pages.dev`.

**"The German page shows English content"**
Clear Cloudflare cache: Dashboard → your site → Caching → Configuration → Purge Everything.

**"Schema markup isn't being picked up"**
Test individual pages at https://validator.schema.org/ — Google can take 2–4 weeks to fully process structured data on a new domain.

**"How do I add a new product page?"**
1. Copy any existing product page (e.g. `en/products/adc12-die-casting-alloy.html`) as a template
2. Change content, schema JSON-LD, title, meta description, breadcrumbs
3. Add the URL to `sitemap.xml`
4. Add the URL to `_redirects` if you want trailing-slash support
5. Update `llms.txt` to reflect the new product
6. Commit, push, auto-deploys

---

## 🆘 Help

For deployment issues: noel@egyptalumin.com
For Cloudflare-specific issues: https://developers.cloudflare.com/pages/
