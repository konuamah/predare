import Image from "next/image";

const COLORS = {
  heading: "text-gray-900",
  subheading: "text-gray-800",
  body: "text-gray-600",
  bodyStrong: "text-gray-700",
  accent: "text-gray-500",
  iconBg: "bg-gray-800",
};

const TEXT_SIZES = {
  heading: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
  subheading: "text-lg sm:text-xl md:text-2xl",
  body: "text-sm sm:text-base md:text-lg",
  accent: "text-sm sm:text-base md:text-lg",
};

const FocusSection = () => {
  return (
    <div
      className="max-w-7xl mt-20 mx-auto flex xl:flex-row flex-col-reverse items-stretch gap-10 px-6"
      id="foco"
    >
      {/* Image Container */}
      <div className="relative flex-1 w-full max-w-2xl xl:max-w-none">
        <Image
          alt="info block image"
          width={622}
          height={630}
          className="object-cover w-full h-full rounded-2xl"
          src="/trust.png"
        />
      </div>
      {/* Content Container */}
      <div className="flex-1 w-full max-w-2xl xl:max-w-none">
        {/* Header */}
        <p
          className={`${TEXT_SIZES.accent} font-medium ${COLORS.accent} uppercase tracking-wide mb-3`}
        >
          Our Focus
        </p>
        {/* Main Title */}
        <h2
          className={`${TEXT_SIZES.heading} font-extrabold ${COLORS.heading} mb-6 leading-tight`}
        >
          Trust First
        </h2>
        {/* Description */}
        <p
          className={`${TEXT_SIZES.body} ${COLORS.body} mb-8 leading-relaxed`}
        >
          Predare Marketing and Event Consultation provides a comprehensive
          range of digital marketing services to help your business succeed
          online. Our goal is to help you achieve your business objectives by
          leveraging the power of digital channels.
        </p>
        {/* What We Offer Section */}
        <div>
          <h3
            className={`${TEXT_SIZES.subheading} font-semibold ${COLORS.subheading} mb-6`}
          >
            Why Choose Predare:
          </h3>
          {/* Benefits List */}
          <div className="flex flex-col gap-5">
            {[
              "Proven expertise in digital marketing and event management.",
              "Customized strategies tailored to your unique business goals.",
              "Dedicated support and measurable results that drive growth.",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start sm:items-center gap-4"
              >
                <div
                  className={`size-9 min-w-9 flex items-center justify-center rounded-full ${COLORS.iconBg} shadow-md`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <p
                  className={`${TEXT_SIZES.body} font-medium ${COLORS.bodyStrong} leading-relaxed`}
                >
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusSection;