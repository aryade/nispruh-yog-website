import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Nispruh Yog — for questions about courses, retreats, or simply to say hello. We respond mindfully, without urgency.",
};

export default function ContactPage() {
  return <ContactClient />;
}
