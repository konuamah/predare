"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; // ✅ import Image

// ----------------------
// Config: Fonts & Colors
// ----------------------
const FONT_STYLES = {
  heading:
    "font-sans font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[47px] leading-tight sm:leading-normal lg:leading-[71px]",
  serviceTitle:
    "text-black font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl",
  serviceDescription:
    "text-black text-base sm:text-lg md:text-xl leading-relaxed",
};

const COLORS = {
  borderGray: "border-gray-200",
  accent: "text-orange-500",
};

// ----------------------
// Component
// ----------------------
const ServicesSection = () => {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Optimize your website to improve search engine ranking and drive more organic traffic.",
      imageUrl: "/seo.png",
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Create and manage effective PPC campaigns to maximize ROI.",
      imageUrl: "/advert.png",
    },
    {
      title: "Social Media Marketing",
      description:
        "Build and engage your audience through social media content, community management, and advertising.",
      imageUrl: "/social.png",
    },
    {
      title: "Content Marketing",
      description:
        "Develop content strategies aligned with your business goals to engage your target audience.",
      imageUrl: "/content.png",
    },
    {
      title: "Email Marketing",
      description:
        "Execute email campaigns that drive engagement and conversions with segmentation and personalization.",
      imageUrl: "/email.png",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Provide detailed analytics to make data-driven decisions and optimize marketing strategies.",
      imageUrl: "/analytics.png",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleServiceClick = (index) => {
    if (isClient && window.innerWidth < 1024) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  const isExpanded = (index) => {
    if (!isClient) return false;

    if (window.innerWidth >= 1024) {
      return hoveredIndex === index;
    }
    return expandedIndex === index;
  };

  return (
    <section id="services" className="relative py-12 mt-20 sm:py-16 lg:py-24">
      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className={`${FONT_STYLES.heading}`}>
            Full Support for Your Digital Marketing Needs
          </h2>
        </div>

        <div className="space-y-2 sm:space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleServiceClick(index)}
              className={`cursor-pointer border-b py-6 sm:py-8 last:border-b-0 ${COLORS.borderGray} transition-all duration-300 hover:bg-gray-50/50`}
            >
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1 pr-4">
                  <p
                    className={`${FONT_STYLES.serviceTitle} transition-colors duration-300 ${
                      isExpanded(index) ? "text-orange-500" : "text-black"
                    }`}
                  >
                    {service.title}
                  </p>
                </div>
                <div
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    isExpanded(index) ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${COLORS.accent} sm:w-6 sm:h-6`}
                  >
                    <path
                      d="M12 5V19M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpanded(index) ? "max-h-screen mt-4 sm:mt-6" : "max-h-0"
                }`}
              >
                <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12 pt-4">
                  <div className="w-full lg:w-1/2 order-2 lg:order-1">
                    <p className={FONT_STYLES.serviceDescription}>
                      {service.description}
                    </p>
                  </div>
                  <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    {/* ✅ Replaced <img> with next/image */}
                    <Image
                      src={service.imageUrl}
                      alt={`${service.title} visual representation`}
                      width={600} // adjust based on design
                      height={400} // adjust based on design
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-auto object-cover rounded-lg shadow-md"
                      priority={index < 2} // preload first 2 for better LCP
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
