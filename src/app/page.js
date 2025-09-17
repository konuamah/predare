import Image from "next/image";
import Navbar from "./components/navbar";

import HeroSlider from "./components/heroslides";
import CompanyIntro from "./components/intro";
import ServicesSection from "./components/services";
import BenefitsSection from "./components/benefits";
import Footer from "./components/footer";
import ContactSection from "./components/contact";
import HeroSection from "./components/main-hero";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <HeroSection />
 
      {/* Hero goes here */}
      <HeroSlider />

      <CompanyIntro />
      <ServicesSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
