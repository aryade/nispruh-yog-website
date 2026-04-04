# Image Placement Guide - Visual Reference

This document shows exactly where each image appears on the website and how to replace placeholders.

---

## Homepage Images

### 1. What is Kriya Yoga Section (Middle of Homepage)
**Current State:** Gradient placeholder with lotus icon
**Location:** Right side of text
**Dimensions:** 600px wide × 500px tall
**File:** `src/components/WhatIsKriyaYoga.tsx` (around line 50-70)

**Original Code:**
```javascript
<div className="absolute inset-0 bg-gradient-to-b from-[#5F7A61]/20 to-transparent flex items-center justify-center">
  {/* Image placeholder */}
  <span aria-hidden="true" className="text-6xl opacity-20">꩜</span>
</div>
```

**Replace With:**
```javascript
import Image from "next/image";

<Image
  src="/images/practices/meditation.jpg"
  alt="Person practicing meditation"
  width={600}
  height={500}
  className="w-full h-full object-cover rounded-lg"
/>
```

**Best Photos For:** Yoga practice, meditation pose, peaceful nature scenes

---

### 2. About Teacher Section (Lower Homepage)
**Current State:** Gradient placeholder with accent border
**Location:** Left side of teacher bio text
**Dimensions:** 400px wide × 500px tall
**File:** `src/components/AboutTeacher.tsx` (around line 20-40)

**Original Code:**
```javascript
<div className="relative">
  <Image
    // Currently empty or placeholder
  />
  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#5F7A61] opacity-30" />
</div>
```

**Replace With:**
```javascript
<Image
  src="/images/teacher/profile-photo.jpg"
  alt="Yoga instructor in meditation pose"
  width={400}
  height={500}
  className="w-full h-full object-cover rounded-lg"
/>
```

**Best Photos For:** Teacher headshot, full-body teaching pose, professional photo

---

## Inner Page Images

### 3. Teachings Page - Article Thumbnails
**Current State:** Gradient placeholder with lotus icon
**Location:** Top of each article card
**Dimensions:** 300px wide × 200px tall
**File:** `src/app/teachings/TeachingsClient.tsx` (multiple locations)

**Replace With:**
```javascript
<Image
  src="/images/blog/your-article-name.jpg"
  alt="Descriptive title of article topic"
  width={300}
  height={200}
  className="w-full h-full object-cover"
/>
```

**Best Photos For:** Teaching moments, practice scenes, meditation, nature

---

### 4. Practices Page - Practice Icons (Small)
**Current State:** Subtle gradient circles
**Location:** Left side of each practice item
**Dimensions:** 60px wide × 60px tall
**File:** `src/app/practices/PracticesClient.tsx` (multiple)

**Replace With:**
```javascript
<Image
  src="/images/practices/meditation-icon.jpg"
  alt="Meditation practice"
  width={60}
  height={60}
  className="w-full h-full object-cover rounded-full"
/>
```

**Best Photos For:** Practice close-ups, technique demonstrations, hand positions

---

### 5. Events Page - Event Cards
**Current State:** Gradient placeholder
**Location:** Top of each event card
**Dimensions:** 400px wide × 300px tall
**File:** `src/app/events-retreats/EventsClient.tsx` (multiple)

**Replace With:**
```javascript
<Image
  src="/images/events/retreat-name.jpg"
  alt="Event location or participants"
  width={400}
  height={300}
  className="w-full h-full object-cover rounded-t-lg"
/>
```

**Best Photos For:** Event venue, group photo, location landscape, retreat setting

---

### 6. Blog Page - Article Thumbnails
**Current State:** Gradient placeholder
**Location:** Top of each blog card
**Dimensions:** 300px wide × 200px tall
**File:** `src/app/blog/BlogClient.tsx` (multiple)

**Replace With:**
```javascript
<Image
  src="/images/blog/article-title.jpg"
  alt="Article topic description"
  width={300}
  height={200}
  className="w-full h-full object-cover"
/>
```

**Best Photos For:** Teaching photos, yoga poses, nature scenes, practice moments

---

### 7. Contact Page - Map Area
**Current State:** Gradient placeholder
**Location:** Large area next to contact form
**Dimensions:** Full width × 300px tall
**File:** `src/app/contact/ContactClient.tsx` (around line 50-70)

**Replace With:**
```javascript
<Image
  src="/images/locations/studio-location.jpg"
  alt="Studio building or meditation room"
  width={800}
  height={400}
  className="w-full h-full object-cover rounded-lg"
/>
```

**Best Photos For:** Studio exterior, meditation room, peaceful location

---

## Photo Naming Convention

Use this format for easy organization:

```
/images/[category]/[topic]-[descriptor].jpg

Examples:
- /images/teacher/profile-photo.jpg
- /images/teacher/teaching-class.jpg
- /images/practices/meditation-pose.jpg
- /images/practices/breathing-technique.jpg
- /images/events/himalayan-retreat.jpg
- /images/events/ny-workshop.jpg
- /images/blog/meditation-guide.jpg
- /images/blog/chakra-system.jpg
- /images/locations/studio-exterior.jpg
- /images/locations/meditation-room.jpg
```

---

## Quick Replacement Steps

### For Each Image:

1. **Find the placeholder**
   - Look for lotus glyph `꩜` or gradient background
   - Use file path to navigate

2. **Prepare your photo**
   - Resize to correct dimensions (see sizes above)
   - Compress using TinyPNG (keep under 1MB)
   - Save with descriptive name

3. **Upload to correct folder**
   - Place in `public/images/[category]/`
   - Example: `public/images/teacher/profile-photo.jpg`

4. **Update component code**
   - Open component file
   - Replace placeholder with Image code
   - Update `src` path and `alt` text

5. **Save and test**
   - Save file (Ctrl+S)
   - Refresh browser
   - Check appearance on desktop and mobile

---

## Image Priority Guide

**Most Important (Do First):**
1. Teacher profile photo (About Teacher section)
2. What is Kriya Yoga image (main homepage section)

**Important (Do Second):**
3. Top event/retreat photo
4. Featured blog article image

**Nice to Have (Do Later):**
5. All practice icons
6. All article thumbnails
7. Contact page location photo

---

## Common Image Mistakes to Avoid

❌ **Wrong:** Image path without `/images/`
```javascript
src="teacher-photo.jpg"  // Won't work
```

✅ **Right:** Full path from public folder
```javascript
src="/images/teacher/photo.jpg"  // Works!
```

---

❌ **Wrong:** Forgetting to import Image
```javascript
// Missing: import Image from "next/image";
<Image src="/images/photo.jpg" ... />  // Error!
```

✅ **Right:** Import at top of file
```javascript
import Image from "next/image";
<Image src="/images/photo.jpg" ... />  // Works!
```

---

❌ **Wrong:** No alt text
```javascript
<Image src="/images/photo.jpg" alt="" />  // Bad
```

✅ **Right:** Descriptive alt text
```javascript
<Image src="/images/photo.jpg" alt="Teacher in meditation pose" />  // Good
```

---

## Free Stock Photo Sites (If You Need Original Content)

- Unsplash.com - Free high-quality photos
- Pexels.com - Free photography
- Pixabay.com - Free images
- Canva.com - Design and find photos

**Search terms:** "meditation", "yoga", "spirituality", "peace", "nature", "mindfulness"

---

## File Preparation Checklist

Before uploading any image:

- [ ] Resized to recommended dimensions
- [ ] Compressed to under 1MB
- [ ] Saved in JPG format (for photos)
- [ ] Filename is descriptive (no spaces)
- [ ] File placed in correct `/images/` subfolder
- [ ] Code updated with new image path
- [ ] Alt text is descriptive
- [ ] Tested on desktop
- [ ] Tested on mobile

---

## Questions?

Refer to `EDITING_GUIDE.md` for detailed step-by-step instructions.
