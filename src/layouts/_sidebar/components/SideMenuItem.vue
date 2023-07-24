<script setup lang="ts">
import BaseIcon from "../../../components/BaseIcon.vue";
import { useRouter, RouterLink } from "vue-router";
import { useLayoutStore } from "../stores/layout";
import { getItem } from "../../../stores/actions/localStorage";
import { onMounted } from "vue";
import { IMenu } from "../models/IMenu";
import routesConfig from "../../../router/routesConfig";
import {
  mdiChevronUp,
  mdiChevronDown,
  mdiSunAngleOutline,
  mdiCalculator,
  mdiAccount,
  mdiLogout,
} from "@mdi/js";

export interface Imenu {
  name: string;
  path: string;
  icon: string;
  isLogout: boolean;
}

const token = getItem("token");

const props = defineProps<{
  item: IMenu;
}>();

const router = useRouter();

const logout = () => {
  if (props.item.name == "Logout") {
    localStorage.clear();
    router.push(routesConfig.Login);
  }
};
</script>
<template>
  <li>
    <component
      :is="props.item.path ? RouterLink : 'a'"
      v-slot="vSlot"
      :to="props.item.path ?? null"
      class="flex cursor-pointer py-3"
      :class="{ active: props.item.path == router.currentRoute.value.path }"
      @click="logout"
    >
      <Base-Icon
        v-if="props.item.icon"
        :path="props.item.icon"
        class="flex-none"
        :class="[vSlot]"
        w="w-16"
        :size="18"
      />

      <span class="grow text-ellipsis line-clamp-1" :class="['pr-12', vSlot]">{{
        props.item.name
      }}</span>
    </component>
  </li>
</template>

<style scoped>
.active {
  color: black;
}
</style>
