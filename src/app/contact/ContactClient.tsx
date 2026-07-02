"use client";

import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ContactForm } from "../../components/ContactForm";
import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("../../components/LocationMap").then(mod => ({ default: mod.LocationMap })), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[4/3] rounded-2xl bg-[var(--border-soft)]/20 flex items-center justify-center">
      <p className="text-[0.85rem] text-[var(--text-muted)]/60">Loading map...</p>
    </div>
  ),
});

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
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

/* ── contact details ──────────────────────────────────────────────── */
const DETAILS = [
  {
    label: "Email",
    value: "info@nispruhyog.com",
    href: "mailto:info@nispruhyog.com",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <rect x="2" y="4" width="18" height="14" rx="2" />
        <path d="M2 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Phone – India",
    value: "+91 99756 90339",
    href: "tel:+919975690339",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M5 2h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 11l5 2v4a2 2 0 0 1-2 2C7.4 19 3 14.6 3 4a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    label: "Phone – Finland",
    value: "+358 46 571 0507",
    href: "tel:+35846571507",
    icon: (
      <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M5 2h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 11l5 2v4a2 2 0 0 1-2 2C7.4 19 3 14.6 3 4a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    label: "Locations",
    value: "Nashik, India\nJyväskylä, Tampere, Helsinki/Espoo — Finland",
    href: null,
    icon: (
      <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.4"
        strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true">
        <path d="M11 2a7 7 0 0 1 7 7c0 5-7 13-7 13S4 14 4 9a7 7 0 0 1 7-7z" />
        <circle cx="11" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    label: "WhatsApp Community",
    value: "Scan to join",
    href: null,
    isQR: true,
  },
];

/* ── component ────────────────────────────────────────────────────── */
interface ContactClientProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

export default function ContactClient({ searchParams }: ContactClientProps) {
  return (
    <div className="bg-[var(--bg-primary)]">

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="contact-heading"
        className="relative pt-20 pb-20 overflow-hidden border-b border-[var(--border-soft)]/50"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-20 -right-20 w-[50vw] h-[50vw] max-w-[560px] rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(95,122,97,0.18) 0%, transparent 68%)" }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div variants={STAGGER} initial="hidden" animate="show" className="max-w-[48ch]">
            <motion.p variants={FADE_UP}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--pista-green)] font-semibold mb-6">
              An open door
            </motion.p>
            <motion.h1
              id="contact-heading"
              variants={FADE_UP}
              className="text-[clamp(2.2rem,5vw,3.2rem)] font-semibold leading-[1.12] tracking-tight text-[var(--text-heading)] mb-6"
            >
              Get in touch
            </motion.h1>
            <motion.p variants={FADE_UP}
              className="text-[1.02rem] leading-[1.85] text-[var(--text-muted)]">
              We keep communication mindful and unhurried. Write a short note —
              a question about practice, a course enquiry, or simply a hello.
              We respond within two to three days, from a calm place.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Main content ───────────────────────────────────────── */}
      <section aria-label="Contact details and form" className="py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-16 lg:gap-20 items-start">

            {/* ── Left column ──────────────────────────────────── */}
            <motion.div
              variants={STAGGER}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {/* Contact details */}
              <motion.ul role="list" variants={FADE_UP} className="flex flex-col gap-7 mb-14">
                {DETAILS.map(({ label, value, href, icon, isQR }) => (
                  <li key={label} className={isQR ? "col-span-1" : "flex items-start gap-4"}>
                    {isQR ? (
                      <div>
                        <p className="text-[0.7rem] uppercase tracking-[0.16em] font-semibold text-[var(--text-muted)]/60 mb-4">
                          {label}
                        </p>
                        <div className="w-56 h-56 rounded-2xl overflow-hidden border-2 border-[var(--pista-green)]/20 bg-white p-3">
                          <Image
                            src="/images/whatsapp-qr-code.png"
                            alt="WhatsApp QR code - Scan to join Nispruhyog Kriyayog Meditation & Yoga community"
                            width={224}
                            height={224}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <p className="text-[0.85rem] text-[var(--text-muted)]/70 mt-3 italic">
                          Scan with your phone camera to join our community
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="w-10 h-10 rounded-xl bg-[var(--pista-green)]/10 text-[var(--pista-green)] flex items-center justify-center shrink-0">
                          {icon}
                        </div>
                        <div>
                          <p className="text-[0.7rem] uppercase tracking-[0.16em] font-semibold text-[var(--text-muted)]/60 mb-1">
                            {label}
                          </p>
                          {href ? (
                            <a
                              href={href}
                              className="text-[0.95rem] font-medium text-[var(--text-heading)] hover:text-[var(--pista-green)] transition-colors duration-200 focus-visible:outline-none focus-visible:underline"
                            >
                              {value}
                            </a>
                          ) : (
                            <p className="text-[0.95rem] font-medium text-[var(--text-heading)] whitespace-pre-line leading-relaxed">
                              {value}
                            </p>
                          )}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </motion.ul>

              {/* Map */}
              <motion.div variants={FADE_UP}>
                <p className="text-[0.7rem] uppercase tracking-[0.16em] font-semibold text-[var(--text-muted)]/60 mb-4">
                  Find us
                </p>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-soft)]/60 shadow-[0_8px_24px_rgba(31,42,68,0.08)]">
                  <LocationMap />
                </div>
              </motion.div>

              {/* Assurances */}
              <motion.ul
                variants={FADE_UP}
                role="list"
                className="flex flex-col gap-3 mt-10"
              >
                {[
                  "No obligation — every enquiry is welcome",
                  "Your details are never shared or sold",
                  "We reply within 2–3 working days",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[0.85rem] text-[var(--text-muted)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--pista-green)]/60 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            {/* ── Right column — form ───────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-2xl border border-[var(--border-soft)]/60 bg-white p-8 sm:p-10 shadow-[0_8px_48px_rgba(31,42,68,0.06)]"
            >
              <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[var(--pista-green)] font-semibold mb-2">
                Send a message
              </p>
              <h2 className="text-[1.2rem] font-semibold text-[var(--text-heading)] mb-7">
                We&apos;d love to hear from you
              </h2>

              <ContactForm searchParams={searchParams} />

              <p className="mt-5 text-center text-[0.78rem] text-[var(--text-muted)]/60">
                No push. No urgency. Just an open door.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Closing quote ──────────────────────────────────────── */}
      <section className="py-20 bg-[var(--text-heading)] border-t border-white/[0.06]">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
          >
            <span className="block text-[3rem] text-[var(--pista-green)]/30 font-serif leading-none mb-5 select-none" aria-hidden="true">"</span>
            <blockquote className="border-0 p-0 not-italic">
              <p className="text-[1rem] leading-[1.85] text-white/60 italic font-light max-w-[42ch] mx-auto">
                The door is always open. There is no wrong time to knock,
                no wrong question to ask, no wrong place to begin.
              </p>
              <footer className="mt-5 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--pista-green)] font-semibold not-italic">
                Nispruh Yog
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
