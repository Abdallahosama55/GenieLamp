import iconSection3 from "@assets/icons/m.png";
import imgbg3 from "@assets/Img/bg3.svg";
import icon01 from "@assets/Icons/u7.svg";
import icon02 from "@assets/Icons/u8.svg";
import icon03 from "@assets/Icons/u9.svg";
import AppBlobSection from "../../../../components/shared/AppBlobSection/AppBlobSection";
import AppIconCardSection from "../../../../components/shared/AppIconCardSection/AppIconCardSection";
import AppGridPartners from "../../../../components/shared/AppGridPartners/AppGridPartners";

function OurPartnersSections() {
  const sectionData = {
    bgImage: imgbg3,
    icon: iconSection3,
    title: "Introduction",
    description:
      "GenieLamp.ai takes e-commerce to the next level by delivering personalized, real-time customer interactions. From answering queries to managing inventory and processing orders, our Genies make every online shopping experience seamless and engaging.",
  };

  const sectionData2 = {
    bgImage: imgbg3,
    icon: iconSection3,
    title: "Why GenieLamp.ai for E-commerce?",
    description:
      "Our platform enhances online shopping by combining real-time AI interaction, personalized recommendations, and AR-driven experiences. GenieLamp.ai helps businesses increase sales, boost customer satisfaction, and build loyalty.",
  };
  const cards = [
    {
      icon: icon01, // Replace with the appropriate icon
      title: "Fashion and Apparel",
      description:
        "Assist customers with size recommendations and suggest complementary items.",
      isButton: false,
    },
    {
      icon: icon02, // Replace with the appropriate icon
      title: "Home Décor and Furniture",
      description:
        "Let shoppers visualize furniture in their homes using AR overlays.",
      isButton: false,
    },
    {
      icon: icon03, // Replace with the appropriate icon
      title: "Electronics and Gadgets",
      description:
        "Provide detailed explanations of features and compatibility with other products.",
      isButton: false,
    },
  ];
  
  const partners = [
    {
      id: 1,
      title: "Intelligent Customer Assistance",
      description: "",
      cardlist: [
        "Genies answer product-related queries in real time.",
        "Provide personalized recommendations based on browsing history and preferences.",
        "Assist with size guides, product availability, and feature comparisons.",
      ],
      fullWidth: false,
      isButton: false,
    },
    {
      id: 2,
      title: "Automated Order Management",
      description: "",
      cardlist: [
        "Handle order placements, updates, and cancellations effortlessly.",
        "Manage inventory in real time to avoid stockouts or overstocking.",
        "Process payments securely through integrated payment gateways.",
      ],
      fullWidth: false,
      isButton: false,
    },
    {
      id: 3,
      title: "AR-Powered Shopping",
      description: "",
      cardlist: [
        "Use AR to let customers visualize products in their space before purchase.",
        "Enable 360-degree product views for a better understanding of features.",
        "Highlight product promotions through interactive AR experiences.",
      ],
      fullWidth: false,
      isButton: false,
    },
    {
      id: 4,
      title: "Enhanced Post-Purchase Support",
      description: "",
      cardlist: [
        "Genies send order confirmations and delivery updates via email or WhatsApp.",
        "Handle returns and exchanges seamlessly.",
        "Collect feedback to improve future experiences.",
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
        title="What Vindo.ai Brings to GenieLamp.ai"
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
