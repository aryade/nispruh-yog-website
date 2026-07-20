"use client";

import Link from "next/link";
import Image from "next/image";
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
    body: "Kriyayog begins with pranayama — conscious, rhythmic breathing that links the mind to the subtle currents of life-force (prana) running through the spine. The breath is not a metaphor; it is the actual mechanism.",
  },
  {
    step: "02",
    title: "Awareness without force",
    body: "The practice asks you to observe — not to control, suppress, or achieve. As you hold steady attention on the breath and the spine, the mind begins to settle of its own accord, like sediment sinking in still water.",
  },
  {
    step: "03",
    title: "Repetition builds depth",
    body: "A single session offers rest. A month of daily practice opens subtlety. A year changes the texture of ordinary experience. Kriyayog is cumulative — each sitting adds to what came before.",
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

const GURU_PARAMPARA = [
  {
    name: "Krishna Parampara",
    subsections: [
      {
        title: "Krishna Parampara",
        content: "Lord Krishna is the incarnation of Lord Vishnu and the central character in the Mahabharata. His teachings are codified in 700 verses as the Bhagavad Gita. Lord Krishna taught the science of Kriyayog to Arjuna thousands of years ago.\n\n\"Yada yada hi dharmasya glanirbhavati bharata.\nAbhythanamadharmasya tadatmanam srijamyaham.\nParitranaya sadhunang vinashay cha dushkritam.\nDharmasangsthapanarthay sambhabami yuge yuge – Shrimad Bhagavadgeeta.\"",
      },
      {
        title: "Krishna – Kriyayog",
        content: "Krishna explains Kriyayog as the practice of purifying the physiological, mental and spiritual systems — a Yog of Awareness. \"Kri\" means karma or action and \"ya\" means soul — the action of the soul. A kriya is the action done for the soul, or which frees us from the bondage of karma by burning physical and mental impurities. Kriyayog includes Asanas, Pranayama and spirituality, but focuses more on mental and spiritual benefits. Through the breathing technique of inhaling and exhaling, a yogi balances breath and releases Prana to bring bodily systems into synchrony.",
      },
    ],
  },
  {
    name: "Mahavatar Babaji",
    subsections: [
      {
        title: "Mahavatar Babaji",
        content: "Mahavatar Babaji is the supreme Guru for all Yogis, believed to have been living in the Himalayas for hundreds of years. He is said to have been born on November 30, 203 AD in a coastal village in Tamil Nadu. Babaji revived the technique of Kriyayog for the betterment of humankind and passed it to Shri Lahiri Mahasayaji. He reportedly said that the Kriyayog he was transmitting in the 19th century was the same science Krishna gave to Arjuna millennia ago and which was later known to Patanjali and other disciples.",
      },
    ],
  },
  {
    name: "Shri Lahiri Mahasayaji",
    subsections: [
      {
        title: "Shri Lahiri Mahasayaji",
        content: "Shyama Charan Lahiri was a householder working in British Railways in Bengal. While on official duty in Ranikhet near the Himalayas, he heard a young man calling his name — who turned out to be Mahavatar Babaji. Babaji's gentle touch on his forehead awakened memories of previous incarnations. Babaji then initiated him into the sacred science of Kriyayog and later gave him permission to teach and initiate others. Shri Lahiri Mahasayaji entered Maha Samadhi in Banaras on September 26, 1985.",
      },
    ],
  },
  {
    name: "Shri Yukteswar Giriji",
    subsections: [
      {
        title: "Shri Yukteswar Giriji",
        content: "Born on May 10, 1855, in Serampore, West Bengal (birth name: Priyanath Karar), Shri Yukteswar Giriji was initiated into Kriyayog by Shri Lahiri Mahasayaji. He met Mahavatar Babaji at the Kumbha Mela in Allahabad in 1894 and at Babaji's request wrote a book called Kaivalya Darsanam. His most famous disciple was Paramahansa Swami Shri Yoganandaji, who later carried Kriyayog to the West. He attained Mahasamadhi on March 9, 1935.",
      },
    ],
  },
  {
    name: "Shri Sathyananda Giriji",
    subsections: [
      {
        title: "Shri Sathyananda Giriji",
        content: "Born on November 17, 1896, in Bengal, Shri Sathyananda Giriji was trained by Swami Shri Yukteswar Giriji at his Puri Karar Ashram in 1919 and was also a disciple of Paramahansa Swami Shri Yoganandaji. He lived in hermitages at Puri and Ranchi and had thousands of devotees. He attained Nirvana on August 2, 1971 at the age of 74.",
      },
    ],
  },
  {
    name: "Pahadi Baba (Shri Hariharanandji)",
    subsections: [
      {
        title: "Pahadi Baba (Shri Hariharanandji)",
        content: "Shri Hariharanandji was a Tantra Samrat and Kriyayogi who lived in a cave on the hills (\"Pahadi\" in Hindi) and so was called \"Pahadi Baba.\" He was an enlightened yogi (Sidhha Purush) knowledgeable in many sadhanas. Shri Madan Mohan Sahayji met him while passing by those hills, kept visiting and was later initiated by Pahadi Baba into Kriyayog.",
      },
    ],
  },
  {
    name: "Shri Madan Mohan Sahayji",
    subsections: [
      {
        title: "Shri Madan Mohan Sahayji",
        content: "Shri Madan Mohan Sahayji was a family man who retired as a Divisional Manager from LIC in 1989. After meeting Pahadi Baba, his life turned toward spirituality. Pahadi Baba tested and transformed him through various trials, turning his materialistic habits into spiritual ones. He later became the Guru of Paramahamsa Swami Shri Nispruh Spandanji and gave Swamiji his current name — Paramahamsa Swami Shri Nispruh Spandanji.",
      },
    ],
  },
  {
    name: "Tauji – Shri Banarasilal Sarafji",
    subsections: [
      {
        title: "Tauji – Shri Banarasilal Sarafji",
        content: "Shri Banarasilal Sarafji was a disciple of Shri Madan Mohan Sahayji. Swamiji met him at Guruji's Ashram and called him \"Tauji\" affectionately. Tauji loved the young and devoted Swamiji and passed on his spiritual knowledge and blessings to him.",
      },
    ],
  },
  {
    name: "Shri Aghorinath-Shobharam (Hariom Wale Babaji)",
    subsections: [
      {
        title: "Shri Aghorinath-Shobharam (Hariom Wale Babaji)",
        content: "Shri Aghorinath-Shobharam was a government servant and family man, blessed with many Siddhis by his Guru. He was the father and first Guru of Paramahamsa Swami Shri Nispruh Spandanji, training him with strict rules and discipline. Enlightened yogis and saints frequently visited their home for Satsang. At a young age, Nispruh Spandanji left home to find a Guru, stayed at many holy places including the Himalayas and Puri and eventually found Shri Madan Mohan Sahayji.",
      },
    ],
  },
  {
    name: "Paramahansa Swami Shri Yoganandaji – Autobiography of a Yogi",
    subsections: [
      {
        title: "Paramahansa Swami Shri Yoganandaji – Autobiography of a Yogi",
        content: "Born January 5, 1893, in Gorakhpur, India, Yogananda taught meditation and Kriyayog to millions in India and the USA. His book Autobiography of a Yogi sold over four million copies and was listed by HarperSan Francisco as one of the \"100 best spiritual books of the 20th Century.\" He attained Nirvana on March 7, 1952.",
      },
    ],
  },// ... rest of GURU_PARAMPARA array
];

const GURU_STATS = [
  { stat: "1200+", label: "years of Yog Parampara given by Lord Krishna" },
  { stat: "30+", label: "years of Nispruhyog's experience in Kriyayog" },
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
              className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--pista-green)] font-semibold mb-6">
              The science of inner awakening
            </motion.p>
            <motion.h1
              id="about-hero-heading"
              variants={FADE_UP}
              className="text-[clamp(2.2rem,5vw,3.4rem)] font-semibold leading-[1.12] tracking-tight text-[var(--text-heading)] mb-7"
            >
              About
              <br />
              <span className="text-[var(--pista-green)]">Kriyayog</span>
            </motion.h1>
            <motion.p variants={FADE_UP}
              className="text-[1.05rem] leading-[1.85] text-[#5a5a5a] max-w-[52ch]">
              An ancient meditative science transmitted through an unbroken lineage
              of masters. Not a belief system — an experiential path of breath,
              awareness and self-inquiry that reveals the stillness already
              present within you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── What is Kriyayog ────────────────────────────────────── */}
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
                className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--pista-green)] font-semibold mb-5">
                The foundation
              </motion.p>
              <motion.h2
                id="what-is-heading"
                variants={FADE_UP}
                className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text-heading)] mb-8"
              >
                What is Kriyayog?
              </motion.h2>
              {[
                'The word Kriya means \u201caction with awareness.\u201d Kriyayog is a precise set of inner techniques \u2014 primarily breath-based \u2014 that work directly with the spine and the life-force to still the mind and awaken self-awareness.',
                "Unlike philosophy or belief, Kriya is entirely practical. It asks no faith in doctrine, only a willingness to sit quietly, breathe consciously and observe honestly. The transformation that follows is the natural consequence of the practice itself.",
                "Carried through the lineage of Mahavatar Babaji, Shri Lahiri Mahasayaji, Shri Yukteswar Giriji and Paramahansa Swami Shri Yoganandaji, these teachings have guided sincere seekers for centuries. They remain as alive today as they were in the Himalayan solitude where they were first transmitted.",
              ].map((para, i) => (
                <motion.p key={i} variants={FADE_UP}
                  className="text-[1rem] leading-[1.85] text-[#5a5a5a] mb-5 last:mb-0">
                  {para}
                </motion.p>
              ))}
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as const }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-[2rem] border border-[var(--pista-green)]/10 pointer-events-none" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-square">
                <Image
                  src="/images/practices/kriya-meditation-about-new2.png"
                  alt="Kriyayog meditation practice"
                  fill
                  className="w-full h-full object-contain object-center"
                />
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
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--pista-green)] font-semibold mb-4">
              The mechanism
            </p>
            <h2
              id="how-heading"
              className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text-heading)]"
            >
              How Kriyayog
              <br />
              <span className="text-[var(--pista-green)]">actually works</span>
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
                  className="text-[0.72rem] font-semibold tracking-[0.16em] text-[var(--pista-green)]/50 uppercase pt-1 shrink-0"
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
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--pista-green)] font-semibold mb-4">
              Natural unfoldings
            </p>
            <h2
              id="benefits-about-heading"
              className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text-heading)]"
            >
              What opens
              <br />
              <span className="text-[var(--pista-green)]">through practice</span>
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
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--pista-green)] mb-5" aria-hidden="true" />
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
            className="mt-14 mx-auto max-w-[48ch] text-center not-italic"
          >
            <p className="text-[0.95rem] leading-[1.8] text-[var(--text-muted)] italic font-light">
              "These are not promises to be sold — they are natural movements
              that arise when we stop resisting our own depth."
            </p>
          </motion.blockquote>

        </div>
      </section>

      {/* ── Guru Parampara ───────────────────────────────────────────── */}
      <section
        id="guru-parampara"
        aria-labelledby="guru-heading"
        className="py-24 bg-[var(--bg-primary)] border-t border-[var(--border-soft)]/50"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-[48ch] mb-16"
          >
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--pista-green)] font-semibold mb-4">
              The lineage
            </p>
            <h2
              id="guru-heading"
              className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-semibold leading-[1.15] tracking-tight text-[var(--text-heading)]"
            >
              Guru Parampara
              <br />
              <span className="text-[var(--pista-green)]">An unbroken chain</span>
            </h2>
            <p className="text-[0.95rem] leading-[1.8] text-[var(--text-muted)] mt-6">
              The teachings of Kriyayog have been transmitted through an unbroken lineage of enlightened masters. Each master received the sacred techniques and passed them forward to sincere seekers, preserving the authenticity and power of this ancient science.
            </p>
          </motion.div>

          <motion.div
            variants={STAGGER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-12"
          >
            {GURU_PARAMPARA.map(({ name, subsections }, idx) => (
              <motion.div
                key={name}
                variants={FADE_UP}
                className={`rounded-2xl border border-[var(--border-soft)]/40 bg-white/40 p-8 sm:p-10 ${(idx === 0 || name === "Tauji – Shri Banarasilal Sarafji" || name === "Mahavatar Babaji" || name === "Shri Lahiri Mahasayaji" || name === "Shri Yukteswar Giriji" || name === "Shri Sathyananda Giriji" || name === "Pahadi Baba (Shri Hariharanandji)" || name === "Shri Madan Mohan Sahayji" || name === "Paramahansa Swami Shri Yoganandaji – Autobiography of a Yogi" || name === "Shri Aghorinath-Shobharam (Hariom Wale Babaji)") ? 'grid grid-cols-1 lg:grid-cols-2 gap-10 items-center' : ''}`}
              >
                {idx === 0 && (
                  <div className="relative w-72 h-96">
                    <div className="absolute -inset-3 rounded-2xl border border-[var(--pista-green)]/20 pointer-events-none" aria-hidden="true" />
                    <Image
                      src="/images/gurus/krishna_image.png"
                      alt="Lord Krishna - Avatar of Vishnu, transmitter of Kriyayog"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="relative rounded-xl shadow-lg"
                      priority
                    />
                  </div>
                )}
                {name === "Mahavatar Babaji" && (
                  <div className="relative w-72 h-96">
                    <div className="absolute -inset-3 rounded-2xl border border-[var(--pista-green)]/20 pointer-events-none" aria-hidden="true" />
                    <Image
                      src="/images/gurus/Mahaavatar_Babaji_300x400.png"
                      alt="Mahavatar Babaji - Supreme Guru of all Yogis"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="relative rounded-xl shadow-lg"
                      priority
                    />
                  </div>
                )}
                {name === "Shri Lahiri Mahasayaji" && (
                  <div className="relative w-72 h-96">
                    <div className="absolute -inset-3 rounded-2xl border border-[var(--pista-green)]/20 pointer-events-none" aria-hidden="true" />
                    <Image
                      src="/images/gurus/Lahiri_Mahashay_300x400.png"
                      alt="Shri Lahiri Mahasayaji - Transmitter of Kriyayog"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="relative rounded-xl shadow-lg"
                      priority
                    />
                  </div>
                )}
                {name === "Shri Yukteswar Giriji" && (
                  <div className="relative w-72 h-96">
                    <div className="absolute -inset-3 rounded-2xl border border-[var(--pista-green)]/20 pointer-events-none" aria-hidden="true" />
                    <Image
                      src="/images/gurus/Yukteshwar_Giri_ji_300x400.png"
                      alt="Shri Yukteswar Giriji - Guru of Paramahansa Swami Shri Yoganandaji"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="relative rounded-xl shadow-lg"
                      priority
                    />
                  </div>
                )}
                {name === "Shri Sathyananda Giriji" && (
                  <div className="relative w-72 h-96">
                    <div className="absolute -inset-3 rounded-2xl border border-[var(--pista-green)]/20 pointer-events-none" aria-hidden="true" />
                    <Image
                      src="/images/gurus/Satyanandji_300x400.png"
                      alt="Shri Sathyananda Giriji - Direct disciple of Shri Yukteswar Giriji"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="relative rounded-xl shadow-lg"
                      priority
                    />
                  </div>
                )}
                {name === "Pahadi Baba (Shri Hariharanandji)" && (
                  <div className="relative w-72 h-96">
                    <div className="absolute -inset-3 rounded-2xl border border-[var(--pista-green)]/20 pointer-events-none" aria-hidden="true" />
                    <Image
                      src="/images/gurus/PahadiBaba_Hariharanand_300x400.png"
                      alt="Pahadi Baba (Shri Hariharanandji) - Enlightened Kriyayogi"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="relative rounded-xl shadow-lg"
                      priority
                    />
                  </div>
                )}
                {name === "Shri Madan Mohan Sahayji" && (
                  <div className="relative w-72 h-96">
                    <div className="absolute -inset-3 rounded-2xl border border-[var(--pista-green)]/20 pointer-events-none" aria-hidden="true" />
                    <Image
                      src="/images/gurus/Madan_Mohanji_Sahay_300x400.png"
                      alt="Shri Madan Mohan Sahayji - Guru of Paramahamsa Swami Shri Nispruh Spandanji"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="relative rounded-xl shadow-lg"
                      priority
                    />
                  </div>
                )}
                {name === "Tauji – Shri Banarasilal Sarafji" && (
                  <div className="relative w-72 h-96">
                    <div className="absolute -inset-3 rounded-2xl border border-[var(--pista-green)]/20 pointer-events-none" aria-hidden="true" />
                    <Image
                      src="/images/gurus/Banarasilal_Saraf_BW.png"
                      alt="Shri Banarasilal Sarafji (Tauji) - Spiritual guide and mentor"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="relative rounded-xl shadow-lg"
                      priority
                    />
                  </div>
                )}
                {name === "Paramahansa Swami Shri Yoganandaji – Autobiography of a Yogi" && (
                  <div className="relative w-72 h-96">
                    <div className="absolute -inset-3 rounded-2xl border border-[var(--pista-green)]/20 pointer-events-none" aria-hidden="true" />
                    <Image
                      src="/images/gurus/Front-Cover-Autobiography-of-Yogi.png.webp"
                      alt="Autobiography of a Yogi cover"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="relative rounded-xl shadow-lg"
                      priority
                    />
                  </div>
                )}
                {name === "Shri Aghorinath-Shobharam (Hariom Wale Babaji)" && (
                  <div className="relative w-72 h-96">
                    <div className="absolute -inset-3 rounded-2xl border border-[var(--pista-green)]/20 pointer-events-none" aria-hidden="true" />
                    <Image
                      src="/images/gurus/Guru_300x400.png"
                      alt="Shri Aghorinath-Shobharam (Hariom Wale Babaji) - Father and first Guru of Paramahamsa Swami Shri Nispruh Spandanji"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="relative rounded-xl shadow-lg"
                      priority
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-[1.25rem] font-semibold text-[var(--text-heading)] mb-6">
                    {name}
                  </h3>
                  <div className="space-y-6">
                    {subsections.map(({ title, content }, subIdx) => (
                      <div key={`${name}-${subIdx}`}>
                        {subsections.length > 1 && (
                          <h4 className="text-[0.95rem] font-semibold text-[var(--pista-green)] uppercase tracking-[0.12em] mb-3">
                            {title}
                          </h4>
                        )}
                        <p className="text-[0.95rem] leading-[1.8] text-[var(--text-muted)]">
                          {content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true, margin: "-60px" }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {GURU_STATS.map(({ stat, label }) => (
              <div
                key={stat}
                className="rounded-2xl border border-[var(--border-soft)]/40 bg-white/40 p-8 text-center"
              >
                <p className="text-[clamp(2rem,5vw,3rem)] font-semibold text-[var(--pista-green)] leading-tight mb-2">
                  {stat}
                </p>
                <p className="text-[0.9rem] leading-[1.6] text-[var(--text-muted)]">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section
        id="begin"
        aria-labelledby="about-cta-heading"
        className="py-24 bg-[#2D2A4A] dark:bg-[#25222E] border-t border-white/[0.06]"
      >
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">

          <motion.div
            variants={STAGGER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p variants={FADE_UP}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--pista-green)] font-semibold mb-6">
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
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[var(--pista-green)] text-white text-[0.9rem] font-medium tracking-wide hover:bg-[#4e6851] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pista-green)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--text-heading)] group"
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
