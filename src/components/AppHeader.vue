<template>
  <header>
    <img :src="logoSrc" :class="logoClass" alt="Arsenal Dallas Logo" />
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {
    isHome: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    logoSrc() {
      return require('../assets/DGSLogo.png'); 
    },
    logoClass() {
      return this.isHome ? 'logo-large' : 'logo-small';
    },
  },
};
</script>

<style scoped>
.logo-large {
  width: 300px;
  height: auto;
  margin: 20px auto;
  display: block;
}
.logo-small {
  width: 100px;
  height: auto;
  margin: 10px;
}
</style>