import Vue from "vue";
import VueRouter from "vue-router";
import BoardContainer from "../components/BoardContainer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: BoardContainer,
  },
  {
    path: "/boards/:id",
    name: "Boards",
    component: BoardContainer,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
