<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  username?: string,
  avatar?: string,

  // avatar: {
  //   type: String,
  //   default: null,
  // },
  
}>()


const username = computed(() => props.username);
</script>

<template>
  <div class="p-3">
    <img
      :src="props.avatar"
      :alt="username"
    />
  </div>
</template>
<!-- class="rounded-full  block h-60  w-60 bg-gray-100 " -->
