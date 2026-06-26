"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
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
    category: "Philosophy",
    readTime: "8 min read",
    title: "The Shadow of Prejudice: Finding Peace Beyond the Judgment of Others",
    excerpt:
      "When judgment veils your true nature, spiritual maturity is not about changing others—it is about resting in your own inner freedom.",
    href: "/teachings/shadow-of-prejudice",
    image: "/images/events/45.png",
  },
  {
    category: "Breath",
    readTime: "6 min read",
    title: "The Spine as a Path: Understanding Pranayama",
    excerpt:
      "In Kriyayog, the breath is not a relaxation tool — it is the vehicle of consciousness itself. We explore how the ancient pranayamas work directly with the sushumna nadi.",
    href: "/teachings/pranayama",
    image: "/images/events/36.png",
  },
  {
    category: "Lineage",
    readTime: "8 min read",
    title: "Mahavatar Babaji and the Living Transmission",
    excerpt:
      "The Kriya lineage is not a historical record — it is a living current. This teaching traces the unbroken thread from Babaji through Lahiri Mahasaya to the present day.",
    href: "/teachings/lineage",
    image: "/images/events/37.png",
  },
  {
    category: "Meditation",
    readTime: "5 min read",
    title: "How to Sit: Posture, Stillness, and Inner Alignment",
    excerpt:
      "Before technique, there is posture. Before posture, there is intention. This practical guide addresses the most common obstacles beginners face when they first sit to meditate.",
    href: "/teachings/how-to-sit",
    image: "/images/events/38.png",
  },
  {
    category: "Philosophy",
    readTime: "10 min read",
    title: "Kriya and the Yoga Sutras: A Silent Dialogue",
    excerpt:
      "Patanjali did not describe Kriyayog as a system — he pointed at the same truth from a different angle. We read the Sutras as a map of what the practice reveals from within.",
    href: "/teachings/yoga-sutras",
    image: "/images/events/39.png",
  },
  {
    category: "Philosophy",
    readTime: "8 min read",
    title: "The Architecture of Illusion: Recognizing the Trap of Narcissistic Manipulation",
    excerpt:
      "A teaching on how narcissistic manipulation quietly steals your spiritual center and how to reclaim your own reality through awakened awareness.",
    href: "/teachings/architecture-of-illusion",
    image: "/images/events/45.png",
  },
  {
    category: "Philosophy",
    readTime: "8 min read",
    title: "The Armor of Truth: Breaking the Cycle of Moral Twisting and Blame Shifting",
    excerpt:
      "A teaching on the conscious mechanics of manipulation, and the spiritual path of reclaiming your power through honesty and boundary.",
    href: "/teachings/armor-of-truth",
    image: "/images/events/46.png",
  },
  {
    category: "Philosophy",
    readTime: "7 min read",
    title: "The Sacred Confluence: The Sweetness of Giving and the Salt of Waiting",
    excerpt:
      "A poetic teaching that uses the river and the ocean as spiritual mirrors for giving, waiting, and the depth of true love.",
    href: "/teachings/sacred-confluence",
    image: "/images/events/47.png",
  },
  {
    category: "Philosophy",
    readTime: "9 min read",
    title: "From Indulgence to Understanding",
    excerpt:
      "Life's Quietest Journey — a teaching on the search for wholeness, detachment, and the transformation from endless outer pursuits to peace within.",
    href: "/teachings/indulgence-to-understanding",
    image: "/images/events/48.png",
  },
  {
    category: "Daily Practice",
    readTime: "4 min read",
    title: "Morning Practice: A Simple Framework for Sincere Beginners",
    excerpt:
      "You do not need an hour. You do not need incense or silence or a perfect room. You need fifteen minutes, a straight spine, and honest attention. Here is where to start.",
    href: "/teachings/morning-practice",
    image: "/images/events/40.png",
  },
  {
    category: "Breath",
    readTime: "7 min read",
    title: "The Kumbhaka: Working with the Held Breath",
    excerpt:
      "Between the inhale and the exhale lies a threshold. Kumbhaka — the retention — is not about holding air. It is about holding awareness at the edge of the ordinary mind.",
    href: "/teachings/kumbhaka",
    image: "/images/events/41.png",
  },
  {
    category: "Philosophy",
    readTime: "9 min read",
    title: "What Does Nispruh Mean? The Philosophy of Non-Grasping",
    excerpt:
      "The name of this school is drawn from the Sanskrit root meaning ‘without craving.’ This teaching unpacks why non-grasping is not detachment — it is a deeper form of presence.",
    href: "/teachings/nispruh",
    image: "/images/events/42.png",
  },
  {
    category: "Daily Practice",
    readTime: "5 min read",
    title: "Returning: On Coming Back After a Gap in Practice",
    excerpt:
      "Every practitioner lapses. The practice does not punish absence — it simply waits. This note is for anyone who has walked away and wants to return without self-judgement.",
    href: "/teachings/returning",
    image: "/images/events/43.png",
  },
  {
    category: "Meditation",
    readTime: "6 min read",
    title: "Witnessing the Mind: The Art of Observation Without Reaction",
    excerpt:
      "The goal of Kriya meditation is not to silence the mind — that comes later, if at all. The first real step is simply to watch thoughts arise and pass without being pulled.",
    href: "/teachings/witnessing",
    image: "/images/events/44.png",
  },
];

/* ── component ────────────────────────────────────────────────────── */
export default function TeachingsClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredArticles = useMemo(
    () =>
      selectedCategory === "All"
        ? ARTICLES
        : ARTICLES.filter((article) => article.category === selectedCategory),
    [selectedCategory]
  );

  const visibleArticles = useMemo(
    () => filteredArticles.slice(0, visibleCount),
    [filteredArticles, visibleCount]
  );

  const hasMore = visibleArticles.length < filteredArticles.length;

  return (
    <div className="bg-[var(--bg-primary)]">
      {/* ── Page hero ──────────────────────────────────────────── */}
      <section
        aria-labelledby="teachings-heading"
        className="relative pt-20 pb-20 overflow-hidden border-b border-[var(--border-soft)]/50"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="absolute -top-20 -left-20 w-[50vw] h-[50vw] max-w-[600px] rounded-full opacity-35"
            style={{ background: "radial-gradient(circle, rgba(95,122,97,0.16) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div variants={STAGGER} initial="hidden" animate="show" className="max-w-[52ch]">
            <motion.p
              variants={FADE_UP}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--pista-green)] font-semibold mb-6"
            >
              Knowledge for the path
            </motion.p>
            <motion.h1
              id="teachings-heading"
              variants={FADE_UP}
              className="text-[clamp(2.2rem,5vw,3.2rem)] font-semibold leading-[1.12] tracking-tight text-[var(--text-heading)] mb-6"
            >
              Teachings
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-[1.02rem] leading-[1.85] text-[var(--text-muted)] max-w-[46ch]">
              Direct guidance for those walking the path — on breath, posture, lineage, and the lived texture of sincere practice. Read slowly.
              Return often.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter bar ─────────────────────────────────────────── */}
      <div className="sticky top-16 z-30 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-soft)]/50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <nav
            aria-label="Filter teachings by category"
            className="flex gap-1.5 overflow-x-auto py-4 scrollbar-none"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(6);
                }}
                className={[
                  "shrink-0 px-4 py-1.5 rounded-full text-[0.78rem] font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pista-green)]/50",
                  selectedCategory === cat
                    ? "bg-[var(--pista-green)] text-white"
                    : "text-[var(--text-muted)] hover:text-[var(--text-heading)] border border-[var(--border-soft)]/80 hover:border-[var(--pista-green)]/40",
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
            {visibleArticles.length > 0 ? (
              visibleArticles.map(({ category, readTime, title, excerpt, href, image }) => (
                <motion.li key={title} variants={FADE_UP}>
                  <Link
                    href={href}
                    className="group flex flex-col h-full rounded-2xl border border-[var(--border-soft)]/60 bg-white overflow-hidden hover:shadow-[0_10px_36px_rgba(31,42,68,0.08)] transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pista-green)]/50"
                  >
                    <div className="h-44 bg-gradient-to-br from-[#e8e4dc] to-[#d4cfc7] flex items-center justify-center relative overflow-hidden">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-col flex-1 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[0.68rem] uppercase tracking-[0.16em] font-semibold text-[var(--pista-green)]">
                          {category}
                        </span>
                        <span className="text-[0.72rem] text-[var(--text-muted)]/70">{readTime}</span>
                      </div>

                      <h2 className="text-[1rem] font-semibold leading-snug text-[var(--text-heading)] mb-3 group-hover:text-[var(--pista-green)] transition-colors duration-200">
                        {title}
                      </h2>

                      <p className="text-[0.875rem] leading-[1.78] text-[var(--text-muted)] flex-1 mb-5">
                        {excerpt}
                      </p>

                      <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-[var(--pista-green)]">
                        Read teaching
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
                      </span>
                    </div>
                  </Link>
                </motion.li>
              ))
            ) : (
              <motion.li variants={FADE_UP} className="col-span-full rounded-2xl border border-[var(--border-soft)]/60 bg-white p-10 text-center text-[0.95rem] text-[var(--text-muted)]">
                No teachings match that category yet.
              </motion.li>
            )}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + 6)}
              disabled={!hasMore}
              className={[
                "px-7 py-3 rounded-full border text-[0.85rem] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pista-green)]/50",
                hasMore
                  ? "border-[var(--border-soft)] text-[var(--text-muted)] hover:text-[var(--text-heading)] hover:border-[var(--pista-green)]/40"
                  : "border-[var(--border-soft)]/40 text-[var(--text-muted)]/50 cursor-not-allowed",
              ].join(" ")}
            >
              {hasMore ? "Load more teachings" : "All teachings shown"}
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-[var(--border-soft)]/50">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
          >
            <span className="block text-[3rem] text-[var(--pista-green)]/25 font-serif leading-none mb-4 select-none" aria-hidden="true">
              &quot;
            </span>
            <blockquote className="border-0 p-0 not-italic">
              <p className="text-[1.05rem] leading-[1.85] text-[#5a5a5a] italic font-light max-w-[44ch] mx-auto">
                The practice is not a destination; it is the way of arriving back into yourself.
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
