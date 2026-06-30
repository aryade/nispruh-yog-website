/**
 * Dynamic Sitemap Generation
 * Generates XML sitemap at /sitemap.xml
 * Updates automatically when pages change
 * Helps search engines discover and index all pages
 */

const SITE_URL = "https://nispruhyog.com"; // Update with your actual domain

interface Page {
  path: string;
  priority?: number;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  lastmod?: string;
}

// Define all pages on your site
const pages: Page[] = [
  // Core pages
  { path: "/", priority: 1.0, changefreq: "weekly" },

  // Main navigation pages
  { path: "/about-kriya-yoga", priority: 0.9, changefreq: "monthly" },
  { path: "/practices", priority: 0.9, changefreq: "weekly" },
  { path: "/teachings", priority: 0.8, changefreq: "weekly" },
  { path: "/courses-programs", priority: 0.9, changefreq: "monthly" },
  { path: "/events-retreats", priority: 0.8, changefreq: "weekly" },
  { path: "/blog", priority: 0.8, changefreq: "daily" },

  // Key teaching pages
  { path: "/teachings/sacred-confluence", priority: 0.7, changefreq: "monthly" },
  { path: "/teachings/indulgence-to-understanding", priority: 0.7, changefreq: "monthly" },
  { path: "/teachings/architecture-of-illusion", priority: 0.7, changefreq: "monthly" },
  { path: "/teachings/armor-of-truth", priority: 0.7, changefreq: "monthly" },
  { path: "/teachings/shadow-of-prejudice", priority: 0.7, changefreq: "monthly" },
  { path: "/teachings/divine-call-awakening", priority: 0.7, changefreq: "monthly" },
  { path: "/teachings/changing-destiny", priority: 0.7, changefreq: "monthly" },
  { path: "/teachings/mistake-not-outside", priority: 0.7, changefreq: "monthly" },
  { path: "/teachings/rishyashringa", priority: 0.7, changefreq: "monthly" },

  // Contact page (lower priority but important)
  { path: "/contact", priority: 0.7, changefreq: "monthly" },

  // 404 page (no follow, but included for completeness)
  { path: "/404", priority: 0.1, changefreq: "yearly" },

  // Add practice pages dynamically (examples)
  // In production, fetch these from a database or API
  { path: "/practices/breath-awareness", priority: 0.8, changefreq: "monthly" },
  { path: "/practices/spine-resonance", priority: 0.8, changefreq: "monthly" },
];

// Add blog posts (example - in production fetch from API/database)
// { path: "/blog/post-title", priority: 0.7, changefreq: "monthly" },

/**
 * Generate XML sitemap
 * Format complies with sitemaps.org protocol
 */
function generateSiteMap(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          ({ path, priority = 0.8, changefreq = "weekly", lastmod }) =>
            `
        <url>
          <loc>${SITE_URL}${path}</loc>
          ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
        </url>
      `
        )
        .join("")}
    </urlset>
  `;
}

export async function GET() {
  const sitemap = generateSiteMap();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
