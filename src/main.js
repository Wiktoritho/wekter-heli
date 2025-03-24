import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import { createPinia } from "pinia";

import HomePage from "./views/Home.vue";
import AboutPage from "./views/About.vue";
import BlogPage from "./views/Blog.vue";

const blogRoutes = {
  test: () => import("./views/blogs/test.vue"),
};

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/o-nas", component: AboutPage },
    { path: "/blog", component: BlogPage },
    {
      path: "/blog/:slug",
      component: blogRoutes["test"],
    },
  ],
});

const app = createApp(App);
const pinia = createPinia();
app.config.globalProperties.axios = axios;
app.use(pinia);
app.use(router);

app.mount("#app");

export default app;
