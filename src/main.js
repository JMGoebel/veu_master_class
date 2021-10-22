// Vue
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";

// CSS Framework
import Equal from "equal-vue";
import "equal-vue/dist/style.css";

const forumApp = createApp(App);

forumApp.use(Equal);
forumApp.use(router);

forumApp.mount("#app");
