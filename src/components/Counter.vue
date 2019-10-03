<template>
  <div>
    <button class="btn" @click="increment">Increment</button>
    <button class="btn" @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["increment", "decrement"])
  }
};
</script>

<style scoped>
.btn {
  margin-left: 10px;
}
</style>