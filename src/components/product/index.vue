<script setup lang="ts">
import { mdiCartPlus, mdiClose } from "@mdi/js";

const menu = reactive({
  title: "Product",
  icon: mdiCartPlus,
  main: Boolean,
});

const isModalActive = ref(false);

const isActiveModel = () => {
  isModalActive.value = !isModalActive.value;
};
</script>

<template>
  <NewProduct
    v-if="isModalActive"
    title="Agregar producto"
    :icon="mdiClose"
    v-model="isModalActive"
  />

  <SectionTitleLineWithButton :title="menu.title" :icon="mdiCartPlus" main>
    <button
      @click="isActiveModel"
      class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      New Product
    </button>
  </SectionTitleLineWithButton>

  <TableProduct />
</template>
