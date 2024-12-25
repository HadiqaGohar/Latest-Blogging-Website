import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import OurMission from '../components/OurMission';
import OurTeam from '../components/OurTeam';
import Started from '../components/Started';
import Author from '../components/Author';
import JoinOurTeam from '../components/JoinOurTeam';
import Footer from '../components/Footer';

function About() {
    return (
        <div>
            {/* Header */}
            <div>
                <Header />
            </div>

            {/* About Section */}
            <div className="max-w-screen-lg font-sans mx-auto py-12 px-6">
                <div className="absolute z-10 flex bg-white shadow-lg p-6 justify-between rounded-md">
                    <span className="p-4">
                        <h2 className="text-sm md:text-md font-bold text-gray-600">ABOUT US</h2>
                        <hr className="w-16 border-4 border-[#00e785] mb-4 rounded-full" />
                        <h3 className="text-lg md:text-3xl font-semibold text-gray-700 mb-4">
                            We are a team of <br /> content writers who <br /> share their learnings.
                        </h3>
                    </span>
                </div>

                {/* Paragraph - Hidden on small devices */}
                <p className="text-gray-600  my-6 mx-auto text-center md:text-left md:ml-[500px] hidden sm:block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br />
                    enim ad minim veniam, quis nostrud exercitation ullamco <br />
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

            {/* Stats Section */}
            <div className="max-w-screen-2xl relative -mt-10 mx-auto">
                {/* Background Image */}
                <div className="md:w-[1530px] h-[444px] bg-black mx-auto">
                    <Image
                        src="/home/img2.jpeg"
                        alt="Team background"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                    />
                </div>

                {/* Stats Overlay */}
                <div className="absolute inset-0 flex justify-center items-end">
                    <div className="grid grid-cols-3 gap-8 font-sans text-center text-white bg-gray-400 opacity-90 px-6 py-4">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-extrabold md:font-bold">12+</h2>
                            <p className="text-xs md:text-sm font-bold md:font-normal">Blogs Published</p>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-5xl font-extrabold md:font-bold">18+</h2>
                            <p className="text-xs md:text-sm font-bold md:font-normal">Views on Finweet</p>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-5xl font-extrabold md:font-bold">30+</h2>
                            <p className="text-xs md:text-sm font-bold md:font-normal">Total Active Users</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Sections */}
            <div className='mt-6'>
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
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default About;
