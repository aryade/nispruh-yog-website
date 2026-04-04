# Animation System — Meditative Timing Guide

This document explains the centralized animations system and how to use it across the site.

## Overview

All animations are tuned for a **slow, intentional, meditative feel**. Instead of snappy UI (300ms), we use generous durations (800ms–1400ms) that feel calm and spacious. Stagger delays between items are generous to let each element breathe.

## Timing Constants

All durations are defined in `src/config/animations.ts`:

```typescript
DURATIONS = {
  micro:    0.25s   // buttons, toggles, quick feedback
  quick:    0.35s   // hamburger menu, small overlays
  standard: 0.85s   // most content transitions
  emphasis: 1.1s    // images, featured elements
  slow:     1.4s    // hero headlines, full-screen content
  verySlow: 3.2s    // breathing pulses, infinite loops
}

STAGGER = {
  tight:    0.08s   // short lists
  normal:   0.18s   // most grids/lists (was 0.1–0.16s)
  generous: 0.25s   // hero sections (was 0.22s)
}

DELAYS = {
  none:     0s
  fast:     0.1s
  normal:   0.15s
  slow:     0.25s
  emphasis: 0.35s
}
```

## Using the System

### 1. Import the Constants

```typescript
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  DURATIONS,
  STAGGER,
  DELAYS,
  pageEnter,
} from "../config/animations";
```

### 2. Create Variants Using Helpers

```typescript
// Simple fade + slide up (most common)
const variants = fadeUp(DURATIONS.standard, DELAYS.none);

// Fade without movement
const variants = fadeIn(DURATIONS.slow);

// Scale up (for images, callouts)
import { scaleUp } from "../config/animations";
const variants = scaleUp(DURATIONS.emphasis);

// Container that staggers children
const containerVariants = staggerContainer(STAGGER.normal, DELAYS.slow);
```

### 3. Apply to Motion Components

```typescript
// Staggered list of cards
<motion.ul
  variants={staggerContainer(STAGGER.normal, DELAYS.fast)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-60px" }}
>
  {items.map((item) => (
    <motion.li key={item.id} variants={fadeUp()}>
      {/* card content */}
    </motion.li>
  ))}
</motion.ul>
```

### 4. Infinite / Loop Animations

```typescript
import { pulse, scalePulse } from "../config/animations";

// Breathing opacity pulse
<motion.div
  variants={pulse()}
  animate="animate"
>
  {/* content */}
</motion.div>

// Gentle scale heartbeat
<motion.div
  variants={scalePulse()}
  animate="animate"
>
  {/* content */}
</motion.div>
```

## Examples

### Hero Section

```typescript
import {
  fadeUp,
  staggerContainer,
  fadeIn,
  DURATIONS,
  STAGGER,
  DELAYS,
} from "../config/animations";

const STAGGER_CONTAINER = staggerContainer(STAGGER.generous, DELAYS.slow);
const FADE_UP = fadeUp(DURATIONS.slow);
const FADE_IN = fadeIn(DURATIONS.slow);

export function Hero() {
  return (
    <motion.div
      variants={STAGGER_CONTAINER}
      initial="hidden"
      animate="show"
    >
      <motion.h1 variants={FADE_UP}>
        Still the mind
      </motion.h1>
      <motion.p variants={FADE_UP}>
        Subtitle...
      </motion.p>
    </motion.div>
  );
}
```

### Content Grid / List

```typescript
import {
  fadeUp,
  staggerContainer,
  DURATIONS,
  STAGGER,
} from "../config/animations";

export function CardGrid({ items }) {
  return (
    <motion.ul
      variants={staggerContainer(STAGGER.normal)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {items.map((item) => (
        <motion.li key={item.id} variants={fadeUp()}>
          {/* card */}
        </motion.li>
      ))}
    </motion.ul>
  );
}
```

### Page Transition

Import `pageEnter` variant and use with `PageTransition` component. Already set up — no changes needed.

## Key Principles

1. **Generous durations** — Use `DURATIONS.standard` (0.85s) or slower for most things. Faster durations (0.3–0.35s) are reserved for micro-interactions.

2. **Consistent stagger** — Use `STAGGER.normal` (0.18s) for most lists. Increase to `STAGGER.generous` (0.25s) for full-page hero content.

3. **Delay for emphasis** — Don't auto-play all animations on page load. Use `delayChildren` and `DELAYS` to stagger the entrance. Hero sections typically start with `DELAYS.slow` (0.25s) before items begin.

4. **Infinite animations breathe** — Use `DURATIONS.verySlow` (3.2s) for infinite loops like scroll cues or pulsing icons. They should feel like breathing, not twitching.

5. **Easing is always smooth** — The site uses `[0.22, 1, 0.36, 1]` everywhere. This is in `EASE.out`. Don't deviate.

6. **Scale animations for emphasis** — Use `scaleUp()` for images and featured content. It feels more meditative than a simple fade.

## Migrating Existing Code

To convert a component to meditative timing:

1. **Find all hardcoded `duration` values** — typically 0.5–0.7s
2. **Replace with `DURATIONS.standard` or `DURATIONS.emphasis`**
3. **Find all hardcoded `staggerChildren` values** — typically 0.1–0.16s
4. **Replace with `STAGGER.normal`** (or use the helper functions like `staggerContainer()`)
5. **Test** — animations should feel slow, intentional, never rushed

## Do Not

- ❌ Use durations under 0.3s for content (only micro-interactions)
- ❌ Mix timings inconsistently (don't use 0.6s in one component and 0.9s in another)
- ❌ Use harsh easing like ease-in on entrance (prefer ease-out)
- ❌ Animate more than necessary (stillness is aesthetic)
- ❌ Forget to set `whileInView` with `once: true` for scroll triggers (prevents re-triggering)
