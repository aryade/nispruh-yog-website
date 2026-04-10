"use client";

import { motion, type Variants } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "My life went through complete transformation. Suddenly everything inside me started changing, slowly, effectively. With Kriya Yog and Swamiji, I learned to let go off ego, how to love unconditionally and surrender. This has been the most precious gift life has offered. Much Grateful!",
    name: "Paulina Haouami",
    context: "Entrepreneur, Helsinki, Finland",
    initial: "P",
  },
  {
    quote:
      "Kriya path changed me very deeply. Pride, desires and ego diminished. Happiness and inner peace increased. Many times, I can catch the present moment, because i don’t think too much. Kriya Yog changed everything and at the same time nothing in my life.",
    name: "Tuula-Maria Tarmo",
    context: "Project Assistant, Jyväskyla, Finland​",
    initial: "T",
  },
  {
    quote:
      "Kriya Yog under the guidance of true Guru is THE key to a happy life. Make no mistake about it. You can keep chasing happiness from external things, never really finding it or you can delve deep with Kriya and find well of bliss.",
    name: "Kamer Surmeli",
    context: "Student, Finland",
    initial: "K",
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
