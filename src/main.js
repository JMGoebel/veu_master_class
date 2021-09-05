import { createApp } from "vue";
import App from "./App.vue";
import Equal from "equal-vue";
import "equal-vue/dist/style.css";

const forumApp = createApp(App);

forumApp.use(Equal);

forumApp.mount("#app");
