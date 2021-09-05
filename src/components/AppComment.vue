<template>
  <div class="comment-container">
    <it-avatar class="avatar" :src="user.avatar" square />
    <div class="name subText">
      <strong>{{ user.name }}</strong> |
      <span class="subText grey">{{ getLocalTime() }}</span>
    </div>
    <div class="comment">{{ post.text }}</div>
    <div class="controls">controls</div>
  </div>
</template>

<script>
import db from "@/data.json";
import moment from "moment";

export default {
  props: ["post", "user"],
  data() {
    return {
      threads: db.threads,
      posts: db.posts,
      users: db.users,
    };
  },
  methods: {
    getLocalTime() {
      const date = moment(this.post.publishedAt).format(
        "MMMM Do [']YY [@] h:mm a"
      );

      return date;
    },
  },
};
</script>

<style scoped>
.comment-container {
  display: grid;
  grid-template-columns: 50px auto;
  grid-template-rows: auto;
  margin: 20px;
}
.avatar {
  grid-column-start: 1;
}
.name {
  grid-column-start: 2;
}
.comment {
  grid-column-start: 2;
  margin: -20px 1px 5px;
  font-size: 0.95rem;
  color: #2c3e50;
}
.controls {
  grid-column-start: 2;
}
.subText {
  font-size: 0.8rem;
}
.grey {
  color: dimgray;
}
</style>
