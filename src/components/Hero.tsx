"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  DURATIONS,
  STAGGER,
  DELAYS,
  EASE,
} from "../config/animations";

const STAGGER_CONTAINER = staggerContainer(STAGGER.generous, DELAYS.slow);
const FADE_UP = fadeUp(DURATIONS.slow);
const FADE_IN = fadeIn(DURATIONS.slow);

export function Hero() {
  return (
    <section
      aria-label="Welcome to Nispruh Yog"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 sm:px-8"
    >
      {/* Background gradient — layered radial washes, no harsh edges */}
      <motion.div
        variants={FADE_IN}
        initial="hidden"
        animate="show"
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        {/* Soft rose base */}
        <div className="absolute inset-0 bg-[var(--bg-primary)]" />
        {/* Rose bloom — upper left */}
        <div
          className="absolute -top-32 -left-32 w-[55vw] h-[55vw] max-w-[680px] max-h-[680px] rounded-full opacity-35"
          style={{
            background:
              "radial-gradient(circle, rgba(230,230,250,0.4) 0%, transparent 70%)",
          }}
        />
        {/* Pista green wash — upper right */}
        <div
          className="absolute -top-16 right-0 w-[40vw] h-[40vw] max-w-[540px] max-h-[540px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(147,197,114,0.15) 0%, transparent 70%)",
          }}
        />
        {/* Lavender undertone — bottom center */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[38vh] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(230,230,250,0.5) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-[52ch] mx-auto"
      >
        {/* Eyebrow */}
        <motion.p
          variants={FADE_UP}
          className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--pista-green)] font-semibold mb-6"
        >
          Kriya Yoga · Ancient Science of Breath
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={FADE_UP}
          className="text-[clamp(2.4rem,6vw,4rem)] font-semibold leading-[1.12] tracking-tight text-[var(--text-heading)] mb-7"
        >
          Still the mind.
          <br />
          <span className="text-[var(--pista-green)]">Awaken the self.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={FADE_UP}
          className="text-[1.05rem] leading-[1.8] text-[var(--text-muted)] max-w-[40ch] mx-auto mb-10"
        >
          A sacred space for sincere seekers. Rooted in the living tradition of
          Kriya Yoga — a path of breath, awareness, and inner inquiry.
        </motion.p>

        {/* Featured Quote */}
        <motion.blockquote
          variants={FADE_UP}
          className="text-[1.15rem] leading-[1.8] text-[var(--text-heading)] max-w-[42ch] mx-auto mb-10 border-l-4 border-[var(--pista-green)] pl-6 italic"
        >
          <p className="mb-3">My love for you is pure and unconditional. But until you will not break the barriers of your Ego, you will never experience the divinity of my love.</p>
          <p className="text-[0.95rem] text-[var(--text-muted)] mt-3">— Swami Nispruh Spandan</p>
          <footer className="text-[0.9rem] font-semibold not-italic text-[var(--pista-green)]">
            {/* — Paramhans Yogananda */}
          </footer>
        </motion.blockquote>

        {/* CTA row */}
        <motion.div
          variants={FADE_UP}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/practices"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[var(--pista-green)] to-[#7CB54D] text-white text-[0.9rem] font-medium tracking-wide hover:shadow-lg hover:shadow-[rgba(147,197,114,0.3)] hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pista-green)]/60 focus-visible:ring-offset-2"
          >
            Begin Your Journey
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="/about-kriya-yoga"
            className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full text-[0.88rem] font-medium text-[var(--pista-green)] border-2 border-[var(--pista-green)] hover:bg-[rgba(147,197,114,0.08)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pista-green)]/60"
          >
            What is Kriya Yoga?
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        variants={FADE_IN}
        initial="hidden"
        animate="show"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[0.68rem] uppercase tracking-[0.2em] text-[var(--text-muted)]/60">
          Scroll
        </span>
        <motion.span
          className="block w-px h-10 bg-gradient-to-b from-[var(--pista-green)]/40 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: DURATIONS.verySlow, repeat: Infinity, ease: "easeInOut" as const }}
        />
      </motion.div>
    </section>
  );
}
