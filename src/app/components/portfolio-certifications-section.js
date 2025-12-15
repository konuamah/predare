import Image from "next/image";

const certifications = [
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
    }
];

export default function PortfolioCertificationsSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Certifications and Expertise</h2>
                    <p className="text-gray-600">Backed by internationally recognized certifications</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {certifications.map((cert, index) => (
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
    );
}