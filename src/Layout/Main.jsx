import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="border-[1.7rem] z-10 border-custom2 bg-custom1 h-screen w-full text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
