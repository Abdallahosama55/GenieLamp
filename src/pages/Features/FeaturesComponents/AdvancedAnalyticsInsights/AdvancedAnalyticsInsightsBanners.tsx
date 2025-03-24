import img1 from "@assets/Img/section1.svg";
import AppBanner from "../../../../components/shared/AppBanner/AppBanner";

function AdvancedAnalyticsInsightsBanners() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features" },
    { to: "/ai-power-customization", label: "Advanced Analytics" },
  ];
  return (
    <>
      <AppBanner
        navLinks={navLinks}
        backgroundImage={img1}
        title="Advanced Analytics & Insights"
        description="Gain deep insights into customer behavior, interactions, and preferences with GenieLamp.ai’s powerful analytics tools."
      />
    </>
  );
}

export default AdvancedAnalyticsInsightsBanners;
