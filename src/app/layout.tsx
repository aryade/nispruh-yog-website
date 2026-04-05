import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

export const metadata: Metadata = {
  title: {
    default: "Nispruh Yog – A Quiet Practice",
    template: "%s · Nispruh Yog",
  },
  description:
    "A sacred space for sincere seekers. Rooted in the ancient science of Kriya Yoga — a path of breath, awareness, and inner inquiry.",
  openGraph: {
    siteName: "Nispruh Yog",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "var(--bg-primary)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
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
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-full focus:bg-[var(--bg-accent)] focus:px-5 focus:py-2 focus:text-white focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to main content
        </a>
      </body>
    </html>
  );
}
