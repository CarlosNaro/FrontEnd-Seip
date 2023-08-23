<script setup lang="ts">
import { mdiAccountGroupOutline, mdiClose } from "@mdi/js";
import { ref } from "vue";

const isModalActive = ref(false);
const menu = reactive({
  title: "Client",
  icon: mdiAccountGroupOutline,
  main: Boolean,
});

const active = () => {
  isModalActive.value = !isModalActive.value;
};
</script>
<template>
  <NewClient
    v-if="isModalActive"
    title="Crear nuevo Cliente"
    :icon="mdiClose"
    v-model="isModalActive"
  />
  <SectionTitleLineWithButton
    :icon="menu.icon"
    :title="menu.title"
    :main="menu.main"
  >
    <button
      @click="active"
      class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      New Client
    </button>
  </SectionTitleLineWithButton>
  <TableClient />
</template>
