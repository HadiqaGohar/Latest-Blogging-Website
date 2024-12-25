import React from 'react';
import Image from 'next/image';

function Testimonials() {
    return (
        <div className="bg-white py-16">
            <div className='flex justify-end w-full max-w-screen-xl mx-auto'>
                <div className='bg-[#00e785] rounded-l-full w-[200px] md:w-[843px] h-[15px] md:h-[23px]'></div>
                <div className='bg-gray-400 w-[100px] md:w-[282px] mr-4 md:mr-0 h-[15px] md:h-[23px]'></div>
            </div>
            <div className="max-w-screen-2xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">

                <div className='w-full lg:w-[1284px] lg:h-[344px] mx-auto px-8 bg-gray-100 flex flex-col lg:flex-row items-center gap-12'>
                    {/* Section Heading */}
                    <div className="text-center lg:text-left lg:w-1/2">
                        <h2 className="text-xl mt-10 md:mt-0 font-semibold text-gray-800">TESTIMONIALS</h2>
                        <h3 className="text-3xl text-gray-600 mt-2 leading-relaxed font-medium">
                            What people say <span className="block">about our blog</span>
                        </h3>
                        <p className="text-sm text-gray-500 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="hidden lg:block w-[1px] h-60 bg-gray-300"></div>

                    {/* Testimonial */}
                    <div className="w-full lg:w-2/4 p-8 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-6 leading-relaxed">
    &quot;Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> 
    eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.&quot;
</h4>

                        <div className="flex items-center">
                            <div className="relative w-14 h-14 rounded-full overflow-hidden">
                                <Image
                                    src="/home/author/img4.jpeg" // Replace with actual image path
                                    alt="Portrait of John Doe"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-800">John Doe</h3>
                                <p className="text-sm text-gray-500">New York, USA</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Testimonials;
