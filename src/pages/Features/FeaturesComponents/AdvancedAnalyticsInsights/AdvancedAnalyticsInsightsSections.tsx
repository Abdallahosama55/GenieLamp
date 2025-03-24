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
      "Understand your customers better and optimize operations with real-time analytics.",
  },
  {
    title: "",
    content:
      "Track engagement, monitor trends, and refine your Genie’s performance to drive results.",
  },
];

const sectionsComprehensive = [
  {
    title: "Customer Interaction Metrics",
    content:
      "Monitor the number of interactions, common queries, and Genie response times.",
  },
  {
    title: "Behavioral Insights",
    content:
      "Analyze customer preferences and identify patterns to improve services.",
  },
  {
    title: "Conversion Tracking",
    content:
      "Measure how effectively the Genie drives bookings, sales, or inquiries.",
  },
  {
    title: "Real-Time Reports",
    content: "Access detailed reports in real-time for up-to-date insights.",
  },
  {
    title: "Performance Optimization Suggestions",
    content:
      "Receive AI-powered recommendations to enhance your Genie’s effectiveness.",
  },
];

const sectionsTools = [
  {
    title: "",
    content: "CRM platforms (e.g., Vindo.ai, Salesforce).",
  },
  {
    title: "",
    content: "Marketing analytics tools (e.g., Google Analytics).",
  },
  {
    title: "",
    content: "Inventory and booking platforms for end-to-end visibility.",
  },
];

const sectionsHow = [
  {
    title: "Hospitality",
    content: "Track guest inquiries and identify peak service times.",
  },
  {
    title: "Retail",
    content: "Understand which products customers ask about most frequently.",
  },
  {
    title: "Tourism",
    content:
      "Measure interest in destinations and optimize marketing strategies.",
  },
  {
    title: "Events",
    content: "Analyze attendee engagement and optimize future event planning.",
  },
];

const sectionsWay = [
  {
    title: "",
    content:
      "Tailor the analytics dashboard to focus on the metrics that matter most to your business.",
  },
  {
    title: "",
    content:
      "Set up alerts and notifications for key performance indicators (KPIs).",
  },
];

const sectionsWhy = [
  {
    title: "Personalized Experiences",
    content: "Tailor services based on customer behavior.",
  },
  {
    title: "Faster Resolutions",
    content: "Identify frequent issues and address them proactively.",
  },
  {
    title: "Improved Engagement",
    content: "Enhance interactions based on data-driven insights.",
  },
];

function AdvancedAnalyticsInsightsSections() {
  return (
    <>
      <AppBinaryGrid
        sections={sections}
        imageSrc={Tabpanel1}
        imageAlt="About Section"
        className=""
        Header="Make Smarter Decisions with Actionable Data"
        titleBlockType="flex-dotted"
      />

      <AppBinaryGrid
        sections={sectionsComprehensive}
        imageSrc={Tabpanel2}
        imageAlt="About Section"
        className="mt-12 reverse"
        Header="Comprehensive Data at Your Fingertips"
        titleBlockType="flex-dotted"
        bgImageSrc={bg}
      />

      <AppBinaryGrid
        sections={sectionsTools}
        imageSrc={Tabpanel3}
        imageAlt="About Section"
        className="mt-12"
        Header="Supported Tools"
        titleBlockType="flex-dotted"
      />

      <AppBinaryGrid
        sections={sectionsHow}
        imageSrc={Tabpanel4}
        imageAlt="About Section"
        className="mt-12 reverse"
        Header="How Businesses Benefit from Advanced Analytics"
        titleBlockType="flex-dotted"
        bgImageSrc={bg}
      />

      <AppBinaryGrid
        sections={sectionsWay}
        imageSrc={Tabpanel5}
        imageAlt="About Section"
        className="mt-12 "
        Header="Your Data, Your Way"
        titleBlockType="flex-dotted"
      />

      <AppBinaryGrid
        sections={sectionsWhy}
        imageSrc={Tabpanel6}
        imageAlt="About Section"
        className="mt-12 reverse"
        Header="Why Analytics Matter for Your Customers"
        titleBlockType="flex-dotted"
        bgImageSrc={bg}
      />
    </>
  );
}

export default AdvancedAnalyticsInsightsSections;
