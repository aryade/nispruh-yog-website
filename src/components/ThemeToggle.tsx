"use client";

export function ThemeToggle() {
  return (
    <div
      aria-label="Dark mode enabled"
      title="Dark mode enabled"
      className="relative w-11 h-11 rounded-full flex items-center justify-center text-[var(--text-light)] border border-[rgba(58,53,64,0.7)]"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
        aria-hidden="true"
      >
        <path d="M17.5 12.5A7.5 7.5 0 0 1 7.5 2.5a7.5 7.5 0 1 0 10 10z" />
      </svg>
    </div>
  );
}
