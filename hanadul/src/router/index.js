import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/user/LoginView.vue'
import SignupView from '../views/user/SignupView'
import MyPage from '../views/profile/MyPage.vue'

const routes = [
  {
    path: '/signin',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupView,
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
