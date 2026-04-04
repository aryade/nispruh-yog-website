import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  /** Tighten the column for prose-heavy sections */
  narrow?: boolean;
  className?: string;
}

/**
 * Shared horizontal container.
 * Wide  → max-w-7xl  (1280px) — used for most page sections
 * Narrow → max-w-3xl  (768px)  — used for prose / article bodies
 */
export default function Container({ children, narrow = false, className = "" }: ContainerProps) {
  return (
    <div
      className={[
        "mx-auto w-full px-5 sm:px-8",
        narrow ? "max-w-3xl" : "max-w-7xl",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
