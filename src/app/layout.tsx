import type { Metadata, Viewport } from "next";
import Image from "next/image";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";
import StructuredData from "../components/StructuredData";
import { getOrganizationSchema, SITE_URL } from "@/lib/seo";
import { GoogleAnalytics } from "../components/GoogleAnalytics";

export const metadata: Metadata = {
  // SEO: Page title affects click-through rate in search results
  title: {
    default: "Nispruh Yog – A Quiet Practice | Kriya Yoga Meditation",
    template: "%s | Nispruh Yog",
  },

  // SEO: Meta description (155-160 chars) appears below title in search results
  description:
    "A sacred space for sincere seekers. Rooted in the ancient science of Kriyayog — a path of breath, awareness, and inner inquiry. Learn meditation techniques for inner peace.",

  // SEO: Keywords help search engines understand page topic (use naturally in content)
  keywords: [
    "Kriya Yoga",
    "Meditation practice",
    "Pranayama breathing",
    "Spiritual awakening",
    "Inner peace",
    "Meditation for beginners",
  ],

  // SEO: Specifies canonical URL to avoid duplicate content issues
  alternates: {
    canonical: SITE_URL,
  },

  // SEO: Open Graph tags improve social media sharing appearance
  // ~38% higher CTR when OG tags are present
  openGraph: {
    siteName: "Nispruh Yog",
    locale: "en_US",
    type: "website",
    url: SITE_URL,
    title: "Nispruh Yog – A Quiet Practice",
    description: "A sacred space for sincere seekers practicing Kriya Yoga meditation.",
    images: [
      {
        url: `${SITE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Nispruh Yog - Kriya Yoga meditation practice",
      },
    ],
  },

  // SEO: Twitter Card tags optimize appearance when shared on Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Nispruh Yog – A Quiet Practice",
    description: "A sacred space for sincere seekers practicing Kriya Yoga meditation.",
    images: [`${SITE_URL}/images/twitter-image.png`],
    creator: "@nispruhyog",
    site: "@nispruhyog",
  },

  // SEO: Meta robots controls indexing behavior
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // SEO: Author attribution helps with credibility
  authors: [
    {
      name: "Nispruh Yog",
      url: SITE_URL,
    },
  ],

  // SEO: Creator information
  creator: "Nispruh Yog",
};

export const viewport: Viewport = {
  themeColor: "var(--bg-primary)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* SEO: Organization Schema - helps search engines understand business structure */}
        <StructuredData data={getOrganizationSchema()} />

        {/* SEO: Google Search Console Verification */}
        {process.env.NEXT_PUBLIC_GSC_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GSC_VERIFICATION}
          />
        )}

        {/* SEO: Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* SEO: Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="true" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="antialiased relative">
        {/* Google Analytics 4 Tracking */}
        <GoogleAnalytics />

        {/* Transparent background logo */}
        <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center overflow-hidden">
          <Image
            src="/images/logo_A_tnsp.png"
            alt="Nispruh Yog - Sacred meditation practice"
            width={800}
            height={800}
            style={{ width: 'auto', height: 'auto' }}
            className="h-[800px] opacity-10 dark:opacity-15"
            priority
          />
        </div>

        {/* Fixed navbar sits outside the stacking context */}
        <Navbar />

        {/*
         * site-shell:
         *   flex-col, min-h-screen → footer stays pinned to bottom
         *   pt-16 → compensates for fixed navbar height
         */}
        <div className="flex min-h-screen flex-col pt-16">
          {/*
           * PageTransition wraps the page slot.
           * It must be a client component to read usePathname()
           * and drive AnimatePresence keying.
           */}
          <PageTransition>
            <main
              id="main-content"
              role="main"
              aria-label="Page content"
              className="flex flex-col flex-1"
            >
              {children}
            </main>
          </PageTransition>

          <Footer />
        </div>

        {/* Skip-to-content link for keyboard / screen-reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-full focus:bg-[var(--pista-green)] focus:px-5 focus:py-2 focus:text-white focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to main content
        </a>
      </body>
    </html>
  );
}
