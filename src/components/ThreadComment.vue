<template>
  <div class="comment-container">
    <it-avatar class="avatar" :src="user.avatar" square />
    <div class="name subText">
      <strong>{{ user.name }}</strong> |
      <it-tooltip class="tool-tip" :content="getCommentDate()" placement="top">
        <span class="subText grey"> {{ timeSincePost }} ago </span>
      </it-tooltip>
    </div>
    <div class="comment">{{ post.text }}</div>
    <!-- TODO: Remove outline and use fill color on thumb choice once chosen -->
    <!-- TODO: Thummb click handler -->
    <div class="controls">
      <it-button class="icon" icon="thumb_up" color="#2c3e50" outlined />
      <it-button class="icon" icon="thumb_down" color="#2c3e50" outlined />
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default {
  name: "ThreadComment",
  props: {
    post: {
      required: true,
      type: Object,
    },
    user: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      timeSincePost: null,
    };
  },
  created() {
    /** NOTE: Opted to use this call here instead of a method to stop date update flash */
    this.timeSincePost = dayjs().from(this.post.publishedAt, true);

    setInterval(
      () => (this.timeSincePost = dayjs().from(this.post.publishedAt, true)),
      30000
    );
  },
  methods: {
    getCommentDate() {
      return dayjs(this.post.publishedAt).format("MM/DD/YYYY h:mm a");
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
  display: flex;
  margin: 5px;
}
.subText {
  font-size: 0.8rem;
}
.grey {
  color: dimgray;
}
.icon {
  margin: -5px 5px;
}
.tool-tip {
  cursor: pointer;
}
</style>
