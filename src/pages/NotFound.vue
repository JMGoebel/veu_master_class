<template>
  <div class="container">
    <h1>404</h1>
    <h2>Nothing to see here</h2>
    <router-link to="/">go back</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: "error",
    };
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
