"use client";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function WhoIsThisFor() {
    const industries = [
        "E-commerce Stores - Retail/Wholesales",
        "Real Estate Companies",
        "Automobile Companies - Car Rentals & Car Sales",
        "Healthcare Providers (Clinics, Hospitals, Dental Offices)",
        "Educational Institutions (Schools, Training Centers, Online Courses)",
        "Hotels and Short-Stay Businesses",
        "Law Firms and Consulting Companies",
        "Restaurants and Fast-Food Businesses",
        "Financial Services Companies",
        "Fitness Gyms and Wellness Centers"
    ];

    return (
        <section className={`py-16 bg-cream ${font.className}`}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
                    Who Is This For?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <span className="text-primary text-xl font-bold">➢</span>
                            <span className="text-gray-700 text-base lg:text-lg">{industry}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
