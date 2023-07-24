import LoginPage from "../pages/LoginPage.vue";
import { mdiMonitor, mdiAccountGroupOutline } from "@mdi/js";

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
      isAdmin: true,
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
      isAdmin: true,
    },
    path: "/cliente",
    name: "Client",
    icon: mdiAccountGroupOutline,
    component: () => import("../pages/ClientPage.vue"),
  },
};

// Profile: {
//   path: "/perfil",
//   name: "Profile",
//   component: () => import("../pages/ProfilePage.vue"),
//   meta: {
//     title: "Perfil",
//     auth: true,
//   },
// },

// Procedure: {
//   path: "/tramites",
//   name: "procedure",
//   component: () => import("../pages/ProcedurePage.vue"),
//   meta: {
//     title: "Tramites",
//     layout: defaultLayout,
//     auth: true,
//   },
// },
