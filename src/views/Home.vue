<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <input type="text" v-model="firstName">
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
    // ...mapGetters("cart", ["showProduct"]),
    ...mapGetters({
      showProduct: "cart/showProduct",
      showState: "store/showState"
    }),
    // setting v-model in vuex
    firstName: {
      get() {
        return this.showState.firstName;
      },
      set(val) {
        // calling mutation on store.js
        this.$store.commit("store/firstName", val);
      }
    }
  }
};
</script>
