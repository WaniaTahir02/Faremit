import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/signup/alert-icon1.png";

export default function SignupForm() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation example
    if (!fullName || !email || !password) return;

    // TODO: Add API call to create user here

    // Navigate to verification email page
    navigate("/verify-email");
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      {/* EMAIL */}
      <label className="text-sm font-medium text-gray-700 mt-3">
        Email address
      </label>
      <input
        type="email"
        placeholder="Enter email"
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      {/* FULL NAME */}
      <label className="text-sm font-medium text-gray-700 mt-3">
        Full name
      </label>
      <input
        type="text"
        placeholder="Enter your full name"
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />

      {/* INLINE ALERT MESSAGE */}
      <div className="flex items-start gap-2 mt-1">
        <img src={icon} alt="alert" className="w-4 h-4 mt-[2px]" />
        <p className="text-xs text-gray-500">
          Enter your name as it appears on your government approved ID
        </p>
      </div>

      {/* PASSWORD */}
      <label className="text-sm font-medium text-gray-700 mt-3">
        Password
      </label>
      <input
        type="password"
        placeholder="Enter password"
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        className="mt-4 bg-[#554ADF] text-white py-2 rounded-md transition hover:bg-[#4433bb]"
      >
        Continue
      </button>

      {/* TERMS & POLICY */}
      <p className="mt-3 text-xs text-gray-600 leading-relaxed">
        By signing up, you agree to{" "}
        <span className="underline cursor-pointer text-[#AAA4EF]">
          Faremit’s Privacy Policy
        </span>
        ,{" "}
        <span className="underline cursor-pointer text-[#AAA4EF]">
          Patriot Act disclosure
        </span>{" "}
        and{" "}
        <span className="underline cursor-pointer text-[#AAA4EF]">
          ACH payment authorization
        </span>
      </p>
    </form>
  );
}
