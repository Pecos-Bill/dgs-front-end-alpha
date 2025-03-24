<!-- src/views/RegisterView.vue -->
<template>
    <div>
      <h1>Register for Arsenal Dallas Fans</h1>
      <form @submit.prevent="register">
        <input v-model="form.email" type="email" placeholder="Email" required />
        <input v-model="form.password" type="password" placeholder="Password" required />
        <input v-model="form.first_name" placeholder="First Name" required />
        <input v-model="form.last_name" placeholder="Last Name" required />
        <input v-model="form.phone" type="text" placeholder="Phone" />
        <input v-model="form.address" type="text" placeholder="Address" />
        <button type="submit">Register</button>
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
          first_name: '',
          last_name: '',
          phone: '',
          address: ''
        },
        message: '',
        error: ''
      };
    },
    methods: {
    async register() {
      try {
        const response = await apiClient.post('/register', this.form);
        this.message = response.data.message;  // "User created successfully"
        this.error = '';
        // Optional: Clear form or redirect
        this.form = { email: '', password: '', first_name: '', last_name: '', phone: '', address: '' };
      } catch (err) {
        this.error = err.response?.data?.error || 'Registration failed';
        this.message = '';
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