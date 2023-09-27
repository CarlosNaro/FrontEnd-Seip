<script setup lang="ts">
import { mdiTrendingUp } from "@mdi/js";
</script>

<template>
  <CardBox class="mb-6 last:mb-0">
    <main class="flex flex-col items-center md:flex-row md:justify-between p-6">
      <div class="flex flex-col items-center md:flex-row mb-5 md:mb-0">
        <UserAvatar class="w-12 h-12 mb-5 md:mb-0 md:mr-6" username="paulo" />

        <div class="text-center md:text-left overflow-hidden">
          <h1 class="font-medium text-xl">Paulo Guerra</h1>
          <p class="text-gray-500 dark:text-slate-400">
            3 de mayo de 2023 @ {{ "login" }}
          </p>
        </div>
      </div>

      <div
        class="flex items-center gap-2 px-5 py-2 text-xs rounded-full bg-[#10B981] text-white"
      >
        <BaseIcon size="20" :path="mdiTrendingUp" />
        <span> 70%</span>
      </div>
    </main>
  </CardBox>
</template>
