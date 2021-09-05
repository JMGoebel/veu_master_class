<template>
  <page-home />
</template>

<script>
import PageHome from "@/pages/PageHome.vue";

export default {
  name: "App",
  components: {
    PageHome,
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
