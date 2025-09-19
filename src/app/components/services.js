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
      title: "Digital Presence Starter",
      description: (
        <>
          <p>
            Get your business found online with the essentials.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Google Business Profile setup & optimization</li>
            <li>Yelp and Facebook/Instagram business page setup</li>
            <li>Basic website or landing page audit</li>
            <li>
              Quick training session so you (or staff) can manage updates
            </li>
          </ul>
          <p className="mt-3 font-semibold">
            Best for: new or small businesses who aren’t showing up online yet.
          </p>
        </>
      ),
      imageUrl: "/seo.png",
    },
    {
      title: "Social Kickstart",
      description: (
        <>
          <p>
            Build a strong social media foundation without the overwhelm.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Setup or refresh of 2–3 social media platforms</li>
            <li>One-month content calendar (templates + posting plan)</li>
            <li>5 branded graphics or post templates</li>
            <li>
              Option to add on management if you want us to post for you
            </li>
          </ul>
          <p className="mt-3 font-semibold">
            Best for: businesses who want to connect with their community but
            don’t know what to post.
          </p>
        </>
      ),
      imageUrl: "/social.png",
    },
    {
      title: "Growth Partner",
      description: (
        <>
          <p>
            Ongoing support so your business keeps showing up and growing.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
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
          <p className="mt-3 font-semibold">
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
    <section id="services" className="relative  mt-28 ">
      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className={`${FONT_STYLES.heading}`}>
            Packages to Build and Grow Your Online Presence
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
                    <div className={FONT_STYLES.serviceDescription}>
                      {service.description}
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <Image
                      src={service.imageUrl}
                      alt={`${service.title} visual representation`}
                      width={600}
                      height={400}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-auto object-cover rounded-lg shadow-md"
                      priority={index < 2}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Packages Note */}
        <div className="mt-10 text-center text-black text-base sm:text-lg md:text-xl">
          <p>
            <span className="font-semibold">Custom packages available</span> on
            request — we’ll build something that fits your goals and budget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
