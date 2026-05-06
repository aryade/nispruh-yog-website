"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const STAGGER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } },
};

export default function AboutTeacher() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="about-teacher"
      aria-labelledby="teacher-heading"
      className="py-24 bg-white border-t border-[var(--border-soft)]/50"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Image column (left on desktop) ───────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative order-2 lg:order-1"
          >
            {/* Offset decorative square */}
            {/* <div */}
              {/* className="absolute -bottom-5 -right-5 w-3/4 h-3/4 rounded-[1.5rem] border border-[var(--pista-green)]/15 pointer-events-none" */}
              {/* aria-hidden="true" */}
            {/* /> */}

            <div
              role="img"
              aria-label="Swami Nispruh Spandan — Kriya Yoga Teacher"
              className="relative z-10 overflow-hidden rounded-[1.5rem] aspect-[3/4]"
            >
              <Image
                src="/images/teacher/Swami_Nispruh_Spandan_color_900x1350 copy.png"
                alt="Swami Nispruh Spandan"
                width={900}
                height={1350}
                priority={true}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating years-of-practice badge */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
              viewport={{ once: true }}
              className="absolute top-8 -right-4 sm:-right-8 z-20 bg-[var(--text-heading)] text-white rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(31,42,68,0.18)]"
            >
              <p className="text-[1.6rem] font-semibold leading-none">20+</p>
              <p className="text-[0.7rem] uppercase tracking-[0.14em] text-white/60 mt-1 font-medium">
                Years of practice
              </p>
            </motion.div>
          </motion.div>

          {/* ── Text column (right on desktop) ───────────────── */}
          <motion.div
            variants={STAGGER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="order-1 lg:order-2"
          >
            <motion.p
              variants={FADE_UP}
              className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--pista-green)] font-semibold mb-5"
            >
              The teacher
            </motion.p>

            <motion.h2
              id="teacher-heading"
              variants={FADE_UP}
              className="text-[clamp(1.8rem,4vw,2.6rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text-heading)] mb-2"
            >
              Swami Nispruh{isMounted ? " Spandan" : ""}
            </motion.h2>

            <motion.p
              variants={FADE_UP}
              className="text-[0.82rem] uppercase tracking-[0.14em] text-[var(--pista-green)] font-semibold mb-8"
            >
              Kriya Yoga Acharya · Lineage of Mahavatar Babaji
            </motion.p>

            <motion.p
              variants={FADE_UP}
              className="text-[1rem] leading-[1.85] text-[#5a5a5a] mb-5"
            >
              Swami Nispruh Spandan has walked the path of Kriya Yoga for over two
              decades, receiving initiation and guidance from teachers in the
              direct lineage of Mahavatar Babaji. His teaching is quiet,
              unhurried, and grounded in lived experience rather than
              doctrine.
            </motion.p>

            <motion.p
              variants={FADE_UP}
              className="text-[1rem] leading-[1.85] text-[#5a5a5a] mb-5"
            >
              After years of solitary practice in the foothills of the
              Himalayas, he was called to teach — not to build an institution,
              but to offer a hand to those genuinely seeking their own inner
              stillness. His approach honours the sacred nature of the
              transmission while remaining accessible to modern practitioners.
            </motion.p>

            <motion.p
              variants={FADE_UP}
              className="text-[1rem] leading-[1.85] text-[#5a5a5a] mb-10"
            >
              He teaches in small groups and one-to-one settings, believing
              that real practice cannot be mass-produced. Every student is met
              where they are.
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={FADE_UP}
              className="h-px bg-[var(--border-soft)]/60 mb-10"
            />

            {/* Credentials row */}
            <motion.ul
              variants={FADE_UP}
              role="list"
              className="flex flex-wrap gap-x-8 gap-y-3 mb-10"
            >
              {[
                "Kriya Yoga Initiation",
                "Vedanta Studies",
                "Himalayan Sadhana",
                "Sanskrit & Scripture",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[0.82rem] text-[var(--text-muted)]"
                >
                  <span
                    className="w-1 h-1 rounded-full bg-[var(--pista-green)] inline-block"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div variants={FADE_UP}>
              <Link
                href="/about-kriya-yoga"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-[var(--text-heading)]/25 text-[var(--text-heading)] text-[0.88rem] font-medium tracking-wide hover:bg-[var(--text-heading)] hover:text-white hover:border-[var(--text-heading)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-heading)]/40 focus-visible:ring-offset-2 group"
              >
                Read full story
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
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
