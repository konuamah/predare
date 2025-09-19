"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/white-1.png",
      svg: "/strong.svg",
      headline: "Strong Online Presence",
      subtext:
        "Be Found Where It Matters. Google, social media, and local platforms — we’ll set up and optimize the systems that put your business on the map.",
    },
    {
      id: 2,
      image: "/white-2.png",
      svg: "/boost.svg",
      headline: "Smarter Growth",
      subtext:
        "Turn Browsers Into Customers. From search visibility to simple ad campaigns, we help you reach the right people — without wasting money.",
    },
    {
      id: 3,
      image: "/white-3.png",
      svg: "/connect.svg",
      headline: "Engaging Content",
      subtext:
        "Connect With Your Community. We create photos, videos, and post templates that show off what makes your business unique.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section
      id="home"
      className="relative w-full h-[500px] sm:h-[450px] mt-28 md:min-h-[500px] flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Carousel */}
        <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-[32px] shadow-xl">
          <div
            className="flex h-full transition-transform duration-700 ease-out"
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${(currentSlide * 100) / slides.length}%)`,
            }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="flex-1 relative flex group">
                {/* Background */}
                <Image
                  src={slide.image}
                  alt={slide.headline}
                  fill
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                {/* Orange overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 via-transparent to-orange-500/10"></div>

                {/* Left: Text */}
                <div className="absolute z-20 flex flex-col justify-center items-start pl-8 md:pl-12 text-black w-1/2 h-full">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin leading-tight max-w-3xl tracking-[-0.03em]">
                    {slide.headline}
                    <span className="block mt-2 w-16 h-1 bg-orange-500 rounded-full"></span>
                  </h2>
                  <p className="mt-4 text-base sm:text-lg md:text-xl max-w-lg font-light leading-relaxed opacity-90">
                    {slide.subtext}
                  </p>
                </div>

                {/* Right: SVG/Image */}
                <div className="absolute right-0 z-20 flex justify-center items-center w-1/2 h-full pr-8 md:pr-12">
                  <div className="p-3 rounded-full bg-white/70 shadow-lg shadow-orange-500/40">
                    <Image
                      src={slide.svg}
                      alt="Decorative SVG"
                      width={250}
                      height={250}
                      className="object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-orange-500 scale-125 shadow-lg"
                  : "bg-orange-300/40 hover:bg-orange-400/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
