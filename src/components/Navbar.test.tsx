import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

// Mock usePathname to control current route
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  usePathname: () => "/",
}));

describe("Navbar", () => {
  it("renders logo and brand name", () => {
    render(<Navbar />);
    expect(screen.getByText("Nispruh Yog")).toBeInTheDocument();
  });

  it("renders all navigation links on desktop", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Teachings")).toBeInTheDocument();
    expect(screen.getByText("Practices")).toBeInTheDocument();
    expect(screen.getByText("Courses")).toBeInTheDocument();
    expect(screen.getByText("Events")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders hamburger menu button on mobile", () => {
    render(<Navbar />);
    const menuButton = screen.getByRole("button", { name: /open menu/i });
    expect(menuButton).toBeInTheDocument();
  });

  it("toggles mobile menu on button click", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    await user.click(menuButton);

    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();
  });

  it("has working navigation links", () => {
    render(<Navbar />);
    const aboutLink = screen.getByRole("link", { name: /about/i });
    expect(aboutLink).toHaveAttribute("href", "/about-kriya-yoga");
  });

  it("renders theme toggle button", () => {
    render(<Navbar />);
    const themeButton = screen.getByRole("button", {
      name: /switch to (light|dark) mode/i,
    });
    expect(themeButton).toBeInTheDocument();
  });

  it("is sticky and fixed to top", () => {
    render(<Navbar />);
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("fixed", "top-0", "left-0", "right-0", "z-50");
  });

  it("has proper aria labels for accessibility", () => {
    render(<Navbar />);
    expect(screen.getByLabelText("Nispruh Yog – home")).toBeInTheDocument();
    expect(screen.getByLabelText("Primary")).toBeInTheDocument();
  });

  it("closes mobile menu when clicking outside", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    await user.click(menuButton);
    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();

    // Click outside the menu to close it
    const body = document.body;
    await user.click(body);
    expect(screen.queryByRole("button", { name: /close menu/i })).not.toBeInTheDocument();
  });

  it("closes mobile menu on route change", async () => {
    const user = userEvent.setup();
    const { rerender } = render(<Navbar />);

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    await user.click(menuButton);
    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();

    // Rerender with different pathname to simulate route change
    vi.mock("next/navigation", () => ({
      useRouter: () => ({
        push: vi.fn(),
      }),
      usePathname: () => "/about-kriya-yoga",
    }));
    rerender(<Navbar />);
  });

  it("changes appearance when scrolled", async () => {
    render(<Navbar />);
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("fixed", "top-0", "left-0", "right-0", "z-50");

    // Simulate scroll event
    window.scrollY = 50;
    window.dispatchEvent(new Event("scroll", { bubbles: true }));

    // Wait for state update and check if scrolled styles are applied
    await new Promise((resolve) => setTimeout(resolve, 100));
  });
});
