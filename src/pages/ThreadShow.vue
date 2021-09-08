<template>
  <h2>{{ thread.title }}</h2>
  <p>{{ getPostById(thread.firstPostId).text }}</p>
  <div v-for="postId in thread.posts" :key="postId">
    <app-comment
      v-if="postId !== thread.firstPostId"
      :post="getPostById(postId)"
      :user="getUserById(getPostById(postId).userId)"
    />
  </div>
</template>

<script>
import db from "@/data.json";
import AppComment from "@/components/AppComment";

export default {
  components: {
    AppComment,
  },
  data() {
    return {
      thread: {},
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
  created() {
    const id = this.$route.params.id;
    this.thread = this.threads.find((t) => t.id === id);
  },
};
</script>
