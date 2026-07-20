/**
 * SEO utilities and configurations for the Kriya Yoga website
 * Follows Google's SEO best practices and Web Core Vitals standards
 */

export const SITE_URL = "https://nispruhyog.com"; // Update with your actual domain
export const SITE_NAME = "Nispruhyog";
export const BRAND_NAME = "Nispruhyog";

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  robots?: string;
}

/**
 * Generate canonical URL
 * Prevents duplicate content issues by specifying the preferred version of a page
 * @param path - Page path (e.g., '/about-kriya-yoga')
 * @returns Absolute canonical URL
 */
export function getCanonicalURL(path: string): string {
  return `${SITE_URL}${path}`;
}

/**
 * Generate Open Graph metadata object
 * Improves social media sharing appearance and click-through rates
 */
export function getOGMetadata(config: {
  title: string;
  description: string;
  type?: "website" | "article" | "profile";
  image?: string;
  url?: string;
}) {
  return {
    title: config.title,
    description: config.description,
    type: config.type || "website",
    url: config.url,
    siteName: SITE_NAME,
    images: config.image ? [{ url: config.image, width: 1200, height: 630, alt: config.title }] : undefined,
  };
}

/**
 * Generate Twitter Card metadata
 * Optimizes appearance when shared on Twitter/X
 */
export function getTwitterMetadata(config: {
  title: string;
  description: string;
  image?: string;
  creator?: string;
}) {
  return {
    card: "summary_large_image" as const,
    title: config.title,
    description: config.description,
    image: config.image,
    creator: config.creator || "@nispruhyog", // Update with your Twitter handle
    site: "@nispruhyog",
  };
}

/**
 * Generate Organization Schema
 * Helps search engines understand your business structure and contact info
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    alternateName: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo_A_tnsp.png`,
    description: "A sacred space for sincere seekers. Rooted in the ancient science of Kriyayog — a path of breath, awareness and inner inquiry.",
    sameAs: [
      "https://www.facebook.com/nispruhyog", // Update with your actual social URLs
      "https://www.instagram.com/nispruhyog",
      "https://www.youtube.com/@nispruhyog",
    ],
    contact: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX", // Update with your phone
      contactType: "Customer Service",
      email: "contact@nispruhyog.com", // Update with your email
      availableLanguage: "en",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US", // Update as needed
      addressRegion: "State", // Update as needed
      addressLocality: "City", // Update as needed
    },
  };
}

/**
 * Generate Person Schema for teacher/founder
 * Builds authority and helps with knowledge panels
 */
export function getPersonSchema(config?: {
  name?: string;
  description?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: config?.name || "Teacher Name",
    description: config?.description || "A guide in the ancient science of Kriyayog",
    image: config?.image,
    knowsAbout: ["Kriyayog", "Meditation", "Pranayama", "Spiritual Practice"],
    workLocation: {
      "@type": "Place",
      name: SITE_NAME,
    },
  };
}

/**
 * Generate BreadcrumbList Schema
 * Improves navigation visibility in search results
 * @param breadcrumbs - Array of {name, url} objects
 */
export function getBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * Generate Article Schema
 * Helps search engines understand article content for better ranking
 */
export function getArticleSchema(config: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: config.title,
    description: config.description,
    image: config.image ? [config.image] : undefined,
    datePublished: config.datePublished,
    dateModified: config.dateModified || config.datePublished,
    author: {
      "@type": "Person",
      name: config.author || SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo_A_tnsp.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": config.url,
    },
  };
}

/**
 * Generate WebPage Schema
 * Provides general structured data about a page
 */
export function getWebPageSchema(config: {
  title: string;
  description: string;
  url: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: config.title,
    description: config.description,
    url: config.url,
    dateModified: config.dateModified,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

/**
 * Generate LocalBusiness Schema
 * Helps with local search visibility (if applicable)
 */
export function getLocalBusinessSchema(config?: {
  businessType?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description: "A sacred space for sincere seekers practicing Kriyayog",
    url: SITE_URL,
    telephone: "+1-XXX-XXX-XXXX",
    address: {
      "@type": "PostalAddress",
      streetAddress: config?.address || "Street Address",
      addressLocality: config?.city || "City",
      addressRegion: config?.state || "State",
      postalCode: config?.zipCode || "12345",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7128,
      longitude: -74.006,
    },
    openingHours: "Mo-Su 06:00-20:00",
    priceRange: "$$",
  };
}

/**
 * Common SEO keywords for the Kriya Yoga website
 * Use naturally throughout content, not keyword-stuffing
 */
export const SEO_KEYWORDS = {
  general: ["Kriya Yoga", "Meditation", "Spiritual practice", "Pranayama", "Breath awareness"],
  specific: [
    "Kriyayog technique",
    "Ancient meditation practice",
    "Spiritual awakening",
    "Inner peace",
    "Yoga for beginners",
    "Meditation for anxiety",
    "Breath control techniques",
  ],
};

/**
 * Image alt text templates
 * Improves accessibility and image SEO
 */
export const IMAGE_ALT_TEMPLATES = {
  logo: "Nispruhyog logo - sacred symbol",
  teacher: "Teacher leading meditation practice",
  meditation: "Person meditating in peaceful setting",
  breathwork: "Guide demonstrating pranayama breathing technique",
  community: "Meditation community practicing together",
};

/**
 * Common internal links for SEO
 * Helps with site structure and page authority distribution
 */
export const INTERNAL_LINKS = {
  homepage: "/",
  aboutKriyaYoga: "/about-kriya-yoga",
  practices: "/practices",
  teachings: "/teachings",
  courses: "/courses-programs",
  events: "/events-retreats",
  blog: "/blog",
  contact: "/contact",
};
