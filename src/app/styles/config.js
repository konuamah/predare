// styles/config.js

// Typography
export const FONT_STYLES = {
  heading: 
    "font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-gray-900 leading-tight",
  subheading: 
    "font-sans font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-gray-800 leading-snug",
  sectionHeading: 
    "font-sans font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-gray-900 leading-tight",
  sectionSubtitle: 
    "font-sans font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-gray-800 leading-snug",
  body: 
    "font-sans text-base sm:text-lg md:text-lg lg:text-lg text-gray-600 leading-relaxed",
  bodyStrong: 
    "font-sans font-medium text-base sm:text-lg md:text-lg lg:text-lg text-gray-700 leading-relaxed",
  accent: 
    "font-sans font-semibold text-sm sm:text-base md:text-lg uppercase tracking-wide text-orange-500",
};


// Colors
export const COLORS = {
  heading: "text-gray-900",
  subheading: "text-gray-800",
  body: "text-gray-600",
  bodyStrong: "text-gray-700",
  accent: "text-orange-500",   // 🔸 for small highlights
  icon: "text-white",
  iconBg: "bg-orange-500",     // 🔸 checkmark circles / accent icons
};

// UI (reusable component styles)
export const UI = {
  featureCard:
    "flex flex-col items-center lg:items-start text-center lg:text-left p-4",
  button:
    "inline-block px-6 py-3 rounded-lg font-sans font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors", // 🔸 brand button
  card:
    "font-sans rounded-xl shadow-md bg-white p-6",
};
