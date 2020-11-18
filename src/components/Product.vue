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
                Lorem ipsum dolor sit amet.
              </div>
              <div class="caption">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis possimus illo laudantium et blanditiis praesentium
                illum cum amet itaque nemo.
                <ul>
                  <li v-for="i in 4" :key="i">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta, praesentium.
                  </li>
                </ul>
              </div>
              <div class="align-self-end mt-12 text-lg-h2">5 lei/kg</div>
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
          <!-- <v-row class="my-6">
            <v-col cols="6">
              <div class="text-lg-h6 font-weight-black text-center">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <div class="subtitle-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis et eveniet minima, facere ratione inventore excepturi
                molestias nostrum ipsam corporis?
              </div>
            </v-col>
            <v-col class="right-side" cols="6">
              <v-avatar color="indigo" size="75">
                <span class="white--text headline">VP</span>
              </v-avatar>
              <div class="text-lg-h5 font-weight-black mb-5">
                Victor Popescu
              </div>
              <div class="my-4 subtitle-1">• Localitate, Judet</div>
              <div class="text-lg-body-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda officia dolorem ducimus voluptatibus aliquid labore?
              </div>
            </v-col>
          </v-row> -->
          <v-row class="my-6">
            <div
              class="text-lg-h5 text-sm-h4 font-italic font-weight-black my-3"
            >
              Alte produse asemanatoare in Oradea:
            </div>
            <v-row>
              <v-col
                v-for="(product, i) in products"
                :key="i"
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
    },
  },
  data: () => {
    return {
      productQuantity: 1,
      product: {
        image:
          "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium.",
        price: 10,
      },
      products: [
        {
          image:
            "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
          title: "Lorem ipsum dolor sit amet consectetur.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium.",
        },
        {
          image:
            "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
          title: "Lorem ipsum dolor sit amet consectetur.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium.",
        },
        {
          image:
            "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
          title: "Lorem ipsum dolor sit amet consectetur.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium.",
        },
        {
          image:
            "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
          title: "Lorem ipsum dolor sit amet consectetur.",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium.",
        },
      ],
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