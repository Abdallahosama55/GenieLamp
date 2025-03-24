
import Tabpanel1 from "@assets/Img/s1.png";
import Tabpanel2 from "@assets/Img/s2.png";
import Tabpanel3 from "@assets/Img/s3.png";
import Tabpanel4 from "@assets/Img/s4.png";
import Tabpanel5 from "@assets/Img/s5.png";
import Tabpanel6 from "@assets/Img/s6.png";
import AppBinaryGrid from "../../../../components/shared/AppBinaryGrid/AppBinaryGrid";
import bg from "@assets/Img/vv.png";
const sections = [
  {
    title: "",
    content:
      "Real-Time AI Interaction enables your Genie to respond instantly to customer queries, requests, or commands, delivering seamless assistance 24/7.",
  },
  {
    title: "",
    content:
      "Designed for dynamic environments like retail, tourism, hospitality, and customer service, Genie’s real-time responses make every interaction efficient and meaningful.",
  },
];

const sectionsThinks = [
  {
    title: "Instant Answers",
    content:
      "Respond to queries in milliseconds, enhancing customer satisfaction.",
  },
  {
    title: "Natural Conversations",
    content: "Engage in lifelike, context-aware dialogues that feel human.",
  },
  {
    title: "Multilingual Support",
    content: "Converse in multiple languages, catering to a global audience.",
  },
  {
    title: "Dynamic Adaptation",
    content: "Adjust responses based on customer tone, mood, or preferences.",
  },
  {
    title: "Context Awareness",
    content:
      "Recognize past interactions and provide continuity in conversations.",
  },
];

const sectionsRealTime = [
  {
    title: "Hospitality",
    content:
      "AI concierge assists guests with check-ins, room service, and local recommendations.",
  },
  {
    title: "Retail",
    content:
      "Answer customer queries about product availability, pricing, and features instantly.",
  },
  {
    title: "Tourism",
    content:
      "Virtual guides provide real-time navigation, activity suggestions, and local insights.",
  },
  {
    title: "Healthcare",
    content:
      "AI assistants streamline patient check-ins, FAQs, and appointment scheduling.",
  },
  {
    title: "Education",
    content:
      "Engage students in real-time discussions and provide instant answers to course queries.",
  },
];

const Whyrealtime = [
  {
    title: "Enhanced Customer Experience",
    content: "Faster responses mean happier customers.",
  },
  {
    title: "Increased Efficiency",
    content: "Reduce staff workload by automating repetitive tasks.",
  },
  {
    title: "Personalized Engagement",
    content: "Deliver tailored solutions for each customer.",
  },
  {
    title: "24/7 Availability",
    content: "Never miss a customer, even outside business hours.",
  },
  {
    title: "Scalability",
    content: "Handle unlimited interactions simultaneously.",
  },
];

const Beyondrealtime = [
  {
    title: "Live Product Recommendations",
    content:
      "Suggest products or services in real-time based on customer preferences.",
  },
  {
    title: "Interactive Tutorials",
    content: "Guide users through processes or products step-by-step.",
  },
  {
    title: "Real-Time Feedback Collection",
    content: "Gather customer insights instantly for actionable improvements.",
  },
];

const bringrealtime = [
    {
      title: "Seamless Integration",
      content: "Integrate GenieLamp.ai with your existing systems."
    },
    {
      title: "Full Customization",
      content: "Customize your Genie’s language, behavior, and permissions."
    },
    {
      title: "Flexible Deployment",
      content: "Deploy the Genie via AR, QR codes, or online interfaces."
    }
  ];
  

function RealTimeAIInteractionSections() {
  return (
    <>
      <AppBinaryGrid
        sections={sections}
        imageSrc={Tabpanel1}
        imageAlt="About Section"
        className=""
        Header="Instant Solutions, Personalized for Every Customerc"
        titleBlockType="flex-dotted"
      />

      <AppBinaryGrid
        sections={sectionsThinks}
        imageSrc={Tabpanel2}
        imageAlt="About Section"
        className="mt-12 reverse"
        Header="AI That Thinks on Its Feet"
        titleBlockType="flex-dotted"
        bgImageSrc={bg}
      />

      <AppBinaryGrid
        sections={sectionsRealTime}
        imageSrc={Tabpanel3}
        imageAlt="About Section"
        className="mt-12"
        Header="Where Real-Time AI Interaction Excels"
        titleBlockType="flex-dotted"
      />

      <AppBinaryGrid
        sections={Whyrealtime}
        imageSrc={Tabpanel4}
        imageAlt="About Section"
        className="mt-12 reverse"
        Header="Build Custom Workflows with Our API"
        titleBlockType="flex-dotted"
        bgImageSrc={bg}
      />

      <AppBinaryGrid
        sections={Beyondrealtime}
        imageSrc={Tabpanel5}
        imageAlt="About Section"
        className="mt-12 "
        Header="Beyond Conversations"
        titleBlockType="flex-dotted"
      />

      <AppBinaryGrid
        sections={bringrealtime}
        imageSrc={Tabpanel6}
        imageAlt="About Section"
        className="mt-12 reverse"
        Header="Bring Real-Time AI to Your Business"
        titleBlockType="flex-numeric"
        bgImageSrc={bg}
      />
    </>
  );
}

export default RealTimeAIInteractionSections;
