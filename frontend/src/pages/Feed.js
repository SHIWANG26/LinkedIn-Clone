import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';
import { getAllPosts } from '../services/api';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPosts = async () => {
    try {
      const response = await getAllPosts();
      setPosts(response.data);
    } catch (err) {
      setError('Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostDeleted = (postId) => {
    setPosts(posts.filter(post => post._id !== postId));
  };

  return (
    <div>
      <Navbar />
      <div className="feed-container">
        <CreatePost onPostCreated={fetchPosts} />
        {loading && <div className="loading">Loading posts...</div>}
        {error && <div className="error-message">{error}</div>}
        <div className="posts-list">
          {posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              onPostUpdated={fetchPosts}
              onPostDeleted={handlePostDeleted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
