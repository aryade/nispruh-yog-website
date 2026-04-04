import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "./ContactForm";

global.fetch = vi.fn();

describe("ContactForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders form with all fields", () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send request/i })).toBeInTheDocument();
  });

  it("shows error when fields are empty", async () => {
    const { container } = render(<ContactForm />);
    const form = container.querySelector('[aria-label="Contact form"]') as HTMLFormElement;

    // Manually submit the form (which triggers handleSubmit)
    const submitEvent = new SubmitEvent("submit", { bubbles: true, cancelable: true });
    form?.dispatchEvent(submitEvent);

    // Wait for React to update
    await new Promise(resolve => setTimeout(resolve, 50));

    // Check if error message is now in document
    const errorMessage = screen.queryByText(/please complete all fields/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("submits form with valid data", async () => {
    const user = userEvent.setup();
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    });

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "John Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello, I'm interested in Kriya Yoga");

    const button = screen.getByRole("button", { name: /send request/i });
    await user.click(button);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        "/api/contact",
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
        })
      );
    });
  });

  it("shows success message on successful submission", async () => {
    const user = userEvent.setup();
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    });

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Jane Doe");
    await user.type(screen.getByLabelText(/email/i), "jane@example.com");
    await user.type(screen.getByLabelText(/message/i), "Test message");
    await user.click(screen.getByRole("button", { name: /send request/i }));

    await waitFor(() => {
      expect(screen.getByText(/thank you.*received/i)).toBeInTheDocument();
    });
  });

  it("shows error message on failed submission", async () => {
    const user = userEvent.setup();
    (global.fetch as any).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Server error" }),
    });

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Test User");
    await user.type(screen.getByLabelText(/email/i), "test@example.com");
    await user.type(screen.getByLabelText(/message/i), "Test");
    await user.click(screen.getByRole("button", { name: /send request/i }));

    await waitFor(() => {
      expect(screen.getByText(/server error/i)).toBeInTheDocument();
    });
  });

  it("clears form after successful submission", async () => {
    const user = userEvent.setup();
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    });

    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    await user.type(nameInput, "Test");
    await user.type(screen.getByLabelText(/email/i), "test@example.com");
    await user.type(screen.getByLabelText(/message/i), "Message");
    await user.click(screen.getByRole("button", { name: /send request/i }));

    await waitFor(() => {
      expect(nameInput.value).toBe("");
    });
  });

  it("disables button while loading", async () => {
    const user = userEvent.setup();
    (global.fetch as any).mockImplementationOnce(
      () => new Promise(() => {}) // Never resolves
    );

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/name/i), "Test");
    await user.type(screen.getByLabelText(/email/i), "test@example.com");
    await user.type(screen.getByLabelText(/message/i), "Message");

    const button = screen.getByRole("button", { name: /send request/i }) as HTMLButtonElement;
    await user.click(button);

    expect(button).toBeDisabled();
  });
});
