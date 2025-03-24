import React from "react";

interface AppBannerProps {
  backgroundImage: string; // URL or path to the background image
  title: string; // Title text
  description: string; // Description text
  navLinks?: any;
}

const AppBanner: React.FC<AppBannerProps> = ({
  backgroundImage,
  title,
  description,

}) => {
  // Define navigation links as an array of objects

  return (
    <section className="relative overflow-hidden py-6">
      <div className="relative py-6 xl:mx-24 mx-4 p-6">
        {/* Image as background */}
        <div
          className="absolute inset-0 w-full h-full rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        {/* Content div */}
        <div className="relative xl:py-24 z-10 flex xl:pb-36 pb-16 flex-col gap-5 justify-center items-center text-center">
          {/* Navigation Links */}

          <h1 className="text-primary lg:max-w-[90%] border-b-[8px] border-accent lg:text-[38px] md:text-[26px] text-[18px] inline font-[800] xl:leading-[1] leading-[1.4]">
            {title}
          </h1>
          <span className="text-primary  lg:w-[38%] leading-[1.6rem] text-[16px] w-[90%] font-medium">{description}</span>
        </div>
      </div>
    </section>
  );
};

export default AppBanner;
