"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
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

    const projectCounts = getProjectCountByCategory();
    const displayedProjects = getProjectsByCategory(selectedCategory);

    const handleCategoryChange = (category) => {
        if (category === selectedCategory) return;

        setIsAnimating(true);
        setTimeout(() => {
            setSelectedCategory(category);
            setIsAnimating(false);
        }, 300);
    };

    return (
        <div className={`bg-white ${font.className}`}>
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-32 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black leading-tight mb-6">
                            Our <span className="text-orange-500">Portfolio</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                            Explore our successful projects across digital marketing, web development,
                            software solutions, and creative design. Each project represents our commitment
                            to delivering exceptional results for our clients.
                        </p>
                        <div className="flex items-center justify-center gap-8 text-sm sm:text-base">
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-orange-500">{PORTFOLIO_PROJECTS.length}+</div>
                                <div className="text-gray-600 mt-1">Projects Completed</div>
                            </div>
                            <div className="h-12 w-px bg-gray-300"></div>
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-orange-500">8</div>
                                <div className="text-gray-600 mt-1">Service Categories</div>
                            </div>
                            <div className="h-12 w-px bg-gray-300"></div>
                            <div className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-orange-500">100%</div>
                                <div className="text-gray-600 mt-1">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6">
                    <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {SERVICE_CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`
                  px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                  transition-all duration-300 flex items-center gap-2
                  ${selectedCategory === category
                                        ? "bg-orange-500 text-white shadow-lg shadow-orange-200 scale-105"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                                    }
                `}
                            >
                                {category}
                                <span className={`
                  text-xs px-2 py-0.5 rounded-full
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
            </section>

            {/* Projects Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
            transition-opacity duration-300
            ${isAnimating ? "opacity-0" : "opacity-100"}
          `}>
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
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-lg sm:text-xl text-white/90 mb-8">
                        Let's create something amazing together. Get in touch to discuss your next project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/#contact"
                            className="px-8 py-4 bg-white text-orange-500 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/#services"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300 hover:scale-105"
                        >
                            View Services
                        </Link>
                    </div>
                </div>
            </section>

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
