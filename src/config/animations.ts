/**
 * Animations Configuration — Meditative Timing System
 *
 * All animations are tuned for a slow, intentional feel.
 * Durations range from 0.4s (micro-interactions) to 1.4s (full-page elements).
 * Stagger is generous to let each item breathe.
 * Easing is consistently smooth and natural.
 */

import { type Variants } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────
   TIMING CONSTANTS
   ───────────────────────────────────────────────────────────────── */

export const DURATIONS = {
  /* Micro-interactions: buttons, toggles, quick UI feedback */
  micro: 0.25,
  /* Quick UI state changes: hamburger menu, small overlays */
  quick: 0.35,
  /* Standard content fade-in / transitions */
  standard: 0.85,
  /* Emphasis animations: images, featured text, important elements */
  emphasis: 1.1,
  /* Slow, meditative entrance: hero headlines, full-screen content */
  slow: 1.4,
  /* Very slow: breathing pulses, infinite loops */
  verySlow: 3.2,
};

export const STAGGER = {
  /* Minimal gap between list items (for short lists) */
  tight: 0.08,
  /* Standard stagger for most grids and lists */
  normal: 0.18,
  /* Generous stagger for hero sections and emphasis */
  generous: 0.25,
};

export const DELAYS = {
  none: 0,
  fast: 0.1,
  normal: 0.15,
  slow: 0.25,
  emphasis: 0.35,
};

/* ─────────────────────────────────────────────────────────────────
   EASING CURVES
   ───────────────────────────────────────────────────────────────── */

export const EASE = {
  /** Smooth, natural ease-out — used for almost all content animations */
  out: [0.22, 1, 0.36, 1] as const,
  /** Fast ease-in for exits and quick interactions */
  in: [0.22, 1, 0.36, 1] as const,
  /** Gentle ease-in-out for balanced transitions */
  inOut: [0.43, 0.13, 0.23, 0.96] as const,
} as const;

/* ─────────────────────────────────────────────────────────────────
   VARIANT GENERATORS
   ───────────────────────────────────────────────────────────────── */

/**
 * Simple fade and vertical slide up. Used everywhere — hero, cards, text.
 */
export const fadeUp = (duration = DURATIONS.standard, delay = DELAYS.none): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: EASE.out,
    },
  },
});

/**
 * Fade in place. For text, overlays, bg elements.
 */
export const fadeIn = (duration = DURATIONS.standard, delay = DELAYS.none): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: EASE.out,
    },
  },
});

/**
 * Scale up from center + fade. For images, callout cards, emphasis.
 */
export const scaleUp = (duration = DURATIONS.emphasis, delay = DELAYS.none): Variants => ({
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      delay,
      ease: EASE.out,
    },
  },
});

/**
 * Slide in from left. For sidebar content, feature items.
 */
export const slideInLeft = (duration = DURATIONS.standard, delay = DELAYS.none): Variants => ({
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: EASE.out,
    },
  },
});

/**
 * Slide in from right. For form sections, data panels.
 */
export const slideInRight = (duration = DURATIONS.standard, delay = DELAYS.none): Variants => ({
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: EASE.out,
    },
  },
});

/**
 * Container that staggers its children. Pass to motion.div / motion.ul.
 */
export const staggerContainer = (
  stagger = STAGGER.normal,
  delayChildren = DELAYS.none
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/**
 * Page-level fade transition (used by PageTransition component).
 */
export const pageEnter: Variants = {
  hidden: { opacity: 0, y: 16 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.slow, ease: EASE.out },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: DURATIONS.quick, ease: "easeIn" as const },
  },
};

/**
 * Breathing pulse for infinite loops (e.g., scroll indicator).
 */
export const pulse = (): Variants => ({
  animate: {
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: DURATIONS.verySlow,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
});

/**
 * Slow, meditative scale pulse (for floating elements).
 */
export const scalePulse = (): Variants => ({
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: DURATIONS.verySlow,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
});
