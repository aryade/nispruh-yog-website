import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Mistake Is Not Outside—It Lies in Inner Desire | Teachings",
  description:
    "A teaching on taking responsibility for our own inner desires, expectations and perceptions rather than blaming external circumstances.",
};

export default function MistakeNotOutsidePage() {
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
              The Mistake Is Not Outside—It Lies in Inner Desire
            </h1>
            <p className="text-[1.02rem] leading-[1.85] text-[var(--text-muted)] max-w-[48ch]">
              Part 1 — On taking responsibility for our expectations and the way we perceive the world. Based on the teachings of Paramahamsa Swami Shri Nispruh Spandanji.
            </p>
          </header>

          <article className="prose prose-sm max-w-none text-[var(--text-body)] mt-12">
            <p>
              My Beloved Souls,
            </p>

            <p>
              With Love!
            </p>

            <h2>The Wonder of Human Experience</h2>

            <p>
              The greatest wonder of human life is this: people experience so much, yet learn so little from their experiences.
            </p>

            <p>
              One relationship ends and another begins.
            </p>

            <p>
              One desire is fulfilled and ten new desires arise.
            </p>

            <p>
              One problem comes to an end, only for another to appear.
            </p>

            <p>
              A person believes that if circumstances change, life will change. But they fail to see that it is not the circumstances that cause suffering—it is the way they perceive them.
            </p>

            <h2>Projecting Blame Outward</h2>

            <p>
              Whenever a relationship breaks, we say:
            </p>

            <blockquote>
              <p>
                "They betrayed me."
              </p>
              <p>
                "They never understood me."
              </p>
            </blockquote>

            <p>
              But rarely do we look within and ask:
            </p>

            <blockquote>
              <p>
                "Were my own expectations the real cause of my suffering?"
              </p>
            </blockquote>

            <p>
              This is where ignorance begins.
            </p>

            <h2>The Image We Construct</h2>

            <p>
              The mistake does not lie in a woman.
            </p>

            <p>
              The mistake does not lie in a man.
            </p>

            <p>
              The mistake lies in the image we have projected onto another person.
            </p>

            <p>
              We expect others to live according to our desires. And when they fail to do so, we make them the guilty one.
            </p>

            <p>
              This is humanity's greatest deception—
            </p>

            <p>
              Projecting our own mistake onto someone else.
            </p>

            <h2>The Beginning of Transformation</h2>

            <p>
              The moment you accept responsibility for yourself, transformation begins.
            </p>

            <p>
              The one who can honestly see their own mistakes no longer feels the need to change the world.
            </p>

            <h2>The Unstable Nature of Mind</h2>

            <p>
              Consider how unstable the mind itself is.
            </p>

            <p>
              You cannot hold even a single thought steady for more than a few moments.
            </p>

            <p>
              Thoughts arise.
            </p>

            <p>
              They pass away.
            </p>

            <p>
              They change.
            </p>

            <p>
              They disappear.
            </p>

            <p>
              And yet it is upon this restless mind that we base the decisions of an entire lifetime.
            </p>

            <h2>What is Truly Impermanent</h2>

            <p>
              That is why Dharma teaches:
            </p>

            <blockquote>
              <p>
                The world itself is not impermanent; it is the world created by your mind that is impermanent.
              </p>
            </blockquote>

            <p>
              The Supreme Reality is eternal.
            </p>

            <p>
              But the images your desires project upon that Reality—that is what you call the world.
            </p>

            <p>
              Where there is imagination born of desire, disappointment is inevitable.
            </p>

            <p>
              Where there are expectations, suffering is inevitable.
            </p>

            <h2>The First Step</h2>

            <p>
              Therefore, the first step is this:
            </p>

            <blockquote>
              <p>
                Stop trying to change others. Change the way you see.
              </p>
            </blockquote>

            <p>
              That is where true spiritual practice begins.
            </p>

            <p className="italic">
              — Paramahamsa Swami Shri Nispruh Spandanji
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}
