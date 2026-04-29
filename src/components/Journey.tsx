"use client";

import { motion, type Variants } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Curious",
    body: "A quiet question arises. You sense there is something beneath the surface of daily life. You begin to notice the breath.",
  },
  {
    number: "02",
    title: "Seeker",
    body: "The question deepens. You explore teachings, attend a class, and begin a gentle sitting practice. The search becomes sincere.",
  },
  {
    number: "03",
    title: "Student",
    body: "You receive initiation into the Kriya techniques. Practice becomes regular. A teacher guides you. Subtlety begins to emerge.",
  },
  {
    number: "04",
    title: "Practitioner",
    body: "The practice is no longer something you do — it is how you live. Stillness is not achieved; it is remembered, again and again.",
  },
];

const CONTAINER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const ITEM: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="py-24 bg-white border-t border-[var(--border-soft)]/50"
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
          <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--pista-green)] font-semibold mb-4">
            The path
          </p>
          <h2
            id="journey-heading"
            className="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text-heading)]"
          >
            Where are you
            <br />
            <span className="text-[var(--pista-green)]">on the journey?</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.ol
          role="list"
          variants={CONTAINER}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0"
        >
          {STEPS.map(({ number, title, body }, i) => (
            <motion.li
              key={title}
              variants={ITEM}
              className="relative flex flex-col lg:border-r lg:last:border-r-0 border-[var(--border-soft)]/50 lg:pr-8 lg:pl-8 first:pl-0 last:pr-0"
            >
              {/* Connector dot visible on large screens */}
              {i < STEPS.length - 1 && (
                <span
                  className="hidden lg:block absolute top-[1.1rem] right-0 translate-x-1/2 w-2 h-2 rounded-full bg-[var(--border-soft)] z-10"
                  aria-hidden="true"
                />
              )}

              {/* Step number */}
              <span
                className="text-[0.72rem] font-semibold tracking-[0.18em] text-[var(--pista-green)]/60 mb-5 uppercase"
                aria-hidden="true"
              >
                {number}
              </span>

              <h3 className="text-[1.05rem] font-semibold text-[var(--text-heading)] mb-3">
                {title}
              </h3>
              <p className="text-[0.88rem] leading-[1.8] text-[var(--text-muted)]">
                {body}
              </p>
            </motion.li>
          ))}
        </motion.ol>

        {/* Arrow path label — decorative, large screens only */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="hidden lg:block mt-10 text-[0.72rem] uppercase tracking-[0.2em] text-[var(--border-soft)] text-center"
          aria-hidden="true"
        >
          Curious &nbsp;→&nbsp; Seeker &nbsp;→&nbsp; Student &nbsp;→&nbsp; Practitioner
        </motion.p>

      </div>
    </section>
  );
}
