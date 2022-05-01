import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/user/LoginView.vue'
import SignupView from '../views/user/SignupView'
import MyPage from '../views/profile/MyPage.vue'
import CreatePJT from '../views/NewProject/NewInput.vue'
import Matching from '../views/NewProject/Matching.vue'
import AppliMyPage from '../views/profile/AppliMyPage.vue'

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
  {
    path: '/createpjt',
    name: 'CreatePJT',
    component: CreatePJT,
  },
  {
    path: '/matching',
    name: 'Matching',
    component: Matching,
  },
  { 
    path : '/applipage',
    name : 'AppliMyPage',
    component : AppliMyPage,
    
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
