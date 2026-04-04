import type { Metadata } from "next";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "Events & Retreats",
  description:
    "Upcoming Kriya Yoga events, silent retreats, and community gatherings. Each is an invitation to rest, deepen, and return to stillness.",
};

export default function EventsRetreatsPage() {
  return <EventsClient />;
}
