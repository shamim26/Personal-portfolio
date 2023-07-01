import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";
import About from "../components/About";
import { useRef } from "react";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/projects";
import Contacts from "../components/Contacts";

const Main = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (elementRef) => {
    if (elementRef && elementRef.current) {
      const yOffset = -180;
      const y =
        elementRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col border-[1.7rem] border-custom2 bg-custom1 text-white min-h-screen">
      <Navbar
        handleScroll={handleScroll}
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />
      <div className="flex-grow overflow-y-auto">
        <Home homeRef={homeRef} />
        <About aboutRef={aboutRef} />
        <Services />
        <Skills />
        <Projects projectRef={projectRef} />
        <Contacts contactRef={contactRef} />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
