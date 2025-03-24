import iconSection3 from "@assets/icons/m.png";
import imgbg3 from "@assets/Img/bg3.svg";
import icon01 from "@assets/Icons/u1.svg";
import icon02 from "@assets/Icons/u2.svg";
import icon03 from "@assets/Icons/u3.svg";
import AppBlobSection from "../../../../components/shared/AppBlobSection/AppBlobSection";
import AppIconCardSection from "../../../../components/shared/AppIconCardSection/AppIconCardSection";
import AppGridPartners from "../../../../components/shared/AppGridPartners/AppGridPartners";

function OurPartnersSections() {
  const sectionData = {
    bgImage: imgbg3,
    icon: iconSection3,
    title: "Introduction",
    description:
      "Our partnership with V Booking is revolutionizing the travel industry by combining cutting-edge AI technology with world-class travel solutions. With GenieLamp.ai powered by V Booking’s advanced systems, we deliver seamless customer interactions, intelligent booking capabilities, and tailored travel experiences.",
  };

  const sectionData2 = {
    bgImage: imgbg3,
    icon: iconSection3,
    title: "Why This Collaboration Matters?",
    description:
      "By integrating V Booking’s travel expertise with GenieLamp.ai’s AI-powered interactions, we create a seamless travel experience from start to finish. Our collaboration ensures that businesses can offer smarter, faster, and more personalized services to their customers.",
  };
  const cards = [
    {
      icon: icon01,
      title: "Hotels & Resorts",
      description:
        "Guests can interact with a Genie to book rooms, request upgrades, and explore amenities in real time.",
      isButton: false,
    },
    {
      icon: icon02,
      title: "Travel Agencies",
      description:
        "Agencies use Genie to create custom travel packages, manage bookings, and communicate directly with clients.",
      isButton: false,
    },
    {
      icon: icon03,
      title: "Tourism Boards",
      description:
        "Provide tourists with virtual guides to discover destinations, book tours, and access itineraries instantly.",
      isButton: false,
    },
  ];

  const partners = [
    {
      id: 1,

      title: "Advanced Booking Engine",
      description:
        "V Booking’s state-of-the-art booking technology integrates effortlessly with GenieLamp.ai, enabling:",
      cardlist: [
        "Real-time availability checks",
        "Instant reservations for hotels, tours, and activities",
        "Dynamic package creation tailored to customer preferences",
      ],
      fullWidth: false,
      isButton: false,
    },
    {
      id: 2,

      title: "Comprehensive Tourism Solutions",
      description:
        "V Booking enhances GenieLamp.ai with access to a rich inventory of global travel services, allowing businesses to:",

      cardlist: [
        "Offer end-to-end travel solutions",
        "Manage and customize itineraries",
        "Access special rates and exclusive deals for customers",
      ],
      fullWidth: false,
      isButton: false,
    },
    {
      id: 3,

      title: "AI-Powered Personalization",
      description:
        "By combining V Booking’s robust data with GenieLamp.ai’s AI capabilities, businesses can:",

      cardlist: [
        "Provide personalized recommendations for travel destinations, activities, and packages.",
        "Tailor offers based on customer preferences and past bookings.",
        "Enhance customer satisfaction with real-time support and interaction.",
      ],
      fullWidth: true,
      isButton: false,
    },
    {
      id: 4,

      title: "Multichannel Integration",
      description:
        "The partnership enables seamless integration across multiple platforms, including:",
      cardlist: [
        "Websites and mobile apps for travel agencies and operators.",
        "QR code and AR-based Genies for physical locations.",
        "Social media channels for direct customer engagement.",
      ],
      fullWidth: false,
      isButton: false,
    },
    {
      id: 5,

      title: "Streamlined Operations for Travel Agents",
      description:
        "GenieLamp.ai, powered by V Booking, simplifies travel management by:",
      cardlist: [
        "Automating itinerary updates and booking confirmations.",
        "Managing cancellations, rebookings, and customer inquiries in real time.",
        "Reducing manual workloads and enhancing operational efficiency.",
      ],
      fullWidth: false,
      isButton: false,
    },
  ];
  return (
    <>
      <AppBlobSection
        bgImage={sectionData.bgImage}
        iconText={sectionData.icon}
        title={sectionData.title}
        description={sectionData.description}
      />

      <AppGridPartners
        partners={partners}
        title="What V Booking Brings to GenieLamp.ai"
      />
      <AppIconCardSection
        title="Use Cases"
        cards={cards}
        classNameCard="lg:grid-cols-3"
        buttonText=""
        IsButton={false}
      />
      <AppBlobSection
        bgImage={sectionData2.bgImage}
        iconText={sectionData2.icon}
        title={sectionData2.title}
        description={sectionData2.description}
      />
    </>
  );
}

export default OurPartnersSections;
