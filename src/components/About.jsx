/* eslint-disable react/no-unescaped-entities */

const About = ({ aboutRef }) => {
  return (
    <div ref={aboutRef} className="container w-2/3 mx-auto py-10">
      <h3 className="uppercase underline mb-6">About Information</h3>
      <p className="text-gray-400 md:text-justify">
        Hello, I'm Shamim Reza, a passionate front-end developer. With expertise
        in frontend development, I specialize in utilizing HTML, CSS,
        JavaScript, and React to build visually appealing and user-friendly
        interfaces.I can also manage back-end development using Node js Express
        Js and MongoDB.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-16">
        <p className="text-custom3">
          Age: <span className="text-gray-400">21</span>
        </p>
        <p className="text-custom3">
          Residence: <span className="text-gray-400">Bangladesh</span>
        </p>
        <p className="text-custom3">
          Freelance: <span className="text-gray-400">Available</span>
        </p>
        <p className="text-custom3">
          Address: <span className="text-gray-400">Naogaon, Bangladesh</span>
        </p>
        <p className="text-custom3">
          Phone: <span className="text-gray-400">+880 1763 3381 97</span>
        </p>
        <p className="text-custom3">
          Email: <span className="text-gray-400">shamimreja101@gmail.com</span>
        </p>
      </div>
      <a href="Resume.pdf" className="text-sm bg-custom3 px-4 py-3 inline-block cursor-pointer mt-14">
        Download Resume
      </a>
    </div>
  );
};

export default About;
