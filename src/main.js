import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createWebHistory, createRouter } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import HowToPage from "./pages/HowToPage.vue";
import WhyPage from "./pages/WhyPage.vue";
import WishingPoolPage from "./pages/WishingPoolPage.vue";
import ContributePage from "./pages/ContributePage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/howto", component: HowToPage },
  { path: "/why", component: WhyPage },
  { path: "/wish", component: WishingPoolPage },
  { path: "/contribute", component: ContributePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
