// styles/config.js

// Typography
export const FONT_STYLES = {
  heading:
    "font-sans font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight",
  subheading:
    "font-sans font-medium text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug",
  sectionHeading:
    "font-sans font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight",
  sectionSubtitle:
    "ffont-sans font-medium text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug",
  body:
    "font-sans text-gray-600 text-base sm:text-lg leading-relaxed",
  bodyStrong:
    "font-sans font-medium text-gray-700 text-base sm:text-lg leading-relaxed",
  accent:
    "font-sans font-semibold text-orange-500 text-sm sm:text-base md:text-lg uppercase tracking-wide", // 🔸 orange highlight
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
