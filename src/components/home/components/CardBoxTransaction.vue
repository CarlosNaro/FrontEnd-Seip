<script setup lang="ts">
import { mdiCashPlus } from "@mdi/js";
</script>

<template>
  <CardBox class="mb-6 last:mb-0">
    <main class="flex flex-col md:flex-row items-center md:justify-between p-6">
      <div
        class="flex flex-col md:flex-row justify-center items-center mb-6 md:mb-0"
      >
        <span
          class="flex items-center bg-gray-50 p-3 rounded-full mb-5 md:mr-6"
        >
          <BaseIcon class="text-[#10B981]" :size="24" :path="mdiCashPlus" />
        </span>
        <div class="text-center space-y-1 md:text-start">
          <h1 class="text-xl">$375.53</h1>
          <p class="text-gray-500"><b>Hace 3 días</b> via Yape</p>
        </div>
      </div>

      <div class="flex flex-col items-center md:items-end space-y-2">
        <p class="text-gray-500">Cuenta de Ahorro</p>
        <span
          class="inline-flex px-4 py-1 text-xs rounded-full bg-[#10B981] text-white"
        >
          Deposito</span
        >
      </div>
    </main>
  </CardBox>
</template>
