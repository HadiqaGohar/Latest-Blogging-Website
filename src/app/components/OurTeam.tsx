import React from 'react';
import Image from 'next/image';

function OurTeam() {
    return (
        <div className="flex font-sans flex-col lg:flex-row max-w-screen-2xl mx-auto py-12 px-6 gap-20">
            {/* Content Section */}
            <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-24">Our Team of Creatives</h2>
                <hr className='w-56 border-4 border-yellow-300 rounded-r-full'/>
                <h4 className="text-xl text-gray-700 mb-4 mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </h4>
                <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat.
                </p>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 flex flex-col gap-6">
                {/* Large Background Image */}
                <div className="relative w-full h-[480px] bg-gray-800 overflow-hidden rounded-md">
                    <Image
                        src="/home/img2.jpeg" // Replace with your actual image path
                        alt="Our Team"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                    />
                </div>

                {/* Small Decorative Image */}
                <div className="absolute -ml-14 mt-20 flex justify-center">
                    <Image
                        src="/shapes.png" // Replace with your actual image path
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
}

export default OurTeam;
