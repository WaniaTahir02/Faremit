import React from "react";
import Image from "../assets/Trust-img/trust-img.png"; // mobile-specific image
import google from "../assets/footer-img/google.png";

const TrustSectionMobile = () => {
  return (
    <section className="bg-[#FFF9F6] py-24 block md:hidden">
      <div className="max-w-[1232px] mx-auto px-4">
        <div className="bg-white shadow-2xl rounded-[32px] px-6 py-16 flex flex-col gap-8 items-center">

          {/* Mobile Image */}
          <div className="w-full flex justify-center">
            <img
              src={Image}
              alt="Trust illustration"
              className="w-full max-w-[480px] object-contain"
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-extrabold text-[#0C0F2C] text-center mb-4">
            Send money on the go
          </h2>

          {/* Description */}
          <p className="text-[#4A5568] text-center mb-6">
            Download our app for free and send money online in minutes to over 130 countries. 
            With Faremint, you can easily track your payments and view your transfer history from anywhere, 
            ensuring peace of mind with every transaction. It’s fast, secure, and hassle-free.
          </p>

          {/* Google Play Button */}
          <a
            href="#"
            className="flex items-center gap-3 w-44 px-3 py-2 bg-black text-white border border-black rounded-4xl hover:bg-gray-800 justify-center"
          >
            <img src={google} alt="Google Play" className="w-6 h-6" />
            <div className="text-left">
              <span className="text-xs text-gray-200 block">Get it on</span>
              <span className="text-sm font-bold text-white block">Google Play</span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default TrustSectionMobile;
