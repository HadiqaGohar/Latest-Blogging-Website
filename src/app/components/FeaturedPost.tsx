import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function FeaturedPost() {
    const posts = [
        { date: "Aug 23, 2021", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptates dolorem amet." },
        { date: "Jul 12, 2021", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptates dolorem amet." },
        { date: "Jun 5, 2021", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptates dolorem amet." },
        { date: "May 1, 2021", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptates dolorem amet." }
    ];

    return (
        <div className="bg-white px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-wrap w-full justify-around mx-auto max-w-screen-2xl gap-8">

                {/* Featured Post Section */}
                <div className="w-full lg:w-[55%] p-4 text-gray-600">
                    <h2 className="text-2xl font-bold my-6">Featured Post</h2>
                    <div className="w-full border p-6 rounded-lg">
                        <div className="w-full h-auto mb-4">
                            <Image
                                src="/home/img1.jpeg"
                                alt="Featured Post Image"
                                width={700}
                                height={350}
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <p className="text-sm text-gray-500">By John Doe | May 23, 2022</p>
                        <h3 className="text-xl font-semibold my-4">
                            Step-by-step guide to choosing great font pairs
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores alias optio et magnam laboriosam?
                            Quasi at eligendi molestias ut blanditiis amet accusamus omnis nostrum.
                        </p>
                        <Link href="/blog/1">
                            <button className="bg-[#00e785] text-black px-6 py-3 rounded-md hover:bg-[#00c66d] focus:outline-none">
                                Read More
                            </button>
                        </Link>
                    </div>
                </div>

                {/* All Posts Section */}
                <div className="w-full lg:w-[35%] p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold my-6 text-gray-600">All Posts</h2>
                        <Link href="/" className="my-6 text-[#00e785] font-bold">
                            View All
                        </Link>
                    </div>
                    <div>
                        {posts.map((post, index) => (
                            <div key={index} className="mb-6 bg-green-100 hover:bg-[#6decb7] p-5 rounded-lg transition-all">
                                <p className="text-sm text-gray-500">By John Doe | {post.date}</p>
                                <p className="text-gray-700 text-lg font-medium mt-2">{post.content}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FeaturedPost;
