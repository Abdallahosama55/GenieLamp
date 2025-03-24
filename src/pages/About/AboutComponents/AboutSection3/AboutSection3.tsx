import ficon from "@assets/icons/ficon.svg";
import ficon2 from "@assets/icons/how1.svg";
import ficon3 from "@assets/icons/how2.svg";
import Tabpanel from "@assets/Img/Tap.png";
import angle from "@assets/icons/angle.svg";
import AppSectionGrid from "../../../../components/shared/AppSectionGrid/AppSectionGrid";

const AboutSection3 = () => {
  const sectionData = {
    title: "How We Give AI a Face",
    subtitle: "Smart, Fast, and Effortless Creation!",
    image: Tabpanel,
    angleIcon: angle,
    items: [
      {
        icon: ficon,
        title: "Choose from Our Avatar Library",
        description:
          "Select a ready-made avatar that suits your brand",
      },
      {
        icon: ficon2,
        title: "Request a Custom Avatar",
        description:"Have a face designed uniquely for your Genie to reflect your brand’s identity."
      },
      {
        icon: ficon3,
        title: "Bring Your Own Character to Life",
        description:"Whether it’s a famous figure, a mascot, or a personal design, our platform can transform it into a lifelike AI."
      },
  
    ],
  };

  return <AppSectionGrid {...sectionData} />;
};

export default AboutSection3;