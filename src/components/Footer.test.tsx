import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders footer with contentinfo role", () => {
    const { container } = render(<Footer />);
    // The Footer component uses <footer role="contentinfo">
    const footer = container.querySelector("footer[role='contentinfo']");
    expect(footer).toBeInTheDocument();
  });

  it("displays brand name and mission statement", () => {
    render(<Footer />);
    expect(screen.getByText("Nispruh Yog")).toBeInTheDocument();
    expect(
      screen.getByText(/quiet space for sincere seekers/i)
    ).toBeInTheDocument();
  });

  it("renders social media links", () => {
    render(<Footer />);
    expect(screen.getByLabelText("YouTube")).toBeInTheDocument();
    expect(screen.getByLabelText("Instagram")).toBeInTheDocument();
    expect(screen.getByLabelText("Facebook")).toBeInTheDocument();
    expect(screen.getByLabelText("X / Twitter")).toBeInTheDocument();
  });

  it("renders explore section with navigation links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /teachings/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /practices/i })).toBeInTheDocument();
  });

  it("renders contact information", () => {
    render(<Footer />);
    expect(screen.getByText(/info@nispruhyog.com/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /send a message/i })).toBeInTheDocument();
  });

  it("displays spiritual quote", () => {
    render(<Footer />);
    expect(screen.getByText(/tat tvam asi/i)).toBeInTheDocument();
  });

  it("includes copyright notice with current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  it("has dark background styling", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer[role='contentinfo']");
    expect(footer).toHaveClass("bg-[var(--text-heading)]");
    expect(footer).toHaveClass("dark:bg-[var(--bg-primary)]");
  });

  it("renders motion sections with animation variants", () => {
    const { container } = render(<Footer />);
    const motionDivs = container.querySelectorAll("[class*='grid']");
    expect(motionDivs.length).toBeGreaterThan(0);
  });

  it("renders accent line with gradient", () => {
    const { container } = render(<Footer />);
    const accentLine = container.querySelector(
      ".bg-gradient-to-r.from-transparent.via-\\[rgba\\(147\\,197\\,114\\,0\\.5\\)\\].to-transparent"
    );
    expect(accentLine).toBeInTheDocument();
  });

  it("renders social icons with proper styling", () => {
    render(<Footer />);
    const socialLinks = [
      screen.getByLabelText("YouTube"),
      screen.getByLabelText("Instagram"),
      screen.getByLabelText("Facebook"),
      screen.getByLabelText("X / Twitter"),
    ];
    socialLinks.forEach((link) => {
      expect(link).toHaveClass("w-9", "h-9", "rounded-full");
    });
  });

  it("renders quick links section with proper structure", () => {
    render(<Footer />);
    const linkText = screen.getByText("Explore");
    expect(linkText).toBeInTheDocument();
    expect(linkText).toHaveClass("text-[var(--pista-green)]");
  });

  it("renders connect section with proper styling", () => {
    render(<Footer />);
    const connectText = screen.getByText("Connect");
    expect(connectText).toBeInTheDocument();
    expect(connectText).toHaveClass("uppercase");
  });

  it("renders all quick links with correct hrefs", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute("href", "/about-kriya-yoga");
    expect(screen.getByRole("link", { name: /teachings/i })).toHaveAttribute("href", "/teachings");
    expect(screen.getByRole("link", { name: /practices/i })).toHaveAttribute("href", "/practices");
    expect(screen.getByRole("link", { name: /courses/i })).toHaveAttribute("href", "/courses-programs");
  });

  it("renders email link correctly", () => {
    render(<Footer />);
    const emailLink = screen.getByRole("link", { name: /info@nispruhyog.com/i });
    expect(emailLink).toHaveAttribute("href", "mailto:info@nispruhyog.com");
  });

  it("message link navigates to contact page", () => {
    render(<Footer />);
    const messageLink = screen.getByRole("link", { name: /send a message/i });
    expect(messageLink).toHaveAttribute("href", "/contact");
  });

  it("join course link navigates to programs page", () => {
    render(<Footer />);
    const courseLink = screen.getByRole("link", { name: /join a course/i });
    expect(courseLink).toHaveAttribute("href", "/courses-programs");
  });
});
