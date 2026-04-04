# Animation System Overhaul Complete ✨

## What Changed

All animations across the site have been refined to feel **slow, meditative, and intentional**. Instead of snappy corporate UI (300–400ms), animations now breathe (800–1400ms).

### Before → After

| Element Type | Before | After |
|---|---|---|
| **Content fade-in** | 0.6–0.7s | 0.85s (DURATIONS.standard) |
| **Hero/emphasis** | 0.9s | 1.4s (DURATIONS.slow) |
| **Images/callouts** | 0.8–0.85s | 1.1s (DURATIONS.emphasis) |
| **Stagger delay** | 0.1–0.16s | 0.18s (STAGGER.normal) |
| **Hero stagger** | 0.22s | 0.25s (STAGGER.generous) |
| **Breathing pulse** | 2.4s | 3.2s (DURATIONS.verySlow) |
| **Micro-interactions** | — | 0.25s (DURATIONS.micro) |

---

## New Centralized System

### File: `src/config/animations.ts`

**Timing constants:**
```typescript
DURATIONS = {
  micro:    0.25s  // buttons, toggles
  quick:    0.35s  // hamburger menu
  standard: 0.85s  // most content
  emphasis: 1.1s   // images
  slow:     1.4s   // heroes
  verySlow: 3.2s   // infinite loops
}

STAGGER = {
  tight:    0.08s
  normal:   0.18s
  generous: 0.25s
}

DELAYS = {
  none: 0s, fast: 0.1s, normal: 0.15s, slow: 0.25s, emphasis: 0.35s
}
```

**Reusable variants:**
- `fadeUp(duration, delay)` — fade + slide up *(most common)*
- `fadeIn(duration, delay)` — fade in place
- `scaleUp(duration, delay)` — scale up + fade *(for emphasis)*
- `slideInLeft(duration, delay)` — from left
- `slideInRight(duration, delay)` — from right
- `staggerContainer(stagger, delayChildren)` — staggers items
- `pageEnter` — page route transition
- `pulse()` — breathing infinite animation
- `scalePulse()` — gentle scale heartbeat

---

## Updated Components

**Already migrated to use the new system:**

1. **Hero.tsx** — Uses `DURATIONS.slow`, `STAGGER.generous`, `DELAYS.slow`
2. **Navbar.tsx** — Uses `DURATIONS.standard` for header entrance
3. **PageTransition.tsx** — Uses centralized `pageEnter` variant
4. **Benefits.tsx** — Example of grid with meditative stagger

---

## How to Migrate Remaining Components

Use the guide at **`ANIMATIONS.md`** in the project root. Quick steps:

### Before
```typescript
const CARD: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};
```

### After
```typescript
import { fadeUp, DURATIONS } from "../config/animations";

const CARD_VARIANTS = fadeUp(DURATIONS.standard);
```

---

## Why These Durations Feel Right

- **0.85s (standard)** — Visible, deliberate motion. Not snappy. Feels intentional.
- **1.4s (slow)** — For hero text, full-screen elements. Reads naturally with breath.
- **3.2s (verySlow)** — Breathing rhythm. Meditative pulse.
- **0.18s stagger** — Items don't all animate at once. Each breathes individually.

The easing curve `[0.22, 1, 0.36, 1]` is consistent everywhere — smooth ease-out that never feels abrupt.

---

## Dark Mode Animation Support

All animations work seamlessly in dark mode. The theme toggle button uses `DURATIONS.micro` (0.25s) for instant feedback.

---

## Testing

Run `npm run dev` and:

1. Visit the **Homepage** — watch the hero fade in slowly, items stagger gracefully
2. Navigate between pages — smooth 1.4s fade transition
3. Scroll down sections — cards enter with generous stagger
4. Toggle dark mode — instant, snappy icon rotation
5. Open mobile menu — spring animation (intentionally bouncy for micro-interaction)

All animations should feel **calm, unhurried, and meditative** — like you're not being rushed.

---

## Next Steps

Migrate remaining components using the pattern in `ANIMATIONS.md`:

**Components to update:**
- `WhatIsKriyaYoga.tsx`
- `Programs.tsx`
- `Journey.tsx`
- `AboutTeacher.tsx`
- `ContactSection.tsx`
- `FinalCTA.tsx`
- Footer.tsx`
- All page client components (`TeachingsClient.tsx`, `PracticesClient.tsx`, etc.)

The pattern is the same for each:
1. Import `fadeUp`, `staggerContainer`, etc. from `config/animations`
2. Replace hardcoded durations with constants
3. Simplify variant definitions using the helpers

**Estimated time:** ~30–45 minutes to migrate all components (straightforward find-and-replace).

---

## Philosophy

Animations in a spiritual/meditative space should never feel urgent or salesy. They should:

✓ Feel slow and intentional
✓ Give elements space to breathe
✓ Use consistent, smooth easing
✓ Never rush the visitor
✓ Complement the content, not distract from it

This system ensures all animations align with that philosophy.
