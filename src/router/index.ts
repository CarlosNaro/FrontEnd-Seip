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
    // meta: {
    //   title: "Login",
    // },
    path: "/",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: HomePage,
  },

  {
    path: "/client",
    name: "Client",
    component: () => import("../pages/ClientPage.vue"),
    meta: {
      requiresAdmin: true,
    },
  },

  {
    path: "/profile",
    name: "Profile",
    component: () => import("../pages/ProfilePage.vue"),
  },
];

const history = createWebHistory();
const router = createRouter({
  history,
  routes,
});

router.beforeEach((to, from, next) => {
  const authObj = getItem("token");
  // const requiresAdmin = to.matched.some(record => record.meta.is_admin)

  console.log("ruta", Object.keys(to.meta));

  // console.log("is_admin:: ", is_admin)
  if (
    Object.entries(to.meta) &&
    Object.keys(to.meta).includes("requiresAdmin")
  ) {
    if (!authObj.is_admin) next(from);
  }
  if (to.name != "Login" && !authObj) next({ name: "Login" });
  if (to.name == "Login" && authObj) next({ name: "Dashboard" });
  else next();
});

export default router;

// "dev": "vite --host 192.168"
