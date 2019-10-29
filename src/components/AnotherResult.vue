<template>
  <div>
    <p>Another Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>
    <br>
    <br>
    <p class="__red">Value of counter: {{ counter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";
export default {
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"]),

    counter() {
      return this.$store.state.counter;
    }
  }
};
</script>

<style scoped>
.__red {
  color: red;
}
</style>