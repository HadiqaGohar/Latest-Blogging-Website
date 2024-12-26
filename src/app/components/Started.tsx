'use client';

import React, { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client'; // Ensure you have the client setup correctly
import Image from 'next/image';

interface StartedData {
  sectionTitle: string;
  sectionSubTitle: string;
  sectionDescription: string;
  mainImage: { asset: { url: string } };
  decorativeImage: { asset: { url: string } };
}

const Started: React.FC = () => {
  const [startedData, setStartedData] = useState<StartedData | null>(null);

  // Fetch data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "started"][0] { 
        sectionTitle, 
        sectionSubTitle, 
        sectionDescription, 
        mainImage { asset->{ url } }, 
        decorativeImage { asset->{ url } }
      }`;

      try {
        const data = await client.fetch(query);
        setStartedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!startedData) {
    return <div>Loading...</div>; // Show loading message if data is not yet available
  }

  return (
    <div className="flex font-sans flex-col lg:flex-row max-w-screen-2xl mx-auto py-12 px-6 gap-20">
      {/* Image Section */}
      <div className="lg:w-1/2 flex flex-col gap-6">
        {/* Large Background Image */}
        <div className="relative w-full h-[480px] bg-gray-800 overflow-hidden rounded-md">
          <Image
            src={startedData.mainImage.asset.url} // Fetch main image dynamically
            alt="Our Team"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        {/* Small Decorative Image */}
        <div className="absolute flex justify mt-[440px] ml-20">
          <Image
            src={startedData.decorativeImage.asset.url} // Fetch decorative image dynamically
            alt="Decorative Shape"
            objectFit="cover"
            height={74}
            width={74}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-24">{startedData.sectionTitle}</h2>
        <hr className="w-56 border-4 border-violet-700 rounded-r-full" />
        <h4 className="text-xl text-gray-700 mb-4 mt-6">{startedData.sectionSubTitle}</h4>
        <p className="text-gray-600 leading-relaxed">{startedData.sectionDescription}</p>
      </div>
    </div>
  );
};

export default Started;
