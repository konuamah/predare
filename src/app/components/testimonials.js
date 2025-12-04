"use client";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Diana",
            role: "Spa owner",
            image: "/testimonial-diana.jpg",
            quote: "I just could not believe the response that I got. Last month, I got 30 appointments from your system. This is the best investment I have ever made for my business."
        },
        {
            name: "Laura",
            role: "Hair salon owner",
            image: "/testimonial-laura.jpg",
            quote: "At first, I couldn't believe this was real until started getting clients booking each week as I started working with you. So far I have had 38 appointments this month for my hair salon!"
        },
        {
            name: "Janet",
            role: "Make-up artist",
            image: "/testimonial-janet.jpg",
            quote: "As a mother of two young girls, I struggle to consistently post things online. But with your system I was able to book 40 clients last month without the hassle. Things have really improved in my business since I started working with you."
        }
    ];

    return (
        <section className={`py-16 lg:py-24 bg-white ${font.className}`}>
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Real results from real business owners who transformed their client acquisition
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            {/* Image */}
                            <div className="mb-6">
                                <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden ring-4 ring-primary/10">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="flex-1 mb-6">
                                <svg
                                    className="w-8 h-8 text-primary/20 mb-3"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p className="text-gray-700 text-base leading-relaxed italic">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                            </div>

                            {/* Name and Role */}
                            <div className="border-t border-gray-200 pt-4">
                                <h4 className="text-lg font-bold text-gray-800">
                                    {testimonial.name}
                                </h4>
                                <p className="text-sm text-gray-600 mt-1">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
