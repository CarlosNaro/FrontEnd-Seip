<script lang="ts" setup>
import { useLayoutStore } from "../stores/layout";
import SideMenuLayer from "./SideMenuLayer.vue";
import OverlayLayer from "../../../components/OverlayLayer.vue";
import { menuSidebar } from "../actions/menuSideBar";

const layoutStore = useLayoutStore();

const menuList = computed(() => menuSidebar());
</script>
<template>
  <Side-Menu-Layer
    :class="[
      layoutStore.isAsideMobileExpanded.value
        ? 'left-0'
        : '-left-60 lg:left-0 ',
      { 'lg:hidden xl:flex': !layoutStore.isAsideLgActive.value },
    ]"
    :menu="menuList"
  />

  <OverlayLayer
    v-show="layoutStore.isAsideLgActive.value"
    z-index="z-30"
    @overlay-click="layoutStore.isAsideLgActive.value = false"
  />
</template>
