import React from 'react'
import Link from 'next/link' // Don't forget to import Link for navigation

function OurMission() {
  return (
    <div className='bg-white font-sans text-black'>
      {/* Progress Bar Section */}
      <div className='flex justify-end w-full max-w-screen-2xl mx-auto'>
                <div className='bg-[#00e785] rounded-l-full w-[200px] md:w-[843px] h-[15px] md:h-[23px]'></div>
                <div className='bg-gray-400 w-[100px] md:w-[282px]  md:mr-0 h-[15px] md:h-[23px]'></div>
            </div>

      {/* Main Content Section */}
      <div className='w-full max-w-screen-2xl  mx-auto bg-[#F4F0F8] py-16 px-4'>
        <div className='flex flex-wrap justify-between gap-8 p-10'>
          {/* About Us Section */}
          <div className='w-full lg:w-[48%]'>
            <p className='text-xl font-semibold mb-4 text-gray-700'>ABOUT US</p>
            <p className='text-3xl font-semibold mb-4'>
              We are a community of content writers who share their learnings
            </p>
            <p className='text-gray-600 mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href='#'>
              <span className='text-[#00e785] font-semibold hover:underline cursor-pointer'>
                Read More
              </span>
            </Link>
          </div>

          {/* Our Mission Section */}
          <div className='w-full lg:w-[48%]'>
            <p className='text-xl font-semibold mb-4 text-gray-700'>OUR MISSION</p>
            <p className='text-3xl font-semibold mb-4'>
              Creating valuable content for creatives all around the world
            </p>
            <p className='text-gray-600 mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            {/* <Link href='#'>
              <span className='text-[#00e785] font-semibold hover:underline cursor-pointer'>
                Read More
              </span>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurMission
