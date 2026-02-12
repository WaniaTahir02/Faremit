import React from "react";
import Button from "../components/Button";
import apple from "../assets/footer-img/apple.png";
import google from "../assets/footer-img/google.png";
import logo from "../assets/logo.svg";
import icon from "../assets/footer-img/social-icon.png";

const Footer = () => {
  return (
    <footer className="bg-[#F7F6F8]">
      <div className="max-w-[1232px] mx-auto px-4 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* App Buttons */}
          <div className="flex flex-col gap-4">

            {/* App Store Button */}
            <Button
              icon={apple}
              iconPosition="left" // ← icon on the left
              iconSize={{ w: 28, h: 28 }} // optional: increase icon size
              className="w-44 border border-black bg-white flex-row items-center justify-start px-3 py-2"
              text={
                <div className="flex flex-col text-left ml-3">
                  <span className="text-[10px] md:text-xs text-gray-600">
                    Download on the
                  </span>
                  <span className="text-sm md:text-base font-bold text-gray-800">
                    App Store
                  </span>
                </div>
              }
            />

            {/* Google Play Button */}
            <Button
              icon={google}
              iconPosition="left" // ← icon on the left
              iconSize={{ w: 28, h: 28 }} // optional: increase icon size
              className="w-44 border border-black bg-black text-white flex-row items-center justify-start px-3 py-2 hover:bg-gray-800"
              text={
                <div className="flex flex-col text-left ml-3">
                  <span className="text-[10px] md:text-xs text-gray-200">
                    Get it on
                  </span>
                  <span className="text-sm md:text-base font-bold text-white">
                    Google Play
                  </span>
                </div>
              }
            />
          </div>

          {/* Other Footer Sections */}
          <div className="md:col-span-3 border-b border-gray-300 pb-8">
            <div className="grid grid-cols-3 gap-10">
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>About us</li>
                  <li>Careers</li>
                  <li>FAQ</li>
                  <li>Contact us</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>Terms & privacy</li>
                  <li>Patriot Act</li>
                  <li>Consent</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Get in touch</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>128 City Road, London, United Kingdom</li>
                  <li>+1 (234) 567-890</li>
                  <li>info@faremit.com</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex justify-end items-center gap-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Faremit" className="h-8" />
            <img src={icon} alt="Social icons" className="h-6 cursor-pointer" />
          </div>
          <p className="text-sm text-gray-500">© Faremit 2025</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
// import { useState } from "react";
// import Button from "../components/Button";
// import logo from "../assets/logo.svg";
// import gridBg from "../assets/grid-bg.png";
// import menuIcon from "../assets/menu.png";
// import closeIcon from "../assets/close.png";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header
//       className="top-0 left-0 w-full z-50"
//       style={{
//         backgroundImage: `url(${gridBg})`,
//         backgroundColor: "#FFEEE8",
//         backgroundRepeat: "repeat",
//         backgroundSize: "auto",
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        
//         {/* Logo */}
//         <img
//           src={logo}
//           alt="Faremint Logo"
//           className="w-[175px] h-auto"
//         />

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-8 font-medium text-[#0C0F2C]">
//           <a className="hover:text-orange-500 cursor-pointer">Company</a>
//           <a className="hover:text-orange-500 cursor-pointer">FAQ</a>
//           <a className="hover:text-orange-500 cursor-pointer">Get App</a>
//         </nav>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex items-center gap-4">
//           <Button
//             text="Login"
//             className="px-6 py-2 border-2 border-[#807F94] rounded-full text-[#0C0F2C] bg-[#FFEEE8] hover:bg-[#FFD7C8]"
//           />
//           <Button
//             text="Get Started"
//             className="px-6 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600"
//           />
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden p-2"
//         >
//           <img
//             src={menuOpen ? closeIcon : menuIcon}
//             alt="menu toggle"
//             className="w-10 h-10"
//           />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div
//           className="md:hidden px-4 py-6 space-y-4"
//           style={{
//             backgroundImage: `url(${gridBg})`,
//             backgroundColor: "#FFEEE8",
//             backgroundRepeat: "repeat",
//             backgroundSize: "auto",
//           }}
//         >
//           <a className="block font-medium hover:text-orange-500">Company</a>
//           <a className="block font-medium hover:text-orange-500">FAQ</a>
//           <a className="block font-medium hover:text-orange-500">Get App</a>

//           <div className="space-y-3 pt-16">
//             <Button
//               text="Login"
//               className="w-full px-8 py-2 border border-[#BEB9C3] rounded-full text-[#0C0F2C] bg-[#FFEEE8] hover:bg-gray-100"
//             />
//             <Button
//               text="Get Started"
//               className="w-full px-6 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600"
//             />
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
