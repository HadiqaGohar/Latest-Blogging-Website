import React from 'react';
import { FaGlobe, FaSearch, FaLink, FaShieldAlt, FaConnectdevelop, FaLightbulb, FaChartLine } from 'react-icons/fa';

function Logos() {
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center mx-auto w-full gap-y-4">
          <div className="w-[136px] text-center">
            <h3 className="text-xl text-gray-700">We are</h3>
            <h2 className="text-2xl font-semibold text-gray-800">Featured in</h2>
          </div>
          {/* Logo 1 - Global */}
          <div className="flex flex-col items-center justify-center w-[136px]">
            <FaGlobe className="text-4xl md:text-5xl text-blue-600 mb-2" />
            <h2 className="text-lg font-medium text-gray-800">Global</h2>
          </div>
          {/* Logo 2 - Search */}
          <div className="flex flex-col items-center justify-center w-[136px]">
            <FaSearch className="text-4xl md:text-5xl text-green-600 mb-2" />
            <h2 className="text-lg font-medium text-gray-800">Search</h2>
          </div>
          {/* Logo 3 - Connection */}
          <div className="flex flex-col items-center justify-center w-[136px]">
            <FaConnectdevelop className="text-4xl md:text-5xl text-purple-600 mb-2" />
            <h2 className="text-lg font-medium text-gray-800">Connection</h2>
          </div>
          {/* Logo 4 - Secure */}
          <div className="flex flex-col items-center justify-center w-[136px]">
            <FaShieldAlt className="text-4xl md:text-5xl text-red-600 mb-2" />
            <h2 className="text-lg font-medium text-gray-800">Secure</h2>
          </div>
          {/* Logo 5 - Linked */}
          <div className="flex flex-col items-center justify-center w-[136px]">
            <FaLink className="text-4xl md:text-5xl text-yellow-600 mb-2" />
            <h2 className="text-lg font-medium text-gray-800">Linked</h2>
          </div>
          {/* Logo 6 - Innovation */}
          <div className="flex flex-col items-center justify-center w-[136px]">
            <FaLightbulb className="text-4xl md:text-5xl text-orange-500 mb-2" />
            <h2 className="text-lg font-medium text-gray-800">Innovation</h2>
          </div>
          {/* Logo 7 - Analytics */}
          <div className="flex flex-col items-center justify-center w-[136px]">
            <FaChartLine className="text-4xl md:text-5xl text-teal-500 mb-2" />
            <h2 className="text-lg font-medium text-gray-800">Analytics</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logos;
