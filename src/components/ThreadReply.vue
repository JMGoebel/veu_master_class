<template>
  <div class="comment-container">
    <!-- TODO: Get user avatar -->
    <it-avatar class="avatar" src="" square />
    <!-- TODO: Make textarea input act like youtubes comment input -->
    <it-textarea v-model="reply" resize-on-write></it-textarea>
    <!-- TODO: Hide controles when not focused -->
    <div class="controls">
      <!-- TODO: Add cancel handler -->
      <it-button class="button" type="black" outlined>CANCEL</it-button>
      <!-- TODO: Add comment handle -->
      <it-button
        class="button"
        type="primary"
        @click="addReplyHandler"
        :disabled="!reply.trim()"
      >
        COMMENT
      </it-button>
    </div>
  </div>
</template>

<script>
// TODO: Remove when DB is set up
import { v4 as uuidv4 } from "uuid";
import db from "@/data.json";

export default {
  name: "ThreadReply",
  props: {
    thread: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      reply: "",
      currentThread: this.thread,
    };
  },
  methods: {
    addReplyHandler() {
      const uuid = uuidv4();

      const reply = {
        // TODO: Remove when DB is set up and let db gen id
        id: uuid,
        text: this.reply,
        publishedAt: Date.now(),
        threadId: this.thread.id,
        // TODO: Get actual logged in user id
        userId: "L664y3qZSubDbT1R6npC0EEybJ73",
      };

      db.posts.push(reply);
      this.currentThread.posts.push(reply.id);

      this.reply = "";
    },
  },
  computed: {
    charLength() {
      return this.reply.length;
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
.it-textarea {
  border: none !important;
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
  justify-content: flex-end;
}

button {
  max-width: 100px;
  margin: 5px 0 15px 5px;
  border: unset !important;
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
</style>
