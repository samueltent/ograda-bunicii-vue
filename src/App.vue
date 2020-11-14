<template>
  <v-app>
    <Header/>
    <v-main class="my-12">
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

</style>
