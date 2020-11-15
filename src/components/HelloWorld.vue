<template>
  <div id="app">
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
          <v-img :src="require('../assets/logo2.png')" contain height="250" />
        </v-col>
              <v-col cols="12">
        <v-parallax 
          class="mb-2"
          id="banner"
          :src="require(`../assets/banner-landing.png`)"
          contain
          height="400"
        ></v-parallax>
      </v-col>
        <v-col cols="12">
            <v-row justify="space-around">
              <v-card class="my-3" justify="center">
                <v-card-text>
                  <v-row justify="center" class="mx-auto">
                    <v-icon color="black" x-large>
                    mdi-truck-delivery
                </v-icon>
                  </v-row>
                  <span>
                  Lorem ipsum dolor sit amet consectetur.
                </span>
                </v-card-text>
              </v-card>
              <v-card class="my-3" justify="center">
                <v-card-text>
                  <v-row justify="center" class="mx-auto">
                    <v-icon color="black" x-large>
                    mdi-human-handsup
                </v-icon>
                  </v-row>
                  <span>
                  Lorem ipsum dolor sit amet consectetur.
                </span>
                </v-card-text>
              </v-card>
              <v-card class="my-3" justify="center">
                <v-card-text>
                  <v-row justify="center" class="mx-auto">
                    <v-icon color="black" x-large>
                    mdi-clock-time-three-outline
                </v-icon>
                  </v-row>
                  <span>
                  Lorem ipsum dolor sit amet consectetur.
                </span>
                </v-card-text>
              </v-card>
            </v-row>
        </v-col>

      <v-col id="" cols="12" class="my-3">
        <v-row justify="center">
          <v-col cols="6">
            <div class="text-lg-h5 font-weight-black text-center">
              Lorem ipsum dolor sit amet consectetur.
            </div>
          </v-col>
          <v-col class="right-side" cols="6">
            <div class="text-lg-h5 font-weight-black mb-5">
              Lorem ipsum dolor sit.
            </div>
            <div class="text-lg-body-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              officia dolorem ducimus voluptatibus aliquid labore?
              <ul>
                <li><strong>Lorem ipsum dolor sit amet consectetur.</strong></li>
                <li><strong>Lorem ipsum dolor sit amet.</strong></li>
                <li><strong>Lorem ipsum dolor sit amet consectetur.</strong></li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12">
        <div class="text-lg-h4 text-sm-h4 font-italic font-weight-black my-3">
          Produse disponibile in Oradea!
        </div>
        <v-row>
          <v-col
            v-for="(product, i) in products"
            :key="i"
            class="col-12 col-md-4"
          >
           <ProductCard :product="product"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'
export default {
  name: "HelloWorld",
  components: {
    ProductCard
  },
  computed: {
    products () {
      return this.$store.getters.products
    }
  }
}
</script>

<style scoped>
.right-side {
  border-left: 0.2vw solid black;
}
</style>