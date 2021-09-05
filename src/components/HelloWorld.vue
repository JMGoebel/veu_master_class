<template>
  <div class="hello">
    {{ db }}
  </div>
</template>

<script>
import db from "@/data.json";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      db: db,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
