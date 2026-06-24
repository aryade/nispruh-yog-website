import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Shadow of Prejudice | Teachings",
  description:
    "A teaching on moving beyond the judgment of others and finding peace within, based on the writings of Paramahamsa Shri Swami Nispruh Spandan.",
};

export default function ShadowOfPrejudicePage() {
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
              The Shadow of Prejudice: Finding Peace Beyond the Judgment of Others
            </h1>
            <p className="text-[1.02rem] leading-[1.85] text-[var(--text-muted)] max-w-[48ch]">
              Based on the teachings of Paramahamsa Shri Swami Nispruh Spandan.
            </p>
          </header>

          <article className="prose prose-sm max-w-none text-[var(--text-body)] mt-12">
            <p>
              One of the most liberating moments in a seeker&apos;s life is realizing that you are not responsible for the illusions other people create about you.
            </p>

            <p>
              When someone forms a false impression of you, your actual truth, your goodness, and your pure intentions cease to matter to them. Their vision is veiled by prejudice. In the court of their mind, you have already been declared guilty, and no amount of evidence will change the verdict.
            </p>

            <h2>The Illusion of Judgment</h2>

            <p>
              People caught in the shadow of prejudice do not listen to understand; they only listen to find justification for their own narrative. Through this distorted lens, your virtues are systematically inverted:
            </p>

            <ul>
              <li>
                Your <strong>silence</strong> is labeled as arrogance or ego.
              </li>
              <li>
                Your <strong>restraint</strong> is viewed as cunning calculation.
              </li>
              <li>
                Your <strong>simplicity</strong> is interpreted as hidden selfishness.
              </li>
            </ul>

            <p>
              They are not interacting with you as you truly are. Instead, they have accepted their own imagination as truth, projected their internal fears onto you, and passed judgment on their own creation.
            </p>

            <hr />

            <h2>The Wisdom of Non-Explanation</h2>

            <p>
              In the practice of self-awareness and spiritual growth, we learn a profound truth: <strong>It is not your duty to shatter every illusion held by others.</strong> Constantly explaining yourself, defending your character, or pleading for validation from those who choose to misunderstand you is an exhausting cycle. It ultimately diminishes your self-esteem and drains your vital energy.
            </p>

            <blockquote>
              <p>
                “Whoever wants to understand you from the heart doesn&apos;t need any proof. And the one who doesn&apos;t want to understand you will always find you wrong—no matter how good you are.”
              </p>
            </blockquote>

            <h2>Turning Inward: The Path of True Victory</h2>

            <p>
              When the fog of doubt covers someone&apos;s eyes, even the brightest light appears as darkness. If you try to force them to see, you only exhaust your own spirit.
            </p>

            <ol>
              <li>
                <strong>Some questions have silent answers.</strong> You do not need to provide a daily statement of your existence to justify your place in this world.
              </li>
              <li>
                <strong>Some relationships naturally end in silence.</strong> Letting go without anger or resentment is a vital step toward inner freedom.
              </li>
              <li>
                <strong>Validation comes from within.</strong> Your connection to truth, innocence, and your highest self is the only anchor you truly need.
              </li>
            </ol>

            <p>
              If others choose to hold onto a false image of you, let them. Walking away quietly and continuing to live authentically on the path of truth is not a defeat. It is the ultimate victory of the soul.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}
