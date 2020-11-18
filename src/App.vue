<template>
  <v-app id="app">
    <Header/>
    <v-main id="app-view">
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
 #app {
   width: 100%;
 }
  #app-view {
    background: linear-gradient(-45deg, #FFF8E8, #D9F4C7);
  }
</style>
