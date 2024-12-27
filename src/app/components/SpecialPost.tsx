'use client'
import React, { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client'; // Import the Sanity client
import Link from 'next/link';

// Define the type for the post data
interface PostData {
  backgroundImage: {
    asset: {
      url: string;
    };
  } | null;
  heading: string;
  subheading: string;
  description: string;
  linkUrl: string;
  buttonText: string;
}

async function fetchSpecialPost(): Promise<PostData> {
  const query = `*[_type == "specialPost"][0]{
    backgroundImage {
      asset->{
        url
      }
    },
    heading,
    subheading,
    description,
    linkUrl,
    buttonText
  }`;

  const data = await client.fetch(query);
  return data;
}

const SpecialPost = () => {
  const [postData, setPostData] = useState<PostData | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchSpecialPost();
      setPostData(data);
    };

    getData();
  }, []);

  if (!postData) return <div>Loading...</div>;

  // Check if the background image exists
  const backgroundImageUrl = postData.backgroundImage?.asset?.url || '/default-image.jpg'; // Fallback to a default image
  const linkUrl = postData.linkUrl || '#'; // Fallback to a placeholder URL if null

  return (
    <section className="bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center">
          {/* Background Image Section */}
          <div
            className="relative w-full h-[60vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat rounded-lg"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
            }}
          ></div>
 {/* comment */}
          {/* Text Section */}
          <div className="absolute bg-white bg-opacity-90 p-8 rounded-lg shadow-lg lg:w-1/3 lg:h-auto lg:ml-8 transform lg:transform-none top-1/2 left-1/2 lg:top-auto lg:left-auto -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 lg:translate-y-0">
            <h5 className="text-sm md:text-xl font-semibold text-gray-700">{postData.subheading}</h5>
            <h2 className="text-lg md:text-3xl font-semibold text-gray-800 mt-2">
              {postData.heading}
            </h2>
            <p className="text-xs hidden md:block md:text-sm text-gray-600 mt-4">
              {postData.description}
            </p>
            <Link href='/about'>
              <button
                className="mt-8 bg-[#00e785] text-sm md:text-lg text-black px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-[#00c66d] focus:outline-none focus:ring-2 focus:ring-[#00c66d] focus:ring-offset-2"
                aria-label="Discover our story"
              >
                {postData.buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialPost;
