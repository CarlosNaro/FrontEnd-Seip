<script setup lang="ts">
import LayoutAuthenticated from "../layouts/LayoutAuthenticated.vue";
import SectionMain from "../components/SectionMain.vue";
import SectionTitleLineWithButton from "../components/SectionTitleLineWithButton.vue";
import { onMounted, reactive, computed, ref } from "vue";
import useAuthStore from "../stores/Prueba/AuthStore";
import { getItem } from "../stores/actions/localStorage";
import { mdiFamilyTree, mdiMicrosoftXboxControllerBatteryAlert } from "@mdi/js";
import jwt_decode from "jwt-decode";
import routesConfig from "../router/routesConfig";
import { menuSidebar } from "../layouts/_sidebar/actions/menuSideBar";
import { IMenu } from "../layouts/_sidebar/models/IMenu";
import { useLayoutStore } from "../layouts/_sidebar/stores/layout";
// import menuStore from "../layouts/_navbar/store";

// import jwt_decode from "jwt-decode";

// const getExpent = computed(()=> useAuthStore().getAuth() )
// const setExpent = useAuthStore().setExpens()

const dataRouter = routesConfig;

const token = getItem("token");

const is_staff = token.is_staff;

const menu = reactive({
  icon: mdiFamilyTree,
  title: "Prueba",
  main: Boolean,
});

export interface ISidebar {
  name: string;
  path: string;
}

const router = useRouter();
const routes = router.getRoutes().map((route: any) => route);

// console.log("token", is_staff);

const menuRouter = () => {};

routes.forEach((route: any) => {
  // const isAdmin = route.meta?.isAdmin || false;

  if (route.meta?.isAdmin) {
    const navbar = reactive<ISidebar>({
      name: "route.name",
      path: "route.path",
    }) as ISidebar;
    // console.log("primaS ", navbar);
  }
});

// console.log("Routes ", routes);

const menuList = computed(() => menuSidebar());
// console.log("en duro ", menuSidebar());

// console.log("config : ", dataRouter.Client.icon);

// console.log("smenusa ", menuList.value);
// console.log("******");
// Almacenar todas las rutas en un array
const allRoutes = Object.values(routesConfig);

// Acceder a la información de una ruta específica
const loginRoute = allRoutes.find((route) => route);
// console.log("loginRoute ", loginRoute);

const iconsArray = Object.values(routesConfig).map((route) => route);
const ArrayMenu = computed(() => iconsArray);
// console.log(" iconsArray ::", iconsArray);
// console.log(" ArrayMenu*** ::", ArrayMenu.value);

const adminn = computed(() => useLayoutStore());

// Recorrer todas las rutas
// allRoutes.forEach((route) => {
//   console.log(" loginRoute item ", route);
// });
</script>
<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="menu.icon"
        :title="menu.title"
        :main="menu.main"
      >
        <!-- <button
          type="submit"
          class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          @click="isModalActive = true"
        >
          New Expen
        </button> -->
      </SectionTitleLineWithButton>

      <!-- <span v-for="(item, index) in getExpent " :key="item" >{{item}}</span> -->

      <!-- <pre v-for="(index, item) in menuList" :key="item">{{ index }}</pre>
      <span> logica para los menus </span>
      <span> szzzzzzzzzzzzegundo</span>
      <pre v-for="(index, item) in iconsArray" :key="item">
 
               {{ index.icon }}</pre
      > -->
    </SectionMain>
  </LayoutAuthenticated>
</template>
