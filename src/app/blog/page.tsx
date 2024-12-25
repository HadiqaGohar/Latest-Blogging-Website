import React from 'react'
import Header from '../components/Header'
import AllPost from '../components/AllPost'
import Link from 'next/link'
import Categories from '../components/Catogories'
import JoinOurTeam from '../components/JoinOurTeam'
import Footer from '../components/Footer'
import Image from 'next/image'

function Blog() {

    const posts = [
        {
            id: 1,
            href: "/blog/1",
            img: '/home/img1.jpeg',
            category: 'STARTUP',
            title: 'Design tips for designers that cover everything you need',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
            id: 2,
            href: "/blog/2",
            img: '/home/img1.jpeg',
            category: 'BUSINESS',
            title: 'How to build rapport with your web design clients',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
            id: 3,
            href: "/blog/3",
            img: '/home/img1.jpeg',
            category: 'STARTUP',
            title: 'Logo design trends to avoid in 2022',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
            id: 4,
            href: "/blog/4",
            img: '/home/img1.jpeg',
            category: 'TECHNOLOGY',
            title: '8 Figma design systems you can download for free today',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        {
            id: 5,
            href: "/blog/5",
            img: '/home/img1.jpeg',
            category: 'ECONOMY',
            title: 'Font sizes in UI design: The complete guide to follow',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
    ];

    return (
        <div>
            <Header />
            <div className=" mx-auto font-sans">
                {/* Featured Post Section */}
                <div className="bg-[#f8f4ec] mx-auto px-6 py-12">
                    <div className="w-full max-w-screen-2xl mx-auto h-auto flex flex-col md:flex-row justify-center items-center gap-8 bg-[#f8f4ec]">
                        <div className="md:w-1/2">
                            <h2 className="text-2xl font-medium text-gray-600 mb-4 mt-20">Featured Post</h2>
                            <h3 className="text-4xl font-bold text-gray-800 mb-6">
                                <span className='text-yellow-500'>Step-by-step</span> guide to choosing great <br />font pairs
                            </h3>
                            <p className="text-gray-600 mb-4"><span className='text-violet-600'>By John Doe</span> | May 23, 2022</p>
                            <p className="text-gray-700 mb-6">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident.
                            </p>
                            <Link href='/blog/1'>
                                <button className="mt-4 bg-[#00e785] text-black px-6 py-3 hover:bg-[#00c66d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00e785] transition duration-300">
                                    Read More
                                </button>
                            </Link>
                        </div>
                        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                            {/* Image Placeholder */}
                            <div className="w-full md:w-[515px] h-auto md:h-[356px]  rounded-lg flex items-center justify-center">
                                <Image src="/home/img1.jpeg" width={515} height={356} alt={''} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* All Posts Section */}
                <div className="max-w-screen-2xl mx-auto px-6 py-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">All Posts</h2>
                    <div className="h-[2px] bg-gray-300 mb-8"></div>

                    <div className="space-y-8">
                        {posts.map((post) => (
                            <div key={post.id} className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-[490px] h-auto md:h-[318px] bg-gray-300 rounded-lg flex items-center justify-center">
                                    <Image src={post.img} alt={''} width={515} height={356} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold md:mt-20 text-green-500 mb-2">{post.category}</h3>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{post.title}</h2>
                                    <p className="text-gray-600">{post.description}</p>
                                    <Link href={post.href}>
                                        <button className="mt-4 bg-[#00e785] text-black px-6 py-3 hover:bg-[#00c66d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00e785] transition duration-300">
                                            Read More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Static Previous and Next buttons */}
                    <div className="mt-8 flex justify-center gap-4 font-bold items-center">
                        <button className="text-gray-500 hover:text-gray-700">View More</button>
                    </div>
                </div>
            </div>

            <Categories />
            <JoinOurTeam />
            <Footer />
        </div>
    );
}

export default Blog;
