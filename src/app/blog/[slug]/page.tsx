'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { client } from '../../../sanity/lib/client';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { FaThumbsUp, FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importing icons
import { PortableText } from 'next-sanity';
import JoinOurTeam from '@/app/components/JoinOurTeam';

interface Post {
  _id: string;
  title: string;
  author: string;
  date: string;
  category: string;
  img1: string;
  img2: string;
  heading: string;
  paragraph: any[]; // Use any[] to handle PortableText content correctly
}

async function fetchPostData(slug: string) {
  const postQuery = `*[_type == "post" && slug.current == $slug]{
    _id,
    title,
    author,
    authorprofileimg,
    date,
    category,
    "img1": authorprofileimg.asset->url,
    "img2": mainImage.asset->url,
    heading,
    paragraph
  }`;

  const params = { slug };
  const data = await client.fetch(postQuery, params);
  return data[0];
}

const BlogPost = ({ params }: { params: { slug: string } }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [editableComments, setEditableComments] = useState<{ [key: number]: string }>({});
  const [commentsList, setCommentsList] = useState([
    { id: 1, date: 'Aug 23, 2021', author: 'Hadiqa Gohar', img: '/home/img1.jpeg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptates dolorem amet.', likeCount: 0 },
  ]);
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState<File | null>(null);

  useEffect(() => {
    async function loadPostData() {
      const postData = await fetchPostData(params.slug);
      setPost(postData);
    }
    loadPostData();
  }, [params.slug]);

  const handleAddComment = () => {
    if (newComment) {
      setCommentsList((prevComments) => [
        ...prevComments,
        {
          id: prevComments.length + 1,
          date: new Date().toLocaleDateString(),
          author: userName || 'Anonymous', // Use user-provided name if available
          img: userImage ? URL.createObjectURL(userImage) : '/default-avatar.png', // Use user-provided image if available
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

  const handleDeleteComment = (id: number) => {
    const updatedComments = commentsList.filter((comment) => comment.id !== id);
    setCommentsList(updatedComments);
  };

  const handleLike = (id: number) => {
    const updatedComments = commentsList.map((comment) =>
      comment.id === id ? { ...comment, likeCount: comment.likeCount + 1 } : comment
    );
    setCommentsList(updatedComments);
  };

  if (!post) return <p>Loading...</p>;

  // Color
  const serializers = {
    types: {
      block: (props: any) => {
        const { children, style = 'normal', markDefs = [] } = props;

        // Check for color annotation
        const colorMark = markDefs.find((def: any) => def._type === 'color');
        const color = colorMark ? colorMark.color : null;

        return (
          <p style={{ color }}>
            {children}
          </p>
        );
      },
    },
  };

  return (
    <div>
      <Header />
      <div className="max-w-screen-2xl font-sans mx-auto px-6 py-12">
        <div className="flex flex-col gap-8 my-12">
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image src={post.img1} alt={post.author} className="w-full h-full object-cover" width={40} height={40} />
            </div>
            <div className="ml-6">
              <h3 className="text-xl mt-2 font-bold">{post.author}</h3>
              <p className="text-gray-600">{post.date}</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">{post.title}</h3>
            <h5 className="text-2xl font-semibold text-green-500 ">{post.category}</h5>
          </div>
        </div>

        <div className="mb-12">
          <div className="w-full bg-gray-300 mb-6 rounded-lg flex items-center justify-center">
            <Image src={post.img2} alt="Post image" width={1440} height={600} className="rounded-md object-cover w-full h-[600px] sm:h-[400px]" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="lg:w-[70%] mb-8">
            <div>
              <h3 className="text-3xl font-semibold text-gray-800">{post.heading}</h3>
              <p className="text-gray-600 md:text-lg mt-4">
                <PortableText value={post.paragraph} />
              </p>
            </div>
          </div>

          {/* Divider visible on md screens and up */}
          <div className="hidden md:block h-[400px] w-0.5 bg-gray-300"></div>

          {/* Comments Section */}
          <div className="w-full lg:w-[30%] p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold my-6 text-gray-600">Comments</h2>
              <button
                onClick={() => setCommentsVisible(!commentsVisible)} // Toggle the visibility of comments
                className="my-6 text-[#00e785] font-bold"
              >
                {commentsVisible ? 'Hide All' : 'View All'}
              </button>
            </div>

            {/* All Comments Section */}
            {commentsVisible && (
              <div>
                {commentsList.map((comment) => (
                  <div key={comment.id} className="mb-6 bg-green-100 p-4 rounded-lg">
                    <div className="flex">
                      <Image src={comment.img} width={40} height={40} alt={''} className="rounded-full h-[40px] w-[40px] object-cover mr-4" />
                      <div className="flex flex-col md:flex-row">
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
                        className="flex items-center justify-center px-2 py-2 text-gray-600 rounded-md mr-2"
                        onClick={() => handleLike(comment.id)}
                      >
                        <FaThumbsUp className="mr-1" /> {comment.likeCount}
                      </button>

                      <button
                        onClick={() => handleEditComment(comment.id)}
                        className="flex items-center justify-center px-2 py-2 text-gray-600 rounded-md mr-2"
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => handleDeleteComment(comment.id)}
                        className="flex items-center justify-center px-2 py-2 text-gray-600 rounded-md mr-2"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

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

            {/* Name and Image Upload Form */}
            <div className="mt-4">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your Name"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="file"
                onChange={(e) => setUserImage(e.target.files?.[0] ?? null)}
                className="mt-2 w-full p-2"
              />
            </div>
          </div>
        </div>
      </div>

      <JoinOurTeam />
      <Footer />
    </div>
  );
};

export default BlogPost;
