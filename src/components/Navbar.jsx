import { NavLink } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";
import logo from "../assets/logo(1).png";

const Navbar = ({ handleScroll, homeRef, aboutRef }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between z-40 fixed top-0 left-0 right-0 border-t-[1.7rem] border-l-[1.7rem] border-r-[1.7rem] border-custom2 bg-custom1 md:px-14 py-8 ">
      <img className="w-[9rem]" src={logo} alt="" />
      <div
        className={`flex items-center lg:flex-row flex-col bg-custom1 w-full lg:w-auto top-20 absolute z-30 lg:static gap-20 lg:p-0 pt-10 lg:gap-10 transition-all ease-linear duration-300 ${
          isOpen ? "right-0 h-[30rem]" : "-right-[90rem] h-auto"
        }`}
      >
        <NavLink onClick={() => handleScroll(homeRef)} to="/">
          Home
        </NavLink>
        <NavLink onClick={() => handleScroll(aboutRef)} to="#about">
          About
        </NavLink>
        <NavLink to="#">Projects</NavLink>
        <NavLink to="#">Contact</NavLink>
      </div>
      <div className="lg:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </div>
  );
};

export default Navbar;
