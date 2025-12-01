"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function AboutPage() {
    return (
        <div className={`bg-white ${font.className}`}>
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-32 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black leading-tight mb-6">
                            About <span className="text-orange-500">Primeagle</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                            An IT Consulting Firm with Experts specialized in leveraging Artificial Intelligence
                            and latest Technologies to Automate companies/Businesses Sales Process and help them
                            get more customers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/team.png"
                                alt="Primeagle Team"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                We are a team of <span className="font-bold text-orange-500">Skillful & Certified Consultants</span> with
                                a common goal of helping Businesses to grow into bigger Brands.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                For the past years, we have helped <span className="font-bold text-orange-500">100+ business owners</span> to
                                scale their businesses and maximized profits through cutting-edge AI solutions and automation technologies.
                            </p>
                            <Link
                                href="https://www.primeagle.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-4 bg-orange-500 text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Book Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
                        <div className="p-8">
                            <div className="text-5xl sm:text-6xl font-bold mb-4">100+</div>
                            <div className="text-xl sm:text-2xl font-medium opacity-90">Businesses Helped</div>
                            <p className="mt-3 text-white/80">Successfully scaled and maximized profits</p>
                        </div>
                        <div className="p-8">
                            <div className="text-5xl sm:text-6xl font-bold mb-4">8</div>
                            <div className="text-xl sm:text-2xl font-medium opacity-90">Core Services</div>
                            <p className="mt-3 text-white/80">Comprehensive digital solutions</p>
                        </div>
                        <div className="p-8">
                            <div className="text-5xl sm:text-6xl font-bold mb-4">100%</div>
                            <div className="text-xl sm:text-2xl font-medium opacity-90">Client Satisfaction</div>
                            <p className="mt-3 text-white/80">Certified consultants & proven results</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
                            Our Expertise
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Leveraging cutting-edge technologies to transform your business operations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Expertise Card 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">Artificial Intelligence</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Advanced AI solutions to automate processes, analyze data, and drive intelligent decision-making for your business.
                            </p>
                        </div>

                        {/* Expertise Card 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">Sales Automation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Streamline your sales process with automated workflows, lead nurturing, and conversion optimization systems.
                            </p>
                        </div>

                        {/* Expertise Card 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">Business Growth</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Strategic consulting to scale your business, maximize profits, and transform into a recognized brand.
                            </p>
                        </div>

                        {/* Expertise Card 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">Latest Technologies</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Stay ahead with cutting-edge tech solutions including cloud computing, machine learning, and modern frameworks.
                            </p>
                        </div>

                        {/* Expertise Card 5 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">Certified Consultants</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Work with skilled professionals who hold industry certifications and proven track records of success.
                            </p>
                        </div>

                        {/* Expertise Card 6 */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">Customer Acquisition</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Proven strategies and tools to help you attract, convert, and retain more customers for sustainable growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
                            Why Choose Primeagle?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We combine expertise, innovation, and dedication to deliver exceptional results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-6 p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-300">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black mb-2">Proven Track Record</h3>
                                <p className="text-gray-600">100+ successful projects with measurable results and satisfied clients</p>
                            </div>
                        </div>

                        <div className="flex gap-6 p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-300">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black mb-2">Expert Team</h3>
                                <p className="text-gray-600">Certified consultants with deep expertise in AI, automation, and business growth</p>
                            </div>
                        </div>

                        <div className="flex gap-6 p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-300">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black mb-2">Cutting-Edge Solutions</h3>
                                <p className="text-gray-600">Latest AI and automation technologies to keep your business competitive</p>
                            </div>
                        </div>

                        <div className="flex gap-6 p-6 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-300">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black mb-2">Results-Driven Approach</h3>
                                <p className="text-gray-600">Focus on maximizing profits and scaling businesses into recognized brands</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-lg sm:text-xl text-white/90 mb-8">
                        Join 100+ successful businesses that have scaled with Primeagle's expertise
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="https://www.primeagle.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white text-orange-500 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                        >
                            Book Appointment
                        </Link>
                        <Link
                            href="/#contact"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300 hover:scale-105"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
