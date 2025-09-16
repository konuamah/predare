"use client";
import React, { useState, useEffect } from "react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/orange-1.png",
      svg: "/grow.svg",
      headline: "Grow Your Business Online",
      subtext:
        "Reach your audience. Elevate your presence. With intelligent digital strategy.",
    },
    {
      id: 2,
      image: "/orange-2.png",
      svg: "/boost.svg",
      headline: "Drive Traffic. Maximize Results.",
      subtext:
        "SEO and PPC that work smarter. Built for growth, measured by impact.",
    },
    {
      id: 3,
      image: "/orange-3.png",
      svg: "/connect.svg",
      headline: "Connect Where It Matters",
      subtext:
        "Social media reimagined. For brands ready to engage and inspire.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="home"
      className="relative w-full h-[700px] sm:h-[600px] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        {/* Carousel */}
        <div className="relative h-[400px] sm:h-[560px] overflow-hidden rounded-[32px] shadow-xl">
          <div
            className="flex h-full transition-transform duration-700 ease-out"
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${(currentSlide * 100) / slides.length}%)`,
            }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="flex-1 relative flex">
                {/* Background overlay */}
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                {/* Slide Background */}
                <img
                  src={slide.image}
                  alt={slide.headline}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Left: Text */}
                <div className="absolute z-20 flex flex-col justify-center items-start pl-10 md:pl-16 text-white w-1/2 h-full">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin leading-tight max-w-3xl tracking-[-0.03em]">
                    {slide.headline}
                  </h2>
                  <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-lg font-light leading-relaxed opacity-90">
                    {slide.subtext}
                  </p>
                </div>

                {/* Right: SVG/Image */}
                <div className="absolute right-0 z-20 flex justify-center items-center w-1/2 h-full pr-10 md:pr-16">
                  <img
                    src={slide.svg}
                    alt="Decorative SVG"
                    className="h-3/4 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-10">
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
