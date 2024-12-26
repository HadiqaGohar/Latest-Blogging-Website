'use client'
import React, { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client'; // Import the sanity client
import Link from 'next/link';

// Define the type for the data object based on your query result
type MissionData = {
  aboutUsTitle: string;
  aboutUsDescription: string;
  ourMissionTitle: string;
  ourMissionDescription: string;
  readMoreLink?: string; // Optional, if it may not always exist
};

function OurMission() {
  const [data, setData] = useState<MissionData | null>(null); // Explicitly define the type of data

  // Function to fetch content from Sanity
  const fetchData = async () => {
    const query = `*[_type == "ourMission"]{ 
      aboutUsTitle, 
      aboutUsDescription, 
      ourMissionTitle, 
      ourMissionDescription, 
      readMoreLink 
    }`;

    try {
      const result = await client.fetch(query);
      setData(result[0]); // Set the first result (assuming only one document exists)
    } catch (error) {
      console.error("Error fetching data from Sanity:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Call the function on component mount
  }, []);

  // If data is not yet loaded
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white font-sans text-black">
      {/* Progress Bar Section */}
      <div className="flex justify-end w-full max-w-screen-2xl mx-auto">
        <div className="bg-[#00e785] rounded-l-full w-[200px] md:w-[843px] h-[15px] md:h-[23px]" />
        <div className="bg-gray-400 w-[100px] md:w-[282px] md:mr-0 h-[15px] md:h-[23px]" />
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-screen-2xl mx-auto bg-[#F4F0F8] py-16 px-4">
        <div className="flex flex-wrap justify-between gap-8 p-10">
          {/* About Us Section */}
          <div className="w-full lg:w-[48%]">
            <p className="text-xl font-semibold mb-4 text-gray-700">ABOUT US</p>
            <p className="text-3xl font-semibold mb-4">{data.aboutUsTitle}</p>
            <p className="text-gray-600 mb-6">{data.aboutUsDescription}</p>
            <Link href='/about'>
              <span className="text-[#00e785] font-semibold hover:underline cursor-pointer">
                Read More
              </span>
            </Link>
          </div>

          {/* Our Mission Section */}
          <div className="w-full lg:w-[48%]">
            <p className="text-xl font-semibold mb-4 text-gray-700">OUR MISSION</p>
            <p className="text-3xl font-semibold mb-4">{data.ourMissionTitle}</p>
            <p className="text-gray-600 mb-6">{data.ourMissionDescription}</p>
            {/* Optional: Link if you decide to add a "Read More" functionality */}
            {/* <Link href={data.readMoreLink || '#'}>
              <span className="text-[#00e785] font-semibold hover:underline cursor-pointer">
                Read More
              </span>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;
