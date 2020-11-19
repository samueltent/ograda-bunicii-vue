<template>
<div class="header mb-12">
  <v-app-bar color="#29d62b" fixed app elevate-on-scroll>
    
    <v-app-bar-nav-icon @click="drawer = !drawer" v-if="isMobile">
    </v-app-bar-nav-icon>

    <v-tabs v-if="!isMobile" color="white">
      <v-tab>
        <router-link tag="tab" to="/">Acasa</router-link>
      </v-tab>
      <v-tab>
        <router-link tag="tab" to="/products">Produse</router-link>
      </v-tab>
      <v-tab>
        <router-link tag="tab" to="/howtobuy">Cum cumpar</router-link>
      </v-tab>
    </v-tabs>
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-facebook</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-instagram</v-icon>
    </v-btn>
    <!-- <v-btn v-if="!isMobile" outlined class="mr-6">
      <v-text>+40775936505</v-text>
      <v-icon>mdi-phone</v-icon>
    </v-btn> -->
    <v-btn icon v-if="isMobile">
      <v-icon>mdi-phone</v-icon>
    </v-btn>

     <router-link tag="button" to="/cart">
    <v-btn color="white">
      <v-badge :content="productsInCart.length" :value="productsInCart.length" color="green">
      Cosul tau
      <v-icon right>
        mdi-cart-variant
      </v-icon>
    </v-badge>
    </v-btn>
    </router-link>
  </v-app-bar>

  <v-navigation-drawer
      v-model="drawer"
      app
      disable-resize-watcher
      class="my-12"
    >
      <v-list
        navs
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title><router-link tag="button" to="/">ACASA</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><router-link tag="button" to="/products">PRODUSE</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><router-link tag="button" to="/howtobuy">CUM CUMPAR</router-link></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
</div>
</template>

<script>
export default {
  name: "Header",
  data: () => {
    return {
      isMobile: false,
      cartItems: 1,
      drawer: false
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
.shoppingCartGlow {
  box-shadow: 0 5px 15px rgba(145, 92, 182, .4);
} 
</style>