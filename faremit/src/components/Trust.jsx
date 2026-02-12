import React from "react";
import miniLogo from "../assets/Trust-img/mini-logo.svg";
import heroImage from "../assets/Trust-img/trust.svg";

const TrustSection = () => {
  return (
    <section className="hidden md:flex bg-[#FFF9F6] py-24"> {/* desktop only */}
      <div className="max-w-[1232px] mx-auto px-4">
        <div className="bg-white shadow-2xl rounded-[32px] px-6 md:px-12 py-16 flex flex-col md:flex-row gap-14 items-center">

          {/* Left Content */}
          <div className="flex-1 max-w-lg">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#0C0F2C] mb-4">
              <span className="text-orange-500 block">
                Bridging Dreams,
              </span>
              Building Trust
            </h2>

            <p className="mb-8">
              Enjoy unlimited possibilities with the best exchange rates for
              sending money, managing business payments, and handling global
              finances.
            </p>

            {/* Bullet points */}
            <ul className="space-y-4 mb-10">
              {[
                "Low cost",
                "Competitive Pricing",
                "Transparent Fees",
                "Clear Exchange Rates",
              ].map((point, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <img src={miniLogo} alt="" className="w-5 h-5" />
                  <span className="text-[#374151] font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <button className="text-black font-semibold px-2 py-3 rounded-full hover:bg-orange-600 transition">
              Get Started Now →
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={heroImage}
              alt="Trust illustration"
              className="w-full max-w-[480px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
