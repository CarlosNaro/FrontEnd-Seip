<script setup lang="ts">
import BaseIcon from "./BaseIcon.vue";
import { useSlots, computed } from "vue";
const props = defineProps<{
  icon?: string;
  title: String;
  main: Boolean;
}>();
const hasSlot = computed(() => useSlots().default);
</script>

<template>
  <section
    :class="{ 'pt-6': !props.main }"
    class="mb-6 flex items-center justify-between"
  >
    <div class="flex items-center">
      <BaseIcon v-if="props.icon" :path="props.icon" class="mr-2" size="25" />
      <h1 :class="props.main ? 'text-3xl ' : 'text-2xl'" class="leading-tight">
        {{ props.title }}
      </h1>
    </div>

    <slot v-if="hasSlot" />
    <!-- <BaseButton v-else :icon="mdiCog" color="whiteDark" /> -->
  </section>
</template>
