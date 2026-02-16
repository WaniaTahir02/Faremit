import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import leftImg from "../assets/signup/signup-img-2.png";
import rightImg from "../assets/signup/signup-img-1.png";
import logo from "../assets/logo.svg";
import icon from "../assets/signup/alert-icon.png";
import vIcon from "../assets/signup/v-icon.png"; // Add a success icon

export default function Signin() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showReset, setShowReset] = useState(false); // toggle reset form
  const [resetEmail, setResetEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [showToast, setShowToast] = useState(false); // for toast popup

  // Password validation
  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
      password
    );
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be minimum 8 characters and must contain one upper & lowercase, one number, and one special character."
      );
      return;
    }
    setPasswordError("");
    console.log("Password valid — continue login");
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    if (!resetEmail) return;

    // TODO: send reset email API call
    setResetSent(true);
    setShowToast(true);

    // Auto hide toast after 5 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen relative bg-white md:grid md:grid-cols-2">

      {/* MOBILE LOGO */}
      <div className="absolute top-6 left-6 md:hidden z-20">
        <img src={logo} alt="Faremit logo" className="h-10 w-auto" />
      </div>

      {/* LEFT IMAGE */}
      <div className="hidden md:flex items-start justify-start px-3">
        <img src={leftImg} alt="Login visual" className="max-w-lg object-contain" />
      </div>

      {/* FORM SECTION */}
      <div className="flex flex-col justify-center items-center md:items-start px-6 md:px-20 py-12 min-h-screen md:min-h-0 relative z-10">
        <div className="w-full max-w-sm">
          {!showReset ? (
            <>
              {/* LOGIN FORM */}
              <h1 className="text-2xl md:text-3xl font-semibold text-[#0C0F2C] mb-1">
                Welcome back
              </h1>

              <p className="mb-6 text-sm md:text-base text-gray-600">
                New to Faremit?{" "}
                <Link to="/signup" className="text-purple-500 underline">
                  Sign up
                </Link>
              </p>

              <form onSubmit={handleLoginSubmit} className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />

                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                  className={`border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${
                    passwordError
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-purple-400"
                  }`}
                  required
                />

                {/* INLINE ERROR (icon + text) */}
                {passwordError && (
                  <div className="flex items-start gap-2 mt-1">
                    <img src={icon} alt="alert" className="w-4 h-4 mt-[2px]" />
                    <p className="text-sm text-gray-600 leading-snug">{passwordError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  className="mt-4 bg-[#554ADF] text-white py-2 rounded-md transition hover:bg-[#4433bb]"
                >
                  Sign In
                </button>

                <button
                  type="button"
                  onClick={() => setShowReset(true)}
                  className="text-sm text-purple-500 mt-2 underline"
                >
                  Forgot password?
                </button>
              </form>
            </>
          ) : (
            <>
              {/* RESET PASSWORD FORM */}
              <button
                onClick={() => setShowReset(false)}
                className="text-sm text-gray-500 mb-4 underline"
              >
                &larr; Back
              </button>

              <h1 className="text-2xl md:text-3xl font-semibold text-[#0C0F2C] mb-2">
                Reset your password
              </h1>

              <p className="mb-6 text-sm md:text-base text-gray-600">
                Enter the email address registered to your account
              </p>

              {!resetSent ? (
                <form onSubmit={handleResetSubmit} className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                  />

                  <button
                    type="submit"
                    className="mt-4 bg-[#554ADF] text-white py-2 rounded-md transition hover:bg-[#4433bb]"
                  >
                    Reset Password
                  </button>
                </form>
              ) : (
                <p className="text-green-600 font-medium mb-4">
               
                </p>
              )}
            </>
          )}
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute top-0 right-0 z-0">
        <img
          src={rightImg}
          alt="Right visual"
          className="object-contain w-55 sm:w-36 md:w-auto"
        />
      </div>

      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-[#F7F6FD] shadow-md rounded-xl px-5 py-4 w-80 flex items-start gap-3 animate-slide-in">
          <img src={vIcon} alt="success icon" className="w-8 h-8" />
          <div>
            <h3 className="font-semibold text-[#0C0F2C] mb-1">Password Changed</h3>
            <p className="text-sm text-gray-600">
              Your password has successfully been changed. You will be redirected to the sign in page.{" "}
              <span
                onClick={() => window.location.reload()} 
                className="underline cursor-pointer"
              >
                Click here 
              </span>
              if nothing happens.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
