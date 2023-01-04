<script setup lang="ts">
import { mdiClockOutline } from "@mdi/js";
import CardBoxAlert from "../components/CardBoxAlert.vue";
import useAuthStore from "../stores/AuthStore";
import { ref } from "vue";

const token_expired = useAuthStore().expiredToken();
const isModalActive = ref(false);
if (token_expired) isModalActive.value = true;


</script>

<template>
  <div class="">
    <CardBoxAlert
      v-model="isModalActive"
      title="Time Expired"
      :icon="mdiClockOutline"
    >
      <p>Username or password <b>incorrect¡</b></p>

      <div
        class="flex flex-col gap-2 md:flex-row md:gap-10 md:justify-between w-full pt-5"
      >
        <button
          type="submit"
          @click.prevent=""
          class="positive-button relative w-full"
        >
          Confirm
        </button>

        <button
          type="submit"
          @click.prevent=""
          class="negative-button relative w-full"
        >
          Cancel
        </button>
      </div>
    </CardBoxAlert>
  </div>
</template>
