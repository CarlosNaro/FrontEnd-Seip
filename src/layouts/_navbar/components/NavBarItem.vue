<script setup lang="ts">
import {
  mdiChevronUp,
  mdiChevronDown,
  mdiSunAngleOutline,
  mdiCalculator,
  mdiAccount,
} from "@mdi/js";
import { RouterLink } from "vue-router";
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import BaseIcon from "../../../components/BaseIcon.vue";
import NavBarMenuList from "./NavBarMenuList.vue";
import { getItem } from "../../../core/interceptors/localStorage";
import { IMenuNavbar } from "../models/IMenu";
import routesConfig from "../../../router/routesConfig";

const props = defineProps<{
  item: IMenuNavbar;
}>();

const user = getItem("user");

const is = computed(() => {
  if (props.item.to) {
    return RouterLink;
  }

  return "div";
});

const emit = defineEmits(["menu-click"]);

const isDropdownActive = ref(false);

// const componentClass = computed(() => {
//   const base = [props.item.menu ? "lg:py-2 lg:px-3" : "py-2 px-3"];
//   return base;
// });

const componentClass = computed(() => {
  const base = [
    isDropdownActive.value,
    props.item.menu ? "lg:py-2 lg:px-3" : "py-2 px-3 hover:bg-gray-100 ",
  ];
  return base;
});

const itemLabel = computed(() =>
  props.item.isCurrentUser ? user.username : props.item.label
);

const router = useRouter();

const menuClick = (event: any) => {
  emit("menu-click", event, props.item);

  if (props.item.menu) {
    isDropdownActive.value = !isDropdownActive.value;
  }

  if (props.item.label == "Logout")
    localStorage.clear(), router.push(routesConfig.Login);
};
</script>

<template>
  <component
    :is="is"
    ref="root"
    class="block lg:flex items-center relative cursor-pointer"
    :class="componentClass"
    :to="item.to ?? null"
    @click="menuClick"
  >
    <div
      class="flex items-center"
      :class="{
        'bg-gray-100 dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0':
          item.menu,
      }"
    >
      <Base-Icon
        v-if="item.isCurrentUser"
        class="w-6 h-6 mr-3 inline-flex"
        :path="mdiAccount"
      />

      <Base-Icon
        v-if="item.icon"
        :path="item.icon"
        class="rounded-md transition-colors"
      />

      <span
        class="px-2 transition-colors"
        :class="{ 'lg:hidden': item.isDesktopNoLabel && item.icon }"
        >{{ itemLabel }}</span
      >

      <Base-Icon
        v-if="item.menu"
        :path="isDropdownActive ? mdiChevronUp : mdiChevronDown"
        class="hidden lg:inline-flex transition-colors"
      />
    </div>

    <div
      v-if="item.menu"
      class="text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg"
      :class="{ 'lg:hidden': !isDropdownActive }"
    >
      <NavBar-Menu-List :menu="item.menu" />
    </div>
  </component>
</template>
