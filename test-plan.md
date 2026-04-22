# Kriya Yoga Website E2E Test Plan

## Application Overview

The Kriya Yoga website is a Next.js-based application that serves as an informational and engagement hub for a Kriya Yoga practice community. The site includes multiple pages covering teachings, courses, events, and a contact form for inquiries. The application supports light and dark theme modes and is accessible across desktop and mobile devices. This test plan covers critical user journeys including navigation, theme switching, content visibility, form submission, and cross-page functionality.

## Test Scenarios

### 1. Navigation and Page Transitions

**Seed:** `seed.spec.ts`

#### 1.1. Home Page Navigation

**File:** `tests/navigation/home-navigation.spec.ts`

**Steps:**
  1. Navigate to the home page URL (root path)
    - expect: The page loads successfully
    - expect: Hero section is visible with main title and description
    - expect: Navigation bar is displayed at the top
    - expect: Footer is visible at the bottom
  2. Scroll through the home page
    - expect: Benefits section displays correctly with all benefit cards
    - expect: Testimonials section is visible with testimonial content
    - expect: About Teacher section displays with teacher information
    - expect: Final CTA (Call-To-Action) button is visible and clickable
  3. Verify all internal navigation links on home page are present
    - expect: About Kriya Yoga link exists in navigation
    - expect: Blog link exists in navigation
    - expect: Contact link exists in navigation
    - expect: Courses/Programs link exists in navigation
    - expect: Events/Retreats link exists in navigation
    - expect: Practices link exists in navigation
    - expect: Teachings link exists in navigation

#### 1.2. Navigate to About Kriya Yoga Page

**File:** `tests/navigation/about-kriya-yoga-navigation.spec.ts`

**Steps:**
  1. From home page, click on 'About Kriya Yoga' in the navigation menu
    - expect: Page navigates to about-kriya-yoga page
    - expect: URL changes to include 'about-kriya-yoga'
    - expect: Page title or heading indicates About Kriya Yoga content
    - expect: Navigation bar remains visible and accessible
  2. Verify page content loads completely
    - expect: All text content is rendered
    - expect: Images (if any) load successfully
    - expect: Page layout is not broken or distorted
  3. Navigate back to home page using browser back button
    - expect: Previous page (home) is displayed
    - expect: Scroll position may or may not be preserved (depending on implementation)

#### 1.3. Navigate Through All Main Pages

**File:** `tests/navigation/all-pages-navigation.spec.ts`

**Steps:**
  1. Click on 'Blog' in the navigation menu
    - expect: Blog page loads successfully
    - expect: Blog content or blog listing is visible
  2. Click on 'Courses/Programs' from navigation
    - expect: Courses page loads successfully
    - expect: Courses or program listings are visible
  3. Click on 'Events/Retreats' from navigation
    - expect: Events page loads successfully
    - expect: Event or retreat listings are visible
  4. Click on 'Practices' from navigation
    - expect: Practices page loads successfully
    - expect: Practice content or listings are visible
  5. Click on 'Teachings' from navigation
    - expect: Teachings page loads successfully
    - expect: Teaching content or listings are visible

#### 1.4. Contact Page Navigation and Form Visibility

**File:** `tests/navigation/contact-page-navigation.spec.ts`

**Steps:**
  1. Click on 'Contact' in the navigation menu
    - expect: Contact page loads successfully
    - expect: Contact form is visible on the page
    - expect: Form fields are rendered correctly
  2. Verify all form fields are present
    - expect: Name input field is visible
    - expect: Email input field is visible
    - expect: Message or inquiry textarea is visible
    - expect: Submit button is present
  3. Navigate away from contact page and back to it
    - expect: Contact page reloads correctly
    - expect: Form is reset to initial state
    - expect: No previous data is retained

### 2. Theme Toggle and User Preferences

**Seed:** `seed.spec.ts`

#### 2.1. Light to Dark Mode Toggle

**File:** `tests/theme/light-dark-toggle.spec.ts`

**Steps:**
  1. Load the home page (assuming light mode is default)
    - expect: Page renders in light mode
    - expect: Content is visible with light background
    - expect: Text color is appropriate for light mode
  2. Locate the theme toggle button in the navigation bar
    - expect: Theme toggle button is visible
    - expect: Button indicates current theme (e.g., sun/moon icon)
    - expect: Button is clickable
  3. Click on the theme toggle button to switch to dark mode
    - expect: Page immediately switches to dark mode
    - expect: Background becomes dark/darker
    - expect: Text color becomes light for readability
    - expect: All content remains visible and readable
    - expect: Theme toggle button updates to show new theme state
  4. Verify all sections have proper dark mode styling
    - expect: Hero section displays in dark mode
    - expect: Navigation bar is styled for dark mode
    - expect: Footer is styled for dark mode
    - expect: All cards and components have appropriate dark mode contrast
  5. Click theme toggle again to switch back to light mode
    - expect: Page switches back to light mode
    - expect: Background becomes light again
    - expect: All styling reverts to light mode

#### 2.2. Theme Persistence Across Pages

**File:** `tests/theme/theme-persistence.spec.ts`

**Steps:**
  1. Load home page in light mode
    - expect: Home page displays in light mode
  2. Switch to dark mode using theme toggle
    - expect: Page switches to dark mode
  3. Navigate to About Kriya Yoga page
    - expect: About page loads in dark mode
    - expect: Dark mode setting persists across navigation
  4. Navigate to Blog page
    - expect: Blog page loads in dark mode
    - expect: Dark mode continues to persist
  5. Navigate to Contact page
    - expect: Contact page loads in dark mode
    - expect: Contact form is styled for dark mode
    - expect: Form inputs are visible and accessible in dark mode
  6. Refresh the current page
    - expect: Page reloads
    - expect: Dark mode is maintained after refresh
    - expect: Theme preference is preserved in browser storage or session

#### 2.3. Theme Toggle Accessibility

**File:** `tests/theme/theme-accessibility.spec.ts`

**Steps:**
  1. Load the home page
    - expect: Page is fully visible and readable
  2. Toggle theme multiple times rapidly (5-10 times)
    - expect: Each toggle switches the theme correctly
    - expect: No lag or visual glitches occur
    - expect: UI remains responsive
  3. Test that theme toggle button is keyboard accessible
    - expect: Theme toggle can be focused using Tab key
    - expect: Theme toggle can be activated with Enter/Space key
  4. Verify form inputs are visible in both light and dark modes
    - expect: Contact form inputs have sufficient contrast in light mode
    - expect: Contact form inputs have sufficient contrast in dark mode

### 3. Contact Form Functionality and Submission

**Seed:** `seed.spec.ts`

#### 3.1. Contact Form Submission Success

**File:** `tests/forms/contact-form-submission.spec.ts`

**Steps:**
  1. Navigate to the Contact page
    - expect: Contact page loads successfully
    - expect: Contact form is visible
  2. Fill in the Name field with a valid name (e.g., 'John Doe')
    - expect: Text appears in the Name input field
    - expect: Field accepts the input without errors
  3. Fill in the Email field with a valid email address (e.g., 'john@example.com')
    - expect: Email text appears in the Email input field
    - expect: Field accepts the email format
  4. Fill in the Message/Inquiry field with text (e.g., 'I am interested in learning more about Kriya Yoga courses')
    - expect: Message text appears in the textarea field
    - expect: Field expands if necessary to accommodate text
  5. Click the Submit button
    - expect: Form submission is processed
    - expect: Success message is displayed or page confirms submission
    - expect: No error messages appear
    - expect: Form may reset to initial state

#### 3.2. Contact Form Validation

**File:** `tests/forms/contact-form-validation.spec.ts`

**Steps:**
  1. Navigate to the Contact page
    - expect: Contact page loads successfully
  2. Attempt to submit the form without filling in any fields
    - expect: Form is not submitted
    - expect: Validation error message appears for required fields
    - expect: Name field shows required validation error
    - expect: Email field shows required validation error
    - expect: Message field shows required validation error
  3. Fill in Name and leave Email empty, then try to submit
    - expect: Form is not submitted
    - expect: Email field validation error appears
    - expect: Name field does not show error
  4. Fill in Name and Email, but leave Message empty, then try to submit
    - expect: Form is not submitted
    - expect: Message field validation error appears
  5. Fill in Name and Message but enter an invalid email format (e.g., 'invalidemail'), then try to submit
    - expect: Form is not submitted
    - expect: Email validation error appears indicating invalid format
    - expect: Error message suggests valid email format
  6. Fill in all fields with valid data and submit
    - expect: Form submits successfully
    - expect: Success message or confirmation appears

#### 3.3. Contact Form Field Interactions

**File:** `tests/forms/contact-form-interactions.spec.ts`

**Steps:**
  1. Navigate to the Contact page
    - expect: Contact page loads
  2. Click on each form field sequentially (Name, Email, Message)
    - expect: Each field receives focus when clicked
    - expect: Focus indicator (outline or highlight) is visible for accessibility
    - expect: Cursor is positioned in the field
  3. Test tabbing through form fields using keyboard
    - expect: Tab key moves focus between fields in logical order
    - expect: Shift+Tab moves focus backwards through fields
    - expect: Focus is finally on the Submit button
  4. Fill in form with data, clear one field, then refill it
    - expect: Field clears when selected and deleted
    - expect: Field accepts new input correctly
    - expect: No data validation errors occur during this interaction
  5. Fill in form and then click the browser back button
    - expect: Browser navigates away from contact page
    - expect: Form data is not persisted (fresh form on return visit)
    - expect: No data loss warnings appear

#### 3.4. Contact Form with Different Content Types

**File:** `tests/forms/contact-form-content.spec.ts`

**Steps:**
  1. Navigate to Contact page and fill in name with special characters (e.g., 'João Silva' or 'O'Brien')
    - expect: Name field accepts special characters
    - expect: Text is displayed correctly
  2. Enter an email with a subdomain (e.g., 'user@mail.example.co.uk')
    - expect: Email field accepts complex email addresses
    - expect: Validation passes
  3. Fill message field with a long text (500+ characters including newlines)
    - expect: Textarea accepts long content
    - expect: Text wraps appropriately
    - expect: All text is preserved
  4. Fill form with very short inputs (1-2 characters per field)
    - expect: Form accepts minimal valid data
    - expect: Submission succeeds with short but valid data
    - expect: No false validation errors
  5. Fill message field with multiple paragraphs and special formatting (newlines, indentation)
    - expect: All formatting is preserved
    - expect: Message is submitted with original formatting intact

### 4. Content Visibility and Page Layout

**Seed:** `seed.spec.ts`

#### 4.1. Home Page Section Visibility

**File:** `tests/content/home-sections-visibility.spec.ts`

**Steps:**
  1. Load home page
    - expect: Page loads without errors
    - expect: Hero section is immediately visible
  2. Verify Hero section contains expected elements
    - expect: Main title/heading is present
    - expect: Hero description text is visible
    - expect: Hero image or background is present
    - expect: CTA button in hero section is visible and clickable
  3. Scroll down and verify Benefits section
    - expect: Benefits section title appears
    - expect: Multiple benefit cards/items are visible
    - expect: Each benefit has an icon/image and description
    - expect: All cards are properly aligned and visible
  4. Continue scrolling and verify Testimonials section
    - expect: Testimonials section title is visible
    - expect: At least one testimonial is displayed
    - expect: Testimonial includes author name and/or photo
    - expect: Testimonial text is readable and complete
  5. Scroll to About Teacher section
    - expect: About Teacher section is visible
    - expect: Teacher information is displayed
    - expect: Teacher image is present
    - expect: Teacher bio/description is complete and readable
  6. Scroll to Final CTA section
    - expect: Final CTA section is visible before footer
    - expect: CTA button is prominent and clickable
    - expect: Call-to-action text is clear

#### 4.2. Navigation Bar and Footer Visibility

**File:** `tests/content/navbar-footer-visibility.spec.ts`

**Steps:**
  1. Load any page on the website
    - expect: Navigation bar is visible at the top
    - expect: All navigation links are visible
    - expect: Logo or site title is present in navbar
    - expect: Theme toggle button is visible in navbar
  2. Scroll to bottom of any page
    - expect: Footer remains sticky or becomes visible
    - expect: Footer contains expected information (copyright, links, contact info)
    - expect: All footer links are visible
  3. Test navigation links from navbar on different pages
    - expect: Navigation links work correctly from home page
    - expect: Navigation links work correctly from about page
    - expect: Navigation links work correctly from contact page
  4. Verify footer links are clickable
    - expect: Footer links navigate to correct destinations
    - expect: Footer contact links (email, phone if present) work correctly

#### 4.3. Page Content Responsiveness

**File:** `tests/content/content-responsiveness.spec.ts`

**Steps:**
  1. Load home page in desktop view (1920x1080)
    - expect: All sections display properly
    - expect: Text is readable
    - expect: Images are visible
    - expect: Layout is not cramped
  2. Load home page in tablet view (768x1024)
    - expect: Content adapts to tablet width
    - expect: Navigation bar adjusts (may use hamburger menu)
    - expect: Sections stack or adjust appropriately
    - expect: Text remains readable
  3. Load home page in mobile view (375x667)
    - expect: Content stacks vertically
    - expect: Navigation bar shows mobile menu (hamburger)
    - expect: Text is not cut off
    - expect: Images scale appropriately
    - expect: Touch targets are adequate size
  4. Test contact form on mobile
    - expect: Form fields are full width
    - expect: Input fields are easily clickable
    - expect: Keyboard appears when fields are focused
    - expect: Submit button is easily tappable

### 5. User Journey and Integration Tests

**Seed:** `seed.spec.ts`

#### 5.1. Complete User Inquiry Journey

**File:** `tests/journeys/complete-inquiry-journey.spec.ts`

**Steps:**
  1. Start at home page and read through all sections
    - expect: Home page loads with all content
    - expect: All information is clear and engaging
  2. Click on 'About Kriya Yoga' to learn more
    - expect: About page navigates successfully
    - expect: Detailed information is provided
  3. Navigate to Courses/Programs page to explore offerings
    - expect: Courses page displays available programs
    - expect: Program details are clear
  4. Navigate to Contact page
    - expect: Contact page loads successfully
  5. Fill out contact form with inquiry about courses
    - expect: All fields accept input
    - expect: Form validation passes
    - expect: Form submits successfully
  6. Verify submission success message or confirmation
    - expect: Success message is displayed
    - expect: User is informed that inquiry was submitted

#### 5.2. Theme Preference and Navigation Experience

**File:** `tests/journeys/theme-and-navigation.spec.ts`

**Steps:**
  1. Load home page
    - expect: Page renders in default theme
  2. Switch to dark mode
    - expect: Dark mode applies immediately
  3. Navigate through multiple pages (Blog, Events, Practices) while in dark mode
    - expect: Dark mode persists on all pages
    - expect: All content remains visible and readable
    - expect: No styling issues in dark mode
  4. Switch back to light mode and verify
    - expect: Light mode applies across all pages
    - expect: Theme change is immediate
  5. Return to home page
    - expect: Home page displays correctly
    - expect: Navigation bar shows current theme

#### 5.3. Event or Course Discovery Journey

**File:** `tests/journeys/discovery-journey.spec.ts`

**Steps:**
  1. Start at home page and review Benefits section
    - expect: Benefits are clearly communicated
  2. Read testimonials to understand user experience
    - expect: Testimonials provide social proof
    - expect: Multiple testimonials are visible
  3. Click on Events/Retreats to see available offerings
    - expect: Events page shows upcoming retreats or events
    - expect: Event details are comprehensive
  4. Navigate to Practices page to see available practices
    - expect: Practices page displays practice options
  5. Navigate to Teachings page to review teachings
    - expect: Teachings page displays teaching content
  6. Use blog to read articles or updates
    - expect: Blog page shows articles or posts
    - expect: Articles are organized and accessible

#### 5.4. Multi-Step Form Validation and Recovery

**File:** `tests/journeys/form-validation-recovery.spec.ts`

**Steps:**
  1. Navigate to Contact page
    - expect: Contact page loads
  2. Attempt to submit empty form
    - expect: Validation errors appear
    - expect: Form does not submit
  3. Fill in Name field only and try to submit
    - expect: Form shows validation error for Email and Message
    - expect: Name field is valid
  4. Complete the Email field and try to submit again
    - expect: Email field is now valid
    - expect: Message field still shows error
  5. Fill in all required fields with valid data
    - expect: All validation errors clear
    - expect: Submit button is available
  6. Click Submit
    - expect: Form submits successfully
    - expect: Confirmation message appears
