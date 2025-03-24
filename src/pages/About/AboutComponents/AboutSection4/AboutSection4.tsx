import icon01 from "@assets/Icons/background.svg";
import icon02 from "@assets/Icons/background1.svg";
import icon03 from "@assets/Icons/background2.svg";
import icon04 from "@assets/Icons/background3.svg";
import icon05 from "@assets/Icons/background4.svg";
import AppIconCardSection from "../../../../components/shared/AppIconCardSection/AppIconCardSection";

function AboutSection4() {
  const cards = [
    {
      icon: icon01,
      title: "Humanized AI",
      description:
        "We give your AI a face, creating an emotional connection that fosters trust and engagement.",
    },
    {
      icon: icon02,
      title: "Full Customization",
      description:
        "Tailor your Genie’s appearance, behavior, and capabilities to perfectly align with your brand.",
    },
    {
      icon: icon03,
      title: "Scalable Solutions",
      description:
        "From small businesses to large enterprises, our platform grows with you.",
    },
    {
      icon: icon04,
      title: "Cutting-Edge Technology",
      description:
        "Leverage AI, AR, and QR integration for a futuristic customer experience.",
    },
    {
      icon: icon05,
      title: "24/7 Support",
      description:
        "Our team is here to ensure your Genie always performs at its best.",
    },
  ];

  return (
    <AppIconCardSection
      title="Why Choose GenieLamp?"
      cards={cards}
      buttonText="Schedule a Demo"
    />
  );
}

export default AboutSection4;
