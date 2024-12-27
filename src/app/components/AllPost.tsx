'use client'; // Add this line to mark the component as a Client Component

import React from 'react';
import Categories from './Catogories';
import JoinOurTeam from './JoinOurTeam';
import Footer from './Footer';

const posts = [
    {
        category: 'STARTUP',
        title: 'Design tips for designers that cover everything you need',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        category: 'BUSINESS',
        title: 'How to build rapport with your web design clients',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        category: 'STARTUP',
        title: 'Logo design trends to avoid in 2022',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        category: 'TECHNOLOGY',
        title: '8 Figma design systems you can download for free today',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        category: 'ECONOMY',
        title: 'Font sizes in UI design: The complete guide to follow',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
];

const AllPost = () => {
    // This code assumes static display and will show all posts at once
     {/* comment */}
    return (
        <div>
            <div className="w-full max-w-screen-2xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">All Posts</h2>
                <div className="h-[2px] bg-gray-300 mb-8"></div>
                <div className="space-y-8 w-[1147px] h-[1846px]">
                    {posts.map((post, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6 w-[1146px] h-[318px]">
                            <div className="w-full md:w-[490px] h-[318px] bg-gray-300 rounded-lg flex items-center justify-center">
                                <p className="text-gray-500">Image Placeholder</p>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-green-500 mb-2 mt-10">{post.category}</h3>
                                <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-8">{post.title}</h2>
                                <p className="text-gray-600 mt-4">{post.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Static Previous and Next buttons */}
                <div className="mt-8 flex justify-center gap-4 font-bold items-center">
                    <button className="text-gray-500 hover:text-gray-700">← Previous</button>
                    <button className="text-gray-500 hover:text-gray-700">Next →</button>
                </div>


            </div>
            <div>
                <Categories />
            </div>
            <div>
                <JoinOurTeam />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default AllPost;


