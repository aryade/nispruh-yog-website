import type { Metadata } from "next";
import PracticesClient from "./PracticesClient";

export const metadata: Metadata = {
  title: "Practices",
  description:
    "Step-by-step practice guides for Kriya Yoga — breath, mantra, meditation, and daily rituals for sincere seekers at every stage.",
};

export default function PracticesPage() {
  return <PracticesClient />;
}
