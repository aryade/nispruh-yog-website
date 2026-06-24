import type { Metadata } from "next";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = {
  title: "Courses & Programs",
  description:
    "Explore Kriyayog courses and programs — from introductory meditation classes to the full 8-week Kriyayog initiation and residential retreats.",
};

export default function CoursesProgramsPage() {
  return <CoursesClient />;
}
