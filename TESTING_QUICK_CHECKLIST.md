# 📋 UX/UI Testing Quick Reference Checklist

**Last Updated:** April 27, 2026

---

## 🎯 Pre-Testing Checklist

Before starting tests:
- [ ] Clear browser cache
- [ ] Close other tabs to avoid performance interference
- [ ] Disable browser extensions that might affect rendering
- [ ] Have DevTools open during testing
- [ ] Open on latest browser versions
- [ ] Have a notebook ready to track issues

---

## 🏠 HOME PAGE TEST CHECKLIST

### Visual Elements
- [ ] Hero section displays with main image/background
- [ ] Hero title is prominent and readable
- [ ] Hero subtitle/description visible
- [ ] Hero CTA button visible and has hover effect
- [ ] All sections have proper spacing between them
- [ ] No overlapping text or elements
- [ ] Images load properly (no broken icons)

### Navigation & Structure
- [ ] Navbar fixed at top (or sticky)
- [ ] Logo/brand in navbar clickable
- [ ] All 8 navigation links visible/accessible
- [ ] Mobile hamburger menu works (mobile view)
- [ ] Theme toggle button visible in navbar
- [ ] Footer visible at bottom with all links
- [ ] Footer contact info visible

### Content Sections
- [ ] "What is Kriya Yoga" section displays
- [ ] Benefits section shows all benefit cards (3+)
- [ ] Each benefit card has icon + text
- [ ] Testimonials section visible with 2+ testimonials
- [ ] Each testimonial has name/attribution
- [ ] Teacher bio section displays
- [ ] Teacher photo displays
- [ ] "About Teacher" section readable and complete
- [ ] Journey/practice stages visible (if applicable)
- [ ] Final CTA button visible and clickable

### Functionality
- [ ] All links in navbar are clickable
- [ ] Theme toggle switches between light/dark
- [ ] CTA buttons navigate to correct pages
- [ ] No console errors (check DevTools)
- [ ] No broken links (404s)

---

## 🌓 THEME TESTING CHECKLIST

### Light Mode
- [ ] Background is light/white
- [ ] Text color is dark/readable
- [ ] All buttons visible with good contrast
- [ ] Form inputs visible and usable
- [ ] Images display clearly
- [ ] Links are distinguishable
- [ ] Hover states visible

### Dark Mode
- [ ] Background is dark/black
- [ ] Text color is light/readable
- [ ] All buttons visible with good contrast
- [ ] Form inputs visible and usable
- [ ] Images display clearly
- [ ] Links are distinguishable
- [ ] Hover states visible
- [ ] Theme toggle icon changes

### Theme Persistence
- [ ] Switch to dark mode on home page
- [ ] Navigate to another page → dark mode persists
- [ ] Refresh page → dark mode persists
- [ ] Open in new tab → uses system preference (or persisted preference)
- [ ] Close browser and reopen → preference saved

### Color Consistency
- [ ] Same colors on all pages in light mode
- [ ] Same colors on all pages in dark mode
- [ ] Accent colors (CTA buttons) consistent
- [ ] Text colors consistent

---

## 📧 CONTACT FORM CHECKLIST

### Form Visibility
- [ ] Contact page loads
- [ ] Form is visible
- [ ] Name field labeled and visible
- [ ] Email field labeled and visible
- [ ] Message/inquiry field labeled and visible
- [ ] Submit button visible and labeled

### Valid Submission
1. Enter: Name = "John Doe"
2. Enter: Email = "john@example.com"
3. Enter: Message = "I'd like more information"
4. Click Submit
- [ ] Form submits
- [ ] Success message displays OR page redirects
- [ ] No error messages
- [ ] Form may clear or show confirmation

### Validation - Empty Fields
1. Leave all fields empty
2. Click Submit
- [ ] Form does NOT submit
- [ ] Error message on Name field
- [ ] Error message on Email field
- [ ] Error message on Message field

### Validation - Empty Email
1. Fill Name: "Jane Doe"
2. Leave Email empty
3. Fill Message: "Question about practices"
4. Click Submit
- [ ] Form does NOT submit
- [ ] Error appears on Email field only
- [ ] Other fields accepted

### Validation - Invalid Email
1. Fill Name: "Jane Doe"
2. Fill Email: "notanemail"
3. Fill Message: "Question"
4. Click Submit
- [ ] Form does NOT submit
- [ ] Error message on Email field
- [ ] Error indicates invalid format

### Validation - Partial Data
**Test A - No Message:**
- [ ] Fill Name, Fill Email, Leave Message empty
- [ ] Try to submit
- [ ] Error on Message field only

**Test B - No Name:**
- [ ] Leave Name empty, Fill Email, Fill Message
- [ ] Try to submit
- [ ] Error on Name field only

### Keyboard Navigation
1. Tab through form
- [ ] Focus moves to Name field
- [ ] Focus moves to Email field
- [ ] Focus moves to Message field
- [ ] Focus moves to Submit button
- [ ] Focus indicator visible on each field

2. Shift+Tab backwards
- [ ] Goes back through fields in reverse order
- [ ] Focus wraps appropriately

3. Fill form and press Enter in a field
- [ ] Should NOT submit (unless in last field)
- [ ] Focus moves to next field

### Special Characters & Edge Cases
- [ ] Name with special chars: "José Maria" - submits ✓
- [ ] Name with apostrophe: "O'Brien" - submits ✓
- [ ] Email with subdomain: "user@mail.example.co.uk" - submits ✓
- [ ] Long message (500+ chars) - submits ✓
- [ ] Message with newlines - formatting preserved ✓

---

## 📱 RESPONSIVE DESIGN CHECKLIST

### Mobile (375px width)
**Using DevTools device emulation:**
1. Set to "iPhone SE" or 375px width
2. Refresh page
3. Navigate home page:
- [ ] No horizontal scrolling needed
- [ ] Hamburger menu visible (if applicable)
- [ ] Content stacks vertically
- [ ] Text readable (no tiny fonts)
- [ ] Images scale down properly
- [ ] Buttons have adequate touch size (44×44px)
- [ ] Navigation accessible
- [ ] Footer visible and accessible

4. Navigate all 8 pages:
- [ ] Each page displays correctly
- [ ] No broken layouts
- [ ] Forms usable on mobile
- [ ] All content reachable without scrolling excessively

5. Test interactions:
- [ ] Can scroll smoothly
- [ ] Buttons clickable
- [ ] Links clickable
- [ ] Theme toggle works

### Tablet (768px width)
1. Set to "iPad" or 768px width
2. Refresh page:
- [ ] 2-column layouts where applicable
- [ ] Content well-organized
- [ ] Navigation optimized for tablet
- [ ] Images appropriately sized
- [ ] Forms properly formatted
- [ ] No wasted space

### Desktop (1440px+ width)
1. Set to 1440px or larger:
- [ ] Full navigation visible
- [ ] Multi-column layouts active
- [ ] Content not stretched excessively
- [ ] Proper max-width if using container
- [ ] Professional appearance
- [ ] Hover effects visible and working

### Orientation Testing (Mobile Devices)
**If on actual device:**
1. Portrait orientation:
- [ ] Layout displays correctly
- [ ] Content scrollable and accessible

2. Rotate to landscape:
- [ ] Layout adjusts automatically
- [ ] Content still accessible
- [ ] Text readable
- [ ] No broken layouts

3. Rotate back to portrait:
- [ ] Layout switches correctly
- [ ] Scroll position reasonable

---

## ♿ ACCESSIBILITY CHECKLIST

### Keyboard Navigation
1. Start at page top
2. Press Tab repeatedly:
- [ ] Can reach all clickable elements
- [ ] Tab order makes logical sense
- [ ] Focus indicator visible (outline/highlight)
- [ ] No "keyboard trap" (can always Tab forward)

3. Test form fields:
- [ ] Tab moves through form fields
- [ ] Shift+Tab goes backward
- [ ] Enter submits form (in submit button)
- [ ] Space toggles checkboxes/theme toggle

### Screen Reader (macOS VoiceOver or Narrator/NVDA on Windows)
1. Enable screen reader
2. Navigate page:
- [ ] All text read aloud correctly
- [ ] Links identified as "link: [link text]"
- [ ] Buttons identified as "button: [button text]"
- [ ] Headings identified with level (H1, H2, etc.)
- [ ] Form fields identified with labels
- [ ] Images have alt text (read aloud or described)

3. Navigation landmarks:
- [ ] Can navigate by headings
- [ ] Can navigate by landmarks (nav, main, footer)
- [ ] Page structure logical when skipping content

### Color Contrast (Using DevTools or WebAIM tool)
1. Light mode text:
- [ ] Body text vs background: >= 4.5:1 ratio
- [ ] Large text vs background: >= 3:1 ratio
- [ ] Links distinguishable from text (not color alone)

2. Dark mode text:
- [ ] Body text vs background: >= 4.5:1 ratio
- [ ] Large text vs background: >= 3:1 ratio
- [ ] Links distinguishable from text

3. Buttons:
- [ ] Button text readable on button background
- [ ] Focus/hover states have sufficient contrast

### Form Labels & Instructions
- [ ] Each form field has visible label
- [ ] Labels clearly associated with fields
- [ ] Required fields marked (with asterisk or text)
- [ ] Error messages clear and specific
- [ ] Error messages linked to form field

### Alt Text on Images
Using DevTools Inspector:
- [ ] Each `<img>` has alt attribute
- [ ] Meaningful images have descriptive alt text
- [ ] Decorative images have empty alt=""
- [ ] Alt text describes what's important about image

---

## 🖼️ IMAGE & MEDIA CHECKLIST

### Image Loading
1. Load each page:
- [ ] All images load successfully
- [ ] No broken image icons (question marks)
- [ ] Images display at correct size
- [ ] Images don't overlap text
- [ ] No stretched/distorted images

2. Check network requests (DevTools Network tab):
- [ ] All images return 200 status
- [ ] No 404 errors for images
- [ ] Image file sizes reasonable
- [ ] Images use modern formats (WebP, JPEG, PNG)

### Responsive Images
- [ ] Images scale on mobile (not huge)
- [ ] Images scale on desktop (not tiny)
- [ ] Images maintain aspect ratio
- [ ] No horizontal scrolling caused by images

### Performance
Open DevTools Performance tab and record page load:
- [ ] First Contentful Paint (FCP) < 1.5s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Overall load time < 3 seconds
- [ ] No layout shifts as images load

---

## 🔗 NAVIGATION & LINKS CHECKLIST

### Navigation Bar
- [ ] Visible on all 8 pages
- [ ] Contains links to all 8 pages
- [ ] Links styled consistently
- [ ] Current page indicator visible (if applicable)
- [ ] Responsive on mobile (menu collapses)
- [ ] Theme toggle accessible in navbar
- [ ] Logo links to home page

### Footer
- [ ] Visible on all 8 pages
- [ ] Contains same content/links on all pages
- [ ] Footer links clickable
- [ ] Contact information visible
- [ ] Social media links (if any) present
- [ ] Styled consistently across pages

### Page Links
**From each page, test all navigation links:**
- [ ] Home link goes to /
- [ ] About Kriya Yoga link goes to /about-kriya-yoga
- [ ] Teachings link goes to /teachings
- [ ] Practices link goes to /practices
- [ ] Courses/Programs link goes to /courses-programs
- [ ] Events/Retreats link goes to /events-retreats
- [ ] Blog link goes to /blog
- [ ] Contact link goes to /contact

### Link States
- [ ] Links have hover effect
- [ ] Links have focus effect (keyboard)
- [ ] Active/current page link distinguished
- [ ] Visited link color different (if applicable)
- [ ] Link underline or other distinction from body text

### Browser Navigation
- [ ] Back button goes to previous page
- [ ] Forward button goes to next page
- [ ] URL changes when navigating
- [ ] Page content matches URL

---

## 📄 ALL 8 PAGES - INDIVIDUAL CHECKLIST

### HOME (/)
- [ ] Loads within 3 seconds
- [ ] Hero section complete
- [ ] Benefits visible
- [ ] Testimonials visible
- [ ] About teacher visible
- [ ] CTA buttons functional

### ABOUT KRIYA YOGA (/about-kriya-yoga)
- [ ] Page loads
- [ ] Title/heading matches page
- [ ] Content displays completely
- [ ] Images load if any
- [ ] Layout consistent with other pages
- [ ] Navigation bar consistent
- [ ] Footer present

### TEACHINGS (/teachings)
- [ ] Page loads
- [ ] Teaching content displays
- [ ] Content organized logically
- [ ] Images load if any
- [ ] Layout consistent
- [ ] Navigation consistent

### PRACTICES (/practices)
- [ ] Page loads
- [ ] Practice types/descriptions visible
- [ ] Content organized logically
- [ ] Images load if any
- [ ] Layout consistent
- [ ] Navigation consistent

### COURSES/PROGRAMS (/courses-programs)
- [ ] Page loads
- [ ] Course listings visible
- [ ] Course details visible
- [ ] CTA buttons functional
- [ ] Layout consistent
- [ ] Navigation consistent

### EVENTS/RETREATS (/events-retreats)
- [ ] Page loads
- [ ] Event/retreat listings visible
- [ ] Event details visible
- [ ] Dates/times visible if any
- [ ] Layout consistent
- [ ] Navigation consistent

### BLOG (/blog)
- [ ] Page loads
- [ ] Blog posts/articles visible
- [ ] Post titles and previews visible
- [ ] Images load if any
- [ ] Layout consistent
- [ ] Navigation consistent

### CONTACT (/contact)
- [ ] Page loads
- [ ] Contact form visible
- [ ] All fields present
- [ ] Form functional
- [ ] Contact information visible if any
- [ ] Layout consistent
- [ ] Navigation consistent

---

## 🐛 ISSUES FOUND LOG

Use this template to track issues:

```
Issue #:
Page:
Severity: [Critical / High / Medium / Low]
Description:
Steps to Reproduce:
Expected Behavior:
Actual Behavior:
Screenshot: Yes/No
Browser/Device:
Notes:
Status: [Open / In Progress / Fixed / Verified]
```

---

## ✅ FINAL APPROVAL CHECKLIST

Before marking testing complete:

- [ ] All pages load without errors
- [ ] All navigation works
- [ ] Theme toggle functional
- [ ] Theme persists
- [ ] Contact form validates
- [ ] Contact form submits
- [ ] Mobile responsive (375px)
- [ ] Tablet responsive (768px)
- [ ] Desktop responsive (1440px)
- [ ] Keyboard navigation works
- [ ] No console errors
- [ ] All images load
- [ ] All links work
- [ ] Typography consistent
- [ ] Colors consistent
- [ ] Spacing consistent
- [ ] No broken layouts
- [ ] Accessibility basic compliance
- [ ] < 3 second load time

---

**Test Date:** _______________

**Tester Name:** _______________

**Result:** ☐ PASS   ☐ FAIL   ☐ PASS WITH NOTES

**Notes/Issues Found:**

_____________________________________________

_____________________________________________

**Approved by:** _______________

**Date:** _______________
