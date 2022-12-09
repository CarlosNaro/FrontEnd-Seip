<script lang="ts" setup>
import OverlayLayer from "./OverlayLayer.vue";
import CardBoxTitle from "./CardBoxTitle.vue";
import BaseIcon from "./BaseIcon.vue";
import { mdiClose } from "@mdi/js";
import { computed, ref } from "vue";

const props = defineProps<{
  title: String;
  modelValue: Boolean;
  hasCancel?: boolean;
}>();

// const value = ref(props.modelValue)
const emit = defineEmits(["update:modelValue", "cancel"]);

const value = computed({
  get: () => props.modelValue,
  set: (valor) => emit("update:modelValue", valor),
});

const confirmCancel = (valor: any) => {
  value.value = false;
  emit(valor);
};
const Cancel = () => confirmCancel("cancel");

window.addEventListener("keydown", (e: any) => {
  if (e.key === "Escape") {
    Cancel();
  }
});
</script>
<template>
  <OverlayLayer v-show="value" @overlay-click="Cancel">
    <div
      v-show="value"
      class="max-h-modal p-6 flex flex-col items-center rounded-2xl shadow-lg w-11/12 md:w-3/5 lg:w-2/5 xl:w-3/12  z-50 text-red-600 "
    >
      <span class="flex hover:bg-slate-200 rounded-full items-center p-1" @click="Cancel">
        <svg style="width: 48px; height: 48px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"
          />
        </svg>
      </span>
      <CardBoxTitle  :title="props.title" />
      <hr />

      <slot />
    </div>
  </OverlayLayer>
</template>

<style scoped>
.max-h-modal {
  max-height: calc(100vh - 160px);
}
</style>
