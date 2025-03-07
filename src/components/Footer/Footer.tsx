import React from "react";
import img1 from "@assets/Img/Section.png";
import ap from "@assets/Img/ap.png";
import AppButton from "../shared/AppButton/AppButton";
import { Link } from "react-router-dom";
import Facebook from "@assets/icons/fac.svg";
import Twitter from  "@assets/icons/x.svg";
import Instagram from "@assets/icons/ins.svg";
import Linkedin from "@assets/icons/lin.svg";
import Tiktok from "@assets/icons/tik.svg";
import Youtupe from "@assets/icons/you.svg"
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
const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon, ariaLabel, to }) => (
  <Link to={to} aria-label={ariaLabel} className="hover:text-[#E7B144] transition duration-300">
    <img src={Icon} className="w-5 h-5" />
  </Link>
);

function Footer() {
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
    "AI-power customization",
    "AR & QR Code Integration",
    "Seamless integration",
    "Real-Time AI Interaction",
    "Advanced Analytics & Insights",
  ];

  const partnersLinks = ["V Booking", "Vindo.ai", "PiPhi World", "VVerse Collaboration"];

  const companyLinks = ["About us", "FAQ", "Privacy policy", "Terms & Conditions"];

  return (
    <>
      <div className="relative">
        <div
          className="absolute inset-0 w-full h-full rounded-xl bg-cover bg-center"
          style={{ backgroundImage: `url(${img1})` }}
        />

        <div className="relative flex flex-col items-center justify-center text-center gap-5 pt-24">
          <h1 className="text-[44px] font-bold font-segoe-ui">Let’s Innovate Together!</h1>
          <p className="w-[85%] lg:w-[50%] xl:w-[40%]">
            Join the innovators transforming industries with AI-powered solutions. Collaborate with
            GenieLamp.ai to bring your expertise into our ecosystem and shape the future of
            interactive, customer-focused technology.
          </p>
          <AppButton Title="Schedule a Demo" className="py-3 my-6" />
          <img src={ap} alt="Let’s Innovate Together!" />
        </div>
      </div>

      <footer className="bg-accent-100 flex flex-col justify-center items-center text-[#ffff] py-12">
        <div className="rounded-xl p-12 bg-accent-1000 mx-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <img src={logo} alt="GENIELAMP Logo" width={80} height={80} className="mr-2" />
              </div>
              <p className="mb-4 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="mb-6 text-sm">
                Lorem ipsum dolor sit amet consectetur. Venenatis sed suspendisse sit dui vel amet
                quam mus laoreet. Cursus id vulputate dolor nisi vel tortor.
              </p>
              <div className="w-3/4 h-px bg-[#e9c46a]/30 mb-4"></div>
              <p className="text-sm">3597 Earlene Circles, Lake Alf 07515</p>
            </div>

            {/* Use Cases */}
            <Section title="Use Cases">
              {useCasesLinks.map((link, index) => (
                <li key={index}>
                  <Link to="#" className="hover:text-[#E7B144] transition duration-300">{link}</Link>
                </li>
              ))}
            </Section>

            {/* Features */}
            <Section title="Features">
              {featuresLinks.map((link, index) => (
                <li key={index}>
                  <Link to="#" className="hover:text-[#E7B144] transition duration-300">{link}</Link>
                </li>
              ))}
            </Section>

            {/* Partners */}
            <Section title="Partners">
              {partnersLinks.map((link, index) => (
                <li key={index}>
                  <Link to="#">{link}</Link>
                </li>
              ))}
            </Section>

            {/* Company */}
            <Section title="Company">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link to="#" className=" hover:text-[#E7B144] transition duration-300 ">{link}</Link>
                </li>
              ))}
            </Section>
          </div>

          {/* Divider */}
          <div className="w-full h-[0.7px] font-light bg-[#F9FAFB] my-4"></div>

          {/* Copyright and Social Media */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">© 2025 GENIELAMP - All rights reserved</p>
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