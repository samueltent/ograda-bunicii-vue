<template>
  <v-app>
    <Header/>
    <v-main id="app-view" class="my-12">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import  Header  from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style scoped>
  #app-view {
    background: linear-gradient(-45deg, #FFF8E8, #D9F4C7);
  }
</style>
