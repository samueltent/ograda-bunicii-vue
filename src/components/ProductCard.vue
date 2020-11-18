<template>
  <v-card class="mx-auto my-12 rounded-xl" max-width="300">
    <v-img height="250" :src="product.image"></v-img>

    <v-card-title>{{ product.title }}</v-card-title>

    <v-card-text>
      <div class="my-4 subtitle-1">• Localitate, Judet</div>

      <div>{{ product.description }}</div>
    </v-card-text>

    <v-card-actions>
      <div>
          <v-btn
            @click.prevent="addToCart"
            color="light-green"
            class="ma-2 white--text"
          >
            <v-icon> mdi-cart-variant </v-icon>
            Adauga in cos
          </v-btn>
        <router-link :to="'/product/' + product.id" tag="button">
          <v-btn
            color="grey"
            class="ma-2 white--text"
          >
            Afla mai multe
          </v-btn>
        </router-link>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['product'],
    methods: {
        addToCart() {
            this.$store.dispatch('addToCart', {
                product: this.product,
                quantity: 1
            })
        }
    }
}
</script>