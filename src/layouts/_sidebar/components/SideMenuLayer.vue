<script lang="ts" setup>
import { computed, ref } from "vue";
import { mdiLogout, mdiClose } from "@mdi/js";
import { useLayoutStore } from '../stores/layout'
import SideMenuItem from "./SideMenuItem.vue";
import BaseIcon from "../../../components/BaseIcon.vue";

const layoutStore = useLayoutStore();

// extraer los datos del menu

const props = defineProps<{
  menu: Array<object>;
}>();

const logoutItem = computed(() => ({
  label: "Logout",
  icon: mdiLogout,
  isLogout: true,
}));
</script>

<template>
  <div id="sideBar"
    class="lg:py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden"
  >
    <div class="shadow-md bg-white lg:rounded-2xl flex-1 flex flex-col overflow-hidden"
    >
      <!-- data del encabesado  -->

      <div class="shadow-sm flex flex-row h-14 items-center justify-between"
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
          class="hidden lg:inline-block xl:hidden  hover:bg-indigo-100 hover:shadow-md rounded-full h-8 w-8 text-center py-1 "
          @click.prevent="layoutStore.isAsideLgActive.value = false"
        >
          <Base-Icon :path="mdiClose" />
        </button>
      </div>

      <!-- <div class=" aside-scrollbars-[slate] " > -->
      <!-- data de la lista  -->
      <div class="flex-1 overflow-y-auto overflow-x-hidden">
        <ul>
          <Side-Menu-Item
          class="text-blue-600"
            v-for="(item, index) in props.menu"
            :key="index"
            :item="item"
          />
        </ul>
      </div>
      <!-- data del logaut -->
      <ul>
        <Side-Menu-Item
          class="bg-blue-600 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          :item="logoutItem"
        />
      </ul>
    </div>
  </div>
</template>


