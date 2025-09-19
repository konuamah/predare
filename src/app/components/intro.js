import Image from "next/image";
import { FONT_STYLES, COLORS } from "../styles/config";

const FocusSection = () => {
  return (
    <div
      id="about"
      className="max-w-7xl mx-auto px-6 mt-28 flex xl:flex-row flex-col-reverse items-stretch gap-30"
    >
      {/* Image Container */}
      <div className="relative flex-1 w-full max-w-2xl xl:max-w-none">
        <Image
          alt="About section image"
          width={622}
          height={630}
          className="object-cover w-full h-full rounded-2xl"
          src="/trust.png"
        />
      </div>

      {/* Content Container */}
      <div className="flex-1 w-full max-w-2xl xl:max-w-none">
        {/* Header */}
        <p className={`${FONT_STYLES.accent} mb-3`}>Our Focus</p>

        {/* Main Title */}
        <h2 className={`${FONT_STYLES.heading} mb-6`}>
          Partnership, Not Promises
        </h2>

        {/* Description */}
        <p className={`${FONT_STYLES.body} mb-8`}>
          We’re based right here in Northern Virginia, and we work with small
          businesses to build a real, sustainable online presence.
        </p>

        {/* Why Choose Section */}
        <div>
          <h3 className={`${FONT_STYLES.subheading} mb-6`}>
            Why Choose Predare:
          </h3>

          <div className="flex flex-col gap-5">
            {[
              "Local & Hands-On – We can stop by your business, take photos, and walk you through the setup.",
              "Simple, Clear Packages – No long contracts. Just straightforward support that matches your budget.",
              "Systems + Content – We set up the platforms you need and create content to keep them alive.",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start sm:items-center gap-4"
              >
                {/* Icon */}
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

                {/* Benefit */}
                <p className={FONT_STYLES.bodyStrong}>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusSection;
