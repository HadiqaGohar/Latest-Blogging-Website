'use client';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import AllPost from '../components/AllPost';
import Link from 'next/link';
import Categories from '../components/Catogories';
import JoinOurTeam from '../components/JoinOurTeam';
import Footer from '../components/Footer';
import Image from 'next/image';
import { client } from '../../sanity/lib/client';
import FeaturedPost from '../featuredPost/page';

type PostImage = {
  asset: {
    _id: string;
    url: string;
  };
};

type Slug = {
  current: string;
};

type Post = {
  _id: string;
  title: string;
  slug: Slug; // Updated type for slug
  category: string;
  description: string;
  mainImage: PostImage;
};

function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]); // State to manage visible posts
  const [showAll, setShowAll] = useState(false); // State to toggle visibility of posts

  // Fetch posts from Sanity using GROQ query
  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"]{
        _id,
        title,
        slug,
        category,
        description,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      }`;

      const data = await client.fetch(query);
      setPosts(data);
      setVisiblePosts(data.slice(0, 3)); // Initially show only 3 posts
    };

    fetchPosts();
  }, []);

  // Function to handle "View More" button click
  const handleViewMore = () => {
    setVisiblePosts(posts); // Show all posts
    setShowAll(true); // Set the toggle state to show all posts
  };

  return (
    <div>
      <Header />
      <div className="mx-auto font-sans">
        {/* Featured Post Section */}
        <FeaturedPost />

        {/* All Posts Section */}
        <div className="max-w-screen-2xl mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">All Posts</h2>
          <div className="h-[2px] bg-gray-300 mb-8"></div>

          <div className="space-y-8">
            {visiblePosts.length > 0 ? (
              visiblePosts.map((post) => (
                <div key={post._id} className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-[490px] h-auto md:h-[318px] bg-gray-300 rounded-lg flex items-center justify-center">
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      width={515}
                      height={356}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold md:mt-20 text-green-500 mb-2">{post.category}</h3>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{post.title}</h2>
                    <p className="text-gray-600">{post.description}</p>
                    <Link href={`/blog/${post.slug.current}`}>
                      <button
                        className="mt-4 bg-[#00e785] text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 hover:bg-[#00c66d] focus:outline-none focus:ring-2 focus:ring-[#00e785] focus:ring-offset-2"
                      >
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading posts...</p>
            )}
          </div>

          {/* Static Previous and Next buttons */}
          <div className="mt-8 flex justify-center gap-4 font-bold items-center">
            {!showAll && (
              <button
                className="text-white bg-gradient-to-r from-green-400 to-teal-400 hover:from-teal-400 hover:to-green-400 font-semibold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out border-2 border-transparent hover:border-green-300"
                onClick={handleViewMore}
              >
                View More
              </button>
            )}
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
