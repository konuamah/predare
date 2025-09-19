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
    <section className="relative text-gray-900 bg-[url('/Predare.jpg')] bg-cover bg-center bg-no-repeat mt-4 sm:mt-8 lg:mt-12">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Main container with responsive spacing */}
      <div className="relative py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 lg:py-24 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 w-full items-center min-h-[60vh]">
            
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-6 order-2 md:order-1">
              <h1 className="font-bold tracking-tight text-[clamp(2rem,8vw,3rem)] sm:text-[clamp(2.5rem,6vw,4rem)] md:text-[clamp(3rem,5vw,5rem)] lg:text-[clamp(4rem,4vw,6rem)] xl:text-[clamp(5rem,3vw,7rem)] leading-[0.9]">
                Grow Your Business Online
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                At <span className="font-semibold text-orange-600">Predare</span>, we set up the right digital systems and give you the content and support to keep growing.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <a
                  href="#consultation"
                  className="inline-block rounded-full bg-orange-600 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-md transition hover:bg-orange-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 text-center"
                >
                  Book a Free Consultation
                </a>
                <a
                  href="#learn-more"
                  className="inline-block rounded-full border border-gray-300 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-gray-700 hover:bg-gray-100 hover:border-gray-400 transition text-center"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Column - SVG Marquee */}
   <motion.div 
              className="relative flex items-center justify-center py-4 sm:py-6 md:py-8 order-1 md:order-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] aspect-square overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={index}
                    src={svgList[index]}
                    alt={`Feature ${index + 1}`}
                    initial={{ y: 100, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -100, opacity: 0, scale: 0.8 }}
                    transition={{
                      y: { type: 'spring', stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.3 }
                    }}
                    className="absolute inset-0 w-full h-full p-3 sm:p-4 md:p-6 object-contain rounded-2xl"
                  />
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;