# ⚡ SEO Quick Reference Card

## 🚀 One-Minute Setup

```bash
# 1. Create OG images in public/images/
#    (See SEO_SUMMARY.md for list)

# 2. Update src/lib/seo.ts with your info
#    - SITE_URL
#    - Social media handles
#    - Contact info
#    - Business address

# 3. Deploy changes
git add .
git commit -m "Add comprehensive SEO implementation"
git push

# 4. Set up Google Search Console
#    - https://search.google.com/search-console
#    - Verify site
#    - Submit sitemap

# Done! 🎉
```

---

## 📋 Files Quick Reference

| File | Purpose | Status |
|------|---------|--------|
| `src/lib/seo.ts` | SEO utilities | ✅ Ready |
| `src/components/StructuredData.tsx` | Schema rendering | ✅ Ready |
| `src/components/Breadcrumbs.tsx` | Breadcrumb nav | ✅ Ready |
| `public/robots.txt` | Crawler rules | ✅ Ready |
| `src/app/sitemap.xml/route.ts` | XML sitemap | ✅ Ready |
| `src/app/not-found.tsx` | 404 page | ✅ Ready |
| `src/app/layout.tsx` | Root metadata | ✅ Ready |
| `next.config.js` | Performance | ✅ Ready |
| All `*/page.tsx` | Page metadata | ✅ Ready |

---

## 🔧 Common Tasks

### Add New Page
```typescript
// 1. Create file: src/app/new-page/page.tsx

import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { getWebPageSchema, getOGMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Page Title | Nispruh Yog",
  description: "Your 155-160 character description here.",
  keywords: ["keyword1", "keyword2"],
  alternates: {
    canonical: `${SITE_URL}/new-page`,
  },
  openGraph: getOGMetadata({...}),
  twitter: getTwitterMetadata({...}),
};

export default function Page() {
  const schema = getWebPageSchema({...});
  return (
    <>
      <StructuredData data={schema} />
      {/* Your content */}
    </>
  );
}
```

### Update Image Alt Text
```typescript
// Before
<Image src="/image.png" alt="" />

// After
<Image 
  src="/image.png" 
  alt="Descriptive text about the image"
/>
```

### Update Robots.txt
```
# public/robots.txt

User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://yourdomain.com/sitemap.xml
Crawl-delay: 1
```

### Test Schema Markup
```
1. Open: https://schema.org/docs/rdfs_home.html
2. Find schema type (Person, Article, etc.)
3. Copy required/recommended properties
4. Add to src/lib/seo.ts schema functions
```

---

## 📊 Monitoring Dashboard

### Daily
- Check for errors in server logs

### Weekly
- Monitor Google Search Console
- Check Core Web Vitals (PageSpeed Insights)
- Review 404 errors

### Monthly
- Analyze GSC performance data
- Check keyword rankings
- Review traffic trends
- Update sitemap if new pages added

### Quarterly
- Full SEO audit
- Competitor analysis
- Content strategy review
- Technical SEO review

---

## 🎯 Keyword Checklist

### Keywords to Target
```
Primary:
- Kriya Yoga
- Meditation
- Pranayama
- Spiritual practice

Long-tail:
- Kriya Yoga for beginners
- How to meditate
- Breathing exercises for anxiety
- Spiritual awakening techniques
- Inner peace meditation

Local (if applicable):
- Kriya Yoga [City Name]
- Meditation classes [Location]
- Yoga retreat [Region]
```

### Keyword Implementation
```
✅ Title tag (primary keyword)
✅ Meta description (long-tail)
✅ H1 heading (primary keyword)
✅ First paragraph (naturally)
✅ Internal links (anchor text)
✅ Image alt text (variations)
✅ Body content (naturally, not stuffing)
```

---

## 📱 Mobile SEO Checklist

```
✅ Mobile viewport configured
✅ Font sizes readable (16px+ minimum)
✅ Touch targets 44x44px minimum
✅ No mobile popups that block content
✅ Fast loading time (<3s)
✅ Responsive images
✅ No horizontal scrolling
✅ Accessible navigation
✅ Mobile-friendly forms
```

---

## 🔍 Debugging Guide

### GSC Shows 404s
```
1. Check submitted sitemap
2. Verify URLs are correct
3. Check robots.txt not blocking
4. Test page directly in browser
5. Re-submit sitemap
```

### Low Rankings
```
1. Ensure page is indexed (site:domain.com search)
2. Check On Page Audit in GSC
3. Use PageSpeed Insights
4. Verify keywords in content
5. Check for manual actions in GSC
6. Request re-indexing if recent changes
```

### No Impressions
```
1. Wait 4 weeks for indexing
2. Check competitors (similar keywords)
3. Improve content depth/quality
4. Build backlinks (guest posts, PR)
5. Increase site authority
6. Fix any flagged issues
```

---

## 📈 Expected Results Timeline

| Period | Expectation | Action |
|--------|------------|--------|
| Week 1-2 | Sitemap crawled | Monitor GSC |
| Week 2-4 | Pages indexed | Check Search Console |
| Month 1 | Long-tail rankings | Build backlinks |
| Month 2-3 | 50+ impressions | Optimize top pages |
| Month 3-6 | Primary keywords rank | Create more content |
| Month 6-12 | 500-2000 clicks/mo | Analyze + improve |

---

## 💡 Pro Tips

1. **Quality > Quantity**
   - 1 great page beats 10 mediocre ones
   - Depth wins in 2024+

2. **User Intent First**
   - Who's searching? What do they need?
   - Answer better than competitors

3. **Keywords Naturally**
   - Humans first, search engines second
   - No stuffing (Google will penalize)

4. **Consistency Matters**
   - Monthly blog posts = steady improvement
   - 3 blogs/month = exponential growth

5. **Link Building is Key**
   - Off-page SEO (backlinks) crucial
   - More authority = higher rankings
   - Guest posts, partnerships, press mentions

6. **Monitor Everything**
   - GSC: Search performance
   - Analytics: User behavior
   - PageSpeed: Technical performance
   - Rank tracking: Keyword positions

7. **Content Updates**
   - Refresh old content quarterly
   - Add recent data/statistics
   - Expand weak sections
   - Update publishing date

---

## ⚠️ SEO Mistakes to Avoid

```
❌ Keyword stuffing (will be penalized)
❌ Buying backlinks (violates guidelines)
❌ Cloaking (showing different content to bots)
❌ Hidden text (same color as background)
❌ Duplicate content (without canonical tag)
❌ Poor mobile experience
❌ Slow page speed
❌ Broken links (internal or external)
❌ Misleading titles/descriptions
❌ Ignoring Core Web Vitals
```

---

## 🎯 Year 1 Goals

### Months 1-3: Discovery
- ✅ All pages indexed
- ✅ Sitemap submitted
- ✅ Analytics tracking
- ✅ 50+ monthly searches

### Months 3-6: Growth
- ✅ Long-tail ranking
- ✅ 200+ monthly searches
- ✅ First page rankings
- ✅ 10-20 keywords ranked

### Months 6-12: Authority
- ✅ Primary keywords rank
- ✅ 1000+ monthly searches
- ✅ Featured snippets
- ✅ 50+ keywords on page 1

---

## 📞 Quick Links

```
Google Search Console: https://search.google.com/search-console
Google Analytics: https://analytics.google.com
PageSpeed Insights: https://pagespeed.web.dev/
Structured Data Tester: https://schema.org/docs
Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
Robots.txt Tester: https://search.google.com/test/robots.txt
```

---

## ✅ Pre-Launch Checklist

```
□ All OG images created (1200x630px)
□ All Twitter images created
□ src/lib/seo.ts updated with your info
□ robots.txt updated with domain
□ Sitemap test (visit /sitemap.xml)
□ Metadata tests (DevTools > Elements)
□ Mobile responsiveness test
□ 404 page test
□ All links test (no 404s)
□ Performance test (PageSpeed Insights)
□ Schema validation (no errors)
□ GSC account created
□ Analytics account created
□ All changes committed
```

---

## 🎉 Ready!

Your SEO is production-ready. Follow the deployment checklist in SEO_TESTING_CHECKLIST.md then enjoy the results!

**Need Details?** See:
- `SEO_IMPLEMENTATION_GUIDE.md` - Complete guide
- `SEO_TESTING_CHECKLIST.md` - Step-by-step tests  
- `SEO_SUMMARY.md` - Overview & next steps

---

*Last Updated: June 30, 2025*
*Quick Reference v1.0*
