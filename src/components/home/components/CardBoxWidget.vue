<script setup lang="ts">
import { mdiCog, mdiAlertCircleOutline } from "@mdi/js";
import { onMounted, ref, computed, watch } from "vue";

const props = defineProps<{
  title: string;
  value?: number;
  icon: string;
  prefix?: string;
  suffix?: string;
  color?: string;
}>();

const value = computed(() => (props.value ? props.value : 0));
const newValue = ref(0);

const formatNumber = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const newValueFormatted = computed(() =>
  newValue.value < 1000 ? newValue.value : formatNumber(newValue.value)
);

const grow = (m: any) => {
  const v = Math.ceil(newValue.value + m);

  if (v > value.value) {
    newValue.value = value.value;
    return false;
  }

  newValue.value = v;

  setTimeout(() => {
    grow(m);
  }, 25);
};

const growInit = () => {
  newValue.value = 0;
  grow(value.value / (500 / 25));
};

watch(value, () => {
  growInit();
});

onMounted(() => {
  growInit();
});
// const color = computed(() => props.color?.split("bg")[1]);

// console.log(`bg${color.value} `);
</script>

<!-- :class="`bg${color}`" -->
<template>
  <CardBox class="p-6">
    <div class="flex justify-between mb-3">
      <div
        :class="props.color"
        class="flex items-center justify-between px-5 my-1 text-xs rounded-full"
      >
        <BaseIcon w="4" h="4" :path="mdiAlertCircleOutline" />

        <span class="ml-1">12%</span>
      </div>
      <div
        class="inline-flex cursor-pointer justify-center items-center focus:outline-none transition-colors focus:ring duration-150 border p-1 bg-slate-50 hover:bg-slate-200 shadow-lg rounded"
      >
        <BaseIcon :path="mdiCog" />
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="text-start">
        <h1 class="text-lg leading-tight text-gray-500">{{ props.title }}</h1>
        <h2 class="text-3xl leading-tight font-semibold">
          {{ props.prefix }} {{ newValueFormatted }} {{ props.suffix }}
        </h2>
      </div>
      <BaseIcon
        :class="props.color"
        size="48"
        w=""
        h="h-16"
        :path="props.icon"
      />
    </div>
  </CardBox>
</template>

<style scoped>
.activeColor {
  @apply bg-[color];
}
</style>
