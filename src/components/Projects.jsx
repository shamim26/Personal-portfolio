import photo1 from "../assets/camp-dojo.png";
import photo2 from "../assets/pixel-pals.png";
import photo3 from "../assets/spice-safari.png";

const Projects = ({ projectRef }) => {
  return (
    <div ref={projectRef} className="container w-2/3 mx-auto pb-36">
      <h3 className="uppercase underline mb-8">projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="group relative flex flex-col transition-all ease-in-out duration-300">
          <img className="object-cover h-[310px]" src={photo1} alt="" />
          <div className="absolute top-12 left-7 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-custom3 h-[13rem] w-[15rem] transition-all ease-in-out duration-300">
            <a href="https://camp-dojo-9b584.web.app/" target="_blank">
              <svg
                viewBox="0 0 320 512"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </a>
          </div>
          <a
            href="https://camp-dojo-9b584.web.app/"
            target="_blank"
            className="uppercase text-center my-4 group-hover:text-custom3 transition-all ease-in-out duration-300"
          >
            camp dojo
          </a>
          <div className="uppercase underline text-sm text-gray-400 justify-center gap-5 flex">
            <a target="_blank" href="https://github.com/shamim26/Camp-dojo">
              Client
            </a>
            <a
              target="_blank"
              href="https://github.com/shamim26/Camp-dojo-server"
            >
              Server
            </a>
          </div>
        </div>
        <div className="group relative flex flex-col transition-all ease-in-out duration-300">
          <img className="object-cover h-[310px]" src={photo2} alt="" />
          <div className="absolute top-12 left-7 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-custom3 h-[13rem] w-[15rem] transition-all ease-in-out duration-300">
            <a href="https://pixel-pals-18200.web.app/" target="_blank">
              <svg
                viewBox="0 0 320 512"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </a>
          </div>
          <a
            href="https://pixel-pals-18200.web.app/"
            target="_blank"
            className="uppercase text-center my-4 group-hover:text-custom3 transition-all ease-in-out duration-300"
          >
            pixel pals
          </a>
          <div className="uppercase underline text-sm text-gray-400 justify-center gap-5 flex">
            <a target="_blank" href="https://github.com/shamim26/Pixel-pals">
              Client
            </a>
            <a
              target="_blank"
              href="https://github.com/shamim26/Pixel-pals-server"
            >
              Server
            </a>
          </div>
        </div>
        <div className="group relative flex flex-col transition-all ease-in-out duration-300">
          <img className="object-cover h-[310px]" src={photo3} alt="" />
          <div className="absolute top-12 left-7 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-custom3 h-[13rem] w-[15rem] transition-all ease-in-out duration-300">
            <a href="https://spice-safari.web.app/" target="_blank">
              <svg
                viewBox="0 0 320 512"
                fill="currentColor"
                height="2em"
                width="2em"
              >
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </a>
          </div>
          <a
            href="https://spice-safari.web.app/"
            target="_blank"
            className="uppercase text-center my-4 group-hover:text-custom3 transition-all ease-in-out duration-300"
          >
            spice safari
          </a>
          <div className="uppercase underline text-sm text-gray-400 justify-center gap-5 flex">
            <a target="_blank" href="https://github.com/shamim26/Spice-safari">
              Client
            </a>
            <a
              target="_blank"
              href="https://github.com/shamim26/Spice-safari-server"
            >
              Server
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
