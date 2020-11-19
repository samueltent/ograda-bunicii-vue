<template>
  <div id="app">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-img :src="require('../assets/logo2.png')" contain height="150" />
        </v-col>
        <v-col cols="12">
          <div
            id="header"
            class="text-lg-h4 text-h5 font-weight-black mt-3 rounded-xl text-center pa-3 outlined"
          >
            PRODUSE DISPONIBILE IN ORADEA
          </div>
          <v-row>
            <v-col
              v-for="product in products"
              :key="product.id"
              class="col-sm-12 col-lg-4"
            >
              <ProductCard :product="product" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
export default {
  name: "Product",
  components: {
    ProductCard,
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>

<style scoped>
.right-side {
  border-left: 0.2vw solid black;
  text-align: right;
}

#header {
  border: 2px solid black;
}

</style>