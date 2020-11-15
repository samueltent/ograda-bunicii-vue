<template>
  <v-app-bar color="#FEA120" fixed height="" elevate-on-scroll>
    
    <v-app-bar-nav-icon v-if="isMobile">
    </v-app-bar-nav-icon>

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

     <router-link tag="button" to="/cart">
    <v-btn>
      <v-badge :content="productsInCart.length" :value="productsInCart.length" color="green">
      Cosul tau
      <v-icon right>
        mdi-cart-variant
      </v-icon>
    </v-badge>
    </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data: () => {
    return {
      isMobile: true,
      cartItems: 1
    };
  },
  computed: {
    productsInCart() {
      return this.$store.getters.productsInCart
    }
  },
  methods: {
    handleView() {
      this.isMobile = window.innerWidth < 900;
    }
  },
  created() {
    this.handleView();
  }
};
</script>

<style scoped>
</style>