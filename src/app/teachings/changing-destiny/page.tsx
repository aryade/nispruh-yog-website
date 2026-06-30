import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Can Destiny Be Changed? The Power of Austerity and Devotion | Teachings",
  description:
    "A teaching on how austerity (tapas) and devotion can transform your destiny, and the path to lasting happiness through surrender to God.",
};

export default function ChangingDestinyPage() {
  return (
    <div className="bg-[var(--bg-primary)]">
      <div className="border-b border-[var(--border-soft)]/50">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 py-6">
          <Link
            href="/teachings"
            className="inline-flex items-center gap-2 text-[0.85rem] font-medium text-[var(--pista-green)] hover:text-[var(--pista-green)]/80 transition-colors duration-200"
          >
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M13 8H3M7 12l-4-4 4-4" />
            </svg>
            Back to teachings
          </Link>
        </div>
      </div>

      <main className="py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <header className="max-w-3xl">
            <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[var(--pista-green)] font-semibold mb-4">
              Philosophy
            </p>
            <h1 className="text-[clamp(2.2rem,5vw,3.2rem)] font-semibold leading-[1.12] tracking-tight text-[var(--text-heading)] mb-6">
              Can Destiny Be Changed? The Power of Austerity and Devotion
            </h1>
            <p className="text-[1.02rem] leading-[1.85] text-[var(--text-muted)] max-w-[48ch]">
              A teaching on transforming your fate through tapas, name repetition, and complete surrender to the Divine.
            </p>
          </header>

          <article className="prose prose-sm max-w-none text-[var(--text-body)] mt-12">
            <h2>The Question of Destiny</h2>

            <p>
              <strong>Question: Maharaj Ji, if there is something I deeply desire but it is not in my destiny, how can I obtain it? Can destiny be changed?</strong>
            </p>

            <p>
              <strong>Answer:</strong> Yes, it can be changed. You can attain that thing.
            </p>

            <h2>The Path of Austerity</h2>

            <p>
              If you truly want it, begin observing just two fasts each month—the two Ekadashi fasts. Practice austerity (tapas). What is there that cannot be attained through austerity? If we engage in devotion (bhajan) and perform austerity, we can obtain whatever we desire.
            </p>

            <p>
              But if we neither practice devotion nor perform austerity, then we will receive only what is already written in our prarabdha (destiny shaped by past karma). Nothing beyond that can be attained. New destiny is created through austerity and devotion.
            </p>

            <h2>The Practice and Its Fruits</h2>

            <p>
              Observe fasts, chant God's holy name, and you can accomplish whatever you wish. Whatever you desire—wealth, a good car, a happy family—these are usually the kinds of aspirations people have. All of these desires will come to you as the "interest" earned through devotion, while the principal reward will be God Himself.
            </p>

            <p>
              So chant God's name with unwavering determination. Until your sins are destroyed through the repetition of the divine name (naam japa), you will not see its fruits. Your heart will feel restless, your mind will remain agitated. But the day your accumulated sins are destroyed through the chanting of God's name, a stream of bliss will begin to flow within you.
            </p>

            <h2>The Power of Tapas</h2>

            <p>
              Have faith. Austerity has such power that even if God does not wish to give, He will still have to grant its fruits.
            </p>

            <p>
              The problem is that we do not walk the path of truth. We live according to our own whims, yet expect the highest results. How can that be possible?
            </p>

            <h2>The Way of Truth and Surrender</h2>

            <p>
              Through pretence and hypocrisy, one cannot attain the highest state. One must practice truth. A performance or show may deceive people for a little while, but it can never grant complete happiness.
            </p>

            <p>
              Perfect and lasting happiness is found only in complete surrender to God, and only in devotion to Him.
            </p>

            <p className="italic">
              — Maharaj Ji
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}
