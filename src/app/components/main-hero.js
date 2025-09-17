"use client";
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen  relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50/30 to-transparent"></div>
      <div 
        className="absolute top-20 right-20 w-96 h-96 bg-green-100/20 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>
      <div 
        className="absolute bottom-20 left-10 w-64 h-64 bg-emerald-100/20 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
    

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center min-h-screen px-6 py-20">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-50 rounded-full border border-green-100 mb-8">
          
           
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="block text-gray-900">Discover your</span>
                <span className="block bg-gradient-to-r from-green-600 via-emerald-500 to-green-500 bg-clip-text text-transparent">
                  perfect plant
                </span>
                <span className="block text-gray-900">companion</span>
              </h1>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg font-light">
                Transform your space with carefully curated plants that bring life, 
                color, and tranquility to every corner of your home.
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button className="group relative px-8 py-4 bg-black text-white rounded-2xl font-medium overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/20">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center space-x-2">
                  <span>Explore Collection</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform duration-300">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              
              <button className="px-8 py-4 text-gray-700 font-medium rounded-2xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
                Watch Video
              </button>
            </div>

            <div className={`flex items-center space-x-8 pt-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center space-x-2">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Plant Varieties</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="flex items-center space-x-2">
                <div className="text-3xl font-bold text-gray-900">10k+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="lg:w-1/2 relative">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-8'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-emerald-300/30 rounded-3xl blur-3xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  alt="Beautiful plant collection"
                  className="relative w-full h-96 lg:h-[600px] object-cover rounded-3xl shadow-2xl"
                  style={{ transform: `translateY(${scrollY * -0.1}px)` }}
                />
                
                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M12 2L15 9h7l-5.5 4L18 22l-6-4.5L6 22l1.5-9L2 9h7l3-7z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Premium Quality</div>
                      <div className="text-xs text-gray-600">Certified & Healthy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;