import iconSection3 from "@assets/icons/m.png";
import imgbg3 from "@assets/Img/bg3.svg";
import icon01 from "@assets/Icons/u10.svg";
import icon02 from "@assets/Icons/u10.svg";
import icon03 from "@assets/Icons/u10.svg";
import icon04 from "@assets/Icons/u10.svg";
import AppBlobSection from "../../../../components/shared/AppBlobSection/AppBlobSection";
import AppIconCardSection from "../../../../components/shared/AppIconCardSection/AppIconCardSection";
import AppGridPartners from "../../../../components/shared/AppGridPartners/AppGridPartners";

function OurPartnersSections() {


  const sectionData2 = {
    bgImage: imgbg3,
    icon: iconSection3,
    title: "Why GenieLamp.ai for E-commerce?",
    description:
      "The partnership between GenieLamp.ai and VVerse empowers businesses to create interactive, immersive, and customer-centric experiences in the Metaverse. Together, we’re transforming how brands connect with their audiences in virtual spaces.",
  };
  const cards = [
    {
      icon: icon01, // Replace with the appropriate icon
      title: "Virtual Retail Stores",
      description:
        "Customers can shop in a virtual store, interact with Genie for product details, and make purchases seamlessly.",
      isButton: false,
    },
    {
      icon: icon02, // Replace with the appropriate icon
      title: "Immersive Events and Exhibitions",
      description:
        "Businesses can host virtual events where Genie provides attendee support, schedules, and interactive tours.",
      isButton: false,
    },
    {
      icon: icon03, // Replace with the appropriate icon
      title: "Real Estate Showcases",
      description:
        "Potential buyers can explore properties virtually, guided by Genie’s AI insights and live answers.",
      isButton: false,
    },
    {
      icon: icon04, // Replace with the appropriate icon
      title: "Virtual Classrooms and Training Centers",
      description:
        "Create virtual classrooms or training centers with Genie acting as a tutor or guide.",
      isButton: false,
    },
  ];
  

  const partners = [
    {
      id: 1,
      title: "Advanced 3D Environment Creation",
      description:
        "With VVerse, GenieLamp.ai powers 3D virtual spaces that allow:",
      cardlist: [
        "Customizable virtual shops, offices, and event spaces.",
        "Interactive environments tailored to your brand.",
        "Dynamic updates to adapt spaces for various use cases.",
      ],
      fullWidth: false,
      isButton: false,
    },
    {
      id: 2,
      title: "AI-Powered Engagement in Virtual Spaces",
      description:
        "Genies come to life in the Metaverse, offering:",
      cardlist: [
        "Real-time guidance and support in virtual stores or events.",
        "Personalized product recommendations in immersive settings.",
        "Interactive tours of virtual spaces, including detailed information about features.",
      ],
      fullWidth: false,
      isButton: false,
    },
    {
      id: 3,
      title: "Seamless Integration with the VVerse Ecosystem",
      description:
        "The collaboration ensures that GenieLamp.ai integrates effortlessly with VVerse tools, including:",
      cardlist: [
        "Virtual Portals: Interactive gateways connecting 3D spaces.",
        "Event Management Tools: Hosting webinars, conferences, and exhibitions with full attendee engagement.",
        "E-Commerce Models: Enabling virtual shopping with real-time AI assistance.",
      ],
      fullWidth: false,
      isButton: false,
    },
    {
      id: 4,
      title: "Next-Generation Customer Interaction",
      description:
        "Our partnership redefines customer engagement in the Metaverse by offering:",
      cardlist: [
        "Avatar-based interactions that feel natural and human.",
        "AR and VR integration for a fully immersive experience.",
        "Advanced analytics to track customer behavior in virtual spaces.",
      ],
      fullWidth: false,
      isButton: false,
    },
  ];
  return (
    <>
     

      <AppGridPartners
        partners={partners}
        title="What Vindo.ai Brings to GenieLamp.ai"
      />
      <AppIconCardSection
        title="Use Cases in the Metaverse"
        cards={cards}
        classNameCard="lg:grid-cols-2"
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
