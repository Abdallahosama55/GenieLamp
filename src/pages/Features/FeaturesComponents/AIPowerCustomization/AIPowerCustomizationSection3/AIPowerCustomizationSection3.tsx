import Tabpanel from "@assets/Img/f2.png";
import AppBinaryGrid from "../../../../../components/shared/AppBinaryGrid/AppBinaryGrid";
import imgbg from "@assets/Img/vv.png";
const sections = [
  {
    title: "Access to Inventory:",
    content: "Allow AI to view and manage inventory in real-time.",
  },
  {
    title: "Access to Pipeline:",
    content:
      "Enable AI to monitor and update pipeline statuses when integrated with CRM systems like Vindo.",
  },
  {
    title: "Access to Calendar:",
    content:
      "Grant AI permission to view and manage calendar events, optimizing scheduling.",
  },
  {
    title: "Assign Tasks to Employees:",
    content: "Let AI assign tasks to your team, streamlining operations.",
  },
  {
    title: "Send Emails to Customers:",
    content: "Empower AI to communicate directly with customers through email.",
  },
];

function AIPowerCustomizationSection3() {
  return (
    <AppBinaryGrid
      sections={sections}
      imageSrc={Tabpanel}
      imageAlt="About Section"
      className="mt-12 reverse   "
      Header="AI Permissions"
      titleBlockType="flex-numeric"
      bgImageSrc={imgbg}
    />
  );
}

export default AIPowerCustomizationSection3;
