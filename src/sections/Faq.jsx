import React, { useState } from "react";

const faqs = [
  {
    question: "How do I initiate a money transfer?",
    answer:
      "Your privacy is critically important to us. We have a few fundamental principles: We are thoughtful about the personal information we ask you to provide and the personal information that we collect about you through the operation of our services",
  },
  {
    question: "What information do I need to send money?",
    answer:
      "You typically need recipient details, amount, and preferred transfer method. Additional verification may be required depending on the destination",
  },
  {
    question: "How long does it take for a money transfer to be completed?",
    answer:
      "Transfer times vary by country and payment method, but most transfers are completed within minutes to 24 hours",
  },
  {
    question: "Are there fees associated with money transfers?",
    answer:
      "Fees depend on the destination, amount, and transfer method. You’ll always see fees before confirming the transfer",
  },
  {
    question: "Can I cancel a money transfer?",
    answer:
      "You can cancel a transfer if it hasn’t been processed yet. Once completed, cancellations may not be possible",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFF9F6] py-24">
      <div className="max-w-[1232px] mx-auto px-4">

        {/* Outer Card */}
        <div className="border border-dashed border-[#FF5A1F] rounded-3xl bg-white p-10 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
            <div className="flex flex-col gap-10 max-w-[420px]">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0C0F2C] mb-4">
                  Some questions
                </h2>

                <p className="text-[#6B7280] leading-relaxed">
                  Our dedicated support team is here to assist you every step of
                  the way, with whatever answer or guidance you need.
                </p>
              </div>

              {/* Desktop Buttons */}
              <div className="hidden lg:flex gap-4">
                <button className="px-6 py-3 rounded-full border border-[#0C0F2C] text-[#0C0F2C] font-medium flex items-center gap-4 hover:bg-[#0C0F2C] hover:text-white transition">
                  Contact Us <span>→</span>
                </button>

                <button className="px-6 py-3 rounded-full bg-[#FF5A1F] text-white font-medium flex items-center gap-4 hover:opacity-90 transition">
                  Visit FAQ <span>→</span>
                </button>
              </div>
            </div>

            {/* RIGHT – FAQ LIST */}
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-[#E5E7EB] pb-5">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="font-medium text-[#0C0F2C]">
                      {faq.question}
                    </span>

                    <span className="text-2xl font-light text-[#0C0F2C]">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {activeIndex === index && (
                    <p className="mt-4 text-[#6B7280] leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Buttons */}
            <div className="flex lg:hidden justify-center gap-4 mt-10 col-span-full">
              <button className="px-5 py-3 rounded-full border border-[#0C0F2C] text-[#0C0F2C] font-medium flex items-center gap-3 hover:bg-[#0C0F2C] hover:text-white transition">
                Contact Us <span>→</span>
              </button>

              <button className="px-5 py-3 rounded-full bg-[#FF5A1F] text-white font-medium flex items-center gap-3 hover:opacity-90 transition">
                Visit FAQ <span>→</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
