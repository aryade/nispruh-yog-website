"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const STAGGER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const LEVEL_COLOUR: Record<string, string> = {
  Beginner: "var(--pista-green)",
  Intermediate: "var(--pista-green)",
  Advanced: "var(--text-heading)",
};

interface Practice {
  slug: string;
  level: string;
  duration: string;
  type: string;
  title: string;
  description: string;
  steps: string[];
}

export default function PracticeDetailClient({ practice }: { practice: Practice }) {
  return (
    <div className="bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="relative pt-20 pb-20 overflow-hidden border-b border-[var(--border-soft)]/50">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-24 -right-16 w-[48vw] h-[48vw] max-w-[580px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(95,122,97,0.18) 0%, transparent 68%)" }} />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            variants={STAGGER}
            initial="hidden"
            animate="show"
            className="max-w-[54ch]"
          >
            <Link href="/practices" className="inline-flex items-center gap-2 text-[0.88rem] text-[var(--pista-green)] font-medium mb-6 hover:text-[var(--pista-green)]/80 transition-colors">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M13 8H3M7 12l-4-4 4-4" />
              </svg>
              Back to practices
            </Link>

            <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className="text-[0.65rem] uppercase tracking-[0.16em] font-semibold px-2.5 py-1 rounded-full"
                style={{ color: LEVEL_COLOUR[practice.level], background: `${LEVEL_COLOUR[practice.level]}14` }}
              >
                {practice.level}
              </span>
              <span className="text-[0.72rem] text-[var(--text-muted)]/70">{practice.type}</span>
              <span className="text-[0.72rem] text-[var(--text-muted)]/70">&middot;</span>
              <span className="text-[0.72rem] text-[var(--text-muted)]/70">{practice.duration}</span>
            </motion.div>

            <motion.h1
              variants={FADE_UP}
              className="text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[1.12] tracking-tight text-[var(--text-heading)] mb-6"
            >
              {practice.title}
            </motion.h1>

            <motion.p variants={FADE_UP}
              className="text-[1.02rem] leading-[1.85] text-[var(--text-muted)] max-w-[50ch]">
              {practice.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <motion.div
            variants={STAGGER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="space-y-6"
          >
            <motion.h2 variants={FADE_UP} className="text-[1.3rem] font-semibold text-[var(--text-heading)] mb-8">
              How to Practice
            </motion.h2>

            <ol className="space-y-4">
              {practice.steps.map((step, i) => (
                <motion.li key={i} variants={FADE_UP} className="flex gap-5">
                  <div className="shrink-0">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-[0.75rem] font-semibold"
                      style={{ background: `${LEVEL_COLOUR[practice.level]}14`, color: LEVEL_COLOUR[practice.level] }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </div>
                  </div>
                  <p className="text-[0.95rem] leading-[1.75] text-[var(--text-muted)] pt-1">
                    {step}
                  </p>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--text-heading)] border-t border-white/[0.06]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
          >
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--pista-green)] font-semibold mb-4">
              Ready to deepen your practice?
            </p>
            <p className="text-[1rem] leading-[1.85] text-white/65 max-w-[46ch] mx-auto mb-10">
              If you have questions or need guidance on this practice, reach out to Swami.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[var(--pista-green)] text-white text-[0.88rem] font-medium tracking-wide hover:bg-[#4e6851] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pista-green)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--text-heading)] group"
            >
              Contact Swami
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
