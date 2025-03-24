import { useState } from "react";

interface Item {
  icon?: string;
  iconNode?:any;
  title?: string;
  description?: string;
}

interface AppSectionGridProps {
  title?: string;
  subtitle?: string;
  items?: Item[];
  image?: string;
  angleIcon?: string;
  
}

const AppSectionGrid: React.FC<AppSectionGridProps> = ({
  title,
  subtitle,
  items,
  
  image,
  angleIcon,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#FDF7EC] lg:px-24 px-4 gap-4 grid lg:grid-cols-2 mt-12 py-16 justify-center items-center">
      <div>
        <span className="text-[1rem] text-accent">{subtitle}</span>
        <h2 className="font-[700] mt-2 text-2xl">{title}</h2>

        <div className="flex flex-col text-secondary p-4 gap-4">
          {items?.map((item, index) => (
            <div
              key={index}
              className={`flex  gap-1 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                activeIndex === index
                  ? "bg-accent items-start relative lg:w-[100%] py-6 shadow-md"
                  : "hover:bg-gray-100 items-center "
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {activeIndex === index && (
                <img
                  src={angleIcon}
                  className="top-[40%] end-[-10px] absolute"
                  alt="Angle Icon"
                />
              )}

              {item.icon ?       <img
                src={item.icon}
                className={`scale-75 ${
                  activeIndex === index 
                    ? "filter brightness-0 saturate-0" 
                    : index === 0 ? "filter accent-filter" : ""
                }`}
                alt={item.title}
              />:
              <div  className={`   text-[18px] font-bold bg-transparent   rounded-full  ${
                activeIndex === index 
                  ? " rounded-full " 
                  : "  text-accent" 
              }`}>

{ item.iconNode+ "."}
              </div>
            
              
              }
              <div className="flex-grow mt-1">
                <h3
                  className={`font-[600] text-sm capitalize ${
                    activeIndex === index ? "" : "font-bold"
                  }`}
                >
                  {item.title}
                </h3>
                {activeIndex === index && item.description && (
                  <p className="text-sm leading-7 text-primary">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="  w-full">
        <img 
          src={image} 
          alt="Tabpanel" 
          className="border-accent   w-full h-full  p-0 m-0 rounded-2xl shadow-lg border-[8px]" 
        />
      </div>
    </div>
  );
};

export default AppSectionGrid;