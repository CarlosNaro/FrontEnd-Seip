import { createRouter , createWebHistory , RouteRecordRaw } from 'vue-router'


import LoginPage from '../pages/LoginPage.vue'

const routes: Array<RouteRecordRaw>=[
    {
        meta: {
            title: "Select Login",
          },
          path: "/",
          name: "login",
          component: LoginPage,
    }
]

const history = createWebHistory()
const router = createRouter({
    history,
    routes
})

export  default router