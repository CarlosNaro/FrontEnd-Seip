import LoginPage from "../pages/LoginPage.vue";
import {
  mdiMonitor,
  mdiAccountGroupOutline,
  mdiAccount,
  mdiCartPlus,
} from "@mdi/js";

export default {
  Login: {
    meta: {
      title: "Login",
    },
    path: "/login",
    name: "login",
    component: LoginPage,
  },

  RecoverPassword: {
    meta: {
      title: "Recuperar Contraseña",
    },
    path: "/recuperar-contrasena",
    name: "recoverpassword",
    component: () => import("../pages/RecoveryPasswordPage.vue"),
  },

  Home: {
    meta: {
      title: "Home",
      auth: true,
      // isAdmin: true,
    },
    path: "/",
    name: "Dashboard",
    icon: mdiMonitor,
    component: () => import("../pages/HomePage.vue"),
  },

  Client: {
    meta: {
      title: "Client",
      auth: true,
      // isAdmin: true,
    },
    path: "/cliente",
    name: "Client",
    icon: mdiAccountGroupOutline,
    component: () => import("../pages/ClientPage.vue"),
  },

  Product: {
    meta: {
      title: "Product",
      auth: true,
      // isAdmin: true,
    },
    path: "/producto",
    name: "Product",
    icon: mdiCartPlus,
    component: () => import("../pages/ProductPage.vue"),
  },

  Profile: {
    meta: {
      title: "Perfil",
      auth: true,
      // isAdmin: true,
    },
    path: "/perfil",
    name: "Profile",
    icon: mdiAccount,
    component: () => import("../pages/ProfilePage.vue"),
  },
};