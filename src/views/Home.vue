<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <input type="text" v-model="firstName"> &nbsp;
      <input type="text" v-model="product">
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { sync } from "vuex-pathify";

import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    firstName: sync("store/firstName"),
    product: sync("cart/products")
  }
};
</script>
