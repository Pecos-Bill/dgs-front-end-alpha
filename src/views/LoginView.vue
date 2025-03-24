<!-- src/views/LoginView.vue -->
<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="form.email" type="email" placeholder="Email" required />
        <input v-model="form.password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  import apiClient from '../api';
  
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        message: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await apiClient.post('/login', this.form);
          localStorage.setItem('access_token', response.data.access_token); // Store token
          this.message = 'Login successful';
          this.$router.push('/dashboard'); // Redirect to dashboard
        } catch (error) {
          this.message = error.response?.data?.error || 'Login failed';
        }
      },
    },
  };
  </script>
  
  <style>
  input {
    display: block;
    margin: 10px 0;
    padding: 5px;
  }
  button {
    padding: 5px 10px;
  }
  </style>