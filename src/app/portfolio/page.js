"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CTASection from "../components/cta-section";
import {
    PORTFOLIO_PROJECTS,
    SERVICE_CATEGORIES,
    getProjectsByCategory,
    getProjectCountByCategory
} from "./portfolio-data";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function PortfolioPage() {
    const [selectedCategory, setSelectedCategory] = useState("All Projects");
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

    const projectCounts = getProjectCountByCategory();
    const displayedProjects = getProjectsByCategory(selectedCategory);

    // Prevent body scroll when mobile filter modal is open
    useEffect(() => {
        if (isMobileFilterOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileFilterOpen]);

    const handleCategoryChange = (category) => {
        if (category === selectedCategory) return;

        setIsAnimating(true);
        setTimeout(() => {
            setSelectedCategory(category);
            setIsAnimating(false);
            setIsMobileFilterOpen(false); // Close mobile filter modal after selection
        }, 300);
    };

    const certificationsData = [
        {
            image: "/cert-1.jpg",
            alt: "Certified Customer Acquisition Specialist",
            title: "Certified Customer Acquisition Specialist",
            description: "Expert in acquiring and converting customers through digital channels"
        },
        {
            image: "/cert-2.jpg",
            alt: "Digital Marketer - USA",
            title: "Digital Marketer - USA",
            description: "Certified in advanced digital marketing strategies"
        },
        {
            image: "/cert-3.jpg",
            alt: "Certified Sales Funnel/Business Automations Specialist",
            title: "Certified Sales Funnel/Business Automations Specialist",
            description: "Social Media, Email Marketing & Advanced SEO Certified"
        },
        {
            image: "/cert-4.png",
            alt: "Certified Customer Acquisition Specialist",
            title: "Certified Customer Acquisition Specialist",
            description: "Expert in acquiring and converting customers through digital channels"
        },


    ];

    return (
        <div className={`bg-white ${font.className}`}>
            <Navbar />

            {/* Hero Section - Updated */}
            <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-32 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black leading-tight mb-6">
                            PROJECTS
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                             Explore our work in Websites/Sales Funnels Development, Digital Marketing/Customer Acquisition, and Graphic Design and Branding.
                        </p>
             
                    </div>
                </div>
            </section>

            {/* Projects Grid with Sidebar */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Projects Grid - Left Side */}
                        <div className={`flex-1 transition-opacity duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {displayedProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {/* Project Image */}
                                <div className="relative h-56 overflow-hidden bg-gray-100">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                            Featured
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    {/* Category Badge */}
                                    <div className="inline-block mb-3">
                                        <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                                +{project.technologies.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Results */}
                                    <div className="border-t border-gray-100 pt-4">
                                        <div className="flex items-start gap-2">
                                            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className="text-sm text-gray-700 font-medium line-clamp-2">
                                                {project.results}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Client */}
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <p className="text-xs text-gray-500">
                                            Client: <span className="font-semibold text-gray-700">{project.client}</span>
                                        </p>
                                    </div>

                                    {/* Visit Site Button */}
                                    {project.link && (
                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors duration-300"
                                            >
                                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Visit Site
                                            </a>
                                        </div>
                                    )}

                                </div>
                            </div>
                        ))}
                    </div>

                            {/* Empty State */}
                            {displayedProjects.length === 0 && (
                                <div className="text-center py-20">
                                    <div className="text-6xl mb-4">📁</div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">No Projects Found</h3>
                                    <p className="text-gray-600">Try selecting a different category</p>
                                </div>
                            )}
                        </div>

                        {/* Filter Sidebar - Right Side (Sticky) - Desktop Only */}
                        <aside className="hidden lg:block lg:w-80 flex-shrink-0">
                            <div className="sticky top-[140px] z-40">
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                                    <h3 className="text-lg font-bold text-black mb-4">Filter by Category</h3>
                                    <div className="flex flex-col gap-3">
                                        {SERVICE_CATEGORIES.map((category) => (
                                            <button
                                                key={category}
                                                onClick={() => handleCategoryChange(category)}
                                                className={`
                                                    w-full px-4 py-3 rounded-lg text-sm font-medium text-left
                                                    transition-all duration-300 flex items-center justify-between
                                                    ${selectedCategory === category
                                                        ? "bg-orange-500 text-white shadow-md"
                                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                                    }
                                                `}
                                            >
                                                <span>{category}</span>
                                                <span className={`
                                                    text-xs px-2 py-1 rounded-full font-semibold
                                                    ${selectedCategory === category
                                                        ? "bg-white/20 text-white"
                                                        : "bg-gray-200 text-gray-600"
                                                    }
                                                `}>
                                                    {projectCounts[category]}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Mobile Floating Filter Button */}
            <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden fixed bottom-6 right-6 z-50 bg-orange-500 text-white rounded-full p-4 shadow-2xl hover:bg-orange-600 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Open filters"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
            </button>

            {/* Mobile Filter Modal */}
            {isMobileFilterOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="lg:hidden fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
                        onClick={() => setIsMobileFilterOpen(false)}
                    />
                    
                    {/* Modal */}
                    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl transform transition-transform duration-300 ease-out max-h-[80vh] overflow-hidden">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-black">Filter by Category</h3>
                            <button
                                onClick={() => setIsMobileFilterOpen(false)}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Close filters"
                            >
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        
                        {/* Modal Content */}
                        <div className="px-6 py-4 overflow-y-auto max-h-[calc(80vh-80px)]">
                            <div className="flex flex-col gap-3 pb-6">
                                {SERVICE_CATEGORIES.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => handleCategoryChange(category)}
                                        className={`
                                            w-full px-4 py-4 rounded-lg text-base font-medium text-left
                                            transition-all duration-300 flex items-center justify-between
                                            ${selectedCategory === category
                                                ? "bg-orange-500 text-white shadow-md"
                                                : "bg-gray-100 text-gray-700 active:bg-gray-200"
                                            }
                                        `}
                                    >
                                        <span>{category}</span>
                                        <span className={`
                                            text-xs px-3 py-1 rounded-full font-semibold
                                            ${selectedCategory === category
                                                ? "bg-white/20 text-white"
                                                : "bg-gray-200 text-gray-600"
                                            }
                                        `}>
                                            {projectCounts[category]}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Testimonials Section - New */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">See What Our Clients Are Saying</h2>
                        <p className="text-gray-600">Real results from real clients</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="bg-gray-50 p-6 rounded-xl flex flex-col h-full">
                            <p className="text-gray-700 mb-4 italic flex-grow">&quot;I just could not believe the response that I got. Last month, I got 30 appointments from your system. This is the best investment I have ever made for my business.&quot;</p>
                            <div className="flex items-center mt-auto">
                                <div className="relative w-10 h-10 rounded-full mr-3 overflow-hidden">
                                    <Image 
                                        src="https://images.unsplash.com/photo-1655902588583-f7f2dab6b6a0?q=80&amp;w=1074&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                        alt="Diana" 
                                        fill 
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold">Diana</p>
                                    <p className="text-sm text-gray-500">Spa Owner</p>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="bg-gray-50 p-6 rounded-xl flex flex-col h-full">
                            <p className="text-gray-700 mb-4 italic flex-grow">&quot;At first, I couldn&apos;t believe this was real until started getting clients booking each week as I started working with you. So far I have had 38 appointments this month for my hair salon!&quot;</p>
                            <div className="flex items-center mt-auto">
                                <div className="relative w-10 h-10 rounded-full mr-3 overflow-hidden">
                                    <Image 
                                        src="https://images.unsplash.com/photo-1614317226704-aba58b1ce153?q=80&amp;w=728&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                        alt="Laura" 
                                        fill 
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold">Laura</p>
                                    <p className="text-sm text-gray-500">Hair Salon Owner</p>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial 3 */}
                        <div className="bg-gray-50 p-6 rounded-xl flex flex-col h-full">
                            <p className="text-gray-700 mb-4 italic flex-grow">&quot;As a mother of two young girls, I struggle to consistently post things online. But with your system I was able to book 40 clients last month without the hassle. Things have really improved in my business since I started working with you.&quot;</p>
                            <div className="flex items-center mt-auto">
                                <div className="relative w-10 h-10 rounded-full mr-3 overflow-hidden">
                                    <Image 
                                        src="https://images.unsplash.com/photo-1533674639815-52f8aea1b132?q=80&amp;w=1170&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                        alt="Janet" 
                                        fill 
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold">Janet</p>
                                    <p className="text-sm text-gray-500">Make-up Artist</p>
                                </div>
                            </div>
                        </div>
                        {/* Additional Testimonials */}
                        <div className="bg-gray-50 p-6 rounded-xl md:col-span-2 lg:col-span-1 flex flex-col h-full">
                            <p className="text-gray-700 mb-4 flex-grow">&quot;The healthcare website and automation systems have transformed our business. Revenue increased by 85% in just six months.&quot;</p>
                            <div className="flex items-center mt-auto">
                                <div className="relative w-10 h-10 rounded-full mr-3 overflow-hidden">
                                    <Image 
                                        src="https://images.unsplash.com/photo-1558266786-828039fddb36?q=80&amp;w=687&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                        alt="Mr Angenu Kofi Benjamin" 
                                        fill 
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold">Mr Angenu Kofi Benjamin</p>
                                    <p className="text-sm text-gray-500">CEO, Forever Champion Health Centre</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl md:col-span-2 lg:col-span-1 flex flex-col h-full">
                            <p className="text-gray-700 mb-4 flex-grow">&quot;Exceptional digital marketing expertise that delivered measurable results for our wellness brand.&quot;</p>
                            <div className="flex items-center mt-auto">
                                <div className="relative w-10 h-10 rounded-full mr-3 overflow-hidden">
                                    <Image 
                                        src="https://images.unsplash.com/photo-1563721573206-bd9a9fb33a37?q=80&amp;w=744&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                        alt="Dr Mina Quadar" 
                                        fill 
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold">Dr Mina Quadar</p>
                                    <p className="text-sm text-gray-500">Founder, Wellness Guard - France</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Section - New */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Certifications and Expertise</h2>
                        <p className="text-gray-600">Backed by internationally recognized certifications</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {certificationsData.map((cert, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                                <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                                    <Image
                                        src={cert.image}
                                        alt={cert.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="font-bold text-gray-800 text-lg mb-2">{cert.title}</h3>
                                <p className="text-gray-600">{cert.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection />

            <Footer />

            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
