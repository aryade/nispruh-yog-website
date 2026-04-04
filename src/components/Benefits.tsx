"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeUp,
  DURATIONS,
  STAGGER,
  DELAYS,
} from "../config/animations";

const BENEFITS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
        <path d="M7.5 4.5C5.5 6 4 8.8 4 12" />
        <path d="M16.5 4.5C18.5 6 20 8.8 20 12" />
      </svg>
    ),
    title: "Inner Peace",
    body: "Regular practice settles the nervous system, creating a baseline of calm that persists through daily life — not just on the cushion.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M12 2a7 7 0 0 1 7 7c0 4-3.5 7-7 11C8.5 16 5 13 5 9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: "Mental Clarity",
    body: "Pranayama and focused awareness clear the mental fog that accumulates from constant stimulation, restoring a quiet, perceptive mind.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Emotional Balance",
    body: "As breath and awareness deepen, reactive patterns soften. You begin to meet experience with steadiness rather than being swept by it.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    title: "Better Focus",
    body: "Single-pointed concentration — practised inwardly — naturally carries into work, relationships, and creative life with greater depth.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M8 12s1 2 4 2 4-2 4-2" />
        <path d="M9 9h.01M15 9h.01" />
      </svg>
    ),
    title: "Stress Reduction",
    body: "The slow, conscious breath of Kriya activates the parasympathetic system — the body's innate rest response — releasing held tension at its root.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Self-Awareness",
    body: "Witnessing the mind without judgment is the first step of wisdom. Kriya creates the inner space where honest self-knowing becomes possible.",
  },
];

const CONTAINER_VARIANTS = staggerContainer(STAGGER.normal, DELAYS.normal);
const CARD_VARIANTS = fadeUp(DURATIONS.standard);

export default function Benefits() {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-heading"
      className="py-24 bg-white border-t border-[#d6c9b8]/50"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-[44ch] mb-16"
        >
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[#5F7A61] font-semibold mb-4">
            Why practice
          </p>
          <h2
            id="benefits-heading"
            className="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[#1F2A44]"
          >
            What the practice
            <br />
            <span className="text-[#5F7A61]">opens within you</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.ul
          role="list"
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {BENEFITS.map(({ icon, title, body }) => (
            <motion.li
              key={title}
              variants={CARD_VARIANTS}
              className="group flex flex-col gap-5 rounded-2xl border border-[#d6c9b8]/60 bg-[#F7F5F2]/60 p-7 transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(31,42,68,0.07)]"
            >
              {/* Icon bubble */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#5F7A61]/10 text-[#5F7A61] transition-colors duration-300 group-hover:bg-[#5F7A61]/18"
                aria-hidden="true"
              >
                {icon}
              </div>

              <div>
                <h3 className="text-[1rem] font-semibold text-[#1F2A44] mb-2">
                  {title}
                </h3>
                <p className="text-[0.9rem] leading-[1.78] text-[#7A7A7A]">
                  {body}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Bottom pull-quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 border-l-2 border-[#5F7A61]/40 pl-5 max-w-[50ch]"
        >
          <p className="text-[1rem] leading-[1.8] text-[#7A7A7A] italic font-light">
            "These are not promises — they are natural unfoldings that arise
            when we stop resisting our own stillness."
          </p>
          <footer className="mt-2 text-[0.75rem] uppercase tracking-[0.14em] text-[#5F7A61] font-semibold not-italic">
            From the teachings
          </footer>
        </motion.blockquote>

      </div>
    </section>
  );
}
