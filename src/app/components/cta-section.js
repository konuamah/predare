import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Transform Your Business?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8">
                    Contact us today to discuss how we can help you achieve your business goals with our proven strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/#contact"
                        className="px-8 py-4 bg-white text-orange-500 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                    >
                        Book Appointment
                    </Link>
                    <Link
                        href="/#services"
                        className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300 hover:scale-105"
                    >
                        View Services
                    </Link>
                </div>
                <p className="text-white/80 mt-4 text-sm">📞 +233593994543</p>
            </div>
        </section>
    );
}

