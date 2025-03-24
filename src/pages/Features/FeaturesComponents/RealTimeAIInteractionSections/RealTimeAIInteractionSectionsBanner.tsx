import img1 from "@assets/Img/section1.svg";
import AppBanner from "../../../../components/shared/AppBanner/AppBanner";

function RealTimeAIInteractionSectionsBanner() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features" },
    { to: "/ai-power-customization", label: "Real-Time AI " },
  ];
  return (
    <>
      <AppBanner
        navLinks={navLinks}
        backgroundImage={img1}
        title="Real-Time AI Interaction"
        description="Instant, intelligent, and personalized interactions for every customer, powered by GenieLamp.ai’s real-time AI capabilities."
      />
    </>
  );
}

export default RealTimeAIInteractionSectionsBanner;
