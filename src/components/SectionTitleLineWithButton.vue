<script setup lang="ts">
import BaseIcon from "./BaseIcon.vue";

const props = defineProps<{
  icon?: string;
  title: String;
  main: Boolean;
}>();



</script>

<template>
  <section
    class="mb-6 flex items-center justify-between"
    :class="{ 'pt-6': !props.main }"
  >
    <div class="flex items-center">
      <BaseIcon v-if="props.icon" :path="props.icon" class="mr-2" size="20" />
      <h1 :class="props.main ? 'text-3xl' : ' text-2xl'" class="leading-tight">
        {{ props.title }}
      </h1>
    </div>
    <slot />
    <!-- <BaseButton v-else :icon="mdiCog" color="whiteDark" /> -->
  </section>
</template>
