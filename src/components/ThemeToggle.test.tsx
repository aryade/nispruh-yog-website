import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeToggle } from "./ThemeToggle";

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("renders an accessible toggle button", () => {
    render(<ThemeToggle />);
    expect(screen.getByRole("button", { name: /switch to dark mode/i })).toBeInTheDocument();
    expect(screen.getByTestId("theme-icon-moon")).toBeInTheDocument();
  });

  it("applies dark mode when clicked", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    const toggle = screen.getByRole("button", { name: /switch to dark mode/i });
    await user.click(toggle);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(screen.getByRole("button", { name: /switch to light mode/i })).toBeInTheDocument();
    expect(screen.getByTestId("theme-icon-sun")).toBeInTheDocument();
  });

  it("loads saved theme preference", () => {
    localStorage.setItem("theme", "dark");
    render(<ThemeToggle />);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(screen.getByRole("button", { name: /switch to light mode/i })).toBeInTheDocument();
    expect(screen.getByTestId("theme-icon-sun")).toBeInTheDocument();
  });
});
