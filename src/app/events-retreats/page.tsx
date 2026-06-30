import type { Metadata } from "next";
import EventsClient from "./EventsClient";
import StructuredData from "@/components/StructuredData";
import { getWebPageSchema, getOGMetadata, getTwitterMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kriya Yoga Retreats & Events | Meditation Gatherings",
  description:
    "Upcoming Kriya Yoga events, silent retreats, and community gatherings. Each is an invitation to rest, deepen practice, and return to stillness with sincere seekers.",
  keywords: [
    "yoga retreats",
    "meditation events",
    "spiritual gatherings",
    "silent retreat",
    "kriya yoga retreat",
    "workshops",
  ],
  alternates: {
    canonical: `${SITE_URL}/events-retreats`,
  },
  openGraph: getOGMetadata({
    title: "Kriya Yoga Retreats & Events",
    description: "Silent retreats and community meditation events for sincere practitioners.",
    type: "website",
    url: `${SITE_URL}/events-retreats`,
    image: `${SITE_URL}/images/og-events.png`,
  }),
  twitter: getTwitterMetadata({
    title: "Kriya Yoga Retreats & Events",
    description: "Join community meditation retreats and spiritual gatherings.",
    image: `${SITE_URL}/images/twitter-events.png`,
  }),
};

export default function EventsRetreatsPage() {
  const schemaData = getWebPageSchema({
    title: "Kriya Yoga Retreats & Events",
    description: "Upcoming silent retreats, events, and community gatherings for Kriya Yoga practitioners.",
    url: `${SITE_URL}/events-retreats`,
  });

  return (
    <>
      <StructuredData data={schemaData} />
      <EventsClient />
    </>
  );
}
