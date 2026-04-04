# Website Owner Quick Start Guide

Welcome! This guide helps you quickly start editing text and adding photos to your Nispruh Yog website.

---

## 📚 Documentation Files

You have **5 comprehensive guides** to help you:

### 1. **EDITING_GUIDE.md** (Start Here! 📍)
- ✅ How to edit website text
- ✅ Where every text is located
- ✅ How to add photos (complete section)
- ✅ Common mistakes and how to avoid them
- ✅ Best practices
- **Read this first!** It has everything you need.

### 2. **IMAGE_PLACEMENT_GUIDE.md** (For Photo Placement)
- ✅ Exact locations of image placeholders
- ✅ Recommended photo sizes for each section
- ✅ Step-by-step replacement instructions
- ✅ What type of photos work best
- **Use this** when adding specific photos

### 3. **public/images/README.md** (For Image Organization)
- ✅ How to organize photos in folders
- ✅ Naming conventions
- ✅ File requirements
- ✅ Compression tools
- **Reference this** when uploading photos

### 4. **DEPLOYMENT_GUIDE.md** (For Publishing Online) 🚀 NEW!
- ✅ How to publish your website to the internet
- ✅ Vercel setup (easiest option)
- ✅ GitHub integration
- ✅ Custom domain setup
- ✅ Monitoring after launch
- **Use this** when you're ready to go live

### 5. **ANIMATIONS.md** & **ANIMATIONS_SUMMARY.md** (For Developers)
- These are for technical developers
- You don't need these to edit text/images

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Organize Your Photos (2 min)
1. Gather all your website photos
2. Sort them into categories:
   - Teacher/instructor photos
   - Meditation/practice images
   - Event/retreat photos
   - Blog article images
   - Location/studio photos

### Step 2: Compress Images (2 min)
1. Go to https://tinypng.com
2. Upload your photos one by one
3. Download compressed versions
4. Save with descriptive names (e.g., `teacher-profile.jpg`)

### Step 3: Upload Photos (3 min)
1. Open file explorer on your computer
2. Navigate to: `kriyayoga_website/public/images/`
3. Create a folder for your photo type if needed:
   - `teacher/` for instructor photos
   - `practices/` for practice images
   - `events/` for event/retreat photos
   - `blog/` for article images
   - `locations/` for studio/location photos

4. Drag and drop your compressed images

### Step 4: Update Website
1. Follow instructions in **EDITING_GUIDE.md** section "How to Add Images"
2. Update the component files with your new image paths
3. Save files
4. Refresh browser to see changes

---

## 📋 Common Tasks

### Edit Text (e.g., Change Headline)
**File:** `EDITING_GUIDE.md` → Section "Common Changes" → "Change the Main Headline"

### Add Teacher Photo
1. **File:** `EDITING_GUIDE.md` → "Adding Photos to Placeholders" → "About Teacher Section"
2. **Save photo as:** `public/images/teacher/profile-photo.jpg`
3. **Update file:** `src/components/AboutTeacher.tsx`

### Add Event Photos
1. **File:** `IMAGE_PLACEMENT_GUIDE.md` → "Events Page - Event Cards"
2. **Save photos as:** `public/images/events/retreat-name.jpg`
3. **Update file:** `src/app/events-retreats/EventsClient.tsx`

### Add Blog Article Images
1. **File:** `IMAGE_PLACEMENT_GUIDE.md` → "Blog Page - Article Thumbnails"
2. **Save photos as:** `public/images/blog/article-title.jpg`
3. **Update file:** `src/app/blog/BlogClient.tsx`

---

## 📁 Website Structure (SimpliFied)

```
Your Website
├── 📝 EDITING_GUIDE.md          ← READ THIS FIRST
├── 🖼️  IMAGE_PLACEMENT_GUIDE.md ← For photos
├── 📄 public/
│   └── images/                  ← Your photos go here
│       ├── teacher/
│       ├── practices/
│       ├── events/
│       ├── blog/
│       └── locations/
└── 💻 src/
    ├── components/              ← Homepage components
    └── app/
        ├── about-kriya-yoga/
        ├── teachings/
        ├── practices/
        ├── courses-programs/
        ├── events-retreats/
        ├── blog/
        └── contact/
```

---

## ✅ Before You Start

Make sure you have:

- [ ] Text editor installed (VS Code, Sublime, or similar)
- [ ] Your website photos organized
- [ ] TinyPNG account or similar compression tool
- [ ] Access to your website files
- [ ] **EDITING_GUIDE.md** open in your browser

---

## 💡 Tips for Best Results

### ✅ DO's
- Use high-quality photos
- Compress images before uploading (TinyPNG)
- Be consistent with photo style/theme
- Use descriptive names for files
- Save backups before making changes
- Test changes on mobile too

### ❌ DON'Ts
- Don't use huge photo files (over 1MB)
- Don't delete code symbols like `<`, `>`, `;`
- Don't mix quote types or delete brackets
- Don't use watermarked images (unless it's your brand)
- Don't use copyrighted photos without permission
- Don't forget to add description text (alt text)

---

## 📱 Recommended Photo Sizes

| Section | Size | Best Photos |
|---------|------|-------------|
| Teacher Profile | 400×500 | Headshot or full-body teaching |
| What is Kriya Yoga | 600×500 | Meditation, yoga pose, or nature |
| Article Thumbnails | 300×200 | Teaching moments, practice scenes |
| Event Cards | 400×300 | Venue, group photo, or retreat location |
| Practice Icons | 60×60 | Practice close-up or demonstration |
| Contact Map Area | 800×400 | Studio exterior or location |

---

## 🛠️ Tools You'll Need

### Free Image Compression
- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app

### Text Editors
- VS Code (recommended): https://code.visualstudio.com
- Sublime Text: https://www.sublimetext.com

### Free Stock Photos (If Needed)
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

---

## ❓ Getting Help

### For Text Editing Issues
→ See **EDITING_GUIDE.md** → "Tips & Best Practices" → "Common Mistakes"

### For Image Placement Questions
→ See **IMAGE_PLACEMENT_GUIDE.md** → Your specific page

### For Image Organization
→ See **public/images/README.md**

### For Code Issues
→ Contact your development team with:
- The file name you edited
- What you changed
- What error you see

---

## 🎯 Next Steps

1. **Right now:** Read the beginning of **EDITING_GUIDE.md**
2. **Then:** Follow the "How to Add Images" section
3. **After that:** Use **IMAGE_PLACEMENT_GUIDE.md** for specific pages
4. **When ready:** Follow **DEPLOYMENT_GUIDE.md** to publish online
5. **Finally:** Test your changes in a browser

---

## 📞 Support

If you get stuck:

1. Check **EDITING_GUIDE.md** first
2. Look at the examples provided
3. Compare your code with the "RIGHT" examples
4. Check file paths are correct
5. Contact your development team if still stuck

---

## ✨ You're Ready!

You now have everything you need to:
- ✅ Edit all website text
- ✅ Add your photos
- ✅ Organize content
- ✅ Make updates independently

**Start with EDITING_GUIDE.md** and follow along. Good luck! 🎉

---

**Website:** Nispruh Yog
**Documentation Version:** 1.0
**Last Updated:** April 4, 2026
