// src/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://dgs.herokuapp.com', // Your Flask API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if logged in
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;