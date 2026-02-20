import React, { useState, useRef, useEffect } from "react";
import flashIcon from "../../assets/dashboard/flash.png";
import view from "../../assets/dashboard/view-icon.png";

import gbFlag from "../../assets/dashboard/GBP.png";
import usdFlag from "../../assets/dashboard/USD.png";
import canadaFlag from "../../assets/dashboard/CAD.png";
import ngFlag from "../../assets/hero-img/NGN flag.png";
import eurFlag from "../../assets/dashboard/EUR.png";
import ghcFlag from "../../assets/dashboard/GHC.png";
import kesFlag from "../../assets/dashboard/KES.png";

import AddRecipientModal from "../AddRecipientModal";

export default function Home() {
  const [showAddModal, setShowAddModal] = useState(false);

  const [openSend, setOpenSend] = useState(false);
  const [openReceive, setOpenReceive] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);

  const [sendCurrency, setSendCurrency] = useState("GBP");
  const [receiveCurrency, setReceiveCurrency] = useState("NGN");
  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");

  const sendDropdownRef = useRef(null); // REF for left dropdown

  const paymentMethods = ["Bank Transfer", "Card Payment"];

  const currencies = [
    { code: "GBP", name: "British Pound", flag: gbFlag },
    { code: "USD", name: "US Dollar", flag: usdFlag },
    { code: "NGN", name: "Nigerian Naira", flag: ngFlag },
    { code: "EUR", name: "Euro", flag: eurFlag },
    { code: "CAD", name: "Canadian Dollar", flag: canadaFlag },
    { code: "GHC", name: "Ghanaian Cedi", flag: ghcFlag },
    { code: "KES", name: "Kenyan Shilling", flag: kesFlag },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (sendDropdownRef.current && !sendDropdownRef.current.contains(event.target)) {
        setOpenSend(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
{/* ===== RATES BAR ===== */}
<div className="bg-white px-10 py-4 border-b border-[#ECEAEE] text-sm text-gray-700 flex items-center gap-8 hidden md:flex">
  <Rate text="1 GBP = 1,468.29 NGN" />
  <Rate text="1 USD = 1,146.72 NGN" />
  <Rate text="1 EUR = 1,236.29 NGN" />
  <Rate text="1 CAD = 850.29 NGN" />

  {/* View rates link with icon */}
  <a className="flex items-center gap-2 ml-auto text-[#554ADF] font-medium hover:underline">
    <img src={view} alt="view rates" className="w-4 h-4" />
    <span>View rates</span>
  </a>
</div>


     
      {/* ===== CONTENT ===== */}
      <div className="flex flex-col md:flex-row items-start gap-8 p-6 md:p-10 bg-[#FAFAFB]">

        {/* ================= LEFT BOX ================= */}
        <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-[450px] space-y-4">

          <div className="bg-[#2F2A6B] rounded-xl py-4 text-center text-white">
            <p className="text-xs uppercase tracking-wide">Exchange Rate</p>
            <p className="text-2xl font-semibold mt-1">
              1 {sendCurrency} = 1450.00 {receiveCurrency}
            </p>
          </div>

          {/* BOX 1 - You Send */}
          <div className="border border-gray-300 rounded-xl flex overflow-visible">
            <div className="flex-[3] px-4 py-3 flex flex-col justify-center">
              <p className="text-xs text-gray-500">You send</p>
              <p className="text-2xl font-semibold">200</p>
            </div>

            <div className="w-px bg-gray-300"></div>

            <div
              className="flex-1 px-4 py-3 relative flex justify-center items-center"
              ref={sendDropdownRef}
            >
              <button
                onClick={() => setOpenSend(!openSend)}
                className="flex items-center gap-2 text-sm font-medium w-full justify-center"
              >
                <img
                  src={currencies.find(c => c.code === sendCurrency)?.flag}
                  className="w-5 h-5"
                  alt={sendCurrency}
                />
                <span className="whitespace-nowrap">{sendCurrency}</span>
                <span
                  className={`text-xs transition-transform duration-200 ${
                    openSend ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {openSend && (
                <div className="absolute right-0 top-full mt-2 w-60 sm:w-64 max-h-60 overflow-y-auto bg-white border rounded-lg shadow-xl z-50">
                  {currencies.map(({ code, name, flag }) => (
                    <div
                      key={code}
                      onClick={() => {
                        setSendCurrency(code);
                        setOpenSend(false);
                      }}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[#F8F8FE] cursor-pointer transition-colors"
                    >
                      <img src={flag} className="w-5 h-5" alt={name} />
                      <div>
                        <p className="text-sm font-medium">{code}</p>
                        <p className="text-xs text-gray-500">{name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* BOX 2 - Payment Method */}
          <div className="border border-gray-300 rounded-xl px-4 py-3">
            <p className="text-xs text-gray-500 mb-1 font-bold">Payment method</p>

            <div className="relative">
              <button
                onClick={() => setOpenPayment(!openPayment)}
                className="w-full flex justify-between items-center text-lg font-medium"
              >
                <span>{paymentMethod}</span>
                <span className={`text-xs ${openPayment ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {openPayment && (
                <div className="absolute left-0 top-full mt-1 w-full bg-white border rounded-lg shadow-lg z-50">
                  {paymentMethods.map(method => (
                    <div
                      key={method}
                      onClick={() => {
                        setPaymentMethod(method);
                        setOpenPayment(false);
                      }}
                      className="px-3 py-2 hover:bg-[#F8F8FE] cursor-pointer text-sm"
                    >
                      {method}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* BOX 3 - Breakdown */}
          <div className="border border-gray-300 bg-[#F8F8FE] rounded-xl p-4 text-sm space-y-3">
            <div className="flex justify-between">
              <span>Fee</span>
              <span>2.99 {sendCurrency}</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span>Total payable</span>
              <span>202.99 {sendCurrency}</span>
            </div>
          </div>

          {/* BOX 4 - Recipient Gets */}
          <div className="border border-gray-300 rounded-xl flex overflow-hidden">
            <div className="flex-[3] px-4 py-3 flex flex-col justify-center">
              <p className="text-xs text-gray-500 font-bold">
                Recipient gets
              </p>
              <p className="text-2xl font-semibold">200,000</p>
            </div>

            <div className="w-px bg-gray-300"></div>

            <div className="flex-1 px-4 py-3 relative flex justify-center items-center">
              <button
                onClick={() => setOpenReceive(!openReceive)}
                className="flex items-center gap-2 text-sm font-medium"
              >
                <img
                  src={currencies.find(c => c.code === receiveCurrency)?.flag}
                  className="w-5 h-5"
                  alt={receiveCurrency}
                />
                <span>{receiveCurrency}</span>
                <span className={`text-xs ${openReceive ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              {openReceive && (
                <div className="absolute right-0 top-full mt-1 w-52 bg-white border rounded-lg shadow-lg z-50">
                  {currencies.map(({ code, name, flag }) => (
                    <div
                      key={code}
                      onClick={() => {
                        setReceiveCurrency(code);
                        setOpenReceive(false);
                      }}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-[#F8F8FE] cursor-pointer"
                    >
                      <img src={flag} className="w-5 h-5" alt={name} />
                      <span className="text-sm">
                        {code} - {name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ================= RIGHT BOX ================= */}
        <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-[450px]">
          <h2 className="font-semibold mb-3">
            Select a {receiveCurrency} recipient
          </h2>

          <input
            type="text"
            placeholder="Search recipient"
            className="w-full border rounded-md px-3 py-2"
          />

          <div className="bg-[#F2F1FA] rounded-lg p-6 mt-4 text-center">
            <p className="text-sm text-gray-600">
              You haven’t created any {receiveCurrency} recipient
            </p>

            <button
              onClick={() => setShowAddModal(true)}
              className="mt-4 bg-[#554ADF] text-white px-6 py-2 rounded-md"
            >
              Add
            </button>
          </div>

          <button className="w-full mt-6 bg-gray-200 text-gray-700 py-3 rounded-md">
            Send Money
          </button>
        </div>
      </div>

      <AddRecipientModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
    </>
  );
}

function Rate({ text }) {
  return (
    <div className="flex items-center gap-2">
      <img src={flashIcon} alt="flash" className="w-4 h-4" />
      <span>{text}</span>
    </div>
  );
}
