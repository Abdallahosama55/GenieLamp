import React from "react";
import { FaCircle } from "react-icons/fa";
import AppButton from "../AppButton/AppButton";

interface Section {
  title?: string;
  content: string;
}

interface AppBinaryGridProps {
  sections: Section[];
  imageSrc: string;
  imageAlt: string;
  Header?: string;
  className?: string;
  BtnTitle?: string;
  titleBlockType?: "plain" | "flex-dotted" | "flex-numeric"; // New prop to control title block type
  bgImageSrc?: string; // New prop for background image
}

const AppBinaryGrid: React.FC<AppBinaryGridProps> = ({
  sections,
  imageSrc,
  imageAlt,
  Header,
  BtnTitle,
  className,
  titleBlockType = "plain", // Default to plain
  bgImageSrc, // New prop for background image
}) => {
  const isReversed = className?.includes("reverse");

  // Function to render the title block based on the type
  const renderTitleBlock = (section: Section, index: number) => {
    switch (titleBlockType) {
      case "flex-dotted":
        return (
          <div className="flex items-start gap-1 py-2">
            <FaCircle size={6} className="mt-2" />
            <p className="items-start inline">
              <span className="whitespace-nowrap font-bold pe-2">
                {section.title}
              </span>
              {section.content}
            </p>
          
          </div>
        );
      case "flex-numeric":
        return (
          <div className="flex items-start gap-2 py-2">
            <span className="font-bold text-primary">{index + 1}.</span>
            <p className="items-start inline">
              <span className="whitespace-nowrap font-bold pe-2">
                {section.title}
              </span>
              {section.content}
            </p>
          </div>
        );
      default:
        return (
          <div className="flex gap-2 py-2 flex-col ">
            <h3 className="text-3xl font-bold text-primary">{section.title}</h3>
            <p>{section.content}</p>
          </div>
        );
    }
  };

  return (
    <div
      className={`bg-white lg:px-36 px-4 gap-8 grid lg:grid-cols-10 items-center  ${className} `}
      style={{
        backgroundImage: bgImageSrc ? `url(${bgImageSrc})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {isReversed ? (
        <>
          <div className="flex lg:col-span-4 col-span-12 p-4 justify-center items-center py-8">
            <img src={imageSrc} alt={imageAlt} className="w-full" />
          </div>
          <div className="flex flex-col lg:col-span-6 col-span-12 text-primary">
            <h2 className="text-xl font-bold py-3 text-primary">{Header}</h2>
            {sections.map((section, index) => (
              <div key={index}>{renderTitleBlock(section, index)}</div>
            ))}
        <div className="mt-5">
        {BtnTitle && <AppButton Title={BtnTitle} />}

        </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col lg:col-span-6 col-span-12 text-primary">
            <h2 className="text-xl font-bold py-3 text-primary">{Header}</h2>
            {sections.map((section, index) => (
              <div key={index}>{renderTitleBlock(section, index)}</div>
            ))}
              {BtnTitle && <AppButton Title={BtnTitle} />}
          </div>
          <div className="flex lg:col-span-4 col-span-12 p-4 justify-center items-center py-8">
            <img src={imageSrc} alt={imageAlt} className="w-full" />
          </div>
          
        </>
      )}
    </div>
  );
};

export default AppBinaryGrid;
