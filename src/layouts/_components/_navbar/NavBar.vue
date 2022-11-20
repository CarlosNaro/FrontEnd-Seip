<script setup lang="ts">
import { ref } from "vue";
import { mdiClose, mdiDotsVertical } from "@mdi/js";
import { containerMaxW } from "../../../config";
import menuNavBar from '../../actions/menuNavBar'
import NavBarItemPlain from './NavBarItemPlain.vue'
import BaseIcon from "../../../components/BaseIcon.vue";
import NavBarMenuList from "./NavBarMenuList.vue";

// import BaseIcon from "@/components/BaseIcon.vue";
// import NavBarMenuList from "@/components/NavBarMenuList.vue";
// import NavBarItemPlain from "@/components/NavBarItemPlain.vue";

// defineProps({
//   menu: {
//     type: Array,
//     required: true,
//   },
// });

const emit = defineEmits(["menu-click"]);

const menuClick = (event:any, item:any) => {
  emit("menu-click", event, item);
};

const isMenuNavBarActive = ref(false);

const manus:Array<string> = ['carlos','juan','pedro','santiago']

</script>

<template>
  <nav
    class="top-0 inset-x-0 fixed bg-gray-50 h-14 z-30  transition-position w-screen lg:w-auto "
  >
    <div class="flex lg:items-stretch" :class="containerMaxW">
      <div class="flex flex-1 items-stretch h-14  ">
        <slot />
      </div>


      <div class="flex items-center h-14 lg:hidden">
        <span
          @click.prevent="isMenuNavBarActive = !isMenuNavBarActive"
        >
          <BaseIcon
            :path="isMenuNavBarActive ? mdiClose : mdiDotsVertical"
            size="24"
          />
        </span>


      </div>


      <div
        class="max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50  shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none "
        :class="[isMenuNavBarActive ? 'block' : 'hidden']"
      >

      <!-- <ul v-for="(item,index) in manus" :key="index" >
        {{item}}
      </ul> -->
      
        <NavBarMenuList :menu="menuNavBar" @menu-click="menuClick" />
      </div>


    </div>
  </nav>
</template>
