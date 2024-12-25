import React from 'react';

function JoinOurTeam() {
  return (
    <div className="bg-gray-50 font-sans py-16">
      <div className="w-full max-w-md mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Join our team to be a part of our story
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br />
          elit, sed do eiusmod tempor incididunt.
        </p>
        <button
          className="mt-8 bg-[#00e785] text-black px-6 py-3 rounded-lg hover:bg-[#00c66d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00e785] transition duration-300"
          aria-label="Discover our story"
        >
          Discover Our Story
        </button>
      </div>
    </div>
  );
}

export default JoinOurTeam;
