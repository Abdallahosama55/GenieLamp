import React from "react";
import ficon from "@assets/icons/ficon.svg"
import ficon2 from "@assets/icons/ficon2.svg"
import ficon3 from "@assets/icons/ficon3.svg"
import ficon4 from "@assets/icons/ficon4.svg"
import ficon5 from "@assets/icons/ficon5.svg"
import Tabpanel from "@assets/Img/Tabpanel.png"
import angle from "@assets/icons/angle.svg"
function HomeSection6() {
  return (
    <div className=" bg-[#FDF7EC] lg:px-24 px-4 gap-4 grid lg:grid-cols-2 mt-12 py-16 justify-center items-center">
      <div>
        <span className=" text-[1rem] text-accent">
          Smart, Fast, and Effortless Creation!
        </span>
        <h2 className=" font-[700] mt-2  text-2xl">How It Works</h2>

        <div className=" bg-accent relative flex lg:w-[90%] py-6 items-start gap-1 mt-8 rounded-xl p-4">
            <img src={angle} className="   top-[40%]  end-[-10px] absolute"/>
            <img src={ficon} className="  scale-75"/>
          <div className=" flex-grow">
          <h3 className=" font-[600]">Choose Your Genie</h3>
          <p className="text-sm">
            Start by selecting a lifelike avatar from our library, or request a
            custom design to perfectly represent your brand or vision.
          </p>

          </div>
        </div>
        <div className=" flex flex-col  text-secondary p-4 gap-8">
          <h3 className=" flex items-center gap-1"><img src={ficon2}/>Configure Your AI</h3>
          <h3 className=" flex items-center gap-1"><img src={ficon3}/>Build a Knowledge Base</h3>
          <h3 className=" flex items-center gap-1"><img src={ficon4}/>Deploy Your Genie</h3>
          <h3 className=" flex items-center gap-1"><img src={ficon5}/>Engage & Optimize</h3>
        </div>
      </div>
      <div>

<img src={Tabpanel}/>

      </div>
    </div>
  );
}

export default HomeSection6;
