<template>
  <div id="app">
    <h1>Vuex</h1>
    <app-result :counter="counter"></app-result>
    <app-counter @updated="counter += $event"></app-counter>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Result from "./components/Result.vue";

export default {
  data() {
    return {
      counter: 0
    };
  },
  components: {
    appCounter: Counter,
    appResult: Result
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
