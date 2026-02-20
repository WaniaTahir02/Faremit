import React, { useState } from "react";

import logo from "../assets/logo.svg";
import homeIcon from "../assets/dashboard/home.png";
import paymentIcon from "../assets/dashboard/Payment.png";
import recipientsIcon from "../assets/dashboard/Recipients.png";
import transferIcon from "../assets/dashboard/Transfers.png";
import settingsIcon from "../assets/dashboard/setting.png";
import bellIcon from "../assets/dashboard/bell.png";
import menuIcon from "../assets/dashboard/menu.png";

import Home from "../components/dashboard/Home";
import Recipients from "../components/dashboard/Recipients";
import Transfers from "../components/dashboard/Transfers";
import Payment from "../components/dashboard/Payment";
import Settings from "../components/dashboard/Settings";

export default function Dashboard() {
  const [activePage, setActivePage] = useState("home");

  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [showDesktopDropdown, setShowDesktopDropdown] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "recipients":
        return <Recipients />;
      case "transfers":
        return <Transfers />;
      case "payment":
        return <Payment />;
      case "settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };

  const navItems = [
    { label: "Home", icon: homeIcon, key: "home" },
    { label: "Recipients", icon: recipientsIcon, key: "recipients" },
    { label: "Transfers", icon: transferIcon, key: "transfers" },
    { label: "Payment", icon: paymentIcon, key: "payment" },
    { label: "Settings", icon: settingsIcon, key: "settings" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex flex-col w-64 bg-white shadow-sm border-r border-[#ECEAEE] p-6 fixed h-full">
        <div>
          <div className="mb-10">
            <img src={logo} alt="Faremit Logo" className="h-20 w-40 object-contain" />
          </div>

          <div className="space-y-6">
            {navItems.map((item) => (
              <SidebarItem
                key={item.key}
                icon={item.icon}
                label={item.label}
                active={activePage === item.key}
                onClick={() => setActivePage(item.key)}
              />
            ))}
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col md:ml-64 relative">
        {/* HEADER */}
        <header className="flex justify-between items-center bg-white px-4 py-4 border-b border-[#ECEAEE] md:px-10">
          {/* Mobile logo */}
          <img src={logo} alt="Faremit Logo" className="h-12 w-auto md:hidden" />

          {/* Mobile Menu Icon */}
          <div className="relative md:hidden">
            <img
              src={menuIcon}
              alt="Menu"
              className="w-10 h-10 cursor-pointer"
              onClick={() => setShowMobileDropdown(!showMobileDropdown)}
            />

            {/* MOBILE DROPDOWN */}
            {showMobileDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-50">
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
        </header>

        {/* DESKTOP TOP RIGHT (Bell + AB with dropdown) */}
        <div className="hidden md:flex justify-end items-center bg-white px-6 py-3 border-b border-gray-200">
          <img
            src={bellIcon}
            alt="Notifications"
            className="w-9 h-9 cursor-pointer mr-4"
          />

          <div className="relative">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShowDesktopDropdown(!showDesktopDropdown)}
            >
              <div className="w-9 h-9 rounded-full bg-[#EEEDFC] flex items-center justify-center font-semibold">
                AB
              </div>
              <span className="text-sm">▼</span>
            </div>

            {/* DESKTOP DROPDOWN */}
            {showDesktopDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-50">
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

        {/* PAGE CONTENT */}
        <main className="flex-1 w-full pb-16 md:pb-0">
          {renderPage()}
        </main>

        {/* MOBILE BOTTOM NAV (ALWAYS STICKY) */}
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around py-2 md:hidden z-40">
          {navItems.map((item) => (
            <div
              key={item.key}
              className={`flex flex-col items-center text-xs cursor-pointer ${
                activePage === item.key
                  ? "text-[#F15A29] font-semibold"
                  : "text-gray-600"
              }`}
              onClick={() => setActivePage(item.key)}
            >
              <img src={item.icon} alt={item.label} className="w-6 h-6 mb-1" />
              <span className="text-[10px]">{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 cursor-pointer ${
        active ? "text-[#F15A29] font-semibold" : "text-gray-600"
      }`}
    >
      <img src={icon} alt={label} className="w-5 h-5" />
      <span>{label}</span>
    </div>
  );
}
