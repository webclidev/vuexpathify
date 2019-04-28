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
import { mapGetters } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    // ...mapGetters("cart", ["showProduct"]), <- when you have only one module
    ...mapGetters({
      showProduct: "cart/showProduct",
      showState: "store/showState"
    }),
    // setting v-model in vuex firstName & product are v-model
    firstName: {
      get() {
        return this.showState.firstName;
      },
      set(val) {
        // calling mutation on store.js with firstName
        this.$store.commit("store/firstName", val);
      }
    },
    product: {
      get() {
        return this.showProduct.products;
      },
      set(val) {
        // calling mutation on cart.js with updateProduct
        this.$store.commit("cart/updateProduct", val);
      }
    }
  }
};
</script>
