import { computed } from "vue";
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
  createWebHashHistory,
} from "vue-router";
import routesConfig from "./routesConfig";
import { getItem } from "../core/actions/localStorage";

//************ */
let routes = [
  routesConfig.Login,
  routesConfig.RecoverPassword,
  routesConfig.Home,
  routesConfig.Client,
  routesConfig.Product,
  routesConfig.Profile,
] as RouteRecordRaw[];

const history = createWebHistory(import.meta.env.BASE_URL);
const router = createRouter({
  history,
  routes,
});

router.beforeEach((to, from, next) => {
  const APP_NAME = import.meta.env.VITE_APP_APP_NAME as string;
  // const authObj = getItem("user") !== null;
  const isAuth = getItem(`${APP_NAME}_token`) !== null;
  const { auth } = to.meta;
  if (auth && !isAuth) {
    next(routesConfig.Login);
    return;
  }
  next();
});

export default router;

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: "/",
//     name: "Login",
//     component: LoginPage,
//     meta: {
//       title: "Login",
//     },
//   },

//   {
//     path: "/recoveryPassword",
//     name: "RecoverPassword",
//     component: () => import("../pages/RecoveryPasswordPage.vue"),
//     meta: {
//       title: "Recover Password",
//     },
//   },

// ];

// const history = createWebHistory();
// const router = createRouter({
//   history,
//   routes,
// });

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

// export default router;

// // "dev": "vite --host 192.168"
