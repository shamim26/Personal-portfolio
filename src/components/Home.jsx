/* eslint-disable react/no-unescaped-entities */

import { TypeAnimation } from "react-type-animation";

const Home = ({homeRef}) => {
  return (
    <div ref={homeRef} className="flex flex-col justify-center h-screen items-center">
      <h1 className="uppercase text-6xl font-bold mb-4">I'm Shamim reza</h1>
      <TypeAnimation
        sequence={["Frontend Developer.", 1000, "MERN stack developer.", 1000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-gray-400 text-sm"
      />
    </div>
  );
};

export default Home;
