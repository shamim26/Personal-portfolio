import React from "react";

const Skills = () => {
  return (
    <div className="container w-2/3 mx-auto pb-36">
      <h3 className="uppercase underline mb-8">Skills</h3>
      <div className="flex flex-col gap-4">
        <div>
          <p className="mb-3 text-gray-400">HTML</p>
          <div className="relative flex w-full h-0.5 bg-gray-200 overflow-hidden dark:bg-gray-700">
            <div
              className="flex flex-col justify-center overflow-hidden bg-custom3"
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div>
          <p className="mb-3 text-gray-400">CSS</p>
          <div className="relative flex w-full h-0.5 bg-gray-200 overflow-hidden dark:bg-gray-700">
            <div
              className="flex flex-col justify-center overflow-hidden bg-custom3"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div>
          <p className="mb-3 text-gray-400">JavaScript</p>
          <div className="relative flex w-full h-0.5 bg-gray-200 overflow-hidden dark:bg-gray-700">
            <div
              className="flex flex-col justify-center overflow-hidden bg-custom3"
              role="progressbar"
              style={{ width: "65%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div>
          <p className="mb-3 text-gray-400">React</p>
          <div className="relative flex w-full h-0.5 bg-gray-200 overflow-hidden dark:bg-gray-700">
            <div
              className="flex flex-col justify-center overflow-hidden bg-custom3"
              role="progressbar"
              style={{ width: "70%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div>
          <p className="mb-3 text-gray-400">Node Js</p>
          <div className="relative flex w-full h-0.5 bg-gray-200 overflow-hidden dark:bg-gray-700">
            <div
              className="flex flex-col justify-center overflow-hidden bg-custom3"
              role="progressbar"
              style={{ width: "35%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
