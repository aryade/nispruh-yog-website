"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

type NotifyState = {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
};

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const STAGGER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export default function BlogClient() {
  const [email, setEmail] = useState("");
  const [notifyState, setNotifyState] = useState<NotifyState>({ status: "idle" });

  const handleNotifySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setNotifyState({ status: "error", message: "Please enter your email." });
      return;
    }

    setNotifyState({ status: "loading" });

    try {
      const response = await fetch("/api/books-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.error || "Unable to submit your request.");
      }

      setNotifyState({
        status: "success",
        message: "Thank you. We will notify you when new books are released.",
      });
      setEmail("");
    } catch (error) {
      setNotifyState({ status: "error", message: (error as Error).message });
    }
  };

  return (
    <div className="bg-[var(--bg-primary)]">
      <section
        aria-labelledby="books-heading"
        className="relative pt-20 pb-20 overflow-hidden border-b border-[var(--border-soft)]/50"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            className="absolute -top-16 -left-16 w-[48vw] h-[48vw] max-w-[560px] rounded-full opacity-35"
            style={{ background: "radial-gradient(circle, rgba(95,122,97,0.16) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div variants={STAGGER} initial="hidden" animate="show" className="max-w-[58ch]">
            <motion.p
              variants={FADE_UP}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--pista-green)] font-semibold mb-6"
            >
              Words from the path
            </motion.p>
            <motion.h1
              id="books-heading"
              variants={FADE_UP}
              className="text-[clamp(2.2rem,5vw,3.2rem)] font-semibold leading-[1.12] tracking-tight text-[var(--text-heading)] mb-6"
            >
              Books by Swamiji
            </motion.h1>
            <motion.p
              variants={FADE_UP}
              className="text-[1.02rem] leading-[1.85] text-[var(--text-muted)] max-w-[52ch]"
            >
              Sacred knowledge made available for sincere seekers everywhere. Each book carries the
              living transmission of Kriyayog - written to be sat with slowly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section aria-label="Books" className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 space-y-10">
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 rounded-2xl border border-[var(--border-soft)]/60 bg-white p-6 sm:p-8"
          >
            <div className="relative aspect-[2/3] overflow-hidden rounded-xl border border-[var(--border-soft)]/60 bg-[#f7f4ee]">
              <Image
                src="/images/blog/55.png"
                alt="Between Silence and Words book cover"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.15em] text-[var(--pista-green)] font-semibold mb-3">
                Featured Book
              </p>
              <h2 className="text-[clamp(1.2rem,2.8vw,1.8rem)] font-semibold leading-[1.28] text-[var(--text-heading)] mb-3">
                BETWEEN SILENCE & WORDS: A CONSPECTUS OF MASTER KRIYAYOGI&apos;S TEACHINGS
              </h2>
              <p className="text-[0.78rem] uppercase tracking-[0.12em] text-[var(--text-muted)]/80 mb-5">
                SWAMI SHRI NISPRUH SPANDAN JI
              </p>
              <p className="text-[0.95rem] leading-[1.82] text-[var(--text-muted)] mb-4 italic">
                "True teachings often dwell in the space between silence and words."
              </p>
              <p className="text-[0.95rem] leading-[1.82] text-[var(--text-muted)] mb-5">
                In this deeply contemplative work, Between Silence and Words, the timeless wisdom of a
                realized Kriya Yogi Master is shared through a series of intimate and powerful
                question-and-answer dialogues. Drawing from years of personal discipleship and devotion,
                the book offers readers a conspectus-a distilled essence-of the Master&apos;s teachings,
                presented in a format that is both accessible and profound. Through topics ranging from ego
                and surrender to the nature of silence, the path of Kriya Yoga, and the subtle dynamics of
                spiritual transformation, this book becomes a living conversation-a bridge between the
                eternal silence of the soul and the spoken guidance of a true Master. Whether you are a
                seeker on the path of yoga, a disciple of a living tradition, or simply someone yearning
                for clarity and depth in life, this book serves as both a guide and a companion. Each
                chapter invites inner reflection, and every answer carries the quiet force of authentic
                realization.
              </p>
              <div className="flex flex-wrap gap-4 mb-6 text-[0.85rem] text-[var(--text-muted)]">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-secondary)]/50 border border-[var(--border-soft)]/60">
                  Language: English
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-secondary)]/50 border border-[var(--border-soft)]/60">
                  Format: Kindle & Paperback
                </span>
              </div>
              <a
                href="https://www.amazon.in/dp/B0H1QKHX5J"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full text-[0.88rem] font-semibold text-[#111111] bg-[#FF9900] hover:bg-[#f29000] transition-colors duration-200"
              >
                Buy on Amazon
              </a>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 rounded-2xl border border-[var(--border-soft)]/60 bg-white p-6"
          >
            <div className="relative aspect-[2/3] overflow-hidden rounded-xl border border-[var(--border-soft)]/60 bg-[#f7f4ee]">
              <Image
                src="/images/blog/56.png"
                alt="Questions That Met a Master book cover"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-[clamp(1.05rem,2.2vw,1.4rem)] font-semibold leading-[1.35] text-[var(--text-heading)] mb-2">
                QUESTIONS THAT MET A MASTER: DIALOGUES IN KRIYAYOG AND INNER INQUIRY
              </h3>
              <p className="text-[0.78rem] uppercase tracking-[0.12em] text-[var(--text-muted)]/80 mb-4">
                SWAMI SHRI NISPRUH SPANDAN JI
              </p>
              <p className="text-[0.92rem] leading-[1.82] text-[var(--text-muted)] mb-6">
                Questions That Met a Master is not a book of spiritual answers-it is a journey through the
                living questions that shape a seeker&apos;s inner life. Drawn from the teachings of Paramahansa
                Swami Nispruh Spandan Ji and presented in an intimate question-and-answer format, this work
                explores meditation, mind, karma, fear, identity, surrender, Guru, and daily living with
                rare honesty and depth. Rather than offering philosophy or belief, the book gently
                dissolves assumptions and invites direct inner seeing. Rooted in the path of Kriyayog, it
                reveals spirituality not as an escape from life, but as a way of meeting life completely.
                For readers drawn to authentic inquiry, contemplative wisdom, and experiential spirituality,
                this book offers not conclusions, but a quiet space in which something deeper may begin to
                awaken.
              </p>
              <a
                href="https://www.amazon.in/dp/B0FF1PPQKC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full text-[0.88rem] font-semibold text-[#111111] bg-[#FF9900] hover:bg-[#f29000] transition-colors duration-200"
              >
                Buy on Amazon
              </a>
            </div>
          </motion.article>

          <motion.section
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--border-soft)]/60 bg-white p-6 sm:p-8"
            aria-label="Book release notifications"
          >
            <h3 className="text-[1.2rem] font-semibold text-[var(--text-heading)] mb-3">
              More books coming soon - sign up to be notified
            </h3>
            <form onSubmit={handleNotifySubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                placeholder="your@email.com"
                className="flex-1 rounded-full border border-[var(--border-soft)]/80 px-5 py-3 text-[0.9rem] text-[var(--text-heading)] bg-[var(--bg-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pista-green)]/50"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={notifyState.status === "loading"}
                className="rounded-full px-6 py-3 text-[0.88rem] font-semibold text-[#111111] bg-[#FF9900] hover:bg-[#f29000] transition-colors duration-200 disabled:opacity-70"
              >
                {notifyState.status === "loading" ? "Submitting..." : "Notify me"}
              </button>
            </form>
            <div aria-live="polite" role="status" className="mt-3 min-h-6">
              {notifyState.status === "success" && (
                <p className="text-[0.85rem] text-[var(--pista-green)]">{notifyState.message}</p>
              )}
              {notifyState.status === "error" && (
                <p className="text-[0.85rem] text-red-600">{notifyState.message}</p>
              )}
            </div>
          </motion.section>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-[var(--border-soft)]/50">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true }}
          >
            <span
              className="block text-[3rem] text-[var(--pista-green)]/25 font-serif leading-none mb-5 select-none"
              aria-hidden="true"
            >
              "
            </span>
            <blockquote className="border-0 p-0 not-italic">
              <p className="text-[1.02rem] leading-[1.85] text-[#5a5a5a] italic font-light max-w-[48ch] mx-auto">
                "The words in a scripture are fingers pointing at the moon. Read them until you stop
                reading and simply look."
              </p>
              <footer className="mt-5 text-[0.72rem] uppercase tracking-[0.18em] text-[var(--pista-green)] font-semibold not-italic">
                Shri Swami Nispruh Spandan
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
