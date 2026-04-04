# Kriya Yoga Website

A calm, minimal Kriya Yoga website built as a Next.js app using the App Router.

## Overview

- A gentle landing experience with a spiritual, meditative tone.
- Main pages include Home, About, Teachings, Practices, Courses / Programs, Events / Retreats, Blog, and Contact.
- Includes a reusable contact form and a simple API route for form submissions.
- Uses component-driven page structure for clarity and ease of updates.

## Pages

- `/` — Home
- `/about-kriya-yoga` — About Kriya Yoga
- `/teachings` — Teachings
- `/practices` — Practices
- `/courses-programs` — Courses / Programs
- `/events-retreats` — Events / Retreats
- `/blog` — Blog
- `/contact` — Contact

## Scripts

```bash
npm install
npm run dev
npm run build
npm start
npm run lint
```

## Notes

- The app currently uses a calm palette and a minimal layout.
- The contact form is wired to `src/app/api/contact/route.ts` for server-side validation.
- If Tailwind or Framer Motion is added later, this README can be updated with the specific setup.
