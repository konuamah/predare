"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

const FONT_STYLES = {
    heading:
        "font-sans font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[47px] leading-tight sm:leading-normal lg:leading-[71px]",
    itemTitle:
        "text-black font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight",
    itemDescription:
        "text-black text-sm sm:text-base md:text-lg leading-relaxed",
};

const COLORS = {
    borderGray: "border-gray-200",
    accent: "text-orange-500",
};

// --- NEW PORTFOLIO DATA CONSTANT ---
const PORTFOLIO_DATA = [
    {
        title: "Web Development Projects",
        mainDescription: "We create high-performance, responsive websites tailored to your business goals.",
        mainImage: "/web.svg",
        type: "subItems",
        subItems: [
            {
                name: "E-commerce Store",
                details: "Shopify & Custom Code",
                image: "/web-dev.jpg"
            },
            {
                name: "SaaS Dashboard",
                details: "React & Next.js",
                image: "/seo.png"
            },
        ],
    },
    {
        title: "Graphic Design Gallery",
        mainDescription: "Visual storytelling that captures your brand's essence and engages your audience.",
        mainImage: "/graphic-design.svg",
        type: "subItems",
        subItems: [
            {
                name: "Brand Identity",
                details: "Logo & Guidelines",
                image: "/graphic-design.jpg"
            },
            {
                name: "Social Media Kit",
                details: "Instagram & LinkedIn",
                image: "/social.png"
            },
        ],
    },
    {
        title: "Client Testimonials",
        mainDescription: "Don't just take our word for it. Here's what our partners have to say.",
        mainImage: "/marketing.png",
        type: "testimonials",
        testimonials: [
            {
                quote: "Predare transformed our online presence. The new site increased our leads by 200% in just 3 months!",
                client: "Sarah J., Marketing Director"
            },
            {
                quote: "The branding work was exceptional. They captured our vision perfectly and delivered on time.",
                client: "Mike T., CEO of TechFlow"
            },
            {
                quote: "Professional, creative, and easy to work with. Highly recommend their web and design services.",
                client: "Emily R., Founder"
            },
        ],
    },
];

// --- HELPER FUNCTION TO RENDER DESCRIPTION BASED ON DATA TYPE ---
const renderDescriptionContent = (item) => {
    if (item.type === "subItems" && item.subItems) {
        return (
            <div className="space-y-6">
                <p className="mb-4">{item.mainDescription}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                    {item.subItems.map((sub, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative h-32 rounded-lg overflow-hidden mb-2 border border-gray-100 shadow-sm">
                                <Image src={sub.image} alt={sub.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <h5 className="font-bold text-sm">{sub.name}</h5>
                            <p className="text-xs text-gray-500">{sub.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (item.type === "testimonials" && item.testimonials) {
        return (
            <div className="space-y-4">
                <p className="mb-2">{item.mainDescription}</p>
                <div className="space-y-3">
                    {item.testimonials.map((test, idx) => (
                        <div key={idx} className="bg-gray-50 p-4 rounded-xl border-l-4 border-orange-400">
                            <p className="italic text-gray-700 text-sm mb-2">&quot;{test.quote}&quot;</p>
                            <p className="font-bold text-xs text-gray-900">— {test.client}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    
    // Fallback for generic content
    return <p>{item.mainDescription}</p>;
};
// -------------------------------------------------------------

export default function PortfolioSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleItemClick = (index) => {
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
        <section id="portfolio" className={`py-20 bg-white ${font.className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Section Header */}
                <div className="mb-12 text-center lg:text-left">
                    <h2 className={FONT_STYLES.heading}>Our Portfolio & Success Stories</h2>
                    <p className="mt-4 text-gray-500 text-lg max-w-2xl lg:mx-0 mx-auto">
                        Explore our recent work and see how we&apos;ve helped businesses like yours grow.
                    </p>
                </div>

                {/* Accordion List */}
                <div className="space-y-2">
                    {PORTFOLIO_DATA.map((item, index) => ( // <-- Using the new constant here
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => handleItemClick(index)}
                            className={`cursor-pointer border-b py-6 last:border-b-0 ${COLORS.borderGray} transition-all duration-300 hover:bg-gray-50/50 rounded-lg`}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-4 sm:px-6">
                                <h3
                                    className={`${FONT_STYLES.itemTitle} transition-colors duration-300 ${isExpanded(index) ? "text-orange-500" : "text-black"
                                        }`}
                                >
                                    {item.title}
                                </h3>
                                <div
                                    className={`flex-shrink-0 p-2 transition-transform duration-300 ${isExpanded(index) ? "rotate-45" : ""
                                        } hover:bg-orange-100 rounded-full`}
                                >
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`${COLORS.accent}`}
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

                            {/* Expanded Content */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded(index) ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-4 sm:px-6 pb-6">
                                    <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
                                        {/* Description / Content */}
                                        <div className="w-full lg:w-1/2 order-2 lg:order-1">
                                            <div className={FONT_STYLES.itemDescription}>
                                                {/* DYNAMIC RENDERING HERE */}
                                                {renderDescriptionContent(item)} 
                                            </div>
                                        </div>

                                        {/* Main Image */}
                                        <div className="w-full lg:w-1/2 order-1 lg:order-2">
                                            <div className="relative overflow-hidden rounded-2xl shadow-lg h-64 sm:h-80 lg:h-96 bg-gray-100">
                                                <Image
                                                    src={item.mainImage}
                                                    alt={`${item.title} Showcase`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}