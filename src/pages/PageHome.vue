<template>
  <div>Hello</div>
  <thread-list :threads="threads" />
</template>

<script>
import db from "@/data.json";
import ThreadList from "../components/ThreadList.vue";

export default {
  components: {
    ThreadList,
  },
  data() {
    return {
      threads: db.threads,
    };
  },
};
</script>
