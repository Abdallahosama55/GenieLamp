import Tabpanel from "@assets/Img/Tap.png";
import angle from "@assets/icons/angle.svg";
import AppSectionGrid from "../../../../components/shared/AppSectionGrid/AppSectionGrid";

const HomeSection6 = () => {
  const sectionData = {
    title: "How It Works",
    subtitle: "Smart, Fast, and Effortless Creation!",
    image: Tabpanel,
    angleIcon: angle,
    items: [
      {
        iconNode: 1,
        title: "Choose Your Genie",
        description:
          "Start by selecting a lifelike avatar from our library, or request a custom design to perfectly represent your brand or vision.",
      },
      {
        iconNode: 2,
        title: "Configure Your AI",
        description:"Customize your Genie’s language, voice, behavior, and permissions. Fine-tune features like tone, style, and expressiveness to align with your brand identity."
      },
      {
        iconNode: 3,
        title: "Build a Knowledge Base",
        description:"Equip your Genie with a rich database of information, including FAQs, inventory details, and pricing. Integrate it seamlessly with your existing systems like CRM, inventory, and scheduling tools."
      },
      {
        iconNode: 4,
        title: "Deploy Your Genie",
        description:"Bring your Genie to life through AR and QR code integration. Place QR codes in your physical location or online platforms, allowing customers to interact instantly."
      },
      {
        iconNode: 5,
        title: "Engage & Optimize",
        description:"Your Genie interacts with customers in real time, offering personalized assistance, recommendations, and seamless experiences. Monitor performance through advanced analytics to continuously improve interactions."
      },
    ],
  };

  return <AppSectionGrid {...sectionData} />;
};

export default HomeSection6;