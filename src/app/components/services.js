"use client";
import React, { useState } from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Optimize your website to improve search engine ranking and drive more organic traffic.",
      imageUrl:
        "/seo.png",
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Create and manage effective PPC campaigns to maximize ROI.",
      imageUrl:
        "/advert.png",
    },
    {
      title: "Social Media Marketing",
      description:
        "Build and engage your audience through social media content, community management, and advertising.",
      imageUrl:
        "/social.png",
    },
    {
      title: "Content Marketing",
      description:
        "Develop content strategies aligned with your business goals to engage your target audience.",
      imageUrl:
        "/content.png",
    },
    {
      title: "Email Marketing",
      description:
        "Execute email campaigns that drive engagement and conversions with segmentation and personalization.",
      imageUrl:
        "/email.png",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Provide detailed analytics to make data-driven decisions and optimize marketing strategies.",
      imageUrl:
        "/analytics.png",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="relative py-16 lg:py-24">
      <div className="relative container mx-auto max-w-7xl px-4">
        {/* Main heading */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-black text-3xl md:text-4xl lg:text-5xl xl:text-[47px] font-sans leading-tight lg:leading-[71px]">
            Full Support for Your Digital Marketing Needs
          </h2>
        </div>

        {/* Services vertical stack */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="cursor-pointer border-b border-gray-200 py-8 last:border-b-0"
            >
              <div className="flex items-center justify-between">
                <div className="min-w-0">
                  <p className="text-black text-2xl lg:text-3xl font-medium">
                    {service.title}
                  </p>
                </div>
                <div
                  className={`transition-transform duration-300 ${
                    hoveredIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-green-700"
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
                  hoveredIndex === index ? "max-h-screen mt-6" : "max-h-0"
                }`}
              >
                <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 pt-4">
                  <div className="lg:w-1/2">
                    <p className="text-black text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:w-1/2 w-full">
                    <img
                      src={service.imageUrl}
                      alt={`${service.title} visual representation`}
                      className="w-full h-auto object-cover rounded-lg shadow-md"
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
