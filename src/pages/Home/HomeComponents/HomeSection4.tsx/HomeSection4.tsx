import React from "react";
import { motion } from "framer-motion";
import img01 from "@assets/Img/img01.png";
import img02 from "@assets/Img/img02.png";
import img03 from "@assets/Img/img03.png";
import img04 from "@assets/Img/img04.png";
import img05 from "@assets/Img/img05.png";
import AppButton from "../../../../components/shared/AppButton/AppButton";
import iconarrow from "@assets/Icons/arrow.svg"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../../components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import imgbg3 from "@assets/Img/bg3.svg";
interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
  navPath?:any
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description, className, navPath }) => (
  <motion.div
    className={`bg-natural border-[1px] flex flex-col border-[#120D021A] pb-4 rounded-lg ${className}`}
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.1 }} // Trigger once when 10% is visible
  >
    <img src={image} alt={title} className="h-[300px] w-full rounded-t-lg" />
    <div className="p-4 flex flex-col gap-2 h-full">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-3 flex-grow">{description}</p>
      <div className="flex justify-start pt-5 mt-auto"> 
        <AppButton Title="Learn More" icon={iconarrow} navPath={navPath} />
      </div>
    </div>
  </motion.div>
);

function HomeSection4() {
  const features = [
    {
      image: img01,
      title: "AI-Powered Customization",
      navPath:"/feature",
      description:
        "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet.",
    },
    {
      image: img02,
      title: "AR & QR Code Integration",
      navPath:"/feature1",
      description:
        "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet.",
    },
    {
      image: img03,
      title: "Seamless Integration",
      navPath:"/feature2",
      description:
        "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet.",
    },
    {
      image: img04,
      title: "Real-Time AI Interaction",
      navPath:"/feature3",
      description:
        "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet.",
    },
    {
      image: img05,
      navPath:"/feature4",
      title: "Advanced Analytics & Insights",
      description:
        "Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the child animations
      },
    },
  };

  return (
<section>


<div className=" hidden lg:block md:block "
style={{ backgroundImage: `url(${imgbg3}) `,backgroundSize:"" }}
>
<motion.div
      className="flex flex-col gap-6 mt-12 lg:mx-24 mx-4 justify-center items-center py-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is visible
      variants={containerVariants}
    >
      <h1 className="text-4xl py-2 font-bold">Features</h1>
      <div className="flex w-full gap-3 md:flex-row flex-col">
        {features.slice(0, 3).map((feature, index) => (
          <FeatureCard
            key={index}
            {...feature}
            className={index === 1 ? "lg:w-[40%]" : "lg:w-[30%]"}
            navPath={feature?.navPath}
          />
        ))}
      </div>
      <div className="flex w-full gap-3 md:flex-row flex-col">
        {features.slice(3).map((feature, index) => (
          <FeatureCard
            key={index + 3}
            {...feature}
            className={index === 1 ? "lg:w-1/2" : "lg:w-1/2"}
            
          />
        ))}
      </div>
    </motion.div>



</div>

<div className=" lg:hidden md:hidden  flex flex-col gap-6 mt-12 lg:mx-24 mx-4 justify-center items-center py-6">
<h1 className="text-4xl py-2 font-bold">Features</h1>
<Carousel
     
     opts={{
       slidesToScroll: 1,
     }}
     plugins={[
       AutoScroll({
         stopOnInteraction: false,
         speed: 0.9,
         startDelay: 1000,
       }),
     ]}
     className="w-full"
   >
     <CarouselContent>

       {features.map((feature) => (
         <CarouselItem key={feature.navPath} className="md:basis-1/2 grid lg:basis-4/14">
           <div className="rounded-lg overflow-hidden border bg-natural border-gray-200 flex flex-col">
             <div className="relative min-h-48 w-full">
               <img src={feature.image} alt={feature.title} className="h-72 w-full" />
             </div>
             <div className="p-5 flex flex-col flex-grow">
               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
               <p className="text-gray-600 text-sm">{feature.description}</p>
             </div>
           </div>
         </CarouselItem>
       ))}
     </CarouselContent>
     <div className="flex lg:hidden justify-center items-center gap-0 mt-8">
       <CarouselPrevious className="relative" />
       <CarouselNext className="relative" />
     </div>
   </Carousel>

</div>


</section>
  );
}

export default HomeSection4;