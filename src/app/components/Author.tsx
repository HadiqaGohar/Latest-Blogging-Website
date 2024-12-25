import React from 'react';
import Image from 'next/image'; // For Next.js optimized images
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons

function Author() {
  const authors = [
    { name: 'Floyd Miles', role: 'Content Writer @Company', image: '/home/author/img4.jpeg' },
    { name: 'John Doe', role: 'Content Writer @Company', image: '/home/author/img3.jpeg' },
    { name: 'Jenny Wilson', role: 'Content Writer @Company', image: '/home/author/img2.jpeg' },
    { name: 'Leslie Alexander', role: 'Content Writer @Company', image: '/home/author/img1.jpeg' },
  ];

  return (
    <div className="w-full py-16 bg-white font-sans">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">List of Authors</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {authors.map((author, index) => (
            <div
              key={index}
              className="hover:bg-green-300 text-center bg-green-100 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <div className="w-24 h-24 border-4 border-green-400  mx-auto mb-4 rounded-full overflow-hidden bg-red-200">
                {/* Author Image */}
                <Image 
                  src={author.image} 
                  alt={`${author.name}'s Picture`} 
                  width={96} 
                  height={96} 
                  className="object-cover w-24 h-24"  // Ensures the entire image is shown
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{author.name}</h3>
              <p className="text-sm text-gray-600">{author.role}</p>
              
              {/* Social Media Icons */}
              <div className="flex justify-center mt-4 space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-400">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-700">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Author;
