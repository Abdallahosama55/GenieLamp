import React from "react";
import img1 from "@assets/Img/gene.png";
import ap from "@assets/Img/ap.png";
import AppButton from "../shared/AppButton/AppButton";
import { Link, useLocation } from "react-router-dom";
import Facebook from "@assets/icons/fac.svg";
import Twitter from "@assets/icons/x.svg";
import Instagram from "@assets/icons/ins.svg";
import Linkedin from "@assets/icons/lin.svg";
import Tiktok from "@assets/icons/tik.svg";
import Youtupe from "@assets/icons/you.svg";
import logo from "@assets/logo.svg";

// Define the type for the Section component props
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

// Reusable Section Component
const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-medium text-accent mb-4">{title}</h3>
    <ul className="space-y-4 text-sm">{children}</ul>
  </div>
);

// Define the type for the SocialIcon component props
interface SocialIconProps {
  icon: any; // Use the Icon type from lucide-react
  ariaLabel: string;
  to: string;
}

// Reusable Social Media Icon Component
const SocialIcon: React.FC<SocialIconProps> = ({
  icon: Icon,
  ariaLabel,
  to,
}) => (
  <Link
    to={to}
    aria-label={ariaLabel}
    className="hover:text-[#E7B144] transition duration-300"
  >
    <img src={Icon} className="w-5 h-5" />
  </Link>
);

// Define the type for the dynamic content
interface DynamicContent {
  title: string;
  description: string;
  buttonText: string;
  image?: string; // Optional image
}

// Data for different paths
const pathContentMap: Record<string, DynamicContent> = {
  "/": {
    title: "Let’s Innovate Together!",
    description:
      "Join the innovators transforming industries with AI-powered solutions. Collaborate with GenieLamp.ai to bring your expertise into our ecosystem and shape the future of interactive, customer-focused technology.",
    buttonText: "Schedule a Demo",
    image: ap,
  },
  "/home": {
    title: "Let’s Innovate Together!",
    description:
      "Join the innovators transforming industries with AI-powered solutions. Collaborate with GenieLamp.ai to bring your expertise into our ecosystem and shape the future of interactive, customer-focused technology.",
    buttonText: "Schedule a Demo",
    image: ap,
  },
  "/about": {
    title: "Get to Know Us",
    description:
      "Discover the future of AI-powered interaction with GenieLamp.ai. Whether you’re in retail, tourism, hospitality, or beyond, we’re here to help you create unforgettable experiences.",
    buttonText: "Schedule a Demo",
  },
  "/Feature": {
    title: "Discover the Power of Advanced Analytics",
    description:
      "Discover the future of AI-powered interaction with GenieLamp.ai. Whether you’re in retail, tourism, hospitality, or beyond, we’re here to help you create unforgettable experiences.",
    buttonText: "Schedule a Demo",
  },

  "/Feature1": {
    title: "Bring AR & QR Integration to Your Business Today!",
    description:
      "Join the innovators transforming industries with AI-powered solutions. Collaborate with GenieLamp.ai to bring your expertise into our ecosystem and shape the future of interactive, customer-focused technology.",
    buttonText: "Schedule a Demo",
  },

  "/Feature2": {
    title: "Ready to Transform Your Operations?",
    description:
      "Explore how our AI can elevate your business by connecting seamlessly with the tools you already use.",
    buttonText: "Schedule a Demo",
  },

  "/Feature3": {
    title: "Interact with AI Like Never Before",
    description:
      "Explore how our AI can elevate your business by connecting seamlessly with the tools you already use.",
    buttonText: "Schedule a Demo",
  },

  "/Feature4": {
    title: "Discover the Power of Advanced Analytics",
    description:
      "Discover the future of AI-powered interaction with GenieLamp.ai. Whether you’re in retail, tourism, hospitality, or beyond, we’re here to help you create unforgettable experiences.",
    buttonText: "Schedule a Demo",
  },
};

function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;
  const content = pathContentMap[currentPath] || pathContentMap["/"]; // Fallback to home content if path not found

  const socialMediaLinks: SocialIconProps[] = [
    { icon: Facebook, ariaLabel: "Facebook", to: "#" },
    { icon: Twitter, ariaLabel: "Twitter", to: "#" },
    { icon: Instagram, ariaLabel: "Instagram", to: "#" },
    { icon: Linkedin, ariaLabel: "LinkedIn", to: "#" },
    { icon: Tiktok, ariaLabel: "Tiktok", to: "#" },
    { icon: Youtupe, ariaLabel: "Youtupe", to: "#" },
  ];

  const useCasesLinks = [
    "Virtual Concierge for Hospitality",
    "Smart Retail Assistant",
    "Augmented Reality Tourist Guide",
    "Restaurant Virtual Waiter",
    "Customer Support for Retail & Online Stores",
    "Interactive Event Guide",
    "Education Support Assistant",
    "Healthcare Assistant",
    "Real Estate Virtual Agent",
    "Task Automation for Businesses",
  ];

  const featuresLinks = [
    { name: "AI-power customization", path: "feature" },
    { name: "AR & QR Code Integration", path: "feature1" },
    { name: "Seamless integration", path: "feature2" },
    { name: "Real-Time AI Interaction", path: "feature3" },
    { name: "advanced-analytics-insights", path: "feature4" },
  ];
  

  const partnersLinks = [
    { name: "V Booking", path: "/VBooking" },
    { name: "Vindo.ai", path: "/Vindoai" },
    { name: "PiPhi World", path: "/PiPhiWorldd" },
    { name: "VVerse Collaboration", path: "/VVerse" },
  ];
  
  const companyLinks = [
    { name: "About us", path: "/about" },
    { name:  "FAQ", path: "/FAQ" },
    { name: "Privacy policy", path: "/Privacypolicy" },
    { name: "Terms & Conditions", path: "/TermsConditions" },
  ];


  return (
    <>
    <div className="relative">
      <div
        className="absolute inset-0 w-full h-full rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      />
  
      <div className="relative flex flex-col items-center justify-center text-center gap-5 pt-24">
        <h1 className="text-[44px] font-bold font-segoe-ui">
          {content.title}
        </h1>
        <p className="w-[85%] lg:w-[50%] xl:w-[40%]">{content.description}</p>
        <AppButton Title={content.buttonText} className="py-3 my-6" />
        {content.image && <img src={content.image} alt={content.title} />}
      </div>
    </div>
  
    <footer className="bg-accent-100 flex flex-col justify-center items-center text-[#ffff] py-12">
      <div className="rounded-xl p-12 bg-accent-1000 lg:mx-24 mx-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="GENIELAMP Logo"
                width={80}
                height={80}
                className="mr-2"
              />
            </div>
            <p className="mb-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="mb-6 text-sm">
              Lorem ipsum dolor sit amet consectetur. Venenatis sed
              suspendisse sit dui vel amet quam mus laoreet. Cursus id
              vulputate dolor nisi vel tortor.
            </p>
            <div className="w-3/4 h-px bg-[#e9c46a]/30 mb-4"></div>
            <p className="text-sm">3597 Earlene Circles, Lake Alf 07515</p>
          </div>
  
          {/* Use Cases */}
          <Section title="Use Cases">
            {useCasesLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to="/useCase"
                  className="hover:text-[#E7B144] transition duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {link}
                </Link>
              </li>
            ))}
          </Section>
  
          {/* Features */}
          <Section title="Features">
            {featuresLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-[#E7B144] transition duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </Section>
  
          {/* Partners */}
          <Section title="Partners">
            {partnersLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </Section>
  
          {/* Company */}
          <Section title="Company">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-[#E7B144] transition duration-300"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </Section>
        </div>
  
        {/* Divider */}
        <div className="w-full h-[0.7px] font-light bg-[#F9FAFB] my-4"></div>
  
        {/* Copyright and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © 2025 GENIELAMP - All rights reserved
          </p>
          <div className="flex space-x-6">
            {socialMediaLinks.map((link, index) => (
              <SocialIcon key={index} {...link} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  </>
  );
}

export default Footer;
