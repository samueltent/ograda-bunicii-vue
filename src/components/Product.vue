<template>
  <div id="app">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-img :src="require('../assets/logo.png')" contain height="150" />
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col class="col-lg-col-xs-12 6 d-flex flex-column">
                <div class="text-lg-h6 font-weight-black">
                    Lorem ipsum dolor sit amet.
                </div>
                <div class="text-lg-caption text-md-caption">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis possimus illo laudantium et blanditiis praesentium illum cum amet itaque nemo.
                    <ul>
                        <li v-for="i in 4" :key="i">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, praesentium.
                        </li>
                    </ul>
                </div>
                <div class="align-self-end mt-12 text-lg-h2">5 lei/kg</div>
            </v-col>
            <v-col class="col-lg-6 col-xs-12">
                <v-img :src="product.image"
                    contain
                    max-height="400">

                </v-img>
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
      }
    };
  },
};
</script>

<style scoped>
</style>