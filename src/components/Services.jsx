import React from "react";

const Services = () => {
  return (
    <div className="container w-2/3 mx-auto mt-20">
      <h3 className="uppercase underline mb-8">Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <span className="flex items-center gap-3 mb-4">
            <svg fill="none" viewBox="0 0 24 24" height="2.5em" width="2.5em">
              <path
                fill="#F26B38"
                d="M13.325 3.05L8.667 20.432l1.932.518 4.658-17.382-1.932-.518zM7.612 18.36l1.36-1.448-.001-.019-5.094-4.78 4.79-5.105-1.458-1.369-6.16 6.563 6.563 6.159zM16.388 18.36l-1.36-1.448.001-.019 5.094-4.78-4.79-5.105 1.458-1.369 6.16 6.563-6.563 6.159z"
              />
            </svg>
            Front-end Development
          </span>
          <p className="text-gray-400">
            Interactive websites using HTML, CSS, JavaScript, and front-end
            framework React. With responsive design
          </p>
        </div>
        <div>
          <span className="flex items-center gap-3 mb-4">
            <svg
              viewBox="0 0 1024 1024"
              fill="#F26B38"
              height="2.5em"
              width="2.5em"
            >
              <path d="M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8-21.1 21.2-32.8 49.2-32.8 79.1 0 29.9 11.7 57.9 32.8 79.1 21.2 21.1 49.2 32.8 79.1 32.8 29.9 0 57.9-11.7 79.1-32.8 21.1-21.2 32.8-49.2 32.8-79.1 0-29.9-11.7-57.9-32.8-79.1a110.96 110.96 0 00-79.1-32.8zm412.3 235.5l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9a32.03 32.03 0 009.3-35.2l-.9-2.6a442.5 442.5 0 00-79.6-137.7l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52-9.4-106.8-9.4-158.8 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.3a353.44 353.44 0 00-98.9 57.3l-81.8-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a445.93 445.93 0 00-79.6 137.7l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57 0 19.2 1.5 38.4 4.6 57l-66 56.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3a32.05 32.05 0 0025.8 25.7l2.7.5a448.27 448.27 0 00158.8 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c4.3-12.4.6-26.3-9.5-35zm-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8 175.8 78.7 175.8 175.8-78.7 175.8-175.8 175.8z" />
            </svg>
            Website Maintenance
          </span>
          <p className="text-gray-400">
            Website maintenance, updates, and bug fixes. Keep websites up to
            date, ensure compatibility with new browser versions.
          </p>
        </div>
        <div>
          <span className="flex items-center gap-3 mb-4">
            <svg
              viewBox="0 0 24 24"
              fill="#F26B38"
              height="2.5em"
              width="2.5em"
            >
              <path d="M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4-3.58 4-8 4-8-1.79-8-4m8.08 11H12c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4h.29a7.38 7.38 0 01-.29-2c0-.34.03-.67.08-1M20 12.08V9c0 2.21-3.58 4-8 4s-8-1.79-8-4v3c0 2.21 3.58 4 8 4h.69c1.13-2.37 3.53-4 6.31-4 .34 0 .67.03 1 .08m3.8 8.32c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1l1.1.8M20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5.7 1.5 1.5 1.5 1.5-.7 1.5-1.5z" />
            </svg>
            Backend Development
          </span>
          <p className="text-gray-400">
            Handling data exchange, implementing APIs, and ensuring smooth
            communication between the front-end and back-end.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
