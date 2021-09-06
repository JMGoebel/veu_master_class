import { createApp } from "vue";
import App from "./App.vue";
import Equal from "equal-vue";
import "equal-vue/dist/style.css";
import router from "@/router/router";

const forumApp = createApp(App);

forumApp.use(Equal);
forumApp.use(router);

forumApp.mount("#app");
