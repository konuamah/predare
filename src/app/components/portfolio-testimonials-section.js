import Image from "next/image";

const testimonials = [
    {
        id: 1,
        quote: "\"I just could not believe the response that I got. Last month, I got 30 appointments from your system. This is the best investment I have ever made for my business.\"",
        name: "Diana",
        title: "Spa Owner",
        image: "https://images.unsplash.com/photo-1655902588583-f7f2dab6b6a0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        quote: "\"At first, I couldn't believe this was real until started getting clients booking each week as I started working with you. So far I have had 38 appointments this month for my hair salon!\"",
        name: "Laura",
        title: "Hair Salon Owner",
        image: "https://images.unsplash.com/photo-1614317226704-aba58b1ce153?q=80&w=728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        quote: "\"As a mother of two young girls, I struggle to consistently post things online. But with your system I was able to book 40 clients last month without the hassle. Things have really improved in my business since I started working with you.\"",
        name: "Janet",
        title: "Make-up Artist",
        image: "https://images.unsplash.com/photo-1533674639815-52f8aea1b132?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 4,
        quote: "\"The healthcare website and automation systems have transformed our business. Revenue increased by 85% in just six months.\"",
        name: "Mr Angenu Kofi Benjamin",
        title: "CEO, Forever Champion Health Centre",
        image: "https://ui-avatars.com/api/?name=Angenu+Kofi+Benjamin&size=96&background=random",
        isWide: true
    },
    {
        id: 5,
        quote: "\"Exceptional digital marketing expertise that delivered measurable results for our wellness brand.\"",
        name: "Dr Mina Quadar",
        title: "Founder, Wellness Guard - France",
        image: "https://ui-avatars.com/api/?name=Mina+Quadar&size=96&background=random",
        isWide: true
    }
];

export default function PortfolioTestimonialsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">See What Our Clients Are Saying</h2>
                    <p className="text-gray-600">Real results from real clients</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className={`bg-gray-50 p-6 rounded-xl flex flex-col h-full ${
                                testimonial.isWide ? 'md:col-span-2 lg:col-span-1' : ''
                            }`}
                        >
                            <p className="text-gray-700 mb-4 italic flex-grow">
                                {testimonial.quote}
                            </p>
                            <div className="flex items-center mt-auto">
                                <div className="relative w-10 h-10 rounded-full mr-3 overflow-hidden">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-black">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}