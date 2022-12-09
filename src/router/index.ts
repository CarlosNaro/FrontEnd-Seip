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


router.beforeEach((to, from, next)=>{

  const isAuthenticoted = getItem("token-user")
  if(to.name != 'Login' && !isAuthenticoted ) next({name:"Login"});
  if(to.name == 'Login' && isAuthenticoted ) next({name:"Dashboard"});
  
  else next();
})

export default router;


// router.beforeEach((to, from, next)=>{
  
//   if(localStorage.getItem("token-user")){

//     if(to.name === 'Login' ) next({name:"Dashboard"});
    
//   }else{
//     if(to.name !== 'Login' ) next({name:"Login"});    
//   }
//    next();
// })