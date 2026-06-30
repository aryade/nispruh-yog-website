"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getBreadcrumbSchema, SITE_URL } from "@/lib/seo";
import StructuredData from "./StructuredData";

interface BreadcrumbItem {
  name: string;
  path?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

/**
 * Breadcrumb Navigation Component
 * - Improves user navigation and UX
 * - Adds breadcrumb schema for search engines
 * - Helps distribute page authority throughout site
 * - Typically increases CTR in search results
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const pathname = usePathname();

  // Generate breadcrumbs from URL if not provided
  const defaultItems: BreadcrumbItem[] = [{ name: "Home", path: "/" }];
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0) {
    let path = "";
    for (const segment of segments) {
      path += `/${segment}`;
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      defaultItems.push({ name: label, path });
    }
    // Remove the last item's link (current page)
    defaultItems[defaultItems.length - 1].path = undefined;
  }

  const breadcrumbs = items || defaultItems;

  // Build schema data
  const schemaItems = breadcrumbs
    .filter((item) => item.path) // Only include items with paths
    .map((item) => ({
      name: item.name,
      url: `${SITE_URL}${item.path}`,
    }));

  return (
    <>
      <StructuredData data={getBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
        <ol className="flex flex-wrap items-center gap-2">
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center">
              {item.path ? (
                <>
                  <Link href={item.path} className="text-pista-green hover:underline">
                    {item.name}
                  </Link>
                  {index < breadcrumbs.length - 1 && <span className="mx-2 text-gray-400">/</span>}
                </>
              ) : (
                <>
                  <span className="text-gray-900 dark:text-gray-100 font-medium">{item.name}</span>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
