<template>
  <v-app-bar color="#F48F01" fixed elevate-on-scroll>
    <v-app-bar-nav-icon v-if="isMobile"></v-app-bar-nav-icon>

    <v-tabs v-if="!isMobile" color="white">
      <v-tab>
        <router-link tag="tab" to="/">Acasa</router-link>
      </v-tab>
      <v-tab>
        <router-link tag="tab" to="/products">Produse</router-link>
      </v-tab>
    </v-tabs>

    <v-toolbar-title v-if="isMobile" class="text-uppercase text-button grey--white">
      <span class="font-weight-black">Ograda</span>
      <span>Bunicii</span></v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data: () => {
    return {
      isMobile: 0,
    };
  },
};
</script>

<style scoped>
</style>