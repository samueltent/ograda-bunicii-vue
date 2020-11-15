<template>
  <v-card class="my-6 rounded-xl pa-6" flat>
    <v-img height="100" contain :src="items.product.image">
    </v-img>
    <v-card-title> {{items.product.title}} </v-card-title>
    <v-card-subtitle> Lorem, ipsum. </v-card-subtitle>
    <v-card-text>
      {{items.product.description}}
    </v-card-text>
    <v-card-action>
      <v-text class="text-h6">Cantitate: </v-text
      ><input v-model.number="items.quantity" placeholder="0" min="0" type="number" />
      <v-input></v-input>
      <v-btn> Sterge </v-btn>
    </v-card-action>
  </v-card>
</template>

<script>
export default {
    name: 'CardEntry',
    props: ['items']
}
</script>

<style scoped>

</style>