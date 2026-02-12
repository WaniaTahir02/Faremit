import { useState } from "react";
import Button from "../components/Button";
import logo from "../assets/logo.svg";
import gridBg from "../assets/grid-bg.png";
import menuIcon from "../assets/menu.png";
import closeIcon from "../assets/close.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="top-0 left-0 w-full z-50"
      style={{
        backgroundImage: `url(${gridBg})`,
        backgroundColor: "#FFEEE8",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        
        {/* Logo */}
        <img
          src={logo}
          alt="Faremint Logo"
          className="w-[175px] h-auto"
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-[#0C0F2C]">
          <a className="hover:text-orange-500 cursor-pointer">Company</a>
          <a className="hover:text-orange-500 cursor-pointer">FAQ</a>
          <a className="hover:text-orange-500 cursor-pointer">Get App</a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            text="Login"
            className="px-6 py-2 border-2 border-[#807F94] rounded-full text-[#0C0F2C] bg-[#FFEEE8] hover:bg-[#FFD7C8]"
          />
          <Button
            text="Get Started"
            className="px-6 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
        >
          <img
            src={menuOpen ? closeIcon : menuIcon}
            alt="menu toggle"
            className="w-10 h-10"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 py-6 space-y-4"
          style={{
            backgroundImage: `url(${gridBg})`,
            backgroundColor: "#FFEEE8",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}
        >
          <a className="block font-medium hover:text-orange-500">Company</a>
          <a className="block font-medium hover:text-orange-500">FAQ</a>
          <a className="block font-medium hover:text-orange-500">Get App</a>

          <div className="space-y-3 pt-16">
            <Button
              text="Login"
              className="w-full px-8 py-2 border border-[#BEB9C3] rounded-full text-[#0C0F2C] bg-[#FFEEE8] hover:bg-gray-100"
            />
            <Button
              text="Get Started"
              className="w-full px-6 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
