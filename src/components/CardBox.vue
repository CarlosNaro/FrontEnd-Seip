<script setup lang="ts"></script>
<template>
  <!-- class="p-6 flex flex-col items-center rounded-2xl shadow-lg w-10/12 md:w-3/5 lg:w-2/5 xl:w-3/12 z-50 text-red-600" -->
  <div
    class="p-4 rounded-lg shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50 bg-white"
  >
    <slot />
  </div>
</template>

<style scoped>
.max-h-modal {
  max-height: calc(100vh - 160px);
}
</style>
