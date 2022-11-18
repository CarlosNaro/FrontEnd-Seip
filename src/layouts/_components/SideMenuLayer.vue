<script lang="ts" setup>
import { computed } from "vue";
import { mdiLogout, mdiClose } from "@mdi/js";
import { useLayoutStore } from "../actions/layout";
import SideMenuItem from "./SideMenuItem.vue";
import SideMenuList from "./SideMenuList.vue";

const layoutStore = useLayoutStore();
const asideStyle = "";
const asideBrandStyle = "";

// extraer los datos del menu
const props = defineProps<{
  isDropdownList: Boolean;
  menu: Array<string>;
}>();

const logoutItem = computed(() => ({
  label: "Logout",
  icon: mdiLogout,
  isLogout: true,
}));

// const emit = defineEmits(["menu-click"]);
// const menuClick = (event, item) => {
//   emit("menu-click", event, item);
// };

</script>

<template>
  <sidebar
    class="  lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden"
  >
    <div
      :class="asideStyle"
      class=" shadow-md bg-white lg:rounded-2xl flex-1 flex flex-col overflow-hidden"
    >
      <!-- data del encabesado  -->

      <div
        :class="asideBrandStyle"
        class=" shadow-sm flex flex-row h-14 items-center justify-between"
      >
        <div
          class="text-center flex-1 lg:text-left lg:pl-6 xl:text-center xl:pl-0"
        >
          <b class="font-black">S E I P</b>
          <!-- <img src="../img/Group_2.png" class="rounded-md " 
          width="100"
              /> -->
        </div>

        <button
          class="hidden lg:inline-block xl:hidden p-3"
          @click.prevent="layoutStore.state.isAsideLgActive = false"
        >
          <BaseIcon :path="mdiClose" />
        </button>
      </div>


      
      <!-- data de la lista  -->
      <!-- <div class=" aside-scrollbars-[slate] " > -->
      <div class=" flex-1 overflow-y-auto overflow-x-hidden ">
        <ul>
          <SideMenuItem
            v-for="(item, index) in props.menu"
            :key="index"
            :item="item"
            :is-dropdown-list="isDropdownList"
            
          />
        </ul>
      </div>



      <!-- data del logaut -->
      <ul>
        <SideMenuItem
          class="bg-blue-600 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          :item="logoutItem"
        />
      </ul>
    </div>
  </sidebar>
</template>

<style scoped>

</style>
