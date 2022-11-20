<script setup lang="ts">
// import NavBarItem from "@/components/NavBarItem.vue";
import NavBarItem from "./NavBarItem.vue";

// defineProps({
//   menu: {
//     type: Array,
//     default: () => [],
//   },
// });

const props = defineProps<{
  menu:Array<object>
}>()

const emit = defineEmits(["menu-click"]);

const menuClick = (event:any, item:any) => {
  emit("menu-click", event, item);
};
</script>

<template>
  <NavBar-Item class=" bg-yellow-300"
    v-for="(item, index) in props.menu"
    :key="index"
    :item="item"
    @menu-click="menuClick"
  />
</template>
