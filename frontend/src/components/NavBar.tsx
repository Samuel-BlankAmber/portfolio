import { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

interface NavLink {
  href: string;
  text: string;
}

interface MobileNavBarProps {
  navLinks: NavLink[];
  isOpen: boolean;
  toggleMobileNav: () => void;
}

interface NavBarProps {
  navLinks: NavLink[];
}

function MobileNavBar({ navLinks, isOpen, toggleMobileNav }: MobileNavBarProps) {
  return (
    <div className={`mobile-navbar fixed top-0 right-0 w-screen h-screen z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
      <div className="flex justify-end p-4">
        <button onClick={toggleMobileNav} className="text-2xl">
          <FaTimes />
        </button>
      </div>
      <ul className="flex flex-col items-center space-y-6 mt-10">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={toggleMobileNav}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NavBar({ navLinks }: NavBarProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  function toggleMobileNav() {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  return (
    <nav className="navbar fixed top-0 left-0 w-full p-4 flex justify-between items-center shadow-md z-50">
      <div className="flex items-center space-x-2">
        <a href="#" className="logo text-2xl font-bold">SB</a>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMobileNav} className="text-2xl">
          <FaBars />
        </button>
      </div>
      <ul className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:text-blue-500 transition-colors duration-300">{link.text}</a>
          </li>
        ))}
      </ul>
      <MobileNavBar navLinks={navLinks} isOpen={isMobileNavOpen} toggleMobileNav={toggleMobileNav} />
    </nav>
  );
}
