import { createRouter , createWebHistory , RouteRecordRaw } from 'vue-router'

import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'

const routes: Array<RouteRecordRaw>=[
    {
        meta: {
            title: "Select Login",
          },
          path: "/",
          name: "login",
          component: LoginPage,
    },
    {
        meta: {
            title: "Select Home",
          },
          path: "/dashboard",
          name: "Dashboard",
          component: HomePage,
    }
]

const history = createWebHistory()
const router = createRouter({
    history,
    routes
})

export  default router