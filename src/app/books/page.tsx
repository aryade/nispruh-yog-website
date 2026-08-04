import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import StructuredData from "@/components/StructuredData";
import { getWebPageSchema, getOGMetadata, getTwitterMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Books by SWAMI SHRI NISPRUH SPANDAN JI",
  description:
    "Spiritual books by SWAMI SHRI NISPRUH SPANDAN JI, available on Amazon. Sacred Kriyayog wisdom in English.",
  keywords: [
    "kriyayog books",
    "swami shri nispruh spandan ji",
    "spiritual books",
    "kriya yoga teachings",
    "amazon books",
  ],
  alternates: {
    canonical: `${SITE_URL}/books`,
  },
  openGraph: getOGMetadata({
    title: "Books by SWAMI SHRI NISPRUH SPANDAN JI",
    description:
      "Sacred Kriyayog wisdom in English by SWAMI SHRI NISPRUH SPANDAN JI, available on Amazon.",
    type: "website",
    url: `${SITE_URL}/books`,
    image: `${SITE_URL}/images/og-blog.png`,
  }),
  twitter: getTwitterMetadata({
    title: "Books by SWAMI SHRI NISPRUH SPANDAN JI",
    description: "Spiritual books and contemplative teachings in English.",
    image: `${SITE_URL}/images/twitter-blog.png`,
  }),
};

export default function BooksPage() {
  const schemaData = getWebPageSchema({
    title: "Books by SWAMI SHRI NISPRUH SPANDAN JI",
    description:
      "Spiritual books by SWAMI SHRI NISPRUH SPANDAN JI, available on Amazon. Sacred Kriyayog wisdom in English.",
    url: `${SITE_URL}/books`,
  });

  return (
    <>
      <StructuredData data={schemaData} />
      <BlogClient />
    </>
  );
}
