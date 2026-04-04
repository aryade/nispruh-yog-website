"use client";

import { motion, type Variants } from "framer-motion";
import { ContactForm } from "./ContactForm";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const STAGGER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.05 } },
};

export default function ContactSection() {
  return (
    <section
      id="join"
      aria-labelledby="contact-heading"
      className="py-24 bg-[#F7F5F2] border-t border-[#d6c9b8]/50"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — heading & assurance */}
          <motion.div
            variants={STAGGER}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p
              variants={FADE_UP}
              className="text-[0.72rem] uppercase tracking-[0.2em] text-[#5F7A61] font-semibold mb-5"
            >
              Reach out
            </motion.p>

            <motion.h2
              id="contact-heading"
              variants={FADE_UP}
              className="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight text-[#1F2A44] mb-6"
            >
              A quiet word
              <br />
              <span className="text-[#5F7A61]">is always welcome</span>
            </motion.h2>

            <motion.p
              variants={FADE_UP}
              className="text-[1rem] leading-[1.85] text-[#7A7A7A] max-w-[38ch] mb-10"
            >
              If you feel drawn — to a class, a course, or simply to ask a
              question — send a short note. We respond from a mindful place,
              without urgency or sales pressure.
            </motion.p>

            {/* Quiet assurances */}
            <motion.ul
              variants={FADE_UP}
              role="list"
              className="flex flex-col gap-4"
            >
              {[
                "No obligation or commitment required",
                "We reply within two to three days",
                "Your details are never shared",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.88rem] text-[#7A7A7A]">
                  <span
                    className="mt-[0.35rem] w-1.5 h-1.5 rounded-full bg-[#5F7A61]/50 shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* Pull quote */}
            <motion.blockquote
              variants={FADE_UP}
              className="mt-12 border-l-2 border-[#5F7A61]/30 pl-5 not-italic"
            >
              <p className="text-[0.95rem] leading-[1.8] text-[#7A7A7A]/80 italic font-light">
                "The door is always open. There is no wrong time to knock."
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
            viewport={{ once: true, margin: "-60px" }}
            className="bg-white rounded-2xl border border-[#d6c9b8]/60 p-8 shadow-[0_8px_40px_rgba(31,42,68,0.06)]"
          >
            <ContactForm />
            <p className="fine mt-4 text-center">
              No push. No urgency. Just an invitation.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
