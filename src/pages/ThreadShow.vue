<template>
  <!-- Thread Title and Content -->
  <h2>{{ thread.title }}</h2>
  <p>{{ getPostById(thread.firstPostId).text }}</p>

  <!-- Thread Reply -->
  <div>
    <thread-reply :thread="thread" />
  </div>

  <!-- Thread Comments -->
  <!-- TODO: Sort by date decending by default -->
  <!-- TODO: Sort by most ranked or post -->
  <div v-for="postId in thread.posts" :key="postId">
    <thread-comment
      v-if="postId !== thread.firstPostId"
      :post="getPostById(postId)"
      :user="getUserById(getPostById(postId).userId)"
    />
  </div>
</template>

<script>
import db from "@/data.json";
import ThreadComment from "@/components/ThreadComment";
import ThreadReply from "@/components/ThreadReply";

export default {
  name: "ThreadShow",
  components: {
    ThreadComment,
    ThreadReply,
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
      console.log('GETTING POST', id)
      return this.posts.find((p) => p.id === id);
    },
    getUserById(id) {
      console.log('USER', id)
      return this.users.find((u) => u.id === id);
    },
  },
  created() {
    const id = this.$route.params.id;
    this.thread = this.threads.find((t) => t.id === id);
  },
};
</script>
