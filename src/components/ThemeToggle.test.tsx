import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeToggle } from "./ThemeToggle";

describe("ThemeToggle", () => {
  it("renders a dark mode indicator", () => {
    render(<ThemeToggle />);
    const indicator = screen.getByLabelText(/dark mode enabled/i);
    expect(indicator).toBeInTheDocument();
  });

  it("has proper accessibility label", () => {
    render(<ThemeToggle />);
    expect(screen.getByLabelText(/dark mode enabled/i)).toBeInTheDocument();
  });
});
