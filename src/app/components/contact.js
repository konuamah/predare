"use client";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";

import "react-phone-number-input/style.css";

export default function AppleForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    services: "",
    projectDetails: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const servicesOptions = [
    { value: "", label: "Select services you're interested in..." },
    { value: "web-development", label: "Web Development" },
    { value: "mobile-apps", label: "Mobile App Development" },
    { value: "seo", label: "Search Engine Optimization (SEO)" },
    { value: "social-media", label: "Social Media Marketing" },
    { value: "email-marketing", label: "Email Marketing" },
    { value: "graphic-design", label: "Graphic Design" },
    { value: "copywriting", label: "Copywriting & Content" },
    { value: "analytics", label: "Analytics & Reporting" },
    { value: "automation", label: "Marketing Automation" },
    { value: "consulting", label: "Digital Marketing Consulting" },
    { value: "other", label: "Other / Custom Needs" },
  ];

  const formFields = [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
      multiline: false,
    },
    {
      name: "company",
      type: "text",
      label: "Company Name",
      required: false,
      multiline: false,
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      required: true,
      multiline: false,
    },
    {
      name: "services",
      type: "select",
      label: "Services Interested In",
      required: true,
      multiline: false,
      options: servicesOptions,
    },
    {
      name: "projectDetails",
      type: "textarea",
      label: "Project Details",
      required: true,
      multiline: true,
    },
  ];

  const handleChange = (e, isPhone = false) => {
    if (isPhone) {
      setFormData({ ...formData, phone: e || "" });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // 🔮 You can replace this with fetch("/api/contact", { method: "POST", body: JSON.stringify(formData) })
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

    return `${inputBaseClasses} ${isFocused
      ? "border-orange-500"
      : hasValue
        ? "border-gray-400"
        : "border-gray-200 hover:border-gray-300"
      }`;
  };

  const getSelectClasses = (fieldName) => {
    const isFocused = focusedField === fieldName;
    const hasValue = formData[fieldName].length > 0;

    return `w-full px-0 py-4 bg-transparent border-0 border-b-2 transition-all duration-300 ease-out focus:outline-none text-gray-900 text-lg font-light tracking-wide appearance-none cursor-pointer ${isFocused
      ? "border-orange-500"
      : hasValue
        ? "border-gray-400"
        : "border-gray-200 hover:border-gray-300"
      }`;
  };

  const getPhoneInputClasses = (fieldName) => {
    const isFocused = focusedField === fieldName;
    const hasValue = formData[fieldName].length > 0;

    return `w-full px-4 py-3 bg-white border-2 rounded-lg transition-all duration-300 text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 ${isFocused
      ? "border-orange-500"
      : hasValue
        ? "border-gray-400"
        : "border-gray-200 hover:border-gray-300"
      }`;
  };



  const getLabelClasses = (fieldName) => {
    const isFocused = focusedField === fieldName;
    const hasValue = formData[fieldName].length > 0;

    return `absolute left-0 transition-all duration-300 ease-out pointer-events-none ${isFocused || hasValue
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
          Schedule Consultation
            </h2>
            <p className="text-xl font-light text-gray-600 leading-relaxed max-w-md mx-auto">
              Fill out the form below to book an appointment with us.
            </p>
          </div>

          {/* ✅ Wrap inputs in <form> */}
          <form onSubmit={handleSubmit} className="space-y-12">
            {formFields.map((field) => (
              <div key={field.name} className={field.type === "select" ? "" : "relative"}>
                {field.type === "select" ? (
                  <div className="relative">
                    <label htmlFor={field.name} className="block text-sm text-gray-600 font-medium mb-2">
                      {field.label}
                      {field.required && <span className="text-orange-500 ml-1">*</span>}
                    </label>
                    <select
                      name={field.name}
                      id={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(field.name)}
                      onBlur={handleBlur}
                      required={field.required}
                      className={getSelectClasses(field.name)}
                    >
                      {field.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-0 bottom-4 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                ) : field.type === "textarea" ? (
                  <>
                    <textarea
                      name={field.name}
                      id={field.name}
                      rows="1"
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(field.name)}
                      onBlur={handleBlur}
                      required={field.required}
                      className={`${getInputClasses(
                        field.name
                      )} resize-none min-h-[60px] overflow-hidden`}
                      placeholder=""
                      style={{ height: "auto" }}
                      onInput={(e) => {
                        e.target.style.height = "auto";
                        e.target.style.height = Math.max(60, e.target.scrollHeight) + "px";
                      }}
                      aria-multiline="true"
                    />
                    <label htmlFor={field.name} className={getLabelClasses(field.name)}>
                      {field.label}
                    </label>
                  </>
                ) : (
                  <>
                    <input
                      type={field.type}
                      name={field.name}
                      id={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(field.name)}
                      onBlur={handleBlur}
                      required={field.required}
                      className={getInputClasses(field.name)}
                      placeholder=""
                    />
                    <label htmlFor={field.name} className={getLabelClasses(field.name)}>
                      {field.label}
                    </label>
                  </>
                )}
              </div>
            ))}

            {/* Phone Field */}
            <div className="relative">
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="US"
                value={formData.phone}
                onChange={(value) => setFormData({ ...formData, phone: value || "" })}
                onFocus={() => handleFocus("phone")}
                onBlur={handleBlur}
                className={`phone-input ${getPhoneInputClasses("phone")}`}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium text-lg py-4 px-8 rounded-full transition-all duration-200 ease-out transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-600/25 hover:shadow-xl hover:shadow-orange-600/30"
              >
             Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
