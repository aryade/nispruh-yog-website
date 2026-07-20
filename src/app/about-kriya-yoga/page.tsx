import type { Metadata } from "next";
import AboutKriyaYogaPage from "./AboutKriyaYogaPage";
import StructuredData from "@/components/StructuredData";
import { getWebPageSchema, getOGMetadata, getTwitterMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "What is Kriya Yoga? Ancient Meditation Science Explained",
  description:
    "Discover the ancient science of Kriya Yoga — what it is, how it works and the transformation it opens for sincere seekers. Learn about pranayama and spiritual practice.",
  keywords: [
    "Kriya Yoga",
    "what is kriya yoga",
    "meditation technique",
    "pranayama",
    "ancient yoga science",
    "spiritual practice",
  ],
  alternates: {
    canonical: `${SITE_URL}/about-kriya-yoga`,
  },
  openGraph: getOGMetadata({
    title: "What is Kriya Yoga? Ancient Meditation Science Explained",
    description: "Discover the ancient science of Kriya Yoga and how it transforms consciousness.",
    type: "article",
    url: `${SITE_URL}/about-kriya-yoga`,
    image: `${SITE_URL}/images/og-kriya-yoga.png`,
  }),
  twitter: getTwitterMetadata({
    title: "What is Kriya Yoga? Ancient Meditation Science",
    description: "Discover how Kriya Yoga practice opens transformation.",
    image: `${SITE_URL}/images/twitter-kriya-yoga.png`,
  }),
};

export default function AboutPage() {
  const schemaData = getWebPageSchema({
    title: "What is Kriya Yoga?",
    description: "Discover the ancient science of Kriya Yoga and its transformative practice.",
    url: `${SITE_URL}/about-kriya-yoga`,
  });

  return (
    <>
      <StructuredData data={schemaData} />
      <AboutKriyaYogaPage />
    </>
  );
}
