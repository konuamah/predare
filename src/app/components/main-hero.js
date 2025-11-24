"use client";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ArrowUpRight, Link as LinkIcon } from "lucide-react";

// Loading the font to match the clean sans-serif look
const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function HeroSection() {
  return (
    <div className={`min-h-screen bg-cream text-primary ${font.className}`}>
      <main className="container mx-auto px-6 mt-12 lg:mt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Text & CTA */}
          <div>
            <h1 className="text-5xl text-black t lg:text-[4rem] leading-[1.1] font-bold mb-6 text-primary">
              Building Bridges Between You And Customers
            </h1>

            <p className="text-gray-500 text-lg mb-10 max-w-md leading-relaxed">
              Business ideas at the right price. Challenge everything. Keeping advertising standards high. Research based advertising for the bulls.
            </p>

            {/* CTA Area */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button
                className="button text-primary font-semibold px-8 py-4 rounded-xl shadow-sm"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Started
              </button>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-500 font-medium leading-tight">
                  Manage your business.<br />
                  <span className="text-gray-500 font-normal">The professional way</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Image & Stats */}
          <div className="relative">
            {/* Decorative Dots Background */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-dots [background-size:16px_16px] opacity-50"></div>

            {/* Main Image Container */}
            <div className="relative rounded-[2rem] overflow-hidden h-[400px] lg:h-[450px] w-full shadow-lg">
              <Image
                src="/team.png"
                alt="Team collaboration"
                fill
                className="object-cover"
                priority
              />


            </div>

            {/* Stats Row (Below Image) */}
            <div className="flex justify-between mt-8 px-2">
              <div>
                <h3 className="text-2xl font-bold text-black">50+</h3>
                <p className="text-xs font-medium text-gray-500 mt-1">Businesses Helped</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">15-25</h3>
                <p className="text-xs font-medium text-gray-500 mt-1">Clients Monthly</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">24</h3>
                <p className="text-xs font-medium text-gray-500 mt-1">Months of Success</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-black">1000+</h3>
                <p className="text-xs font-medium text-gray-500 mt-1">Appointments Booked</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section Hint (The start of the cards) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Client Acquisition System - Soft Beige/Grey Gradient */}
          <div className="h-48 rounded-3xl p-8 relative overflow-hidden group cursor-pointer flex flex-col justify-center items-center text-center bg-gradient-to-br from-neutral-50 to-stone-200 shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Client Acquisition System</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-[250px]">
              We build a system that gets you 30-100 clients every single month on Auto-pilot.
            </p>
          </div>

          {/* Card 2: 1-on-1 Business Consultation - Soft White/Light Grey Gradient */}
          <div className="h-48 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center items-center text-center bg-gradient-to-br from-white to-gray-100 shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">1-on-1 Business Consultation</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-[250px]">
              We assess your business to help you get clarity on what needs to be done to grow and scale your revenue faster.
            </p>
          </div>

          {/* Card 3: 90-Day Money Back Guarantee - Soft Pale Blue/Mint Gradient (still neutral but adds slight dimension) */}
          <div className="h-48 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-indigo-100 shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">90-Day Money Back Guarantee</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-[250px]">
              We believe in our proven system and you don&apos;t have any risk. If you don&apos;t get any client in 90 days, we give back your money.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}