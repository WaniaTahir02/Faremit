import { useNavigate } from "react-router-dom";
import SignupForm from "../components/auth/SignupForm";
import signupImg1 from "../assets/signup/signup-img-1.png";
import signupImg2 from "../assets/signup/signup-img-2.png";
import logo from "../assets/logo.svg";

export default function Signup() {
  const navigate = useNavigate();


  const handleSignupSuccess = () => {
    navigate("/verify-email");
  };

  return (
    <div className="min-h-screen relative bg-white md:grid md:grid-cols-2">

      {/* MOBILE LOGO */}
      <div className="absolute top-6 left-6 md:hidden z-20">
        <img src={logo} alt="Faremit logo" className="h-12 w-auto" />
      </div>

      {/* LEFT IMAGE – desktop only */}
      <div className="hidden md:flex items-start justify-start px-3">
        <img
          src={signupImg2}
          alt="Signup visual"
          className="max-w-lg object-contain"
        />
      </div>

      {/* FORM SECTION */}
      <div className="flex flex-col justify-center items-center md:items-start px-6 md:px-20 py-12 md:py-12 min-h-screen md:min-h-0 relative z-10">
        <div className="w-full max-w-sm mt-12 md:mt-0 text-left">

          <h1 className="text-2xl md:text-3xl font-semibold text-[#0C0F2C] mb-1">
            Create your Faremit Account
          </h1>

          <p className="mb-6 text-sm md:text-base text-gray-600">
            Already have an account?{" "}
            <a href="/signin" className="text-purple-500 underline">
              Sign in
            </a>
          </p>

          {/* Pass the handler to the form */}
          <SignupForm onSuccess={handleSignupSuccess} />
        </div>
      </div>

      {/* RIGHT DECORATIVE IMAGE */}
      <div className="absolute top-0 right-0 z-0">
        <img
          src={signupImg1}
          alt="Decoration"
          className="object-contain w-55 sm:w-40 md:w-auto opacity-30 pointer-events-none"
        />
      </div>
    </div>
  );
}
