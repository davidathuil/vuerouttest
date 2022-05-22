import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilView from '../views/ProfilView.vue'
import HelloWorld from "../components/HelloWorld.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Profil/:id',
    name: 'profile',
    component: ProfilView,
    children: [{name: 'hello', path: 'settings/:idid', component: HelloWorld }],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
