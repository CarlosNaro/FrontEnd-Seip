<script lang="ts" setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
//import { useStyleStore } from "@/stores/style.js";
import { mdiMinus, mdiPlus } from "@mdi/js";
//import { getButtonColor } from "@/colors.js";
import BaseIcon from "../../components/BaseIcon.vue";
//import AsideMenuList from "@/components/AsideMenuList.vue";

// const props = defineProps({
//   item: {
//     type: Object,
//     required: true,
//   },
//   isDropdownList: Boolean,
// });

const props = defineProps<{
    isDropdownList: Boolean,
    item:Array<string>
}>()


const asideMenuItemActiveStyle =""

const emit = defineEmits(["menu-click"]);

//const styleStore = useStyleStore();

//const hasColor = computed(() => props.item && props.item.color);

// const asideMenuItemActiveStyle = computed(() =>
//   hasColor.value ? "" : styleStore.asideMenuItemActiveStyle
// );

const isDropdownActive = ref(false);
const hasDropdown = computed(() => !!props.item);

// const componentClass = computed(() => [
//   props.isDropdownList ? "py-3 px-6 text-sm" : "py-3",
//   hasColor.value
//     ? getButtonColor(props.item.color, false, true)
//     : `${styleStore.asideMenuItemStyle} dark:text-slate-300 dark:hover:text-white`,
// ]);

const componentClass = computed(() => [
  props.isDropdownList ? "py-3 px-6 text-sm" : "py-3",
//   hasColor.value
//     ? getButtonColor(props.item.color, false, true)
//     : `${styleStore.asideMenuItemStyle} dark:text-slate-300 dark:hover:text-white`,
]);



// const hasDropdown = computed(() => !!props.item.menu);

// const menuClick = (event) => {
//   emit("menu-click", event, props.item);

//   if (hasDropdown.value) {
//     isDropdownActive.value = !isDropdownActive.value;
//   }
// };
</script>

<template>
  <li>
    <component
      :is="props.item ? RouterLink : 'a'"
      v-slot="vSlot"
      :to="props.item ?? null"
      class="flex cursor-pointer"
      :class="componentClass"
      
    >
      <BaseIcon
        v-if="props.item.icon"
        :path="props.item.icon"
        class="flex-none"
        :class="[vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle : '']"
        w="w-16"
        :size="18"
      />

      

      <span
        class="grow text-ellipsis line-clamp-1"
        :class="[
          { 'pr-12': !hasDropdown },
          vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle : '',
        ]"
        >{{ props.item.label }}</span
      >
      
      <!-- <BaseIcon
        v-if="hasDropdown"
        :path="isDropdownActive ? mdiMinus : mdiPlus"
        class="flex-none"
        :class="[vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle : '']"
        w="w-12"
      /> -->
    </component>
    <!-- <AsideMenuList
      v-if="hasDropdown"
      :menu="item.menu"
      :class="[
        styleStore.asideMenuDropdownStyle,
        isDropdownActive ? 'block dark:bg-slate-800/50' : 'hidden',
      ]"
      is-dropdown-list
    /> -->
  </li>
</template>
