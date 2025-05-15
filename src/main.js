import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";
import { createPinia } from "pinia";

import HomePage from "./views/Home.vue";
import AboutPage from "./views/About.vue";
import BlogPage from "./views/Blog.vue";
import OfertaPage from "./views/Oferta.vue";
import KontaktPage from "./views/Kontakt.vue";
import VoucheryPage from "./views/Vouchery.vue";
import PolitykaPrywatnosci from "./views/polityka-prywatnosci.vue";

const blogRoutes = {
  "trendsetter-transportu-lotniczego-air-taxi-podróżuj-szybko-i-wygodnie": () => import("./views/blogs/trendsetter-transportu-lotniczego-air-taxi-podróżuj-szybko-i-wygodnie.vue"),
};

const ofertaRoutes = {
  "air-taxi": () => import("./views/oferta/Oferta-Air-Taxi.vue"),
};

const heliportRoutes = {
  sosnowka: () => import("./views/heliporty/Sosnowka.vue"),
};

const vouchersRoutes = {
  "okolo-15-minut-lotu-helikopterem": () => import("./views/vouchery/okolo-15-minut-lotu-helikopterem.vue")
}

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/oferta", component: OfertaPage },
    { path: "/o-nas", component: AboutPage },
    { path: "/blog", component: BlogPage },
    { path: "/kontakt", component: KontaktPage },
    { path: "/vouchery", component: VoucheryPage },
    { path: "/polityka-prywatnosci", component: PolitykaPrywatnosci },
    {
      path: "/blog/:slug",
      component: blogRoutes["trendsetter-transportu-lotniczego-air-taxi-podróżuj-szybko-i-wygodnie"],
    },
    {
      path: "/oferta/:slug",
      component: ofertaRoutes["air-taxi"],
    },
    {
      path: "/heliporty/:slug",
      component: heliportRoutes["sosnowka"],
    },
    {
      path: "/vouchery/:slug",
      component: vouchersRoutes["okolo-15-minut-lotu-helikopterem"]
    }
  ],
});

const app = createApp(App);
const pinia = createPinia();
app.config.globalProperties.axios = axios;
app.use(pinia);
app.use(router);

app.mount("#app");

export default app;
