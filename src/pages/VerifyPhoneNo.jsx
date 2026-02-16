import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import phoneIcon from "../assets/signup/uk.png"; // phone/country icon
import countryIcon from "../assets/signup/uk.png"; // country icon
import leftImg from "../assets/signup/signup-img-2.png"; // left image
import rightImg from "../assets/signup/signup-img-1.png"; // right decorative image
import logo from "../assets/logo.svg";
import vIcon from "../assets/signup/v-icon.png"; // verification icon

export default function VerifyPhoneNo() {
  const navigate = useNavigate();

  const [country, setCountry] = useState("United Kingdom");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Show toast on page load
  useEffect(() => {
    setShowToast(true);
    const timer = setTimeout(() => setShowToast(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!country || !phone || !city || !address || !postalCode) return;

    // TODO: save info via API

    // Navigate to dashboard or next step
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen relative bg-white md:grid md:grid-cols-2">
      {/* MOBILE LOGO */}
      <div className="absolute top-6 left-6 md:hidden z-20">
        <img src={logo} alt="Faremit logo" className="h-12 w-auto" />
      </div>

      {/* LEFT IMAGE – desktop only */}
      <div className="hidden md:flex items-start justify-start px-3">
        <img src={leftImg} alt="Visual" className="max-w-lg object-contain" />
      </div>

      {/* FORM SECTION */}
      <div className="flex flex-col justify-center items-center md:items-start px-6 md:px-20 py-12 md:py-12 min-h-screen md:min-h-0 relative z-10">
        <div className="w-full max-w-sm mt-12 md:mt-0 text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#0C0F2C] mb-2">
            Finish setting up your account
          </h1>
          <p className="mb-6 text-sm md:text-base text-gray-600">
            Please provide your legally valid information
          </p>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Country */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Sending From*
              </label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-1 cursor-pointer">
                <img src={countryIcon} alt="country" className="w-5 h-5 mr-2" />
                <select
                  className="border-none outline-none w-full cursor-pointer"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Phone Number*
              </label>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mt-1">
                <div className="flex items-center pr-2 border-r border-gray-300">
                  <img src={phoneIcon} alt="phone" className="w-5 h-5 mr-2" />
                  <span className="text-gray-600">+44</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter your number"
                  className="pl-3 w-full focus:outline-none"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* City */}
            <div>
              <label className="text-sm font-medium text-gray-700">City*</label>
              <input
                type="text"
                placeholder="Enter city"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 mt-1 w-full"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            {/* Address */}
            <div>
              <label className="text-sm font-medium text-gray-700">Address*</label>
              <input
                type="text"
                placeholder="Enter address"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 mt-1 w-full"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            {/* Postal Code */}
            <div>
              <label className="text-sm font-medium text-gray-700">Postal Code*</label>
              <input
                type="text"
                placeholder="Enter postal code"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 mt-1 w-full"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
            </div>

            {/* Finish Button */}
            <button
              type="submit"
              className="mt-4 bg-[#554ADF] text-white py-2 rounded-md transition hover:bg-[#4433bb]"
            >
              Finish
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT DECORATIVE IMAGE */}
      <div className="absolute top-0 right-0 z-0">
        <img
          src={rightImg}
          alt="Decoration"
          className="object-contain w-55 sm:w-40 md:w-auto opacity-30 pointer-events-none"
        />
      </div>

      {/* TOAST */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-[#F7F6FD] shadow-md rounded-xl px-5 py-4 w-80 flex items-start gap-3 animate-slide-in">
          <img src={vIcon} alt="success icon" className="w-8 h-8" />
          <div>
            <h3 className="font-semibold text-[#0C0F2C] mb-1">Email Verified</h3>
            <p className="text-sm text-gray-600">
           You email has successfuly been verified.Now lets get your phone number.
           </p>
          </div>
        </div>
      )}

      {/* Slide-in Animation */}
      <style>{`
        @keyframes slide-in {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
