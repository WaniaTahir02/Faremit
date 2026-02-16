import React from "react";
import Card from "../components/Card";

// Step images
import step1 from "../assets/how/step-1.png";
import step2 from "../assets/how/step-2.png";
import step3 from "../assets/how/step-3.png";

// Bottom images
import img1 from "../assets/how/how-1.png";
import img2 from "../assets/how/how-2.png";
import img3 from "../assets/how/how-3.png";

// Overlay images
import h1 from "../assets/how/h1.png";
import h2 from "../assets/how/h2.png";
import h3 from "../assets/how/h3.png";
import h4 from "../assets/how/h4.png";
import h5 from "../assets/how/h5.png";
import h6 from "../assets/how/h6.png";

const steps = [
  {
    stepImage: step1,
    title: "Create and verify your account",
    description:
      "Sign up with your details and verify your account for a secure transfer process.",
    bottomImage: img1,
    overlayImages: [h1, h2, h3, h4],
    bottomImageWrapperClass: "relative -mx-6 -mb-6",
  },
  {
    stepImage: step2,
    title: "Add a recipient and send money to them",
    description:
      "Choose the recipient, enter amount, and send safely.",
    bottomImage: img2,
    overlayImages: [h5, h6],
    bottomImageWrapperClass: "relative px-4 pb-4",
  },
  {
    stepImage: step3,
    title: "Keep track of your transfers on-the-go",
    description:
      "Monitor your transactions in real time with our mobile app.",
    bottomImage: img3,
    overlayImages: [],
    bottomImageWrapperClass: "relative flex justify-end items-end -mb-6 pr-2",
  },
];

const HowToSend = () => {
  return (
    <section className="bg-[#FFF9F6] py-24">
      <div className="max-w-[1232px] mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0C0F2C] mb-4">
            How to send money with <br /> Faremint
          </h2>
          <p>
            Securely send money with 3 easy steps via our web or mobile app.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              stepImage={step.stepImage}
              title={step.title}
              description={step.description}
              bottomImage={step.bottomImage}
              bottomImageWrapperClass={step.bottomImageWrapperClass}
              overlayImages={step.overlayImages}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToSend;
