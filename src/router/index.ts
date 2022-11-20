import { createRouter , createWebHistory , RouteRecordRaw, createWebHashHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'

const routes: Array<RouteRecordRaw>=[
    {
        meta: {
            title: "Login",
          },
          path: "/",
          name: "login",
          component: LoginPage,
    },
    {
        meta: {
            title: "Home",
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
    routes,

})

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
//   scrollBehavior(to, from, savedPosition) {
//     return savedPosition || { top: 0 };
//   },
  
// });

export  default router