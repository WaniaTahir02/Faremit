import React from "react";
import pattern from "../assets/pattern.svg";
import Button from "./Button";

const Experience = () => {
  return (
    <section className="py-24 bg-[#FFF9F6]">
      {/* EXACT SAME WIDTH AS FAQ */}
      <div className="max-w-[1232px] mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden px-6 py-20 text-center bg-[#FF5A1F]">

          {/* Background Pattern */}
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-20"
            style={{
              backgroundImage: `url(${pattern})`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-white text-2xl md:text-3xl font-semibold leading-relaxed">
              Experience swift, secure, and cost-effective
              international transactions.
            </h2>

            <div className="mt-8 flex justify-center">
              <Button
                text="Sign Up Now"
                className="bg-white text-[#FF5A1F] hover:bg-gray-100 px-8 py-3 font-semibold"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
