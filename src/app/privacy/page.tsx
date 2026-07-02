'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const sections = [
  {
    title: '1. Information We Collect',
    content: `When you visit our website or contact us through the contact form, we may collect the following information:

    • Name and email address (from contact form submissions)
    • Phone number (optional, if provided)
    • Message content (from contact form)
    • Usage data through Google Analytics (pages visited, time spent, referral source)
    • Technical data (IP address, browser type, device type)`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect for the following purposes:

    • To respond to your inquiries and provide customer support
    • To send confirmation emails for contact form submissions
    • To improve our website experience through analytics
    • To comply with legal obligations
    • To prevent fraud and enhance security`,
  },
  {
    title: '3. Data Storage and Security',
    content: `• Contact form data is securely transmitted using HTTPS encryption
    • Email submissions are processed through Resend, a secure email service provider
    • We do not store contact form data indefinitely; it is retained only as necessary to respond to your inquiry
    • We implement industry-standard security measures to protect your information
    • However, no method of transmission over the internet is 100% secure`,
  },
  {
    title: '4. Google Analytics',
    content: `We use Google Analytics to understand how visitors use our website. Google Analytics collects information such as:

    • Pages you visit
    • Time spent on each page
    • Links you click
    • Referral source

    This data is anonymized and helps us improve our content. Google processes this data according to their Privacy Policy. You can opt-out by using Google Analytics Opt-out Browser Add-on.`,
  },
  {
    title: '5. Third-Party Services',
    content: `Our website uses the following third-party services:

    • Resend (email service): For sending and receiving emails
    • Google Analytics: For website analytics
    • Google Search Console: For search performance monitoring

    These services have their own privacy policies, and we encourage you to review them.`,
  },
  {
    title: '6. Cookies and Tracking',
    content: `Our website uses cookies and similar tracking technologies to:

    • Remember your preferences (e.g., dark mode settings)
    • Provide personalized experiences
    • Analyze website usage

    You can control cookies through your browser settings. Disabling cookies may affect functionality.`,
  },
  {
    title: '7. Your Rights',
    content: `Depending on your location, you may have the right to:

    • Access the personal information we hold about you
    • Correct inaccurate data
    • Request deletion of your data
    • Opt-out of marketing communications

    To exercise these rights, please contact us at info@nispruhyog.com`,
  },
  {
    title: '8. Retention of Data',
    content: `• Contact form submissions are retained only long enough to respond to your inquiry, typically 30-90 days
    • Google Analytics data is retained according to Google's data retention policy
    • You may request deletion of your personal data at any time`,
  },
  {
    title: '9. Contact Information',
    content: `If you have questions about this privacy policy or our privacy practices, please contact us:

    Email: info@nispruhyog.com
    Phone: +358 (46) 571 0507`,
  },
  {
    title: '10. Policy Updates',
    content: `We may update this privacy policy from time to time. Significant changes will be communicated through our website. Your continued use of our website indicates acceptance of any updated privacy policy.

    Last Updated: July 2, 2026`,
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-heading)]">
      {/* Hero section */}
      <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 px-5 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl sm:text-5xl font-light mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              Your privacy matters to us. This policy explains how we collect, use, and protect your information.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content sections */}
      <div className="relative px-5 sm:px-8 pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.section
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                className="space-y-4"
              >
                <h2 className="text-xl font-semibold text-[var(--text-heading)]">
                  {section.title}
                </h2>
                <p className="text-[var(--text-muted)] leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </motion.section>
            ))}
          </div>

          {/* Back to home */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-[var(--text-muted)]/10"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[var(--pista-green)] hover:text-[var(--pista-green)]/80 transition-colors"
            >
              ← Back to home
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
