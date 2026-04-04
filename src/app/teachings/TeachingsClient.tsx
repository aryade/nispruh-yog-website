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
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

/* ── data ─────────────────────────────────────────────────────────── */
const CATEGORIES = ["All", "Breath", "Lineage", "Meditation", "Philosophy", "Daily Practice"];

const ARTICLES = [
  {
    category: "Breath",
    readTime: "6 min read",
    title: "The Spine as a Path: Understanding Pranayama",
    excerpt:
      "In Kriya Yoga, the breath is not a relaxation tool — it is the vehicle of consciousness itself. We explore how the ancient pranayamas work directly with the sushumna nadi.",
    href: "/teachings/pranayama",
  },
  {
    category: "Lineage",
    readTime: "8 min read",
    title: "Mahavatar Babaji and the Living Transmission",
    excerpt:
      "The Kriya lineage is not a historical record — it is a living current. This teaching traces the unbroken thread from Babaji through Lahiri Mahasaya to the present day.",
    href: "/teachings/lineage",
  },
  {
    category: "Meditation",
    readTime: "5 min read",
    title: "How to Sit: Posture, Stillness, and Inner Alignment",
    excerpt:
      "Before technique, there is posture. Before posture, there is intention. This practical guide addresses the most common obstacles beginners face when they first sit to meditate.",
    href: "/teachings/how-to-sit",
  },
  {
    category: "Philosophy",
    readTime: "10 min read",
    title: "Kriya and the Yoga Sutras: A Silent Dialogue",
    excerpt:
      "Patanjali did not describe Kriya Yoga as a system — he pointed at the same truth from a different angle. We read the Sutras as a map of what the practice reveals from within.",
    href: "/teachings/yoga-sutras",
  },
  {
    category: "Daily Practice",
    readTime: "4 min read",
    title: "Morning Practice: A Simple Framework for Sincere Beginners",
    excerpt:
      "You do not need an hour. You do not need incense or silence or a perfect room. You need fifteen minutes, a straight spine, and honest attention. Here is where to start.",
    href: "/teachings/morning-practice",
  },
  {
    category: "Breath",
    readTime: "7 min read",
    title: "The Kumbhaka: Working with the Held Breath",
    excerpt:
      "Between the inhale and the exhale lies a threshold. Kumbhaka — the retention — is not about holding air. It is about holding awareness at the edge of the ordinary mind.",
    href: "/teachings/kumbhaka",
  },
  {
    category: "Philosophy",
    readTime: "9 min read",
    title: "What Does Nispruh Mean? The Philosophy of Non-Grasping",
    excerpt:
      "The name of this school is drawn from the Sanskrit root meaning \u2018without craving.\u2019 This teaching unpacks why non-grasping is not detachment — it is a deeper form of presence.",
    href: "/teachings/nispruh",
  },
  {
    category: "Daily Practice",
    readTime: "5 min read",
    title: "Returning: On Coming Back After a Gap in Practice",
    excerpt:
      "Every practitioner lapses. The practice does not punish absence — it simply waits. This note is for anyone who has walked away and wants to return without self-judgement.",
    href: "/teachings/returning",
  },
  {
    category: "Meditation",
    readTime: "6 min read",
    title: "Witnessing the Mind: The Art of Observation Without Reaction",
    excerpt:
      "The goal of Kriya meditation is not to silence the mind — that comes later, if at all. The first real step is simply to watch thoughts arise and pass without being pulled.",
    href: "/teachings/witnessing",
  },
];

/* ── component ────────────────────────────────────────────────────── */
export default function TeachingsClient() {
  return (
    <div className="bg-[#F7F5F2]">

      {/* ── Page hero ──────────────────────────────────────────── */}
      <section
        aria-labelledby="teachings-heading"
        className="relative pt-20 pb-20 overflow-hidden border-b border-[#d6c9b8]/50"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-20 -left-20 w-[50vw] h-[50vw] max-w-[600px] rounded-full opacity-35"
            style={{ background: "radial-gradient(circle, rgba(95,122,97,0.16) 0%, transparent 70%)" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            variants={STAGGER}
            initial="hidden"
            animate="show"
            className="max-w-[52ch]"
          >
            <motion.p variants={FADE_UP}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-[#5F7A61] font-semibold mb-6">
              Knowledge for the path
            </motion.p>
            <motion.h1
              id="teachings-heading"
              variants={FADE_UP}
              className="text-[clamp(2.2rem,5vw,3.2rem)] font-semibold leading-[1.12] tracking-tight text-[#1F2A44] mb-6"
            >
              Teachings
            </motion.h1>
            <motion.p variants={FADE_UP}
              className="text-[1.02rem] leading-[1.85] text-[#7A7A7A] max-w-[46ch]">
              Direct guidance for those walking the path — on breath, posture,
              lineage, and the lived texture of sincere practice. Read slowly.
              Return often.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter bar ─────────────────────────────────────────── */}
      <div className="sticky top-16 z-30 bg-[#F7F5F2]/90 backdrop-blur-md border-b border-[#d6c9b8]/50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <nav
            aria-label="Filter teachings by category"
            className="flex gap-1.5 overflow-x-auto py-4 scrollbar-none"
          >
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                className={[
                  "shrink-0 px-4 py-1.5 rounded-full text-[0.78rem] font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61]/50",
                  i === 0
                    ? "bg-[#5F7A61] text-white"
                    : "text-[#7A7A7A] hover:text-[#1F2A44] border border-[#d6c9b8]/80 hover:border-[#5F7A61]/40",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Article grid ───────────────────────────────────────── */}
      <section aria-label="Teachings articles" className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.ul
            role="list"
            variants={STAGGER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ARTICLES.map(({ category, readTime, title, excerpt, href }) => (
              <motion.li key={title} variants={FADE_UP}>
                <Link
                  href={href}
                  className="group flex flex-col h-full rounded-2xl border border-[#d6c9b8]/60 bg-white overflow-hidden hover:shadow-[0_10px_36px_rgba(31,42,68,0.08)] transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61]/50"
                >
                  {/* Image placeholder */}
                  <div
                    className="h-44 bg-gradient-to-br from-[#e8e4dc] to-[#d4cfc7] flex items-center justify-center relative overflow-hidden"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0"
                      style={{ background: "radial-gradient(ellipse at 40% 40%, rgba(95,122,97,0.13) 0%, transparent 65%)" }} />
                    <span className="text-[2.2rem] text-[#5F7A61]/20 select-none">꩜</span>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    {/* Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[0.68rem] uppercase tracking-[0.16em] font-semibold text-[#5F7A61]">
                        {category}
                      </span>
                      <span className="text-[0.72rem] text-[#7A7A7A]/70">{readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-[1rem] font-semibold leading-snug text-[#1F2A44] mb-3 group-hover:text-[#5F7A61] transition-colors duration-200">
                      {title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[0.875rem] leading-[1.78] text-[#7A7A7A] flex-1 mb-5">
                      {excerpt}
                    </p>

                    {/* Read link */}
                    <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-[#5F7A61]">
                      Read teaching
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"
                        strokeLinecap="round" strokeLinejoin="round"
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Load more — placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <button
              className="px-7 py-3 rounded-full border border-[#d6c9b8] text-[0.85rem] text-[#7A7A7A] hover:text-[#1F2A44] hover:border-[#5F7A61]/40 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61]/50"
            >
              Load more teachings
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Closing pull-quote ──────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-[#d6c9b8]/50">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
          >
            <span className="block text-[3rem] text-[#5F7A61]/25 font-serif leading-none mb-4 select-none" aria-hidden="true">"</span>
            <blockquote className="border-0 p-0 not-italic">
              <p className="text-[1.05rem] leading-[1.85] text-[#5a5a5a] italic font-light max-w-[44ch] mx-auto">
                A teaching is not the truth — it is a finger pointing at the
                moon. Read with the heart open, then close the book and sit.
              </p>
              <footer className="mt-5 text-[0.72rem] uppercase tracking-[0.18em] text-[#5F7A61] font-semibold not-italic">
                From the tradition
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
