import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Short reflections on practice, quiet living, and the daily unfolding of awareness. Written when there is something simple and true to share.",
};

export default function BlogPage() {
  return <BlogClient />;
}
