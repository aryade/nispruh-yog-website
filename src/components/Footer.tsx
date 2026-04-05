"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-kriya-yoga" },
  { label: "Teachings", href: "/teachings" },
  { label: "Practices", href: "/practices" },
  { label: "Courses", href: "/courses-programs" },
  { label: "Events", href: "/events-retreats" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Footer() {
  return (
    <footer
      className="bg-[var(--text-heading)] dark:bg-[var(--bg-primary)] text-[var(--text-muted)] dark:text-[var(--text-muted)]"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Thin accent line at top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(201,162,39,0.5)] to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">

        {/* Mission */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={0}
          className="lg:col-span-1"
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[var(--bg-accent)] text-xl leading-none select-none" aria-hidden="true">꩜</span>
            <span className="text-white font-semibold tracking-wide text-[0.95rem]">Nispruh Yog</span>
          </div>
          <p className="text-[0.9rem] leading-[1.75] text-[var(--text-muted)] max-w-[32ch]">
            A quiet space for sincere seekers. Rooted in the ancient science of
            Kriya Yoga — awakening through breath, stillness, and self-inquiry.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3 mt-8">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[var(--text-muted)] border border-[rgba(255,255,255,0.15)] hover:text-white hover:border-[var(--bg-accent)]/80 hover:bg-[rgba(201,162,39,0.08)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bg-accent)]/50"
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
        >
          <h2 className="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--bg-accent)] font-semibold mb-6">
            Explore
          </h2>
          <ul className="space-y-3" role="list">
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[0.88rem] text-[var(--text-muted)] hover:text-white hover:bg-[rgba(201,162,39,0.08)] px-2 py-1 -mx-2 rounded-sm transition-all duration-200 focus-visible:outline-none focus-visible:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact + quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={2}
        >
          <h2 className="text-[0.72rem] uppercase tracking-[0.18em] text-[var(--bg-accent)] font-semibold mb-6">
            Connect
          </h2>
          <ul className="space-y-3 text-[0.88rem] text-[var(--text-muted)]" role="list">
            <li>
              <a
                href="mailto:info@nispruhyog.com"
                className="hover:text-white hover:bg-[rgba(201,162,39,0.08)] px-2 py-1 -mx-2 rounded-sm transition-all duration-200 focus-visible:outline-none focus-visible:underline"
              >
                info@nispruhyog.com
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white hover:bg-[rgba(201,162,39,0.08)] px-2 py-1 -mx-2 rounded-sm transition-all duration-200 focus-visible:outline-none focus-visible:underline"
              >
                Send a message
              </Link>
            </li>
            <li>
              <Link
                href="/courses-programs"
                className="hover:text-white hover:bg-[rgba(201,162,39,0.08)] px-2 py-1 -mx-2 rounded-sm transition-all duration-200 focus-visible:outline-none focus-visible:underline"
              >
                Join a course
              </Link>
            </li>
          </ul>

          {/* Sanskrit pull-quote */}
          <blockquote className="mt-10 border-l-2 border-[var(--bg-accent)]/40 pl-4">
            <p className="text-[1.05rem] text-[var(--text-muted)]/60 italic leading-relaxed font-light">
              "Tat tvam asi."
            </p>
            <footer className="mt-1 text-[0.78rem] text-[var(--text-muted)]/60">
              That thou art — Chandogya Upanishad
            </footer>
          </blockquote>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] mx-5 sm:mx-8">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-[0.78rem] text-[var(--text-muted)]/60">
          <p>© {new Date().getFullYear()} Nispruh Yog · All rights reserved</p>
          <p className="text-center">
            Crafted with stillness &middot; Guided by inner light
          </p>
        </div>
      </div>
    </footer>
  );
}
