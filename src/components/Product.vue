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
          <v-row class="my-6">
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
          </v-row>
          <v-row class="my-6">
            <div
              class="text-lg-h5 text-sm-h4 font-italic font-weight-black my-3"
            >
              Alte produse ale lui Victor Popescu:
            </div>
            <v-row>
              <v-col
                v-for="(product, i) in products"
                :key="i"
                class="col-sm-12 col-lg-4"
              >
                <v-card class="mx-auto my-12" max-width="300">
                  <v-img height="250" :src="product.image"></v-img>

                  <v-card-title>{{ product.title }}</v-card-title>

                  <v-card-text>
                    <div class="my-4 subtitle-1">• Localitate, Judet</div>

                    <div>{{ product.description }}</div>
                  </v-card-text>

                  <v-card-actions>
                    <router-link to="/product" tag="button">
                      <v-btn color="orange accent-3" text>
                        Afla mai multe
                      </v-btn>
                    </router-link>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-row>
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
      product: {
        image:
          "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
        title: "Lorem ipsum dolor sit amet consectetur.",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium.",
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
    ]
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