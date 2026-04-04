import type { Metadata } from "next";
import TeachingsClient from "./TeachingsClient";

export const metadata: Metadata = {
  title: "Teachings",
  description:
    "Explore the core teachings of Kriya Yoga — breath, awareness, lineage, and the path of sincere self-inquiry.",
};

export default function TeachingsPage() {
  return <TeachingsClient />;
}
