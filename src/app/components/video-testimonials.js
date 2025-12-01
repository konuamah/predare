"use client";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function VideoTestimonialsSection() {
    const videoTestimonials = [
        {
            name: "Dr Mina Quadar",
            title: "Founder",
            company: "Wellness Guard - France",
            videoSrc: "/test2.mp4"
        },
        {
            name: "Mr Angenu Kofi Benjamin",
            title: "CEO",
            company: "Forever Champion Health Centre",
            videoSrc: "/test1.mp4"
        },

    ];

    return (
        <section className={`py-16 lg:py-24 bg-cream ${font.className}`}>
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4">
                        Client Success Stories
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear directly from business leaders who transformed their operations
                    </p>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {videoTestimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Video Container */}
                            <div className="relative aspect-video bg-gray-900">
                                <video
                                    controls
                                    className="w-full h-full object-cover"
                                    preload="metadata"
                                >
                                    <source src={testimonial.videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            {/* Info Container */}
                            <div className="p-6 lg:p-8">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                                    {testimonial.name}
                                </h3>
                                <p className="text-base text-primary font-semibold mb-1">
                                    {testimonial.title}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {testimonial.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
