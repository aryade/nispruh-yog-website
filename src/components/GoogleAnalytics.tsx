"use client";

/**
 * Google Analytics 4 Integration
 * Tracks user behavior, page views and events
 * Essential for monitoring SEO performance and user engagement
 */

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pathname = usePathname();

  useEffect(() => {
    if (!gaId) {
      console.warn("GA4 ID not configured. Set NEXT_PUBLIC_GA_ID in .env.local");
      return;
    }

    // Load Google Tag Manager script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", gaId, {
      page_path: pathname,
      anonymize_ip: true,
    });
  }, [gaId, pathname]);

  return null;
}
