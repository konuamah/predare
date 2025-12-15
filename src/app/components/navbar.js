"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// 🔹 Move navConfig outside the component to avoid stale dependencies
const navConfig = {
  logo: { src: "/Primeagle-logo-removebg-preview.png", alt: "Primeagle Logo" },
  links: [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "/about", isExternal: true },
    { id: "services", label: "Services", href: "#services" },
    { id: "benefits", label: "Benefits", href: "#benefits" },
    { id: "portfolio", label: "Portfolio", href: "/portfolio", isExternal: true },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
};

const navStyles = {
  logo: "w-32 h-14 relative",
  menuFont: "text-base font-bold sm:text-xl",
  mobileMenuFont: "text-lg font-semibold",
  colors: {
    backgroundMobile: "bg-black/90",
    linkDefault: "text-gray-900",
    linkHover: "text-orange-400",
    linkActive: "text-orange-600",
    linkActiveIndicator: "bg-amber-400",
    mobileLinkHoverBg: "hover:bg-orange-400/10",
    mobileLinkActiveBg: "bg-orange-500/20 text-orange-400",
  },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentPath, setCurrentPath] = useState("");
  const navRef = useRef(null);

    // 🔹 Handle scroll to add background to navbar
  useEffect(() => {
    const handleScrollBg = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScrollBg(); // Set initial state
    window.addEventListener("scroll", handleScrollBg);
    return () => window.removeEventListener("scroll", handleScrollBg);
  }, []);

  // 🔹 Track current route for page-based highlighting (e.g. /about, /portfolio)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const updatePath = () => {
        const newPath = window.location.pathname;
        const newHash = window.location.hash;
        console.log('🔷 Navbar: Route change detected');
        console.log('  → pathname:', newPath);
        console.log('  → hash:', newHash);
        console.log('  → full URL:', window.location.href);
        setCurrentPath(newPath);
        console.log('  → currentPath state updated to:', newPath);
      };
      
      updatePath(); // Set initial path
      console.log('🔷 Navbar: Initial mount - path set to:', window.location.pathname);
      
      window.addEventListener("popstate", updatePath);
      
      return () => window.removeEventListener("popstate", updatePath);
    }
  }, []);

  // 🔹 Track active section (only on homepage)
  useEffect(() => {
    const handleScroll = () => {
      // 🚫 Disable scroll tracking if we're NOT on the homepage
      if (currentPath && currentPath !== '/') {
        console.log('📜 Navbar: Scroll tracking DISABLED (not on homepage, currentPath:', currentPath + ')');
        return;
      }

      const navHeight = 120;
      const offset = navHeight + 50;

      const sections = navConfig.links.map((link) => link.id);
      let currentSection = "home";

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          if (window.scrollY >= elementTop - offset) {
            currentSection = section;
            break;
          }
        }
      }

      if (window.scrollY < 100) currentSection = "home";

      console.log('📜 Navbar: Scroll handler fired (homepage)');
      console.log('  → scrollY:', window.scrollY);
      console.log('  → detected section:', currentSection);
      console.log('  → previous activeSection:', activeSection);
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        console.log('  ✅ activeSection updated to:', currentSection);
      } else {
        console.log('  ⏭️  No change - activeSection already:', currentSection);
      }
    };

    handleScroll();

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [activeSection, currentPath]); // ✅ Added currentPath to deps

  // 🔹 Close mobile menu on Escape
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
    } else {
      // Navigate to homepage if section doesn't exist on current page
      window.location.href = '/#' + sectionId;
    }
  };

  // 🔍 Debug logging for link rendering
  const isLinkActive = (link) => {
    const isOnHomepage = !currentPath || currentPath === '/';
    
    if (link.isExternal) {
      const isActive = currentPath === link.href;
      console.log(`🔗 External link "${link.label}":`, {
        href: link.href,
        currentPath,
        isActive
      });
      return isActive;
    } else {
      // Internal links only use activeSection when on homepage
      const isActive = isOnHomepage && activeSection === link.id;
      console.log(`🔗 Internal link "${link.label}":`, {
        id: link.id,
        activeSection,
        isOnHomepage,
        currentPath,
        isActive
      });
      return isActive;
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 w-full h-[120px] transition-all duration-200 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[120px]">
            {/* Logo */}
            <Link href="#home" onClick={(e) => scrollToSection(e, "home")} className="lg:mr-8">
              <div className={navStyles.logo}>
                <Image src={navConfig.logo.src} alt={navConfig.logo.alt} fill className="object-contain" />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center gap-8">
                {navConfig.links.map((link) => {
                  const isActive = isLinkActive(link);
                  
                  return link.isExternal ? (
                    <Link
                      key={link.id}
                      href={link.href}
                      className={`relative transition-all duration-200 ${
                        isActive
                          ? navStyles.colors.linkActive
                          : navStyles.colors.linkDefault
                      } hover:${navStyles.colors.linkHover} ${navStyles.menuFont}`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.id}
                      href={link.href}
                      className={`relative transition-all duration-200 ${
                        isActive
                          ? navStyles.colors.linkActive
                          : navStyles.colors.linkDefault
                      } hover:${navStyles.colors.linkHover} ${navStyles.menuFont}`}
                      onClick={(e) => scrollToSection(e, link.id)}
                    >
                      {link.label}
                      {isActive && (
                        <div
                          className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 ${navStyles.colors.linkActiveIndicator} rounded-full`}
                        />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="lg:hidden w-9"></div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden flex flex-col gap-1 p-2 z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div
                className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5 bg-white" : "bg-black"
                  }`}
              />
              <div
                className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "bg-black"
                  }`}
              />
              <div
                className={`w-6 h-0.5 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5 bg-white" : "bg-black"
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${isMobileMenuOpen ? "visible" : "invisible"
            }`}
        >
          <div
            className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"
              }`}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div
            className={`absolute top-0 right-0 w-80 sm:w-96 h-full ${navStyles.colors.backgroundMobile} backdrop-blur-md border-l border-white/20 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="p-6 pt-32 h-full overflow-y-auto space-y-6">
              {navConfig.links.map((link) => {
                const isOnHomepage = !currentPath || currentPath === '/';
                const isActive = link.isExternal 
                  ? currentPath === link.href 
                  : isOnHomepage && activeSection === link.id;
                
                return link.isExternal ? (
                  <Link
                    key={`mobile-${link.id}`}
                    href={link.href}
                    className={`block p-4 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? `${navStyles.colors.mobileLinkActiveBg} ${navStyles.mobileMenuFont}`
                        : `text-white ${navStyles.colors.mobileLinkHoverBg} ${navStyles.mobileMenuFont}`
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={`mobile-${link.id}`}
                    href={link.href}
                    className={`block p-4 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? `${navStyles.colors.mobileLinkActiveBg} ${navStyles.mobileMenuFont}`
                        : `text-white ${navStyles.colors.mobileLinkHoverBg} ${navStyles.mobileMenuFont}`
                    }`}
                    onClick={(e) => scrollToSection(e, link.id)}
                  >
                    {link.label}
                  </a>
                );
              })}
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