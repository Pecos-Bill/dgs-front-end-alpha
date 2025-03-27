
<template>
    <div class="home">
      <app-header is-home />
      <h1>Welcome to Arsenal Dallas Society</h1>
      <p>Join our community of passionate Gooners in Dallas!</p>
    </div>
  </template>
  
  <script>
  import AppHeader from '../components/AppHeader.vue';
  
  export default {
    name: 'HomeView',
    components: {
      AppHeader,
    },
  };
  </script>
  
  <style scoped>
  .home { text-align: center; padding: 20px; }
  h1 { color: #d32f2f; font-size: 2.5em; }
  p { font-size: 1.5em; color: #333; }
  </style>