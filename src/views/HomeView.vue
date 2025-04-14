
<template>
    <div class="home">
      <app-header is-home />
      <h1>"We Are The Famous, DGS!"</h1>
      <p>Welcome to the Dallas Gooner Society, Arsenal FC's Dallas Supporters Club</p>
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
  h1 { color: #ffffff; font-size: 2.5em; }
  p { font-size: 1.5em; color: #333; }
  </style>