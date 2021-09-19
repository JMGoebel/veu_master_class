<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import db from "@/data.json";

export default {
  name: "App",
  data() {
    return {
      db: db,
    };
  },
};
</script>

<style>
#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
