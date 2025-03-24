
import icon01 from "@assets/Icons/icon1.svg";
import icon02 from "@assets/Icons/icon2.svg";
import icon03 from "@assets/Icons/icon3.svg";
import icon04 from "@assets/Icons/icon4.svg";
import icon05 from "@assets/Icons/icon5.svg";
import AppIconCardSection from '../../../../components/shared/AppIconCardSection/AppIconCardSection';

function HomeSection5() {
  const cards = [
    {
      icon: icon01,
      title: "Personalized AI That Connects",
      description:
        "We give your AI a face, making interactions more human and engaging. With fully customizable avatars and multilingual capabilities, GenieLamp.ai ensures every customer feels valued and understood, no matter where they are.",
    },
    {
      icon: icon02,
      title: "Advanced Technology, Tailored for You",
      description:
        "Powered by cutting-edge AI, AR, and real-time analytics, GenieLamp.ai transforms how businesses operate. Our solutions are scalable and integrate seamlessly with your existing systems, ensuring a smooth transition to smarter, more efficient operations.",
    },
    {
      icon: icon03,
      title: "24/7 Service, Anywhere, Anytime",
      description:
        "Your Genie never sleeps. From retail to hospitality, GenieLamp.ai provides round-the-clock support, handling customer inquiries, automating tasks, and delivering real-time solutions—boosting satisfaction and loyalty.",
    },
    {
      icon: icon04,
      title: "Actionable Insights for Smarter Decisions",
      description:
        "Gain valuable insights into customer behavior and preferences through our advanced analytics. With Genie, you can refine operations, optimize experiences, and make data-driven decisions that drive growth.",
    },
    {
      icon: icon05,
      title: "Cost-effective and Future-Ready",
      description:
        "Reduce costs and improve efficiency by automating repetitive tasks while staying ahead with the latest AI innovations. GenieLamp.ai not only saves resources but also future-proofs your business in an ever-evolving market.",
    },
  ];

  return (
    <AppIconCardSection
      title="Why Choose GenieLamp?"
      cards={cards}
      buttonText="Schedule a Demo"
      IsButton={true}
      borderColor="#120D021A"
      bgColor="#F9FAFB"


    />
    
  );
}

export default HomeSection5;