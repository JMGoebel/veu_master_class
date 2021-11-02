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

// Global Component Imports
const requireComponent = require.context(
  "./components",
  true,
  /(Base|Utility)[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  let baseComponentConfig = requireComponent(fileName);
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig;

  const baseComponentName =
    baseComponentConfig.name ||
    fileName.replace(/^.+\//, "").replace(/\.\w+$/, "");

  forumApp.component(baseComponentName, baseComponentConfig);
});

forumApp.mount("#app");
