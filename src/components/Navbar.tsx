"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { DURATIONS, STAGGER, DELAYS } from "../config/animations";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-kriya-yoga" },
  { label: "Teachings", href: "/teachings" },
  { label: "Practices", href: "/practices" },
  { label: "Courses", href: "/courses-programs" },
  { label: "Events", href: "/events-retreats" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        role="banner"
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
          scrolled
            ? "bg-[rgba(246,224,232,0.9)] dark:bg-[rgba(26,22,32,0.88)] backdrop-blur-md border-b border-[rgba(232,224,235,0.6)] dark:border-[rgba(58,53,64,0.6)] shadow-[0_1px_24px_rgba(45,42,74,0.06)] dark:shadow-[0_1px_24px_rgba(0,0,0,0.32)]"
            : "bg-transparent",
        ].join(" ")}
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: DURATIONS.standard, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-[var(--text-heading)] dark:text-[var(--c-heading)] no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,162,39,0.3)] rounded-sm"
            aria-label="Nispruh Yog – home"
          >
            {/* Subtle lotus glyph */}
            <span
              aria-hidden="true"
              className="text-[var(--bg-accent)] text-lg leading-none transition-transform duration-700 group-hover:scale-110 select-none"
            >
              ꩜
            </span>
            <span className="font-semibold tracking-wide text-[0.95rem] sm:text-[1rem]">
              Nispruh Yog
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-1"
          >
            {NAV_LINKS.map(({ label, href }) => {
              const active =
                href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={[
                    "relative px-3 py-1.5 text-[0.83rem] font-medium tracking-wide rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,162,39,0.3)]",
                    active
                      ? "text-[var(--text-heading)] dark:text-[var(--c-heading)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text-heading)] dark:text-[var(--text-muted)] dark:hover:text-[var(--c-heading)] hover:bg-[rgba(201,162,39,0.08)] dark:hover:bg-[rgba(212,181,80,0.06)]",
                  ].join(" ")}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgba(201,162,39,0.2)] to-[rgba(201,162,39,0.08)] dark:from-[rgba(212,181,80,0.15)] dark:to-[rgba(212,181,80,0.05)]"
                      transition={{ type: "spring", stiffness: 340, damping: 36 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />

          {/* Hamburger button */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(201,162,39,0.3)]"
          >
            <motion.span
              className="block h-px w-5 bg-[var(--text-heading)] dark:bg-[var(--c-heading)] origin-center"
              animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.span
              className="block h-px w-5 bg-[var(--text-heading)] dark:bg-[var(--c-heading)] origin-center"
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-px w-5 bg-[var(--text-heading)] dark:bg-[var(--c-heading)] origin-center"
              animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-[var(--text-heading)]/20 dark:bg-[var(--c-heading)]/10 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              id="mobile-menu"
              ref={menuRef}
              role="dialog"
              aria-label="Navigation menu"
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(80vw,22rem)] bg-[var(--bg-primary)] dark:bg-[var(--bg-primary)] flex flex-col pt-20 pb-10 px-8 lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 34 }}
            >
              {/* Decorative line */}
              <div className="mb-8 h-px w-12 bg-[var(--bg-accent)]/40" />

              <nav aria-label="Mobile primary" className="flex flex-col gap-1">
                {NAV_LINKS.map(({ label, href }, i) => {
                  const active =
                    href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(href);
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.045, duration: 0.35, ease: "easeOut" }}
                    >
                      <Link
                        href={href}
                        className={[
                          "block py-3 text-base font-medium tracking-wide border-b border-[rgba(232,224,235,0.4)] dark:border-[rgba(58,53,64,0.4)] transition-colors duration-200 focus-visible:outline-none",
                          active
                            ? "text-[var(--text-heading)]"
                            : "text-[var(--text-muted)] hover:text-[var(--text-heading)] dark:text-[var(--text-muted)] dark:hover:text-[var(--c-heading)]",
                        ].join(" ")}
                      >
                        {label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Subtle footer quote */}
              <p className="mt-auto text-xs text-[var(--text-muted)]/70 leading-relaxed italic">
                "Be still, and know."
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
