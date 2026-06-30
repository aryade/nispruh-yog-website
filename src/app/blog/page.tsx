import type { Metadata } from "next";
import BlogClient from "./BlogClient";
import StructuredData from "@/components/StructuredData";
import { getWebPageSchema, getOGMetadata, getTwitterMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Blog | Reflections on Kriya Yoga Practice & Spiritual Living",
  description:
    "Short reflections on Kriya Yoga practice, quiet living, and the daily unfolding of awareness. Written when there is something simple and true to share with sincere seekers.",
  keywords: [
    "yoga blog",
    "meditation reflections",
    "spiritual writings",
    "practice insights",
    "kriya yoga blog",
    "mindfulness",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: getOGMetadata({
    title: "Blog | Spiritual Reflections on Kriya Yoga Practice",
    description: "Read thoughtful reflections on meditation, practice, and inner awakening.",
    type: "website",
    url: `${SITE_URL}/blog`,
    image: `${SITE_URL}/images/og-blog.png`,
  }),
  twitter: getTwitterMetadata({
    title: "Blog - Spiritual Reflections",
    description: "Insights on Kriya Yoga practice and spiritual living.",
    image: `${SITE_URL}/images/twitter-blog.png`,
  }),
};

export default function BlogPage() {
  const schemaData = getWebPageSchema({
    title: "Blog - Spiritual Reflections",
    description: "Reflections on Kriya Yoga practice and the unfolding of awareness.",
    url: `${SITE_URL}/blog`,
  });

  return (
    <>
      <StructuredData data={schemaData} />
      <BlogClient />
    </>
  );
}
