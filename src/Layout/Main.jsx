import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import About from "../components/About";
import { useRef } from "react";

const Main = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const handleScroll = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col border-[1.7rem] border-custom2 bg-custom1 text-white min-h-screen">
      <Navbar
        handleScroll={handleScroll}
        homeRef={homeRef}
        aboutRef={aboutRef}
      />
      <div className="flex-grow overflow-y-auto">
        <Home homeRef={homeRef} />
        <About aboutRef={aboutRef} />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
