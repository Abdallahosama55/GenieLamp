import img1 from "@assets/Img/section1.svg";
import AppBanner from "../../../../components/shared/AppBanner/AppBanner";

function OurPartnersBanner() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/partners", label: "Partners" },
    { to: "/V-Booking", label: "V Booking" },
  ];
  return (
    <>
      <AppBanner
        navLinks={navLinks}
        backgroundImage={img1}
        title="Redefining Travel Experiences with V Booking"
        description="Gain deep insights into customer behavior, interactions, and preferences with GenieLamp.ai’s powerful analytics tools."
      />
    </>
  );
}

export default OurPartnersBanner;
