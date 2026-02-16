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
