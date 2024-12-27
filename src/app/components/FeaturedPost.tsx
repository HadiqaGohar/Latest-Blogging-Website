'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client"; // Ensure client is configured properly

// Define a type for post
type Post = {
    _id: string;
    title: string;
    slug: { current: string };
    category: string;
    description: string;
    author: string;
    date: string;
};

async function fetchPosts() {
    const query = `*[_type == "post"]{
    _id,
    title,
    slug,
    category,
    description,
    author,
    date
  }`;

    const posts = await client.fetch(query);
    return posts;
}

const FeaturedPost = () => {
    const [posts, setPosts] = useState<Post[]>([]); // Specify the type for posts
    const [visiblePosts, setVisiblePosts] = useState<Post[]>([]); // Specify the type for visiblePosts
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const getPosts = async () => {
            const fetchedPosts = await fetchPosts();
            setPosts(fetchedPosts);
            setVisiblePosts(fetchedPosts.slice(0, 3)); // Show the first 3 posts initially
        };
        getPosts();
    }, []);

    const handleViewMore = () => {
        setVisiblePosts(posts); // Show all posts
        setShowAll(true); // Update state to show all
    };

    const handleHideAll = () => {
        setVisiblePosts(posts.slice(0, 3)); // Show the first 3 posts again
        setShowAll(false); // Update state to hide posts
    };

    return (
        <div className="bg-white px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-wrap w-full justify-around mx-auto max-w-screen-2xl gap-8">
                {/* Featured Post Section */}
                 {/* comment */}
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
                            Master the art of font pairing with our step-by-step guide. Learn
                            tips, tricks, and techniques to create visually stunning and
                            cohesive typography.
                        </p>
                        <Link href="/blog/step-by-step-guide-to-choosing-great-font-pairs">
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
                        {!showAll && (
                            <button
                                className="my-6 text-[#00e785] font-bold"
                                onClick={handleViewMore}
                            >
                                View All
                            </button>
                        )}
                        {showAll && (
                            <button
                                className="my-6 text-violet-500 font-bold"
                                onClick={handleHideAll}
                            >
                                Hide All
                            </button>
                        )}
                    </div>

                    <div>
                        {visiblePosts.map((post, index) => (
                            <Link key={index} href={`/blog/${post.slug.current}`}>
                                <div className="mb-6 bg-green-100 hover:bg-[#6decb7] p-5 rounded-lg transition-all">
                                    <p className="text-sm text-gray-500">
                                        By {post.author} | {new Date(post.date).toLocaleDateString()}
                                    </p>
                                    <h3 className="text-gray-700 text-lg font-medium mt-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-700 text-md font-medium mt-2">
                                        {post.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedPost;
