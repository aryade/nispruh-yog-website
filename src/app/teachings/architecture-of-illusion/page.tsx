import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Architecture of Illusion | Teachings",
  description:
    "A teaching on recognizing narcissistic manipulation and reclaiming your inner center through spiritual awareness.",
};

export default function ArchitectureOfIllusionPage() {
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
              The Architecture of Illusion: Recognizing the Trap of Narcissistic Manipulation
            </h1>
            <p className="text-[1.02rem] leading-[1.85] text-[var(--text-muted)] max-w-[48ch]">
              Based on the teachings of Swami Nisprih Spandan.
            </p>
          </header>

          <article className="prose prose-sm max-w-none text-[var(--text-body)] mt-12">
            <p>
              Spiritual growth requires us to be acutely aware of where we invest our energy. One of the most subtle, draining and spiritually displacing experiences a person can undergo is the encounter with narcissism.
            </p>

            <p>
              It is a bond that begins not with conflict, but with an overwhelming sense of beauty and connection. To break free from this cycle and reclaim your inner center, you must understand how this illusion is woven.
            </p>

            <h2>Phase 1: The Mirage of the Perfect Mirror</h2>

            <p>
              In the beginning, a narcissistic connection feels like a spiritual homecoming. They appear incredibly special, deeply caring and profoundly understanding. They listen to your every word and make you feel uniquely seen.
            </p>

            <p>You will often hear phrases like:</p>

            <ul>
              <li>“There is absolutely no one like you.”</li>
              <li>“I have never trusted anyone as much as I trust you.”</li>
              <li>“You are the absolute best part of my life.”</li>
            </ul>

            <p>
              Because human beings naturally long for deep connection, you believe them. Slowly, almost imperceptibly, they become your entire world. Your priorities shift, your friendships fade into the background and your happiness becomes entirely dependent on their validation.
            </p>

            <p>
              You look at this intensity and think, <em>“This is love.”</em> But in reality, this is where the first trap is laid.
            </p>

            <h2>Phase 2: The Cycle of Confusion and Self-Doubt</h2>

            <p>
              Once you are anchored in the relationship, the landscape changes. The consistency vanishes, replaced by a destabilizing pattern of hot and cold behavior.
            </p>

            <ul>
              <li>Sometimes they are intensely close; suddenly, they are distant and cold.</li>
              <li>One day they pamper you; the next, they ignore you without any explanation.</li>
            </ul>

            <p>
              Naturally, your mind turns inward to find the fault. You begin to ask yourself: <em>“What did I do wrong? Am I falling short? Am I just overthinking?”</em> To keep the peace and prevent them from drifting away, you begin to alter your own behavior. You speak less. You hide your needs. You shrink your personality so as not to trigger their anger or withdrawal.
            </p>

            <h2>Phase 3: The Erosion of Reality (Gaslighting)</h2>

            <p>
              As your boundaries weaken, the behavior shifts from emotional distance to subtle emotional attacks. They will compliment you in one breath and strike at your deepest insecurity in the next.
            </p>

            <p>
              When you react to the hurt, your pain is immediately weaponized against you with dismissing phrases:
            </p>

            <blockquote>
              <p>“I was only joking.”</p>
              <p>“Why are you so sensitive?”</p>
              <p>“You just take everything to heart.”</p>
            </blockquote>

            <p>
              Slowly, you fall silent. You begin to doubt your own intuition, your own understanding and your own emotions. You allow them to dictate your reality. What hurts you is normalized; your valid pain is labeled as “overthinking.”
            </p>

            <h3>The Narcissistic Loop</h3>

            <p>
              Empathy & Praise ➔ Sudden Coldness ➔ Your Self-Doubt ➔ Boundary Erosion ➔ Total Manipulation
            </p>

            <p>
              To survive in this environment, you start making excuses for them. You tell yourself they had a painful past, or that they are truly good deep inside. In doing this, you fall in love with their potential rather than facing their reality.
            </p>

            <h2>The Ultimate Trap: Living in the Middle</h2>

            <p>
              A narcissist will never let you lose them completely, nor will they ever allow you to find them completely. They keep you suspended precisely in the middle.
            </p>

            <p>
              They give you just enough hope so that you do not leave, but withhold enough security so that you never feel safe enough to question them. This is the core strategy of narcissism.
            </p>

            <p>
              It is a process where you gradually distance yourself from your own soul until you have made them your everything. The most dangerous element of this dynamic is its invisibility: you do not realize you are being manipulated until you have completely lost yourself.
            </p>

            <h2>The Path to Awakening: It Was Not Your Weakness</h2>

            <p>
              If these words resonate with your experience, it is vital to understand this spiritual truth: your entrapment was not a reflection of your weakness. It was a reflection of their strategy.
            </p>

            <p>
              Your willingness to love, to forgive and to see the good in others is a beautiful, pure quality. It was simply misdirected toward someone who used those virtues to bind you.
            </p>

            <p>
              Recognizing this pattern is the first step of your awakening. Reclaiming your reality, trusting your intuition and pulling your energy back into your own being is where your true spiritual power is reborn.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}
