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
      
      is_admin: false,
      
    }
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


router.beforeEach((to, from, next)=>{

  const isAuthenticoted = getItem("token")
  // const is_admin = to.matched.some(record => record.meta.is_admin)
  const  is_admin = isAuthenticoted.is_admin


  
  if(to.name != 'Login' && !isAuthenticoted  ) next({name:"Login"});
  if(to.name == 'Login' && isAuthenticoted  ) next({name:"Dashboard"});
  
  else next();
})





export default router;


// "dev": "vite --host 192.168"

