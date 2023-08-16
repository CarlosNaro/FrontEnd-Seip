<script lang="ts" setup>
const props = defineProps<{
  title: String;
}>();
</script>
<template>
  <div class="flex items-center font-semibold justify-between mb-3">
    <h1 class="text-base md:text-2xl">
      {{ props.title }}
    </h1>

    <slot />
  </div>
</template>
