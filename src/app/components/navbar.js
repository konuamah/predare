"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const LOGO_FONT_SIZE = "text-2xl sm:text-3xl md:text-4xl";
const MENU_FONT_SIZE = "text-base font-bold sm:text-lg";
const MOBILE_MENU_FONT_SIZE = "text-lg";

const navConfig = {
  logo: { src: "/logo.png", alt: "SlammFoundation Logo" },
  links: [
    { id: "home", label: "Home", href: "#home" },
    { id: "services", label: "Services", href: "#services" },
    { id: "about", label: "About", href: "#about" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
};

const navColors = {
  backgroundMobile: "bg-black/90",
  linkDefault: "text-gray-900",
  linkHover: "text-blue-200",
  linkActive: "text-blue-900",
  linkActiveIndicator: "bg-blue-200",
  mobileLinkHoverBg: "bg-white/10",
  mobileLinkActiveBg: "bg-white/5",
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);

  // Track active section only (no scroll background change)
  useEffect(() => {
    const handleScroll = () => {
      const sections = navConfig.links.map((link) => link.id);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && setIsMobileMenuOpen(false);

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - navHeight, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 w-full h-[120px] bg-transparent backdrop-blur-md transition-all duration-200"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[120px]">
            {/* Logo - Moved closer to center */}
            <Link href="#home" onClick={(e) => scrollToSection(e, "home")} className="lg:mr-8">
              <div className={`w-32 h-14 relative ${LOGO_FONT_SIZE}`}>
                <Image src={navConfig.logo.src} alt={navConfig.logo.alt} fill className="object-contain" />
              </div>
            </Link>

            {/* Desktop Menu - Centered with logo */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center gap-8">
                {navConfig.links.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative transition-all duration-200 ${
                      activeSection === link.id ? navColors.linkActive : navColors.linkDefault
                    } hover:${navColors.linkHover} ${MENU_FONT_SIZE}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <div
                        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 ${navColors.linkActiveIndicator} rounded-full`}
                      />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Spacer for mobile menu toggle alignment */}
            <div className="lg:hidden w-9"></div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden flex flex-col gap-1 p-2 z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5 bg-white" : "bg-white"
                }`}
              />
              <div
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "bg-white"
                }`}
              />
              <div
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5 bg-white" : "bg-white"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
            isMobileMenuOpen ? "visible" : "invisible"
          }`}
        >
          <div
            className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div
            className={`absolute top-0 right-0 w-80 sm:w-96 h-full bg-black/90 backdrop-blur-md border-l border-white/20 transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-6 pt-32 h-full overflow-y-auto space-y-6">
              {navConfig.links.map((link) => (
                <a
                  key={`mobile-${link.id}`}
                  href={link.href}
                  className={`block p-4 rounded-lg transition-colors duration-200 ${
                    activeSection === link.id
                      ? `text-blue-200 bg-white/5 ${MOBILE_MENU_FONT_SIZE}`
                      : `text-white hover:text-blue-200 hover:bg-white/10 ${MOBILE_MENU_FONT_SIZE}`
                  }`}
                  onClick={(e) => scrollToSection(e, link.id)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <style jsx global>{`
        .mobile-menu-open {
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Navbar;