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
              {/* className="absolute -bottom-5 -right-5 w-3/4 h-3/4 rounded-[1.5rem] border border-[var(--bg-accent)]/15 pointer-events-none" */}
              {/* aria-hidden="true" */}
            {/* /> */}

            <Image
              src="/frontpage_Image_.png"
              alt="Yoga instructor in meditation pose"
              width={400}
              height={500}
              className="w-full h-full object-cover rounded-lg"
            />

            <div
              //role="img" 
              //aria-label="Teacher portrait — image coming soon"
              //className="relative z-10 overflow-hidden rounded-[1.5rem] aspect-[3/4] bg-gradient-to-br from-[#e4e0d8] via-[#d8d2c8] to-[#c8c0b2] flex flex-col items-center justify-center gap-3" 
            >
              {/* Inner glow */}
              <div
                //className="absolute inset-0 pointer-events-none"
                //style={{
                  //background:
                    //"radial-gradient(ellipse at 35% 30%, rgba(95,122,97,0.16) 0%, transparent 60%), radial-gradient(ellipse at 75% 85%, rgba(214,167,94,0.12) 0%, transparent 55%)",
                //}}
                //aria-hidden="true"
              /> 
              {/* Silhouette glyph */}
              <svg
                //viewBox="0 0 64 80"
                //fill="none"
                //className="w-20 h-20 opacity-20"
                //aria-hidden="true"
              > 
                {/* <circle cx="32" cy="20" r="14" fill="var(--text-heading)" /> */}
                //<path
                  //d="M4 76c0-15.464 12.536-28 28-28s28 12.536 28 28"
                  //stroke="var(--text-heading)"
                  //strokeWidth="3"
                  //strokeLinecap="round"
                />
              </svg>
              <p className="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--text-muted)]/60 font-medium">
                {/* Photo placeholder */}
              </p>
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
              className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--bg-accent)] font-semibold mb-5"
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
              className="text-[0.82rem] uppercase tracking-[0.14em] text-[var(--bg-accent)] font-semibold mb-8"
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
                    className="w-1 h-1 rounded-full bg-[var(--bg-accent)] inline-block"
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
