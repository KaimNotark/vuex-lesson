<template>
  <div>
    <button class="btn" @click="increment">Increment</button>
    <button class="btn" @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$emit("updated", 1);
    },
    decrement() {
      this.$emit("updated", -1);
    }
  }
};
</script>

<style scoped>
.btn {
  margin-left: 10px;
}
</style>