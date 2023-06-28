import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="flex flex-col border-[1.7rem] border-custom2 bg-custom1 text-white min-h-screen">
      <Navbar />
      <div className="flex-grow overflow-y-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
