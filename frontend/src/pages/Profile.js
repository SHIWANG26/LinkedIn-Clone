import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PostCard from '../components/PostCard';
import { getUserProfile, getUserPosts, updateProfile } from '../services/api';
import { getUser } from '../utils/auth';

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', bio: '' });
  const currentUser = getUser();
  const isOwnProfile = currentUser?.id === id;

  useEffect(() => {
    fetchProfile();
    fetchUserPosts();
  }, [id]);

  const fetchProfile = async () => {
    try {
      const response = await getUserProfile(id);
      setUser(response.data);
      setFormData({ name: response.data.name, bio: response.data.bio || '' });
    } catch (error) {
      console.error('Failed to load profile:', error);
    }
  };

  const fetchUserPosts = async () => {
    try {
      const response = await getUserPosts(id);
      setPosts(response.data);
    } catch (error) {
      console.error('Failed to load posts:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(formData);
      setIsEditing(false);
      fetchProfile();
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p className="profile-email">{user.email}</p>
            {user.bio && <p className="profile-bio">{user.bio}</p>}
          </div>
          {isOwnProfile && (
            <button onClick={() => setIsEditing(!isEditing)} className="btn btn-secondary">
              Edit Profile
            </button>
          )}
        </div>

        {isEditing && (
          <div className="edit-profile">
            <h3>Edit Profile</h3>
            <form onSubmit={handleUpdate}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="form-input"
                  rows="3"
                />
              </div>
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </form>
          </div>
        )}

        <div className="profile-posts">
          <h3>Posts</h3>
          {posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              onPostUpdated={fetchUserPosts}
              onPostDeleted={(postId) => setPosts(posts.filter(p => p._id !== postId))}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
