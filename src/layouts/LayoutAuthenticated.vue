<script setup lang="ts">
import SideBar from './_components/SideBar.vue';
import menuSidebar from './actions/menuSideBar'
import {reactive} from 'vue'

import { useLayoutStore } from './actions/layout';

const LayoutStore = useLayoutStore()
const layoutAsidePadding = "xl:pl-60";

</script>
<template>
    <!-- <div :class="{
        'overflow-hidden lg:overflow-visible':LayoutStore.state.isAsideMobileExpanded
        }" >
        <span>hola mundo</span>
        <SideBar  :menu="menuSidebar" />
    </div> -->

    <div
    :class="{
      
      'overflow-hidden lg:overflow-visible': LayoutStore.state.isAsideMobileExpanded,
    }"
  >
    <div
      :class="[
        layoutAsidePadding,
        { 'ml-60 lg:ml-0': LayoutStore.state.isAsideMobileExpanded},
      ]"
      class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 "
    >
     
    <SideBar  :menu="menuSidebar" />
      <slot />
   
    </div>
  </div>

</template>

