<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  username: {
    type: String,
    required: false,
  },
  avatar: {
    type: String,
    default: null,
  },
  api: {
    type: String,
    default: "avataaars",
  },
  size: {
    type: Number,
    default: 50,
  },
});

const avatar = computed(
  () =>
    props.avatar ??
    `https://avatars.dicebear.com/api/${props.api}/${props.username.replace(
      /[^a-z0-9]+/i,
      "-"
    )}.svg`
);

const username = computed(() => props.username);
</script>

<template>
  <div class="shadow-lg rounded-full">
    <!-- <img
      :src="avatar"
      :alt="username"
      class="rounded-full block h-auto w-full max-w-full bg-gray-100"
    /> -->

    <el-avatar :size="props.size">
      <img
        :src="avatar"
        :alt="username"
        class="rounded-full h-auto w-full max-w-full"
      />
    </el-avatar>

    <slot />
  </div>
</template>
