'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface UpcomingEventBannerProps {
  ctaHref?: string;
  ctaLabel?: string;
}

export function UpcomingEventBanner({ ctaHref = 'https://forms.gle/cuk6cRp69rs6oeeEA', ctaLabel = 'Register now' }: UpcomingEventBannerProps) {
  const isExternalCta = /^https?:\/\//.test(ctaHref);

  return (
    <section
      className="relative py-12 md:py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #4a2a00 0%, #8c5a10 100%)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6 order-2 md:order-1"
          >
            {/* Tag */}
            <div className="inline-block">
              <span
                className="text-xs md:text-sm font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full"
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: '#FFF',
                }}
              >
                Upcoming course · 22-23 August 2026
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Kriyayog Course - Awaken Within
            </h2>

            {/* Subtext */}
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-md">
              A two-day introduction to Kriyayog, the ancient science of breath, with theory, guided practice, and
              satsang.
            </p>

            <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-md">
              Guided by Paramahans Swami Shri Nispruh Spandan ji, from the lineage of Mahavtaar Babaji.
            </p>

            {/* Details row */}
            <div className="flex flex-col gap-3 text-white pt-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">Location:</span>
                <span className="font-medium">Espoo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold">Time:</span>
                <span className="font-medium">10:00 AM - 4:30 PM · 22-23 August</span>
              </div>
            </div>

            {/* Contact details */}
            <div className="pt-1">
              <p className="text-sm md:text-base text-white/80">
                <span className="font-semibold text-white">Info:</span> Maa Nispruh Drupda +358 45 2342133 · Maa Nispruh Anugamini +358 45 3195013
              </p>
            </div>

            {/* Button */}
            <div className="pt-4">
              <Link
                href={ctaHref}
                target={isExternalCta ? "_blank" : undefined}
                rel={isExternalCta ? "noopener noreferrer" : undefined}
                className="btn btn-primary"
              >
                {ctaLabel}
              </Link>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center order-1 md:order-2"
          >
            <div className="relative w-full max-w-sm md:max-w-none">
              <Image
                src="/images/events/kriyayog-course-awaken-within-august-2026.jpeg"
                alt="Kriyayog Course - Awaken Within event poster"
                width={600}
                height={750}
                priority
                className="w-full h-auto rounded-lg shadow-2xl"
                style={{
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
