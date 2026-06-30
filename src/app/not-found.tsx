"use client";

import Link from "next/link";
import type { Metadata } from "next";

// Note: Metadata export won't work in client component
// Create a separate page.tsx with metadata export if needed

/**
 * 404 Not Found Page
 * SEO Best Practices Implemented:
 * - Clear messaging about what went wrong
 * - Internal links to main navigation (helps crawlability)
 * - Suggests similar content or related pages
 * - Good UX keeps users on site instead of bouncing
 * - Eventually improves overall site bounce rate metric
 */

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-md">
        {/* Large 404 */}
        <div className="mb-6">
          <h1 className="text-8xl font-light text-gray-200 dark:text-gray-800 mb-2">404</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">Page not found</p>
        </div>

        {/* Helpful message */}
        <div className="mb-8 space-y-3">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The page you're looking for doesn't exist or has moved. This sometimes happens when we
            refine the path to wisdom.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Error Code: 404 | Page Not Found
          </p>
        </div>

        {/* Internal links - crucial for SEO */}
        {/* Keeps users on site and helps with crawlability */}
        <div className="space-y-3">
          <div>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-pista-green text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Return to Home
            </Link>
          </div>

          {/* Additional navigation suggestions */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Or explore these sections:
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link
                href="/about-kriya-yoga"
                className="text-pista-green hover:underline"
              >
                About Kriya Yoga
              </Link>
              <Link
                href="/practices"
                className="text-pista-green hover:underline"
              >
                Practices
              </Link>
              <Link
                href="/teachings"
                className="text-pista-green hover:underline"
              >
                Teachings
              </Link>
              <Link
                href="/courses-programs"
                className="text-pista-green hover:underline"
              >
                Courses
              </Link>
              <Link
                href="/blog"
                className="text-pista-green hover:underline"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-pista-green hover:underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
