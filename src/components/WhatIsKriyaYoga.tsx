"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const FADE_IN: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function WhatIsKriyaYoga() {
  return (
    <section
      id="what-is-kriya-yoga"
      aria-labelledby="wiky-heading"
      className="py-24 bg-[var(--bg-primary)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Text column ──────────────────────────────────── */}
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Eyebrow */}
            <motion.p
              variants={FADE_UP}
              className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--bg-accent)] font-semibold mb-5"
            >
              The practice
            </motion.p>

            {/* Heading */}
            <motion.h2
              id="wiky-heading"
              variants={FADE_UP}
              className="text-[clamp(1.8rem,4vw,2.6rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text-heading)] mb-8"
            >
              What is Kriya Yoga?
            </motion.h2>

            {/* Paragraphs */}
            <motion.p
              variants={FADE_UP}
              className="text-[1rem] leading-[1.85] text-[#5a5a5a] mb-5"
            >
              Yog of Awareness. Krishna explains Kriya Yog as the practice of purifying the physiological as well as mental and spiritual systems. It is an ancient meditation technique that is a part of the spiritual path.
            </motion.p>

            <motion.p
              variants={FADE_UP}
              className="text-[1rem] leading-[1.85] text-[#5a5a5a] mb-5"
            >
              An effective scientific meditation technique or sadhana which works on all the seven chakras and helps purify oneself and reach a higher level of consciousness. This technique is much more direct and works directly on chakras with the source of spiritual energy deep in our spines. It helps the practitioner to control the life force by mentally drawing it up and down the spine, with awareness and will.
            </motion.p>

            <motion.p
              variants={FADE_UP}
              className="text-[1rem] leading-[1.85] text-[#5a5a5a] mb-10"
            >
              Kriya Yoga is a living meditation tradition woven by breath, attention, and simple devotion. It is not a product, but an invitation into yourself. Repeat quiet practice and hold awareness with tenderness. Allow small shifts to settle into your daily rhythm.
            </motion.p>

            {/* Learn more link */}
            <motion.div variants={FADE_UP}>
              <Link
                href="/about-kriya-yoga"
                className="inline-flex items-center gap-2 text-[0.9rem] font-medium text-[var(--bg-accent)] border-b border-[var(--bg-accent)]/40 pb-0.5 hover:border-[var(--bg-accent)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bg-accent)]/50 focus-visible:rounded-sm group"
              >
                Learn more about the lineage
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Image placeholder column ─────────────────────── */}
          <motion.div
            variants={FADE_IN}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            {/* Outer decorative frame */}
            <div
              className="absolute -inset-3 rounded-[2rem] border border-[var(--bg-accent)]/12 pointer-events-none"
              aria-hidden="true"
            />

            {/* Placeholder image box */}
            <div
              role="img"
              aria-label="Kriya Yoga meditation — image coming soon"
              className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5] bg-gradient-to-br from-[#e8e4dc] via-[#ddd8cf] to-[#cec8be] flex flex-col items-center justify-center gap-4"
            >
              {/* Subtle inner radial glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 40% 35%, rgba(95,122,97,0.14) 0%, transparent 65%), radial-gradient(ellipse at 70% 80%, rgba(214,167,94,0.12) 0%, transparent 55%)",
                }}
                aria-hidden="true"
              />

              {/* Lotus placeholder glyph */}
              <span
                className="text-[4rem] text-[var(--bg-accent)]/30 leading-none select-none"
                aria-hidden="true"
              >
                ꩜
              </span>
              <p className="text-[0.75rem] uppercase tracking-[0.18em] text-[var(--text-muted)]/60 font-medium">
                Image placeholder
              </p>
            </div>

            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-4 sm:-left-8 max-w-[18rem] bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(31,42,68,0.1)] border border-[var(--border-soft)]/50"
            >
              <p className="text-[0.82rem] leading-[1.7] text-[#5a5a5a] italic">
                "Breathe. Be still. The answer you seek is already within."
              </p>
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.14em] text-[var(--bg-accent)] font-semibold">
                Kriya teaching
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
