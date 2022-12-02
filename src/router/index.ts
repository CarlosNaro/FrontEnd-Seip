import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  createWebHashHistory,
} from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import HomePage from "../pages/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    meta: {
      title: "Login",
    },
    path: "/",
    name: "Login",
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
    name: "Client",
    component: () => import("../pages/ClientPage.vue"),
  },
];

const history = createWebHistory();
const router = createRouter({
  history,
  routes,
});


// router.beforeEach((to, from, next)=>{
//   const isAuthenticoted = localStorage.getItem("token-user")
//   if(to.name != 'Login' && !isAuthenticoted ) next({name:"Login"});
//   else next();
// })

export default router;
