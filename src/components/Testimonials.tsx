"use client";

import { motion, type Variants } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "I used to search everywhere — books, teachers, retreats across the world. The answer was always closer than I thought. Kriya brought me back to the breath, and in the breath I found the stillness I had been chasing.",
    name: "Ashoke R.",
    context: "Student · 3 years of practice",
    initial: "A",
  },
  {
    quote:
      "The pace here is unlike anything else I have encountered. No performance, no pressure to 'achieve' a state. Just quiet, consistent guidance — and a gradual, undeniable shift in how I meet each day.",
    name: "Lila M.",
    context: "Practitioner · Kriya Yoga Course",
    initial: "L",
  },
  {
    quote:
      "I came as a complete skeptic. I stayed because the practice simply works. Six months in, my mind is quieter, my reactions slower, my sense of self steadier. I cannot explain it — I can only recommend it.",
    name: "Devraj S.",
    context: "Practitioner · Retreat participant",
    initial: "D",
  },
];

const CONTAINER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const CARD: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-24 bg-[var(--text-heading)] border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-[40ch] mb-16"
        >
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--bg-accent)] font-semibold mb-4">
            From the community
          </p>
          <h2
            id="testimonials-heading"
            className="text-[clamp(1.8rem,4vw,2.4rem)] font-semibold leading-[1.15] tracking-tight text-white"
          >
            Words from those
            <br />
            <span className="text-[#8ea890]">who have walked it</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.ul
          role="list"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map(({ quote, name, context, initial }) => (
            <motion.li
              key={name}
              variants={CARD}
              className="flex flex-col rounded-2xl bg-white/[0.05] border border-white/[0.08] p-8 backdrop-blur-sm"
            >
              {/* Large open-quote mark */}
              <span
                className="block text-[3.5rem] leading-none text-[var(--bg-accent)]/40 font-serif mb-2 select-none"
                aria-hidden="true"
              >
                "
              </span>

              {/* Quote text */}
              <blockquote className="flex-1 border-0 p-0 m-0 not-italic">
                <p className="text-[0.95rem] leading-[1.85] text-white/75 font-light">
                  {quote}
                </p>
              </blockquote>

              {/* Divider */}
              <div className="h-px bg-white/10 my-7" aria-hidden="true" />

              {/* Attribution */}
              <footer className="flex items-center gap-3 not-italic">
                {/* Avatar initial */}
                <div
                  className="w-9 h-9 rounded-full bg-[var(--bg-accent)]/25 flex items-center justify-center text-[0.8rem] font-semibold text-[#8ea890] shrink-0"
                  aria-hidden="true"
                >
                  {initial}
                </div>
                <div>
                  <p className="text-[0.88rem] font-medium text-white/90 leading-tight">
                    {name}
                  </p>
                  <p className="text-[0.75rem] text-white/40 mt-0.5 leading-tight">
                    {context}
                  </p>
                </div>
              </footer>
            </motion.li>
          ))}
        </motion.ul>

      </div>
    </section>
  );
}
