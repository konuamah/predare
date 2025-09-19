"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// ----------------------
// Config: Fonts & Colors
// ----------------------
const FONT_STYLES = {
  heading:
    "font-sans font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[47px] leading-tight sm:leading-normal lg:leading-[71px]",
  serviceTitle:
    "text-black font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight",
  serviceDescription:
    "text-black text-sm sm:text-base md:text-lg leading-relaxed",
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
      title: "Digital Presence Starter",
      description: (
        <>
          <p className="mb-3 sm:mb-4">
            Get your business found online with the essentials.
          </p>
          <ul className="list-disc pl-5 sm:pl-6 mt-2 sm:mt-3 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>Google Business Profile setup & optimization</li>
            <li>Yelp and Facebook/Instagram business page setup</li>
            <li>Basic website or landing page audit</li>
            <li>
              Quick training session so you (or staff) can manage updates
            </li>
          </ul>
          <p className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base">
            Best for: new or small businesses who aren't showing up online yet.
          </p>
        </>
      ),
      imageUrl: "/seo.png",
    },
    {
      title: "Social Kickstart",
      description: (
        <>
          <p className="mb-3 sm:mb-4">
            Build a strong social media foundation without the overwhelm.
          </p>
          <ul className="list-disc pl-5 sm:pl-6 mt-2 sm:mt-3 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>Setup or refresh of 2–3 social media platforms</li>
            <li>One-month content calendar (templates + posting plan)</li>
            <li>5 branded graphics or post templates</li>
            <li>
              Option to add on management if you want us to post for you
            </li>
          </ul>
          <p className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base">
            Best for: businesses who want to connect with their community but
            don't know what to post.
          </p>
        </>
      ),
      imageUrl: "/social.png",
    },
    {
      title: "Growth Partner",
      description: (
        <>
          <p className="mb-3 sm:mb-4">
            Ongoing support so your business keeps showing up and growing.
          </p>
          <ul className="list-disc pl-5 sm:pl-6 mt-2 sm:mt-3 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>
              Monthly social posting & content creation (photos + short videos)
            </li>
            <li>Simple paid ad campaigns to reach more local customers</li>
            <li>
              Monthly performance report with actionable insights
            </li>
            <li>
              Priority support for updates or seasonal promotions
            </li>
          </ul>
          <p className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base">
            Best for: businesses ready to scale their marketing with consistent
            support.
          </p>
        </>
      ),
      imageUrl: "/growth.png",
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
    <section id="services" className="relative mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28">
      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-center lg:text-left">
          <h2 className={`${FONT_STYLES.heading} max-w-4xl mx-auto lg:mx-0`}>
            Packages to Build and Grow Your Online Presence
          </h2>
        </div>

        {/* Services List */}
        <div className="space-y-1 sm:space-y-2 md:space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleServiceClick(index)}
              className={`cursor-pointer border-b py-4 sm:py-6 md:py-8 last:border-b-0 ${COLORS.borderGray} transition-all duration-300 hover:bg-gray-50/50 rounded-lg hover:shadow-sm`}
            >
              {/* Service Header */}
              <div className="flex items-center justify-between px-2 sm:px-4 lg:px-6">
                <div className="min-w-0 flex-1 pr-3 sm:pr-4">
                  <h3
                    className={`${FONT_STYLES.serviceTitle} transition-colors duration-300 ${
                      isExpanded(index) ? "text-orange-500" : "text-black"
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
                <div
                  className={`flex-shrink-0 p-1 sm:p-2 transition-transform duration-300 ${
                    isExpanded(index) ? "rotate-45" : ""
                  } hover:bg-orange-100 rounded-full`}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${COLORS.accent} sm:w-5 sm:h-5 md:w-6 md:h-6`}
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

              {/* Expandable Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpanded(index) ? "max-h-[2000px] opacity-100 mt-4 sm:mt-6" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-2 sm:px-4 lg:px-6 pt-2 sm:pt-4">
                  <div className="flex flex-col lg:flex-row items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                    {/* Content */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                      <div className={FONT_STYLES.serviceDescription}>
                        {service.description}
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                      <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <Image
                          src={service.imageUrl}
                          alt={`${service.title} visual representation`}
                          width={600}
                          height={400}
                          className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 object-cover transition-transform duration-300 hover:scale-105"
                          priority={index < 2}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Packages Note */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-center">
          <div className=" p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
            <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              <span className="font-semibold text-orange-600">Custom packages available</span>{" "}
              on request — we'll build something that fits your goals and budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;