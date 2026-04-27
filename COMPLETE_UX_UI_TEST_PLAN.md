# 🧪 Complete 100% UX/UI Test Plan - Kriya Yoga Website

**Date:** April 27, 2026  
**Scope:** Complete User Experience & User Interface Testing  
**Application:** Kriya Yoga Website (Next.js)  
**Test Framework:** Playwright + Manual Testing Checklist

---

## 📋 Executive Summary

This comprehensive test plan covers **100% UX/UI testing** for all 8 pages of the Kriya Yoga website. It includes:

- **12 Test Categories**
- **60+ Test Cases**
- **Multiple Viewport Sizes** (Mobile, Tablet, Desktop)
- **Light & Dark Theme Variations**
- **Accessibility Compliance**
- **Form Validation & Error Handling**
- **Cross-Page Consistency**

---

## 🎯 Test Categories

### 1. Navigation & Page Structure
- [x] Home page loads correctly
- [x] All 8 pages accessible from navigation
- [x] Navigation menu responsive on mobile
- [x] Logo/brand links to home
- [x] Browser back/forward buttons work
- [x] URL changes correctly on navigation
- [x] Active page indicator in navigation

### 2. Theme Toggle & Persistence
- [x] Light/Dark mode switch works
- [x] Theme preference saves to localStorage
- [x] Theme persists on page refresh
- [x] Theme persists across all pages
- [x] UI contrast adequate in both themes
- [x] Forms visible in both themes
- [x] Images display correctly in both themes

### 3. Contact Form & Validation
- [x] All form fields visible
- [x] Name field validation (required)
- [x] Email field validation (format check)
- [x] Message field validation (required)
- [x] Form submission success
- [x] Form error messages clear
- [x] Form data clearing between submissions
- [x] Keyboard accessibility for form

### 4. Home Page Content
- [x] Hero section with CTA
- [x] What is Kriya Yoga section
- [x] Benefits cards (all visible)
- [x] Journey/progression stages
- [x] Teacher bio section
- [x] Testimonials section
- [x] Final CTA button

### 5. Internal Navigation Links
- [x] All 8 page links present
- [x] Links navigate correctly
- [x] Link hover states visible
- [x] Link focus states (keyboard accessible)
- [x] No broken links

### 6. Responsive Design (Mobile/Tablet/Desktop)
- [x] Mobile (375px width)
  - Navigation collapses to mobile menu
  - Content stacks vertically
  - Buttons full width or appropriately sized
  - Text readable without horizontal scroll
  - Images scale properly
  
- [x] Tablet (768px width)
  - Content uses tablet layout
  - Navigation optimized
  - Cards display in 2-column layout
  
- [x] Desktop (1440px+ width)
  - Full desktop layout
  - Multi-column content
  - Sidebar or wide navigation

### 7. Page-Specific Features
- [x] About Kriya Yoga page loads and displays content
- [x] Blog page shows blog posts/articles
- [x] Teachings page displays teaching content
- [x] Practices page shows practice types
- [x] Courses/Programs page lists offerings
- [x] Events/Retreats page shows upcoming events
- [x] Contact page displays form
- [x] All pages have appropriate hero section

### 8. Animations & Transitions
- [x] Page transitions are smooth
- [x] No janky animations
- [x] Animations respect prefers-reduced-motion
- [x] Loading states display correctly
- [x] Scroll animations work on desktop

### 9. Accessibility & Semantic HTML
- [x] Semantic HTML tags used (<header>, <nav>, <main>, <footer>)
- [x] ARIA labels on interactive elements
- [x] Alt text on all images
- [x] Color contrast ratios meet WCAG AA
- [x] Keyboard navigation works throughout
- [x] Tab order is logical
- [x] Focus indicators visible
- [x] Screen reader compatibility

### 10. Image Loading & Performance
- [x] All images load successfully
- [x] Image placeholders display while loading
- [x] No broken image icons
- [x] Images scale responsively
- [x] Page load time acceptable (<3 seconds)

### 11. Error Handling & Edge Cases
- [x] Invalid URL shows 404 or error page
- [x] Network errors handled gracefully
- [x] Form submission with network error
- [x] Empty page states handled
- [x] Very long content doesn't break layout

### 12. Cross-Page Consistency
- [x] Navigation bar consistent on all pages
- [x] Footer consistent on all pages
- [x] Theme applies consistently
- [x] Color palette consistent
- [x] Typography consistent
- [x] Spacing/margins consistent
- [x] Button styles consistent

### 13. Visual Regression & UI Integrity
- [x] Hero section layout consistent
- [x] Button styling consistent
- [x] Card styling consistent
- [x] Form styling consistent
- [x] No overlapping text
- [x] No broken layouts

---

## 📱 Testing Matrix

### Viewports to Test

| Viewport | Width | Device | Browser |
|----------|-------|--------|---------|
| Mobile   | 375px | iPhone SE | Chrome, Safari |
| Tablet   | 768px | iPad | Chrome, Safari |
| Desktop  | 1440px+ | Desktop | Chrome, Firefox, Safari, Edge |

### Themes to Test

- [x] Light Mode
- [x] Dark Mode

### Feature Combinations

| Page | Light | Dark | Mobile | Tablet | Desktop | Form |
|------|-------|------|--------|--------|---------|------|
| Home | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| About | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| Teachings | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| Practices | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| Courses | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| Events | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| Blog | ✓ | ✓ | ✓ | ✓ | ✓ | - |
| Contact | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

---

## 🧑‍💻 Detailed Test Scenarios

### CATEGORY 1: Navigation & Page Structure

#### Test 1.1: Home Page Loads Completely
**Steps:**
1. Navigate to `https://[your-domain]/` or `localhost:3000`
2. Wait for page to fully load
3. Observe all elements

**Expectations:**
- Page loads within 3 seconds
- Hero section visible immediately
- Navigation bar at top
- Footer at bottom
- No console errors
- All images loaded

#### Test 1.2: Navigate to All 8 Pages
**Steps:**
1. From home, click "About Kriya Yoga" → Verify URL and content
2. Click "Teachings" → Verify URL and content
3. Click "Practices" → Verify URL and content
4. Click "Courses/Programs" → Verify URL and content
5. Click "Events/Retreats" → Verify URL and content
6. Click "Blog" → Verify URL and content
7. Click "Contact" → Verify URL and form visible

**Expectations:**
- Each page loads correctly
- URL changes appropriately
- Content is specific to each page
- No broken layouts
- Navigation remains consistent

#### Test 1.3: Browser Navigation Works
**Steps:**
1. Navigate to Home → About → Teachings
2. Click browser back button
3. Verify on Teachings page
4. Click back button again
5. Verify on About page
6. Click forward button
7. Verify on Teachings page

**Expectations:**
- Back button works correctly
- Forward button works correctly
- Page content and scroll position preserved

#### Test 1.4: Logo/Brand Link
**Steps:**
1. Navigate to any page (e.g., Contact page)
2. Click on logo/website title in top-left
3. Observe result

**Expectations:**
- Logo is clickable
- Returns to home page
- URL shows "/"

---

### CATEGORY 2: Theme Toggle & Persistence

#### Test 2.1: Switch Between Light and Dark Mode
**Steps:**
1. Load home page (should default to light mode)
2. Look for theme toggle button (usually sun/moon icon)
3. Click theme toggle button
4. Observe page styling
5. Click theme toggle again
6. Observe page returns to light mode

**Expectations:**
- Button is easily visible and clickable
- Page immediately switches to dark mode
- All text remains readable
- All elements have appropriate contrast
- Button icon changes to indicate new theme
- Clicking again returns to light mode

#### Test 2.2: Theme Persists Across Pages
**Steps:**
1. Load home in light mode
2. Switch to dark mode
3. Navigate to About page
4. Navigate to Contact page
5. Navigate to Blog page
6. Refresh page

**Expectations:**
- Dark mode persists on all pages
- Dark mode persists after refresh
- Mode is saved to localStorage
- No flickering between modes on page load

#### Test 2.3: Theme Colors Consistent
**Steps:**
1. Switch to light mode
2. Visit each page: Home, About, Teachings, Practices, Courses, Events, Blog, Contact
3. Verify consistent styling across all pages
4. Switch to dark mode
5. Repeat step 2

**Expectations:**
- Same color palette on all pages
- Light mode: light background, dark text
- Dark mode: dark background, light text
- All cards, buttons, and components use theme colors
- Forms display correctly in both modes

---

### CATEGORY 3: Contact Form Testing

#### Test 3.1: Form Fields Present and Visible
**Steps:**
1. Navigate to Contact page
2. Observe form

**Expectations:**
- Name input field visible and labeled
- Email input field visible and labeled
- Message textarea visible and labeled
- Submit button visible and labeled
- Form is clearly organized
- All fields have reasonable spacing

#### Test 3.2: Form Submission with Valid Data
**Steps:**
1. Navigate to Contact page
2. Enter name: "John Doe"
3. Enter email: "john@example.com"
4. Enter message: "I'm interested in Kriya Yoga courses"
5. Click Submit button
6. Observe result

**Expectations:**
- Form accepts all inputs
- Submit button is clickable
- Success message or confirmation appears
- Form may clear after submission OR redirect to success page
- No error messages appear

#### Test 3.3: Form Validation - Required Fields
**Steps:**
1. Navigate to Contact page
2. Leave all fields empty
3. Click Submit button
4. Observe validation

**Expectations:**
- Form does not submit
- Validation error appears for Name field
- Validation error appears for Email field
- Validation error appears for Message field
- Error messages are clear and helpful

#### Test 3.4: Form Validation - Invalid Email
**Steps:**
1. Fill Name: "John Doe"
2. Fill Email: "notanemail"
3. Fill Message: "Test message"
4. Click Submit

**Expectations:**
- Form does not submit
- Email field shows error
- Error indicates email format is invalid
- Other fields remain valid

#### Test 3.5: Form Validation - Partial Fill
**Scenario A: Name & Message, No Email**
- Leave Email empty
- Fill Name and Message
- Try to submit
- **Expect:** Error on Email field only

**Scenario B: Name & Email, No Message**
- Leave Message empty
- Fill Name and Email
- Try to submit
- **Expect:** Error on Message field only

#### Test 3.6: Form Keyboard Navigation
**Steps:**
1. Navigate to Contact page
2. Press Tab key
3. Verify focus moves to Name field
4. Press Tab again
5. Verify focus moves to Email field
6. Press Tab again
7. Verify focus moves to Message field
8. Press Tab again
9. Verify focus moves to Submit button
10. Press Tab again
11. Verify focus moves to next element or wraps

**Expectations:**
- Tab moves through fields in correct order
- Focus indicator visible on each field
- Shift+Tab moves backwards

#### Test 3.7: Form Data Entry Edge Cases
**Steps:**
1. Test Name with special characters: "João Silva", "O'Brien", "Al-Rashid"
2. Test Email with subdomain: "user@mail.example.co.uk"
3. Test Message with long text (500+ characters)
4. Test Message with multiple paragraphs and newlines

**Expectations:**
- All special characters accepted in name
- Complex email addresses accepted
- Long messages accepted and wrapped properly
- Newlines preserved in message
- All data submitted correctly

---

### CATEGORY 4: Home Page Content

#### Test 4.1: Hero Section
**Steps:**
1. Load home page
2. Observe hero section
3. In mobile view (375px), observe hero
4. In tablet view (768px), observe hero
5. In desktop view (1440px), observe hero

**Expectations:**
- Hero section visible with main title
- Hero description text visible
- Hero CTA button visible and clickable
- Hero image/background displays
- Responsive layout adapts to viewport
- No text overlaps or cutoffs

#### Test 4.2: Benefits Section
**Steps:**
1. Scroll down from hero
2. Look for Benefits section
3. Count benefit cards
4. Verify each card has icon/image and text
5. Check responsive layout: mobile (1 column), tablet (2 cols), desktop (3+ cols)

**Expectations:**
- Benefits section title visible
- All benefit cards display
- Each card has visual element (icon/image)
- Each card has descriptive text
- Cards align properly without gaps or overlaps
- Responsive layout works

#### Test 4.3: Testimonials Section
**Steps:**
1. Scroll to testimonials section
2. Verify testimonials display
3. Check for author name/photo
4. Check rating if applicable
5. Verify text is readable

**Expectations:**
- Testimonials title visible
- At least 2-3 testimonials displayed
- Each includes author attribution
- Photos display correctly
- Star ratings (if used) visible
- Text is readable and complete

#### Test 4.4: About Teacher Section
**Steps:**
1. Scroll to About Teacher section
2. Verify teacher photo displays
3. Verify teacher name visible
4. Verify bio text readable
5. Verify relevant credentials/background shown

**Expectations:**
- Teacher photo loads correctly
- Name clearly displayed
- Bio is complete and readable
- Credentials/qualifications shown
- Professional presentation

#### Test 4.5: Final CTA Section
**Steps:**
1. Scroll to bottom of home page
2. Look for final CTA (Call-To-Action)
3. Click on CTA button
4. Verify destination

**Expectations:**
- Final CTA visible and prominent
- Button is clearly clickable
- Button navigates to intended page (likely Contact or Courses)
- Link works correctly

---

### CATEGORY 5: Responsive Design

#### Test 5.1: Mobile View (375px width)
**Steps:**
1. Open developer tools
2. Set viewport to 375px width
3. Refresh page
4. Navigate through all pages
5. Verify:
   - Navigation collapses to hamburger menu (or mobile-friendly layout)
   - Content stacks vertically
   - Text readable without horizontal scroll
   - Buttons have adequate touch target size (44x44px minimum)
   - Images scale down appropriately
   - Forms are usable on small screen

**Expectations:**
- All content visible without horizontal scrolling
- Navigation accessible via mobile menu
- Buttons have adequate size for touch
- Text remains readable
- Images and layout adapt well

#### Test 5.2: Tablet View (768px width)
**Steps:**
1. Set viewport to 768px
2. Navigate all pages
3. Verify:
   - Navigation visible (likely not full desktop, but more than mobile)
   - Content uses 2-column layouts where appropriate
   - Cards display 2 per row or similar
   - Forms are properly formatted
   - Touch-friendly layout

**Expectations:**
- Layout optimized for tablet
- Content readable and usable
- Navigation accessible
- Cards/content properly arranged

#### Test 5.3: Desktop View (1440px+)
**Steps:**
1. Set viewport to 1440px or larger
2. Navigate all pages
3. Verify:
   - Full navigation visible
   - Multi-column layouts utilized
   - Content properly centered if using max-width container
   - Hover states work on interactive elements

**Expectations:**
- Full desktop layout active
- All content visible
- Proper use of horizontal space
- Professional appearance

#### Test 5.4: Portrait to Landscape Rotation
**Steps:**
1. Open on mobile device
2. Rotate device from portrait to landscape
3. Observe layout change
4. Scroll and verify content accessible
5. Rotate back to portrait

**Expectations:**
- Layout automatically adjusts
- No content hidden or broken
- Readable text in both orientations
- Smooth transition

---

### CATEGORY 6: Accessibility Testing

#### Test 6.1: Semantic HTML
**Using browser DevTools or automated check:**
- Verify `<header>`, `<nav>`, `<main>`, `<footer>` tags used
- Verify headings use proper hierarchy: `<h1>`, `<h2>`, `<h3>`
- Verify lists use `<ul>`, `<ol>`, `<li>` tags
- Verify forms use `<form>`, `<label>`, `<input>`, `<button>` tags

**Expectations:**
- Proper semantic structure throughout
- Screen readers can navigate properly
- Page outline makes sense

#### Test 6.2: ARIA Labels
**Steps:**
1. Open page in accessibility inspector
2. Check buttons for aria-label or visible text
3. Check form fields for aria-label or <label>
4. Check icons for aria-label
5. Check interactive elements for aria-label

**Expectations:**
- All buttons have descriptive text
- Form fields have associated labels
- Icons have aria-label or alt text
- Screen reader users can understand all elements

#### Test 6.3: Alt Text on Images
**Steps:**
1. Open page in browser DevTools
2. Inspect each image tag
3. Verify src attribute exists
4. Verify alt attribute exists (if decorative, can be empty)
5. Check alt text is descriptive

**Expectations:**
- Meaningful images have descriptive alt text
- Decorative images have empty alt=""
- Alt text describes image content
- Alt text allows understanding without seeing image

#### Test 6.4: Color Contrast
**Using WCAG Color Contrast Checker or DevTools:**
- Light mode text vs background: min 4.5:1 for normal text
- Dark mode text vs background: min 4.5:1 for normal text
- Button text and backgrounds have sufficient contrast
- All links distinguishable from text

**Expectations:**
- All text meets WCAG AA contrast ratio (4.5:1)
- Large text meets WCAG AA (3:1)
- Color not sole means of conveying information

#### Test 6.5: Keyboard Navigation
**Steps:**
1. Navigate entire site using only Tab, Shift+Tab, Enter, Space
2. Verify can reach all interactive elements
3. Verify focus order makes sense
4. Verify focus indicator visible
5. Verify Enter/Space activates buttons

**Expectations:**
- Can navigate entire site with keyboard
- Focus indicator visible on all elements
- Tab order logical and intuitive
- No keyboard trap (can always tab forward)
- Forms completely keyboard accessible

#### Test 6.6: Screen Reader Testing
**Using free screen readers:**
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (Mac/iOS)
- TalkBack (Android)

**Steps:**
1. Enable screen reader
2. Navigate through page
3. Verify all content read aloud
4. Verify links announced as links
5. Verify buttons announced as buttons
6. Verify form fields announced correctly

**Expectations:**
- All content readable by screen reader
- Structure clear when navigating by headings
- Navigation landmarks identified
- Forms completely accessible

---

### CATEGORY 7: Image Loading & Performance

#### Test 7.1: Images Load Correctly
**Steps:**
1. Load each page
2. Wait for images to fully load
3. Open network tab in DevTools
4. Verify no 404 errors for images
5. Verify image dimensions correct

**Expectations:**
- All images load successfully
- No broken image icons
- Images display at correct size
- Network requests successful (200 status)

#### Test 7.2: Performance - Page Load Time
**Steps:**
1. Open DevTools Performance tab
2. Record page load
3. Note First Contentful Paint (FCP)
4. Note Largest Contentful Paint (LCP)
5. Note Cumulative Layout Shift (CLS)

**Expectations:**
- FCP < 1.5 seconds
- LCP < 2.5 seconds
- CLS < 0.1
- Overall load time < 3 seconds

#### Test 7.3: Image Optimization
**Steps:**
1. Check image file sizes in network tab
2. Verify images are modern format (WebP or JPEG, not BMP or unoptimized)
3. Verify images have responsive sizes (srcset if applicable)

**Expectations:**
- Images properly optimized
- No unnecessarily large files
- Appropriate formats used

---

### CATEGORY 8: Error Handling

#### Test 8.1: Invalid URL
**Steps:**
1. Navigate to `/invalid-page-that-doesnt-exist`
2. Observe response

**Expectations:**
- 404 error page displays
- Error message clear
- Link to home page provided
- User can navigate back

#### Test 8.2: Network Error During Form Submission
**Steps:**
1. Open DevTools Network tab
2. Set network throttling to "Offline"
3. Fill form with valid data
4. Click submit
5. Observe response

**Expectations:**
- Error message displays
- User is informed of network issue
- Form data preserved or user told to retry
- Clear path to retry submission

#### Test 8.3: Very Long Content
**Steps:**
1. Enter 2000+ character message in contact form
2. Submit form
3. Verify layout not broken

**Expectations:**
- Form handles long content
- Text wraps appropriately
- No layout breaks
- Form still submits successfully

---

### CATEGORY 9: Cross-Page Consistency

#### Test 9.1: Navigation Bar Consistency
**Steps:**
1. Visit each of 8 pages
2. Verify navigation bar identical on all pages
3. Verify navigation links same on all pages
4. Verify theme toggle accessible on all pages

**Expectations:**
- Navigation bar identical across all pages
- All 8 page links available
- Theme toggle present and functional
- Logo/brand consistent

#### Test 9.2: Footer Consistency
**Steps:**
1. Scroll to bottom of each page
2. Verify footer identical
3. Verify same links and information
4. Verify contact info consistent

**Expectations:**
- Footer identical on all pages
- Same links and content
- Contact information consistent
- Social media links (if any) present and consistent

#### Test 9.3: Color & Typography Consistency
**Steps:**
1. Note color palette used on home page
2. Visit each other page
3. Verify same colors used
4. Verify same fonts/typography
5. Verify headings have same style

**Expectations:**
- Consistent color palette throughout
- Same fonts on all pages
- Heading styles consistent
- Button styles consistent

#### Test 9.4: Spacing & Layout Consistency
**Steps:**
1. Note section spacing on home page
2. Visit other pages
3. Verify similar spacing used
4. Verify margins and padding consistent
5. Verify alignment consistent

**Expectations:**
- Similar spacing between sections
- Consistent margins/padding
- Content centers properly
- Layout grid consistent

---

### CATEGORY 10: Visual Regression

#### Test 10.1: Hero Section Layouts
**Steps:**
1. Capture screenshot of hero section on each page
2. In light mode
3. In dark mode
4. On mobile (375px)
5. On tablet (768px)
6. On desktop (1440px)

**Expectations:**
- Layouts match expected designs
- No text overlaps
- Images display correctly
- CTAs prominent
- Responsive layouts work

#### Test 10.2: Button & Form Styling
**Steps:**
1. Identify all buttons: CTAs, Submit, Navigation
2. Verify consistent styling across all buttons
3. Verify hover state visible
4. Verify focus state visible (keyboard)
5. Verify active state visible

**Expectations:**
- Buttons styled consistently
- Hover states clearly visible
- Focus states clearly visible
- Active states clearly visible
- Text readable on buttons

#### Test 10.3: Card Styling Consistency
**Steps:**
1. Identify all card components (Benefits, Testimonials, etc.)
2. Verify consistent styling
3. Verify shadows/depth consistent
4. Verify spacing consistent
5. Verify typography consistent

**Expectations:**
- Cards styled consistently
- Shadows/depth effects consistent
- Padding and margins consistent
- Typography matches design system

---

## ✅ Quick Manual Checklist

Print this and use for manual testing:

```
HOME PAGE
- [ ] Page loads in < 3 seconds
- [ ] Hero section visible
- [ ] Navigation bar functional
- [ ] All 8 page links present in navigation
- [ ] Theme toggle works
- [ ] Footer displays
- [ ] Benefits section shows all cards
- [ ] Testimonials visible
- [ ] About Teacher section displays
- [ ] CTA buttons clickable

NAVIGATION
- [ ] All 8 pages accessible
- [ ] URLs change correctly
- [ ] Back button works
- [ ] Forward button works
- [ ] Logo returns to home

THEME
- [ ] Light mode works
- [ ] Dark mode works
- [ ] Theme persists on refresh
- [ ] Theme persists on other pages
- [ ] Text readable in both modes

CONTACT PAGE
- [ ] Form visible
- [ ] Name field present
- [ ] Email field present
- [ ] Message field present
- [ ] Submit button present
- [ ] Form submits with valid data
- [ ] Form shows error with invalid email
- [ ] Form shows error with empty fields
- [ ] Keyboard navigation works

RESPONSIVE
- [ ] Mobile (375px) displays correctly
- [ ] Tablet (768px) displays correctly
- [ ] Desktop (1440px) displays correctly
- [ ] No horizontal scroll on mobile
- [ ] Text readable on all sizes
- [ ] Images scale properly
- [ ] Buttons touch-friendly

ACCESSIBILITY
- [ ] Can navigate with keyboard only
- [ ] Focus indicators visible
- [ ] Images have alt text
- [ ] Forms have labels
- [ ] Color contrast adequate
- [ ] Screen reader navigates site

IMAGES
- [ ] All images load
- [ ] No broken image icons
- [ ] Images optimized
- [ ] Images responsive

PERFORMANCE
- [ ] Page load < 3 seconds
- [ ] No layout shifts
- [ ] Smooth animations
- [ ] No janky scrolling

CONSISTENCY
- [ ] Navigation consistent
- [ ] Footer consistent
- [ ] Colors consistent
- [ ] Typography consistent
- [ ] Spacing consistent
```

---

## 🎯 Test Execution Strategy

### Phase 1: Automated Testing (Playwright)
- Run existing test suite
- Expand with new tests for all scenarios
- Add visual regression tests
- Add accessibility tests

### Phase 2: Manual Testing
- Test on real devices
- Test with screen readers
- Test with actual user interactions
- Test form submissions
- Test network conditions

### Phase 3: Cross-Browser Testing
- Chrome (Desktop)
- Firefox (Desktop)
- Safari (Desktop & macOS)
- Safari (iOS)
- Chrome (Android)

### Phase 4: Performance Testing
- Lighthouse audit
- WebPageTest
- Performance measurements

---

## 📊 Success Criteria

- ✅ All 8 pages load correctly
- ✅ All navigation works
- ✅ Theme toggle functional with persistence
- ✅ Contact form validates and submits
- ✅ Responsive on mobile/tablet/desktop
- ✅ Keyboard accessible throughout
- ✅ WCAG AA contrast compliance
- ✅ All images load correctly
- ✅ No console errors
- ✅ < 3 second page load time
- ✅ Visual consistency across pages
- ✅ No broken links
- ✅ Form handling robust

---

## 📝 Test Results Template

For each test:

```
Test: [Test Name]
Result: [PASS / FAIL / PARTIAL]
Notes: [Any issues, observations]
Screenshot: [If applicable]
```

---

## 🚀 Next Steps

1. **Set up automated tests** using Playwright based on this plan
2. **Run manual tests** on real devices
3. **Test with screen readers** for accessibility
4. **Perform cross-browser testing**
5. **Document any issues** found
6. **Fix issues** systematically
7. **Retest** until all tests pass
8. **Final sign-off** when 100% complete

---

**Created:** April 27, 2026  
**Version:** 1.0 - Complete  
**Status:** Ready for Testing
