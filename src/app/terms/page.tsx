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
    title: '1. Acceptance of Terms',
    content: `By accessing and using this website (nispruhyog.com), you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you are not authorized to use this website.`,
  },
  {
    title: '2. Use License',
    content: `Permission is granted to temporarily download one copy of the materials (information or software) on Nispruh Yog's website for personal, non-commercial transitory viewing only. This is a license, not a transfer of title, and under this license you may not:

    • Modify or copy the materials
    • Use the materials for any commercial purpose or for any public display
    • Attempt to decompile or reverse engineer any software contained on the website
    • Remove any copyright or other proprietary notations from the materials
    • Transfer the materials to another person or "mirror" the materials on another server
    • Violate any applicable laws or regulations
    • Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website`,
  },
  {
    title: '3. Disclaimer of Warranties',
    content: `The materials on Nispruh Yog's website are provided on an "as is" basis. Nispruh Yog makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.`,
  },
  {
    title: '4. Limitations of Liability',
    content: `In no event shall Nispruh Yog or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Nispruh Yog's website, even if Nispruh Yog or an authorized representative has been notified orally or in writing of the possibility of such damage.`,
  },
  {
    title: '5. Accuracy of Materials',
    content: `The materials appearing on Nispruh Yog's website could include technical, typographical, or photographic errors. Nispruh Yog does not warrant that any of the materials on its website are accurate, complete, or current. Nispruh Yog may make changes to the materials contained on its website at any time without notice.`,
  },
  {
    title: '6. Materials on Other Websites',
    content: `Nispruh Yog has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Nispruh Yog of the site. Use of any such linked website is at the user's own risk.`,
  },
  {
    title: '7. Modifications',
    content: `Nispruh Yog may revise these terms and conditions for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these terms and conditions.`,
  },
  {
    title: '8. Governing Law',
    content: `These terms and conditions are governed by and construed in accordance with the laws of Finland, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.`,
  },
  {
    title: '9. Intellectual Property',
    content: `All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Nispruh Yog or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or transmit any content without our prior written permission.`,
  },
  {
    title: '10. User-Generated Content',
    content: `Any comments, feedback, or suggestions you provide about our website or services may be used by Nispruh Yog without restriction or compensation. By submitting content, you grant Nispruh Yog a non-exclusive, worldwide license to use that content.`,
  },
  {
    title: '11. Limitation on Contact',
    content: `By contacting us through the website contact form, you agree to receive responses via email. We will not share your contact information with third parties without your consent.`,
  },
  {
    title: '12. Spiritual Guidance Disclaimer',
    content: `The teachings, practices, and guidance provided on this website are for educational and spiritual purposes only. They should not be considered medical advice, mental health treatment, or a substitute for professional medical or psychological consultation. If you are experiencing mental health concerns, please consult a qualified healthcare provider.`,
  },
  {
    title: '13. Contact Information',
    content: `If you have questions about these terms and conditions, please contact us:

    Email: info@nispruhyog.com
    Phone: +358 (46) 571 0507`,
  },
  {
    title: '14. Termination',
    content: `Nispruh Yog reserves the right to terminate access to this website at any time without notice for any reason, including violation of these terms and conditions.

    Last Updated: July 2, 2026`,
  },
];

export default function Terms() {
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
              Terms & Conditions
            </h1>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              Please read these terms carefully before using our website and services.
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
