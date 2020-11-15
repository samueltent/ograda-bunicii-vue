<template>
  <v-card class="my-6 rounded-xl pa-6" flat>
    <v-img height="100" contain :src="items.product.image"> </v-img>
    <v-card-title> {{ items.product.title }} </v-card-title>
    <v-card-subtitle> Lorem, ipsum. </v-card-subtitle>
    <v-card-text>
      {{ items.product.description }}
    </v-card-text>
    <v-card-action>
      <v-container>
        <v-row>
          <v-text class="text-h6">Cantitate: </v-text
          ><input
            v-on:change="deleteNoQuantity(items)"
            v-model.number="items.quantity"
            placeholder="0"
            min="0"
            type="number"
          />
          <v-btn @click.prevent="handleQuantity(items, false)">+</v-btn>
          <v-btn @click.prevent="handleQuantity(items, true)">-</v-btn>
          <v-input></v-input>
        </v-row>
      </v-container>
      <v-btn @click.prevent="deleteCartItem(items.product.id)"> Sterge </v-btn>
    </v-card-action>
  </v-card>
</template>

<script>
export default {
  name: "CardEntry",
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
        if(substract) {
            while(item.quantity > 1)
            {
                return item.quantity--;
            }
            this.deleteCartItem(item.product.id);
        } else {
            return item.quantity++;
        }
    }
  },
};
</script>

<style scoped>
</style>