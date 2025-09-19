import Image from "next/image";
import { FONT_STYLES, COLORS } from "../styles/config";

const FocusSection = () => {
  return (
    <div
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28"
    >
      <div className="flex xl:flex-row flex-col-reverse items-stretch gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
        {/* Image Container */}
        <div className="relative flex-1 w-full max-w-2xl xl:max-w-none">
          <div className="aspect-[622/630] sm:aspect-square lg:aspect-[4/5] xl:aspect-[622/630] w-full">
            <Image
              alt="About section image"
              width={622}
              height={630}
              className="object-cover w-full h-full rounded-lg sm:rounded-xl lg:rounded-2xl"
              src="/trust.png"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="flex-1 w-full max-w-2xl xl:max-w-none flex flex-col justify-center">
          {/* Header */}
          <p className={`${FONT_STYLES.accent} mb-2 sm:mb-3`}>Our Focus</p>

          {/* Main Title */}
          <h2 className={`${FONT_STYLES.heading} mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight`}>
            Partnership, Not Promises
          </h2>

          {/* Description */}
     <p className={`${FONT_STYLES.body} mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed`}>
  We&apos;re based right here in Northern Virginia, and we work with small
  businesses to build a real, sustainable online presence.
</p>


          {/* Why Choose Section */}
          <div>
            <h3 className={`${FONT_STYLES.subheading} mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl`}>
              Why Choose Predare:
            </h3>

            <div className="flex flex-col gap-4 sm:gap-5">
              {[
                "Local & Hands-On – We can stop by your business, take photos, and walk you through the setup.",
                "Simple, Clear Packages – No long contracts. Just straightforward support that matches your budget.",
                "Systems + Content – We set up the platforms you need and create content to keep them alive.",
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  {/* Icon */}
                  <div
                    className={`size-8 sm:size-9 min-w-8 sm:min-w-9 flex items-center justify-center rounded-full ${COLORS.iconBg} shadow-md mt-0.5 sm:mt-0`}
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
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>

                  {/* Benefit */}
                  <p className={`${FONT_STYLES.bodyStrong} text-sm sm:text-base leading-relaxed flex-1`}>
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusSection;