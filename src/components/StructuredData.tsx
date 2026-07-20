/**
 * StructuredData Component
 * Renders JSON-LD structured data for search engines
 * Improves rich snippets, knowledge panels and semantic understanding
 */

interface StructuredDataProps {
  data: Record<string, unknown>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      suppressHydrationWarning
    />
  );
}
