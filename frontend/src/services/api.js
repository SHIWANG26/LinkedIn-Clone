import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const register = (userData) => api.post('/auth/register', userData);
export const login = (userData) => api.post('/auth/login', userData);
export const getCurrentUser = () => api.get('/auth/me');

// Post APIs
export const createPost = (postData) => api.post('/posts', postData);
export const getAllPosts = () => api.get('/posts');
export const getUserPosts = (userId) => api.get(`/posts/user/${userId}`);
export const updatePost = (postId, content) => api.put(`/posts/${postId}`, { content });
export const deletePost = (postId) => api.delete(`/posts/${postId}`);
export const toggleLike = (postId) => api.post(`/posts/${postId}/like`);
export const addComment = (postId, text) => api.post(`/posts/${postId}/comment`, { text });

// User APIs
export const getUserProfile = (userId) => api.get(`/users/${userId}`);
export const updateProfile = (profileData) => api.put('/users/profile', profileData);

export default api;
