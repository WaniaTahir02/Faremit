import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./sections/Navbar";
import Hero from "./components/Hero";
import gridBg from "./assets/grid-bg.png";
import HowToSend from "./components/HowToSend";
import TrustSection from "./components/TrustSectionMobile";
import Testimonials from "./components/Testimonials";
import Trust from "./components/Trust";
import Faq from "./sections/Faq"; 
import Exp from "./components/Experience"; 
import Footer from "./sections/Footer";

import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import VerifyEmail from "./pages/VerifyEmail";
import VerifyPhoneNo from "./pages/VerifyPhoneNo";
import Dashboard from "./pages/Dashboard";




function App() {
  const location = useLocation();

  // Pages where Navbar + background should NOT appear
  // Make sure the route matches exactly what you navigate to
  const authPages = ["/signup", "/signin", "/verify-email", "/verify-phone","/dashboard"];
  const showLayout = !authPages.includes(location.pathname);

  return (
    <div className="relative min-h-screen">
      {/* GRID BACKGROUND + overlay for layout pages only */}
      {showLayout && (
        <>
          <div
            className="absolute inset-0 z-0 h-full"
            style={{
              backgroundImage: `url(${gridBg})`,
              backgroundColor: "#FFEEE8",
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
            }}
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#FFEEE8]/95 to-[#FFEEE8]" />
        </>
      )}

      {/* Navbar for layout pages */}
      {showLayout && <Navbar />}

      {/* Page content */}
      <div className="relative z-20 min-h-screen">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <HowToSend />
                <TrustSection />
                <Trust />
                <Testimonials />
                <Faq />
                <Exp />
                <Footer />
              </>
            }
          />

         
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/verify-phone" element={<VerifyPhoneNo />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
