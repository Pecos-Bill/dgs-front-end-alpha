
<template>
    <div class="register">
      <app-header /> <!-- Must be here -->
      <h2>Register</h2>
      <form @submit.prevent="register" class="register-form">
        <input v-model="form.email" type="email" placeholder="Email" required />
        <input v-model="form.password" type="password" placeholder="Password" required />
        <input v-model="form.first_name" type="text" placeholder="First Name" required />
        <input v-model="form.last_name" type="text" placeholder="Last Name" required />
        <input v-model="form.phone" type="text" placeholder="Phone" />
        <input v-model="form.address" type="text" placeholder="Address" />
        <button type="submit">Register</button>
      </form>
      <p v-if="message" class="success">{{ message }}</p>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  import apiClient from '../api.js';
  import AppHeader from '../components/AppHeader.vue'; // Fixed import
  
  export default {
    name: 'RegisterView',
    components: {
      AppHeader, // Only this
    },
    data() {
      return {
        form: {
          email: '',
          password: '',
          first_name: '',
          last_name: '',
          phone: '',
          address: '',
        },
        message: '',
        error: '',
      };
    },
    methods: {
      async register() {
        try {
          const response = await apiClient.post('/register', this.form);
          this.message = response.data.message;
          this.error = '';
          this.form = { email: '', password: '', first_name: '', last_name: '', phone: '', address: '' };
        } catch (err) {
          this.error = err.response?.data?.error || 'Registration failed';
          this.message = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .register { max-width: 600px; margin: 0 auto; padding: 20px; }
  h2 { color: #d32f2f; text-align: center; font-size: 2em; }
  .register-form { display: flex; flex-direction: column; gap: 15px; }
  input { padding: 10px; font-size: 1.2em; border: 1px solid #ccc; border-radius: 4px; }
  button { padding: 10px; background-color: #d32f2f; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 1.2em; }
  button:hover { background-color: #b71c1c; }
  .success { color: green; text-align: center; font-size: 1.2em; }
  .error { color: red; text-align: center; font-size: 1.2em; }
  </style>