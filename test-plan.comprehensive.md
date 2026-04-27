# Comprehensive Kriya Yoga Website Test Plan

## Application Overview

The Kriya Yoga website is a Next.js-based application serving as an informational and engagement hub for a Kriya Yoga practice community. The site includes 8 primary pages covering teachings, courses, events, blog content, and contact inquiries. The application features a light/dark theme toggle with localStorage persistence, responsive design for mobile and desktop, a contact form with validation, hero sections, multiple content sections including benefits, testimonials, and teacher information. This comprehensive test plan covers 100% of UI/UX functionality including navigation, theme switching, form submission, content rendering, accessibility, and responsive behavior across all pages.

## Test Scenarios

### 1. Navigation & Page Structure

**Seed:** `tests/seed.spec.ts`

#### 1.1. Home page loads with all major sections visible

**File:** `tests/pages/home-page.spec.ts`

**Steps:**
  1. Navigate to the home page at /
    - expect: Page loads successfully
    - expect: URL is http://localhost:3000/
    - expect: Page title displays 'Nispruh Yog – A Quiet Practice'
    - expect: Navigation bar is visible at top
    - expect: Footer is visible at bottom
  2. Scroll through the entire home page from top to bottom
    - expect: Hero section with main heading 'Still the mind. Awaken the self.' is visible
    - expect: 'What is Kriya Yoga?' section displays with description and image
    - expect: 'What the practice opens within you' section shows 6 benefit cards (Inner Peace, Mental Clarity, Emotional Balance, Better Focus, Stress Reduction, Self-Awareness)
    - expect: 'Ways to walk this path' section displays 3 offering cards (Weekly Online Meditation, Kriya Yoga Course, Yog & Pranayama)
    - expect: 'Where are you on the journey?' section shows 4 journey stages (Curious, Seeker, Student, Practitioner)
    - expect: 'Swami Nispruh Spandan' teacher section with biography is visible
    - expect: 'Words from those who have walked it' testimonials section displays with at least 4 testimonials
  3. Check all text content is readable and images load
    - expect: All hero section text is visible and properly formatted
    - expect: All heading levels are semantic (h1 for main, h2 for sections, h3 for subsections)
    - expect: No text overlays or layout issues present
    - expect: Images display with proper aspect ratios
    - expect: No console errors related to missing resources

#### 1.2. Navigation menu links to all pages

**File:** `tests/navigation/navigation-menu.spec.ts`

**Steps:**
  1. On the home page, examine the navigation bar
    - expect: Navigation bar contains links for: Home, About, Teachings, Practices, Courses, Events, Blog, Contact
    - expect: Home link is active/highlighted
    - expect: All links are properly styled and clickable
    - expect: Logo/home link 'Nispruh Yog' is present and clickable
  2. Click on 'About' link and wait for page load
    - expect: Page navigates to /about-kriya-yoga
    - expect: Page title changes to 'About Kriya Yoga · Nispruh Yog'
    - expect: About page content loads completely
    - expect: Navigation bar remains accessible
    - expect: Back button works to return to home
  3. From About page, click 'Teachings' link
    - expect: Page navigates to /teachings
    - expect: Page title changes to 'Teachings · Nispruh Yog'
    - expect: Teachings page content loads
  4. Click 'Practices' link from navigation
    - expect: Page navigates to /practices
    - expect: Page title changes to 'Practices · Nispruh Yog'
    - expect: Practices page content loads
  5. Click 'Courses' link from navigation
    - expect: Page navigates to /courses-programs
    - expect: Page title changes to 'Courses · Nispruh Yog' or similar
    - expect: Courses page content loads
  6. Click 'Events' link from navigation
    - expect: Page navigates to /events-retreats
    - expect: Page title changes to 'Events · Nispruh Yog' or similar
    - expect: Events page content loads
  7. Click 'Blog' link from navigation
    - expect: Page navigates to /blog
    - expect: Page title changes to 'Blog · Nispruh Yog'
    - expect: Blog content loads with article listings or recent posts
  8. Click 'Contact' link from navigation
    - expect: Page navigates to /contact
    - expect: Page title changes to 'Contact · Nispruh Yog'
    - expect: Contact form is visible with input fields

#### 1.3. Logo link returns to home page

**File:** `tests/navigation/logo-link.spec.ts`

**Steps:**
  1. Navigate to /about-kriya-yoga page
    - expect: About page loads successfully
  2. Click on the logo 'Nispruh Yog' in the top-left
    - expect: Page navigates back to home page (/)
  3. Navigate to /blog page, then click logo
    - expect: Logo click from blog page returns to home

#### 1.4. Browser navigation (back/forward) works correctly

**File:** `tests/navigation/browser-navigation.spec.ts`

**Steps:**
  1. Navigate: Home → About → Teachings → Practices
    - expect: Each page loads successfully
    - expect: URL changes correctly at each step
  2. Click browser back button 3 times
    - expect: First back: navigates to Teachings page
    - expect: Second back: navigates to About page
    - expect: Third back: navigates to Home page
  3. Click browser forward button 3 times
    - expect: First forward: navigates to About page
    - expect: Second forward: navigates to Teachings page
    - expect: Third forward: navigates to Practices page

### 2. Theme Toggle & Persistence

**Seed:** `tests/seed.spec.ts`

#### 2.1. Theme toggle button switches from light to dark mode

**File:** `tests/theme/theme-toggle.spec.ts`

**Steps:**
  1. Load the home page fresh (clear localStorage if needed to ensure light mode)
    - expect: Page loads in light mode (default)
    - expect: Light background color is applied
    - expect: Dark text is visible for readability
    - expect: Theme toggle button shows dark mode icon
  2. Click the theme toggle button
    - expect: Page transitions to dark mode
    - expect: Background becomes dark
    - expect: Text color changes to light/white
    - expect: All text remains readable
    - expect: Toggle button icon changes to light mode icon
  3. Click the theme toggle button again
    - expect: Page transitions back to light mode
    - expect: Background becomes light again
    - expect: Text returns to dark color
    - expect: Toggle button icon returns to dark mode icon

#### 2.2. Theme preference persists across page navigation

**File:** `tests/theme/theme-persistence-navigation.spec.ts`

**Steps:**
  1. Start on home page in light mode (default)
    - expect: Light mode is active
  2. Toggle to dark mode
    - expect: Dark mode activates
  3. Navigate to About page
    - expect: About page loads in dark mode
    - expect: Theme preference is maintained
  4. Navigate to Blog page
    - expect: Blog page loads in dark mode
    - expect: Theme persists
  5. Navigate to Contact page
    - expect: Contact page loads in dark mode
  6. Toggle back to light mode on Contact page
    - expect: Light mode activates
  7. Navigate back to Home page
    - expect: Home page loads in light mode
    - expect: Preference is maintained

#### 2.3. Theme preference persists in localStorage across sessions

**File:** `tests/theme/theme-persistence-storage.spec.ts`

**Steps:**
  1. Load home page and verify current theme (light mode default)
    - expect: Light mode is active
  2. Toggle to dark mode and verify localStorage contains theme preference
    - expect: localStorage contains a key for theme (e.g., 'theme': 'dark')
    - expect: Dark mode is visible on page
  3. Reload the page (F5 or refresh)
    - expect: Page reloads and dark mode is still active
    - expect: Theme was restored from localStorage
  4. Close and re-open a new page on the same domain
    - expect: New page loads in dark mode
    - expect: Theme preference persists across new sessions
  5. Toggle back to light mode and check localStorage
    - expect: localStorage now shows 'light' theme
    - expect: Light mode displays on page
  6. Refresh page
    - expect: Light mode is still active after refresh
    - expect: Preference persisted correctly

#### 2.4. Theme colors apply consistently to all UI elements

**File:** `tests/theme/theme-ui-consistency.spec.ts`

**Steps:**
  1. Set to light mode and inspect UI elements: navigation bar, footer, buttons, cards, text
    - expect: Navigation bar has light background with dark text
    - expect: Footer has light background with dark text
    - expect: Buttons are styled appropriately for light mode
    - expect: All cards/sections have light backgrounds
    - expect: Text is dark and readable
  2. Set to dark mode and inspect the same UI elements
    - expect: Navigation bar has dark background with light text
    - expect: Footer has dark background with light text
    - expect: Buttons are styled appropriately for dark mode
    - expect: All cards/sections have dark backgrounds
    - expect: Text is light and readable
  3. Scroll through all sections on home page in light mode
    - expect: Hero section colors are correct
    - expect: Benefits section cards have consistent light theme styling
    - expect: Teacher section has light theme colors
    - expect: Testimonials have light theme styling
  4. Scroll through all sections on home page in dark mode
    - expect: Hero section has dark theme colors
    - expect: Benefits section cards are dark-themed
    - expect: Teacher section is dark-themed
    - expect: Testimonials have dark background with light text

#### 2.5. Theme toggle is accessible via keyboard

**File:** `tests/theme/theme-keyboard-accessibility.spec.ts`

**Steps:**
  1. On home page, tab through focusable elements until theme toggle button is focused
    - expect: Theme toggle button receives focus (visible focus indicator)
    - expect: Button has proper aria-label or accessible name
  2. While theme toggle is focused, press Enter or Space key
    - expect: Theme toggles successfully
    - expect: Page switches to dark mode or light mode as appropriate
  3. From different page, tab to theme toggle and press Space
    - expect: Theme toggles correctly from different pages

### 3. Contact Form & Validation

**Seed:** `tests/seed.spec.ts`

#### 3.1. Contact form displays all required fields

**File:** `tests/forms/contact-form-fields.spec.ts`

**Steps:**
  1. Navigate to /contact page
    - expect: Contact page loads successfully
    - expect: Contact form is visible
  2. Inspect the contact form structure
    - expect: Name input field is present
    - expect: Email input field is present
    - expect: Message/Inquiry textarea is present
    - expect: Submit button is present
    - expect: All fields have appropriate labels or placeholders
  3. Verify field types and attributes
    - expect: Name field is type 'text' or has name attribute
    - expect: Email field is type 'email'
    - expect: Message field is a textarea or text field
    - expect: Submit button has accessible label

#### 3.2. Contact form validates required fields

**File:** `tests/forms/contact-form-validation.spec.ts`

**Steps:**
  1. Load contact form with all fields empty
    - expect: All input fields are empty
  2. Click Submit button without entering any data
    - expect: Form does not submit
    - expect: Validation error messages appear or fields show required state
    - expect: User is prompted to fill required fields
  3. Enter name 'John Doe' but leave email and message empty, click Submit
    - expect: Form does not submit
    - expect: Error message for email field appears
    - expect: Email field is highlighted or shows error state
  4. Enter name and email but leave message empty, click Submit
    - expect: Form does not submit
    - expect: Message field shows error or required indication
  5. Enter only email, leave name and message empty, click Submit
    - expect: Form does not submit
    - expect: Name field validation error appears

#### 3.3. Contact form validates email format

**File:** `tests/forms/contact-form-email-validation.spec.ts`

**Steps:**
  1. Navigate to contact form
    - expect: Contact form is loaded and ready
  2. Enter name 'Jane Smith', enter invalid email 'notanemail' in email field
    - expect: Email field shows focus
  3. Enter valid message text and click Submit
    - expect: Form does not submit
    - expect: Email validation error appears indicating invalid format
  4. Change email to 'jane@example' (missing domain extension)
    - expect: Email validation fails if the field uses HTML5 email validation
  5. Change email to valid format 'jane@example.com', keep name and message
    - expect: No email validation error
    - expect: Form is ready to submit

#### 3.4. Contact form accepts valid data and submits

**File:** `tests/forms/contact-form-submission.spec.ts`

**Steps:**
  1. Navigate to contact form
    - expect: Contact form displays
  2. Fill form with valid data:
- Name: 'Alice Johnson'
- Email: 'alice@example.com'
- Message: 'I am interested in learning more about Kriya Yoga courses.'
    - expect: All fields are populated with entered data
    - expect: Fields show no validation errors
  3. Click Submit button
    - expect: Form submission is attempted
    - expect: Success message or confirmation appears or page navigates to success page
    - expect: Form data is sent to server (/api/contact endpoint)

#### 3.5. Contact form handles submission errors gracefully

**File:** `tests/forms/contact-form-error-handling.spec.ts`

**Steps:**
  1. Load contact form and fill with valid data
    - expect: Form is populated
  2. Simulate network error or server error response when clicking Submit
    - expect: Error message is displayed to user
    - expect: Form data is preserved
    - expect: User can attempt to resubmit
  3. Verify error message is clear and helpful
    - expect: Error message explains what went wrong (e.g., 'Failed to send message. Please try again.')
    - expect: No cryptic error codes are shown to user

#### 3.6. Contact form resets after successful submission

**File:** `tests/forms/contact-form-reset.spec.ts`

**Steps:**
  1. Fill contact form with data and successfully submit
    - expect: Success message appears
  2. Check if form fields are cleared after success
    - expect: All input fields are empty
    - expect: Form is ready for next submission
    - expect: No previous data is retained
  3. Alternatively, if redirected to success page, navigate back to contact form
    - expect: Form loads fresh with all fields empty

#### 3.7. Contact form is accessible with keyboard navigation

**File:** `tests/forms/contact-form-keyboard.spec.ts`

**Steps:**
  1. Load contact form on contact page
    - expect: Form is visible
  2. Use Tab key to navigate through form fields: Name → Email → Message → Submit
    - expect: Each field receives focus indicator
    - expect: Tab order is logical (top to bottom)
    - expect: Submit button is reachable via Tab
  3. Enter data using keyboard only (no mouse) and submit
    - expect: All data can be entered via keyboard
    - expect: Form can be submitted via Enter or Space on Submit button
  4. Verify form labels are associated with inputs (for screen readers)
    - expect: Each input has associated label or aria-label
    - expect: Screen readers can identify all fields

#### 3.8. Contact form preserves data on validation error

**File:** `tests/forms/contact-form-data-preservation.spec.ts`

**Steps:**
  1. Fill contact form with long message text and submit with invalid email
    - expect: Validation error for email appears
    - expect: All previously entered data is still in the form
    - expect: Name and Message text are preserved
  2. Correct the email field and resubmit
    - expect: Form submits successfully
    - expect: No need to re-enter Name and Message

### 4. Home Page Content & Interactions

**Seed:** `tests/seed.spec.ts`

#### 4.1. Hero section displays correctly with all elements

**File:** `tests/home/hero-section.spec.ts`

**Steps:**
  1. Load home page
    - expect: Hero section is visible in viewport without scrolling
    - expect: Hero image or background is present
  2. Examine hero text content
    - expect: Main heading 'Still the mind. Awaken the self.' is visible
    - expect: Subheading 'Kriya Yoga · Ancient Science of Breath' is present
    - expect: Description text about Kriya Yoga is readable
    - expect: Quote from Swami Nispruh Spandan is displayed with proper attribution
  3. Check hero call-to-action buttons
    - expect: 'Begin Your Journey' button is visible and clickable
    - expect: 'What is Kriya Yoga?' button/link is visible
    - expect: Buttons have clear styling and hover effects

#### 4.2. Begin Your Journey button navigates to Practices page

**File:** `tests/home/hero-cta-buttons.spec.ts`

**Steps:**
  1. On home page, click 'Begin Your Journey' button
    - expect: Page navigates to /practices
    - expect: Practices page loads successfully
  2. Return to home page, click 'What is Kriya Yoga?' link
    - expect: Page navigates to /about-kriya-yoga
    - expect: About page loads successfully

#### 4.3. What is Kriya Yoga section content and layout

**File:** `tests/home/what-is-kriya-yoga-section.spec.ts`

**Steps:**
  1. Scroll to 'What is Kriya Yoga?' section on home page
    - expect: Section heading is visible
    - expect: Section subheading 'The practice' is present
    - expect: Section title displays 'What is Kriya Yoga?'
  2. Examine section content
    - expect: Multiple paragraphs of descriptive text about Kriya Yoga are present
    - expect: Text explains history, benefits, and practice methodology
    - expect: 'Learn more about the lineage' link is visible
    - expect: Image placeholder or image is displayed on the right
  3. Click 'Learn more about the lineage' link
    - expect: Navigates to /about-kriya-yoga page

#### 4.4. Benefits section displays all 6 benefit cards

**File:** `tests/home/benefits-section.spec.ts`

**Steps:**
  1. Scroll to 'What the practice opens within you' section
    - expect: Section is visible with clear heading
    - expect: Introductory text about benefits of meditation is present
  2. Count and verify all benefit cards
    - expect: 6 benefit cards are displayed: Inner Peace, Mental Clarity, Emotional Balance, Better Focus, Stress Reduction, Self-Awareness
    - expect: Each card has an icon/image
    - expect: Each card has a heading
    - expect: Each card has descriptive text
  3. Verify card styling and readability
    - expect: Cards are evenly spaced
    - expect: Text is readable
    - expect: Icons are clear and relevant
    - expect: Layout is responsive
  4. Check inspirational quote in section
    - expect: Quote 'These are not promises — they are natural unfoldings that arise when we stop resisting our own stillness.' is visible
    - expect: Attribution 'From the teachings' is shown

#### 4.5. Offerings section displays 3 program cards

**File:** `tests/home/offerings-section.spec.ts`

**Steps:**
  1. Scroll to 'Ways to walk this path' section
    - expect: Section heading is visible
    - expect: Introductory text about offerings is present
  2. Examine offering cards
    - expect: 3 cards are displayed: Weekly Online Meditation, Kriya Yoga Course, Yog & Pranayama
    - expect: Each card has an image
    - expect: Each card has a category/duration label
    - expect: Each card has a title and description
  3. Verify action links on cards
    - expect: Weekly Online Meditation card has 'View schedule' link to /courses-programs#meditation
    - expect: Kriya Yoga Course card has 'Learn & enroll' link to /courses-programs#kriya-course
    - expect: Yog & Pranayama card has 'Learn more' link to /practices
  4. Check 'View all courses & programmes' link at bottom
    - expect: Link is present and navigates to /courses-programs

#### 4.6. Journey stages section displays 4 stages

**File:** `tests/home/journey-stages-section.spec.ts`

**Steps:**
  1. Scroll to 'Where are you on the journey?' section
    - expect: Section heading is visible
  2. Verify 4 journey stages are displayed
    - expect: Stage 1: Curious - with number '01' and description
    - expect: Stage 2: Seeker - with number '02' and description
    - expect: Stage 3: Student - with number '03' and description
    - expect: Stage 4: Practitioner - with number '04' and description
  3. Check journey progression text
    - expect: Text 'Curious → Seeker → Student → Practitioner' shows progression
    - expect: All descriptions are complete and readable

#### 4.7. Teacher section displays Swami Nispruh Spandan biography

**File:** `tests/home/teacher-section.spec.ts`

**Steps:**
  1. Scroll to 'Swami Nispruh Spandan' section
    - expect: Section heading 'Swami Nispruh Spandan' is visible
    - expect: Section subheading 'The teacher' is present
  2. Examine teacher image and credentials
    - expect: Teacher image/portrait is displayed
    - expect: Years of practice badge shows '20+ Years of practice'
    - expect: Credentials line 'Kriya Yoga Acharya · Lineage of Mahavatar Babaji' is visible
  3. Read teacher biography text
    - expect: Full biography paragraphs are displayed explaining teacher's background
    - expect: Text mentions Himalayan practice and teaching philosophy
    - expect: All text is readable and properly formatted
  4. Check specialties/teachings list
    - expect: List displays 4 items: Kriya Yoga Initiation, Vedanta Studies, Himalayan Sadhana, Sanskrit & Scripture
  5. Verify 'Read full story' link
    - expect: Link is present and navigates to /about-kriya-yoga

#### 4.8. Testimonials section displays multiple reviews

**File:** `tests/home/testimonials-section.spec.ts`

**Steps:**
  1. Scroll to 'Words from those who have walked it' section
    - expect: Section heading is visible
    - expect: Section subheading 'From the community' is present
  2. Count testimonial cards
    - expect: At least 4 testimonial cards are displayed
    - expect: Each card shows a quote
    - expect: Each card shows author name
    - expect: Each card shows author title/location
  3. Verify testimonial content
    - expect: Testimonials from Paulina Haouami (Helsinki, Finland), Tuula-Maria Tarmo (Jyväskyla, Finland), Kamer Surmeli (Finland), and others are visible
    - expect: Each testimonial has a meaningful quote about Kriya Yoga practice

#### 4.9. Footer displays links and information

**File:** `tests/home/footer.spec.ts`

**Steps:**
  1. Scroll to bottom of home page to view footer
    - expect: Footer is visible at bottom of page
    - expect: Footer background and styling is distinct from main content
  2. Check footer links and content
    - expect: Navigation links are present in footer
    - expect: Social media links or contact information is visible
    - expect: Copyright or legal text is displayed

### 5. Internal Link Navigation

**Seed:** `tests/seed.spec.ts`

#### 5.1. All internal links navigate correctly

**File:** `tests/links/internal-links.spec.ts`

**Steps:**
  1. On home page, click 'Begin Your Journey' button
    - expect: Navigates to /practices
  2. Navigate back to home, click 'What is Kriya Yoga?' link
    - expect: Navigates to /about-kriya-yoga
  3. From home, click 'View schedule' on meditation offering
    - expect: Navigates to /courses-programs with #meditation anchor
  4. From home, click 'Learn & enroll' on Kriya Yoga Course
    - expect: Navigates to /courses-programs with #kriya-course anchor
  5. From home, click 'Learn more' on Yog & Pranayama offering
    - expect: Navigates to /practices
  6. From home, click 'Read full story' on teacher section
    - expect: Navigates to /about-kriya-yoga
  7. From home, click 'View all courses & programmes' link
    - expect: Navigates to /courses-programs

#### 5.2. Links have appropriate visual states (hover, focus, active)

**File:** `tests/links/link-states.spec.ts`

**Steps:**
  1. Hover over various navigation links
    - expect: Links show hover effect (color change, underline, or background change)
    - expect: Hover effect is consistent across all navigation links
  2. Tab to navigation links using keyboard
    - expect: Links show focus indicator when focused
    - expect: Focus indicator is visible and meets accessibility standards
  3. Check active link state on current page
    - expect: Current page link in navigation shows active state (different color, underline, or highlight)

### 6. Responsive Design & Mobile

**Seed:** `tests/seed.spec.ts`

#### 6.1. Home page layout adapts to mobile viewport (375px)

**File:** `tests/responsive/mobile-375px.spec.ts`

**Steps:**
  1. Set viewport to mobile size 375x667 (iPhone SE)
    - expect: Viewport successfully set to mobile dimensions
  2. Load home page on mobile viewport
    - expect: Page loads and is readable on small screen
    - expect: No horizontal scrolling is required
    - expect: Navigation menu is accessible (possibly in hamburger menu)
  3. Check hero section on mobile
    - expect: Hero text is visible and readable
    - expect: Hero button text is visible
    - expect: CTA buttons are appropriately sized for touch (minimum 44px)
    - expect: Image/background scales appropriately
  4. Scroll through benefits section on mobile
    - expect: Benefit cards stack vertically
    - expect: Each card is readable at mobile width
    - expect: Text does not overflow
    - expect: Icons are visible and appropriately sized
  5. Verify form inputs on mobile (navigate to contact page)
    - expect: Input fields are appropriately sized for mobile typing
    - expect: Touch keyboard appears when tapping input
    - expect: Form is usable without zooming

#### 6.2. Tablet viewport layout (768px)

**File:** `tests/responsive/tablet-768px.spec.ts`

**Steps:**
  1. Set viewport to tablet size 768x1024 (iPad)
    - expect: Viewport set to tablet dimensions
  2. Load home page on tablet
    - expect: Page layout is optimized for medium screen
    - expect: Two-column layouts appear if applicable
    - expect: Navigation remains accessible
  3. Check benefits section layout
    - expect: Benefits cards may display in 2 columns
    - expect: Layout is balanced and readable

#### 6.3. Desktop viewport layout (1440px)

**File:** `tests/responsive/desktop-1440px.spec.ts`

**Steps:**
  1. Set viewport to desktop size 1440x900
    - expect: Viewport set to desktop dimensions
  2. Load home page on desktop
    - expect: Page uses full available width
    - expect: Layout is optimized for large screen
    - expect: Multi-column layouts display correctly
  3. Check benefits section
    - expect: Benefits cards display in 3 or 4 columns
    - expect: Content is well-spaced
    - expect: No text wrapping issues

#### 6.4. Navigation menu works on mobile (hamburger menu)

**File:** `tests/responsive/mobile-menu.spec.ts`

**Steps:**
  1. Set viewport to mobile 375x667
    - expect: Mobile viewport set
  2. Load home page and check for hamburger menu or mobile menu
    - expect: Menu is either visible as hamburger icon or accessible via tap
    - expect: Navigation links are accessible on mobile
  3. If hamburger menu present, tap/click the hamburger icon
    - expect: Mobile menu opens/expands
    - expect: Navigation links become visible
    - expect: Menu can be closed

### 7. Page-Specific Features

**Seed:** `tests/seed.spec.ts`

#### 7.1. About page displays complete teacher information

**File:** `tests/pages/about-page.spec.ts`

**Steps:**
  1. Navigate to /about-kriya-yoga page
    - expect: Page loads successfully
    - expect: Page title is 'About Kriya Yoga · Nispruh Yog'
    - expect: About page content is displayed
  2. Scroll through about page content
    - expect: Teacher biography is complete
    - expect: Teachings and specialties are listed
    - expect: Lineage information is included
    - expect: All text is readable and properly formatted

#### 7.2. Blog page displays articles/posts

**File:** `tests/pages/blog-page.spec.ts`

**Steps:**
  1. Navigate to /blog page
    - expect: Page loads successfully
    - expect: Page title is 'Blog · Nispruh Yog'
    - expect: Blog content or article listings are displayed
  2. Examine blog post listings
    - expect: Blog posts are visible with titles, dates, and summaries
    - expect: Each post has a link or CTA to read full article

#### 7.3. Contact page displays form and additional information

**File:** `tests/pages/contact-page.spec.ts`

**Steps:**
  1. Navigate to /contact page
    - expect: Page loads successfully
    - expect: Page title is 'Contact · Nispruh Yog'
    - expect: Contact form is prominently displayed
  2. Check for contact information
    - expect: Contact form is visible
    - expect: Any additional contact methods (email, phone, address) are displayed if available

### 8. Animations & Page Transitions

**Seed:** `tests/seed.spec.ts`

#### 8.1. Page transitions are smooth and animated

**File:** `tests/animations/page-transitions.spec.ts`

**Steps:**
  1. Navigate from home page to About page via link
    - expect: Page transition occurs smoothly
    - expect: New page content fades in or animates
    - expect: No jarring jumps or flickering
  2. Navigate between multiple pages in sequence
    - expect: Each transition is smooth and consistent
    - expect: Animations are not too slow (complete within 1-2 seconds)

#### 8.2. Section animations on scroll

**File:** `tests/animations/scroll-animations.spec.ts`

**Steps:**
  1. Load home page and slowly scroll down
    - expect: Elements animate in as they come into view
    - expect: Scroll animations are smooth and don't cause jank
  2. Check benefit cards animation on scroll
    - expect: Benefit cards animate into view as section scrolls
    - expect: Animation timing is consistent across cards

### 9. Accessibility & Semantic HTML

**Seed:** `tests/seed.spec.ts`

#### 9.1. Page structure uses semantic HTML elements

**File:** `tests/accessibility/semantic-html.spec.ts`

**Steps:**
  1. Inspect home page HTML structure
    - expect: Page uses <header> for banner
    - expect: Page uses <nav> for navigation
    - expect: Page uses <main> for main content
    - expect: Page uses <footer> for footer
    - expect: Headings use proper hierarchy: h1 for main title, h2 for sections, h3 for subsections
  2. Check form accessibility on contact page
    - expect: Form elements have associated labels
    - expect: Inputs have name attributes
    - expect: Buttons have accessible text

#### 9.2. ARIA labels and roles are properly used

**File:** `tests/accessibility/aria-labels.spec.ts`

**Steps:**
  1. Check navigation element
    - expect: Navigation has aria-label or role='navigation'
    - expect: Active link has aria-current='page' attribute
  2. Check theme toggle button
    - expect: Button has aria-label describing action (e.g., 'Switch to dark mode', 'Switch to light mode')
    - expect: Label updates when theme changes
  3. Check form labels
    - expect: Each form input is associated with a label via <label> tag or aria-labelledby
    - expect: Required fields have aria-required='true'

#### 9.3. Images have alt text

**File:** `tests/accessibility/alt-text.spec.ts`

**Steps:**
  1. Inspect all images on home page
    - expect: Hero image has descriptive alt text
    - expect: Benefit card icons have alt text
    - expect: Teacher image has alt text (e.g., 'Yoga instructor in meditation pose')
    - expect: Offering card images have alt text
  2. Check image placeholders
    - expect: Placeholder images show meaningful text or icon explaining content

#### 9.4. Keyboard navigation is fully functional

**File:** `tests/accessibility/keyboard-navigation.spec.ts`

**Steps:**
  1. Load home page and use only Tab key to navigate
    - expect: Tab key moves focus through all interactive elements
    - expect: Focus order is logical (left-to-right, top-to-bottom)
    - expect: Skip links are available (optional but recommended)
  2. From navigation, use Tab to reach all links and buttons
    - expect: All navigation links receive focus
    - expect: All buttons receive focus
    - expect: CTA buttons are reachable
  3. Press Enter on focused link to navigate
    - expect: Link navigation works via Enter key
  4. Navigate to contact form using Tab only
    - expect: All form fields are reachable via Tab
    - expect: Form can be filled and submitted using keyboard alone

#### 9.5. Color contrast meets accessibility standards

**File:** `tests/accessibility/color-contrast.spec.ts`

**Steps:**
  1. Check text color contrast on light mode
    - expect: Text on light background has sufficient contrast (WCAG AA standard: 4.5:1 for normal text)
    - expect: All text is readable
  2. Check text color contrast on dark mode
    - expect: Light text on dark background has sufficient contrast
    - expect: All text is readable in dark mode

#### 9.6. Page content is readable with screen reader

**File:** `tests/accessibility/screen-reader.spec.ts`

**Steps:**
  1. Use screen reader to navigate home page content
    - expect: Screen reader announces page title correctly
    - expect: Navigation structure is clear
    - expect: Main content regions are announced
    - expect: All headings are announced in proper order
  2. Screen reader announces form labels and inputs
    - expect: Form fields are announced with their labels
    - expect: Input types are announced (e.g., 'email input', 'text input')
    - expect: Required fields are announced as required

### 10. Image Loading & Performance

**Seed:** `tests/seed.spec.ts`

#### 10.1. Images load successfully without broken links

**File:** `tests/performance/image-loading.spec.ts`

**Steps:**
  1. Load home page and inspect network requests
    - expect: All image requests return status 200 (success)
    - expect: No 404 errors for images
    - expect: Images load completely
  2. Scroll through page and monitor image loading
    - expect: Images display as they load
    - expect: No broken image icons appear
    - expect: All images are visible and properly rendered

#### 10.2. Image placeholders display correctly

**File:** `tests/performance/image-placeholders.spec.ts`

**Steps:**
  1. Check sections with images that have placeholders
    - expect: Before image loads, placeholder or skeleton displays
    - expect: After image loads, placeholder is replaced smoothly
    - expect: Layout does not shift dramatically (no cumulative layout shift)

### 11. Error Handling & Edge Cases

**Seed:** `tests/seed.spec.ts`

#### 11.1. Invalid URLs show appropriate error handling

**File:** `tests/error-handling/invalid-urls.spec.ts`

**Steps:**
  1. Navigate to invalid URL like /non-existent-page
    - expect: 404 error page displays or user is redirected appropriately
    - expect: Error message is user-friendly
    - expect: Navigation menu is still accessible
  2. From 404 page, click home link or logo
    - expect: User can navigate back to home page

#### 11.2. Network errors are handled gracefully

**File:** `tests/error-handling/network-errors.spec.ts`

**Steps:**
  1. Simulate network failure and try to navigate page
    - expect: Error message appears indicating connection issue
    - expect: Page shows appropriate fallback UI

#### 11.3. Form submission handles edge cases

**File:** `tests/error-handling/form-edge-cases.spec.ts`

**Steps:**
  1. Enter very long text in message field (e.g., 5000 characters)
    - expect: Form accepts long text or shows reasonable limit error
    - expect: No performance issues occur
  2. Enter special characters and HTML in form fields
    - expect: Form handles special characters safely
    - expect: No HTML injection or XSS vulnerabilities
  3. Attempt rapid repeated form submissions
    - expect: Form handles multiple submissions appropriately
    - expect: Submission is debounced or prevented while processing

### 12. Cross-Page Consistency

**Seed:** `tests/seed.spec.ts`

#### 12.1. Navigation menu is consistent on all pages

**File:** `tests/consistency/navigation-consistency.spec.ts`

**Steps:**
  1. Visit home page, examine navigation menu
    - expect: Navigation bar is visible with all 8 links
    - expect: Styling is consistent
  2. Navigate to About page, check navigation menu
    - expect: Navigation menu is identical to home page
    - expect: About link shows as active
    - expect: All other links are present
  3. Visit Contact page, check navigation menu
    - expect: Navigation menu remains consistent
    - expect: Contact link is active
  4. Visit Blog page, check navigation menu
    - expect: Navigation menu is consistent across all pages

#### 12.2. Footer is consistent on all pages

**File:** `tests/consistency/footer-consistency.spec.ts`

**Steps:**
  1. Scroll to footer on home page
    - expect: Footer is visible with consistent styling
  2. Navigate to other pages and check footer
    - expect: Footer appears on all pages with identical content and styling

#### 12.3. Theme preference is consistent across pages

**File:** `tests/consistency/theme-consistency.spec.ts`

**Steps:**
  1. Set to dark mode on home page
    - expect: Dark mode is active
  2. Navigate to About, Blog, Contact pages
    - expect: All pages display in dark mode
    - expect: Theme is consistent
  3. Switch to light mode and navigate
    - expect: Light mode persists across all pages

### 13. Visual Regression & UI Integrity

**Seed:** `tests/seed.spec.ts`

#### 13.1. Hero section maintains layout integrity

**File:** `tests/ui/hero-layout-integrity.spec.ts`

**Steps:**
  1. Take screenshot of hero section in light mode
    - expect: Hero elements are properly aligned
    - expect: Text is not overlapping images
  2. Take screenshot of hero section in dark mode
    - expect: Hero layout remains intact
    - expect: No visual regressions
    - expect: Colors are applied correctly

#### 13.2. Buttons maintain consistent styling

**File:** `tests/ui/button-consistency.spec.ts`

**Steps:**
  1. Identify all CTA buttons on home page: 'Begin Your Journey', 'What is Kriya Yoga?', etc.
    - expect: All buttons have consistent sizing
    - expect: All buttons have consistent font
    - expect: All buttons have consistent color scheme
  2. Check button styling in both light and dark modes
    - expect: Buttons adapt to theme appropriately
    - expect: Button contrast is maintained in both themes

#### 13.3. Cards maintain consistent appearance

**File:** `tests/ui/card-consistency.spec.ts`

**Steps:**
  1. Examine benefit cards styling
    - expect: All benefit cards have same height and width
    - expect: Icon placement is consistent
    - expect: Text alignment is consistent
  2. Examine offering cards styling
    - expect: All offering cards have consistent layout
    - expect: Image placement is consistent
    - expect: CTA button positioning is same
