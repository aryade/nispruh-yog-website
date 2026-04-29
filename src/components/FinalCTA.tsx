"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const STAGGER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function FinalCTA() {
  return (
    <section
      id="begin"
      aria-labelledby="cta-heading"
      className="relative py-32 overflow-hidden bg-[var(--bg-primary)] border-t border-[var(--border-soft)]/50"
    >
      {/* Background radial washes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(95,122,97,0.16) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[40vw] h-[40vw] max-w-[500px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(214,167,94,0.2) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <motion.div
          variants={STAGGER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Eyebrow */}
          <motion.p
            variants={FADE_UP}
            className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--pista-green)] font-semibold mb-6"
          >
            The path begins with one breath
          </motion.p>

          {/* Headline */}
          <motion.h2
            id="cta-heading"
            variants={FADE_UP}
            className="text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[1.12] tracking-tight text-[var(--text-heading)] mb-7"
          >
            Begin Your Inner
            <br />
            <span className="text-[var(--pista-green)]">Journey Today</span>
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            variants={FADE_UP}
            className="text-[1rem] leading-[1.85] text-[var(--text-muted)] max-w-[42ch] mx-auto mb-12"
          >
            There is no perfect moment to begin. Only this one. Whether you are
            curious, searching, or ready — a place is here for you.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={FADE_UP}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/courses-programs"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[var(--pista-green)] text-white text-[0.92rem] font-medium tracking-wide hover:bg-[#4e6851] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pista-green)]/60 focus-visible:ring-offset-2 group"
            >
              Join a Program
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-6 py-4 rounded-full text-[0.88rem] font-medium text-[var(--text-heading)]/60 hover:text-[var(--text-heading)] transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
            >
              Or ask a question first
            </Link>
          </motion.div>

          {/* Reassurance line */}
          <motion.p
            variants={FADE_UP}
            className="mt-10 text-[0.78rem] text-[var(--text-muted)]/60 tracking-wide"
          >
            No obligation &middot; No rush &middot; Just an open door
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
