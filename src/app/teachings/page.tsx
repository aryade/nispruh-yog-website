import type { Metadata } from "next";
import TeachingsClient from "./TeachingsClient";

export const metadata: Metadata = {
  title: "Teachings",
  description:
    "Explore the core teachings of Kriyayog — breath, awareness, lineage, and the path of sincere self-inquiry.",
};

export default function TeachingsPage() {
  return <TeachingsClient />;
}
