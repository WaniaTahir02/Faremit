import Navbar from "./sections/Navbar";
import Hero from "./components/Hero";
import gridBg from "./assets/grid-bg.png";
import HowToSend from "./components/HowToSend";
import TrustSection from "./components/TrustSectionMobile";
import Testimonials from "./components/Testimonials";
import Trust from "./components/trust"; // Adjust the path if needed
import Faq from "./sections/Faq"; 
import Exp from "./components/Experience"; 
import Footer from "./sections/Footer";


function App() {
  return (
    <div className=" absolute top-0 left-0 w-full  z-0">
      {/* GRID BACKGROUND for both Navbar + Hero */}
      <div
        className="absolute inset-0 z-0 h-300"
        style={{
          backgroundImage: `url(${gridBg})`,
          backgroundColor: "#FFEEE8",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
        }}
      />

      {/* GRADIENT overlay for both Navbar + Hero */}
      <div className="absolute inset-0 z-10  via-[#FFEEE8]/95 to-[#FFEEE8]" />

      {/* Navbar + Hero content */}
      <div className="relative z-20">
        <Navbar />
        <Hero />
        <HowToSend/>
       <TrustSection/>
        <Trust/>
        
        <Testimonials/>
       
        <Faq/>
        <Exp/>
        <Footer/>
        
      </div>
    </div>
  );
}

export default App;
