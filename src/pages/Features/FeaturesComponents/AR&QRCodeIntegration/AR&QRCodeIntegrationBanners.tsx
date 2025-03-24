import img1 from "@assets/Img/section1.svg";
import AppBanner from "../../../../components/shared/AppBanner/AppBanner";

function ARQRCodeIntegrationBanners() {
    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/features", label: "Features" },
        { to: "/ai-power-customization", label: "AR & QR Code " },
      ];
  return (
    <>
   <AppBanner
   navLinks={navLinks}
      backgroundImage={img1}
      title="AR & QR Code Integration"
      description="Bring your Genie to life in the physical world with cutting-edge Augmented Reality (AR) and QR codes for seamless experiences."
    />
    </>
  );
}

export default ARQRCodeIntegrationBanners;