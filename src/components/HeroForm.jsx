import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import GBPflag from "../assets/hero-img/GBP flag.png";
import NGNflag from "../assets/hero-img/NGN flag.png";
import flash from "../assets/hero-img/flash.png";
import plus from "../assets/hero-img/plus.png";
import total from "../assets/hero-img/total.png";

const currencyFlags = {
  GBP: GBPflag,
  NGN: NGNflag,
};

const paymentMethods = ["Bank transfer", "Debit card", "Credit card"];

const HeroForm = () => {
  const [sendCurrency, setSendCurrency] = useState("GBP");
  const [receiveCurrency, setReceiveCurrency] = useState("NGN");
  const [paymentMethod, setPaymentMethod] = useState("Bank transfer");

  const [openSend, setOpenSend] = useState(false);
  const [openReceive, setOpenReceive] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);

  const sendRef = useRef(null);
  const receiveRef = useRef(null);
  const paymentRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sendRef.current && !sendRef.current.contains(e.target)) setOpenSend(false);
      if (receiveRef.current && !receiveRef.current.contains(e.target)) setOpenReceive(false);
      if (paymentRef.current && !paymentRef.current.contains(e.target)) setOpenPayment(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-7 space-y-4">

      {/* BOX 1 - You Send */}
      <div className="border border-gray-300 rounded-xl flex">
        {/* Left */}
        <div className="flex-3 px-4 py-3 flex flex-col justify-center">
          <p className="text-xs text-gray-500">You send</p>
          <p className="text-2xl font-semibold">200</p>
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-300"></div>

        {/* Right - Dropdown */}
        <div ref={sendRef} className="flex-1 px-4 py-3 relative flex justify-center items-center">
          <button
            onClick={() => setOpenSend(!openSend)}
            className="flex items-center gap-2 text-sm font-medium"
          >
            <img src={currencyFlags[sendCurrency]} className="w-5 h-5" />
            <span>{sendCurrency}</span>
            <ChevronDownIcon className={`w-4 h-4 transition-transform ${openSend ? "rotate-180" : ""}`} />
          </button>

          {openSend && (
            <div className="absolute right-0 top-full mt-1 w-32 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              {Object.keys(currencyFlags).map((cur) => (
                <div
                  key={cur}
                  onClick={() => {
                    setSendCurrency(cur);
                    setOpenSend(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-[#F8F8FE] cursor-pointer"
                >
                  <img src={currencyFlags[cur]} className="w-5 h-5" />
                  <span className="text-sm font-medium">{cur}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* BOX 2 - Payment Method */}
      <div className="border border-gray-300 rounded-xl px-4 py-3">
        <p className="text-xs text-gray-500 mb-1 font-bold">Payment method</p>
        <div ref={paymentRef} className="relative">
          <button
            onClick={() => setOpenPayment(!openPayment)}
            className="w-full flex justify-between items-center text-xl font-medium"
          >
            <span>{paymentMethod}</span>
            <ChevronDownIcon className={`w-4 h-4  transition-transform ${openPayment ? "rotate-180" : ""}`} />
          </button>
          {openPayment && (
            <div className="absolute left-0 top-full mt-1 w-full bg-white border rounded-lg shadow-lg font-semibold z-50">
              {paymentMethods.map((method) => (
                <div
                  key={method}
                  onClick={() => {
                    setPaymentMethod(method);
                    setOpenPayment(false);
                  }}
                  className="px-3 py-2  hover:bg-[#F8F8FE] cursor-pointer text-sm"
                >
                  {method}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* BOX 3 - Breakdown */}
      <div className="border border-gray-300 bg-[#F8F8FE] rounded-xl p-3 text-sm space-y-2">
        {/* Exchange rate */}
        <div className="grid grid-cols-[1fr_auto] items-center">
          <div className="flex items-center gap-2  text-[#2F4858] font-semibold pl-2">
            <img src={flash} alt="flash" className="w-4 h-4" />
            <span>Exchange rate</span>
          </div>
          <span className="font-medium">1144.56</span>
        </div>

        {/* Fee */}
        <div className="grid grid-cols-[1fr_auto] items-center">
          <div className="flex items-center gap-2 text-[#2F4858] font-semibold pt-1 pl-2">
            <img src={plus} alt="plus" className="w-4 h-4" />
            <span>Fee</span>
          </div>
          <span className="font-medium">2.99 {sendCurrency}</span>
        </div>

        {/* Total */}
        <div className="grid grid-cols-[1fr_auto] items-center pt-2">
          <div className="flex items-center gap-2 text-[#2F4858] font-semibold pl-2">
            <img src={total} alt="total" className="w-4 h-4" />
            <span>Total payable amount</span>
          </div>
          <span className="font-semibold">202.99 {sendCurrency}</span>
        </div>
      </div>

      {/* BOX 4 - Recipient Gets */}
      <div className="border border-gray-300 rounded-xl flex">
        {/* Left */}
        <div className="flex-3 px-4 py-3 flex flex-col justify-center">
          <p className="text-xs text-gray-500 font-bold">Recipient gets</p>
          <p className="text-2xl font-semibold">200,000</p>
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-300"></div>

        {/* Right - Dropdown */}
        <div ref={receiveRef} className="flex-1 px-4 py-3 relative flex justify-center items-center">
          <button
            onClick={() => setOpenReceive(!openReceive)}
            className="flex items-center gap-2 text-sm font-medium"
          >
            <img src={currencyFlags[receiveCurrency]} className="w-5 h-5" />
            <span>{receiveCurrency}</span>
            <ChevronDownIcon className={`w-4 h-4 transition-transform ${openReceive ? "rotate-180" : ""}`} />
          </button>
          {openReceive && (
            <div className="absolute right-0 top-full mt-1 w-32 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
              {Object.keys(currencyFlags).map((cur) => (
                <div
                  key={cur}
                  onClick={() => {
                    setReceiveCurrency(cur);
                    setOpenReceive(false);
                  }}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-[#F8F8FE] cursor-pointer"
                >
                  <img src={currencyFlags[cur]} className="w-5 h-5" />
                  <span className="text-sm font-medium">{cur}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* BUTTON */}
      <button className="w-full bg-[#55433C] text-white py-4 rounded-2xl font-medium text-lg hover:bg-orange-600 transition-colors">
        Send Money Now
      </button>
    </div>
  );
};

export default HeroForm;
