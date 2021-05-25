import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Country from "../views/Country.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/country/:name",
    name: "country-page",
    component: Country,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
