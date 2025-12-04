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
        "Be Found Where It Matters. Google, social media, and local platforms — we'll set up and optimize the systems that put your business on the map.",
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
    {
      id: 4,
      image: "/white-2.png",
      svg: "/web.svg",
      headline: "Web Software Development",
      subtext:
        "Build Custom Websites and Apps. From responsive designs to powerful backends, we create digital solutions that drive your business forward.",
    },
    {
      id: 5,
      image: "/white-3.png",
      svg: "/graphic-design.svg",
      headline: "Graphic Design",
      subtext:
        "Stunning Visuals That Captivate. Logos, branding, and marketing materials that make your business stand out and leave a lasting impression.",
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
    
      className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[650px] mt-16 sm:mt-20 md:mt-28 flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Carousel */}
        <div className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl">
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

                {/* Mobile Layout - Stacked */}
                <div className="md:hidden absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 sm:px-6">
                  {/* SVG for mobile */}
                  <div className="mb-4 p-2 sm:p-3 rounded-full bg-white/70 shadow-lg shadow-orange-500/40">
                    <Image
                      src={slide.svg}
                      alt="Decorative SVG"
                      width={80}
                      height={80}
                      className="sm:w-[100px] sm:h-[100px] object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                    />
                  </div>
                  
                  {/* Text for mobile */}
                  <div className="text-black max-w-sm">
                    <h2 className="text-xl sm:text-2xl font-thin leading-tight tracking-[-0.03em]">
                      {slide.headline}
                      <span className="block mt-2 mx-auto w-12 h-1 bg-orange-500 rounded-full"></span>
                    </h2>
                    <p className="mt-3 text-sm sm:text-base font-light leading-relaxed opacity-90">
                      {slide.subtext}
                    </p>
                  </div>
                </div>

                {/* Desktop Layout - Side by Side */}
                <div className="hidden md:flex absolute inset-0 z-20">
                  {/* Left: Text */}
                  <div className="flex flex-col justify-center items-start pl-8 lg:pl-12 xl:pl-16 text-black w-1/2 h-full">
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-thin leading-tight max-w-lg xl:max-w-xl tracking-[-0.03em]">
                      {slide.headline}
                      <span className="block mt-2 w-12 lg:w-16 h-1 bg-orange-500 rounded-full"></span>
                    </h2>
                    <p className="mt-4 text-sm lg:text-base xl:text-lg max-w-md lg:max-w-lg font-light leading-relaxed opacity-90">
                      {slide.subtext}
                    </p>
                  </div>

                  {/* Right: SVG */}
                  <div className="flex justify-center items-center w-1/2 h-full pr-8 lg:pr-12 xl:pr-16">
                    <div className="p-3 lg:p-4 rounded-full bg-white/70 shadow-lg shadow-orange-500/40">
                      <Image
                        src={slide.svg}
                        alt="Decorative SVG"
                        width={180}
                        height={180}
                        className="lg:w-[220px] lg:h-[220px] xl:w-[250px] xl:h-[250px] object-contain drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
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