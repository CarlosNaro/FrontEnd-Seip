<script setup lang="ts">
import { ref } from "vue";
import { mdiClose, mdiDotsVertical } from "@mdi/js";
import { containerMaxW } from "../../../config";
import menuNavBar from "../actions/menuNavBar";
import BaseIcon from "../../../components/BaseIcon.vue";
import NavBarMenuList from "./NavBarMenuList.vue";

const isMenuNavBarActive = ref(false);
</script>

<template>
  <nav
    class="top-0 inset-x-0 fixed bg-gray-50 h-14 z-30 transition-position w-screen lg:w-auto"
  >
    <div class="flex lg:items-stretch" :class="containerMaxW">
      <div class="flex flex-1 items-stretch h-14">
        <slot />
      </div>

      <div class="flex items-center h-14 lg:hidden">
        <span @click="isMenuNavBarActive = !isMenuNavBarActive">
          <BaseIcon
            :path="isMenuNavBarActive ? mdiClose : mdiDotsVertical"
            size="24"
          />
        </span>
      </div>

      <div
        class="max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 left-0 bg-gray-50 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none"
        :class="[isMenuNavBarActive ? 'block' : 'hidden']"
      >
        <NavBarMenuList :menu="menuNavBar" />
      </div>
    </div>
  </nav>
</template>
