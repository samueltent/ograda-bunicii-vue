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

<style>

* {
  font-family: 'Montserrat', sans-serif;
}

 #app {
   width: 100%;
 }
  #app-view {
    /* background: linear-gradient(-45deg, #f2f7f2, #F2E2D2); */
  }
</style>
