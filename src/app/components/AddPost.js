import React, { useState } from 'react';
import { client } from '../../sanity/lib/client';  // Sanity client for posting to the backend

function AddPost() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [mainImage, setMainImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setMainImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !category || !description || !mainImage) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Upload image to Sanity and get the image URL
      const imageAsset = await client.assets.upload('image', mainImage);
      const imageUrl = imageAsset.url;

      // Create the new post
      const postData = {
        _type: 'post',
        title,
        category,
        description,
        mainImage: {
          _type: 'image',
          asset: {
            _ref: imageAsset._id,
            _type: 'reference',
          },
        },
      };

      // Save the post in Sanity
      await client.create(postData);
      alert('Post added successfully!');
    } catch (error) {
      console.error('Error adding post:', error);
      alert('Failed to add the post');
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Add New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="text-lg">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="text-lg">Category</label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="text-lg">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md"
            rows={4}
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="text-lg">Upload Image</label>
          <input
            id="image"
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-md">Add Post</button>
      </form>
    </div>
  );
}

export default AddPost;
