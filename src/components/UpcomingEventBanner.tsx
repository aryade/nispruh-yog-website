'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function UpcomingEventBanner() {
  return (
    <section
      className="relative py-12 md:py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2D1A00 0%, #8B5E00 100%)',
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
                Upcoming Event · 29 July 2026
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Guru Purnima Utsav 2026
            </h2>

            {/* Subtext */}
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-md">
              On this Guru Purnima, embrace yourself in the Divine.
              <br />
              We bow down to the feet of our beloved Guruji
              <br />
              Shri Swami Nispruh Spandan.
            </p>

            {/* Details row */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-white pt-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">📍</span>
                <span className="font-medium">Nashik</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🕙</span>
                <span className="font-medium">10:00 AM – 4:00 PM</span>
              </div>
            </div>

            {/* Dress code */}
            <div className="pt-1">
              <p className="text-sm md:text-base text-white/80">
                <span className="font-semibold text-white">Dress Code:</span> Wear White or Yellow
              </p>
            </div>

            {/* Button */}
            <div className="pt-4">
              <Link href="/events-retreats" className="btn btn-primary">
                Learn More
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
                src="/images/events/guru-purnima-poster.jpg"
                alt="Guru Purnima Utsav 2026"
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
