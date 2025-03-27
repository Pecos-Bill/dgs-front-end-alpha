
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://dgs-d4285877c95d.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// JWT Tokens
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;