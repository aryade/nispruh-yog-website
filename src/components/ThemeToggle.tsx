"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  /* Read preference on mount — avoids SSR mismatch */
  useEffect(() => {
    setMounted(true);
    const stored = window.localStorage.getItem("kriya-theme");
    if (stored === "dark" || stored === "light") {
      setIsDark(stored === "dark");
    } else {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  /* Apply to <html> and persist */
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", isDark);
    window.localStorage.setItem("kriya-theme", isDark ? "dark" : "light");
  }, [isDark, mounted]);

  /* Prevent flash of wrong icon before hydration */
  if (!mounted) {
    return <div className="w-9 h-9" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={() => setIsDark((v) => !v)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-9 h-9 rounded-full flex items-center justify-center text-[var(--text-light)] dark:text-[var(--text-light)] hover:text-[var(--secondary)] dark:hover:text-[var(--c-heading)] border border-[rgba(214,201,184,0.7)] dark:border-[rgba(45,47,44,0.7)] hover:border-[rgba(95,122,97,0.5)] dark:hover:border-[rgba(95,122,97,0.4)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(95,122,97,0.3)]"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          /* Sun icon — shown in dark mode to switch to light */
          <motion.svg
            key="sun"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <circle cx="10" cy="10" r="3.5" />
            <path d="M10 2v1.5M10 16.5V18M2 10h1.5M16.5 10H18M4.22 4.22l1.06 1.06M14.72 14.72l1.06 1.06M4.22 15.78l1.06-1.06M14.72 5.28l1.06-1.06" />
          </motion.svg>
        ) : (
          /* Moon icon — shown in light mode to switch to dark */
          <motion.svg
            key="moon"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            initial={{ opacity: 0, rotate: 45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -45, scale: 0.7 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <path d="M17.5 12.5A7.5 7.5 0 0 1 7.5 2.5a7.5 7.5 0 1 0 10 10z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
}
