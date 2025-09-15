import React from 'react';
import { CheckCircle, Users, DollarSign, Award } from 'lucide-react';

// Reusable FeatureCard component
const FeatureCard = ({ Icon, title, description }) => (
  <div className="flex flex-col items-center lg:items-start text-center lg:text-left p-4">
    <Icon className="w-12 h-12 text-gray-900 mb-6" />
    <h3 className="text-2xl font-semibold text-gray-900 mb-4 leading-tight">{title}</h3>
    <p className="text-base text-gray-600 leading-relaxed">{description}</p>
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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Highlight your strengths and discover what sets our digital marketing services apart:
          </p>
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
