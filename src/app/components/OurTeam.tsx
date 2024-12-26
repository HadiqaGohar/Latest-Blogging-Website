'use client';

import React, { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client';
import Image from 'next/image';

interface OurTeamData {
  sectionTitle: string;
  sectionSubTitle: string;
  sectionDescription: string;
  mainImage: { asset: { url: string } };
  decorativeImage: { asset: { url: string } };
}

const OurTeam: React.FC = () => {
  const [ourTeamData, setOurTeamData] = useState<OurTeamData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "ourTeam"][0] { 
        sectionTitle, 
        sectionSubTitle, 
        sectionDescription, 
        mainImage { asset->{ url } }, 
        decorativeImage { asset->{ url } }
      }`;

      const data = await client.fetch(query);
      setOurTeamData(data);
    };

    fetchData();
  }, []);

  if (!ourTeamData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex font-sans flex-col lg:flex-row max-w-screen-2xl mx-auto py-12 px-6 gap-20">
      {/* Content Section */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-24">{ourTeamData.sectionTitle}</h2>
        <hr className="w-56 border-4 border-yellow-300 rounded-r-full" />
        <h4 className="text-xl text-gray-700 mb-4 mt-6">{ourTeamData.sectionSubTitle}</h4>
        <p className="text-gray-600 leading-relaxed">{ourTeamData.sectionDescription}</p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex flex-col gap-6">
        {/* Large Background Image */}
        <div className="relative w-full h-[480px] bg-gray-800 overflow-hidden rounded-md">
          <Image
            src={ourTeamData.mainImage.asset.url} // Ensure URL is correct
            alt="Our Team"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        {/* Small Decorative Image */}
        <div className="absolute -ml-14 mt-20 flex justify-center">
          <Image
            src={ourTeamData.decorativeImage.asset.url} // Ensure URL is correct
            alt="Decorative Shape"
            objectFit="cover"
            height={103}
            width={116}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
