import React from "react";
import img01 from "@assets/Img/img01.png";
import img02 from "@assets/Img/img02.png";
import img03 from "@assets/Img/img03.png";
import img04 from "@assets/Img/img04.png";
import img05 from "@assets/Img/img05.png";
// Define the interface for the props
interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description, className }) => (
  <div className={`bg-natural border-[1px] flex flex-col border-[#120D021A] pb-4 rounded-lg ${className}`}>
    <img src={image} alt={title} className="h-[300px] w-full rounded-t-lg" />
    <div className="p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-3">{description}</p>
    </div>
  </div>
);

// HomeSection4 Component
function HomeSection4() {
  const features = [
    {
      image: img01,
      title: "AI-Powered Customization",
      description:
        "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet.",
    },
    {
      image: img02,
      title: "AR & QR Code Integration",
      description:
        "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet.",
    },
    {
      image: img03,
      title: "Seamless Integration",
      description:
        "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet.",
    },
    {
      image: img04,
      title: "Real-Time AI Interaction",
      description:
        "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet.",
    },
    {
      image: img05,
      title: "Advanced Analytics & Insights",
      description:
        "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet.",
    },
  ];

  return (
    <div className="flex flex-col gap-6 mt-12   lg:mx-24 mx-4 justify-center items-center py-6">
      <h1 className="text-4xl py-2 font-bold">Features</h1>
      <div className="flex w-full gap-3 md:flex-row flex-col">
        {features.slice(0, 3).map((feature, index) => (
          <FeatureCard
            key={index}
            {...feature}
            className={index === 1 ? "lg:w-[40%]" : "lg:w-[30%]"}
          />
        ))}
      </div>
      <div className="flex w-full gap-3 md:flex-row flex-col">
        {features.slice(3).map((feature, index) => (
          <FeatureCard
            key={index + 3}
            {...feature}
            className={index === 1 ? "lg:w-1/2" : "lg:w-1/2"}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeSection4;