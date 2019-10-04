<template>
  <div>
    <p>Work with delay 1 second:</p>
    <button class="btn" @click="asyncIncrement({by: 50, duration: 500})">Another Increment</button>
    <button class="btn" @click="asyncDecrement({by: 50, duration: 500})">Another Decrement</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["asyncIncrement", "asyncDecrement"])
  }
};
</script>

<style scoped>
.btn {
  margin-left: 10px;
}
</style>