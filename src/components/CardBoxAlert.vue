<script lang="ts" setup>
import OverlayLayer from "./OverlayLayer.vue";
import CardBoxTitle from "./CardBoxTitle.vue";
import BaseIcon from "./BaseIcon.vue";
// import { mdiClose } from "@mdi/js";
import { computed, ref } from "vue";

const props = defineProps<{
  title: String;
  modelValue: Boolean;
  icon:string
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
      class=" p-6 flex flex-col items-center rounded-2xl shadow-lg w-10/12 md:w-3/5 lg:w-2/5 xl:w-3/12  z-50 text-red-600 "
    >
      <span class="flex   hover:bg-slate-200  rounded-full items-center p-1  " @click="Cancel">
        <BaseIcon class="w-auto h-auto" :path="props.icon" :size="48"  />
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
