import img1 from "@assets/Img/section1.svg";
import AppBanner from "../../../../../components/shared/AppBanner/AppBanner";


function SeamlessIntegrationSectionsBanner() {
    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/features", label: "Features" },
        { to: "/ai-power-customization", label: "Seamless integration" },
      ];
  return (
    <>
   <AppBanner
   navLinks={navLinks}
      backgroundImage={img1}
      title="Seamless integration"
      description="Connect GenieLamp.ai with your existing tools and systems effortlessly, enhancing operations and customer experiences."
    />
    </>
  );
}

export default SeamlessIntegrationSectionsBanner;