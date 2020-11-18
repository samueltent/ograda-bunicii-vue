<template>
  <div id="app">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-img :src="require('../assets/logo2.png')" contain height="150" />
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="auto" sm="12" md="6" class="d-flex flex-column">
              <div class="text-h6 text-md-h5 font-weight-black">
                {{product.title}}
              </div>
              <div class="caption">
                {{product.description}}
                <ul>
                  <li v-for="i in 4" :key="i">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, praesentium.
                  </li>
                </ul>
              </div>
              <div class="align-self-end mt-12 text-lg-h4">{{product.price}} RON / unitate</div>
            </v-col>
            <v-col cols="auto" sm="12" md="6" order="first" order-md="1">
              <v-img :src="product.image" contain max-height="300"> </v-img>
            </v-col>
          </v-row>
          <v-row justify="start">
            <v-col cols="6">
              <v-container>
                <v-row>
                  <div class="text-h6">Cantitate: {{ productQuantity }}</div>
                </v-row>
              </v-container>
              <v-btn icon @click.prevent="handleQuantity(false)"
                ><v-icon>mdi-plus</v-icon></v-btn
              >
              <v-btn icon @click.prevent="handleQuantity(true)"
                ><v-icon>mdi-minus</v-icon></v-btn
              >
            </v-col>
          </v-row>
          <v-row justify="start">
            <v-btn @click.prevent="addToCart" x-large color="light-green">
              <v-text>Adauga in cos</v-text>
              <v-icon right> mdi-cart-variant </v-icon>
            </v-btn>
          </v-row>
          <v-row class="my-6">
            <div
              class="text-lg-h5 text-sm-h4 font-italic font-weight-black my-3"
            >
              Alte produse asemanatoare in Oradea:
            </div>
            <v-row>
              <v-col
                v-for="product in featuredProducts"
                :key="product.id"
                class="col-sm-12 col-lg-4"
              >
                <ProductCard :product="product" />
              </v-col>
            </v-row>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  name: "Product",
  props: ["id"],
  components: {
    ProductCard,
  },
  methods: {
    handleQuantity(substract) {
      if (substract) {
        if (this.productQuantity > 1) return this.productQuantity--;
      } else return this.productQuantity++;
    },
    addToCart() {
      this.$store.dispatch("addToCart", {
        product: this.product,
        quantity: this.productQuantity,
      });
      this.productQuantity = 1;
    },
  },
  computed: {
    product () {
      return this.$store.getters.product(this.id);
    },
    featuredProducts () {
      return this.$store.getters.featuredProducts;
    }
  },
  data: () => {
    return {
      productQuantity: 1,
    };
  },
};
</script>

<style scoped>
.right-side {
  border-left: 0.2vw solid black;
  text-align: right;
}
</style>