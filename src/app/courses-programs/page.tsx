import type { Metadata } from "next";
import CoursesClient from "./CoursesClient";
import StructuredData from "@/components/StructuredData";
import { getWebPageSchema, getOGMetadata, getTwitterMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kriya Yoga Courses & Programs | Meditation Training",
  description:
    "Explore Kriya Yoga courses and programs — from introductory meditation classes to the full 8-week initiation and residential retreats for sincere seekers.",
  keywords: [
    "kriya yoga courses",
    "meditation training",
    "yoga programs",
    "initiation course",
    "retreats",
    "pranayama training",
  ],
  alternates: {
    canonical: `${SITE_URL}/courses-programs`,
  },
  openGraph: getOGMetadata({
    title: "Kriya Yoga Courses & Programs | Complete Training",
    description: "Learn Kriya Yoga through structured courses from introductory to advanced.",
    type: "website",
    url: `${SITE_URL}/courses-programs`,
    image: `${SITE_URL}/images/og-courses.png`,
  }),
  twitter: getTwitterMetadata({
    title: "Kriya Yoga Courses & Programs",
    description: "Structured meditation and breathing training programs.",
    image: `${SITE_URL}/images/twitter-courses.png`,
  }),
};

export default function CoursesProgramsPage() {
  const schemaData = getWebPageSchema({
    title: "Kriya Yoga Courses & Programs",
    description: "Complete courses from introductory to advanced levels in Kriya Yoga practice.",
    url: `${SITE_URL}/courses-programs`,
  });

  return (
    <>
      <StructuredData data={schemaData} />
      <CoursesClient />
    </>
  );
}
