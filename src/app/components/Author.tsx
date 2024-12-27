'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { client } from '../../sanity/lib/client'; // Assuming your sanity client is set up

// Define types for author and socialLinks
 {/* comment */}
type SocialLink = {
  platform: string;
  url: string;
};

type Author = {
  name: string;
  role: string;
  image: {
    asset: {
      url: string;
    };
  };
  socialLinks: SocialLink[];
};

// Define the type for the fetched authors
const fetchAuthors = async (): Promise<Author[]> => {
  const query = `*[_type == "author"]{
    name,
    role,
    image {
      asset->{
        url
      }
    },
    socialLinks
  }`;

  const data = await client.fetch(query);
  return data;
};

const Author = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const getAuthors = async () => {
      const data = await fetchAuthors();
      setAuthors(data);
    };
    getAuthors();
  }, []);

  return (
    <div className="w-full py-16 bg-white font-sans">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">List of Authors</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {authors.map((author, index) => (
            <div
              key={index}
              className="hover:bg-green-100 text-center border-2 bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <div className="w-24 h-24 border-4 border-green-400 mx-auto mb-4 rounded-full overflow-hidden bg-red-200">
                {/* Author Image */}
                <Image
                  src={author.image.asset.url}
                  alt={`${author.name}'s Picture`}
                  width={96}
                  height={96}
                  className="object-cover w-24 h-24"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{author.name}</h3>
              <p className="text-sm text-gray-600">{author.role}</p>

              {/* Social Media Icons */}
              <div className="flex justify-center mt-4 space-x-4">
                {author.socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    className={`text-gray-600 hover:text-${social.platform === 'facebook' ? 'blue-600' : social.platform === 'twitter' ? 'blue-400' : social.platform === 'instagram' ? 'pink-600' : 'blue-700'}`}
                  >
                    {social.platform === 'facebook' && <FaFacebook size={20} />}
                    {social.platform === 'twitter' && <FaTwitter size={20} />}
                    {social.platform === 'instagram' && <FaInstagram size={20} />}
                    {social.platform === 'linkedin' && <FaLinkedin size={20} />}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Author;
