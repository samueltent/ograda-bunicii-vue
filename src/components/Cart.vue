<template>
  <div class="mb-12">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-img :src="require('../assets/logo2.png')" contain height="150" />
        </v-col>
        <v-col
          v-if="!productsInCart.length"
          cols="12"
          justify="center"
          class="mt-12"
        >
          <div class="text-h4 text-md-h2 text-center">
            Costul tau este momentan gol!
          </div>
          <div class="text-h4 text-md-h2 text-center mt-12">
            <router-link tag="button" to="/products">
              <v-btn> EXPLOREAZA PRODUSE </v-btn>
            </router-link>
          </div>
        </v-col>
        <v-col
          v-if="productsInCart.length"
          cols="12"
          justify="center"
          class="mt-12"
        >
          <div
            id="header"
            class="text-lg-h4 text-h5 font-weight-black mt-3 pa-2 text-center rounded-xl"
          >
            COSUL TAU
          </div>
          <v-row justify="center">
            <!-- <v-col
              v-for="item in productsInCart"
              :key="item.product.id"
              cols="auto"
              sm="12"
              md="4"
            >
              <ProductCard :product="item.product" />
            </v-col> -->
            <v-col cols="12" class="mt-12">
              <CartEntry
                v-for="items in productsInCart"
                :key="items.product.id"
                :items="items"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-if="productsInCart.length">
      <v-row justify="end">
        <v-col class="text-h6" cols="auto"> Pret total: {{getTotalPrice}} RON </v-col>
      </v-row>
      <v-row class="mt-12" justify="center">
        <router-link tag="button" to="/order">
          <v-btn x-large color="green"> Plaseaza comanda </v-btn>
        </router-link>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CartEntry from "../components/CartEntry.vue";
export default {
  name: "Cart",
  components: {
    CartEntry,
  },
  data: () => {
      return {
          price: 100
      }
  },
  computed: {
    productsInCart() {
      return this.$store.getters.productsInCart;
    },
    getTotalPrice() {
        return this.$store.getters.getTotalPrice;
    },
  },
};
</script>

<style scoped>
#header {
  border: 2px solid black;
}
</style>