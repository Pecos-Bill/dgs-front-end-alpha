<template>
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {{ user.first_name }} {{ user.last_name }}!</p>
      <p>Email: {{ user.email }}</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  import apiClient from '../api';
  
  export default {
    data() {
      return {
        user: {},
      };
    },
    async created() {
      try {
        const response = await apiClient.get('/profile');
        this.user = response.data; // Load user data
      } catch (error) {
        console.error('Failed to load profile:', error);
        this.$router.push('/login'); // Redirect if token invalid
      }
    },
    methods: {
      logout() {
        localStorage.removeItem('access_token');
        this.$router.push('/login');
      },
    },
  };
  </script>