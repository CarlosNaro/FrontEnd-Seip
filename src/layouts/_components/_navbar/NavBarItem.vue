<script setup lang="ts">
import {
  mdiChevronUp,
  mdiChevronDown,
  mdiSunAngleOutline,
  mdiCalculator,
  mdiAccount
} from "@mdi/js";
import { RouterLink } from "vue-router";
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import BaseIcon from "../../../components/BaseIcon.vue";
// import UserAvatarCurrentUser from "@/components/UserAvatarCurrentUser.vue";
import NavBarMenuList from "./NavBarMenuList.vue";


export interface Imenu{
  to: string;
  icon: string;
  label: string;
  isCurrentUser: boolean;

  menu: {
    icon: string;
    label: string;
    to: string;

  };
}
const props = defineProps<{
  item: Imenu;
}>();

const nombre = "Carlos Alonso";

const emit = defineEmits(["menu-click"]);

const is = computed(() => {
  // if (props.item.href) {
  //   return "a";
  // }

  if (props.item.to) {
    return RouterLink;
  }

  return "div";
});

// // const styleStore = useStyleStore();

const componentClass = computed(() => {
  const base = [props.item.menu ? "lg:py-2 lg:px-3" : "py-2 px-3"];
  return base;
});

const itemLabel = computed(() => (props.item.isCurrentUser ? nombre : props.item.label));

const isDropdownActive = ref(false);

const menuClick = (event:any) => {
  emit("menu-click", event, props.item);

  if (props.item.menu) {
    isDropdownActive.value = !isDropdownActive.value;
  }
};

const menuClickDropdown = (event:any, item:any) => {
  emit("menu-click", event, item);
};

const root = ref(null);

const forceClose = (event:any) => {
  if (root.value && !root.value) {
    isDropdownActive.value = false;
  }

  

};

// onMounted(() => {
//   if (props.item.menu) {
//     window.addEventListener("click", forceClose);
//   }
// });

// onBeforeUnmount(() => {
//   if (props.item.menu) {
//     window.removeEventListener("click", forceClose);
//   }
// });
</script>

<template>
 
  <component
    :is="is"
    ref="root"
    class="block lg:flex items-center relative cursor-pointer"
    :to="item.to ?? null"
    :class="componentClass"
  >

    <div
      class="flex items-center"
      :class="{
        'bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0':
          item.menu,
      }"
    >
      <BaseIcon
        v-if="item.isCurrentUser"
        class="w-6 h-6 mr-3 inline-flex"
        :path="mdiAccount"
      />

      <BaseIcon v-if="item.icon" :path="item.icon" class="transition-colors" />

      <span class="px-2 transition-colors">{{ itemLabel }}</span>
      
      <BaseIcon
        v-if="item.menu"
        :path="isDropdownActive ? mdiChevronUp : mdiChevronDown"
        class="hidden lg:inline-flex transition-colors"
      />
    </div>



    <div
      v-if="item.menu"
      class="text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-800 dark:border-slate-700"
      :class="{ 'lg:hidden': !isDropdownActive }"
    >
      <NavBar-Menu-List :menu="item.menu" @menu-click="menuClickDropdown" />
    </div>



  </component>
</template>
