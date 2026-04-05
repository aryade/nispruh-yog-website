"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const PROGRAMS = [
  {
    eyebrow: "Weekly · Online & In-person",
    title: "Meditation Classes",
    description:
      "Guided sitting sessions for beginners and returning practitioners alike. Each class moves through breath awareness, body scan, and silent observation — a quiet hour to step out of the noise.",
    cta: { label: "View schedule", href: "/courses-programs#meditation" },
    accent: "var(--bg-accent)",
    glyph: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <circle cx="16" cy="16" r="12" />
        <circle cx="16" cy="16" r="5" />
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" />
        <path d="M7.76 7.76l2.83 2.83M21.41 21.41l2.83 2.83M7.76 24.24l2.83-2.83M21.41 10.59l2.83-2.83" />
      </svg>
    ),
  },
  {
    eyebrow: "8-week programme",
    title: "Kriya Yoga Course",
    description:
      "A structured initiation into the techniques of Kriya Yoga — pranayama, dharana, and the foundational kriyas. Taught in small groups to preserve the intimacy the tradition requires.",
    cta: { label: "Learn & enroll", href: "/courses-programs#kriya-course" },
    accent: "var(--bg-accent)",
    glyph: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M16 3C16 3 8 10 8 18a8 8 0 0 0 16 0C24 10 16 3 16 3z" />
        <path d="M16 12v8M12 16h8" />
      </svg>
    ),
  },
  {
    eyebrow: "Seasonal · Residential",
    title: "Retreats",
    description:
      "Immersive 3- to 7-day silent retreats held in natural settings. A chance to go deeper — away from ordinary life, sustained by practice, simplicity, and collective silence.",
    cta: { label: "See upcoming dates", href: "/events-retreats" },
    accent: "var(--text-heading)",
    glyph: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M4 26 L16 6 L28 26 Z" />
        <path d="M10 26 L10 19 Q16 14 22 19 L22 26" />
        <path d="M16 6 v4" />
      </svg>
    ),
  },
];

const CONTAINER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const CARD: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Programs() {
  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      className="py-24 bg-[var(--bg-primary)] border-t border-[var(--border-soft)]/50"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
        >
          <div className="max-w-[40ch]">
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--bg-accent)] font-semibold mb-4">
              Offerings
            </p>
            <h2
              id="programs-heading"
              className="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text-heading)]"
            >
              Ways to walk
              <br />
              <span className="text-[var(--bg-accent)]">this path</span>
            </h2>
          </div>

          <p className="text-[0.9rem] leading-[1.75] text-[var(--text-muted)] max-w-[36ch]">
            Each offering meets you where you are — whether you are curious,
            returning, or ready to go deep.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PROGRAMS.map(({ eyebrow, title, description, cta, accent, glyph }) => (
            <motion.article
              key={title}
              variants={CARD}
              className="group relative flex flex-col rounded-2xl border border-[var(--border-soft)]/60 bg-white overflow-hidden transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(31,42,68,0.09)]"
              aria-labelledby={`prog-${title.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {/* Top accent stripe */}
              <div
                className="h-[3px] w-full"
                style={{ background: accent }}
                aria-hidden="true"
              />

              <div className="flex flex-col flex-1 p-8">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{
                    background: `${accent}14`,
                    color: accent,
                  }}
                  aria-hidden="true"
                >
                  {glyph}
                </div>

                {/* Eyebrow */}
                <p className="text-[0.7rem] uppercase tracking-[0.18em] font-semibold mb-3"
                  style={{ color: accent }}>
                  {eyebrow}
                </p>

                {/* Title */}
                <h3
                  id={`prog-${title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-[1.15rem] font-semibold leading-snug text-[var(--text-heading)] mb-4"
                >
                  {title}
                </h3>

                {/* Description */}
                <p className="text-[0.9rem] leading-[1.8] text-[var(--text-muted)] flex-1 mb-8">
                  {description}
                </p>

                {/* CTA */}
                <Link
                  href={cta.href}
                  className="inline-flex items-center gap-2 self-start text-[0.85rem] font-medium rounded-full px-5 py-2.5 border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={
                    {
                      color: accent,
                      borderColor: `${accent}40`,
                      "--tw-ring-color": `${accent}60`,
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `${accent}10`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  {cta.label}
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* All programs link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/courses-programs"
            className="text-[0.85rem] text-[var(--text-muted)] hover:text-[var(--text-heading)] transition-colors duration-200 underline underline-offset-4 decoration-[var(--border-soft)] hover:decoration-[var(--text-heading)]/40 focus-visible:outline-none"
          >
            View all courses & programmes
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
