import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders hero section", () => {
    render(<Hero />);
    const section = screen.getByLabelText(/welcome to nispruh yog/i);
    expect(section).toBeInTheDocument();
  });

  it("displays main headline", () => {
    render(<Hero />);
    expect(screen.getByText(/still the mind/i)).toBeInTheDocument();
  });

  it("displays secondary headline", () => {
    render(<Hero />);
    expect(screen.getByText(/awaken the self/i)).toBeInTheDocument();
  });

  it("displays subtitle text", () => {
    render(<Hero />);
    expect(
      screen.getByText(/sacred space for sincere seekers/i)
    ).toBeInTheDocument();
  });

  it("renders primary CTA button", () => {
    render(<Hero />);
    const ctaButton = screen.getByRole("link", { name: /begin your journey/i });
    expect(ctaButton).toBeInTheDocument();
  });

  it("primary CTA links to practices page", () => {
    render(<Hero />);
    const ctaButton = screen.getByRole("link", { name: /begin your journey/i });
    expect(ctaButton).toHaveAttribute("href", "/practices");
  });

  it("renders secondary CTA button", () => {
    render(<Hero />);
    const secondaryCTA = screen.getByRole("link", {
      name: /what is kriya yoga/i,
    });
    expect(secondaryCTA).toBeInTheDocument();
  });

  it("secondary CTA links to about page", () => {
    render(<Hero />);
    const secondaryCTA = screen.getByRole("link", {
      name: /what is kriya yoga/i,
    });
    expect(secondaryCTA).toHaveAttribute("href", "/about-kriya-yoga");
  });

  it("displays eyebrow text", () => {
    render(<Hero />);
    expect(
      screen.getByText(/kriya yoga.*ancient science of breath/i)
    ).toBeInTheDocument();
  });

  it("displays scroll indicator", () => {
    render(<Hero />);
    expect(screen.getByText(/scroll/i)).toBeInTheDocument();
  });

  it("has full screen min-height", () => {
    render(<Hero />);
    const section = screen.getByLabelText(/welcome to nispruh yog/i);
    expect(section).toHaveClass("min-h-screen");
  });
});
