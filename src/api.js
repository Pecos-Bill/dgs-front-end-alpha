// src/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'dallasgoonersociety.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Automatically add JWT token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;