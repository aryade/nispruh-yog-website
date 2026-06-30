import type { Metadata } from "next";
import PracticesClient from "./PracticesClient";
import StructuredData from "@/components/StructuredData";
import { getWebPageSchema, getOGMetadata, getTwitterMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kriya Yoga Practices | Breathing, Meditation & Rituals Guide",
  description:
    "Step-by-step practice guides for Kriya Yoga — breath work, mantra repetition, meditation, and daily rituals for sincere seekers at every stage. Learn proven techniques.",
  keywords: [
    "kriya yoga practices",
    "breathing exercises",
    "pranayama techniques",
    "meditation practices",
    "spiritual rituals",
    "breathwork guide",
  ],
  alternates: {
    canonical: `${SITE_URL}/practices`,
  },
  openGraph: getOGMetadata({
    title: "Kriya Yoga Practices | Complete Practice Guides",
    description: "Master step-by-step Kriya Yoga breathing and meditation practices.",
    type: "website",
    url: `${SITE_URL}/practices`,
    image: `${SITE_URL}/images/og-practices.png`,
  }),
  twitter: getTwitterMetadata({
    title: "Kriya Yoga Practices - Breathing & Meditation Guides",
    description: "Learn proven Kriya Yoga techniques for transformation.",
    image: `${SITE_URL}/images/twitter-practices.png`,
  }),
};

export default function PracticesPage() {
  const schemaData = getWebPageSchema({
    title: "Kriya Yoga Practices",
    description: "Complete step-by-step guides for Kriya Yoga breathing and meditation practices.",
    url: `${SITE_URL}/practices`,
  });

  return (
    <>
      <StructuredData data={schemaData} />
      <PracticesClient />
    </>
  );
}
