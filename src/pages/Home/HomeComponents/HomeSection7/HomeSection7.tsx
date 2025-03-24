
import { Carousel, CarouselContent, CarouselItem} from "../../../../components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"; // Added import
import vir from "@assets/Img/vir.png";
import sma from "@assets/Img/sma.png";
import aug from "@assets/Img/aug.png";
import res from "@assets/Img/res.png";
import cus from "@assets/Img/cus.png";
import int from "@assets/Img/int.png";
import edu from "@assets/Img/edu.png";
import hea from "@assets/Img/hea.png";
import rea from "@assets/Img/rea.png";
import tas from "@assets/Img/tas.png";
import { CarouselNext, CarouselPrevious } from "../../../../components/ui/carousel";
import { useRef } from "react";

const useCases = [
  {
    id: 1,
    title: "Virtual Concierge for Hospitality",
    description:
      "Enhance guest experiences with a virtual concierge. Genie can assist with check-ins, room service requests, local recommendations, and more—available 24/7 in multiple languages.",
    image: vir,
  },
  {
    id: 2,
    title: "Smart Retail Assistant",
    description:
      "Transform the shopping experience with Genie's real-time product information and inventory management. Genie can also process payments and suggest complementary items.",
    image: sma,
  },
  {
    id: 3,
    title: "Augmented Reality Tourist Guide",
    description:
      "Genie serves as a personalized AR guide for tourists, offering detailed insights about landmarks, activities, and directions.",
    image: aug,
  },
  {
    id: 4,
    title: "Restaurant Virtual Waiter",
    description:
      "Let Genie handle orders, menu suggestions, and payments seamlessly in restaurants. It can even display dishes in AR for customers to preview before ordering.",
    image: res,
  },
  {
    id: 5,
    title: "Customer Support for Retail & Online Stores",
    description:
      "Genie answers FAQs, provides product details, and resolves queries in real time. It can be integrated with inventory systems for detailed responses.",
    image: cus,
  },
  {
    id: 6,
    title: "Interactive Event Guide",
    description:
      "Genie enhances events by providing real-time schedules, speaker bios, and location directions, all via QR codes or an event app.",
    image: int,
  },
  {
    id: 7,
    title: "Education Support Assistant",
    description:
      "Genie acts as a tutor or classroom assistant, answering questions, guiding through lessons, or helping with scheduling.",
    image: edu,
  },
  {
    id: 8,
    title: "Healthcare Assistant",
    description:
      "Streamline healthcare services by using Genie to handle appointment scheduling, patient inquiries, and health information dissemination.",
    image: hea,
  },
  {
    id: 9,
    title: "Real Estate Virtual Agent",
    description:
      "Genie helps potential buyers explore properties virtually, providing detailed descriptions, availability, and scheduling tours.",
    image: rea,
  },
  {
    id: 10,
    title: "Task Automation for Businesses",
    description:
      "Genie automates repetitive tasks like assigning employee tasks, managing schedules, and sending reminders.",
    image: tas,
  },
];

export default function HomeSection7() {
  const sectionRef = useRef(null); // Ref for the section


  return (
    <section ref={sectionRef} className="py-16 lg:mx-0 mx-5">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Use Cases</h2>

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
          <div className="lg:ps-[100px]"></div>
          {useCases.map((useCase) => (
            <CarouselItem key={useCase.id} className="md:basis-1/2 grid lg:basis-4/14">
              <div className="rounded-lg overflow-hidden border bg-natural border-gray-200 flex flex-col">
                <div className="relative min-h-48 w-full">
                  <img src={useCase.image} alt={useCase.title} className="h-72 w-full" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-gray-600 text-sm">{useCase.description}</p>
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
    </section>
  );
}

