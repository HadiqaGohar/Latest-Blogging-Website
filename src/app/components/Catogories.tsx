import React from 'react';
import { FaBriefcase, FaRocket, FaPiggyBank, FaLaptop } from 'react-icons/fa'; // Importing icons

const Categories = () => {
  return (
    <div className='w-full py-16 font-sans bg-white'>
      {/* Section Heading */}
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-semibold text-gray-700'>Choose A Category</h2>
      </div>

      {/* Categories Container */}
      <div className='flex flex-wrap justify-center gap-8'>
        {/* Category Box */}
        {['Business', 'Startup', 'Economy', 'Technology'].map((category, index) => (
          <div
            key={index}
            className='w-full sm:w-[296px] h-[228px] border border-gray-300 rounded-lg shadow-lg hover:bg-green-200 transition duration-300 '
          >
            <div className='h-[60px] w-[60px] flex items-center justify-center'>
              {/* Icons for each category */}
              {category === 'Business' && <FaBriefcase className='text-4xl text-[#00e785] hover:text-gray-600' />}
              {category === 'Startup' && <FaRocket className='text-4xl text-[#00e785] hover:text-gray-600' />}
              {category === 'Economy' && <FaPiggyBank className='text-4xl text-[#00e785] hover:text-gray-600' />}
              {category === 'Technology' && <FaLaptop className='text-4xl text-[#00e785] hover:text-gray-600' />}
            </div>
            <div className='p-4'>
              <h3 className='text-xl font-semibold text-gray-800'>{category}</h3>
              <p className='text-sm text-gray-600 mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ratione consectetur eos libero dicta quidem.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
