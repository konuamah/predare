"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  // List of SVG paths (in public/svgs/)
  const svgList = [
    '/growth.svg',
    '/rocket-2.svg',
    '/support.svg',
    '/analytics.svg',
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % svgList.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [svgList.length]);

  return (
    <section className="relative text-gray-900 bg-[url('/Predare.jpg')] bg-cover bg-center bg-no-repeat mt-8 sm:mt-12 lg:mt-12">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Main container with proper spacing */}
      <div className="relative py-16 px-8 sm:py-20 sm:px-12 lg:py-24 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 w-full items-center min-h-[60vh]">
            
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="font-bold tracking-tight text-[clamp(2.5rem,6vw,5rem)] sm:text-[clamp(3rem,5vw,6rem)] lg:text-[clamp(4rem,4vw,7rem)] leading-[0.9]">
                Grow Your Business Online
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                At <span className="font-semibold text-orange-600">Predare</span>, we set up the right digital systems and give you the content and support to keep growing.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#consultation"
                  className="inline-block rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Book a Free Consultation
                </a>
                <a
                  href="#learn-more"
                  className="inline-block rounded-full border border-gray-300 px-8 py-4 text-lg font-medium text-gray-700 hover:bg-gray-100 transition"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Column - SVG Marquee */}
            <div className="relative flex items-center justify-center py-8">
              <div
                className="relative w-[400px] h-[400px] sm:w-[400px] sm:h-[400px] overflow-hidden rounded-2xl"
                style={{ aspectRatio: '1 / 1' }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={index}
                    src={svgList[index]}
                    alt={`Feature ${index + 1}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{
                      y: { type: 'spring', stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="absolute inset-0 w-full h-full p-6 object-contain rounded-2xl"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;