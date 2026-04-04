import type { Metadata } from "next";
import AboutKriyaYogaPage from "./AboutKriyaYogaPage";

export const metadata: Metadata = {
  title: "About Kriya Yoga",
  description:
    "Discover the ancient science of Kriya Yoga — what it is, how it works, and the transformation it opens for sincere seekers.",
};

export default function AboutPage() {
  return <AboutKriyaYogaPage />;
}
