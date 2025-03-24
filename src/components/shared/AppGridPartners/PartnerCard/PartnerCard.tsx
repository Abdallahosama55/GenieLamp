import React from "react";
import AppButton from "../../../../components/shared/AppButton/AppButton";
import arrow from "@/assets/Icons/arrow.svg";

interface PartnerCardProps {
  partner: {
    id: number;
    logo?: string;
    name?: string;
    title: string;
    description: string;
    bgImage?: string;
    fullWidth: boolean;
    navPath?:any
    isButton?: boolean;
    cardlist?: string[]; // Define cardlist as an array of strings
  };
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => {
  return (
    <div
      className={`bg-natural rounded-lg border border-[#120D021A] p-6 flex flex-col transition-shadow relative overflow-hidden ${
        partner.fullWidth ? "md:col-span-2 py-12" : ""
      }`}
    >
      {partner.bgImage && (
        <div className="absolute top-0 right-0 w-30 h-30 opacity-40 pointer-events-none">
          <img
            src={partner.bgImage}
            alt=""
            width={200}
            height={200}
            className="object-contain"
            aria-hidden="true"
          />
        </div>
      )}

      {partner.name && (
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 flex-shrink-0">
            <img
              src={partner.logo}
              alt={partner.name}
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <span className="font-medium">{partner.name}</span>
        </div>
      )}

      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-3">{partner.title}</h3>
        <p className="text-secondary mb-6 text-sm">{partner.description}</p>
      </div>

      {/* Dynamically render the list from cardlist */}
      {partner.cardlist && partner.cardlist.length > 0 && (
        <ul className={`list-disc ${partner.fullWidth && "flex  gap-4"}   text-sm text-secondary pl-5`}>
          {partner.cardlist.map((item, index) => (
            <li key={index} className=" my-2">{item}</li>
          ))}
        </ul>
      )}

      {partner.isButton && (
        <div className="flex justify-start">
          <AppButton Title="See More" navPath={partner.navPath} icon={arrow} />
        </div>
      )}
    </div>
  );
};

export default PartnerCard;
