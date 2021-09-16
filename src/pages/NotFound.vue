<template>
  <div class="container">
    <div class="error-message">
      <it-alert type="warning" title="Warning">
        <h5>{{ $route.path }}</h5>
        <p>does not exist.</p>
      </it-alert>
    </div>

    <h1>404</h1>
    <h2>Nothing to see here</h2>
    <router-link to="/">go back</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
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
.error-message {
  margin-bottom: 15rem;
}
</style>
