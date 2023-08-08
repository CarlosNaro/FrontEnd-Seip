<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  username?: string;
  avatar?: string;
}>();

const username = computed(() => props.username);
</script>

<template>
  <div class="shadow-lg rounded-full">
    <img
      :src="props.avatar"
      :alt="username"
      class="rounded-full block h-60 w-60"
    />
  </div>
</template>
<!-- class="rounded-full  block h-60  w-60 bg-gray-100 " -->
<!-- class="p-3" -->
