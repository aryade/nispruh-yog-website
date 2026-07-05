"use client";

import { useState, useCallback } from "react";
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
    duration: "8 min",
    type: "Breathing Exercise",
    title: "Anulom Vilom — Alternate Nostril Breathing",
    description:
      "A gentle alternating breath technique that balances the left and right energy channels. Calms the nervous system, clears mental blocks, and prepares the mind for meditation.",
    steps: ["Sit upright with spine straight and shoulders relaxed", "Close right nostril gently with right thumb", "Inhale slowly through left nostril for 4 counts", "Close left nostril with ring finger, release right nostril", "Exhale through right nostril for 4 counts", "Inhale through right nostril for 4 counts", "Alternate for 5-10 minutes without forcing"],
    href: "/practices/anulom-vilom",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M8 14 C8 8 20 8 20 14 C20 20 8 20 8 14Z" />
        <path d="M14 8v12" />
      </svg>
    ),
  },
  {
    level: "Beginner",
    duration: "5 min",
    type: "Breathing Exercise",
    title: "Bhramari — Bee Breath",
    description:
      "A soothing humming breath that resonates through the body, quieting scattered thoughts. Effective for anxiety, stress relief, and awakening inner peace.",
    steps: ["Sit in a comfortable, upright position", "Inhale deeply through both nostrils", "On exhale, make a gentle humming sound (like a bee)", "Feel the vibration in the head, chest, and body", "Keep lips sealed while humming", "Practice 5-10 rounds, focusing on the resonance"],
    href: "/practices/bhramari",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M6 14 Q10 8 14 14 Q18 20 22 14" />
        <circle cx="14" cy="14" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    level: "Beginner",
    duration: "3 min",
    type: "Breathing Exercise",
    title: "Bhastrika — Bellows Breath",
    description:
      "A powerful, rhythmic breathing technique that energizes the body and clears stagnant energy. Builds heat, increases oxygen flow, and strengthens the lungs.",
    steps: ["Sit upright with spine straight", "Take a deep breath in through both nostrils", "Exhale forcefully through both nostrils like bellows", "Let the inhale happen naturally as a reaction", "Continue this forceful rhythm for 20-30 breaths", "Rest and breathe naturally, noticing the energy surge"],
    href: "/practices/bhastrika",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M7 20 L14 6 L21 20" />
        <path d="M10 15 h8" />
      </svg>
    ),
  },
  {
    level: "Beginner",
    duration: "7 min",
    type: "Breathing Exercise",
    title: "Nadi Shodhana — Channel Purification",
    description:
      "An alternate nostril breathing practice that purifies the subtle energy channels and balances left and right hemispheres of the brain. Deeply calming and clarifying.",
    steps: ["Sit with spine straight and right hand in Vishnu mudra (index and middle fingers folded)", "Close right nostril with right thumb", "Inhale through left nostril for 4 counts", "Close left nostril, open right nostril", "Exhale through right nostril for 4 counts", "Inhale through right nostril for 4 counts", "Complete 10-15 full cycles slowly and mindfully"],
    href: "/practices/nadi-shodhana-beginner",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M8 10h12M8 14h12M8 18h12" />
      </svg>
    ),
  },
  {
    level: "Beginner",
    duration: "12 min",
    type: "Yoga",
    title: "Gentle Hatha Yoga — Beginner Asanas",
    description:
      "Basic yoga postures that prepare the body for pranayama and meditation. Improves flexibility, strengthens the spine, and calms the nervous system.",
    steps: ["Start in Tadasana (Mountain pose) — feet together, arms at sides", "Move into Uttanasana (Forward fold) — fold from hips, letting head hang", "Step back to Chaturanga (Low plank) or knees-down variation", "Flow into Bhujangasana (Cobra pose) — chest forward, elbows bent", "Return to Downward Dog — hold for 5 breaths", "Move to Balasana (Child's pose) — rest forehead on ground", "Complete 3-5 gentle cycles at a slow, meditative pace"],
    href: "/practices/hatha-yoga-beginner",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <path d="M14 4v20M8 8l6-4 6 4M8 20l6 4 6-4" />
      </svg>
    ),
  },
  {
    level: "Beginner",
    duration: "6 min",
    type: "Practice",
    title: "Kriya Adana — Energy Drawing",
    description:
      "A foundational technique that draws life force energy through the body using breath and gentle internal movements. Prepares the nervous system for deeper Kriya practices.",
    steps: ["Sit upright with spine straight and hands on thighs", "Breathe in slowly while visualizing energy rising from the base of spine", "Lift the energy to the heart center on the inhale", "Hold the breath briefly, feeling the energy settle", "Exhale slowly while visualizing energy returning downward", "Repeat 10-15 times, synchronizing breath with internal movement", "Rest and feel the subtle energy circulation in your body"],
    href: "/practices/kriya-adana",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <circle cx="14" cy="14" r="10" />
        <path d="M14 7v10M10 14h8" />
      </svg>
    ),
  },
  {
    level: "Beginner",
    duration: "10 min",
    type: "Mantra",
    title: "Mantra Chanting — Sacred Sound Meditation",
    description:
      "Repetition of sacred mantras that attune the mind to higher frequencies. Builds concentration, purifies thought patterns, and connects to spiritual tradition.",
    steps: ["Sit in a comfortable, upright position", "Choose a mantra: 'Om', 'So Hum', or 'Om Namah Shivaya'", "Begin chanting aloud slowly, feeling the vibration in the body", "Let your voice find a natural rhythm and pitch", "Continue for 5-10 minutes, gradually internalizing the sound", "End with 3 deep breaths and observe the inner silence", "Feel the lingering vibration and peace in your being"],
    href: "/practices/mantra-chanting",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
        <circle cx="14" cy="14" r="8" />
        <path d="M10 14a4 4 0 1 0 8 0" />
        <circle cx="14" cy="10" r="1" fill="currentColor" />
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
    title: "HanSa Mantra Meditation",
    description:
      "The reverse breath sound: Ha on the exhale, Sa on the inhale. This advanced practice draws energy downward and inward, deepening meditation and awakening inner wisdom.",
    steps: ["Sit in a steady, upright posture with spine straight", "Breathe naturally and inwardly hear \u2018Ha\u2019 on each exhale, feeling energy descend", "Hear \u2018Sa\u2019 on each inhale, feeling energy rise subtly", "Synchronize the mantra with the natural breath rhythm", "Gradually deepen the internalization of the sound", "Continue for 25\u201330 minutes, allowing the meditation to become effortless"],
    href: "/practices/hansa",
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
  Beginner: "var(--pista-green)",
  Intermediate: "var(--pista-green)",
  Advanced: "var(--text-heading)",
};

/* ── component ────────────────────────────────────────────────────── */
export default function PracticesClient() {
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const handleLevelChange = useCallback((level: string) => {
    setSelectedLevel(level);
  }, []);

  const filteredPractices = selectedLevel === "All"
    ? PRACTICES
    : PRACTICES.filter(p => p.level === selectedLevel);

  return (
    <div className="bg-[var(--bg-primary)]">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="practices-heading"
        className="relative pt-20 pb-20 overflow-hidden border-b border-[var(--border-soft)]/50"
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
              className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--pista-green)] font-semibold mb-6">
              Step-by-step guides
            </motion.p>
            <motion.h1
              id="practices-heading"
              variants={FADE_UP}
              className="text-[clamp(2.2rem,5vw,3.2rem)] font-semibold leading-[1.12] tracking-tight text-[var(--text-heading)] mb-6"
            >
              Practices
            </motion.h1>
            <motion.p variants={FADE_UP}
              className="text-[1.02rem] leading-[1.85] text-[var(--text-muted)] max-w-[46ch]">
              A small, sincere daily gesture is worth more than a strained
              hour once a week. Begin where you are. Practise without pressure.
              Return without guilt.
            </motion.p>

            {/* Level legend */}
            <motion.div variants={FADE_UP} className="flex flex-wrap gap-4 mt-8">
              {Object.entries(LEVEL_COLOUR).map(([level, color]) => (
                <span key={level} className="flex items-center gap-2 text-[0.78rem] text-[var(--text-muted)]">
                  <span className="w-2 h-2 rounded-full inline-block" style={{ background: color }} aria-hidden="true" />
                  {level}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Level filter ───────────────────────────────────────── */}
      <div className="sticky top-16 z-30 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-soft)]/50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <nav aria-label="Filter practices by level" className="flex gap-1.5 overflow-x-auto py-4 scrollbar-none">
            {LEVELS.map((lvl) => (
              <button
                key={`level-${lvl}`}
                type="button"
                data-level={lvl}
                onClick={(e) => {
                  const level = (e.currentTarget as HTMLButtonElement).getAttribute('data-level') || 'All';
                  console.log('Button clicked, setting level to:', level);
                  setSelectedLevel(level);
                }}
                className={`shrink-0 px-4 py-1.5 rounded-full text-[0.78rem] font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pista-green)]/50 ${
                  selectedLevel === lvl
                    ? "bg-[var(--pista-green)] text-white"
                    : "text-[var(--text-muted)] hover:text-[var(--text-heading)] border border-[var(--border-soft)]/80 hover:border-[var(--pista-green)]/40"
                }`}
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
          <motion.div
            variants={STAGGER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-col gap-5"
          >
            {/* Intermediate note - show only when needed */}
            {filteredPractices.some(p => p.level === "Intermediate") && selectedLevel !== "Beginner" && (
              <motion.div
                variants={FADE_UP}
                className="p-5 sm:p-6 rounded-2xl border border-[var(--pista-green)]/30 bg-[var(--pista-green)]/5"
              >
                <p className="text-[0.72rem] uppercase tracking-[0.16em] text-[var(--pista-green)] font-semibold mb-3">
                  Intermediate Level
                </p>
                <p className="text-[0.95rem] leading-[1.75] text-[var(--text-muted)]">
                  Intermediate practices should be undertaken with proper instruction from Swami. These techniques require personal guidance to ensure correct practice and prevent any imbalance. Please reach out to discuss your readiness and receive personalized instruction.
                </p>
              </motion.div>
            )}

            {/* Advanced note - show only when needed */}
            {filteredPractices.some(p => p.level === "Advanced") && selectedLevel !== "Beginner" && selectedLevel !== "Intermediate" && (
              <motion.div
                variants={FADE_UP}
                className="p-5 sm:p-6 rounded-2xl border border-[var(--text-heading)]/20 bg-[var(--text-heading)]/3"
              >
                <p className="text-[0.72rem] uppercase tracking-[0.16em] text-[var(--text-heading)] font-semibold mb-3">
                  Advanced Level
                </p>
                <p className="text-[0.95rem] leading-[1.75] text-[var(--text-muted)]">
                  Advanced practices will develop progressively under Swamiji's direct instruction and guidance. These sacred techniques require consistent practice, proper foundation, and the presence of a qualified teacher. Your practice unfolds at its own pace through dedicated commitment and regular interaction with Swamiji.
                </p>
              </motion.div>
            )}

            {/* Practices list */}
            {filteredPractices.map(({ level, duration, type, title, description, steps, href, icon }) => (
              <motion.div key={title} variants={FADE_UP}>
                <Link href={href} className="block group rounded-2xl border border-[var(--border-soft)]/60 bg-white overflow-hidden hover:shadow-[0_8px_32px_rgba(31,42,68,0.07)] transition-shadow duration-300">
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
                      <span className="text-[0.72rem] text-[var(--text-muted)]/70">{type}</span>
                      <span className="text-[0.72rem] text-[var(--text-muted)]/70">&middot;</span>
                      <span className="text-[0.72rem] text-[var(--text-muted)]/70">{duration}</span>
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
                        <h2 className="text-[1.05rem] font-semibold text-[var(--text-heading)] mb-2 leading-snug">
                          {title}
                        </h2>
                        <p className="text-[0.9rem] leading-[1.78] text-[var(--text-muted)] mb-5">
                          {description}
                        </p>

                        {/* Steps */}
                        <ol className="flex flex-col gap-1.5" aria-label={`Steps for ${title}`}>
                          {steps.map((step, i) => (
                            <li key={i} className="flex items-start gap-3 text-[0.82rem] text-[var(--text-muted)]">
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
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Not yet initiated note ─────────────────────────────── */}
      <section className="py-20 bg-[#2D2A4A] dark:bg-[#25222E] border-t border-white/[0.06]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
          >
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--pista-green)] font-semibold mb-6">
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
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[var(--pista-green)] text-white text-[0.88rem] font-medium tracking-wide hover:bg-[#4e6851] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pista-green)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--text-heading)] group"
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
