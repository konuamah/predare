import React from "react";
import { CheckCircle, Users, DollarSign, Award } from "lucide-react";
import { FONT_STYLES, COLORS, UI } from "../styles/config";

// Reusable FeatureCard
const FeatureCard = ({ Icon, title, description }) => (
  <div className={UI.featureCard}>
    {/* Icon */}
    <div className="mb-6">
      <Icon className={`w-12 h-12 text-orange-500`} /> {/* 🔸 Orange accent */}
    </div>

    {/* Title */}
    <h3
      className={`${FONT_STYLES.subheading} mb-4 text-black transition-colors duration-300 hover:text-orange-500`}
    >
      {title}
    </h3>

    {/* Description */}
    <p className={FONT_STYLES.body}>{description}</p>
  </div>
);

const WhyChooseUs = () => {
  const benefits = [
    {
      Icon: Users,
      title: "Expertise in Digital Marketing",
      description:
        "Our team brings years of experience across SEO, PPC, social media, and content marketing to help your business grow.",
    },
    {
      Icon: CheckCircle,
      title: "Results-Driven Approach",
      description:
        "We focus on measurable outcomes, ensuring that every campaign delivers tangible ROI and business impact.",
    },
    {
      Icon: Award,
      title: "Customized Strategies",
      description:
        "Each business is unique, so we craft tailored marketing strategies to meet your specific goals and challenges.",
    },
    {
      Icon: DollarSign,
      title: "Transparent Reporting",
      description:
        "Stay informed with clear, detailed reports on campaign performance, analytics, and actionable insights.",
    },
  ];

  return (
    <section id="benefits" className=" mt-28">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`${FONT_STYLES.sectionHeading} mb-6 `}
          >
            Why Choose Us?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {benefits.map((benefit, idx) => (
            <FeatureCard
              key={idx}
              Icon={benefit.Icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
