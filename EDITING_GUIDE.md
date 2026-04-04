# Website Text Editing Guide

This guide helps you edit text content on the Nispruh Yog website without needing to be a developer.

## 📋 Table of Contents
1. [Quick Start](#quick-start)
2. [Where All Text Is Located](#where-all-text-is-located)
3. [How to Edit Text](#how-to-edit-text)
4. [Common Changes](#common-changes)
5. [How to Add Images](#how-to-add-images)
6. [Adding Photos to Placeholders](#adding-photos-to-placeholders)
7. [Image Guidelines](#image-guidelines)
8. [Tips & Best Practices](#tips--best-practices)

---

## Quick Start

1. **Open the file** you want to edit using a text editor (VS Code, Sublime, etc.)
2. **Find the text** you want to change
3. **Edit it**
4. **Save the file** (Ctrl+S or Cmd+S)
5. **Refresh your browser** to see changes live

---

## Where All Text Is Located

### 🏠 **Homepage Components**

#### **Navigation Bar**
**File:** `src/components/Navbar.tsx` (lines 10-19)

Navigation menu items:
```
Home
About
Teachings
Practices
Courses
Events
Blog
Contact
```

#### **Hero Section (Top of Page)**
**File:** `src/components/Hero.tsx`

- **Eyebrow text** (line 73): "Kriya Yoga · Ancient Science of Breath"
- **Main headline** (line 81-83):
  - "Still the mind."
  - "Awaken the self."
- **Subheading** (lines 91-92): "A sacred space for sincere seekers..."
- **Primary CTA Button** (line 104): "Begin Your Journey"
- **Secondary CTA Button** (line 121): "What is Kriya Yoga?"
- **Scroll indicator** (line 135): "Scroll"

#### **What is Kriya Yoga Section**
**File:** `src/components/WhatIsKriyaYoga.tsx`

- Section heading
- Description paragraphs
- "Learn more" link text

#### **Benefits Section**
**File:** `src/components/Benefits.tsx` (look for `BENEFITS` array)

Edit benefit titles and descriptions:
```javascript
const BENEFITS = [
  {
    icon: "🧘",
    title: "Edit This Title",
    description: "Edit this description..."
  },
  // ... more benefits
];
```

#### **Programs Section**
**File:** `src/components/Programs.tsx` (look for `PROGRAMS` array)

Edit program names, descriptions, and features:
```javascript
const PROGRAMS = [
  {
    title: "Meditation Classes",
    description: "Edit description here",
    features: [
      "Edit feature 1",
      "Edit feature 2"
    ]
  },
  // ... more programs
];
```

#### **Journey Section**
**File:** `src/components/Journey.tsx` (look for `JOURNEY_STEPS` array)

Edit 4-step journey text:
```javascript
const JOURNEY_STEPS = [
  {
    number: "01",
    title: "Curious",
    description: "Edit this..."
  },
  // ... more steps
];
```

#### **About Teacher Section**
**File:** `src/components/AboutTeacher.tsx`

- Teacher name
- Title/credentials
- Biography paragraphs
- Badge text ("20+ Years of practice")

#### **Testimonials Section**
**File:** `src/components/Testimonials.tsx` (look for `TESTIMONIALS` array)

Edit testimonial quotes and names:
```javascript
const TESTIMONIALS = [
  {
    quote: "Edit testimonial text...",
    name: "Person Name",
    context: "Edit context..."
  },
  // ... more testimonials
];
```

#### **Final CTA Section**
**File:** `src/components/FinalCTA.tsx`

- Heading
- Supporting paragraph
- CTA button texts

#### **Contact Section**
**File:** `src/components/ContactSection.tsx`

- Email address
- Phone number
- Address
- Hours
- Map text

#### **Footer**
**File:** `src/components/Footer.tsx`

- Brand name (line 88): "Nispruh Yog"
- Mission statement (line 96): "A quiet space for sincere seekers..."
- Social media labels (YouTube, Instagram, Facebook, Twitter)
- Quick links text
- Spiritual quote: "Tat tvam asi"
- Copyright year (automatically updates)

---

### 📄 **Inner Pages**

#### **About Kriya Yoga Page**
**File:** `src/app/about-kriya-yoga/AboutKriyaYogaPage.tsx`

- Hero heading
- Section titles
- Descriptions
- "What is Kriya Yoga" content
- "How it Works" steps
- Benefits section

#### **Teachings Page**
**File:** `src/app/teachings/TeachingsClient.tsx`

- Page heading
- Description
- Article titles and excerpts
- Category tags

#### **Practices Page**
**File:** `src/app/practices/PracticesClient.tsx`

- Page heading
- Practice titles and descriptions
- Difficulty levels
- Instructions/steps

#### **Courses Page**
**File:** `src/app/courses-programs/CoursesClient.tsx`

- Course titles and descriptions
- Course details (duration, group size, price)
- FAQ questions and answers
- "Most popular" badge text

#### **Events Page**
**File:** `src/app/events-retreats/EventsClient.tsx`

- Event titles
- Dates and locations
- Event descriptions
- "Spots remaining" text

#### **Blog Page**
**File:** `src/app/blog/BlogClient.tsx`

- Featured post title and description
- Article titles and excerpts
- Category tags

#### **Contact Page**
**File:** `src/app/contact/ContactClient.tsx`

- Page heading
- Contact information
- Address
- Hours of operation
- Form labels and placeholder text

---

## How to Edit Text

### **Method 1: Simple Text (Easiest)**

For text that's just sitting in the code:

```javascript
// BEFORE
<h1>Still the mind.</h1>

// AFTER - just change the text inside the tags
<h1>Your new heading here.</h1>
```

### **Method 2: Text in Arrays (For Multiple Items)**

Benefits, programs, testimonials, etc. are often stored in arrays:

```javascript
// BEFORE
const BENEFITS = [
  {
    title: "Inner Peace",
    description: "Current description"
  }
];

// AFTER - edit the values
const BENEFITS = [
  {
    title: "Your New Title",
    description: "Your new description"
  }
];
```

### **Method 3: Multi-line Text**

For longer paragraphs, keep the same formatting:

```javascript
// BEFORE
<p>
  This is a paragraph with multiple lines.
  It can wrap across several lines.
</p>

// AFTER
<p>
  Your new paragraph text.
  Keep the same line structure.
</p>
```

---

## Common Changes

### **Change the Main Headline**

**File:** `src/components/Hero.tsx` (line 81)

```javascript
// Current
<motion.h1>
  Still the mind.
  <br />
  <span>Awaken the self.</span>
</motion.h1>

// New
<motion.h1>
  Your new headline.
  <br />
  <span>Your sub-headline.</span>
</motion.h1>
```

### **Change a Button Text**

**File:** Find the button text (e.g., `src/components/Hero.tsx` line 104)

```javascript
// Current
<link>Begin Your Journey</link>

// New
<link>Start Practicing Now</link>
```

### **Change Navigation Links**

**File:** `src/components/Navbar.tsx` (lines 10-19)

```javascript
// Current
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-kriya-yoga" },
  // ...
];

// New - just change the labels
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Our Story", href: "/about-kriya-yoga" },
  // ...
];
```

### **Add or Remove a Benefit**

**File:** `src/components/Benefits.tsx`

```javascript
// To add a benefit, add a new item to the array
const BENEFITS = [
  // ... existing benefits
  {
    icon: "🌟",
    title: "New Benefit",
    description: "Description of the new benefit"
  }
];

// To remove, delete the entire { ... } block
```

### **Change Footer Text**

**File:** `src/components/Footer.tsx`

```javascript
// Brand name (line 88)
<span>Nispruh Yog</span>  // Change to your text

// Mission (line 96)
<p>A quiet space for sincere seekers...</p>  // Change to your text
```

### **Change Contact Information**

**File:** `src/components/ContactSection.tsx`

```javascript
info@nispruhyog.com  // Change email
+1-555-0123          // Change phone
Address text...      // Change address
```

---

## How to Add Images

### 📸 Where to Store Images

All images should be placed in the `public/images/` folder:

```
kriyayoga_website/
└── public/
    └── images/
        ├── teacher.jpg
        ├── meditation.jpg
        ├── practice-poses/
        │   ├── pose1.jpg
        │   └── pose2.jpg
        └── events/
            ├── retreat1.jpg
            └── retreat2.jpg
```

### 🚀 How to Add Images to the Website

#### **Step 1: Save Your Image**

1. Take a photo or get an image file
2. Place it in `public/images/` folder
3. Rename it to something descriptive (e.g., `teacher-profile.jpg`, `meditation-class.jpg`)

#### **Step 2: Find Where Images Go**

Look for placeholder images in components - they look like:
```javascript
<div className="absolute inset-0 bg-gradient-to-b...">
  {/* Image placeholder */}
</div>
```

Or search for `꩜` (lotus icon) - this indicates an image placeholder.

#### **Step 3: Replace the Placeholder**

**Before:** Component has a gradient placeholder
```javascript
<div className="bg-gradient-to-b from-[#5F7A61]/20 to-transparent">
  {/* Lotus placeholder */}
  <span aria-hidden="true" className="opacity-20 text-6xl">꩜</span>
</div>
```

**After:** Add your real image using Next.js Image component
```javascript
import Image from "next/image";

<Image
  src="/images/your-photo.jpg"
  alt="Description of the image"
  width={600}
  height={400}
  className="w-full h-full object-cover rounded-lg"
/>
```

---

## Adding Photos to Placeholders

### 📍 Where Images Are Used on the Website

#### **Homepage - What is Kriya Yoga Section**
**File:** `src/components/WhatIsKriyaYoga.tsx` (right side)
- **Size:** 600x500 pixels
- **Best for:** Yoga practice, meditation, nature scenes
- **How to replace:**
  1. Open the file
  2. Find the image placeholder (around line 40-50)
  3. Replace with your image path

```javascript
// BEFORE - Placeholder
<div className="absolute inset-0 bg-gradient-to-b from-[#5F7A61]/20 to-transparent">
  <span className="opacity-20">꩜</span>
</div>

// AFTER - Your image
<Image
  src="/images/meditation-practice.jpg"
  alt="Meditation practice"
  width={600}
  height={500}
  className="w-full h-full object-cover rounded-lg"
/>
```

#### **About Teacher Section**
**File:** `src/components/AboutTeacher.tsx` (left side)
- **Size:** 400x500 pixels (portrait orientation)
- **Best for:** Teacher/instructor headshot or full-body photo
- **How to replace:**
  1. Save teacher photo as `public/images/teacher-profile.jpg`
  2. Open `src/components/AboutTeacher.tsx`
  3. Find the placeholder image (around line 20-30)
  4. Replace with image code above

#### **Testimonials Section**
**File:** `src/components/Testimonials.tsx`
- These use avatar circles with initials
- Can be customized with actual photos if needed
- **Size:** 80x80 pixels (circular)

#### **Contact Page - Map Placeholder**
**File:** `src/app/contact/ContactClient.tsx`
- **Size:** Full width, 300px height
- **Best for:** Location photo, studio exterior, or event space
- Shows a gradient placeholder you can replace with a photo

#### **Blog & Articles Page**
**File:** `src/app/blog/BlogClient.tsx`
- **Size:** 300x200 pixels (landscape)
- **Best for:** Article cover images, teaching photos
- Each article card has a placeholder you can customize

#### **Events Page**
**File:** `src/app/events-retreats/EventsClient.tsx`
- **Size:** 400x300 pixels (landscape)
- **Best for:** Retreat location, event venue, group photos
- Each event card has an image placeholder

#### **Practices Page**
**File:** `src/app/practices/PracticesClient.tsx`
- **Size:** 60x60 pixels (icons/avatars)
- **Best for:** Small practice icons or technique photos
- Left side of each practice item

---

## Image Guidelines

### 📐 **Recommended Image Sizes**

| Location | Width | Height | Format | Example |
|----------|-------|--------|--------|---------|
| Hero Background | 1920+ | 1080+ | JPG/WebP | Full page background |
| Section Images | 600-800 | 400-500 | JPG/WebP | Side images |
| Teacher Photo | 400 | 500 | JPG/WebP | Portrait |
| Article Thumbnail | 300 | 200 | JPG/WebP | Blog cover |
| Event Card | 400 | 300 | JPG/WebP | Event photo |
| Testimonial Avatar | 80 | 80 | JPG/PNG | Profile picture |
| Practice Icon | 60 | 60 | PNG/SVG | Small icon |

### 🎨 **Image Quality & Format**

**Best Formats:**
- **JPG** - Good for photos (smaller file size)
- **WebP** - Modern format (even smaller, better quality)
- **PNG** - For images with transparency

**File Size:**
- Keep images under 1MB each
- Compress images before uploading
- Use tools like: TinyPNG.com, ImageOptim, or Squoosh.app

**Quality Settings:**
- JPG quality: 80-85% (good balance)
- Dimensions: Exact size or slightly larger
- Don't use tiny images and stretch them

### 🖼️ **Recommended Tools for Image Preparation**

1. **Compress Images:**
   - https://tinypng.com
   - https://squoosh.app
   - https://imagecompressor.com

2. **Edit Images:**
   - Canva (web-based, easy)
   - Photoshop (professional)
   - GIMP (free alternative)
   - Preview (Mac built-in)

3. **Convert Formats:**
   - https://convertio.co
   - https://cloudconvert.com
   - ImageMagick (command line)

---

### ✅ **Do's for Images**

1. **Use descriptive filenames**
   ```
   ✅ teacher-meditation-practice.jpg
   ❌ photo-123.jpg
   ```

2. **Organize in folders**
   ```
   public/images/
   ├── teacher/
   ├── practices/
   ├── events/
   └── blog/
   ```

3. **Use proper alt text** (for accessibility)
   ```javascript
   alt="Teacher leading meditation class"  // ✅ GOOD
   alt="image"                              // ❌ BAD
   ```

4. **Compress before uploading** (save bandwidth)

5. **Use consistent style** (all images should feel cohesive)

### ❌ **Don'ts for Images**

1. **Don't use watermarked images** - unless it's your brand
2. **Don't use copyrighted photos** - get permission or use free stock
3. **Don't upload huge files** (over 2MB) - compress first
4. **Don't mix styles** - keep aesthetic consistent
5. **Don't forget alt text** - important for accessibility

---

## Quick Image Edit Examples

### **Example 1: Replace Teacher Photo**

**File:** `src/components/AboutTeacher.tsx`

```javascript
// BEFORE
<div className="absolute inset-0 bg-gradient-to-b from-[#5F7A61]/20 to-transparent">
  <span className="opacity-20 text-6xl">꩜</span>
</div>

// AFTER
<Image
  src="/images/teacher/profile-photo.jpg"
  alt="Yoga instructor leading a meditation class"
  width={400}
  height={500}
  className="w-full h-full object-cover rounded-lg"
  priority
/>
```

### **Example 2: Add Blog Article Image**

**File:** `src/app/blog/BlogClient.tsx`

```javascript
// Find the article card placeholder
// BEFORE
<div className="bg-gradient-to-br from-[#5F7A61]/20...">
  <span>꩜</span>
</div>

// AFTER
<Image
  src="/images/blog/meditation-basics.jpg"
  alt="Meditation basics for beginners"
  width={300}
  height={200}
  className="w-full h-full object-cover"
/>
```

### **Example 3: Add Event Photo**

**File:** `src/app/events-retreats/EventsClient.tsx`

```javascript
// For each event card
// BEFORE
<div className="bg-gradient-to-b from-[#D6A75E]/20...">
  <span className="opacity-20">꩜</span>
</div>

// AFTER
<Image
  src="/images/events/himalayan-retreat.jpg"
  alt="Himalayan meditation retreat location"
  width={400}
  height={300}
  className="w-full h-full object-cover rounded-t-lg"
/>
```

---

## Step-by-Step: Add Your Photos

### **Step 1: Prepare Your Photos**

1. Select photos from your collection
2. Resize to recommended dimensions (see table above)
3. Compress the files (make them smaller)
4. Save in proper format (JPG for photos, PNG for graphics)

### **Step 2: Organize Your Images**

```
Create folders in public/images/:
- public/images/teacher/
- public/images/practices/
- public/images/events/
- public/images/blog/
- public/images/locations/
```

### **Step 3: Upload Images**

1. Copy image files to appropriate folders in `public/images/`
2. Remember the file path (e.g., `/images/teacher/profile.jpg`)

### **Step 4: Update Components**

1. Open the component file that needs the image
2. Find the placeholder (usually has `꩜` or gradient)
3. Replace with Image code (see examples above)
4. Update the `src` path to your image
5. Update the `alt` text to describe the image

### **Step 5: Test**

1. Save the file
2. Refresh your browser
3. Check that image appears correctly
4. Make sure it looks good on mobile and desktop

---

## Image Placeholder Locations - Quick Reference

| Component | File | Line | Type |
|-----------|------|------|------|
| What is Kriya Yoga | `src/components/WhatIsKriyaYoga.tsx` | ~50 | Section image |
| About Teacher | `src/components/AboutTeacher.tsx` | ~30 | Portrait |
| Blog Articles | `src/app/blog/BlogClient.tsx` | Various | Thumbnails |
| Events | `src/app/events-retreats/EventsClient.tsx` | Various | Event photos |
| Contact Map | `src/app/contact/ContactClient.tsx` | ~50 | Map area |
| Practices | `src/app/practices/PracticesClient.tsx` | Various | Icons |

---

## Image File Structure

```
public/
└── images/
    ├── hero/
    │   ├── background.jpg
    │   └── hero-overlay.jpg
    ├── teacher/
    │   ├── profile-photo.jpg
    │   └── teaching.jpg
    ├── practices/
    │   ├── meditation.jpg
    │   ├── breathing.jpg
    │   ├── chanting.jpg
    │   └── visualization.jpg
    ├── events/
    │   ├── retreat-2024.jpg
    │   ├── workshop-ny.jpg
    │   └── group-photo.jpg
    ├── blog/
    │   ├── meditation-basics.jpg
    │   ├── yoga-benefits.jpg
    │   └── breathing-techniques.jpg
    └── locations/
        ├── studio.jpg
        ├── meditation-room.jpg
        └── outdoor-class.jpg
```

---

## Tips & Best Practices

### ✅ **Do's**

1. **Make backups** - Copy the file before making changes
2. **Keep formatting** - Don't change `<>`, `()`, `{}` symbols
3. **Keep line breaks** - If text is on multiple lines, keep it that way
4. **Use proper quotes** - If you see " use ", don't mix with '
5. **Save after editing** - Ctrl+S or Cmd+S
6. **Test your changes** - View the website after saving
7. **Use descriptive image names** - `teacher-profile.jpg` not `photo-123.jpg`
8. **Compress images** - Use TinyPNG before uploading
9. **Provide alt text** - Describe what's in every image
10. **Keep images organized** - Use folders like `/images/teacher/`, `/images/events/`
11. **Use consistent image styles** - All photos should have similar aesthetic
12. **Test on mobile** - Images should look good on phones too

### ❌ **Don'ts**

1. **Don't delete code symbols** - `<`, `>`, `:`, `;`, etc.
2. **Don't change indentation** - Keep spacing the same
3. **Don't change variable names** - Only edit text values
4. **Don't edit CSS classes** - Only edit the text content
5. **Don't remove whole sections** - Unless you know what you're doing
6. **Don't use huge image files** - Compress to under 1MB
7. **Don't use copyrighted images** - Get permission or use free stock
8. **Don't forget alt text on images** - Important for accessibility and SEO
9. **Don't mix image styles** - Keep aesthetic consistent
10. **Don't use watermarked images** - Unless it's your official brand watermark
11. **Don't upload low-quality images** - Always use high-resolution originals
12. **Don't change image filenames after uploading** - Paths will break

### ⚠️ **Common Mistakes**

**Mistake:** Deleting quotes or brackets
```javascript
// ❌ WRONG
<h1>Still the mind</h1>   // Missing closing >

// ✅ RIGHT
<h1>Still the mind</h1>
```

**Mistake:** Breaking line structure
```javascript
// ❌ WRONG - Messed up formatting
<p>A sacred space for sincere seekers.
Rooted in the living tradition</p>

// ✅ RIGHT
<p>
  A sacred space for sincere seekers.
  Rooted in the living tradition
</p>
```

**Mistake:** Mixing quote types
```javascript
// ❌ WRONG
"Text with 'quotes"  // Different quotes

// ✅ RIGHT
"Text with quotes"  // Same quotes
```

**Image Mistake #1:** Wrong image path
```javascript
// ❌ WRONG - Image won't show
src="/teacher-profile.jpg"  // Not in public folder
src="images/teacher.jpg"    // Missing leading slash

// ✅ RIGHT
src="/images/teacher.jpg"   // Full correct path
```

**Image Mistake #2:** Forgetting alt text
```javascript
// ❌ WRONG - Bad for accessibility
<Image src="/images/teacher.jpg" alt="" />
<Image src="/images/teacher.jpg" />

// ✅ RIGHT
<Image src="/images/teacher.jpg" alt="Yoga instructor in meditation pose" />
```

**Image Mistake #3:** Deleting Import statement
```javascript
// ❌ WRONG - Import removed, Image component won't work
// import Image from "next/image";

<Image src="/images/teacher.jpg" alt="..." />

// ✅ RIGHT
import Image from "next/image";

<Image src="/images/teacher.jpg" alt="..." />
```

**Image Mistake #4:** Using spaces in filenames
```javascript
// ❌ WRONG - Spaces cause problems
teacher profile.jpg
my photo.jpg

// ✅ RIGHT
teacher-profile.jpg
my-photo.jpg
```

---

## File Structure Quick Reference

```
kriyayoga_website/
├── EDITING_GUIDE.md            ← You are here!
├── README.md
├── package.json
│
├── public/
│   └── images/                 ← Add all images here
│       ├── teacher/
│       ├── practices/
│       ├── events/
│       ├── blog/
│       └── locations/
│
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              ← Navigation menu text
│   │   ├── Hero.tsx                ← Main hero section
│   │   ├── WhatIsKriyaYoga.tsx     ← Info section + image placeholder
│   │   ├── Benefits.tsx            ← Benefits grid
│   │   ├── Programs.tsx            ← Programs cards
│   │   ├── Journey.tsx             ← 4-step journey
│   │   ├── AboutTeacher.tsx        ← Teacher bio + image placeholder
│   │   ├── Testimonials.tsx        ← Testimonials
│   │   ├── FinalCTA.tsx            ← Final call-to-action
│   │   ├── ContactSection.tsx      ← Contact info
│   │   └── Footer.tsx              ← Footer text
│   │
│   └── app/
│       ├── page.tsx                ← Homepage
│       ├── about-kriya-yoga/
│       │   └── AboutKriyaYogaPage.tsx
│       ├── teachings/
│       │   └── TeachingsClient.tsx ← Article images
│       ├── practices/
│       │   └── PracticesClient.tsx ← Practice icons
│       ├── courses-programs/
│       │   └── CoursesClient.tsx
│       ├── events-retreats/
│       │   └── EventsClient.tsx    ← Event image placeholders
│       ├── blog/
│       │   └── BlogClient.tsx      ← Article thumbnail images
│       └── contact/
│           └── ContactClient.tsx   ← Map placeholder
```

---

## Need Help?

If you encounter any issues:

1. **Compare with original** - Check if you changed something unintentionally
2. **Restore backup** - Use the backup copy if something breaks
3. **Ask for help** - Contact the development team with the file name and issue

### 📧 **Image-Specific Help**

- **Image won't show?** - Check the file path is correct and file exists in `public/images/`
- **Image stretched?** - Use `object-cover` class or adjust dimensions
- **File too large?** - Compress with TinyPNG before uploading
- **Need to resize?** - Use online tool or Photoshop

---

### Last Updated
April 4, 2026

### Version
2.0 - Added comprehensive image editing guide

### What's New in v2.0
- Complete image editing instructions
- Image placeholder locations mapped
- Recommended image sizes and formats
- Step-by-step photo replacement guide
- Image organization best practices
- Common image mistakes and fixes
- Image-specific do's and don'ts
