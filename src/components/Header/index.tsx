import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import logo from "@assets/logo.svg";
import AppButton from "../shared/AppButton/AppButton";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Array of navigation links
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/abou", text: "About Us" },
    { to: "/Feature", text: "Features" },
    { to: "/useCase", text: "Use Cases" },
    { to: "/ourPartner", text: "Our Partners" },
  ];

  return (
    <section>
      <nav className="flex items-center justify-between p-4 mx-4 lg:mx-24 bg-white">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </NavLink>
        </div>

        {/* Nav Links (Hidden on Mobile, Visible on large Screens and Up) */}
        <div className="hidden xl:flex flex-grow justify-center items-center ps-36 space-x-6">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-[#E7B144] transition duration-300" // Active link style
                  : "text-gray-700 hover:text-[#E7B144] transition duration-300" // Inactive link style
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>

        {/* Schedule a Demo Button (Hidden on Mobile, Visible on large Screens and Up) */}
        <div className="hidden xl:flex items-center gap-3">
        <AppButton Title="Signup"  buttonType="outline" />
          <AppButton Title="Start Your Free Trial" />
          
        </div>

        {/* Hamburger Menu (Visible on Mobile, Hidden on large Screens and Up) */}
        <div className="xl:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Visible when isMenuOpen is true) */}
        {isMenuOpen && (
          <div className="xl:hidden absolute top-16 z-50 right-0 bg-white w-full">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 text-[#E7B144] transition duration-300" // Active link style
                    : "block px-4 py-2 text-gray-700 hover:text-[#E7B144] transition duration-300" // Inactive link style
                }
              >
                {link.text}
              </NavLink>
            ))}
            <AppButton Title="Start Your Free Trial" />
          </div>
        )}
      </nav>
    </section>
  );
}

export default Header;