
import img1 from "@assets/Img/ml.jpg";
import iconarrow from "@assets/Icons/arrow.svg"
import AppButton from "../../../../components/shared/AppButton/AppButton";

function HomeSection2() {
  return (
    <div className=" grid lg:grid-cols-2 gap-6  grid-cols-1   lg:mx-24 mx-4">
      <div className=" mt-5">
        <img src={img1}   className="border-accent  scale-90 rounded-2xl shadow-lg border-[8px]"/>
      </div>
      <div className=" py-12 flex flex-col gap-3 items-start justify-start w-[90%] md:w-[100%] ps-12">
        <span className=" text-accent border-[1px] border-accent bg-accent-light px-3 rounded-2xl text-[.8rem] items-center py-1  font-semibold flex gap-2">Empowering Creativity with AI.</span>
        <h1 className=" font-bold text-dark text-4xl">About Us</h1>
        <p>
          we bring innovation to life by giving AI a face—personalized, lifelike
          avatars that represent your brand or vision. We create AI-powered
          assistants that don’t just respond—they connect. Combining advanced
          AI, augmented reality, and seamless integrations, we empower
          businesses to deliver unforgettable, interactive customer experiences.
        </p>
        <AppButton Title="Learn More" icon={iconarrow} navPath={"/about"}/>
      </div>
    </div>
  );
}

export default HomeSection2;
