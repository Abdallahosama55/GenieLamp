import React from "react";
import iconSection3 from "@assets/Img/icon30.png";
import imgbg3 from "@assets/Img/bg3.svg"
function HomeSection3() {
  return (
 <section className=" min-h-[80vh] xl:min-h-[60vh]">

<div className=" flex    relative justify-center mx-12 items-start">
        {/**make it bg */}
     
        <div 
          className='absolute z-0 inset-0 w-full top-1/2 h-full rounded-xl bg-cover bg-center'
          style={{ backgroundImage: `url(${imgbg3})` }}
        ></div>
      <div className="   flex z-10 flex-col justify-start  text-center items-center gap-3  ">
        <img src={iconSection3} className="h-[300px] w-[300px]" />
       <div className=" flex flex-col justify-center items-center gap-3 absolute top-[85%]">
       <h1 className="text-4xl  font-bold">Our Vision</h1>
        <p className="xl:w-[40%] lg:w-[50%] w-[85%] ">
          we bring innovation to life by giving AI a face—personalized, lifelike
          avatars that represent your brand or vision. We create AI-powered
          assistants that don’t just respond—they connect. Combining advanced
          AI, augmented reality, and seamless integrations, we empower
          businesses to deliver unforgettable, interactive customer experiences.
        </p>

       </div>
      </div>
    </div>

 </section>
  );
}

export default HomeSection3;
