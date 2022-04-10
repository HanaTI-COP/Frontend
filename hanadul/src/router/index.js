import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/user/LoginView.vue";
<<<<<<< HEAD
import MyPage from "../views/profile/MyPage.vue";
=======
import SignupView from "../views/user/SignupView";
>>>>>>> d2137d2d14a03818028261b7a631c73458ad7a25

const routes = [
  {
    path: "/signin",
    name: "Login",
    component: LoginView,
  },
  {
<<<<<<< HEAD
    path: "/mypage",
    name: "MyPage",
    component: MyPage,
=======
    path: "/signup",
    name: "Signup",
    component: SignupView,
>>>>>>> d2137d2d14a03818028261b7a631c73458ad7a25
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
