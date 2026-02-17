import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import leftImg from "../assets/signup/signup-img-2.png";
import rightImg from "../assets/signup/signup-img-1.png";
import bgLeft from "../assets/signup/bg-img.png";
import logo from "../assets/logo.svg";
import icon from "../assets/signup/alert-icon.png";
import vIcon from "../assets/signup/v-icon.png";
import contentImg from "../assets/Content.png";

export default function Signin() {
  const [email, setEmail] = useState("akwa@gmail.com");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState("akwa@gmail.com");
  const [resetSent, setResetSent] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changePasswordError, setChangePasswordError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("");

  const navigate = useNavigate();

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);
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
  console.log("Password valid — continue login with email:", email);

  navigate("/dashboard");
};

  const handleResetSubmit = (e) => {
    e.preventDefault();
    if (!resetEmail) return;

    setResetSent(true);
    setToastType("reset");
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      setShowChangePassword(true);
    }, 2000);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (!validatePassword(newPassword)) {
      setChangePasswordError(
        "Password must be minimum 8 characters and contain one uppercase, one lowercase, one number, and one special character."
      );
      return;
    }
    if (newPassword !== confirmPassword) {
      setChangePasswordError("Passwords do not match.");
      return;
    }
    setChangePasswordError("");
    setToastType("changed");
    setShowToast(true);

  
    setTimeout(() => {
      setShowToast(false);
      setShowChangePassword(false);
      setPassword("");
      setConfirmPassword("");
      setNewPassword("");
      setShowReset(false);
      setEmail("akwa@gmail.com");
      setResetEmail("akwa@gmail.com");
    }, 5000);
  };
  const handleClickHere = () => {
    setShowToast(false);
    setShowChangePassword(false);
    setPassword("");
    setConfirmPassword("");
    setNewPassword("");
    setShowReset(false);
    setEmail("akwa@gmail.com");
    setResetEmail("akwa@gmail.com");
  };

  return (
    <div className="min-h-screen relative bg-white md:grid md:grid-cols-2">

      {/* MOBILE LOGO */}
      {!showChangePassword && (
        <div className="absolute top-6 left-6 md:hidden z-20">
          <img src={logo} alt="Faremit logo" className="h-10 w-auto" />
        </div>
      )}

      {/* LEFT IMAGE (Desktop only) */}
      {!showChangePassword && (
        <div className="hidden md:flex items-start justify-start px-3">
          <img src={leftImg} alt="Login visual" className="max-w-lg object-contain" />
        </div>
      )}

      {/* FORM SECTION */}
      <div className={`flex flex-col justify-center items-center px-6 md:px-20 py-12 min-h-screen relative z-10 ${showChangePassword ? "md:col-span-2" : ""}`}>
        <div className="w-full max-w-sm">

          {/* LOGIN FORM */}
          {!showReset && !showChangePassword && (
            <>
              <h1 className="text-2xl md:text-3xl font-semibold text-[#0C0F2C] mb-1">Welcome back</h1>
              <p className="mb-6 text-sm md:text-base text-gray-600">
                New to Faremit? <Link to="/signup" className="text-purple-500 underline">Sign up</Link>
              </p>
              <form onSubmit={handleLoginSubmit} className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Email address</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />
                <label className="text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setPasswordError(""); }}
                  className={`border rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${
                    passwordError ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-purple-400"
                  }`}
                  required
                />
                {passwordError && (
                  <div className="flex items-start gap-2 mt-1">
                    <img src={icon} alt="alert" className="w-4 h-4 mt-[2px]" />
                    <p className="text-sm text-gray-600 leading-snug">{passwordError}</p>
                  </div>
                )}
                <button type="submit" className="mt-4 bg-[#554ADF] text-white py-2 rounded-md transition hover:bg-[#4433bb]">Sign In</button>
                <button type="button" onClick={() => setShowReset(true)} className="text-sm text-purple-500 mt-2 underline">Forgot password?</button>
              </form>
            </>
          )}

          {/* RESET FORM */}
          {showReset && !showChangePassword && (
            <>
              <div className="flex md:hidden mb-4">
                <button onClick={() => setShowReset(false)} className="text-sm font-bold text-gray-700">{"< Back"}</button>
              </div>
              {!resetSent ? (
                <form onSubmit={handleResetSubmit} className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">Email address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                  />
                  <button type="submit" className="mt-4 bg-[#554ADF] text-white py-2 rounded-md transition hover:bg-[#4433bb]">Reset Password</button>
                </form>
              ) : (
                <div className="bg-[#F7F6FD] shadow-md rounded-xl px-5 py-6 w-full flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <img src={vIcon} alt="success icon" className="w-8 h-8 mt-1" />
                    <div className="flex-1">
                      <img src={contentImg} alt="Password reset sent" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {/* CHANGE PASSWORD FORM */}
          {showChangePassword && !showToast && (
            <div className="flex flex-col items-start w-full max-w-md mx-auto px-4">
              <div className="flex md:hidden mb-4">
                <button onClick={() => setShowChangePassword(false)} className="text-sm font-bold text-gray-700">{"< Back"}</button>
              </div>

              <div className="hidden md:flex mb-6 justify-start">
                <img src={logo} alt="Faremit logo" className="h-12 w-auto" />
              </div>

              <h1 className="text-2xl font-semibold text-[#0C0F2C] mb-6 text-left">Change Your Password</h1>

              <form onSubmit={handleChangePassword} className="flex flex-col gap-4 w-full">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-2">New Password</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    required
                  />
                </div>

                {changePasswordError && <p className="text-sm text-red-500">{changePasswordError}</p>}

                <button type="submit" className="mt-2 bg-[#554ADF] text-white py-2 rounded-md transition hover:bg-[#4433bb]">Save</button>
                <p className="text-sm text-gray-600 mb-6">You'll be redirected to Sign In after saving your new password.</p>
              </form>
            </div>
          )}

          {/* PASSWORD CHANGED POPUP */}
          {showToast && toastType === "changed" && (
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#F7F6FD] shadow-md rounded-xl px-5 py-4 w-[90%] max-w-md flex flex-col gap-3 animate-slide-in">
              <div className="flex items-start gap-3">
                <img src={vIcon} alt="success icon" className="w-8 h-8 mt-1" />
                <div className="flex-1">
                  <h2 className="font-semibold text-gray-800 mb-1">Password Changed</h2>
                  <p className="text-sm text-gray-600">
                    Your password has successfully been changed. You will be redirected to the Sign In page.
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="text-red-600  cursor-pointer" onClick={handleClickHere}>
                      Click here
                    </span>{" "}
                    if nothing happens.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute top-0 right-0 z-0">
        <img src={rightImg} alt="Right visual" className="object-contain w-55 sm:w-36 md:w-auto" />
      </div>

      {/* LEFT BOTTOM BG IMAGE */}
      {showChangePassword && (
        <div className="absolute bottom-0 left-0 z-0">
          <img src={bgLeft} alt="background" className="w-60 opacity-40 object-contain" />
        </div>
      )}

    </div>
  );
}
