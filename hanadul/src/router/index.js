import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/user/LoginView.vue";
import SignupView from "../views/user/SignupView";

const routes = [
  {
    path: "/signin",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
