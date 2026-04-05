"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

/* ── shared animation variants ───────────────────────────────────── */
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
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

/* ── data ─────────────────────────────────────────────────────────── */
const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Breath as the vehicle",
    body: "Kriya Yoga begins with pranayama — conscious, rhythmic breathing that links the mind to the subtle currents of life-force (prana) running through the spine. The breath is not a metaphor; it is the actual mechanism.",
  },
  {
    step: "02",
    title: "Awareness without force",
    body: "The practice asks you to observe — not to control, suppress, or achieve. As you hold steady attention on the breath and the spine, the mind begins to settle of its own accord, like sediment sinking in still water.",
  },
  {
    step: "03",
    title: "Repetition builds depth",
    body: "A single session offers rest. A month of daily practice opens subtlety. A year changes the texture of ordinary experience. Kriya Yoga is cumulative — each sitting adds to what came before.",
  },
  {
    step: "04",
    title: "Transmission through lineage",
    body: "The full techniques are traditionally received from a qualified teacher in an unbroken lineage. This is not gatekeeping — it is recognition that certain inner processes are most safely guided by one who has walked them.",
  },
];

const BENEFITS = [
  { title: "Inner peace", body: "A baseline of calm that persists beyond the cushion." },
  { title: "Mental clarity", body: "Pranayama clears the fog that accumulates from constant stimulation." },
  { title: "Emotional balance", body: "Reactive patterns soften; equanimity naturally deepens." },
  { title: "Better focus", body: "Single-pointed inner concentration carries into daily life." },
  { title: "Stress reduction", body: "The slow breath activates the body's parasympathetic response." },
  { title: "Self-awareness", body: "Witnessing the mind without judgment — the first step of wisdom." },
];

/* ── component ────────────────────────────────────────────────────── */
export default function AboutKriyaYogaPage() {
  return (
    <div className="bg-[var(--bg-primary)]">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="about-hero-heading"
        className="relative pt-20 pb-24 overflow-hidden"
      >
        {/* Background radial washes */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-24 -left-24 w-[55vw] h-[55vw] max-w-[640px] rounded-full opacity-40"
            style={{ background: "radial-gradient(circle, rgba(95,122,97,0.18) 0%, transparent 68%)" }} />
          <div className="absolute top-0 right-0 w-[35vw] h-[35vw] max-w-[460px] rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, rgba(214,167,94,0.2) 0%, transparent 65%)" }} />
        </div>

        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <motion.div
            variants={STAGGER}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={FADE_UP}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--bg-accent)] font-semibold mb-6">
              The science of inner awakening
            </motion.p>
            <motion.h1
              id="about-hero-heading"
              variants={FADE_UP}
              className="text-[clamp(2.2rem,5vw,3.4rem)] font-semibold leading-[1.12] tracking-tight text-[var(--text-heading)] mb-7"
            >
              About
              <br />
              <span className="text-[var(--bg-accent)]">Kriya Yoga</span>
            </motion.h1>
            <motion.p variants={FADE_UP}
              className="text-[1.05rem] leading-[1.85] text-[#5a5a5a] max-w-[52ch]">
              An ancient meditative science transmitted through an unbroken lineage
              of masters. Not a belief system — an experiential path of breath,
              awareness, and self-inquiry that reveals the stillness already
              present within you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── What is Kriya Yoga ────────────────────────────────────── */}
      <section
        id="what-is"
        aria-labelledby="what-is-heading"
        className="py-24 bg-white border-t border-[var(--border-soft)]/50"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Text */}
            <motion.div
              variants={STAGGER}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              <motion.p variants={FADE_UP}
                className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--bg-accent)] font-semibold mb-5">
                The foundation
              </motion.p>
              <motion.h2
                id="what-is-heading"
                variants={FADE_UP}
                className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text-heading)] mb-8"
              >
                What is Kriya Yoga?
              </motion.h2>
              {[
                'The word Kriya means \u201caction with awareness.\u201d Kriya Yoga is a precise set of inner techniques \u2014 primarily breath-based \u2014 that work directly with the spine and the life-force to still the mind and awaken self-awareness.',
                "Unlike philosophy or belief, Kriya is entirely practical. It asks no faith in doctrine, only a willingness to sit quietly, breathe consciously, and observe honestly. The transformation that follows is the natural consequence of the practice itself.",
                "Carried through the lineage of Mahavatar Babaji, Lahiri Mahasaya, Sri Yukteswar Giri, and Paramahansa Yogananda, these teachings have guided sincere seekers for centuries. They remain as alive today as they were in the Himalayan solitude where they were first transmitted.",
              ].map((para, i) => (
                <motion.p key={i} variants={FADE_UP}
                  className="text-[1rem] leading-[1.85] text-[#5a5a5a] mb-5 last:mb-0">
                  {para}
                </motion.p>
              ))}
            </motion.div>

            {/* Image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as const }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-[2rem] border border-[var(--bg-accent)]/10 pointer-events-none" aria-hidden="true" />
              <div
                role="img"
                aria-label="Kriya Yoga meditation — image coming soon"
                className="relative overflow-hidden rounded-[1.5rem] aspect-square bg-gradient-to-br from-[#e8e4dc] via-[#ddd8cf] to-[#cec8be] flex flex-col items-center justify-center gap-3"
              >
                <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
                  style={{ background: "radial-gradient(ellipse at 35% 30%, rgba(95,122,97,0.16) 0%, transparent 60%)" }} />
                <span className="text-[4rem] text-[var(--bg-accent)]/25 leading-none select-none" aria-hidden="true">꩜</span>
                <p className="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--text-muted)]/50 font-medium">Image placeholder</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── How it Works ─────────────────────────────────────────── */}
      <section
        id="how-it-works"
        aria-labelledby="how-heading"
        className="py-24 bg-[var(--bg-primary)] border-t border-[var(--border-soft)]/50"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-[44ch] mb-16"
          >
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--bg-accent)] font-semibold mb-4">
              The mechanism
            </p>
            <h2
              id="how-heading"
              className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text-heading)]"
            >
              How Kriya Yoga
              <br />
              <span className="text-[var(--bg-accent)]">actually works</span>
            </h2>
          </motion.div>

          <motion.ol
            role="list"
            variants={STAGGER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {HOW_IT_WORKS.map(({ step, title, body }) => (
              <motion.li
                key={step}
                variants={FADE_UP}
                className="flex gap-6"
              >
                <span
                  className="text-[0.72rem] font-semibold tracking-[0.16em] text-[var(--bg-accent)]/50 uppercase pt-1 shrink-0"
                  aria-hidden="true"
                >
                  {step}
                </span>
                <div>
                  <h3 className="text-[1rem] font-semibold text-[var(--text-heading)] mb-3">{title}</h3>
                  <p className="text-[0.92rem] leading-[1.82] text-[var(--text-muted)]">{body}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>

        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────── */}
      <section
        id="benefits"
        aria-labelledby="benefits-about-heading"
        className="py-24 bg-white border-t border-[var(--border-soft)]/50"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-[44ch] mb-16"
          >
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--bg-accent)] font-semibold mb-4">
              Natural unfoldings
            </p>
            <h2
              id="benefits-about-heading"
              className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text-heading)]"
            >
              What opens
              <br />
              <span className="text-[var(--bg-accent)]">through practice</span>
            </h2>
          </motion.div>

          <motion.ul
            role="list"
            variants={STAGGER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {BENEFITS.map(({ title, body }) => (
              <motion.li
                key={title}
                variants={FADE_UP}
                className="rounded-2xl border border-[var(--border-soft)]/60 bg-[var(--bg-primary)]/70 p-7"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--bg-accent)] mb-5" aria-hidden="true" />
                <h3 className="text-[0.95rem] font-semibold text-[var(--text-heading)] mb-2">{title}</h3>
                <p className="text-[0.88rem] leading-[1.78] text-[var(--text-muted)]">{body}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-14 border-l-2 border-[var(--bg-accent)]/35 pl-5 max-w-[48ch] not-italic"
          >
            <p className="text-[0.95rem] leading-[1.8] text-[var(--text-muted)] italic font-light">
              "These are not promises to be sold — they are natural movements
              that arise when we stop resisting our own depth."
            </p>
            <footer className="mt-2 text-[0.72rem] uppercase tracking-[0.14em] text-[var(--bg-accent)] font-semibold not-italic">
              From the teachings
            </footer>
          </motion.blockquote>

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section
        id="begin"
        aria-labelledby="about-cta-heading"
        className="py-24 bg-[var(--text-heading)] border-t border-white/[0.06]"
      >
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">

          <motion.div
            variants={STAGGER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p variants={FADE_UP}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--bg-accent)] font-semibold mb-6">
              Ready to begin?
            </motion.p>

            <motion.h2
              id="about-cta-heading"
              variants={FADE_UP}
              className="text-[clamp(1.8rem,4vw,2.8rem)] font-semibold leading-[1.15] tracking-tight text-white mb-7"
            >
              The path is open.
              <br />
              <span className="text-[#8ea890]">Come as you are.</span>
            </motion.h2>

            <motion.p variants={FADE_UP}
              className="text-[1rem] leading-[1.85] text-white/60 max-w-[40ch] mx-auto mb-12">
              You do not need to be ready. You do not need to have meditated
              before. You only need to be sincere.
            </motion.p>

            <motion.div variants={FADE_UP}
              className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/courses-programs"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[var(--bg-accent)] text-white text-[0.9rem] font-medium tracking-wide hover:bg-[#4e6851] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bg-accent)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--text-heading)] group"
              >
                Explore programs
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"
                  strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-6 py-4 rounded-full text-[0.88rem] font-medium text-white/50 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
              >
                Ask a question first
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
