import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  createWebHashHistory,
} from "vue-router";
import LoginPage from "../pages/LoginPage.vue";
import HomePage from "../pages/HomePage.vue";
import { getItem } from "../stores/actions/localStorage";

const routes: Array<RouteRecordRaw> = [
  {
    
    path: "/",
    name: "Login",
    component: LoginPage,
    meta: {
      title: "Login",
    },
  },

  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   component: HomePage,
  // },

  // {
  //   path: "/client",
  //   name: "Client",
  //   component: () => import("../pages/ClientPage.vue"),
  //   meta: {
  //     is_staff: true,
  //   },
  // },

  // {
  //   path: "/profile",
  //   name: "Profile",
  //   component: () => import("../pages/ProfilePage.vue"),
  // },

  // {
  //   path: "/emailReset",
  //   name: "EmailReset",
  //   component: () => import("../pages/EmailResetPage.vue"),
  // },
];

const history = createWebHistory();
const router = createRouter({
  history,
  routes,
});


// router.beforeEach((to, from, next) => {
//   const authObj = getItem("token");
//   // const requiresAdmin = to.matched.some(record => record.meta.is_admin)

//   console.log("ruta", Object.keys(to.meta));

//   if (Object.entries(to.meta) && Object.keys(to.meta).includes("is_staff")) {
//     if (!authObj.is_staff) next(from);
//   }

//   if (to.name != "Login" && !authObj) next({ name: "Login" });
//   if (to.name == "Login" && authObj) next({ name: "Dashboard" });
//   else next();
// });

export default router;





// "dev": "vite --host 192.168"
