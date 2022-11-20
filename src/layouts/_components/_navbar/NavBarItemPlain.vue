<script setup lang="ts">
// import { useStyleStore } from "@/stores/style";

defineProps({
  display: {
    type: String,
    default: "flex",
  },
  useMargin: Boolean,
});

//const styleStore = useStyleStore();

const navBarItemLabelStyle =""
const navBarItemLabelHoverStyle = ""
</script>

<template>
  <div
    :class="[
      navBarItemLabelHoverStyle,
      navBarItemLabelStyle ? 'my-2 mx-3' : 'py-2 px-3',
    ]"
    class="items-center cursor-pointer dark:text-white dark:hover:text-slate-400"
  >
    <slot />
  </div>
</template>
