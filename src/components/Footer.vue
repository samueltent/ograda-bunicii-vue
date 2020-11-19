<template>
  <!-- <v-footer
    dark
    padless
    color="#FEA120"
    
  >
  <v-row justify="center">
  <v-card color="#FEA120" flat tile class="white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <div class="text-h6">SUPORT CLIENTI</div>
        <div>
            Luni - Vineri 09:00 - 20:00
        </div>
        <div>
          <v-icon>mdi-phone</v-icon>
          <v-text>+40775936505</v-text>
        </div>
        <div>
            <v-icon>mdi-email</v-icon>
            <v-text>suport@gradinabunicii.ro</v-text>
        </div>
        <div>

        </div>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea odit
        cupiditate pariatur eligendi laborum iure numquam ipsam voluptatem nisi
        placeat.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Ograda Bunicii</strong>
      </v-card-text>
    </v-card>
    </v-row>
  </v-footer> -->
  <v-footer
        padless>
      <v-card
      flat
      tile
      color="#29d62b"
      class="flex white--text text-center"
    >
      <v-card-text>
        <a v-for="(icon,i) in icons" :href="icon.link" :key="i" target="__blank">
          <v-btn
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
          </v-btn>
        </a>
      </v-card-text>

      <v-card-text>
          <div class="text-h6 white--text">
              <strong>SUPORT CLIENTI</strong>
          </div>
          <div class="text-body-1 white--text">
              Luni - Vineri 09:00 - 20:00<br>
              <v-icon>mdi-phone</v-icon> +40775936505<br>
              <v-icon>mdi-email</v-icon> suport@ogradabunicii.ro
          </div>
      </v-card-text>

      <v-card-text class="white--text pt-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nisi maxime quidem aut commodi numquam nostrum itaque delectus, iste minima?
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Ograda Bunicii</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => {
    return {
      icons: [
        {icon:"mdi-facebook", link:"https://www.facebook.com/Ograda-Bunicii-107097584552471"}, 
        {icon:"mdi-facebook-messenger", link:"https://www.facebook.com/messages/t/107097584552471"},
        {icon:"mdi-instagram", link:"https://www.instagram.com/ograda.bunicii/?fbclid=IwAR2Tt41lfJFVxQ9C2mvNNJDGviXEqtPpQAUiKP7TvELJFKfPzEtbjXkUVOw"}
        ],
    };
  },
};
</script>

<style scoped>
#footer {
    width: 100%;
}
a {
  text-decoration: none;
}
</style>