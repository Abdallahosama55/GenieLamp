import AppGridPartners from "../../../../components/shared/AppGridPartners/AppGridPartners";
import VBooking from "@/assets/Img/Vbooking.png";
import Vindoai from "@/assets/Img/Vindo.png";
import PiPhiWorld from "@/assets/Img/Pihfi.png";
import VVerseCollaboration from "@/assets/Img/Veverse.png";
import VBookingbg from "@/assets/Icons/bg08.png";
import Vindoaibg from "@/assets/Icons/bg18.png";
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
      navPath: "/VBooking",
      isButton: true,
    },
    {
      id: 2,
      logo: Vindoai,
      navPath: "/Vindoai",
      name: "Vindo.ai",
      title: "AI-Driven Communication and Collaboration",
      description:
        "Vindo.ai provides the backbone for real-time AI interaction and system integration. With Vindo's innovative communication tools, our Genies handle tasks like CRM updates, pipeline monitoring, and task assignments, ensuring your business operates effortlessly",
      bgImage: Vindoaibg,
      fullWidth: false,
      isButton: true,
    },
    {
      id: 4,
      logo: PiPhiWorld,
      navPath: "/PiPhiWorld",
      name: "PiPhi World",
      title: "Mapping the Future with AR and MR",
      description:
        "PiPhi World's state-of-the-art 3D mapping and AR solutions complement GenieLamp.ai's capabilities by delivering immersive navigation and interactive experiences. From interior maps to personalized AR overlays, this partnership enhances every aspect of customer engagement.",
      bgImage: PiPhiWorldbg,
      fullWidth: false,
      isButton: true,
    },
    {
      id: 5,
      logo: VVerseCollaboration,
      name: "VVerse Collaboration",
      navPath: "/VVerse",
      title: "Discover the Metaverse with Us!",
      description:
        "Experience the future of customer engagement with VVerse and GenieLamp.ai. Together, we create immersive 3D spaces where AI-powered Genies enhance your brand. From virtual stores to interactive events, our partnership transforms how you connect with customers in the Metaverse.",
      bgImage: VVerseCollaborationbg,
      fullWidth: false,
      isButton: true,
    },
  ];

  return <AppGridPartners partners={partners} title="Our Partners" />;
}
