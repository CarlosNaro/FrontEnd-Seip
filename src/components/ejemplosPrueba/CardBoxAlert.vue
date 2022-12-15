<script lang="ts" setup>
import OverlayLayer from "./OverlayLayer.vue";
import CardBoxTitle from "./CardBoxTitle.vue";
import BaseIcon from "./BaseIcon.vue";
import { mdiClose } from "@mdi/js";
import { computed, onMounted,ref } from "vue";

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

const confirmCancel = (valor:any) => {
  value.value = false;
  emit(valor);
};
const Cancel = () => confirmCancel("cancel");

window.addEventListener("keydown",(e:any)=>{
if(e.key==="Escape"){
    Cancel()
}
})

onMounted(() => {
  console.log("value", props.modelValue);
});





</script>
<template>
  <OverlayLayer v-show="value" @overlay-click="Cancel"  >
    <div
      v-show="value"
      class="max-h-modal p-6 rounded-2xl shadow-lg w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
    >
      <CardBoxTitle :title="props.title">
        <span v-if="props.hasCancel" class="flex hover:bg-slate-200 rounded-full items-center p-1">
          <BaseIcon  @click="Cancel" :path="mdiClose" />
        </span>
      </CardBoxTitle>
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
