import Tabpanel1 from "@assets/Img/s1.png";
import Tabpanel2 from "@assets/Img/s2.png";
import Tabpanel3 from "@assets/Img/s3.png";
import Tabpanel4 from "@assets/Img/s4.png";
import Tabpanel5 from "@assets/Img/s5.png";
import AppBinaryGrid from "../../../../components/shared/AppBinaryGrid/AppBinaryGrid";
import bg from "@assets/Img/vv.png";
const sections = [
  {
    title: "",
    content: "Enhance Efficiency with Seamless Connectivity"
  },
  {
    title: "",
    content: "Centralized management of data and operations."
  },
  {
    title: "",
    content: "Enhanced customer engagement and satisfaction."
  },
  {
    title: "",
    content: "Reduced manual workload with automation."
  },
];

const sectionsSupported = [
    {
      title: "CRM Systems",
      content: "Manage pipelines and track sales progress directly through Genie."
    },
    {
      title: "Inventory Management Systems",
      content: "Keep inventory updated and accessible in real-time."
    },
    {
      title: "Booking Platforms",
      content: "Automate reservations, reduce queues, and provide real-time updates."
    },
    {
      title: "Calendars",
      content: "Schedule events, reminders, and updates effortlessly."
    },
    {
      title: "Email Systems",
      content: "Automate customer communication with personalized emails."
    },
    {
      title: "Payment Gateways",
      content: "Enable the Genie to process payments securely and efficiently."
    }
  ];
  const sectionsControl = [
    {
      title: "Inventory Management Systems",
      content: "Real-time stock updates to keep inventory accurate and accessible."
    },
    {
      title: "CRM Systems",
      content: "Monitor progress in pipelines and track sales efficiently."
    },
    {
      title: "Calendars",
      content: "Automate scheduling, events, and reminders effortlessly."
    },
    {
      title: "Task Management",
      content: "Delegate responsibilities effectively with task management tools."
    },
    {
      title: "Email Systems",
      content: "Automate customer communication with personalized emails."
    }
  ];
  
  const sectionsBuild = [
    {
      title: "",
      content: "GenieLamp.ai offers a flexible API to integrate with bespoke systems and workflows."
    },
    {
      title: "",
      content: "Use the API to connect with your unique tools, creating a tailored solution for your business."
    },
  
  ];
  const sectionsSee = [
    {
      title: "Retail Store",
      content: "Improved inventory management and automated customer support."
    },
    {
      title: "Hotel Chain",
      content: "Streamlined booking processes and personalized guest experiences."
    },
    {
      title: "Tourism Agency",
      content: "Automated itinerary planning and real-time updates for travelers."
    }
];

  

function SeamlessIntegrationSections() {
  return (
    <>
    <AppBinaryGrid
      sections={sections}
      imageSrc={Tabpanel1}
      imageAlt="About Section"
      className=""
      Header="Connect the Real World with Virtual Magic"
      titleBlockType="flex-dotted"
    />

    <AppBinaryGrid
      sections={sectionsSupported}
      imageSrc={Tabpanel2}
      imageAlt="About Section"
      className="mt-12 reverse"
      Header="Supported Tools"
      titleBlockType="flex-dotted"
    bgImageSrc={bg}
    />


<AppBinaryGrid
      sections={sectionsControl}
      imageSrc={Tabpanel3}
      imageAlt="About Section"
      className="mt-12"
      Header="Control What Your Genie Can Access"
      titleBlockType="flex-dotted"
    />


<AppBinaryGrid
      sections={sectionsBuild}
      imageSrc={Tabpanel4}
      imageAlt="About Section"
      className="mt-12 reverse"
      Header="Build Custom Workflows with Our API"
      titleBlockType="flex-dotted"
      bgImageSrc={bg}
      BtnTitle="Request API Documentation"
    />


<AppBinaryGrid
      sections={sectionsSee}
      imageSrc={Tabpanel5}
      imageAlt="About Section"
      className="mt-12 "
      Header="See Integration Success Stories"
      titleBlockType="flex-dotted"
 
    
    />
    </>
  );
}

export default SeamlessIntegrationSections;