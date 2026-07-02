"use client";

import { FormEvent, useState, useEffect } from "react";

type ResponseState = {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
};

interface ContactFormProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

export function ContactForm({ searchParams }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [response, setResponse] = useState<ResponseState>({ status: "idle" });

  useEffect(() => {
    if (searchParams) {
      const program = searchParams.program;
      const event = searchParams.event;
      const prefill = event || program;

      if (prefill) {
        const formatted = typeof prefill === "string"
          ? prefill.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
          : "";
        setSubject(formatted);
      }
    }
  }, [searchParams]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setResponse({ status: "error", message: "Please complete all fields." });
      return;
    }

    setResponse({ status: "loading" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, subject: subject || undefined }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data?.error || "Failed to send message.");
      }

      setResponse({ status: "success", message: "Thank you. Your note is received." });
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      setResponse({ status: "error", message: (error as Error).message });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form">
      {subject && (
        <label>
          Interest
          <input type="text" value={subject} disabled className="disabled" />
        </label>
      )}
      <label>
        Name
        <input value={name} onChange={(event) => setName(event.target.value)} required />
      </label>
      <label>
        Email
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </label>
      <label>
        Message
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} required rows={4} />
      </label>
      <button type="submit" className="cta" disabled={response.status === "loading"}>
        {response.status === "loading" ? "Sending..." : "Send request"}
      </button>
      <div aria-live="polite" role="status">
        {response.status === "success" && <p className="notice success">{response.message}</p>}
        {response.status === "error" && <p className="notice error">{response.message}</p>}
      </div>
    </form>
  );
}
