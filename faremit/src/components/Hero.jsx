import Button from "./Button";
import HeroForm from "./HeroForm";
import line from "../assets/hero-img/line.svg";
import download from "../assets/hero-img/download.png";
import flag from "../assets/hero-img/flags.svg";

import premier from "../assets/hero-img/logo1.svg";
import mtn from "../assets/hero-img/logo2.svg";
import mpesa from "../assets/hero-img/logo3.svg";
import swish from "../assets/hero-img/logo4.svg";
import evc from "../assets/hero-img/logo5.svg";

const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-44 pb-0 overflow-hidden">
      <div className="max-w-[1232px] mx-auto px-4 flex flex-col items-center gap-16">

        {/* Hero Text */}
        <div className="text-center max-w-3xl">
          <h1 className="text-[40px] md:text-[64px] font-extrabold text-[#0C0F2C] leading-tight mb-6">
            Low Fees and the <br />
            Best Rates For{" "}
            <span className="relative inline-block ml-2">
              You
              <img
                src={line}
                alt=""
                className="absolute left-0 -bottom-2 w-full h-4 object-contain"
              />
            </span>
          </h1>

          <p className="text-[#4A5568] text-lg md:text-xl mb-10">
            Send money with ease across the world with our fast and secure
            platform.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">

            {/* Download Button */}
            <div className="w-full sm:w-auto flex justify-center">
             <Button
  icon={download}
  iconPosition="right"
  iconSize={{ w: 32, h: 32 }} // increase icon size
  text="Download app"
  className="bg-[#FFD8C1] text-orange-500 px-6 py-3 whitespace-nowrap"
/>
            </div>

            {/* Get Started Button */}
            <div className="w-full sm:w-auto flex justify-center">
              <Button
                text="Get Started Now →"
                className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-4 whitespace-nowrap"
              />
            </div>

          </div>
        </div>

        {/* Image + Form Card */}
        <div className="w-full bg-[#FEF2F0] border border-dashed border-orange-500 rounded-[32px] px-6 md:px-12 py-14 flex flex-col md:flex-row gap-14 items-center">

          {/* Left Image (hide on mobile) */}
          <div className="flex-1 justify-center hidden md:flex">
            <img
              src={flag}
              alt="illustration"
              className="w-full max-w-[640px] object-contain"
            />
          </div>

          {/* Right Form (always visible) */}
          <div className="flex-1 w-full max-w-md">
            <HeroForm />
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="mt-[-270px] bg-orange-500 pt-90 pb-16">
        <div className="max-w-[1232px] mx-auto px-4 flex flex-col items-center gap-10">

          <span className="bg-white/20 text-white text-sm px-5 py-2 rounded-full">
            Our Partners
          </span>

          <div className="flex flex-wrap justify-center items-center gap-16 opacity-90">
            <img src={premier} alt="Premier Bank" className="h-8 md:h-10" />
            <img src={mtn} alt="MTN" className="h-8 md:h-10" />
            <img src={mpesa} alt="Mpesa" className="h-8 md:h-10" />
            <img src={swish} alt="Swish" className="h-8 md:h-10" />
            <img src={evc} alt="EVC Plus" className="h-8 md:h-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
