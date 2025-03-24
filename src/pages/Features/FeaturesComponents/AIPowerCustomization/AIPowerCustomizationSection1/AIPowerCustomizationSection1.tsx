import img1 from "@assets/Img/section1.svg";
import AppBanner from "../../../../../components/shared/AppBanner/AppBanner";


function AIPowerCustomizationSection1() {
    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/features", label: "Features" },
        { to: "/ai-power-customization", label: "AI-power customization" },
      ];
  return (
    <>
   <AppBanner
   navLinks={navLinks}
      backgroundImage={img1}
      title="AI-power customization"
      description="Full AI Configurations in Your Hand"
    />
    </>
  );
}

export default AIPowerCustomizationSection1;