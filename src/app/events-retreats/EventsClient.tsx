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
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

/* ── types ────────────────────────────────────────────────────────── */
type EventType = "Retreat" | "Workshop" | "Satsang" | "Day Immersion";

interface Event {
  id: string;
  type: EventType;
  title: string;
  subtitle: string;
  dateLabel: string;       // Display string e.g. "14–17 May 2026"
  dateISO: string;         // For <time datetime="">
  location: string;
  locationDetail: string;
  duration: string;
  spotsLeft: number | null;
  spotsTotal: number;
  price: string;
  description: string;
  highlights: string[];
  cta: { label: string; href: string };
  past?: boolean;
}

/* ── data ─────────────────────────────────────────────────────────── */
const TYPE_COLOUR: Record<EventType, string> = {
  Retreat:        "var(--text-heading)",
  Workshop:       "var(--pista-green)",
  Satsang:        "var(--pista-green)",
  "Day Immersion": "var(--bg-secondary)",
};

const EVENTS: Event[] = [
  {
    id: "spring-retreat-2026",
    type: "Retreat",
    title: "Spring Silent Retreat",
    subtitle: "Five days in deep stillness among the hills",
    dateLabel: "14–18 May 2026",
    dateISO: "2026-05-14/2026-05-18",
    location: "Sahyadri Hills, Maharashtra",
    locationDetail: "Residential ashram · 3 hrs from Pune",
    duration: "5 days / 4 nights",
    spotsLeft: 4,
    spotsTotal: 15,
    price: "Sliding scale · ₹12,000 – ₹24,000",
    description:
      "A five-day residential retreat in the quiet of the Western Ghats. Morning and evening Kriya sessions, meals in silence, long afternoons for walking and personal practice. The schedule is gentle; the depth is real.",
    highlights: [
      "Daily guided Kriya sessions",
      "Noble silence observed throughout",
      "Private interview with the teacher",
      "Sattvic vegetarian meals included",
      "Post-retreat integration support",
    ],
    cta: { label: "Reserve your place", href: "/contact?event=spring-retreat-2026" },
  },
  {
    id: "pranayama-workshop-may",
    type: "Workshop",
    title: "The Breath as a Map",
    subtitle: "An afternoon workshop on pranayama fundamentals",
    dateLabel: "3 May 2026",
    dateISO: "2026-05-03",
    location: "Mumbai",
    locationDetail: "Khar West studio · Exact address on booking",
    duration: "Half day · 3 hrs",
    spotsLeft: 9,
    spotsTotal: 20,
    price: "₹2,500 per person",
    description:
      "A focused afternoon on the breath — its physiology, its subtle anatomy, and the classical pranayamas of the Kriya tradition. Suitable for complete beginners and established practitioners alike.",
    highlights: [
      "Theory of prana and the nadis",
      "Nadi Shodhana and Ujjayi practice",
      "Q&A with the teacher",
      "Practice notes to take home",
    ],
    cta: { label: "Book your seat", href: "/contact?event=pranayama-workshop-may" },
  },
  {
    id: "satsang-april",
    type: "Satsang",
    title: "Monthly Satsang — April",
    subtitle: "An open evening of teaching, chanting, and silence",
    dateLabel: "26 April 2026",
    dateISO: "2026-04-26",
    location: "Online · Zoom",
    locationDetail: "Link sent on registration",
    duration: "90 minutes",
    spotsLeft: null,
    spotsTotal: 0,
    price: "Free · Dana welcome",
    description:
      "The monthly community gathering — open to all. Each satsang includes a short teaching on a classical topic, a period of collective silence, and space for questions. No prior experience needed.",
    highlights: [
      "Open to everyone",
      "Short classical teaching",
      "Guided meditation in silence",
      "Live Q&A with the teacher",
    ],
    cta: { label: "Register free", href: "/contact?event=satsang-april" },
  },
  {
    id: "day-immersion-june",
    type: "Day Immersion",
    title: "A Day of Stillness",
    subtitle: "Full-day immersion for existing students",
    dateLabel: "21 June 2026",
    dateISO: "2026-06-21",
    location: "Pune",
    locationDetail: "Aundh centre · Map on booking",
    duration: "Full day · 7 hrs",
    spotsLeft: 6,
    spotsTotal: 12,
    price: "₹4,500 per person",
    description:
      "A single-day intensive for those who have already attended the Kriya Course or established a regular practice. The day moves through pranayama, mahamudra, Kriya sitting, and periods of unstructured silence.",
    highlights: [
      "For existing students only",
      "Extended Kriya and mahamudra practice",
      "Sattvic lunch included",
      "Evening sharing circle",
    ],
    cta: { label: "Apply to attend", href: "/contact?event=day-immersion-june" },
  },
  {
    id: "monsoon-retreat-2026",
    type: "Retreat",
    title: "Monsoon Retreat — Coorg",
    subtitle: "Seven days in forest stillness during the rains",
    dateLabel: "11–17 July 2026",
    dateISO: "2026-07-11/2026-07-17",
    location: "Coorg, Karnataka",
    locationDetail: "Plantation estate · 5 hrs from Bengaluru",
    duration: "7 days / 6 nights",
    spotsLeft: 8,
    spotsTotal: 12,
    price: "Sliding scale · ₹18,000 – ₹36,000",
    description:
      "The deepest offering of the year. Seven days in a coffee plantation estate during the monsoon — a season the tradition has long associated with inward turning. Full silence, extended practice, and minimal structure.",
    highlights: [
      "Seven days of full noble silence",
      "Morning, afternoon, and evening Kriya",
      "Two private teacher interviews",
      "Monsoon nature walks and free time",
      "All meals and accommodation included",
      "Post-retreat monthly check-in call",
    ],
    cta: { label: "Express interest", href: "/contact?event=monsoon-retreat-2026" },
  },
  {
    id: "northern-finland-2025",
    type: "Retreat",
    title: "Northern Finland Cottage Trip with Swamiji",
    subtitle: "A group immersion in nature and meditation",
    dateLabel: "May 2025",
    dateISO: "2025-05",
    location: "Northern Finland",
    locationDetail: "Cottage retreat centre",
    duration: "3 days",
    spotsLeft: null,
    spotsTotal: 0,
    price: "Sliding scale",
    description:
      "A group of 20 people enjoyed nature, meditation, and Satsang with Swamiji in Northern Finland. A unique opportunity to deepen practice in the pristine Scandinavian landscape.",
    highlights: [
      "Group meditation sessions",
      "Satsang with Swamiji",
      "Nature immersion",
      "Communal meals and rest",
    ],
    cta: { label: "View photos", href: "/contact" },
    past: true,
  },
  {
    id: "vienna-2025",
    type: "Workshop",
    title: "Vienna, Austria Trip with Swamiji",
    subtitle: "A joyous journey through spring",
    dateLabel: "April 2025",
    dateISO: "2025-04",
    location: "Vienna, Austria",
    locationDetail: "City and retreat venues",
    duration: "7 days",
    spotsLeft: null,
    spotsTotal: 0,
    price: "Sliding scale",
    description:
      "A joyous trip with great spring weather, food, and sightseeing. Shared spiritual journey with fellow practitioners through one of Europe's most beautiful cities.",
    highlights: [
      "Daily practice sessions",
      "Guided city tours",
      "Local cuisine exploration",
      "Evening Satsangs",
    ],
    cta: { label: "View memories", href: "/contact" },
    past: true,
  },
  {
    id: "rishikesh-2024",
    type: "Retreat",
    title: "Rishikesh, Haridwar and Vrindavan Visit with Swamiji",
    subtitle: "An unforgettable spiritual journey",
    dateLabel: "January 2024",
    dateISO: "2024-01",
    location: "Rishikesh, Haridwar, Vrindavan",
    locationDetail: "Holy spiritual sites in India",
    duration: "10 days",
    spotsLeft: null,
    spotsTotal: 0,
    price: "Sliding scale",
    description:
      "A group of 19 people enjoyed an unforgettable spiritual journey through India's most sacred locations. Visiting ashrams, temples, and practicing in the birthplace of Yoga.",
    highlights: [
      "Daily immersive practices",
      "Temple visits and sacred rituals",
      "Ghat ceremonies",
      "Private teachings from Swamiji",
    ],
    cta: { label: "View album", href: "/contact" },
    past: true,
  },
  {
    id: "sweden-cruise-2023",
    type: "Retreat",
    title: "Sweden and Cruise Ship Experience with Swamiji",
    subtitle: "An awesome adventure with fellow practitioners",
    dateLabel: "April 2023",
    dateISO: "2023-04",
    location: "Sweden & Baltic Sea",
    locationDetail: "Stockholm and cruise experience",
    duration: "8 days",
    spotsLeft: null,
    spotsTotal: 0,
    price: "Sliding scale",
    description:
      "An awesome trip with fellow practitioners, including a life-time cruise ship experience. Combining spiritual practice with unique travel and camaraderie.",
    highlights: [
      "Morning practice sessions",
      "Stockholm exploration",
      "Unique cruise ship meditation",
      "Evening Satsangs and sharing",
    ],
    cta: { label: "View highlights", href: "/contact" },
    past: true,
  },
  {
    id: "satsang-march",
    type: "Satsang",
    title: "Monthly Satsang — March",
    subtitle: "Recording available",
    dateLabel: "29 March 2026",
    dateISO: "2026-03-29",
    location: "Online · Zoom",
    locationDetail: "Recording available to registered attendees",
    duration: "90 minutes",
    spotsLeft: null,
    spotsTotal: 0,
    price: "Free",
    description: `Topic: "The gap between thoughts — and what lives there." Recording available on request.`,
    highlights: ["Recording available", "Topic: the gap between thoughts"],
    cta: { label: "Request recording", href: "/contact?event=satsang-march" },
    past: true,
  },
];

const UPCOMING = EVENTS.filter((e) => !e.past);
const PAST     = EVENTS.filter((e) => e.past);

/* ── sub-components ───────────────────────────────────────────────── */
function SpotsBar({ left, total }: { left: number; total: number }) {
  const pct = Math.round(((total - left) / total) * 100);
  return (
    <div className="mt-1">
      <div className="h-1 w-full rounded-full bg-[var(--border-soft)]/50 overflow-hidden">
        <div
          className="h-full rounded-full bg-[var(--pista-green)]/50 transition-all duration-500"
          style={{ width: `${pct}%` }}
          aria-hidden="true"
        />
      </div>
      <p className="mt-1 text-[0.72rem] text-[var(--text-muted)]">
        {left} {left === 1 ? "place" : "places"} remaining
      </p>
    </div>
  );
}

function EventCard({ event, variants }: { event: Event; variants: Variants }) {
  const accent = TYPE_COLOUR[event.type];
  const isOpen = !event.past;

  return (
    <motion.article
      variants={variants}
      aria-labelledby={`event-${event.id}-title`}
      className={[
        "rounded-2xl border overflow-hidden transition-shadow duration-300",
        isOpen
          ? "border-[var(--border-soft)]/60 bg-white hover:shadow-[0_10px_40px_rgba(31,42,68,0.08)]"
          : "border-[var(--border-soft)]/40 bg-[var(--bg-primary)]/60 opacity-70",
      ].join(" ")}
    >
      {/* Accent stripe */}
      <div className="h-[3px]" style={{ background: accent }} aria-hidden="true" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px]">

        {/* ── Main content ─────────────────────────────────────── */}
        <div className="p-7 sm:p-8">
          {/* Type + past badge */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <span
              className="text-[0.65rem] uppercase tracking-[0.16em] font-semibold px-2.5 py-1 rounded-full"
              style={{ color: accent, background: `${accent}14` }}
            >
              {event.type}
            </span>
            {event.past && (
              <span className="text-[0.65rem] uppercase tracking-[0.16em] font-semibold px-2.5 py-1 rounded-full text-[var(--text-muted)] bg-[var(--border-soft)]/40">
                Past event
              </span>
            )}
          </div>

          <h2
            id={`event-${event.id}-title`}
            className="text-[1.1rem] font-semibold text-[var(--text-heading)] leading-snug mb-1"
          >
            {event.title}
          </h2>
          <p className="text-[0.85rem] text-[var(--text-muted)] mb-5">{event.subtitle}</p>

          <p className="text-[0.9rem] leading-[1.8] text-[#5a5a5a] mb-6 max-w-[58ch]">
            {event.description}
          </p>

          {/* Highlights */}
          <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-6">
            {event.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-[0.82rem] text-[var(--text-muted)]">
                <span
                  className="mt-[0.35rem] w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: accent }}
                  aria-hidden="true"
                />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Sidebar ──────────────────────────────────────────── */}
        <div
          className="flex flex-col justify-between p-7 border-t lg:border-t-0 lg:border-l border-[var(--border-soft)]/40"
          style={{ background: `${accent}07` }}
        >
          <dl className="flex flex-col gap-5 mb-8">
            {/* Date */}
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.14em] font-semibold text-[var(--text-muted)]/60 mb-0.5">
                Date
              </dt>
              <dd>
                <time dateTime={event.dateISO} className="text-[0.9rem] font-semibold text-[var(--text-heading)]">
                  {event.dateLabel}
                </time>
              </dd>
            </div>

            {/* Location */}
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.14em] font-semibold text-[var(--text-muted)]/60 mb-0.5">
                Location
              </dt>
              <dd>
                <p className="text-[0.9rem] font-medium text-[var(--text-heading)]">{event.location}</p>
                <p className="text-[0.78rem] text-[var(--text-muted)] mt-0.5">{event.locationDetail}</p>
              </dd>
            </div>

            {/* Duration */}
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.14em] font-semibold text-[var(--text-muted)]/60 mb-0.5">
                Duration
              </dt>
              <dd className="text-[0.9rem] font-medium text-[var(--text-heading)]">{event.duration}</dd>
            </div>

            {/* Price */}
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.14em] font-semibold text-[var(--text-muted)]/60 mb-0.5">
                Investment
              </dt>
              <dd className="text-[0.9rem] font-medium text-[var(--text-heading)]">{event.price}</dd>
            </div>

            {/* Spots remaining */}
            {isOpen && event.spotsLeft !== null && (
              <div>
                <dt className="text-[0.65rem] uppercase tracking-[0.14em] font-semibold text-[var(--text-muted)]/60 mb-0.5">
                  Availability
                </dt>
                <dd>
                  <SpotsBar left={event.spotsLeft} total={event.spotsTotal} />
                </dd>
              </div>
            )}
          </dl>

          {/* CTA */}
          <Link
            href={event.cta.href}
            className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full text-[0.85rem] font-medium text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 group"
            style={{ background: isOpen ? accent : "#a0a0a0" }}
            aria-disabled={!isOpen}
            onMouseEnter={(e) => {
              if (isOpen) (e.currentTarget as HTMLElement).style.filter = "brightness(0.88)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.filter = "brightness(1)";
            }}
          >
            {event.cta.label}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"
              strokeLinecap="round" strokeLinejoin="round"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* ── page ─────────────────────────────────────────────────────────── */
export default function EventsClient() {
  return (
    <div className="bg-[var(--bg-primary)]">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="events-heading"
        className="relative pt-20 pb-24 overflow-hidden border-b border-[var(--border-soft)]/50"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-20 -right-20 w-[50vw] h-[50vw] max-w-[580px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(95,122,97,0.16) 0%, transparent 68%)" }} />
          <div className="absolute bottom-0 left-0 w-[35vw] h-[35vw] max-w-[400px] rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(214,167,94,0.2) 0%, transparent 65%)" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <motion.div variants={STAGGER} initial="hidden" animate="show">
            <motion.p variants={FADE_UP}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--pista-green)] font-semibold mb-6">
              Gather. Sit. Return.
            </motion.p>
            <motion.h1
              id="events-heading"
              variants={FADE_UP}
              className="text-[clamp(2.2rem,5vw,3.2rem)] font-semibold leading-[1.12] tracking-tight text-[var(--text-heading)] mb-6"
            >
              Events &amp;
              <br />
              <span className="text-[var(--pista-green)]">Retreats</span>
            </motion.h1>
            <motion.p variants={FADE_UP}
              className="text-[1.02rem] leading-[1.85] text-[var(--text-muted)] max-w-[44ch]">
              Periodic gatherings held as invitations — not obligations. Each is
              an opportunity to go deeper in good company, or simply to rest in
              shared silence.
            </motion.p>
          </motion.div>

          {/* Legend */}
          <motion.div
            variants={STAGGER}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-3"
            aria-label="Event types"
          >
            {(Object.entries(TYPE_COLOUR) as [EventType, string][]).map(([type, color]) => (
              <motion.span
                key={type}
                variants={FADE_UP}
                className="flex items-center gap-2.5 text-[0.78rem] text-[var(--text-muted)] bg-white border border-[var(--border-soft)]/60 rounded-full px-3.5 py-1.5"
              >
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} aria-hidden="true" />
                {type}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Upcoming events ────────────────────────────────────── */}
      <section aria-labelledby="upcoming-heading" className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.h2
            id="upcoming-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
            className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--pista-green)] font-semibold mb-10"
          >
            Upcoming
          </motion.h2>

          <motion.div
            variants={STAGGER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-col gap-8"
          >
            {UPCOMING.map((event) => (
              <EventCard key={event.id} event={event} variants={FADE_UP} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Past events ────────────────────────────────────────── */}
      {PAST.length > 0 && (
        <section
          aria-labelledby="past-heading"
          className="py-16 border-t border-[var(--border-soft)]/50"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <motion.h2
              id="past-heading"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              viewport={{ once: true }}
              className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--text-muted)]/60 font-semibold mb-10"
            >
              Past events
            </motion.h2>

            <motion.div
              variants={STAGGER}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="flex flex-col gap-6"
            >
              {PAST.map((event) => (
                <EventCard key={event.id} event={event} variants={FADE_UP} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Mailing list note ──────────────────────────────────── */}
      <section className="py-20 bg-[var(--text-heading)] border-t border-white/[0.06]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
          >
            <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--pista-green)] font-semibold mb-6">
              Stay informed — quietly
            </p>
            <p className="text-[1rem] leading-[1.85] text-white/65 max-w-[44ch] mx-auto mb-10">
              New events are announced by email — infrequently, without noise.
              Write to us with the subject line &ldquo;Add me to the list&rdquo;
              and we will let you know when something is coming.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[var(--pista-green)] text-white text-[0.88rem] font-medium tracking-wide hover:bg-[#4e6851] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pista-green)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--text-heading)] group"
            >
              Get notified
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
