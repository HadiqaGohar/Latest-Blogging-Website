'use client'
import React, { useEffect, useState } from 'react';
import { client } from '../../sanity/lib/client'; // Import Sanity client
import { FaBriefcase, FaRocket, FaPiggyBank, FaLaptop } from 'react-icons/fa'; // Import icons
import { BiSolidBank } from 'react-icons/bi';

// Define a type for category
type Category = {
  name: string;
  description: string;
  icon: string;
};


const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]); // Specify the type for categories

  // Fetch categories from Sanity
  useEffect(() => {
    const fetchCategories = async () => {
      const query = '*[_type == "category"]'; // Sanity query to fetch all categories
      const categoriesData = await client.fetch(query);
      setCategories(categoriesData); // Set the fetched categories in state
    };

    fetchCategories();
  }, []);

  return (
    
    <div className="w-full py-16 font-sans bg-white">
      {/* Section Heading */}
       {/* comment */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-700">Choose A Category</h2>
      </div>

      {/* Categories Container */}
      <div className="flex flex-wrap justify-center gap-8 mx-2">
        {/* Category Box */}
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-full sm:w-[296px] h-[228px] border border-gray-300 rounded-lg shadow-lg hover:bg-green-200 transition duration-300"
          >
            <div className="h-[60px] w-[60px] flex items-center justify-center">
              {/* Icons for each category */}
              {category.icon === 'FaBriefcase' && <FaBriefcase className="text-4xl text-[#00e785] hover:text-gray-600" />}
              {category.icon === 'FaRocket' && <FaRocket className="text-4xl text-[#00e785] hover:text-gray-600" />}
              {category.icon === 'FaPiggyBank' && <BiSolidBank className="text-4xl text-[#00e785] hover:text-gray-600" />}
              {category.icon === 'FaLaptop' && <FaLaptop className="text-4xl text-[#00e785] hover:text-gray-600" />}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
