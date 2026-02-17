import React, { useState } from "react";

import logo from "../assets/logo.svg";
import homeIcon from "../assets/dashboard/home.png";
import paymentIcon from "../assets/dashboard/Payment.png";
import recipientsIcon from "../assets/dashboard/Recipients.png";
import transferIcon from "../assets/dashboard/Transfers.png";
import settingsIcon from "../assets/dashboard/setting.png";
import bellIcon from "../assets/dashboard/bell.png";


// ✅ Flash icon for rate line
import flashIcon from "../assets/dashboard/flash.png";

export default function Dashboard() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ================= SIDEBAR ================= */}
      <div className="w-64 bg-white shadow-sm border-r-1   border-[#ECEAEE] flex flex-col justify-between">
        <div>
          {/* Sidebar Header with Logo */}
          <div className="px-6 py-6 flex items-center">
            <img src={logo} alt="Faremit Logo" className="h-20 w-40 object-contain" />
            <div className="ml-3">
             
            </div>
          </div>

          {/* Sidebar Items */}
          <div className="mt-6 space-y-6 px-6">
            <SidebarItem icon={homeIcon} label="Home" active />
            <SidebarItem icon={recipientsIcon} label="Recipients" />
            <SidebarItem icon={transferIcon} label="Transfers" />
            <SidebarItem icon={paymentIcon} label="Payment" />
            <SidebarItem icon={settingsIcon} label="Settings" />
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 flex flex-col">

        {/* ===== TOP HEADER ===== */}
        <div className="flex justify-end items-center px-10 py-4 bg-white border-b border-[#ECEAEE] relative">
          <div className="mr-6 cursor-pointer">
    <img src={bellIcon} alt="Notifications" className="w-9 h-9" />
  </div>
          <div
            className="flex items-center gap-2 cursor-pointer relative"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
              AB
            </div>

            <span className="text-sm">▼</span>

            {showDropdown && (
              <div className="absolute right-0 top-12 w-40 bg-white shadow-lg rounded-lg py-2">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                  Profile
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm">
                  Settings
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ===== RATES LINE ===== */}
        <div className="bg-white px-10 py-4 border-b border-1px border-[#ECEAEE] text-sm text-gray-700 flex gap-8 items-center">
          <Rate text="1 GBP = 1,468.29 NGN" />
          <Rate text="1 USD = 1,146.72 NGN" />
          <Rate text="1 EUR = 1,236.29 NGN" />
          <Rate text="1 CAD = 850.29 NGN" />
          <Rate text="1 AUD = 750.23 NGN" />
        </div>

        {/* ===== CONTENT AREA ===== */}
        <div className="flex gap-8 p-10 bg-[#FAFAFB]">

          {/* LEFT BOX */}
          <div className="bg-white rounded-xl shadow-md p-6 w-[450px]">

            <div className="bg-[#2F2A6B] text-white rounded-lg p-4 text-center font-semibold">
              <p>Exchange Rate</p>
              <p className="mt-1">1GBP = 1450.00 NGN</p>
            </div>

            <div className="mt-6">
              <label className="text-sm text-gray-600">You send</label>
              <input
                type="number"
                defaultValue={0}
                className="w-full border rounded-md px-3 py-2 mt-1"
              />
            </div>

            <div className="mt-4">
              <label className="text-sm text-gray-600">Payment Method</label>
              <select className="w-full border rounded-md px-3 py-2 mt-1">
                <option>Bank Transfer</option>
              </select>
            </div>

            <div className="flex justify-between mt-4 text-sm text-gray-600">
              <p>Fee: 2.99 GBP</p>
              <p>Total Payable: 2.99 GBP</p>
            </div>

            <div className="mt-4">
              <label className="text-sm text-gray-600">Recipient gets</label>
              <input
                type="number"
                defaultValue={0}
                className="w-full border rounded-md px-3 py-2 mt-1"
              />
            </div>
          </div>

          {/* RIGHT BOX */}
          <div className="bg-white rounded-xl shadow-md p-6 w-[450px]">

            <h2 className="font-semibold mb-3">Select a NGN recipient</h2>

            <input
              type="text"
              placeholder="Search recipient"
              className="w-full border rounded-md px-3 py-2"
            />

            <div className="bg-[#F2F1FA] rounded-lg p-6 mt-4 text-center">
              <p className="text-sm text-gray-600">
                You haven’t created any Naira (NGN) recipient
              </p>
              <button className="mt-4 bg-[#554ADF] text-white px-6 py-2 rounded-md">
                Add
              </button>
            </div>

            <button className="w-full mt-6 bg-gray-200 text-gray-700 py-3 rounded-md">
              Send Money
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

/* Sidebar Item */
function SidebarItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 cursor-pointer ${
        active ? "text-[#F15A29] font-semibold" : "text-gray-600"
      }`}
    >
      <img src={icon} alt={label} className="w-5 h-5" />
      <span>{label}</span>
    </div>
  );
}

/* Rate Component (NOW USING YOUR FLASH IMAGE) */
function Rate({ text }) {
  return (
    <div className="flex items-center gap-2">
      <img src={flashIcon} alt="flash" className="w-4 h-4" />
      <span>{text}</span>
    </div>
  );
}
