'use client'
import React, { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client'; // Importing the correct sanityClient
import Link from 'next/link';

const JoinOurTeam: React.FC = () => {
  const [content, setContent] = useState({
    heading: '',
    subText: '',
    buttonText: '',
  });

  useEffect(() => {
    const fetchJoinOurTeamText = async () => {
      const query = `*[_type == "joinOurTeamText"]{
        heading,
        subText,
        buttonText
      }`;

      try {
        const data = await client.fetch(query); // Use 'client' instead of 'sanityClient'
        if (data.length > 0) {
          setContent(data[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchJoinOurTeamText();
  }, []);

  if (!content.heading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-50 font-sans py-16">
      <div className="w-full max-w-md mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800">
          {content.heading}
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          {content.subText}
        </p>
      <Link href='/about'>
      <button
          className="mt-8 bg-[#00e785] text-black px-6 py-3 rounded-lg hover:bg-[#00c66d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00e785] transition duration-300"
          aria-label="Discover our story"
        >
          {content.buttonText}
        </button>
      </Link>
      </div>
    </div>
  );
};

export default JoinOurTeam;
