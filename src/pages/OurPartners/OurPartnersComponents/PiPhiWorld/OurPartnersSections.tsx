import iconSection3 from "@assets/icons/m.png";
import imgbg3 from "@assets/Img/bg3.svg";
import icon01 from "@assets/Icons/w1.svg";
import icon02 from "@assets/Icons/w2.svg";
import icon03 from "@assets/Icons/w3.svg";
import icon04 from "@assets/Icons/w4.svg";
import icon05 from "@assets/Icons/w5.svg";
import icon06 from "@assets/Icons/w6.svg";
import icon07 from "@assets/Icons/w7.svg";
import icon08 from "@assets/Icons/w8.svg";
import ficon1 from "@assets/Icons/ff1.svg";
import ficon2 from "@assets/Icons/ff2.svg";
import ficon3 from "@assets/Icons/ff3.svg";
import ficon4 from "@assets/Icons/ff4.svg";
import TransformingImg from "@assets/Img/fs2.png";
import Tabpanel from "@assets/Img/Tabpanel.png";
import angle from "@assets/icons/angle.svg";
import AppBlobSection from "../../../../components/shared/AppBlobSection/AppBlobSection";
import AppIconCardSection from "../../../../components/shared/AppIconCardSection/AppIconCardSection";
import AppGridPartners from "../../../../components/shared/AppGridPartners/AppGridPartners";
import AppSectionGrid from "../../../../components/shared/AppSectionGrid/AppSectionGrid";
import AppBinaryGrid from "../../../../components/shared/AppBinaryGrid/AppBinaryGrid";

function OurPartnersSections() {
  const sectionData = {
    bgImage: imgbg3,
    icon: iconSection3,
    title: "Revolutionizing Spaces with PiPhi World",
    description:
      "Experience the future of interactive spaces with our collaboration with PiPhi World. Combining advanced 3D interior mapping and AI-powered Genies, we deliver seamless navigation, real-time assistance, and personalized interactions. From hotels to retail, museums to airports, transform your spaces into immersive, customer-centric environments.",
  };

  const cards1 = [
    {
      icon: icon01, // Replace with the appropriate icon
      title: "AI-Powered Interactivity",
      description:
        "Our Genies guide users through spaces, offering real-time assistance and personalized interactions powered by AI.",
      isButton: false,
    },
    {
      icon: icon02, // Replace with the appropriate icon
      title: "Internal Mapping Capabilities",
      description:
        "With PiPhi World’s expertise, we provide detailed and interactive interior maps, allowing businesses to showcase their spaces like never before.",
      isButton: false,
    },
    {
      icon: icon03, // Replace with the appropriate icon
      title: "Seamless Integration",
      description:
        "Our combined technology enables businesses to integrate AR navigation, virtual guides, and personalized recommendations, delivering an immersive experience.",
      isButton: false,
    },
    {
      icon: icon04, // Replace with the appropriate icon
      title: "Enhanced Customer Engagement",
      description:
        "Customers can scan a QR code to interact with a Genie that leverages PiPhi World’s precise mapping for navigation and information.",
      isButton: false,
    },
  ];
  const cards2 = [
    {
      icon: icon05, // Replace with the appropriate icon
      title: "Hotels & Resorts",
      description:
        "Guests can navigate lobbies, locate their rooms, and discover amenities with a Genie-powered map.",
      isButton: false,
    },
    {
      icon: icon06, // Replace with the appropriate icon
      title: "Retail Spaces",
      description:
        "Shoppers can find specific products or departments while receiving personalized promotions.",
      isButton: false,
    },
    {
      icon: icon07, // Replace with the appropriate icon
      title: "Museums & Exhibitions",
      description:
        "Visitors can enjoy guided tours with detailed information about exhibits through AR overlays.",
      isButton: false,
    },
    {
      icon: icon08, // Replace with the appropriate icon
      title: "Airports & Large Venues",
      description:
        "Travelers can locate gates, lounges, and services efficiently with AI-guided navigation.",
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
      description: "Genies come to life in the Metaverse, offering:",
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
  const sectionData2 = {
    bgImage: imgbg3,
    icon: iconSection3,
    title: "Why This Collaboration Matters?",
    description:
      "By integrating PiPhi World’s mapping technology with GenieLamp.ai’s interactive AI, we’re empowering businesses to create immersive, efficient, and engaging environments. This partnership exemplifies innovation at its best, delivering smarter spaces for a connected future.",
  };

  const sectionDataHow = {
    title: "How It Works",
    subtitle: "Smart, Fast, and Effortless Creation!",
    image: Tabpanel,
    angleIcon: angle,
    items: [
      {
        icon: ficon1,
        title: "Map Creation",
        description:
          "PiPhi World creates high-precision 3D interior maps of your space.",
      },
      {
        icon: ficon2,
        title: "AI Integration",
        description:
          "GenieLamp.ai adds interactive AI-powered Genies to guide, assist, and interact with customers in real time.",
      },
      {
        icon: ficon3,
        title: "AR Navigation",
        description:
          "Users can navigate spaces through AR overlays, directed by their Genie for a seamless experience.",
      },
      {
        icon: ficon4,
        title: "Personalized Insights",
        description:
          "Combine mapping data with AI-driven analytics to better understand customer behavior.",
      },
    ],
  };

  const sectionsTransforming = [
    {
 
      content:
        "At GenieLamp.ai, we’re proud to collaborate with PiPhi World, a leading innovator in Augmented Reality (AR) and Mixed Reality (MR) solutions. Together, we’re redefining how businesses and customers experience spaces by combining PiPhi World’s cutting-edge mapping technology with our advanced AI-powered Genie platform.",
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

      <AppBinaryGrid
        sections={sectionsTransforming}
        imageSrc={TransformingImg}
        imageAlt="About Section"
        className=""
        Header="Transforming Spaces with PiPhi World: Mapping the Future Together"
        
      />
      <AppIconCardSection
        title="What We Bring to the Collaboration:"
        cards={cards1}
        classNameCard="lg:grid-cols-2"
        buttonText=""
        bgColor="#F9FAFB"
        borderColor="#120D021A"
        IsButton={false}
      />
      <AppSectionGrid {...sectionDataHow} />
      <AppGridPartners
        partners={partners}
        title="What Vindo.ai Brings to GenieLamp.ai"
      />
      <AppIconCardSection
        title="Use Cases"
        cards={cards2}
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
