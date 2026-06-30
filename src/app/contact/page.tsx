import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import StructuredData from "@/components/StructuredData";
import { getWebPageSchema, getOGMetadata, getTwitterMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Nispruh Yog | Get in Touch",
  description:
    "Reach out to Nispruh Yog — for questions about courses, retreats, or simply to say hello. We respond mindfully. Contact us for more information about Kriya Yoga practice.",
  keywords: [
    "contact",
    "get in touch",
    "email",
    "support",
    "inquiry",
    "reach out",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: getOGMetadata({
    title: "Contact Nispruh Yog",
    description: "Get in touch for questions about courses, retreats, or Kriya Yoga practice.",
    type: "website",
    url: `${SITE_URL}/contact`,
    image: `${SITE_URL}/images/og-contact.png`,
  }),
  twitter: getTwitterMetadata({
    title: "Contact Nispruh Yog",
    description: "Reach out for more information about our programs.",
    image: `${SITE_URL}/images/twitter-contact.png`,
  }),
};

export default function ContactPage() {
  const schemaData = getWebPageSchema({
    title: "Contact Nispruh Yog",
    description: "Get in touch with us for questions about Kriya Yoga courses, retreats, and programs.",
    url: `${SITE_URL}/contact`,
  });

  return (
    <>
      <StructuredData data={schemaData} />
      <ContactClient />
    </>
  );
}
