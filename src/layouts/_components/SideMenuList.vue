<script lang="ts" setup>
import SideMenuItem from './SideMenuItem.vue';

const props = defineProps<{
    isDropdownList: Boolean,
    menu:Array<string>
}>()
// const emit = defineEmits(["menu-click"]);

// const menuClick = (event, item) => {
//   emit("menu-click", event, item);
// };
</script>

<template>
  <ul>
    <SideMenuItem
      v-for="(item, index) in menu"
      :key="index"
      :item="item"
      :is-dropdown-list="isDropdownList"
    
    />
  </ul>
</template>
