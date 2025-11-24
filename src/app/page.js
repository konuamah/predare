import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSlider from "./components/heroslides";
import CompanyIntro from "./components/intro";
import ServicesSection from "./components/services";
import BenefitsSection from "./components/benefits";
import Footer from "./components/footer";
import ContactSection from "./components/contact";
import PortfolioSection from "./components/portfolio";
import HeroSection from "./components/main-hero";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Add a spacer div with controlled background color */}
      <div className="h-8 sm:h-12 lg:h-16 bg-white"></div>

      {/* Add spacing around the hero section */}
      <div className="mx-4 shadow-xl sm:mx-10 lg:mx-16 rounded-4xl overflow-hidden">
        <HeroSection />
      </div>

      {/* Hero goes here */}
      <HeroSlider />

      <CompanyIntro />
      <ServicesSection />
      <BenefitsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}