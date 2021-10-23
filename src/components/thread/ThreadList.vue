<template>
  <section class="thread-list-container">
    <h2 class="title">Threads</h2>
    <div class="list-item" v-for="thread in threads" :key="thread.id">
      <div class="list-item-title">
        <div class="list-item-text">
          <router-link :to="{ name: 'ThreadShow', params: { id: thread.id } }">
            <span>{{ thread.title }}</span>
          </router-link>
        </div>
        <div class="list-item-subtext">
          <span>By </span>
          <router-link :to="{ name: 'ThreadShow', params: { id: thread.id } }">
            <span>{{ getUserById(thread.userId).name }}</span>
          </router-link>
          <span
            >, <utility-date :timestamp="thread.publishedAt" isFromDate
          /></span>
        </div>
      </div>

      <div class="list-item-subtext list-item-replies">
        {{ thread.posts.length - 1 }} replies
      </div>

      <div class="list-item-last">
        <it-avatar
          :src="getUserById(getPostById(thread.lastPostId).userId).avatar"
          square
          class="list-item-icon"
        />
        <div>
          <div class="list-item-text">
            <router-link
              :to="{ name: 'ThreadShow', params: { id: thread.id } }"
            >
              <span>{{
                getUserById(getPostById(thread.lastPostId).userId).name
              }}</span>
            </router-link>
          </div>
          <div class="list-item-subtext">
            <utility-date :timestamp="thread.publishedAt" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import db from "@/data.json";
import UtilityDate from "../utility/UtilityDate.vue";

export default {
  name: "ThreadList",
  props: {
    threads: {
      type: Array,
      requirded: true,
    },
  },
  components: {
    UtilityDate,
  },
  data() {
    return {
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

<style scoped>
a {
  color: #4ea282;
  text-decoration: none;
}
a:hover {
  color: #165c41;
  text-decoration: underline;
}
.list-item {
  display: grid;
  grid-template-rows: 60px;
  grid-template-columns: 55% 15% 30%;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 10px;
}
.list-item:nth-child(2n) {
  background-color: #1730a109;
}
.list-item-text {
  font-size: 0.9rem;
}
.list-item-subtext {
  font-size: 0.8rem;
  color: dimgrey;
}
.list-item-replies {
  align-self: center;
  justify-self: end;
  margin: 5px;
}
.list-item-icon {
  margin: 5px;
  align-self: center;
}
.list-item-last {
  display: grid;
  grid-template-columns: 50px auto;
  align-self: center;
}
.list-item-title {
  align-self: center;
  margin-left: 20px;
}
.title {
  background-color: #223250;
  color: #ffffff;
  padding: 1rem;
  border-radius: 0 0 0 30px;
}
</style>
