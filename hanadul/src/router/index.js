import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/user/LoginView.vue";

const routes = [
  {
    path: "/signin",
    name: "Login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
