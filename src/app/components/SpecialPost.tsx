import React from 'react';

function SpecialPost() {
  return (
    <section className="bg-white">
      {/* Container */}
      <div className="max-w-screen-2xl mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center">
          {/* Background Image Section */}
          <div
            className="relative w-full h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat rounded-lg"
            style={{
              backgroundImage: "url('/home/img2.jpeg')", // Replace with your image path
            }}
          ></div>

          {/* Text Section */}
          <div className="absolute bg-white bg-opacity-90 p-8 rounded-lg shadow-lg lg:w-1/3 lg:h-auto lg:ml-8 transform lg:transform-none top-1/2 left-1/2 lg:top-auto lg:left-auto -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 lg:translate-y-0">
            <h5 className="text-sm md:text-xl font-semibold text-gray-700">Why We Started</h5>
            <h2 className="text-lg md:text-3xl font-semibold text-gray-800 mt-2">
              It started out as a simple idea and evolved into our passion
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <button
              className="mt-8 bg-[#00e785] text-sm md:text-lg text-black px-3 py-1 md:px-6 md:py-3 rounded-full hover:bg-[#00c66d] focus:outline-none focus:ring-2 focus:ring-[#00c66d] focus:ring-offset-2"
              aria-label="Discover our story"
            >
              Discover Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialPost;
