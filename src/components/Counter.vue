<template>
  <div>
    <button class="btn" @click="increment(100)">Increment</button>
    <button class="btn" @click="decrement(100)">Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["increment", "decrement"])
  }
  // increment(by) {
  //   this.$store.dispatch('increment', by);
  // }
};
</script>

<style scoped>
.btn {
  margin-left: 10px;
}
</style>