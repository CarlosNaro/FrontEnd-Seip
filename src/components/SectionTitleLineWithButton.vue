<script setup lang="ts">
import BaseIcon from "./BaseIcon.vue";

import { useSlots, computed } from "vue";

// defineProps({
//   icon: {
//     type: String,
//     default: null,
//   },
//   title: {
//     type: String,
//     required: true,
//   },
//   main: Boolean,
// });

defineProps<{
  icon?: string;
  title?: string;
  main?: boolean;
}>();

const hasSlot = computed(() => useSlots().default);
</script>

<template>
  <section
    :class="{ 'pt-6': !main }"
    class="mb-6 flex items-center justify-between"
  >
    <div class="flex items-center">
      <BaseIcon v-if="icon" :path="icon" class="mr-2" size="25" />
      <h1 :class="main ? 'text-3xl ' : 'text-2xl'" class="leading-tight">
        {{ title }}
      </h1>
    </div>

    <slot v-if="hasSlot" />
    <!-- <BaseButton v-else :icon="mdiCog" color="whiteDark" /> -->
  </section>
</template>
