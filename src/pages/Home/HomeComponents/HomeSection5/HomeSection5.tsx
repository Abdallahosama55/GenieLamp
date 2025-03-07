import icon01 from "@assets/Icons/icon1.svg";
import icon02 from "@assets/Icons/icon2.svg";
import icon03 from "@assets/Icons/icon3.svg";
import icon04 from "@assets/Icons/icon4.svg";
import icon05 from "@assets/Icons/icon5.svg";
import AppButton from "../../../../components/shared/AppButton/AppButton";
function HomeSection5() {
    const cards = [
        {
          icon: icon01, // Replace with the appropriate icon import
          title: "Personalized AI That Connects",
          description:
            "We give your AI a face, making interactions more human and engaging. With fully customizable avatars and multilingual capabilities, GenieLamp.ai ensures every customer feels valued and understood, no matter where they are.",
        },
        {
          icon: icon02, // Replace with the appropriate icon import
          title: "Advanced Technology, Tailored for You",
          description:
            "Powered by cutting-edge AI, AR, and real-time analytics, GenieLamp.ai transforms how businesses operate. Our solutions are scalable and integrate seamlessly with your existing systems, ensuring a smooth transition to smarter, more efficient operations.",
        },
        {
          icon: icon03, // Replace with the appropriate icon import
          title: "24/7 Service, Anywhere, Anytime",
          description:
            "Your Genie never sleeps. From retail to hospitality, GenieLamp.ai provides round-the-clock support, handling customer inquiries, automating tasks, and delivering real-time solutions—boosting satisfaction and loyalty.",
        },
        {
          icon: icon04, // Replace with the appropriate icon import
          title: "Actionable Insights for Smarter Decisions",
          description:
            "Gain valuable insights into customer behavior and preferences through our advanced analytics. With Genie, you can refine operations, optimize experiences, and make data-driven decisions that drive growth.",
        },
        {
          icon: icon05, // Replace with the appropriate icon import
          title: "Cost-effective and Future-Ready",
          description:
            "Reduce costs and improve efficiency by automating repetitive tasks while staying ahead with the latest AI innovations. GenieLamp.ai not only saves resources but also future-proofs your business in an ever-evolving market.",
        },
      
      ];

  return (
    <div className="mx-4 flex flex-col gap-8 mt-12  lg:mx-24 font-segoe-ui">
      <h1 className="text-4xl font-[700] text-center">Why Choose GenieLamp?</h1>
      <div className="bg-natural rounded-lg p-12 border-[#120D021A] border-[1px]">
        <div className="grid lg:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div key={index}>
              <div className="flex gap-2 items-start">
                <div>
                  <img src={card.icon} className="lg:w-[100px] w-[150px]" alt={`icon-${index}`} />
                </div>
                <div>
                  <h2 className="text-primary font-bold">{card.title}</h2>
                  <p className="text-secondary">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" flex w-full justify-center mt-12 items-center">
<AppButton Title="Schedule a Demo" className="py-3"/>

        </div>
      </div>
    </div>
  );
}

export default HomeSection5;