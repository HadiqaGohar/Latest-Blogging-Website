'use client';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import JoinOurTeam from '@/app/components/JoinOurTeam';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaThumbsUp, FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importing icons
import ReadNext from '@/app/components/ReadNext';

const comments = [
    { id: 1, date: "Aug 23, 2021", author: "Hadiqa Gohar", img: "/home/img1.jpeg", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptates dolorem amet.", likeCount: 0 },
];

const posts = [
    {
        id: 1,
        img1: '/home/author/img1.jpeg',
        author: "Andrew Jonson",
        date: "Posted on 27th January 2022",
        title: "Step-by-step guide to choosing great font pairs",
        category: 'Startup',
        img2: '/home/img2.jpeg',
        heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 2,
        img1: '/home/author/img2.jpeg',
        author: "John Doe",
        date: "Posted on 15th February 2022",
        title: "How to build rapport with your web design clients",
        category: 'Business',
        img2: '/home/img2.jpeg',
        heading: 'A guide to understanding client expectations and delivering excellent results.',
        paragraph: 'Building a solid rapport with your clients can greatly influence the outcome of your projects. Here are some key strategies to ensure smooth collaborations.'
    },
    {
        id: 3,
        img1: '/home/author/img3.jpeg',
        author: "Jane Smith",
        date: "Posted on 5th March 2022",
        title: "Logo design trends to avoid in 2022",
        category: 'Design',
        img2: '/home/img2.jpeg',
        heading: 'What trends are fading away and why you should avoid them.',
        paragraph: 'As the design world evolves, so do the trends. Learn which outdated trends should be avoided in 2022 and how to create a timeless logo.'
    },
    {
        id: 4,
        img1: '/home/author/img4.jpeg',
        author: "Michael Brown",
        date: "Posted on 20th March 2022",
        title: "8 Figma design systems you can download for free today",
        category: 'Technology',
        img2: '/home/img2.jpeg',
        heading: 'Explore the best free design systems in Figma to speed up your workflow.',
        paragraph: 'Figma has become one of the most powerful tools for design teams. Here are eight free design systems you can implement right now.'
    },
    {
        id: 5,
        img1: '/home/author/img1.jpeg',
        author: "Sophia Davis",
        date: "Posted on 12th April 2022",
        title: "Font sizes in UI design: The complete guide to follow",
        category: 'UI/UX Design',
        img2: '/home/img2.jpeg',
        heading: 'A deep dive into font sizes and their role in user interface design.',
        paragraph: 'Choosing the right font size is crucial in UI design. This guide covers everything from legibility to the impact on user experience.'
    }
];

function BlogId({ params }: { params: { id: string } }) {
    const { id } = params;
    const [newComment, setNewComment] = useState('');
    const [editableComments, setEditableComments] = useState<{ [key: number]: string }>({});
    const [commentsList, setCommentsList] = useState(comments);

    const handleAddComment = () => {
        if (newComment) {
            setCommentsList((prevComments) => [
                ...prevComments,
                {
                    id: prevComments.length + 1,
                    date: new Date().toLocaleDateString(),
                    author: 'Anonymous', // Default author
                    img: '/default-avatar.png', // Default avatar
                    content: newComment,
                    likeCount: 0,
                },
            ]);
            setNewComment('');
        }
    };

    const handleEditComment = (id: number) => {
        const commentToEdit = commentsList.find((comment) => comment.id === id);
        if (commentToEdit) {
            setEditableComments((prev) => ({ ...prev, [id]: commentToEdit.content }));
        }
    };

    const handleSaveEdit = (id: number) => {
        const updatedComments = commentsList.map((comment) =>
            comment.id === id ? { ...comment, content: editableComments[id] } : comment
        );
        setCommentsList(updatedComments);
        setEditableComments((prev) => ({ ...prev, [id]: '' }));
    };

    // Delete comment handler
    const handleDeleteComment = (id: number) => {
        const updatedComments = commentsList.filter((comment) => comment.id !== id);
        setCommentsList(updatedComments);
    };

    // Like handler for individual comments
    const handleLike = (id: number) => {
        const updatedComments = commentsList.map((comment) =>
            comment.id === id ? { ...comment, likeCount: comment.likeCount + 1 } : comment
        );
        setCommentsList(updatedComments);
    };

    // Find the post by id from the posts array
    const post = posts.find(post => post.id === parseInt(id));

    if (!post) {
        return <p>Post not found.</p>;
    }

    return (
        <div>
            <Header />
            <div className="max-w-screen-2xl font-sans mx-auto px-6 py-12">
                <div className="flex flex-col gap-8 my-12">
                    <div className="flex flex-row items-start justify-start">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            <Image
                                src={post.img1}
                                alt={post.author}
                                className="w-full h-full object-cover"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-xl font-bold">{post.author}</h3>
                            <p className="text-gray-600">{post.date}</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="text-4xl font-bold text-gray-800 mb-6">
                           {post.title}
                        </h3>
                        <h5 className="text-2xl font-semibold  text-green-500 mb-2">{post.category}</h5>
                    </div>
                </div>

                <div className="mb-12">
                    <div className="w-full bg-gray-300 mb-6 rounded-lg flex items-center justify-center">
                        <Image
                            src={post.img2}
                            alt="Post image"
                            width={1440}
                            height={600}
                            className="rounded-md object-cover w-full h-[600px] sm:h-[400px]"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-around">
                    <div className="mb-8">
                        <div>
                            <h3 className="text-3xl font-semibold text-gray-800">
                               {post.heading}
                            </h3>
                            <p className="text-gray-600 mt-4">
                                {post.paragraph}
                            </p>
                        </div>
                    </div>

                    {/* Divider only visible on md screens and up */}
                    <div className="hidden md:block h-[400px] w-0.5 bg-gray-300"></div>

                    {/* All Comments Section */}
                    <div className="w-full lg:w-[35%] p-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold my-6 text-gray-600">Comments</h2>
                            <Link href="/" className="my-6 text-[#00e785] font-bold">
                                View All
                            </Link>
                        </div>
                        <div>
                            {commentsList.map((comment) => (
                                <div key={comment.id} className="mb-6 bg-green-100 p-4 rounded-lg">
                                    {/* author name */}
                                    <div className='flex'>
                                        <Image
                                            src={comment.img}
                                            width={40}
                                            height={40}
                                            alt={''}
                                            className='rounded-full h-[40px] w-[40px] object-cover mr-4'
                                        />
                                        <div className='flex flex-col md:flex-row'>
                                            <p className="text-md mt-2 font-black text-gray-500">{comment.author}</p>
                                            <p className="text-sm lg:ml-24 text-gray-500 mt-2">{comment.date}</p>
                                        </div>
                                    </div>

                                    {editableComments[comment.id] ? (
                                        <div className="flex flex-col mt-2">
                                            <textarea
                                                value={editableComments[comment.id]}
                                                onChange={(e) => setEditableComments({ ...editableComments, [comment.id]: e.target.value })}
                                                rows={3}
                                                className="p-2 border rounded-md"
                                            />
                                            <button
                                                onClick={() => handleSaveEdit(comment.id)}
                                                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    ) : (
                                        <p className="text-gray-600 mt-2">{comment.content}</p>
                                    )}

                                    <div className="mt-2 flex justify-start">
                                        <button
                                            className="flex items-center justify-center px-2 py-2  text-gray-600 rounded-md mr-2"
                                            onClick={() => handleLike(comment.id)}
                                        >
                                            <FaThumbsUp className="mr-1" /> {comment.likeCount}
                                        </button>

                                        <button
                                            onClick={() => handleEditComment(comment.id)}
                                            className="flex items-center justify-center px-2 py-2  text-gray-600 rounded-md mr-2"
                                        >
                                            <FaEdit />
                                        </button>

                                        <button
                                            onClick={() => handleDeleteComment(comment.id)}
                                            className="flex items-center justify-center px-2 py-2  text-gray-600 rounded-md mr-2"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4">
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                rows={4}
                                className="w-full p-2 border rounded-md"
                                placeholder="Add a comment"
                            ></textarea>
                            <button
                                onClick={handleAddComment}
                                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                            >
                                Add Comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <JoinOurTeam />
            <Footer />
        </div>
    );
}

export default BlogId;
