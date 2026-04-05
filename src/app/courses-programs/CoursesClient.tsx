"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

/* ── animation variants ───────────────────────────────────────────── */
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
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

/* ── data ─────────────────────────────────────────────────────────── */
const COURSES = [
  {
    id: "meditation",
    tag: "Ongoing",
    format: "Weekly · Online & In-person",
    title: "Meditation Classes",
    subtitle: "A quiet hour each week to step out of the noise",
    description:
      "Guided sitting sessions open to all — beginners, returning practitioners, and those simply curious. Each class moves through breath awareness, body scan, and silent observation. No prior experience required.",
    duration: "90 min per class",
    frequency: "Every Tuesday & Saturday",
    groupSize: "Up to 12 participants",
    price: "Donation-based",
    includes: [
      "Live guided meditation",
      "Short teaching on a classical topic",
      "Open sitting in silence",
      "Q&A with the teacher",
    ],
    suitable: "Anyone. No experience needed.",
    cta: { label: "Reserve a seat", href: "/contact?program=meditation" },
    accent: "var(--bg-accent)",
    featured: false,
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <circle cx="16" cy="16" r="11" />
        <circle cx="16" cy="16" r="4" />
        <path d="M16 5v3M16 24v3M5 16h3M24 16h3" />
      </svg>
    ),
  },
  {
    id: "kriya-course",
    tag: "8-Week Programme",
    format: "Small group · Max 8 students",
    title: "Kriya Yoga Course",
    subtitle: "A structured initiation into the Kriya techniques",
    description:
      "A careful, unhurried introduction to the foundational practices of Kriya Yoga — pranayama, dharana, the spinal breath, and mahamudra. Taught in small groups to preserve the intimacy the tradition requires. Each week builds on the last.",
    duration: "8 weeks · 2 hrs per session",
    frequency: "Once weekly, plus home practice",
    groupSize: "Max 8 students",
    price: "Fee on enquiry",
    includes: [
      "Full initiation into foundational Kriya techniques",
      "Weekly guided practice session",
      "Home practice guidelines",
      "One private 1-to-1 session with the teacher",
      "Course materials and reading list",
      "Ongoing access to the practice community",
    ],
    suitable: "Sincere seekers who have attended at least one meditation class.",
    cta: { label: "Apply for next cohort", href: "/contact?program=kriya-course" },
    accent: "var(--bg-accent)",
    featured: true,
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M16 4 C16 4 9 11 9 18 a7 7 0 0 0 14 0 C23 11 16 4 16 4Z" />
        <path d="M16 13v6M13 16h6" />
      </svg>
    ),
  },
  {
    id: "retreats",
    tag: "Seasonal",
    format: "Residential · Silent",
    title: "Silent Retreats",
    subtitle: "Immersive stillness away from ordinary life",
    description:
      "Three to seven day residential retreats held in natural settings — a farmhouse, a forest centre, or a hillside. The structure is simple: morning and evening practice, meals in silence, free time for walking and rest. No agenda beyond stillness.",
    duration: "3, 5, or 7 days",
    frequency: "2–3 times per year",
    groupSize: "Up to 15 participants",
    price: "Sliding scale — no one turned away",
    includes: [
      "Accommodation and all meals",
      "Morning and evening guided Kriya sessions",
      "One private interview with the teacher",
      "Access to nature walks and personal practice time",
      "Post-retreat integration call",
    ],
    suitable: "Those with an established daily practice. Prior course attendance preferred.",
    cta: { label: "See upcoming dates", href: "/events-retreats" },
    accent: "var(--text-heading)",
    featured: false,
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M5 27 L16 7 L27 27Z" />
        <path d="M11 27 L11 20 Q16 15 21 20 L21 27" />
      </svg>
    ),
  },
  {
    id: "one-to-one",
    tag: "By arrangement",
    format: "Private · Online or In-person",
    title: "One-to-One Mentorship",
    subtitle: "Personal guidance tailored to your practice",
    description:
      "Private sessions with the teacher for those who need individual attention — whether at the beginning, at a plateau, or navigating a difficult passage in practice. Pace and content are shaped entirely around you.",
    duration: "60 or 90 min per session",
    frequency: "Monthly or fortnightly",
    groupSize: "Individual",
    price: "Fee on enquiry",
    includes: [
      "Full one-to-one attention",
      "Practice assessment and refinement",
      "Personalised home practice design",
      "Availability between sessions for written questions",
    ],
    suitable: "Any stage of practice. Particularly useful at turning points.",
    cta: { label: "Enquire privately", href: "/contact?program=one-to-one" },
    accent: "var(--bg-accent)",
    featured: false,
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <circle cx="12" cy="11" r="4" />
        <circle cx="22" cy="14" r="3" />
        <path d="M4 26c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        <path d="M22 20c2.2.7 4 2.8 4 5.5" />
      </svg>
    ),
  },
];

/* ── component ────────────────────────────────────────────────────── */
export default function CoursesClient() {
  return (
    <div className="bg-[var(--bg-primary)]">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="courses-heading"
        className="relative pt-20 pb-24 overflow-hidden border-b border-[var(--border-soft)]/50"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] max-w-[700px] rounded-full opacity-35"
            style={{ background: "radial-gradient(ellipse, rgba(95,122,97,0.16) 0%, transparent 68%)" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <motion.div variants={STAGGER} initial="hidden" animate="show">
            <motion.p variants={FADE_UP}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--bg-accent)] font-semibold mb-6">
              Ways to walk this path
            </motion.p>
            <motion.h1
              id="courses-heading"
              variants={FADE_UP}
              className="text-[clamp(2.2rem,5vw,3.2rem)] font-semibold leading-[1.12] tracking-tight text-[var(--text-heading)] mb-6"
            >
              Courses &amp;
              <br />
              <span className="text-[var(--bg-accent)]">Programs</span>
            </motion.h1>
            <motion.p variants={FADE_UP}
              className="text-[1.02rem] leading-[1.85] text-[var(--text-muted)] max-w-[44ch]">
              Each offering is paced for integration — not consumption. We do
              not fill seats; we welcome sincere seekers at the stage where
              they actually are.
            </motion.p>
          </motion.div>

          {/* Quick-nav cards */}
          <motion.nav
            aria-label="Jump to program"
            variants={STAGGER}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 gap-3"
          >
            {COURSES.map(({ id, title, accent }) => (
              <motion.a
                key={id}
                variants={FADE_UP}
                href={`#${id}`}
                className="flex items-center gap-3 rounded-xl border border-[var(--border-soft)]/60 bg-white px-4 py-3.5 text-[0.82rem] font-medium text-[var(--text-heading)] hover:border-[var(--bg-accent)]/40 hover:shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bg-accent)]/50"
              >
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: accent }} aria-hidden="true" />
                {title}
              </motion.a>
            ))}
          </motion.nav>
        </div>
      </section>

      {/* ── Course cards ───────────────────────────────────────── */}
      <section aria-label="Program details" className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col gap-10">
          {COURSES.map(({ id, tag, format, title, subtitle, description, duration, frequency, groupSize, price, includes, suitable, cta, accent, featured, icon }) => (
            <motion.article
              key={id}
              id={id}
              aria-labelledby={`course-${id}-title`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
              viewport={{ once: true, margin: "-60px" }}
              className={[
                "relative rounded-2xl border overflow-hidden",
                featured
                  ? "border-[var(--bg-accent)]/40 shadow-[0_16px_56px_rgba(31,42,68,0.1)]"
                  : "border-[var(--border-soft)]/60",
              ].join(" ")}
            >
              {/* Featured badge */}
              {featured && (
                <div className="absolute top-6 right-6 text-[0.65rem] uppercase tracking-[0.16em] font-semibold px-3 py-1 rounded-full bg-[var(--bg-accent)]/15 text-[var(--bg-accent)]">
                  Most popular
                </div>
              )}

              {/* Top accent stripe */}
              <div className="h-[3px]" style={{ background: accent }} aria-hidden="true" />

              <div className="bg-white grid grid-cols-1 lg:grid-cols-[1fr_300px]">

                {/* Left — main content */}
                <div className="p-8 sm:p-10">
                  {/* Header */}
                  <div className="flex items-start gap-5 mb-7">
                    <div
                      className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${accent}14`, color: accent }}
                      aria-hidden="true"
                    >
                      {icon}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span
                          className="text-[0.65rem] uppercase tracking-[0.16em] font-semibold px-2.5 py-1 rounded-full"
                          style={{ color: accent, background: `${accent}14` }}
                        >
                          {tag}
                        </span>
                        <span className="text-[0.75rem] text-[var(--text-muted)]/70">{format}</span>
                      </div>
                      <h2
                        id={`course-${id}-title`}
                        className="text-[1.25rem] font-semibold text-[var(--text-heading)] leading-snug"
                      >
                        {title}
                      </h2>
                      <p className="text-[0.88rem] text-[var(--text-muted)] mt-1">{subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[0.95rem] leading-[1.82] text-[#5a5a5a] mb-8 max-w-[60ch]">
                    {description}
                  </p>

                  {/* What's included */}
                  <div className="mb-6">
                    <p className="text-[0.72rem] uppercase tracking-[0.16em] font-semibold text-[var(--text-heading)]/50 mb-3">
                      What&apos;s included
                    </p>
                    <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                      {includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[0.85rem] text-[var(--text-muted)]">
                          <span
                            className="mt-[0.35rem] w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: accent }}
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Suitable for */}
                  <p className="text-[0.82rem] text-[var(--text-muted)] italic">
                    <span className="font-medium not-italic text-[var(--text-heading)]/70">Suitable for: </span>
                    {suitable}
                  </p>
                </div>

                {/* Right — details + CTA */}
                <div
                  className="flex flex-col justify-between p-8 border-t lg:border-t-0 lg:border-l border-[var(--border-soft)]/40"
                  style={{ background: `${accent}07` }}
                >
                  {/* Detail rows */}
                  <dl className="flex flex-col gap-5 mb-8">
                    {[
                      { label: "Duration", value: duration },
                      { label: "Frequency", value: frequency },
                      { label: "Group size", value: groupSize },
                      { label: "Investment", value: price },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <dt className="text-[0.68rem] uppercase tracking-[0.14em] font-semibold text-[var(--text-muted)]/60 mb-0.5">
                          {label}
                        </dt>
                        <dd className="text-[0.9rem] font-medium text-[var(--text-heading)]">{value}</dd>
                      </div>
                    ))}
                  </dl>

                  {/* CTA */}
                  <Link
                    href={cta.href}
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full text-[0.88rem] font-medium text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 group"
                    style={{ background: accent }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.filter = "brightness(0.88)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.filter = "brightness(1)";
                    }}
                  >
                    {cta.label}
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"
                      strokeLinecap="round" strokeLinejoin="round"
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── FAQ / note ─────────────────────────────────────────── */}
      <section
        aria-labelledby="courses-faq-heading"
        className="py-20 bg-white border-t border-[var(--border-soft)]/50"
      >
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
          >
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--bg-accent)] font-semibold mb-5">
              Before you enrol
            </p>
            <h2
              id="courses-faq-heading"
              className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text-heading)] mb-10"
            >
              A few honest answers
            </h2>
          </motion.div>

          <motion.dl
            variants={STAGGER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col divide-y divide-[var(--border-soft)]/50"
          >
            {[
              {
                q: "Do I need prior experience to join?",
                a: "The meditation classes require nothing. The Kriya Course asks only that you have sat in meditation at least a handful of times — even informally. You do not need to be a yogi.",
              },
              {
                q: "Is the fee negotiable?",
                a: "The retreat and one-to-one fees operate on a sliding scale. No sincere seeker is turned away for financial reasons. Please mention your situation when you write to us.",
              },
              {
                q: "Can I join online?",
                a: "The meditation classes are available online. The Kriya Course and retreats are intentionally in-person — some transmissions benefit from physical presence.",
              },
              {
                q: "How do I know if I am ready for the Kriya Course?",
                a: "If the question has arisen, it is usually a sign you are close. Attend one or two meditation classes first, then ask the teacher directly. He will tell you honestly.",
              },
            ].map(({ q, a }) => (
              <motion.div key={q} variants={FADE_UP} className="py-6">
                <dt className="text-[0.95rem] font-semibold text-[var(--text-heading)] mb-2">{q}</dt>
                <dd className="text-[0.9rem] leading-[1.8] text-[var(--text-muted)]">{a}</dd>
              </motion.div>
            ))}
          </motion.dl>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[0.88rem] font-medium text-[var(--bg-accent)] border-b border-[var(--bg-accent)]/40 pb-0.5 hover:border-[var(--bg-accent)] transition-colors duration-200 focus-visible:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--bg-accent)]/50 group"
            >
              Still have a question? Write to us
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
