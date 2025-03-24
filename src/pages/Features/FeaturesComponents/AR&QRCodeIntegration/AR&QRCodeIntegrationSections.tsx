import AppBinaryGrid from "../../../../components/shared/AppBinaryGrid/AppBinaryGrid";
import Tabpanel1 from "@assets/Img/s1.png";
import Tabpanel2 from "@assets/Img/s2.png";
import Tabpanel3 from "@assets/Img/s3.png";
import Tabpanel4 from "@assets/Img/s4.png";
import Tabpanel5 from "@assets/Img/s5.png";
import Tabpanel6 from "@assets/Img/s6.png";
import imgbg from "@assets/Img/vv.png";

function ARQRCodeIntegrationSections() {
  const sections1 = [
    {
      title: "",
      content:
        "Customers scan a QR code to interact with your Genie instantly.",
    },
    {
      title: "",
      content:
        "AR overlays provide real-time guidance, product details, or directions.",
    },
    {
      title: "",
      content: "Perfect for retail, tourism, events, and more.",
    },
  ];

  const sections2 = [
    {
      title: "Interactive Product Display:",
      content:
        "Customers can view products in AR, rotating and exploring features virtually.",
    },
    {
      title: "Virtual Tours:",
      content:
        "Guide customers through your space, such as hotels or museums, with AR markers.",
    },
    {
      title: "Personalized Assistance:",
      content:
        "Show tailored suggestions or real-time updates based on customer interaction.",
    },
  ];
  const sections3 = [
    {
      title: "Instant Access:",
      content:
        "Scanning a QR code instantly launches the Genie for support or guidance.",
    },
    {
      title: "Contactless Interaction:",
      content:
        "Perfect for restaurants, hotels, and retail stores to reduce queues and enhance convenience.",
    },
    {
      title: "Customizable Codes:",
      content:
        "Design QR codes that match your brand and direct users to specific services.",
    },
  ];

  const sections5 = [
    {
      title: "Hospitality:",
      content:
        "QR codes in hotel lobbies connect guests to a virtual concierge.",
    },
    {
      title: "Retail:",
      content:
        "Customers scan codes on products for detailed information or promotions.",
    },
    {
      title: "Tourism:",
      content:
        "Visitors scan codes to access virtual guides, learn about landmarks, or navigate with AR.",
    },
    {
      title: "Restaurants:",
      content:
        "Diners use AR menus to view dishes in 3D and place orders through the Genie.",
    },
  ];
  const sections6 = [
    {
      title: "Custom AR Experiences:",
      content: "Tailor the AR interface to reflect your brand identity.",
    },
    {
      title: "Branded QR Codes:",
      content: "Generate custom codes directly in the GenieLamp.ai dashboard.",
    },
    {
      title: "Quick Integration:",
      content:
        "Deploy QR codes and AR features across your location effortlessly.",
    },
  ];
  const sections7 = [
    {
      title: "Instant Information:",
      content: "No need to ask or wait—everything is at their fingertips.",
    },
    {
      title: "Immersive Experience:",
      content: "AR brings products and spaces to life.",
    },
    {
      title: "Effortless Interaction:",
      content: "QR codes make accessing services fast and intuitive.",
    },
  ];
  return (
    <div>
      <AppBinaryGrid
        sections={sections1}
        imageSrc={Tabpanel1}
        imageAlt="About Section"
        className=""
        Header="Connect the Real World with Virtual Magic"
        titleBlockType="flex-dotted"
      />

      <AppBinaryGrid
        sections={sections2}
        imageSrc={Tabpanel2}
        imageAlt="About Section"
        className="mt-12 reverse"
        Header="Connect the Real World with Virtual Magic"
        titleBlockType="flex-dotted"
        bgImageSrc={imgbg}
      />
      <AppBinaryGrid
        sections={sections3}
        imageSrc={Tabpanel3}
        imageAlt="About Section"
        className="mt-12 "
        Header="Unlock the Power of QR Codes"
        titleBlockType="flex-dotted"
      />
      <AppBinaryGrid
        sections={sections5}
        imageSrc={Tabpanel4}
        imageAlt="About Section"
        className="mt-12 reverse"
        Header="Where AR & QR Codes Shine"
        titleBlockType="flex-dotted"
        bgImageSrc={imgbg}
      />

      <AppBinaryGrid
        sections={sections6}
        imageSrc={Tabpanel5}
        imageAlt="About Section"
        className="mt-12"
        Header="Get Started with AR & QR Codes in Minutes"
        titleBlockType="flex-dotted"
      />
      <AppBinaryGrid
        sections={sections7}
        imageSrc={Tabpanel6}
        imageAlt="About Section"
        className="mt-12 reverse"
        Header="Why Your Customers Will Love AR & QR Code Integration"
        titleBlockType="flex-dotted"
        bgImageSrc={imgbg}
      />
    </div>
  );
}

export default ARQRCodeIntegrationSections;
