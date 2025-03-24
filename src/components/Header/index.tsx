import { useState, useRef } from "react"
import { NavLink } from "react-router-dom"
import logo from "@assets/logo.svg"
import close from "@assets/icons/close.svg"
import AppButton from "../shared/AppButton/AppButton"
import { FaBars } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"

type NavLinkItem = {
  to?: any
  text: string
  dropdown?: { to: string; text: string }[]
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  // Function to normalize dropdown names
  const normalizeDropdownName = (name: string) => {
    return name.trim().toLowerCase()
  }


  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  const toggleDropdown = (dropdownName: string) => {
    const normalizedName = normalizeDropdownName(dropdownName)
    console.log("Toggling dropdown:", normalizedName, "Current open:", openDropdown)
    setOpenDropdown((prev) => (prev === normalizedName ? null : normalizedName))
  }

  const navLinks: NavLinkItem[] = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About Us" },
    {
      text: "Features",
      dropdown: [
        { to: "/feature", text: "AI-power customization" },
        { to: "/feature1", text: "AR & QR Code Integration" },
        { to: "/feature2", text: "Seamless integration" },
        { to: "/feature3", text: "Real-Time AI Interaction" },
        { to: "/feature4", text: "Advanced Analytics & Insights" },
      ],
    },
  
    {
      text: "Our Partners",
      dropdown: [
        { to: "/VBooking", text: "V Booking" },
        { to: "/VindoAi", text: "Vindo.ai" },
        { to: "/E-commerce", text: "E-commerce " },
        { to: "/PiPhiWorld", text: "PiPhi World " },
        { to: "/VVerse", text: "VVerse " },
      ],
    },

    { to: "/useCase", text: "Use Cases" },
    { to: "/Contactus", text: "Contact Us" },
  ]

  const renderDropdown = (dropdownItems: { to: string; text: string }[], dropdownName: string) => {
    const normalizedName = normalizeDropdownName(dropdownName)
    const isOpen = openDropdown === normalizedName

    return (
      <div className="relative " ref={isOpen ? dropdownRef : null}>
        <button
          onClick={(e) => {
            e.stopPropagation()
            toggleDropdown(dropdownName)
          }}
          className={`text-gray-700 hover:text-[#E7B144] transition-transform duration-300 ${
            isOpen ? "text-[#E7B144]" : ""
          }`}
        >
          {dropdownName}
          <IoIosArrowDown
            className={`w-3 h-3 inline-block ms-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isOpen && (
          <div className="absolute mt-2 w-[250px] border border-[#E7E7E6] rounded-2xl bg-white shadow-lg py-2 z-50">
            {dropdownItems.map((item, index) => (
              <div key={index} className="border-b-[1px] mx-2 border-[#E7E7E6]">
                <NavLink
                  to={item.to}
                  className="block text-sm px-4 py-2 text-primary hover:text-[#E7B144] transition duration-300"
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsMenuOpen(false)
                    setOpenDropdown(null)
                  }}
                >
                  {item.text}
                </NavLink>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
   <>

   <section className=" ">
      <nav className="flex items-center justify-between p-4 mx-4 lg:mx-24 bg-white relative">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo || "/placeholder.svg"} alt="Logo" className="h-10" />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex flex-grow justify-center items-center ps-64 space-x-6">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <div key={index}>{renderDropdown(link.dropdown, link.text)}</div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#E7B144] transition duration-300"
                    : "text-gray-700 hover:text-[#E7B144] transition duration-300"
                }
              >
                {link.text}
              </NavLink>
            ),
          )}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden xl:flex items-center gap-3">
      
        
          <AppButton Title="Sign In" buttonType="outline" />
          <AppButton Title="Start Your Free Trial" />
          <span  className=" border-1  p-2 border-[#E7B144] rounded-full  text-[#E7B144]  cursor-pointer hover:text-gray-700 hover:border-gray-700 transition 300ms">
          
          AR
        </span>
       
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="xl:hidden flex items-center" onClick={toggleMenu}>
          <FaBars className="hover:text-[#E7B144] transition duration-300" />
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && <div className="fixed inset-0 lg:hidden bg-[#00000033] z-40" onClick={toggleMenu} />}

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 lg:hidden left-0 w-3/5 h-full bg-white shadow-xl transition-all duration-300 z-50 flex flex-col`}
        >
          <div className="flex justify-end items-center p-4 border-b border-gray-100">
            <img src={close || "/placeholder.svg"} alt="Close" onClick={toggleMenu} />
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 overflow-y-auto p-4">
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <div
                  key={index}
                  className="py-3 border-b border-gray-100"
                  ref={openDropdown === normalizeDropdownName(link.text) ? dropdownRef : null}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleDropdown(link.text)
                    }}
                    className={`flex justify-between items-center w-full font-medium ${
                      openDropdown === normalizeDropdownName(link.text) ? "text-[#E7B144]" : "text-gray-700"
                    }`}
                  >
                    <span>{link.text}</span>
                    <IoIosArrowDown
                      className={`transition-transform duration-300 ${
                        openDropdown === normalizeDropdownName(link.text) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === normalizeDropdownName(link.text) && (
                    <div className="mt-2 ml-4 space-y-2">
                      {link.dropdown.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          className="block py-2 text-gray-600 hover:text-[#E7B144] transition duration-300"
                          onClick={(e) => {
                            e.stopPropagation()
                            setIsMenuOpen(false)
                            setOpenDropdown(null)
                          }}
                        >
                          {item.text}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={index}
                  to={link.to}
                  className={({ isActive }) =>
                    `block py-3 border-b border-gray-100 font-medium ${
                      isActive ? "text-[#E7B144]" : "text-gray-700"
                    } hover:text-[#E7B144] transition duration-300`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </NavLink>
              ),
            )}
          </div>

          {/* Mobile Buttons */}
          <div className="p-4 border-t border-gray-100 mt-auto">
            <div className="flex flex-col space-y-3">
              <AppButton Title="Start Your Free Trial" />
              <AppButton Title="Sign In" buttonType="outline" />
           

            </div>
          </div>
        </div>
      </nav>
    </section>
   </>
  )
}

export default Header

