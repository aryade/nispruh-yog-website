import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Divine Call: Awakening to Your True Nature | Teachings",
  description:
    "A message on remembering your eternal relationship with the Divine, piercing the veil of Maya, and the sacred path of Kriya practice.",
};

export default function DivinCallAwakeningPage() {
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
              The Divine Call: Awakening to Your True Nature
            </h1>
            <p className="text-[1.02rem] leading-[1.85] text-[var(--text-muted)] max-w-[48ch]">
              A message on remembering your eternal relationship with the Divine and the sacred promise of Kriya practice. Based on the teachings of Swami Nispruha Spandan.
            </p>
          </header>

          <article className="prose prose-sm max-w-none text-[var(--text-body)] mt-12">
            <p>
              My Beloved Souls,
            </p>

            <p>
              With Love!
            </p>

            <p>
              I desire nothing from this world that belongs to you.
            </p>

            <p>
              Neither your wealth, nor your status, nor your praise.
            </p>

            <p>
              I have come only to fulfill a promise.
            </p>

            <p>
              I am committed to giving you that for which you prayed before Me across countless previous births. You asked for wholeness. You asked for liberation. You asked for the direct realization of Truth. Even today, My resolve remains the same—to lead you back to your true nature.
            </p>

            <h2>The Veil of Forgetting</h2>

            <p>
              Yet in this present life, you have forgotten those previous births, forgotten that sacred resolve, and forgotten your eternal relationship with Me. This forgetfulness is not real; it is merely a veil of My Maya that has covered your consciousness.
            </p>

            <p>
              The moment this veil of Maya is lifted, you will recognize yourself. You will remember who you truly are, who I am, and what you once asked of Me. Then all your searching will come to an end, and only one longing will remain—the longing for wholeness.
            </p>

            <h2>The Work is Yours Alone</h2>

            <p>
              But this veil is one that you must remove yourself.
            </p>

            <p>
              I can show you the path. I can point you in the right direction. I can shower My grace upon you without ceasing. But you alone must walk the path. No Guru can perform spiritual practice on behalf of the disciple.
            </p>

            <p>
              That is why I call to you again and again.
            </p>

            <p>
              Through every circumstance, every sign, every possible means, I continue to summon you. This call is not for My sake—it is for your own highest good. Yet you continue to walk in the deep sleep of Maya. You are unaware of your path, your direction, or your ultimate destination.
            </p>

            <h2>Awaken</h2>

            <p>
              Every moment of life, every breath, every passing second slips away with astonishing speed. Time waits for no one. By the time awakening dawns, much may already have slipped through your hands.
            </p>

            <p>
              Remember this:
            </p>

            <p>
              Every event in this world, every circumstance in your life, and even the veil of Maya that now covers you are all part of My divine arrangement. And along with that arrangement, I have also provided the way beyond it.
            </p>

            <h2>The Path Beyond Maya</h2>

            <p>
              That path is only this:
            </p>

            <ul>
              <li>Kriya (spiritual practice)</li>
              <li>Repetition of the Guru Mantra (Guru-mantra Japa)</li>
              <li>Daily worship of the Guru (your Chosen Deity)</li>
            </ul>

            <p>
              If, with faith, steadfastness, and regularity, you practice the Kriya I have given you, chant the Guru Mantra, and worship your chosen Guru or Deity every day, then this veil of Maya will surely be torn apart, and your consciousness will awaken to its true nature.
            </p>

            <p>
              I say this plainly:
            </p>

            <p>
              The only way to pierce My Maya is the path I have given you. Without spiritual practice, neither desire, nor intellectual reasoning, nor imagination can bring about true wholeness.
            </p>

            <h2>My Promise Remains</h2>

            <p>
              Even today, I am waiting for you.
            </p>

            <p>
              My promise remains unchanged.
            </p>

            <p>
              My call continues without interruption.
            </p>

            <p>
              Take just one step toward Truth, and My grace will hold your hand throughout the rest of the journey.
            </p>

            <p>
              Rise. Awaken. Practice. Know yourself.
            </p>

            <p>
              I am committed to leading you to wholeness.
            </p>

            <p className="italic">
              — Swami Nispruha Spandan
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}
