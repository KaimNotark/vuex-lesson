<template>
  <div id="app">
    <h1>Vuex</h1>
    <app-result></app-result>
    <app-another-result></app-another-result>
    <hr />
    <br />
    <app-counter></app-counter>
    <br />
    <app-another-counter></app-another-counter>
    <br>
    <app-local-storage></app-local-storage>
    <hr />
    <p>use "v-model"</p>
    <input type="text" v-model="value" />
    <p>value= {{ value }}</p>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import AnotherCounter from "./components/AnotherCounter.vue";
import Result from "./components/Result.vue";
import AnotherResult from "./components/AnotherResult.vue";
import LocalStorage from "./components/LocalStorage.vue";

export default {
  computed: {
    // use "v-model"
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch('updateValue', value);
      }
    }
  },
  components: {
    appCounter: Counter,
    appAnotherCounter: AnotherCounter,
    appResult: Result,
    appAnotherResult: AnotherResult,
    appLocalStorage: LocalStorage
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
