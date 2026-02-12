import React from "react";
import Card from "./Card";
import trans from "../assets/trans.png";

const testimonials = [
  {
    name: "Akwa Abasiekeme",
    description:
      "I've been using Faremit for a few months now, and I couldn't be happier! The app is super easy to use, and I can send money to my family abroad in just a few minutes.",
    bgColor: "bg-[#FDEDE7]",
    bgImg: trans,
    subtitle: "Freelancer",
  },
  {
    name: "Sarmad Khalid",
    description:
      "The transfer fees are really low compared to other services, and the exchange rates are great.",
    bgColor: "bg-[#EEF0FF]",
    bgImg: trans,
    subtitle: "International Student",
  },
  {
    name: "Mo Bamba",
    description:
      "I love being able to track my payments in real time and check my transfer history anytime. Plus, their customer support is always quick and helpful.",
    bgColor: "bg-[#F4F4F4]",
    bgImg: trans,
    subtitle: "CEO, Africavase",
  },
  {
    name: "Josh Allen",
    description:
      "I've been using Faremit for a few months now, and I couldn't be happier! The app is super easy to use, and I can send money to my family abroad in just a few minutes.",
    bgColor: "bg-[#EFFFF4]",
    bgImg: trans,
    subtitle: "Pro Bowler",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#FFF9F6] py-24">
      <div className="max-w-[1232px] mx-auto px-4">

        {/* Top pill */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1 text-sm rounded-full bg-[#FFE8DD] font-medium">
            Testimonials
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-[#0C0F2C] mb-3">
          Beyond Transactions,<br />Building Trust
        </h2>

        {/* Subtitle */}
        <p className="text-center  mb-14">
          Hear what our users have to say.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-">
          {testimonials.map((t, i) => (
            <Card
              key={i}
              title={t.name}
              subtitle={t.subtitle}
              description={t.description}
              bgColor={t.bgColor}
              bgImg={t.bgImg}
              className="
                relative overflow-hidden rounded-2xl
                [&_img]:opacity-20
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
