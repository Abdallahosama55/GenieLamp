import iconSection3 from "@assets/icons/m.png";
import imgbg3 from "@assets/Img/bg3.svg";
import icon01 from "@assets/Icons/u4.svg";
import icon02 from "@assets/Icons/u5.svg";
import icon03 from "@assets/Icons/u6.svg";
import AppBlobSection from "../../../../components/shared/AppBlobSection/AppBlobSection";
import AppIconCardSection from "../../../../components/shared/AppIconCardSection/AppIconCardSection";
import AppGridPartners from "../../../../components/shared/AppGridPartners/AppGridPartners";

function OurPartnersSections() {
  const sectionData = {
    bgImage: imgbg3,
    icon: iconSection3,
    title: "Introduction",
    description:
      "Our partnership with Vindo.ai brings the power of seamless communication and collaboration to GenieLamp.ai. By leveraging Vindo.ai’s advanced tools, we deliver a smarter way to manage customer interactions, automate business processes, and keep teams connected in real time.",
  };

  const sectionData2 = {
    bgImage: imgbg3,
    icon: iconSection3,
    title: "Why This Collaboration Matters?",
    description:
      "Our integration with Vindo.ai enables businesses to manage communication, tasks, and workflows with unmatched efficiency. Together, we ensure that every customer interaction is meaningful and productive.",
  };
  const cards = [

    {
      icon: icon01, // Replace with the appropriate icon
      title: "Customer Support Centers",
      description:
        "Genies provide instant assistance for FAQs, order tracking, and issue resolution.",
      isButton: false,
    },
    {
      icon: icon02, // Replace with the appropriate icon
      title: "Retail Businesses",
      description:
        "Sales teams use Genies to interact with customers, recommend products, and manage inquiries.",
      isButton: false,
    },
    {
      icon: icon03, // Replace with the appropriate icon
      title: "Event Management",
      description:
        "Use Genie to coordinate schedules, manage attendee interactions, and send reminders.",
      isButton: false,
    },
  ];

  const partners = [
    {
      id: 1,
      title: "Advanced Communication Tools",
      description:
        "Vindo.ai integrates with GenieLamp.ai to enable:",
      cardlist: [
        "Real-time video and voice calls for customer support.",
        "AI-driven chatbots that handle inquiries 24/7.",
        "Multilingual communication for global audiences.",
      ],
      fullWidth: false,
      isButton: false,
    },
    {
      id: 2,
      title: "CRM and Task Management Integration",
      description:
        "Through Vindo.ai, GenieLamp.ai seamlessly integrates with CRM systems to:",
      cardlist: [
        "Monitor and update sales pipelines.",
        "Automate task assignments to employees.",
        "Track customer interactions and follow-ups in real time.",
      ],
      fullWidth: false,
      isButton: false,
    },
    {
      id: 3,
      title: "Intelligent Workflow Automation",
      description:
        "Vindo.ai’s tools enhance GenieLamp.ai’s automation capabilities by:",
      cardlist: [
        "Scheduling meetings and managing calendars.",
        "Sending automated follow-up emails to customers.",
        "Streamlining operational workflows for increased efficiency.",
      ],
      fullWidth: false,
      isButton: false,
    },
    {
      id: 4,
      title: "Personalized Engagement",
      description:
        "By combining Vindo.ai’s data capabilities with Genie’s AI, businesses can:",
      cardlist: [
        "Offer tailored recommendations during live interactions.",
        "Personalize customer support responses.",
        "Enhance loyalty with targeted promotions and offers.",
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
