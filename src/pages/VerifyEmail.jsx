import { useState, useEffect } from "react";
import VerifyOtpForm from "../components/auth/VerifyOtpForm";
import signupImg1 from "../assets/signup/signup-img-1.png";
import signupImg2 from "../assets/signup/signup-img-2.png";
import logo from "../assets/logo.svg";
import vIcon from "../assets/signup/v-icon.png";

export default function VerifyEmail() {
  const [showToast, setShowToast] = useState(false);
  const [timer, setTimer] = useState(47);
  const [showHelpModal, setShowHelpModal] = useState(false);

  const userEmail = "ekem@gmail.com";

  useEffect(() => {
    setShowToast(true);
    const toastTimer = setTimeout(() => setShowToast(false), 5000);
    return () => clearTimeout(toastTimer);
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    }
  }, [timer]);

  const handleResend = () => {
    setTimer(47);
    setShowHelpModal(false);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowHelpModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (showHelpModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showHelpModal]);

  return (
    <div className="min-h-screen relative bg-white md:grid md:grid-cols-2">

      {/* MOBILE LOGO */}
      <div className="absolute top-6 left-6 md:hidden z-20">
        <img src={logo} alt="Faremit logo" className="h-12 w-auto" />
      </div>

      {/* LEFT IMAGE */}
      <div className="hidden md:flex items-start justify-start px-3">
        <img
          src={signupImg2}
          alt="Verify visual"
          className="max-w-lg object-contain"
        />
      </div>

      {/* FORM SECTION */}
      <div className="flex flex-col justify-center items-start px-6 md:px-20 py-12 min-h-screen md:min-h-0 relative z-10">
        <div className="w-full max-w-sm text-left">

          <h1 className="text-2xl md:text-3xl font-semibold text-[#0C0F2C] mb-2">
            Verify Your Email Address
          </h1>

          <p className="mb-6 text-sm md:text-base text-gray-600">
            6-digit code sent to{" "}
            <span className="font-medium text-[#0C0F2C] break-all">
              {userEmail}
            </span>{" "}
            <a
              href="#"
              className="text-indigo-600 font-medium  hover:underline ml-1"
            >
              Change email
            </a>
          </p>

          <VerifyOtpForm />

          {/* Resend Section */}
          <div className="mt-4 text-sm">
            {timer === 0 ? (
              <button
                onClick={() => setShowHelpModal(true)}
                className="text-gray-600 font-medium hover:underline"
              >
                Did not receive the code?
              </button>
            ) : (
              <div className="flex items-center gap-1">
                <span className="text-red-500 font-semibold">{timer}s</span>
                <span className="underline text-[#0C0F2C] font-medium">
                  Resend code
                </span>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* RIGHT DECOR IMAGE */}
      <div className="absolute top-0 right-0 z-0">
        <img
          src={signupImg1}
          alt="Decoration"
          className="object-contain w-55 sm:w-40 md:w-auto opacity-30 pointer-events-none"
        />
      </div>

      {/* TOAST */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-[#F7F6FD] shadow-md rounded-xl px-5 py-4 w-80 flex items-start gap-3 animate-slide-in">
          <img src={vIcon} alt="success icon" className="w-8 h-8" />
          <div>
            <h3 className="font-semibold text-[#0C0F2C] mb-1">
              Code Sent
            </h3>
            <p className="text-sm text-gray-600">
              We’ve sent a 6-digit authentication code to your email address you provided.Use it to verify your address and continue.
            </p>
          </div>
        </div>
      )}

   {/* HELP MODAL */}
{showHelpModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

    {/* Soft Fade Overlay (NO BLUR) */}
    <div
      onClick={() => setShowHelpModal(false)}
      className="absolute inset-0 bg-black/25 transition-opacity duration-300"
    ></div>

    {/* Modal Card */}
    <div className="relative z-10 w-full max-w-md bg-white rounded-md shadow-2xl p-6 sm:p-7 animate-modal">

      <button
        onClick={() => setShowHelpModal(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-lg"
      >
        ✕
      </button>

      <h2 className="text-base sm:text-lg font-semibold text-[#0C0F2C] mb-4">
        Did not receive email?
      </h2>

      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        If you do not get this email within the next 5 minutes, it could be for one of the following reasons:
      </p>

      <ul className="text-sm text-gray-600 space-y-3 list-disc pl-5">
        <li>
          The email address you entered has a typo or is not correct.
          Is this correct —{" "}
          <span className="text-indigo-600 font-medium break-all">
            {userEmail}
          </span>
        </li>

        <li>
          The email may be located in your spam or junk folder.
          If you are using Gmail, kindly check your Promotions tab as well.
        </li>

        <li>
          The email delivery to this address is currently not possible,
          often due to corporate firewalls or filtering mechanisms.
        </li>
      </ul>

    </div>
  </div>
)}


      <style>{`
        @keyframes slide-in {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.4s ease-out forwards;
        }

        @keyframes modal {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-modal {
          animation: modal 0.25s ease-out;
        }
      `}</style>

    </div>
  );
}
