<template>
  <v-card class="my-6 rounded-xl pa-6" flat>
    <v-container>
      <v-row justify="center">
        <v-col cols="auto" sm="12" md="4">
          <v-img height="200" contain :src="items.product.image"> </v-img>
        </v-col>
        <v-col cols="auto" sm="12" md="8">
          <v-card-title> {{ items.product.title }} </v-card-title>
    <v-card-subtitle> Lorem, ipsum. </v-card-subtitle>
    <v-card-text>
      {{ items.product.description }}
    </v-card-text>
    <v-card-action>
      <v-container>
        <v-row>
          <v-text class="text-h6">Cantitate: {{ items.quantity }} </v-text>
        </v-row>
      </v-container>
      <v-btn icon @click.prevent="handleQuantity(items, false)"
        ><v-icon>mdi-plus</v-icon></v-btn
      >
      <v-btn icon @click.prevent="handleQuantity(items, true)"
        ><v-icon>mdi-minus</v-icon></v-btn
      >
    </v-card-action>
        </v-col>
      </v-row>
    </v-container>
    <v-row justify="end">
        <v-btn class="red accent-2" @click.prevent="deleteCartItem(items.product.id)">
          Sterge
        </v-btn>
      </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CartEntry",
  props: ["items"],
  methods: {
    deleteCartItem(productId) {
      this.$store.dispatch("removeProductFromCart", productId);
    },
    deleteNoQuantity(item) {
      if (item.quantity === 0) {
        this.deleteCartItem(item.product.id);
      }
    },
    handleQuantity(item, substract) {
      if (substract) {
        while (item.quantity > 1) {
          return item.quantity--;
        }
        this.deleteCartItem(item.product.id);
      } else {
        return item.quantity++;
      }
    },
  },
};
</script>

<style scoped>
</style>