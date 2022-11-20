<script lang="ts" setup>
import { useLayoutStore } from '../../actions/layout';
import SideMenuLayer from "./SideMenuLayer.vue";
// import {arrayCollectionToObject} from '../actions/menuSideBar'
import menuSidebar from '../../actions/menuSideBar'

const layoutStore = useLayoutStore();


</script>
<template>

  <Side-Menu-Layer
  class="  "
    :class="[
      layoutStore.isAsideMobileExpanded.value ? 'left-0' : '-left-60 lg:left-0 ',
      { 'lg:hidden xl:flex': !layoutStore.isAsideLgActive.value },
    ]"
  :menu="menuSidebar"
  />
</template>
