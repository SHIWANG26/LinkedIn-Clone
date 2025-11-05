import React, { useState } from 'react';
import { toggleLike, addComment, deletePost, updatePost } from '../services/api';
import { getUser } from '../utils/auth';

const PostCard = ({ post, onPostUpdated, onPostDeleted }) => {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(post.content);
  const currentUser = getUser();

  const handleLike = async () => {
    try {
      await toggleLike(post._id);
      onPostUpdated();
    } catch (error) {
      console.error('Failed to like post:', error);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    try {
      await addComment(post._id, commentText);
      setCommentText('');
      onPostUpdated();
    } catch (error) {
      console.error('Failed to add comment:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(post._id);
        onPostDeleted(post._id);
      } catch (error) {
        console.error('Failed to delete post:', error);
      }
    }
  };

  const handleEdit = async () => {
    try {
      await updatePost(post._id, editContent);
      setIsEditing(false);
      onPostUpdated();
    } catch (error) {
      console.error('Failed to update post:', error);
    }
  };

  const isLiked = post.likes?.includes(currentUser?.id);
  const isOwner = post.user?._id === currentUser?.id;

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="post-user-info">
          <h4>{post.user?.name}</h4>
          <span className="post-time">
            {new Date(post.createdAt).toLocaleString()}
          </span>
        </div>
        {isOwner && (
          <div className="post-actions">
            <button onClick={() => setIsEditing(!isEditing)} className="btn-icon">
              ✏️
            </button>
            <button onClick={handleDelete} className="btn-icon">
              🗑️
            </button>
          </div>
        )}
      </div>

      <div className="post-content">
        {isEditing ? (
          <div className="edit-section">
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              className="edit-textarea"
            />
            <button onClick={handleEdit} className="btn btn-sm">Save</button>
            <button onClick={() => setIsEditing(false)} className="btn btn-sm btn-secondary">
              Cancel
            </button>
          </div>
        ) : (
          <p>{post.content}</p>
        )}
      </div>

      <div className="post-footer">
        <button onClick={handleLike} className={`btn-like ${isLiked ? 'liked' : ''}`}>
          👍 {post.likes?.length || 0} Likes
        </button>
        <button onClick={() => setShowComments(!showComments)} className="btn-comment">
          💬 {post.comments?.length || 0} Comments
        </button>
      </div>

      {showComments && (
        <div className="comments-section">
          <form onSubmit={handleComment} className="comment-form">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="comment-input"
            />
            <button type="submit" className="btn btn-sm">Post</button>
          </form>
          <div className="comments-list">
            {post.comments?.map((comment, index) => (
              <div key={index} className="comment">
                <strong>{comment.user?.name}</strong>
                <p>{comment.text}</p>
                <span className="comment-time">
                  {new Date(comment.createdAt).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
