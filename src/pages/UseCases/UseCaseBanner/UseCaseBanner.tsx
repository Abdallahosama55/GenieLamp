import img1 from "@assets/Img/section1.svg";
import AppBanner from "../../../components/shared/AppBanner/AppBanner";

function UseCaseBanner() {

  return (
    <>
      <AppBanner
        backgroundImage={img1}
        title="Use Case"
        description="Gain deep insights into customer behavior, interactions, and preferences with GenieLamp.ai’s powerful analytics tools."
      />
    </>
  );
}

export default UseCaseBanner;
