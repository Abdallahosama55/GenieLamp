
import Tabpanel from "@assets/Img/f1.png";
import AppBinaryGrid from "../../../../../components/shared/AppBinaryGrid/AppBinaryGrid";

const sections = [
  {
    title: "Knowledge Base and Integration",
    content:
     "Equip your Genie with a custom knowledge base and inventory management, complete with pricing. Seamlessly integrate your Genie with any system, such as CRM tools like Vindo.ai."
  },
];

function AIPowerCustomizationSection2() {
  return (
    <AppBinaryGrid
      sections={sections}
      imageSrc={Tabpanel}
      imageAlt="About Section"
      className=""
    
    />
  );
}

export default AIPowerCustomizationSection2;