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
            class="col-sm-12 col-lg-4"
          >
            <v-card class="mx-auto my-12 rounded-xl" max-width="300">
              <v-img height="250" :src="product.image"></v-img>

              <v-card-title>{{ product.title }}</v-card-title>

              <v-card-text>
                <div class="my-4 subtitle-1">• Localitate, Judet</div>

                <div>{{ product.description }}</div>
              </v-card-text>

              <v-card-actions>
                <div>
                    <router-link to="/product" tag="button">
                    <v-btn
                      :loading="loading3"
                      :disabled="loading3"
                      color="light-green"
                      class="ma-2 white--text"
                    >
                    <v-icon> mdi-cart-variant </v-icon>
                      Adauga in cos
                    </v-btn>
                    </router-link>
                    <router-link to="/product" tag="button">
                    <v-btn
                      :loading="loading3"
                      :disabled="loading3"
                      color="grey"
                      class="ma-2 white--text"
                    >
                      Afla mai multe
                    </v-btn>
                  </router-link>
                  </div>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
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
      }
    ],
  }),
};
</script>

<style scoped>
.right-side {
  border-left: 0.2vw solid black;
}
</style>
