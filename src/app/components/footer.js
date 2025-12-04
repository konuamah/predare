import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  // Internal navigation links from navbar (excluding external links like About and Portfolio)
  const internalLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "services", label: "Services", href: "#services" },
    { id: "benefits", label: "Benefits", href: "#benefits" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-5 flex flex-col lg:flex-row justify-between items-center">
        
        {/* Quick Navigation Links */}
        <div className="mb-6 lg:mb-0 flex flex-col lg:flex-row gap-6 text-gray-700">
          {internalLinks.map((link) => (
            <a 
              key={link.id}
              href={link.href} 
              className="hover:text-gray-900 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-5 mb-6 lg:mb-0">
          <a href="https://facebook.com" className="text-gray-700 hover:text-gray-900 transition">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" className="text-gray-700 hover:text-gray-900 transition">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" className="text-gray-700 hover:text-gray-900 transition">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" className="text-gray-700 hover:text-gray-900 transition">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="text-gray-500 text-sm text-center lg:text-right">
          &copy; {new Date().getFullYear()} PrimeEagle Consult . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
