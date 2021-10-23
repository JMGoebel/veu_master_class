<template>
  <!-- TODO: Issue 15 - Use view template with User Avatar at top and Post title in blue banner -->
  <!-- Thread Title and Content -->
  <h2>{{ thread.title }}</h2>
  <p>{{ getPostById(thread.firstPostId).text }}</p>

  <!-- Thread Reply -->
  <div>
    <thread-reply :thread="thread" />
  </div>

  <!-- Thread Comments -->
  <!-- TODO: Issue 13 - Sort by date decending by default -->
  <!-- TODO: Issue 14 - Add filter by UpVates / Date -->
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
import ThreadComment from "@/components/thread/ThreadComment";
import ThreadReply from "@/components/thread/ThreadReply";

export default {
  name: "ThreadShow",
  components: {
    ThreadComment,
    ThreadReply,
  },
  data() {
    return {
      thread: null,
    };
  },
  methods: {
    getPostById(id) {
      return db.posts.find((p) => p.id === id);
    },
    getUserById(id) {
      return db.users.find((u) => u.id === id);
    },
  },
  created() {
    // INIT DATA
    const id = this.$route.params.id;
    this.thread = db.threads.find((t) => t.id === id);
  },
};
</script>
