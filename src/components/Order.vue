<template>
  <div>
    <v-container>
      <v-col cols="12">
        <v-img :src="require('../assets/logo2.png')" contain height="150" />
      </v-col>
      <v-row class="text-h4 my-12" justify="start">
        <v-col>
           <div
            id="header"
            class="text-lg-h4 text-h5 font-weight-black mt-3 pa-2 text-center rounded-xl"
          >
            COMANDA TA
          </div> </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <v-simple-table>
            <thead>
              <tr>
                <th></th>
                <th class="text-left">Cantitate</th>
                <th class="text-left">Nume produs</th>
                <th class="text-left">Pret / unitate</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in productsInCart" :key="item.product.key">
                <td><v-img width="50" contain :src="item.product.image"></v-img></td>
                <td>{{ item.quantity }}</td>
                <td>{{ item.product.title }}</td>
                <td>{{ item.product.price }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          Subtotal: {{ getTotalPrice }} RON<br />
          Taxa transport: {{ transportPrice }} RON
          <hr />
          <br />
          <strong>Total: {{ getTotalPrice + transportPrice }} RON</strong>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" label="Nume" required></v-text-field>

            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="phone"
              label="Telefon"
              type="number"
              required
            ></v-text-field>

            <v-text-field
              v-model="address"
              label="Adresa"
              required
            ></v-text-field>

            <v-text-field
              v-model="address"
              label="Adresa 2(Optional)"
            ></v-text-field>

            Va rugam alegeti intervalul de livrare <br />
            <v-radio-group v-model="row" row>
              <v-radio label="Livrare intre 8 - 12" value="radio-1"></v-radio>
              <v-radio label="Livrare intre 18 - 22" value="radio-2"></v-radio>
            </v-radio-group>

            Va rugam alegeti metoda de plata <br />
            <v-radio-group v-model="row" row>
              <v-radio label="Cash la livrare" value="radio-1"></v-radio>
              <v-radio
                label="Online cu card"
                value="radio-2"
                disabled
              ></v-radio>
            </v-radio-group>

            <v-btn color="success" class="mr-4"> Comanda </v-btn>
            <v-btn color="red accent-2" class="mr-4"> Anuleaza </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Order",
  methods: {},
  data: () => {
    return {
      transportPrice: 10,
      picker: new Date().toISOString().substr(0, 10),
    };
  },
  computed: {
    productsInCart() {
      return this.$store.getters.productsInCart;
    },
    getTotalPrice() {
      return this.$store.getters.getTotalPrice;
    },
  },
};
</script>

<style scoped>
#header {
  border: 2px solid black;
}
</style>