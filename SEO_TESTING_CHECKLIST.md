# SEO Implementation Testing Checklist

## Quick Testing Guide

Before deploying your SEO improvements, test locally to ensure everything works correctly.

---

## 📝 Pre-Deployment Testing

### 1. Metadata Validation

**Test in Browser DevTools:**

```bash
# Run dev server
npm run dev

# Go to each page and right-click > Inspect > Elements tab
# Look for these tags in <head>:

✅ <title> - Should include keywords and brand
✅ <meta name="description"> - 155-160 characters
✅ <meta name="keywords"> - Should exist
✅ <meta property="og:title"> - For social sharing
✅ <meta property="og:description"> - For social sharing
✅ <meta property="og:image"> - For social sharing
✅ <meta name="twitter:card"> - For Twitter
✅ <link rel="canonical"> - Self-referencing
```

### 2. Structured Data Validation

**Using Google Structured Data Tester:**

1. Open: https://developers.google.com/search/docs/appearance/structured-data
2. Input or fetch your page URL
3. Look for green checks (no errors)
4. Blue warnings are OK, red errors must be fixed

**Local Testing:**

```bash
# Navigate to a page in your local dev server
# Right-click > View Page Source
# Search for <script type="application/ld+json">
# Should find Organization schema
```

### 3. Open Graph Testing

**Facebook Debugger:**

1. Open: https://developers.facebook.com/tools/debug/og/object
2. Enter URL: http://localhost:3000 (or deployed URL)
3. Should show:
   - ✅ Correct title
   - ✅ Correct description
   - ✅ OG image displayed
   - ✅ Site name

**Example Output:**
```
Title: "What is Kriya Yoga? Ancient Meditation Science Explained"
Description: "Discover the ancient science..."
Image: Shows properly scaled 1200x630 image
```

### 4. Twitter Card Testing

**Twitter Card Validator:**

1. Open: https://cards-dev.twitter.com/validator
2. Enter URL of your page
3. Should show:
   - ✅ summary_large_image card type
   - ✅ Title displayed
   - ✅ Description visible
   - ✅ Image shows correctly
   - ✅ Creator handle (@nispruhyog)

### 5. Robots.txt Verification

```bash
# Test in browser
curl http://localhost:3000/robots.txt

# Should output:
# User-agent: *
# Allow: /
# Disallow: /api/
# Sitemap: https://nispruhyog.com/sitemap.xml

✅ Confirms file exists and is properly formatted
✅ Must include sitemap URL when deployed
```

### 6. Sitemap Validation

```bash
# Test in browser
curl http://localhost:3000/sitemap.xml

# Should output valid XML with:
# ✅ All page URLs
# ✅ Priority values (0.1 - 1.0)
# ✅ Change frequency
# ✅ Proper XML structure
```

**Manual Testing:**

1. Open http://localhost:3000/sitemap.xml in browser
2. Should display XML (not error)
3. Check all your main pages are listed
4. Verify priorities make sense

### 7. Breadcrumb Testing

**Visual Testing:**

```
Visit pages in order:
1. http://localhost:3000/ → Should show just "Home"
2. http://localhost:3000/about-kriya-yoga → Should show "Home / About Kriya Yoga"
3. http://localhost:3000/practices → Should show "Home / Practices"

✅ Verify breadcrumbs display
✅ Verify links work
✅ Verify current page is not linked (text only)
```

**Schema Testing:**

1. Open DevTools (F12)
2. Go to Page Source (Ctrl+U)
3. Search for "BreadcrumbList"
4. Should find schema with correct structure

### 8. 404 Page Testing

```
1. Visit: http://localhost:3000/this-page-does-not-exist
2. Should show custom 404 page
3. Verify it shows:
   - ✅ 404 heading
   - ✅ Helpful message
   - ✅ Links to main pages
   - ✅ Not a blank error
```

### 9. Mobile Responsiveness Testing

```
DevTools > Toggle device toolbar (F12 > Ctrl+Shift+M)

Test on:
✅ iPhone 12 (390x844)
✅ iPad (768x1024)
✅ Android phone (412x915)

Check:
✅ Text readable (minimum 16px)
✅ Buttons clickable (minimum 44x44px)
✅ Images load correctly
✅ Navigation works
✅ Forms functional
```

### 10. Performance Testing

**Google PageSpeed Insights:**

1. Open: https://pagespeed.web.dev/
2. Analyze deployed URL
3. Look for:
   - ✅ LCP < 2.5s (green)
   - ✅ FID/INP < 100ms (green)
   - ✅ CLS < 0.1 (green)

**Local Testing:**

```bash
# In DevTools > Lighthouse tab (Chrome)
1. Click "Analyze page load"
2. Look for scores:
   - SEO should be 90+
   - Performance ideally 80+
   - Accessibility 90+
```

### 11. Canonical URL Testing

**In DevTools:**

```bash
# Right-click > View Source
# Search for: <link rel="canonical"

Example:
<link rel="canonical" href="https://nispruhyog.com/about-kriya-yoga" />

✅ Should be absolute URL (not relative)
✅ Should match current page
✅ Should be HTTPS (not HTTP)
```

### 12. Image Alt Text Testing

**In DevTools:**

```bash
# Right-click on image > Inspect
# Should see:

<Image 
  src="/image.png"
  alt="Descriptive text about image" ← Must exist!
/>

NOT:
<Image src="/image.png" alt="" /> ← BAD
```

**For Accessibility:**

```bash
# Firefox: Accessibility inspector tab
# Shows missing alt text with red X
# All images should have alt text
```

---

## 🔍 Specific Page Checklist

### Home Page
```
□ Title: "Nispruh Yog – A Quiet Practice | Kriya Yoga Meditation"
□ Description: Starts with "A sacred space for sincere seekers..."
□ Has OG tags
□ Has Twitter Card tags
□ Canonical URL present
□ Organization schema present
□ Logo has alt text
□ Breadcrumb shows just "Home"
```

### About Page
```
□ Title: "What is Kriya Yoga? Ancient Meditation Science Explained"
□ Description: Mentions "ancient science of Kriya Yoga"
□ Has OG tags with about-specific content
□ Breadcrumb: "Home / About Kriya Yoga"
□ WebPage schema present
□ Keywords naturally in content
□ H1 tag present and visible
```

### Practices Page
```
□ Title: "Kriya Yoga Practices | Breathing, Meditation & Rituals Guide"
□ Description: Mentions "step-by-step practice guides"
□ Has OG tags
□ Breadcrumb: "Home / Practices"
□ All practice cards visible
□ Images have alt text
```

### Teachings Page
```
□ Title: "Kriya Yoga Teachings | Spiritual Wisdom & Ancient Knowledge"
□ Description: Mentions "spiritual wisdom"
□ Has OG tags
□ Breadcrumb: "Home / Teachings"
□ Links to individual teaching pages work
```

### Courses Page
```
□ Title: "Kriya Yoga Courses & Programs | Meditation Training"
□ Description: Mentions "courses and programs"
□ Has OG tags
□ Breadcrumb: "Home / Courses & Programs"
□ Course descriptions visible
```

### Events Page
```
□ Title: "Kriya Yoga Retreats & Events | Meditation Gatherings"
□ Description: Mentions "retreats and events"
□ Has OG tags
□ Breadcrumb: "Home / Events & Retreats"
□ Event listings visible
```

### Blog Page
```
□ Title: "Blog | Reflections on Kriya Yoga Practice & Spiritual Living"
□ Description: Mentions "reflections"
□ Has OG tags
□ Breadcrumb: "Home / Blog"
□ Blog post cards visible
□ Links to individual posts work
```

### Contact Page
```
□ Title: "Contact Nispruh Yog | Get in Touch"
□ Description: Mentions "get in touch" or "reach out"
□ Has OG tags
□ Breadcrumb: "Home / Contact"
□ Contact form visible and functional
□ Contact information displayed
```

---

## 🚀 Deployment Checklist

Before deploying to production:

```
□ All tests pass locally
□ No console errors in DevTools
□ All images load without 404s
□ All internal links work
□ Forms are functional
□ Mobile view works properly
□ Structured data validates
□ Open Graph looks good
□ Twitter Card looks good
□ Sitemap generates at /sitemap.xml
□ Robots.txt accessible at /robots.txt
□ 404 page loads correctly
□ No broken internal links
□ Performance acceptable (PageSpeed > 60)
□ Accessibility score good (> 80)
```

---

## 📊 Post-Deployment (Week 1)

```
□ Verify all pages load on production
□ Create Google Search Console account
□ Verify site ownership in GSC
□ Submit sitemap in GSC
□ Check for crawl errors in GSC
□ Create Google Analytics account
□ Install Analytics tracking
□ Test Google Analytics (should show traffic)
□ Set up Bing Webmaster Tools
□ Monitor first 24 hours for issues
□ Check Google cache (cache:nispruhyog.com)
□ Monitor search console for manual actions
```

---

## 🐛 Common Issues & Fixes

### Issue: Sitemap returns 404

**Fix:**
```
Make sure route file exists: src/app/sitemap.xml/route.ts
Restart dev server: npm run dev
Test at: http://localhost:3000/sitemap.xml
```

### Issue: OG image not showing

**Fix:**
1. Image must exist at: public/images/og-image.png
2. Image should be 1200x630px
3. Use absolute URL in meta tag (not relative)
4. Test in Facebook Debugger
5. Clear cache: https://developers.facebook.com/tools/debug/og/object?q=YOUR_URL&re-parse=true

### Issue: Breadcrumb not showing

**Fix:**
1. Verify Breadcrumbs component imported
2. Check component renders on page
3. Verify getLocation() hook works
4. Ensure page has proper URL structure

### Issue: Structured Data invalid

**Fix:**
1. Use Google Structured Data Tester
2. Check for missing required fields
3. Verify JSON syntax (no extra commas)
4. Ensure @context and @type are present
5. Check all strings are properly escaped

### Issue: Title/Description not updating

**Fix:**
1. Clear browser cache (Ctrl+Shift+Delete)
2. Restart dev server
3. Check metadata export in page.tsx
4. Verify metadata object syntax
5. Hard refresh (Ctrl+F5)

---

## ✅ Success Indicators

After deployment, you should see:

```
✅ Pages indexed in Google (Search Console)
✅ Impressions in GSC (2-7 days)
✅ Click-through from organic search (2-4 weeks)
✅ Sitemap recognized in GSC
✅ No crawl errors in GSC
✅ All pages showing in Google (site:domain search)
✅ Rich snippets (if applicable)
✅ Mobile-friendly rating
```

---

**Testing Complete! Ready to deploy.** 🚀
