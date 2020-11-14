<template>
  <div id="app">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-img :src="require('../assets/logo2.png')" contain height="150" />
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
            <v-card class="mx-auto my-12" max-width="300">
              <v-img height="250" :src="product.image"></v-img>

              <v-card-title>{{ product.title }}</v-card-title>

              <v-card-text>
                <div class="my-4 subtitle-1">• Localitate, Judet</div>

                <div>{{ product.description }}</div>
              </v-card-text>

              <v-card-actions>
                <router-link to="/product" tag="button">
                  <v-btn color="orange accent-3" text> Afla mai multe </v-btn>
                </router-link>
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