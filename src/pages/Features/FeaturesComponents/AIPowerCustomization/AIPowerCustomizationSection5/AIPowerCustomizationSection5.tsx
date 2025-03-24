import Tabpanel from "@assets/Img/f3.png";
import AppBinaryGrid from "../../../../../components/shared/AppBinaryGrid/AppBinaryGrid";

const sections = [
  {
    title: "Choose from the Library:",
    content: "Pick from a selection of pre-designed avatars..",
  },
  {
    title: "Request Your Own Design:",
    content:
      "Have a custom Genie designed to perfectly reflect your brand or vision.",
  },
];

function AIPowerCustomizationSection5() {
  return (
    <AppBinaryGrid
      sections={sections}
      imageSrc={Tabpanel}
      imageAlt="About Section"
      Header="Customizable Appearance"
      titleBlockType="flex-numeric"
   
    />
  );
}
export default AIPowerCustomizationSection5;
