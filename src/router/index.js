import Vue from "vue";
import VueRouter from "vue-router";
import BoardA from "../components/BoardA.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "boardA",
    component: BoardA,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
