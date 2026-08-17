/**
 * Homepage — Nispruhyog
 *
 * Section order mirrors the intended visitor journey:
 *   Hero → What is it → Benefits → Programs → Journey →
 *   Teacher → Testimonials → Final CTA → Contact
 */

import { Hero } from "../components/Hero";
import WhatIsKriyaYoga from "../components/WhatIsKriyaYoga";
import Benefits from "../components/Benefits";
import Programs from "../components/Programs";
import { UpcomingEventBanner } from "../components/UpcomingEventBanner";
import { Journey } from "../components/Journey";
import AboutTeacher from "../components/AboutTeacher";
import { Testimonials } from "../components/Testimonials";
import FinalCTA from "../components/FinalCTA";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1 · Full-screen entry point */}
      <Hero />

      {/* 2 · Orient the curious visitor */}
      <WhatIsKriyaYoga />

      {/* 3 · Show what opens through practice */}
      <Benefits />

      {/* 4 · Present available offerings */}
      <Programs />

      {/* 5 · Highlight the next opportunity to practice together */}
      <UpcomingEventBanner />

      {/* 6 · Show where they are on the path */}
      <Journey />

      {/* 7 · Build trust through the teacher */}
      <AboutTeacher />

      {/* 8 · Let practitioners speak */}
      <Testimonials />

      {/* 9 · Invite action — warmly, without pressure */}
      <FinalCTA />

      {/* 10 · Open door for direct contact */}
      <ContactSection />
    </>
  );
}
