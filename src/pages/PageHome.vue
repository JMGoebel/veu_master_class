<template>
  <div>Hello</div>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{ thread.title }}</h2>
    <div v-for="postId in thread.posts" :key="postId">
      <p>{{ getUserById(getPostById(postId).userId).name }}</p>
      <p>{{ getPostById(postId).text }}</p>
    </div>
  </div>
</template>

<script>
import db from "@/data.json";

export default {
  data() {
    return {
      threads: db.threads,
      posts: db.posts,
      users: db.users,
    };
  },
  methods: {
    getPostById(id) {
      return this.posts.find((p) => p.id === id);
    },
    getUserById(id) {
      return this.users.find((u) => u.id === id);
    },
  },
};
</script>
