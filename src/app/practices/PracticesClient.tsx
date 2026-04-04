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
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

/* ── data ─────────────────────────────────────────────────────────── */
const LEVELS = ["All", "Beginner", "Intermediate", "Advanced"];

const PRACTICES = [
  {
    level: "Beginner",
    duration: "10 min",
    type: "Breath",
    title: "Conscious Breath Awareness",
    description:
      "The foundation of all Kriya practice. Simply sit, close the eyes, and follow the natural rhythm of the breath without altering it. A quiet but profound entry point.",
    steps: ["Find a comfortable, upright seat", "Close the eyes softly", "Follow each inhale and exhale without control", "When the mind wanders, gently return"],
    href: "/practices/breath-awareness",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <circle cx="14" cy="14" r="10" />
        <path d="M14 9v5l3 3" />
      </svg>
    ),
  },
  {
    level: "Beginner",
    duration: "15 min",
    type: "Meditation",
    title: "Body Scan and Inner Stillness",
    description:
      "A guided movement of awareness through the body from feet to crown — releasing held tension and preparing the ground for deeper sitting practice.",
    steps: ["Lie flat or sit upright", "Bring awareness slowly to each part of the body", "Observe sensation without commentary", "Rest in the stillness that follows"],
    href: "/practices/body-scan",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M14 4v20M8 8l6-4 6 4M8 20l6 4 6-4" />
      </svg>
    ),
  },
  {
    level: "Beginner",
    duration: "5 min",
    type: "Daily Ritual",
    title: "Morning Intention Setting",
    description:
      "Before the day takes hold — three breaths, one intention. A micro-practice that anchors the mind in quiet purpose before the world calls.",
    steps: ["Sit before reaching for any device", "Take three long, slow breaths", "Ask inwardly: what quality do I wish to carry today?", "Let the answer arise without forcing"],
    href: "/practices/morning-intention",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <circle cx="14" cy="14" r="4" />
        <path d="M14 3v3M14 22v3M3 14h3M22 14h3M6.2 6.2l2.1 2.1M19.7 19.7l2.1 2.1M6.2 21.8l2.1-2.1M19.7 8.3l2.1-2.1" />
      </svg>
    ),
  },
  {
    level: "Intermediate",
    duration: "20 min",
    type: "Pranayama",
    title: "Nadi Shodhana — Alternate Nostril Breathing",
    description:
      "A classical pranayama that balances the solar and lunar channels of the subtle body. Deeply calming and clarifying — the gateway to more advanced Kriya techniques.",
    steps: ["Sit with the spine straight", "Use the right hand in Vishnu mudra", "Inhale left, exhale right — then reverse", "Complete 9 to 18 full rounds"],
    href: "/practices/nadi-shodhana",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M8 14 C8 8 20 8 20 14 C20 20 8 20 8 14Z" />
        <path d="M14 8v12" />
      </svg>
    ),
  },
  {
    level: "Intermediate",
    duration: "25 min",
    type: "Meditation",
    title: "Trataka — Steady Gazing",
    description:
      "Fixing the gaze on a single point — traditionally a flame — until the eyes water and the mind narrows to a single thread. An ancient concentration practice.",
    steps: ["Place a candle at eye level, arm\u2019s length away", "Gaze at the flame without blinking as long as comfortable", "Close the eyes and hold the after-image in the mind\u2019s eye", "Repeat three times, then sit in silence"],
    href: "/practices/trataka",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M14 6 C14 6 10 10 10 14 C10 18 14 22 14 22 C14 22 18 18 18 14 C18 10 14 6 14 6Z" />
        <circle cx="14" cy="14" r="2" />
      </svg>
    ),
  },
  {
    level: "Intermediate",
    duration: "30 min",
    type: "Mantra",
    title: "Soham Mantra Meditation",
    description:
      "The natural sound of the breath: So on the inhale, Ham on the exhale. This practice synchronises mantra with breath until the repetition becomes effortless and continuous.",
    steps: ["Sit in a steady, comfortable posture", "Breathe naturally and inwardly hear \u2018So\u2019 on each inhale", "Hear \u2018Ham\u2019 on each exhale", "Continue for 20\u201330 minutes without force"],
    href: "/practices/soham",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M6 14 Q10 8 14 14 Q18 20 22 14" />
        <circle cx="14" cy="14" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    level: "Advanced",
    duration: "45 min",
    type: "Kriya",
    title: "Spinal Breath — The First Kriya",
    description:
      "The foundational Kriya technique: a precise movement of breath and awareness up and down the spine through the six centres (chakras). Traditionally received in person from a qualified teacher.",
    steps: ["Received through initiation — not self-taught", "Practised after basic pranayama is stable", "Done in silent, early morning conditions", "Combined with mahamudra and meditation"],
    href: "/practices/spinal-breath",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M14 4v20" strokeWidth="1.6" />
        <circle cx="14" cy="7" r="2" />
        <circle cx="14" cy="12" r="2" />
        <circle cx="14" cy="17" r="2" />
        <circle cx="14" cy="22" r="2" />
        <path d="M10 7h-3M18 7h3M10 12h-4M18 12h4M10 17h-3M18 17h3" />
      </svg>
    ),
  },
  {
    level: "Advanced",
    duration: "60 min",
    type: "Kriya",
    title: "Mahamudra — The Great Gesture",
    description:
      "A powerful preparatory practice combining physical posture, breath retention, and inner focus. It awakens the energy of the spine before the Kriyas proper.",
    steps: ["Traditionally practised before the Kriyas", "Involves forward fold with specific mudra and kumbhaka", "Held for measured counts on each side", "Detailed instruction given by the teacher"],
    href: "/practices/mahamudra",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M7 20 L14 6 L21 20" />
        <path d="M10 15 h8" />
        <path d="M14 6 v3" />
      </svg>
    ),
  },
];

const LEVEL_COLOUR: Record<string, string> = {
  Beginner: "#5F7A61",
  Intermediate: "#D6A75E",
  Advanced: "#1F2A44",
};

/* ── component ────────────────────────────────────────────────────── */
export default function PracticesClient() {
  return (
    <div className="bg-[#F7F5F2]">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="practices-heading"
        className="relative pt-20 pb-20 overflow-hidden border-b border-[#d6c9b8]/50"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-24 -right-16 w-[48vw] h-[48vw] max-w-[580px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(95,122,97,0.18) 0%, transparent 68%)" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            variants={STAGGER}
            initial="hidden"
            animate="show"
            className="max-w-[54ch]"
          >
            <motion.p variants={FADE_UP}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-[#5F7A61] font-semibold mb-6">
              Step-by-step guides
            </motion.p>
            <motion.h1
              id="practices-heading"
              variants={FADE_UP}
              className="text-[clamp(2.2rem,5vw,3.2rem)] font-semibold leading-[1.12] tracking-tight text-[#1F2A44] mb-6"
            >
              Practices
            </motion.h1>
            <motion.p variants={FADE_UP}
              className="text-[1.02rem] leading-[1.85] text-[#7A7A7A] max-w-[46ch]">
              A small, sincere daily gesture is worth more than a strained
              hour once a week. Begin where you are. Practise without pressure.
              Return without guilt.
            </motion.p>

            {/* Level legend */}
            <motion.div variants={FADE_UP} className="flex flex-wrap gap-4 mt-8">
              {Object.entries(LEVEL_COLOUR).map(([level, color]) => (
                <span key={level} className="flex items-center gap-2 text-[0.78rem] text-[#7A7A7A]">
                  <span className="w-2 h-2 rounded-full inline-block" style={{ background: color }} aria-hidden="true" />
                  {level}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Level filter ───────────────────────────────────────── */}
      <div className="sticky top-16 z-30 bg-[#F7F5F2]/90 backdrop-blur-md border-b border-[#d6c9b8]/50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <nav aria-label="Filter practices by level" className="flex gap-1.5 overflow-x-auto py-4 scrollbar-none">
            {LEVELS.map((lvl, i) => (
              <button
                key={lvl}
                className={[
                  "shrink-0 px-4 py-1.5 rounded-full text-[0.78rem] font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61]/50",
                  i === 0
                    ? "bg-[#5F7A61] text-white"
                    : "text-[#7A7A7A] hover:text-[#1F2A44] border border-[#d6c9b8]/80 hover:border-[#5F7A61]/40",
                ].join(" ")}
              >
                {lvl}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Practices list ─────────────────────────────────────── */}
      <section aria-label="Practice guides" className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.ul
            role="list"
            variants={STAGGER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-col gap-5"
          >
            {PRACTICES.map(({ level, duration, type, title, description, steps, href, icon }) => (
              <motion.li key={title} variants={FADE_UP}>
                <div className="group grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-0 rounded-2xl border border-[#d6c9b8]/60 bg-white overflow-hidden hover:shadow-[0_8px_32px_rgba(31,42,68,0.07)] transition-shadow duration-300">

                  <div className="p-7 sm:p-8">
                    {/* Meta row */}
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      {/* Level pill */}
                      <span
                        className="text-[0.65rem] uppercase tracking-[0.16em] font-semibold px-2.5 py-1 rounded-full"
                        style={{ color: LEVEL_COLOUR[level], background: `${LEVEL_COLOUR[level]}14` }}
                      >
                        {level}
                      </span>
                      <span className="text-[0.72rem] text-[#7A7A7A]/70">{type}</span>
                      <span className="text-[0.72rem] text-[#7A7A7A]/70">&middot;</span>
                      <span className="text-[0.72rem] text-[#7A7A7A]/70">{duration}</span>
                    </div>

                    <div className="flex items-start gap-5">
                      {/* Icon */}
                      <div
                        className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mt-0.5"
                        style={{ background: `${LEVEL_COLOUR[level]}12`, color: LEVEL_COLOUR[level] }}
                        aria-hidden="true"
                      >
                        {icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h2 className="text-[1.05rem] font-semibold text-[#1F2A44] mb-2 leading-snug">
                          {title}
                        </h2>
                        <p className="text-[0.9rem] leading-[1.78] text-[#7A7A7A] mb-5">
                          {description}
                        </p>

                        {/* Steps */}
                        <ol className="flex flex-col gap-1.5" aria-label={`Steps for ${title}`}>
                          {steps.map((step, i) => (
                            <li key={i} className="flex items-start gap-3 text-[0.82rem] text-[#7A7A7A]">
                              <span
                                className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[0.62rem] font-semibold mt-0.5"
                                style={{ background: `${LEVEL_COLOUR[level]}14`, color: LEVEL_COLOUR[level] }}
                                aria-hidden="true"
                              >
                                {i + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>

                  {/* Right CTA column */}
                  <div className="flex items-center justify-center lg:justify-end lg:border-l border-t lg:border-t-0 border-[#d6c9b8]/40 px-7 py-5 lg:py-0 lg:w-48">
                    <Link
                      href={href}
                      className="inline-flex items-center gap-2 text-[0.82rem] font-medium rounded-full px-5 py-2.5 border border-[#d6c9b8] text-[#1F2A44] hover:bg-[#1F2A44] hover:text-white hover:border-[#1F2A44] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F2A44]/40 group/link"
                    >
                      Full guide
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"
                        strokeLinecap="round" strokeLinejoin="round"
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5"
                        aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── Not yet initiated note ─────────────────────────────── */}
      <section className="py-20 bg-[#1F2A44] border-t border-white/[0.06]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
          >
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[#5F7A61] font-semibold mb-6">
              A gentle note
            </p>
            <p className="text-[1rem] leading-[1.85] text-white/65 max-w-[46ch] mx-auto mb-10">
              The advanced Kriya techniques — spinal breath, mahamudra, and
              the higher kriyas — are traditionally transmitted by a teacher,
              not learned from a screen. The guides here are orientation, not
              initiation. When you are ready, reach out.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#5F7A61] text-white text-[0.88rem] font-medium tracking-wide hover:bg-[#4e6851] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F7A61]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F2A44] group"
            >
              Ask about initiation
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
