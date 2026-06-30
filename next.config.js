const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js injects inline runtime/hydration scripts; styles use inline + Tailwind
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://*.tile.openstreetmap.org https://www.google-analytics.com",
      "font-src 'self' data:",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // SEO: Enable static optimization for faster page loads
  swcMinify: true,

  // SEO: Compress static assets
  compress: true,

  // SEO: Image optimization reduces Core Web Vitals metrics
  images: {
    // Optimize images automatically
    formats: ["image/webp", "image/avif"],
    // Cache optimized images for better performance
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // SEO: PoweredByHeader removed for security and performance
  poweredByHeader: false,

  // SEO: Generate ETag headers for better caching
  generateEtags: true,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      // SEO: Cache static assets for performance
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // SEO: Cache fonts for performance
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // SEO: Set cache headers for next/image
      {
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // SEO: Redirect non-www to www (if desired) or ensure consistency
  async redirects() {
    return [
      // Example: Redirect old URLs to new ones
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true, // 301 redirect for SEO value transfer
      // },
    ];
  },

  // SEO: Handle rewrites for pretty URLs
  async rewrites() {
    return {
      beforeFiles: [
        // Example rewrites can go here
      ],
    };
  },

  webpack(config, { isServer }) {
    if (isServer) {
      config.output.chunkFilename = "[name].js";
    }
    return config;
  },

  // SEO: Enable optimization for production builds
  productionBrowserSourceMaps: false,

  // SEO: Enable experimental optimizations if using latest Next.js
  experimental: {
    // Optimized font loading
    optimizePackageImports: ["framer-motion"],
  },
};

module.exports = nextConfig;

