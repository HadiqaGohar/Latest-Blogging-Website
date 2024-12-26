'use client'

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import OurMission from '../components/OurMission';
import OurTeam from '../components/OurTeam';
import Started from '../components/Started';
import Author from '../components/Author';
import JoinOurTeam from '../components/JoinOurTeam';
import Footer from '../components/Footer';
import { client } from '../../sanity/lib/client';

// Define the data types for the fetched content
interface AboutPageData {
  aboutSection: {
    sectionTitle: string;
    sectionSubTitleLine1: string;
    sectionSubTitleLine2: string;
    sectionSubTitleLine3: string;
    sectionParagraph: string;
    backgroundImage: {
      asset: {
        _id: string;
        url: string;
      };
    };
  };
  statsSection: {
    statItems: {
      statNumber: number;
      statLabel: string;
    }[];
  };
}

function About() {
  // State with the proper type for aboutData
  const [aboutData, setAboutData] = useState<AboutPageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "aboutPage"][0]{
        aboutSection {
          sectionTitle,
          sectionSubTitleLine1,
          sectionSubTitleLine2,
          sectionSubTitleLine3,
          sectionParagraph,
          backgroundImage {
            asset->{
              _id,
              url
            }
          }
        },
        statsSection {
          statItems[] {
            statNumber,
            statLabel
          }
        }
      }`;

      const data = await client.fetch(query);
      setAboutData(data);
    };

    fetchData();
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Header */}
      <Header />

      {/* About Section */}
      <div className="max-w-screen-lg font-sans mx-auto py-12 px-6">
        <div className="absolute z-10 flex bg-white shadow-lg p-6 justify-between rounded-md">
          <span className="p-4">
            <h2 className="text-sm md:text-md font-bold text-gray-600">
              {aboutData.aboutSection.sectionTitle}
            </h2>
            <hr className="w-16 border-4 border-[#00e785] mb-4 rounded-full" />
            <h3 className="text-lg md:text-3xl font-semibold text-gray-700 mb-4">
              {aboutData.aboutSection.sectionSubTitleLine1} <br />
              {aboutData.aboutSection.sectionSubTitleLine2} <br />
              {aboutData.aboutSection.sectionSubTitleLine3}
            </h3>
          </span>
        </div>

        {/* Paragraph */}
        <p className="text-gray-600 my-6 mx-auto text-center md:text-left md:ml-[500px] hidden sm:block">
          {aboutData.aboutSection.sectionParagraph}
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-screen-2xl relative -mt-10 mx-auto">
        <div className="md:w-[1530px] h-[444px] bg-black mx-auto">
          <Image
            src={aboutData.aboutSection.backgroundImage.asset.url}
            alt="Team background"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>

        <div className="absolute inset-0 flex justify-center items-end">
          <div className="grid grid-cols-3 gap-8 font-sans text-center text-white bg-gray-400 opacity-90 px-6 py-4">
            {aboutData.statsSection.statItems.map((stat, index) => (
              <div key={index}>
                <h2 className="text-3xl md:text-5xl font-extrabold md:font-bold">{stat.statNumber}</h2>
                <p className="text-xs md:text-sm font-bold md:font-medium">{stat.statLabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div className="mt-6">
        <OurMission />
      </div>
      <div>
        <OurTeam />
      </div>
      <div>
        <Started />
      </div>
      <div>
        <Author />
      </div>
      <div>
        <JoinOurTeam />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
