"use client";
import { useState } from "react";

export default function AppleForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const inputBaseClasses =
    "w-full px-0 py-4 bg-transparent border-0 border-b-2 transition-all duration-300 ease-out focus:outline-none text-gray-900 placeholder-gray-500 text-lg font-light tracking-wide";

  const getInputClasses = (fieldName) => {
    const isFocused = focusedField === fieldName;
    const hasValue = formData[fieldName].length > 0;

    return `${inputBaseClasses} ${
      isFocused
        ? "border-orange-500"
        : hasValue
        ? "border-gray-400"
        : "border-gray-200 hover:border-gray-300"
    }`;
  };

  const getLabelClasses = (fieldName) => {
    const isFocused = focusedField === fieldName;
    const hasValue = formData[fieldName].length > 0;

    return `absolute left-0 transition-all duration-300 ease-out pointer-events-none ${
      isFocused || hasValue
        ? "top-0 text-sm text-gray-600 font-medium"
        : "top-4 text-lg text-gray-500 font-light"
    } ${isFocused ? "text-orange-500" : ""}`;
  };

  return (
    <div id="contact" className="min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg shadow-gray-200/50 p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light tracking-tight text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl font-light text-gray-600 leading-relaxed max-w-md mx-auto">
              Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          <div className="space-y-12">
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus("name")}
                onBlur={handleBlur}
                required
                className={getInputClasses("name")}
                placeholder=""
              />
              <label htmlFor="name" className={getLabelClasses("name")}>
                Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                required
                className={getInputClasses("email")}
                placeholder=""
              />
              <label htmlFor="email" className={getLabelClasses("email")}>
                Email
              </label>
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                name="message"
                id="message"
                rows="1"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus("message")}
                onBlur={handleBlur}
                required
                className={`${getInputClasses(
                  "message"
                )} resize-none min-h-[60px] overflow-hidden`}
                placeholder=""
                style={{ height: "auto" }}
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height =
                    Math.max(60, e.target.scrollHeight) + "px";
                }}
              />
              <label htmlFor="message" className={getLabelClasses("message")}>
                Message
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium text-lg py-4 px-8 rounded-full transition-all duration-200 ease-out transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-600/25 hover:shadow-xl hover:shadow-orange-600/30"
              >
                Send Message
              </button>
            </div>
          </div> {/* ✅ properly closed */}
        </div>
      </div>
    </div>
  );
}
