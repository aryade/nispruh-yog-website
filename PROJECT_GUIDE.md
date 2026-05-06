# Kriya Yoga Website — Complete Project Guide

A calm, minimal Kriya Yoga website built with Next.js and a spiritual meditation-focused aesthetic.

---

## 📋 Quick Navigation

- [**For Website Owners** (Content Editors)](#for-website-owners-content-editors) — Edit text & add photos
- [**For Developers**](#for-developers) — Setup, development, testing, deployment
- [**Project Structure**](#project-structure)
- [**Common Tasks**](#common-tasks)

---

# FOR WEBSITE OWNERS (CONTENT EDITORS)

## 🚀 Quick Start (5 Minutes)

### Step 1: Prepare Your Photos
1. Gather website photos and compress them at https://tinypng.com
2. Save with descriptive names (e.g., `teacher-profile.jpg`)

### Step 2: Upload Photos
1. Open file explorer → navigate to `kriyayoga_website/public/images/`
2. Choose folder: `teacher/`, `practices/`, `events/`, `blog/`, `gurus/`, or `locations/`
3. Drag & drop compressed images

### Step 3: Edit Website Text
1. Open text editor (VS Code, Sublime)
2. Navigate to file location (see "Where Text Is Located" below)
3. Edit text
4. Save file (Ctrl+S / Cmd+S)
5. Refresh browser to see changes

### Step 4: Update Image Paths
After uploading photos, update the component files with new image paths.

---

## 📝 Where All Text Is Located

| Section | File | What to Edit |
|---------|------|-------------|
| Navigation | `src/components/Navbar.tsx` | Menu items |
| Hero / Homepage Title | `src/components/Hero.tsx` | Headline, subheading, button text |
| What is Kriya Yoga | `src/components/WhatIsKriyaYoga.tsx` | Section title & description |
| Benefits | `src/components/Benefits.tsx` | Benefit titles & descriptions (look for `BENEFITS` array) |
| Programs | `src/components/Programs.tsx` | Program names, descriptions, features |
| Teacher Profile | `src/components/AboutTeacher.tsx` | Teacher bio & photo |
| Footer | `src/components/Footer.tsx` | Address, phone, email, social links |

### Pages
| Page | File |
|------|------|
| Home | `/src/app/page.tsx` |
| About Kriya Yoga | `src/app/about-kriya-yoga/AboutKriyaYogaPage.tsx` |
| Teachings | `src/app/teachings/page.tsx` |
| Practices | `src/app/practices/page.tsx` |
| Courses/Programs | `src/app/courses-programs/page.tsx` |
| Events/Retreats | `src/app/events-retreats/page.tsx` |
| Blog | `src/app/blog/page.tsx` |
| Contact | `src/app/contact/page.tsx` |

---

## 📸 Image Organization & Sizes

| Section | Folder | Recommended Size | Format |
|---------|--------|------------------|--------|
| Teacher Profile | `public/images/teacher/` | 400×500 | JPG/PNG |
| What is Kriya Yoga | `public/images/practices/` | 600×500 | JPG/PNG |
| Blog Thumbnails | `public/images/blog/` | 300×200 | JPG/PNG |
| Events/Retreats | `public/images/events/` | 400×300 | JPG/PNG |
| Gurus | `public/images/gurus/` | 300×400 | JPG/PNG |
| Locations | `public/images/locations/` | 800×400 | JPG/PNG |

**Before uploading:**
- ✅ Compress images to 200KB or less
- ✅ Use descriptive filenames
- ✅ Ensure high quality (at least 300px on shortest side)

---

## ✅ Content Editing Tips

### DO's
- Use high-quality, professional photos
- Compress images before uploading (TinyPNG)
- Be consistent with photo style
- Use descriptive filenames
- Test changes on mobile
- Save backups before major changes

### DON'Ts
- ❌ Don't delete code symbols: `<`, `>`, `;`, `{`, `}`, quotes
- ❌ Don't use huge files (over 1MB)
- ❌ Don't mix quote types in code
- ❌ Don't use copyrighted photos without permission
- ❌ Don't forget to add description text (alt text)

---

## 🖼️ How to Add/Update an Image

1. Save your photo with a descriptive name (e.g., `meditation-pose.jpg`)
2. Compress it at https://tinypng.com
3. Upload to appropriate folder in `public/images/`
4. Open the component file that displays that image
5. Update the image path:
   ```jsx
   <img src="/images/folder-name/your-image.jpg" alt="Description" />
   ```
6. Save and refresh browser

---

## 🌈 Color System

**Primary Color (Action/Buttons):** Pista Green `#93C572` (Light mode) / `#A8D987` (Dark mode)  
**Background:** Rose `#F6E0E8` (Light) / Dark Rose `#1A1620` (Dark)  
**Text:** Deep Plum `#2D2A4A` / Light `#E8E5F0`

Don't edit colors unless you know what you're doing. See `src/app/globals.css` for color definitions.

---

## 💬 Getting Help

**Text editing issues?**
- Check the file location in "Where All Text Is Located" table
- Compare your code with existing examples
- Look for similar sections to match formatting

**Image problems?**
- Ensure filename has correct extension (.jpg, .png)
- Check folder path is exact
- Verify image is less than 1MB
- Try refreshing browser (hard refresh: Ctrl+Shift+R)

---

# FOR DEVELOPERS

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ installed
- Git installed
- Terminal/Command line access

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-org/kriyayoga_website.git
cd kriyayoga_website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Navigate to http://localhost:3000
```

---

## 📦 Project Structure

```
kriyayoga_website/
├── src/
│   ├── app/                    # Pages (App Router)
│   │   ├── page.tsx            # Home page
│   │   ├── about-kriya-yoga/
│   │   ├── teachings/
│   │   ├── practices/
│   │   ├── courses-programs/
│   │   ├── events-retreats/
│   │   ├── blog/
│   │   ├── contact/
│   │   ├── api/                # API routes
│   │   │   └── contact/        # Form submission endpoint
│   │   └── globals.css         # Global styles & color system
│   └── components/             # Reusable components
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Footer.tsx
│       ├── Benefits.tsx
│       ├── Programs.tsx
│       ├── WhatIsKriyaYoga.tsx
│       ├── AboutTeacher.tsx
│       ├── ContactForm.tsx
│       └── ThemeToggle.tsx
├── public/
│   ├── images/                 # Website images
│   │   ├── teacher/
│   │   ├── practices/
│   │   ├── blog/
│   │   ├── events/
│   │   ├── gurus/
│   │   └── locations/
│   └── index.html
├── tests/                      # Vitest test files
├── specs/                      # Playwright test specs
├── package.json
├── tsconfig.json
├── next.config.js
├── vitest.config.ts
├── playwright.config.ts
└── PROJECT_GUIDE.md            # This file
```

---

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Build for production
npm start                # Run production server

# Testing
npm test                 # Run all tests
npm run test:ui          # Run tests with UI
npm run test:coverage    # Generate coverage report

# Linting
npm run lint             # Run ESLint
```

---

## 🎨 Design System

### Color Palette

**Light Mode:**
- Primary Action: `#93C572` (Pista Green)
- Background: `#F6E0E8` (Rose)
- Text: `#2D2A4A` (Deep Plum)

**Dark Mode:**
- Primary Action: `#A8D987` (Light Pista Green)
- Background: `#1A1620` (Dark Rose)
- Text: `#E8E5F0` (Light)

### CSS Variables
All colors defined in `src/app/globals.css`:
```css
:root {
  --pista-green: #93C572;
  --primary: #93C572;
  --accent: #93C572;
  /* ... see globals.css for all variables */
}
```

To change colors globally, update these CSS variables.

---

## 🧪 Testing

### Test Files Located
- `tests/` — Vitest unit tests
- `specs/` — Playwright integration tests

### Running Tests

```bash
# All tests
npm test

# Watch mode (reruns on file change)
npm test -- --watch

# Specific test file
npm test -- ContactForm.test.tsx

# With UI
npm run test:ui

# Coverage report
npm run test:coverage
```

### Test Framework
- **Unit Tests:** Vitest + React Testing Library
- **Integration Tests:** Playwright
- **Coverage:** 40+ tests, 100% pass rate

---

## 🚀 Deployment

### Using Vercel (Recommended)

1. **Connect GitHub repository** to Vercel
2. **Configure environment** (if needed)
3. **Deploy:** Vercel auto-deploys on `main` branch pushes
4. **Custom domain:** Configure in Vercel dashboard

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to your hosting service
# (Follow your host's specific instructions)
```

### Environment Variables
No secret environment variables required for this static site.

---

## 📝 Making Changes

### Adding a New Page

1. Create new folder in `src/app/`
2. Create `page.tsx` file
3. Add route to navbar if needed (update `src/components/Navbar.tsx`)
4. Create components for page content

### Editing Existing Page

1. Locate page in `src/app/`
2. Edit components used by that page
3. Save and test locally (`npm run dev`)

### Adding New Component

1. Create `.tsx` file in `src/components/`
2. Export React component
3. Import and use in page or other component

### Styling

- Global styles: `src/app/globals.css`
- Component-specific: inline `className` with Tailwind classes
- CSS variables for colors: defined in `globals.css`

---

## 🔄 Git Workflow

```bash
# Create new branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "Clear description of changes"

# Push to GitHub
git push origin feature/your-feature-name

# Create Pull Request on GitHub
# After review, merge to main
```

---

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Images not showing | Check path: `/images/folder/filename.jpg` |
| Styles not updating | Hard refresh: Ctrl+Shift+R (not Ctrl+R) |
| npm install fails | Delete `node_modules/`, run `npm install` again |
| Dev server won't start | Check if port 3000 is in use, or restart terminal |
| Tests failing | Run `npm install`, then `npm test` again |

---

## 📊 Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS + CSS modules
- **Testing:** Vitest + React Testing Library + Playwright
- **Animations:** Framer Motion
- **Hosting:** Vercel (recommended)
- **Language:** TypeScript

---

## 🌓 Dark Mode

Dark mode automatically toggles based on system preference. Can be overridden with theme toggle button in navbar.

**Files handling dark mode:**
- `src/components/ThemeToggle.tsx` — Toggle button
- `src/app/globals.css` — Dark mode CSS variables
- `vitest.setup.ts` — Test environment setup

---

## 📞 Support & Questions

For issues:
1. Check this guide first
2. Review code comments
3. Check commit history for context
4. Contact development team with:
   - File name you edited
   - What you changed
   - What error you see

---

## ✅ Checklist Before Deployment

- [ ] All tests passing (`npm test`)
- [ ] No console errors
- [ ] Tested on mobile browsers
- [ ] Images optimized and compressed
- [ ] Dark mode tested
- [ ] Links working correctly
- [ ] Contact form tested
- [ ] Accessibility standards met

---

## 📅 Version History

**Current Version:** 1.0 (April 2026)

**Latest Updates:**
- ✅ Pista Green color system implemented
- ✅ All tests passing (40/40)
- ✅ Dark mode optimized
- ✅ Mobile responsive
- ✅ Accessibility compliant

---

## 📝 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vitest Guide](https://vitest.dev/)
- [Playwright Testing](https://playwright.dev/)

---

**Last Updated:** May 6, 2026  
**Project Name:** Kriya Yoga Website  
**Status:** Production Ready ✅
