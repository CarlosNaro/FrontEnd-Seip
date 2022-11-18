import { createRouter , createWebHistory , RouteRecordRaw, createWebHashHistory } from 'vue-router'

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
    },

    {
        meta: {
          title: "Client",
        },
        path: "/client",
        name: "client",
        component: () => import("../pages/ClientPage.vue"),
      },
    

]

const history = createWebHistory()
const router = createRouter({
    history,
    routes
})

export  default router