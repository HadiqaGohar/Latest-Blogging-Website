'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Comment {
  _id: string;
  content: string;
  date: string;
  author: string;
  img: string | null;
}

interface CommentsProps {
  postId: string;
  initialComments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({ postId, initialComments }) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState<File | null>(null);

  const handleAddComment = async () => {
    if (newComment.trim()) {
      const commentData = {
        content: newComment,
        date: new Date().toLocaleDateString(),
        author: userName || 'Anonymous',
        image: userImage ? URL.createObjectURL(userImage) : null,
        postId,
      };

      try {
        const response = await fetch('/api/addComment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(commentData),
        });

        if (response.ok) {
          const addedComment = await response.json();
          setComments((prev) => [...prev, addedComment]);
          setNewComment('');
          setUserName('');
          setUserImage(null);
        } else {
          console.error('Failed to add comment');
        }
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <div key={comment._id} className="comment">
          <Image
            src={comment.img || '/default-avatar.png'}
            alt={comment.author}
            width={50}
            height={50}
          />
          <div>
            <p>{comment.author}</p>
            <p>{comment.date}</p>
            <p>{comment.content}</p>
          </div>
        </div>
      ))}

      <div className="add-comment">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add your comment"
          className="comment-box"
        />
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your name"
          className="name-input"
        />
        <input
          type="file"
          onChange={(e) =>
            setUserImage(e.target.files ? e.target.files[0] : null)
          }
          className="file-input"
        />
        <button onClick={handleAddComment} className="submit-btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Comments;
