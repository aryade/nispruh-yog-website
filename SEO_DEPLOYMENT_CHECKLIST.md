# ✅ SEO Deployment Checklist - Kriya Yoga Website

## Phase 1: Pre-Deployment Setup (Do This Now)

### Environment Configuration
- [ ] Copy `.env.example` to `.env.local`
- [ ] Add `NEXT_PUBLIC_GA_ID` (get from analytics.google.com)
- [ ] Add `NEXT_PUBLIC_GSC_VERIFICATION` (get from search.google.com/search-console)
- [ ] Update domain if different from nispruhyog.com
- [ ] Verify `.env.local` is in `.gitignore` (never commit)

### Social Media Images
- [ ] Create `public/images/og-image.png` (1200x630px)
- [ ] Create `public/images/twitter-image.png` (1200x675px)
- [ ] Create page-specific OG images for key pages:
  - [ ] `og-kriya-yoga.png` (About page)
  - [ ] `og-practices.png` (Practices page)
  - [ ] `og-teachings.png` (Teachings page)
  - [ ] `og-courses.png` (Courses page)
- [ ] All images have Nispruh Yog branding
- [ ] All images use pista green (#93C572) accents

### Configuration Values in `src/lib/seo.ts`
- [ ] `SITE_URL` correct (nispruhyog.com)
- [ ] Social media URLs updated
- [ ] Contact email correct
- [ ] Contact phone added
- [ ] Business address updated
- [ ] Twitter handles (@nispruhyog) correct

### Code Files Verification
- [ ] `src/components/GoogleAnalytics.tsx` exists
- [ ] `src/app/layout.tsx` includes GoogleAnalytics component
- [ ] `src/app/layout.tsx` has GSC verification meta tag
- [ ] `src/app/sitemap.xml/route.ts` has all pages listed
- [ ] `public/robots.txt` is configured
- [ ] `next.config.js` has security headers
- [ ] `src/components/StructuredData.tsx` is created
- [ ] `src/components/Breadcrumbs.tsx` is created
- [ ] `src/app/not-found.tsx` (404 page) exists

---

## Phase 2: Local Testing (Before Deployment)

### Build & Start
- [ ] Run `npm install` (all dependencies installed)
- [ ] Run `npm run build` (builds successfully, no errors)
- [ ] Run `npm start` (production server starts)
- [ ] Open http://localhost:3000

### Homepage Verification
- [ ] Page loads in <2 seconds
- [ ] Logo appears (background + navbar)
- [ ] All 9 sections render correctly
- [ ] CTA buttons have correct links
- [ ] Dark mode toggle works
- [ ] Navigation links work
- [ ] Mobile menu works on small screens

### Metadata Verification
- [ ] View page source (Cmd+U)
- [ ] Verify `<title>` is present
- [ ] Verify `<meta name="description">`
- [ ] Verify Open Graph tags (`og:title`, `og:description`, `og:image`)
- [ ] Verify Twitter tags (`twitter:card`, `twitter:title`)
- [ ] Verify `<link rel="canonical">`
- [ ] Verify `<script type="application/ld+json">` (Organization schema)

### Structured Data Validation
- [ ] Go to: https://search.google.com/test/rich-results
- [ ] Enter: http://localhost:3000
- [ ] Should see:
  - [ ] Organization schema (valid)
  - [ ] BreadcrumbList schema (valid)
  - [ ] WebPage schema (valid)
- [ ] No ERROR messages (warnings OK)

### Google Analytics Verification
- [ ] View page source
- [ ] Search for "gtag" (should appear in Network tab)
- [ ] Check if `NEXT_PUBLIC_GA_ID` is in code
- [ ] Open Google Analytics dashboard
- [ ] Go to Admin → Accounts
- [ ] Create new Web property with your GA4 ID
- [ ] Return to dashboard → Realtime
- [ ] Refresh localhost → should see "1 active user"

### Mobile-Friendly Check
- [ ] Chrome DevTools (F12) → Toggle Device Toolbar
- [ ] Test on mobile (375px width)
- [ ] All text readable
- [ ] Buttons are >44px tall
- [ ] No horizontal scrolling
- [ ] Navigation accessible

### Performance Audit
- [ ] Chrome DevTools → Lighthouse
- [ ] Click "Analyze page load"
- [ ] Performance: **target >90**
- [ ] Accessibility: **target >95**
- [ ] Best Practices: **target >90**
- [ ] SEO: **target >95**
- [ ] Fix any issues marked as "errors"

### Page Navigation Test
- [ ] Click each nav link
- [ ] Each page loads correctly:
  - [ ] Home (/)
  - [ ] About Kriya Yoga (/about-kriya-yoga)
  - [ ] Practices (/practices)
  - [ ] Teachings (/teachings)
  - [ ] Courses (/courses-programs)
  - [ ] Events (/events-retreats)
  - [ ] Blog (/blog)
  - [ ] Contact (/contact)
- [ ] Breadcrumbs appear on sub-pages
- [ ] Back button works

### Contact Form Test
- [ ] Fill form with test data
- [ ] Submit form
- [ ] See success message
- [ ] Try submitting empty form
- [ ] Validation works

### 404 Page Test
- [ ] Visit http://localhost:3000/nonexistent-page
- [ ] 404 page appears
- [ ] "Go back home" link works
- [ ] Navigation is accessible

---

## Phase 3: Pre-Production Checks (24h Before Deploy)

### Git Preparation
- [ ] Stage all changes: `git add .`
- [ ] Review changes: `git diff --staged`
- [ ] Verify no `.env.local` is staged (should be gitignored)
- [ ] Verify no node_modules are staged
- [ ] Commit: `git commit -m "feat: Add GA4, GSC verification, and SEO components"`
- [ ] Push to main: `git push origin main`

### Final Code Review
- [ ] All SEO components present
- [ ] No console errors in development
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Performance optimizations applied
- [ ] Security headers configured

---

## Phase 4: Deployment

### Deploy to Production
- [ ] Build succeeds: `npm run build`
- [ ] Start server: `npm start`
- [ ] Application loads: https://nispruhyog.com
- [ ] All pages accessible
- [ ] No 404 errors
- [ ] No TypeScript errors in console

### Verify Production Site
- [ ] Homepage loads (check speed)
- [ ] Page source contains GA4 code
- [ ] Page source contains GSC verification
- [ ] Open Graph tags present
- [ ] Schema markup present
- [ ] Breadcrumbs appear on sub-pages
- [ ] Dark mode works
- [ ] Mobile-friendly

### Test in Different Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

---

## Phase 5: Post-Deployment (First 48 Hours)

### Google Search Console Setup
- [ ] Go to: https://search.google.com/search-console
- [ ] Click "+ Add property"
- [ ] Enter: https://nispruhyog.com
- [ ] Verify with HTML meta tag:
  - [ ] Copy verification value from GSC
  - [ ] Add to `.env.local`: `NEXT_PUBLIC_GSC_VERIFICATION=...`
  - [ ] Rebuild & redeploy
  - [ ] Return to GSC → Click Verify
- [ ] Submit sitemap:
  - [ ] Go to Sitemaps section
  - [ ] Enter: https://nispruhyog.com/sitemap.xml
  - [ ] Click Submit
- [ ] Check Coverage report (should show pages being indexed)

### Google Analytics Setup
- [ ] Go to: https://analytics.google.com
- [ ] Login to GA4 property
- [ ] Go to Admin → Accounts → Web properties
- [ ] Check if tracking is active:
  - [ ] Go to: Admin → Data Collection & Modification → Data Streams
  - [ ] Click web stream
  - [ ] Scroll to "Tagging" section
  - [ ] Should show green checkmark (tagged)
- [ ] Wait 24 hours for data to appear
- [ ] Check Realtime section:
  - [ ] Should see users visiting site
  - [ ] Should see pages being viewed
  - [ ] Should see geographic data

### Performance Monitoring
- [ ] Run Lighthouse audit on production site
- [ ] Compare scores with local tests
- [ ] Monitor Core Web Vitals:
  - [ ] Go to PageSpeed Insights: https://pagespeed.web.dev
  - [ ] Enter production URL
  - [ ] Check LCP, FID, CLS scores
  - [ ] Target: Green scores in all metrics

### Search Index Verification
- [ ] In GSC, go to "Coverage"
- [ ] Check "Indexed" count
- [ ] Should show: Homepage + main pages
- [ ] Check for any errors or warnings
- [ ] Fix any issues immediately

### Backlink Monitoring (Optional)
- [ ] Go to Bing Webmaster Tools: https://www.bing.com/webmasters
- [ ] Add your site
- [ ] Verify ownership
- [ ] Submit sitemap

---

## Phase 6: First Month Monitoring

### Weekly Checks
- [ ] Check GSC → Performance report
  - [ ] Impressions increasing?
  - [ ] Clicks appearing?
  - [ ] Any errors?
- [ ] Check GA4 → Dashboard
  - [ ] Users appearing?
  - [ ] Session duration >1 minute?
  - [ ] Bounce rate <60%?
- [ ] Run Lighthouse audit (Friday)
  - [ ] Scores stable/improving?
  - [ ] No performance regression?

### Monthly Checks
- [ ] Analyze top performing pages
- [ ] Identify keywords ranking
- [ ] Monitor competitor keywords
- [ ] Plan content updates
- [ ] Check backlink growth

---

## ✨ Success Indicators

You'll know it's working when:

✅ GSC shows pages indexed (2-4 weeks)  
✅ GA4 shows organic traffic (1-2 weeks after indexing)  
✅ Lighthouse scores all >90  
✅ Core Web Vitals in green zone  
✅ First keywords ranking (#11-20) at 1 month  
✅ Better rankings (#1-10) at 3-6 months  
✅ 50-100+ impressions/month by month 2  
✅ 5-20+ organic clicks/month by month 3  

---

## 🚨 Common Issues & Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| GA4 not tracking | GA ID not set | Add GA4 ID to `.env.local` |
| GSC not verified | Meta tag missing | Ensure tag in HTML head |
| Pages not indexed | Sitemap not submitted | Submit in GSC → Sitemaps |
| Poor performance | Large images | Optimize images, enable WebP |
| High bounce rate | Slow loading | Reduce CSS/JS, optimize LCP |
| No rankings yet | New site | Wait 4-8 weeks for initial rankings |

---

## 📋 Final Sign-Off

Before considering this complete:

- [ ] All checklist items completed
- [ ] No critical errors in console
- [ ] Lighthouse scores >90
- [ ] Site fully functional
- [ ] GA4 & GSC set up
- [ ] Team trained on monitoring
- [ ] Documentation shared
- [ ] Backup created

**Deployment Date:** _______________  
**Deployed By:** _______________  
**Status:** Ready for Production ✅

---

**Questions?** See `SEO_PRODUCTION_DEPLOYMENT.md` for detailed instructions.
