<template>
  <div class="product">
    <Product :id="id"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from '../components/Product.vue'

export default {
  name: 'Home',
  props: ["id"],
  components: {
    Product
  }
}
</script>