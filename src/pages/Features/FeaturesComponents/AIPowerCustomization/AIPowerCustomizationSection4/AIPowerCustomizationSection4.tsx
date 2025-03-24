import ficon from "@assets/icons/P1.svg";
import ficon2 from "@assets/icons/P2.svg";
import ficon3 from "@assets/icons/P3.svg";
import ficon4 from "@assets/icons/P4.svg";
import ficon5 from "@assets/icons/P5.svg";
import ficon6 from "@assets/icons/P6.svg";
import Tabpanel from "@assets/Img/Tabpanel.png";
import angle from "@assets/icons/angle.svg";
import AppSectionGrid from "../../../../../components/shared/AppSectionGrid/AppSectionGrid";

const AIPowerCustomizationSection4 = () => {
  const sectionData = {
    title: "Personalize Your Genie",
    subtitle: "Smart, Fast, and Effortless Creation!",
    image: Tabpanel,
    angleIcon: angle,
    items: [
      {
        icon: ficon,
        title: "AI-Language",
        description:
          "Select the language your AI Genie communicates in to ensure seamless customer interaction worldwide.",
      },
      {
        icon: ficon2,
        title: "Voice Type",
        description:"Choose the gender of your Genie’s voice for a tailored auditory experience."
      },
      {
        icon: ficon3,
        title: "Stability",
        description:"Adjust the consistency of the AI's voice to maintain the desired tone across interactions."
      },
      {
        icon: ficon4,
        title: "Similarity",
        description:"Fine-tune how closely the AI's voice matches the selected tone for authenticity."
      },
      {
        icon: ficon5,
        title: "Style Exaggeration",
        description:"Control the expressiveness of your AI Genie to fit your brand's personality."
      },
      {
        icon: ficon6,
        title: "Color Scheme",
        description:"Choose a color scheme for your Genie’s appearance to align with your brand identity."
      },
  
    ],
  };

  return <AppSectionGrid {...sectionData} />;
};

export default AIPowerCustomizationSection4;