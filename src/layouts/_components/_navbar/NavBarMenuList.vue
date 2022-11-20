<script setup lang="ts">
// import NavBarItem from "@/components/NavBarItem.vue";
import NavBarItem from "./NavBarItem.vue";

const props = defineProps<{
  menu:Array<object>
}>()


</script>

<template>
  <NavBar-Item 
    v-for="(item, index) in props.menu"
    :key="index"
    :item="item"
  />
</template>
