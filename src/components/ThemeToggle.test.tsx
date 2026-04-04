import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "./ThemeToggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("renders a button", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("toggles dark mode on click", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);
    const button = screen.getByRole("button");

    await user.click(button);
    await waitFor(() => {
      expect(document.documentElement).toHaveClass("dark");
    });
  });

  it("persists dark mode to localStorage", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);
    const button = screen.getByRole("button");

    await user.click(button);
    await waitFor(() => {
      expect(localStorage.getItem("kriya-theme")).toBe("dark");
    });
  });

  it("reads dark mode from localStorage on mount", () => {
    localStorage.setItem("kriya-theme", "dark");
    render(<ThemeToggle />);

    expect(document.documentElement).toHaveClass("dark");
  });

  it("honors system preference when no localStorage value", () => {
    const darkModeMQ = {
      matches: true,
      media: "(prefers-color-scheme: dark)",
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    };

    global.matchMedia = vi.fn().mockReturnValue(darkModeMQ);
    render(<ThemeToggle />);

    expect(document.documentElement).toHaveClass("dark");
  });

  it("has proper accessibility label", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button", {
      name: /switch to (light|dark) mode/i,
    });
    expect(button).toBeInTheDocument();
  });
});
