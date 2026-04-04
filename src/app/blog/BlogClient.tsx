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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

/* ── data ─────────────────────────────────────────────────────────── */
type Tag = "Practice" | "Reflection" | "Lineage" | "Daily Life" | "Philosophy";

interface Post {
  slug: string;
  tag: Tag;
  readTime: string;
  date: string;
  dateISO: string;
  title: string;
  excerpt: string;
  featured?: boolean;
}

const TAG_COLOUR: Record<Tag, string> = {
  Practice:    "#5F7A61",
  Reflection:  "#D6A75E",
  Lineage:     "#1F2A44",
  "Daily Life": "#7A6A8A",
  Philosophy:  "#7A7A7A",
};

const POSTS: Post[] = [
  {
    slug: "what-happens-when-you-sit",
    tag: "Practice",
    readTime: "5 min",
    date: "28 March 2026",
    dateISO: "2026-03-28",
    title: "What Actually Happens When You Sit",
    excerpt:
      "Most people expect meditation to feel peaceful. Often it feels like the opposite — restless, loud, resistant. This is not failure. This is the practice beginning.",
    featured: true,
  },
  {
    slug: "lineage-why-it-matters",
    tag: "Lineage",
    readTime: "8 min",
    date: "14 March 2026",
    dateISO: "2026-03-14",
    title: "Why Lineage Matters in Kriya Yoga",
    excerpt:
      "The word \u2018transmission\u2019 is not mystical jargon. It points at something precise: the difference between reading a map and walking the terrain with someone who knows it.",
  },
  {
    slug: "morning-without-a-phone",
    tag: "Daily Life",
    readTime: "4 min",
    date: "2 March 2026",
    dateISO: "2026-03-02",
    title: "One Morning Without the Phone",
    excerpt:
      "An experiment: no screen for the first hour after waking. What happens in that hour is surprisingly ordinary — and quietly transformative.",
  },
  {
    slug: "breath-retention-kumbhaka",
    tag: "Practice",
    readTime: "6 min",
    date: "18 February 2026",
    dateISO: "2026-02-18",
    title: "The Held Breath: A Note on Kumbhaka",
    excerpt:
      "Between the inhale and the exhale is a threshold most practitioners skip over. The held breath is not a technique for advanced yogis. It is available to anyone willing to pause.",
  },
  {
    slug: "on-not-achieving-peace",
    tag: "Philosophy",
    readTime: "7 min",
    date: "5 February 2026",
    dateISO: "2026-02-05",
    title: "On Not Achieving Peace",
    excerpt:
      "Peace is not a state to be manufactured through effort. The practitioner\u2019s work is subtler: to remove what obscures what is already there.",
  },
  {
    slug: "returning-after-a-gap",
    tag: "Reflection",
    readTime: "4 min",
    date: "24 January 2026",
    dateISO: "2026-01-24",
    title: "Returning After a Long Gap",
    excerpt:
      "You stopped. Weeks passed, perhaps months. The cushion collected dust. This note is for the moment of returning \u2014 and why the gap does not matter as much as you think.",
  },
  {
    slug: "sattvic-life-small-choices",
    tag: "Daily Life",
    readTime: "5 min",
    date: "10 January 2026",
    dateISO: "2026-01-10",
    title: "The Sattvic Life Is Made of Small Choices",
    excerpt:
      "Sattva is not achieved in the meditation hall. It is built slowly, meal by meal, conversation by conversation, in the ten thousand ordinary moments of a day.",
  },
  {
    slug: "lahiri-mahasaya-householder",
    tag: "Lineage",
    readTime: "9 min",
    date: "22 December 2025",
    dateISO: "2025-12-22",
    title: "Lahiri Mahasaya: The Householder Who Changed Everything",
    excerpt:
      "He worked as a clerk, raised children, and cooked food for his family. He also initiated thousands into Kriya Yoga. His life is a quiet argument against the idea that depth requires renunciation.",
  },
  {
    slug: "the-witness",
    tag: "Philosophy",
    readTime: "6 min",
    date: "8 December 2025",
    dateISO: "2025-12-08",
    title: "The Witness: Who Is Watching the Mind?",
    excerpt:
      "Yoga speaks of the \u2018drashta\u2019 \u2014 the seer. Not a separate soul hovering above experience, but a quality of awareness that can be cultivated until it becomes the default relationship with one\u2019s own mind.",
  },
];

const TAGS: ("All" | Tag)[] = ["All", "Practice", "Reflection", "Lineage", "Daily Life", "Philosophy"];

const FEATURED = POSTS.find((p) => p.featured)!;
const REST     = POSTS.filter((p) => !p.featured);

/* ── component ────────────────────────────────────────────────────── */
export default function BlogClient() {
  return (
    <div className="bg-[#F7F5F2]">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="blog-heading"
        className="relative pt-20 pb-20 overflow-hidden border-b border-[#d6c9b8]/50"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-16 -left-16 w-[48vw] h-[48vw] max-w-[560px] rounded-full opacity-35"
            style={{ background: "radial-gradient(circle, rgba(95,122,97,0.16) 0%, transparent 70%)" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div variants={STAGGER} initial="hidden" animate="show" className="max-w-[52ch]">
            <motion.p variants={FADE_UP}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-[#5F7A61] font-semibold mb-6">
              Words from the path
            </motion.p>
            <motion.h1
              id="blog-heading"
              variants={FADE_UP}
              className="text-[clamp(2.2rem,5vw,3.2rem)] font-semibold leading-[1.12] tracking-tight text-[#1F2A44] mb-6"
            >
              Blog
            </motion.h1>
            <motion.p variants={FADE_UP}
              className="text-[1.02rem] leading-[1.85] text-[#7A7A7A] max-w-[46ch]">
              Short reflections on practice, quiet living, and the daily unfolding
              of awareness. Written when there is something simple and true to share
              — not on a content schedule.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured post ──────────────────────────────────────── */}
      <section aria-label="Featured post" className="py-14 border-b border-[#d6c9b8]/50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
          >
            <Link
              href={`/blog/${FEATURED.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-[1fr_380px] rounded-2xl border border-[#d6c9b8]/60 bg-white overflow-hidden hover:shadow-[0_12px_48px_rgba(31,42,68,0.08)] transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61]/50"
              aria-labelledby="featured-title"
            >
              {/* Text */}
              <div className="p-9 sm:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-[0.65rem] uppercase tracking-[0.16em] font-semibold px-2.5 py-1 rounded-full"
                    style={{ color: TAG_COLOUR[FEATURED.tag], background: `${TAG_COLOUR[FEATURED.tag]}14` }}
                  >
                    {FEATURED.tag}
                  </span>
                  <span className="text-[0.72rem] text-[#7A7A7A]/60">{FEATURED.readTime} read</span>
                  <span className="text-[0.72rem] text-[#7A7A7A]/60">&middot;</span>
                  <time dateTime={FEATURED.dateISO} className="text-[0.72rem] text-[#7A7A7A]/60">
                    {FEATURED.date}
                  </time>
                </div>

                <h2
                  id="featured-title"
                  className="text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.2] text-[#1F2A44] mb-5 group-hover:text-[#5F7A61] transition-colors duration-200"
                >
                  {FEATURED.title}
                </h2>
                <p className="text-[0.95rem] leading-[1.82] text-[#7A7A7A] mb-8 max-w-[50ch]">
                  {FEATURED.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-[#5F7A61]">
                  Read article
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </span>
              </div>

              {/* Image placeholder */}
              <div
                className="relative hidden lg:flex items-center justify-center bg-gradient-to-br from-[#e8e4dc] to-[#d4cfc7] min-h-[280px]"
                aria-hidden="true"
              >
                <div className="absolute inset-0"
                  style={{ background: "radial-gradient(ellipse at 40% 40%, rgba(95,122,97,0.15) 0%, transparent 65%)" }} />
                <span className="text-[4rem] text-[#5F7A61]/20 select-none">꩜</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Tag filter ─────────────────────────────────────────── */}
      <div className="sticky top-16 z-30 bg-[#F7F5F2]/90 backdrop-blur-md border-b border-[#d6c9b8]/50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <nav aria-label="Filter posts by tag" className="flex gap-1.5 overflow-x-auto py-4 scrollbar-none">
            {TAGS.map((tag, i) => (
              <button
                key={tag}
                className={[
                  "shrink-0 px-4 py-1.5 rounded-full text-[0.78rem] font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61]/50",
                  i === 0
                    ? "bg-[#5F7A61] text-white"
                    : "text-[#7A7A7A] hover:text-[#1F2A44] border border-[#d6c9b8]/80 hover:border-[#5F7A61]/40",
                ].join(" ")}
              >
                {tag}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Article grid ───────────────────────────────────────── */}
      <section aria-label="All posts" className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.ul
            role="list"
            variants={STAGGER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {REST.map((post) => (
              <motion.li key={post.slug} variants={FADE_UP}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full rounded-2xl border border-[#d6c9b8]/60 bg-white overflow-hidden hover:shadow-[0_10px_36px_rgba(31,42,68,0.08)] transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61]/50"
                >
                  {/* Thumbnail placeholder */}
                  <div
                    className="h-44 relative flex items-center justify-center bg-gradient-to-br from-[#eae6de] to-[#d8d3ca] overflow-hidden"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0"
                      style={{ background: `radial-gradient(ellipse at 40% 40%, ${TAG_COLOUR[post.tag]}18 0%, transparent 65%)` }} />
                    <span className="text-[2rem] select-none" style={{ color: `${TAG_COLOUR[post.tag]}30` }}>꩜</span>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className="text-[0.65rem] uppercase tracking-[0.14em] font-semibold px-2 py-0.5 rounded-full"
                        style={{ color: TAG_COLOUR[post.tag], background: `${TAG_COLOUR[post.tag]}14` }}
                      >
                        {post.tag}
                      </span>
                      <span className="text-[0.7rem] text-[#7A7A7A]/60">{post.readTime} read</span>
                      <span className="text-[0.7rem] text-[#7A7A7A]/60">&middot;</span>
                      <time dateTime={post.dateISO} className="text-[0.7rem] text-[#7A7A7A]/60">
                        {post.date}
                      </time>
                    </div>

                    {/* Title */}
                    <h2 className="text-[1rem] font-semibold leading-snug text-[#1F2A44] mb-3 group-hover:text-[#5F7A61] transition-colors duration-200">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-[0.875rem] leading-[1.78] text-[#7A7A7A] flex-1 mb-5">
                      {post.excerpt}
                    </p>

                    {/* Read link */}
                    <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-[#5F7A61]">
                      Read
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

          {/* Load more */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <button className="px-7 py-3 rounded-full border border-[#d6c9b8] text-[0.85rem] text-[#7A7A7A] hover:text-[#1F2A44] hover:border-[#5F7A61]/40 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61]/50">
              Load older posts
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Closing note ───────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-[#d6c9b8]/50">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
          >
            <span className="block text-[3rem] text-[#5F7A61]/25 font-serif leading-none mb-5 select-none" aria-hidden="true">"</span>
            <blockquote className="border-0 p-0 not-italic">
              <p className="text-[1.02rem] leading-[1.85] text-[#5a5a5a] italic font-light max-w-[44ch] mx-auto">
                Writing about practice is useful only when it sends you back to the
                cushion. Read lightly. Sit deeply.
              </p>
              <footer className="mt-5 text-[0.72rem] uppercase tracking-[0.18em] text-[#5F7A61] font-semibold not-italic">
                From the teacher
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
