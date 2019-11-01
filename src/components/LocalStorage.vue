<template>
  <div>
    Моё имя
    <input v-model="name" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      name: ""
    };
  },
  mounted() {
    if (localStorage.name) {
      console.log("name from storage: " + localStorage.name);
      this.name = localStorage.name;
    }
  },
  watch: {
      name(newName) {
      console.log("newName: " + newName);
      localStorage.name = newName;
    }
  }
};
</script>