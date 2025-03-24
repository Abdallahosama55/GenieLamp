import img1 from "@assets/Img/section1.svg";
import AppBanner from "../../../../components/shared/AppBanner/AppBanner";


function AboutSection1() {

  return (
    <>
   <AppBanner
      backgroundImage={img1}
      title="About Us"
      description="Lorem ipsum dolor sit amet consectetur. Lectus vel diam arcu et dui ornare amet."
    />
    </>
  );
}

export default AboutSection1;