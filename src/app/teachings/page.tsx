import type { Metadata } from "next";
import TeachingsClient from "./TeachingsClient";
import StructuredData from "@/components/StructuredData";
import { getWebPageSchema, getOGMetadata, getTwitterMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kriya Yoga Teachings | Spiritual Wisdom & Ancient Knowledge",
  description:
    "Explore the core teachings of Kriya Yoga — breath, awareness, lineage wisdom, and the path of sincere self-inquiry. Profound spiritual teachings for inner awakening.",
  keywords: [
    "kriya yoga teachings",
    "spiritual wisdom",
    "yoga philosophy",
    "self-inquiry",
    "inner awakening",
    "spiritual knowledge",
  ],
  alternates: {
    canonical: `${SITE_URL}/teachings`,
  },
  openGraph: getOGMetadata({
    title: "Kriya Yoga Teachings | Spiritual Wisdom",
    description: "Discover profound teachings of Kriya Yoga for inner awakening.",
    type: "website",
    url: `${SITE_URL}/teachings`,
    image: `${SITE_URL}/images/og-teachings.png`,
  }),
  twitter: getTwitterMetadata({
    title: "Kriya Yoga Teachings - Spiritual Wisdom",
    description: "Explore profound teachings for spiritual awakening.",
    image: `${SITE_URL}/images/twitter-teachings.png`,
  }),
};

export default function TeachingsPage() {
  const schemaData = getWebPageSchema({
    title: "Kriya Yoga Teachings",
    description: "Core teachings of Kriya Yoga for sincere seekers on the path of self-inquiry.",
    url: `${SITE_URL}/teachings`,
  });

  return (
    <>
      <StructuredData data={schemaData} />
      <TeachingsClient />
    </>
  );
}
