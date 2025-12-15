"use client";
import React, { useState, useEffect } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CTASection from "../components/cta-section";
import PortfolioHeroSection from "../components/portfolio-hero-section";
import ProjectGrid from "../components/project-grid";
import MobileFilterButton from "../components/mobile-filter-button";
import MobileFilterModal from "../components/mobile-filter-modal";
import PortfolioTestimonialsSection from "../components/portfolio-testimonials-section";
import PortfolioCertificationsSection from "../components/portfolio-certifications-section";
import {
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


    return (
        <div className={`bg-white ${font.className}`}>
            <Navbar />

            <PortfolioHeroSection />

            <ProjectGrid
                projects={displayedProjects}
                categories={SERVICE_CATEGORIES}
                selectedCategory={selectedCategory}
                projectCounts={projectCounts}
                onCategoryChange={handleCategoryChange}
                isAnimating={isAnimating}
            />

            <MobileFilterButton onClick={() => setIsMobileFilterOpen(true)} />

            <MobileFilterModal
                isOpen={isMobileFilterOpen}
                categories={SERVICE_CATEGORIES}
                selectedCategory={selectedCategory}
                projectCounts={projectCounts}
                onCategoryChange={handleCategoryChange}
                onClose={() => setIsMobileFilterOpen(false)}
            />

            <PortfolioTestimonialsSection />

            <PortfolioCertificationsSection />

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
