# 🚀 Kriya Yoga Website - SEO Production Deployment Guide

## Overview

Your website has enterprise-grade SEO implemented. This guide walks you through the final setup steps to go live.

---

## ✅ Quick Start (15 minutes)

### 1. Configure Environment Variables

**Edit `.env.local`** in your project root:

```env
# Get from: https://analytics.google.com/analytics/web/
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Get from: https://search.google.com/search-console
NEXT_PUBLIC_GSC_VERIFICATION=

# Your domain (no trailing slash)
NEXT_PUBLIC_SITE_URL=https://nispruhyog.com

# Optional: Your contact info
NEXT_PUBLIC_CONTACT_EMAIL=contact@nispruhyog.com
NEXT_PUBLIC_CONTACT_PHONE=
```

**These values:**
- Are publicly visible (NEXT_PUBLIC_ prefix)
- Get injected at build time
- Enable GA4 tracking & GSC verification
- Should NOT be committed to git

### 2. Create Social Media Images

You need these 8 images for social sharing (1200x630 or 1200x675 pixels):

```
public/images/
├── og-image.png                 (1200x630) - Main/homepage
├── og-kriya-yoga.png            (1200x630) - About page
├── og-practices.png             (1200x630) - Practices page
├── og-teachings.png             (1200x630) - Teachings page
├── og-courses.png               (1200x630) - Courses page
├── og-events.png                (1200x630) - Events page
├── og-blog.png                  (1200x630) - Blog page
├── og-contact.png               (1200x630) - Contact page
├── twitter-image.png            (1200x675) - Twitter main
├── twitter-practices.png        (1200x675) - Twitter practices
├── twitter-teachings.png        (1200x675) - Twitter teachings
└── ... (others as needed)
```

**Design Guidelines:**
- Include "Nispruh Yog" branding
- Use pista green (#93C572) accents
- Add clear page title/topic
- Maintain consistent visual style
- Include your logo
- Keep text readable at small sizes

**Tools to Create (Free):**
- Figma: https://www.figma.com (professional, templates available)
- Canva: https://www.canva.com (beginner-friendly)
- Adobe Express: https://www.adobe.com/express/ (quick & easy)

**Image Specifications:**
- Format: PNG or JPG
- Dimensions: 1200x630px (OG), 1200x675px (Twitter)
- File size: Keep under 500KB each
- Color profile: sRGB

---

## 📊 Set Up Monitoring

### Google Search Console (GSC)

**Why:** Monitor how your site appears in Google Search, find indexing issues, track rankings.

1. Go to: https://search.google.com/search-console
2. Click "+ Add property"
3. Choose: "URL prefix"
4. Enter: `https://nispruhyog.com`
5. Verify ownership:
   - Choose "HTML tag" option
   - Get your `NEXT_PUBLIC_GSC_VERIFICATION` value
   - Add to `.env.local`
   - Deploy your site
   - Click "Verify" in GSC
6. Once verified, submit sitemap:
   - Left menu → "Sitemaps"
   - Enter: `https://nispruhyog.com/sitemap.xml`
   - Click "Submit"

**What to Monitor:**
- Performance → Impressions, CTR, Position
- Coverage → Errors and warnings
- Core Web Vitals → Page experience metrics
- Mobile Usability → Mobile-specific issues

### Google Analytics 4 (GA4)

**Why:** Track user behavior, page views, engagement, conversions.

1. Go to: https://analytics.google.com
2. Click "Create account"
3. Fill in your business info
4. Choose "Web" property
5. Get your **Measurement ID** (format: `G-XXXXXXXXXX`)
6. Add to `.env.local` as `NEXT_PUBLIC_GA_ID`
7. Wait 24 hours for data to appear

**Key Metrics to Track:**
- Organic traffic volume (from organic search)
- Bounce rate (aim for <50%)
- Avg session duration (aim for >1:30)
- Pages per session (aim for >2)
- Conversion rate (track form submissions)

### Bing Webmaster Tools (Optional but Recommended)

**Why:** Reach Bing/Edge searchers (~10% of market).

1. Go to: https://www.bing.com/webmasters
2. Click "Add site"
3. Enter domain
4. Verify with GSC (auto-import option)
5. Submit sitemap

---

## 🧪 Testing Before Deployment

### 1. Validate Structured Data

**Tool:** https://search.google.com/test/rich-results

- Paste your homepage URL
- Should see: Organization, BreadcrumbList, WebPage schemas
- No errors (warnings are OK)

### 2. Test Metadata

**Tool:** https://www.opengraph.xyz/

- Enter your URL
- Verify OG image appears
- Check title/description

### 3. Mobile-Friendly Test

**Tool:** https://search.google.com/test/mobile-friendly

- Enter: https://nispruhyog.com
- Should be "Mobile-friendly"
- No indexing issues

### 4. Performance Audit

**In Chrome DevTools:**
1. Right-click → "Inspect"
2. Lighthouse tab
3. Click "Analyze page load"
4. Target scores:
   - Performance: >90
   - Accessibility: >95
   - SEO: >95
   - Best Practices: >90

**Common Issues & Fixes:**

| Issue | Fix |
|-------|-----|
| LCP > 2.5s | Optimize hero image size |
| CLS > 0.1 | Add height attributes to images |
| FID > 100ms | Reduce JavaScript execution |
| Images not optimized | Ensure WebP/AVIF formats |

### 5. Test Locally

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open browser
open http://localhost:3000

# Test these:
- [ ] Homepage loads in <2 seconds
- [ ] All nav links work
- [ ] Dark mode toggle works
- [ ] Contact form accepts input
- [ ] Images load properly
- [ ] Breadcrumbs appear on sub-pages
- [ ] Mobile menu works on phone
```

---

## 🚀 Deployment Checklist

### Before Pushing to Production

- [ ] `.env.local` created with all values
- [ ] OG/Twitter images created and in `public/images/`
- [ ] Run local tests (see Testing section above)
- [ ] Run `npm run build` successfully
- [ ] Lighthouse scores all >90
- [ ] GSC verification meta tag working
- [ ] GA4 is tracking (check GA dashboard after 24h)

### Deployment Steps

```bash
# 1. Build for production
npm run build

# 2. Start production server (test locally)
npm start

# 3. Commit your changes
git add .
git commit -m "feat: Add GA4, GSC verification, and finalize SEO setup"

# 4. Push to production (your hosting provider)
git push origin main

# 5. Verify in browser
# Go to https://nispruhyog.com
# Right-click → View Page Source
# Search for "gtag" (GA4 present)
# Search for "google-site-verification" (GSC present)

# 6. Monitor for 48 hours
# Check GSC for any indexing errors
# Check GA4 for incoming traffic
```

### Post-Deployment (First Week)

**Day 1-2:**
- [ ] Verify site loads correctly
- [ ] GA4 is receiving data
- [ ] GSC recognizes your site
- [ ] All pages appear in search index

**Day 3-7:**
- [ ] Google crawls your sitemap
- [ ] Check coverage in GSC
- [ ] Monitor for any errors
- [ ] Share URL on social media

---

## 📈 Expected Results

### Month 1-2
- 50-100 impressions/month
- Few clicks from long-tail keywords
- Pages appear in search index
- 1-5 ranked keywords

### Month 3-6
- 100-300 impressions/month
- 5-10 clicks/month
- Better rankings for main keywords
- 10-20 ranked keywords

### Month 6-12
- 500-2000 impressions/month
- 50-200 clicks/month
- Top 10 rankings for competitive keywords
- 50+ ranked keywords

---

## 🔐 Security Checklist

- [ ] HTTPS enabled (automatic with most hosts)
- [ ] Security headers configured (in next.config.js)
- [ ] `.env.local` never committed to git
- [ ] No sensitive data in public files
- [ ] robots.txt excludes private areas
- [ ] Content-Security-Policy headers set

---

## 📞 Troubleshooting

### GA4 Not Tracking

1. Check browser console for errors
2. Verify `NEXT_PUBLIC_GA_ID` in Network tab
3. Wait 24 hours (data pipeline delay)
4. Check GA4 dashboard → Realtime section

### GSC Says "Not Verified"

1. Ensure meta tag is in `<head>` section
2. Rebuild & redeploy
3. Wait 24 hours
4. Check again in GSC

### Pages Not Appearing in Google

1. Check GSC Coverage report
2. Submit sitemap again
3. Click "Request Indexing" in GSC
4. Wait 2 weeks (initial crawl)

### Poor Core Web Vitals

1. Run PageSpeed Insights: https://pagespeed.web.dev/
2. Identify largest bottleneck
3. Fix highest priority items
4. Re-test after 48 hours

---

## 📚 Reference

### URLs to Know

```
Homepage:         https://nispruhyog.com
Sitemap:          https://nispruhyog.com/sitemap.xml
Robots.txt:       https://nispruhyog.com/robots.txt
GSC:              https://search.google.com/search-console
GA4:              https://analytics.google.com
PageSpeed:        https://pagespeed.web.dev/
Rich Results:     https://search.google.com/test/rich-results
OpenGraph Test:   https://www.opengraph.xyz/
```

### SEO Files in Your Project

```
src/
├── lib/seo.ts                     ← SEO utilities & schemas
├── components/
│   ├── StructuredData.tsx         ← Schema renderer
│   ├── Breadcrumbs.tsx            ← Breadcrumb nav + schema
│   └── GoogleAnalytics.tsx        ← GA4 tracking
└── app/
    ├── layout.tsx                 ← Global metadata
    ├── sitemap.xml/route.ts       ← Dynamic sitemap
    ├── [page]/page.tsx            ← Page-specific metadata
    └── not-found.tsx              ← 404 page

public/
├── robots.txt                      ← Crawler directives
├── images/
│   ├── og-image.png              ← Social images
│   └── twitter-image.png
└── ...

.env.local                          ← Environment variables
next.config.js                      ← Performance & security
```

---

## ✨ You're Ready!

Your Kriya Yoga website now has **enterprise-grade SEO**:

✅ Automated sitemap generation  
✅ Complete structured data (schema.org)  
✅ Open Graph & Twitter Cards  
✅ Google Analytics 4 tracking  
✅ Google Search Console verification  
✅ Mobile-first responsive design  
✅ Core Web Vitals optimization  
✅ Security headers  
✅ Accessibility (WCAG 2.1)  
✅ Performance optimizations  

**Next Steps:**
1. Complete environment variables
2. Create OG/Twitter images
3. Deploy to production
4. Set up GSC & GA4
5. Monitor for 2 weeks

**Expected Timeline:** First rankings in 2-4 weeks, meaningful traffic in 3-6 months.

---

*Need help?* See the individual component comments in your code or check Google's Search Central: https://developers.google.com/search
