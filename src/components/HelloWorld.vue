<template>
  <div id="app">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-img :src="require('../assets/logo2.png')" contain height="250" />
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12">
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">
                    <v-img v-if="isMobile"
                      id="banner"
                      contain
                      :src="slide"
                      height="400"
                      width="100%"
                    ></v-img>
                    <v-img v-if="!isMobile"
                      id="banner"
                      contain
                      :src="slide"
                      height="100%"
                    ></v-img>
                  </div>
                </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-row justify="space-around">
            <v-card width="300" class="my-6 text-center" justify="center">
              <v-card-text>
                <v-row justify="center" class="mx-auto">
                  <v-icon color="black" x-large> mdi-truck-delivery </v-icon>
                </v-row>
                <span>
                  <strong>Livrare direct la usa ta!</strong>
                </span>
              </v-card-text>
            </v-card>
            <v-card width="300" class="my-6 text-center" justify="center">
              <v-card-text>
                <v-row justify="center" class="mx-auto">
                  <v-icon color="black" x-large> mdi-human-handsup </v-icon>
                </v-row>
                <span>
                  <strong>Sustine producatorii locali.</strong>
                </span>
              </v-card-text>
            </v-card>
            <v-card width="300" class="my-6 text-center" justify="center">
              <v-card-text>
                <v-row justify="center" class="mx-auto">
                  <v-icon color="black" x-large>
                    mdi-clock-time-three-outline
                  </v-icon>
                </v-row>
                <span>
                  <strong>Comanda ajunge la tine in 24 de ore.</strong>
                </span>
              </v-card-text>
            </v-card>
          </v-row>
        </v-col>

        <v-col cols="12" class="my-3">
          <v-row justify="center">
            <v-col class="left-side" cols="auto" sm="12" md="6">
              <div id="custom-font-left" class=" font-weight-black font-italic text-center">
                Misiunea noastra este de a ajuta producatorii locali sa isi
                distribuie produsele catre clientii doritori. Produsele noastre
                sunt naturale, crescute de catre agricultori locali din
                apropierea orasului.
              </div>
            </v-col>
            <v-col class="right-side">
              <div class="text-h5 font-weight-black mb-5">
                Procedura de livrare.
              </div>
              <div>
                Pentru mai multe informatii despre cum poti comanda, click
                <router-link to="/howtobuy">aici</router-link>. <br />
                <ul>
                  <li>
                    <strong
                      >Comanda online sau telefonic produsele dorite.</strong
                    >
                  </li>
                  <li><strong>Alege un interval de livrare.</strong></li>
                  <li>
                    <strong
                      >Curierii nostri te vor contacta cand au ajuns la
                      tine.</strong
                    >
                  </li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12">
          <div
            id="header"
            class="text-lg-h4 text-h5 font-weight-black mt-3 rounded-xl text-center pa-3"
          >
            PRODUSE DISPONIBILE IN ORADEA
          </div>
          <v-row>
            <v-col
              v-for="(product, i) in products"
              :key="i"
              class="col-12 col-md-4"
            >
              <ProductCard :product="product" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
export default {
  name: "HelloWorld",
  components: {
    ProductCard,
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  methods: {
    handleView() {
      this.isMobile = window.innerWidth < 900;
    }
  },
  data: () => {
    return {
      isMobile: false,
      slides: ["https://images.alphacoders.com/768/thumb-1920-76811.jpg", "https://i.pinimg.com/originals/0d/a5/02/0da50202fe310860002e685a3f6578a7.jpg", "https://cdn.miscellaneoushi.com/1920x1080/20121018/honey%20bees%201920x1080%20wallpaper_www.miscellaneoushi.com_69.jpg"],
    };
  },
  created() {
    this.handleView();
  }
};
</script>

<style scoped>
.right-side {
  border-left: 0.2vw solid black;
}

.left-side {
  border-right: 0.2vw solid black;
}

#header {
  border: 2px solid black;
}

#custom-font-left {
  font-family: 'Patrick Hand', cursive;
  font-size: 24px;
}
</style>