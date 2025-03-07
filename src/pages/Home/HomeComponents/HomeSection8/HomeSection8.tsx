import { ArrowRight } from "lucide-react";
import AppButton from "../../../../components/shared/AppButton/AppButton";
import arrow from "@/assets/Icons/arrow.svg";
import VBooking from "@/assets/Icons/logo08.png";
import Vindoai from "@/assets/Icons/logo18.png";
import Ecommerce from "@/assets/Icons/logo28.png";
import PiPhiWorld from "@/assets/Icons/logo38.png";
import VVerseCollaboration from "@/assets/Icons/logo48.png";
import VBookingbg from "@/assets/Icons/bg08.png";
import Vindoaibg from "@/assets/Icons/bg18.png";
import Ecommercebg from "@/assets/Icons/bg28.png";
import PiPhiWorldbg from "@/assets/Icons/bg38.png";
import VVerseCollaborationbg from "@/assets/Icons/bg48.png";
export default function HomeSection8() {
  const partners = [
    {
      id: 1,
      logo: VBooking,
      name: "V Booking",
      title: "Transforming the Travel Industry",
      description:
        "As a global leader in travel technology, V Booking powers our Genies with advanced booking engines and tourism solutions. This partnership enables seamless travel planning, real-time reservations, and an unmatched customer experience in the hospitality sector.",
      bgImage: VBookingbg,
      fullWidth: false,
    },
    {
      id: 2,
      logo: Vindoai,
      name: "Vindo.ai",
      title: "AI-Driven Communication and Collaboration",
      description:
        "Vindo.ai provides the backbone for real-time AI interaction and system integration. With Vindo's innovative communication tools, our Genies handle tasks like CRM updates, pipeline monitoring, and task assignments, ensuring your business operates effortlessly",
      bgImage: Vindoaibg,
      fullWidth: false,
    },
    {
      id: 3,
      logo: Ecommerce,
      name: "E-commerce",
      title: "Mapping the Future with AR and MR",
      description:
        "PiPhi World's state-of-the-art 3D mapping and AR solutions complement GenieLamp.ai's capabilities by delivering immersive navigation and interactive experiences. From interior maps to personalized AR overlays, this partnership enhances every aspect of customer engagement.",
      bgImage: Ecommercebg,
      fullWidth: true,
    },
    {
      id: 4,
      logo: PiPhiWorld,
      name: "PiPhi World",
      title: "Mapping the Future with AR and MR",
      description:
        "PiPhi World's state-of-the-art 3D mapping and AR solutions complement GenieLamp.ai's capabilities by delivering immersive navigation and interactive experiences. From interior maps to personalized AR overlays, this partnership enhances every aspect of customer engagement.",
      bgImage: PiPhiWorldbg,
      fullWidth: false,
    },
    {
      id: 5,
      logo: VVerseCollaboration,
      name: "VVerse Collaboration",
      title: "Discover the Metaverse with Us!",
      description:
        "Experience the future of customer engagement with VVerse and GenieLamp.ai. Together, we create immersive 3D spaces where AI-powered Genies enhance your brand. From virtual stores to interactive events, our partnership transforms how you connect with customers in the Metaverse.",
      bgImage: VVerseCollaborationbg,
      fullWidth: false,
    },
  ];

  return (
    <section className="py-12 px-4 lg:mx-24 mx-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className={`bg-natural rounded-lg border border-[#120D021A] p-6    flex flex-col  transition-shadow relative overflow-hidden ${
              partner.fullWidth ? "md:col-span-2 py-12" : ""
            }`}
          >
            {/* Background decorative image */}
            <div className="absolute top-0 right-0 w-30 h-30   opacity-40 pointer-events-none">
              <img
                src={partner.bgImage}
                alt=""
                width={200}
                height={200}
                className="object-contain"
                aria-hidden="true"
              />
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <span className="font-medium">{partner.name}</span>
            </div>

            <div className=" flex-grow f">
              <h3 className="text-xl font-bold mb-3">{partner.title}</h3>

              <p className="text-gray-600 mb-6 text-sm">
                {partner.description}
              </p>
            </div>

          <div className=" flex justify-start">

          <AppButton Title=" See More" icon={arrow}  />
          </div>
          </div>
        ))}
      </div>
    </section>
  );
}
