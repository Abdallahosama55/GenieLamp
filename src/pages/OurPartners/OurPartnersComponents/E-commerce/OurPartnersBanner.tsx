import img1 from "@assets/Img/section1.svg";
import AppBanner from "../../../../components/shared/AppBanner/AppBanner";

function OurPartnersBanner() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/partners", label: "Partners" },
    { to: "/Ecommerce ", label: "E-commerce " },
  ];
  return (
    <>
      <AppBanner
        navLinks={navLinks}
        backgroundImage={img1}
        title="Revolutionizing E-commerce with AI-Powered Genies"
        description="Gain deep insights into customer behavior, interactions, and preferences with GenieLamp.ai’s powerful analytics tools."
      />
    </>
  );
}

export default OurPartnersBanner;
