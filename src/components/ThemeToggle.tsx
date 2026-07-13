"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    const initialTheme: Theme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const nextTheme: Theme = theme === "dark" ? "light" : "dark";

  const handleToggle = () => {
    setTheme(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      onClick={handleToggle}
      className="relative w-11 h-11 rounded-full flex items-center justify-center text-[var(--text-light)] hover:text-[var(--text-heading)] dark:hover:text-[var(--text-heading)] border border-[rgba(232,224,235,0.8)] dark:border-[rgba(58,53,64,0.7)] bg-[rgba(246,224,232,0.55)] dark:bg-[rgba(26,22,32,0.45)] transition-colors duration-200"
    >
      {theme === "dark" ? (
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
          aria-hidden="true"
          data-testid="theme-icon-sun"
        >
          <circle cx="10" cy="10" r="3.5" />
          <path d="M10 1.75v2" />
          <path d="M10 16.25v2" />
          <path d="M1.75 10h2" />
          <path d="M16.25 10h2" />
          <path d="M4.17 4.17l1.42 1.42" />
          <path d="M14.41 14.41l1.42 1.42" />
          <path d="M14.41 5.59l1.42-1.42" />
          <path d="M4.17 15.83l1.42-1.42" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
          aria-hidden="true"
          data-testid="theme-icon-moon"
        >
          <path d="M17.5 12.5A7.5 7.5 0 0 1 7.5 2.5a7.5 7.5 0 1 0 10 10z" />
        </svg>
      )}
    </button>
  );
}
