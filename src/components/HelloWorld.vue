<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col cols="12">
        <v-img
          class="mb-2"
          id="banner"
          :src="require(`../assets/banner-landing.png`)"
          contain
          height="400"
        />
      </v-col>

      <v-col cols="12" class="my-3">
        <v-row justify="center">
        <v-col cols="6">
          <div
            class="text-lg-h4 font-weight-medium text-center">
              Lorem ipsum dolor sit amet consectetur.
          </div>
        </v-col>
        <v-col id="right-side" cols="6">
          <div class="text-lg-h5 font-weight-black mb-5">
            Lorem ipsum dolor sit.
          </div>
          <div class="text-lg-body-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda officia dolorem ducimus voluptatibus aliquid labore?
          </div>
        </v-col>
      </v-row>
      </v-col>

      <v-col cols="12">
        <div class="text-lg-h4 text-sm-h2 font-weight-medium my-3">
          Produse disponibile in Oradea!
        </div>
        <v-row>
          <v-col v-for="(product,i) in products"
          :key="i"
           class="col-sm-12 col-lg-4">
              
            <v-card
    class="mx-auto my-12"
    max-width="374"
  >

    <v-img
      height="250"
      :src="product.image"
    ></v-img>

    <v-card-title>{{product.title}}</v-card-title>

    <v-card-text>

      <div class="my-4 subtitle-1">
        • Localitate, Judet
      </div>

      <div>{{product.description}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange accent-3"
        text
      >
        Afla mai multe
      </v-btn>
    </v-card-actions>
  </v-card>



          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
      products: [
        {
          image: "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
          title: "Lorem ipsum dolor sit amet consectetur.",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium."
        },
        {
          image: "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
          title: "Lorem ipsum dolor sit amet consectetur.",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium."
        },
        {
          image: "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
          title: "Lorem ipsum dolor sit amet consectetur.",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium."
        },
        {
          image: "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
          title: "Lorem ipsum dolor sit amet consectetur.",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium."
        },
        {
          image: "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
          title: "Lorem ipsum dolor sit amet consectetur.",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium."
        },
        {
          image: "https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg",
          title: "Lorem ipsum dolor sit amet consectetur.",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio cupiditate assumenda officia facilis praesentium."
        },
      ]
    }),
  }
</script>

<style scoped>

#right-side {
  border-left: 0.2vw solid black;
}
</style>
