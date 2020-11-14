<template>
  <div id="app">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-img :src="require('../assets/logo2.png')" contain height="150" />
        </v-col>
        <v-col v-if="!products.length" cols="12" justify="center" class="my-12">
          <div class="text-h4 text-md-h2 text-center">
            Costul tau este momentan gol!<br />
            <router-link tag="button" to="/products">
              <v-btn> EXPLOREAZA PRODUSE </v-btn>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Product",
  data: () => {
    return {
      products: [],
    };
  },
};
</script>

<style scoped>
</style>