<script setup lang="ts">
import { computed, ref } from "vue";

import { mdiCheckDecagram } from "@mdi/js";
import UserAvatar from "./UserAvatar.vue";

const username = "avatar";

const props = defineProps<{
  username?: string;
  avatar?: string;
}>();

const userSwitchVal = ref(false);
</script>

<template>
  <div class="rounded-2xl mb-3">
    <div
      class="flex items-center rounded-lg bg-white justify-center flex-wrap lg:justify-center"
    >
      <UserAvatar
        class="lg:mx-12"
        :username="props.username"
        :avatar="props.avatar"
      />

      <div class="space-y-3 text-center md:text-left lg:mx-12">
        <h1 class="text-2xl">
          Howdy, <b>{{ username }}</b
          >!
        </h1>
        <p>Last login <b>12 mins ago</b> from <b>127.0.0.1</b></p>
      </div>
    </div>
  </div>
</template>
