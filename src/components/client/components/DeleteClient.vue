<script setup lang="ts">
import { computed } from "vue";
import useClientStore from "../stores/clientStore";

const props = defineProps<{
  title: string;
  icon: string;
  modelValue: boolean;
  idClient: number;
}>();

const emit = defineEmits(["update:modelValue"]);
const isLoading = ref(false);
const { deleteClient } = useClientStore();

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const confirmCancel = () => (value.value = false);
window.addEventListener("keydown", (e: any) => {
  if (e.key == "Escape") confirmCancel();
});

const deleteData = async () => {
  isLoading.value = true;
  const status = await deleteClient(props.idClient);
  isLoading.value = false;
  if (status) value.value = false;
};
</script>

<template>
  <OverlayLayer v-show="value" @overlay-click="confirmCancel">
    <CardBox>
      <CardBoxComponentTitle class="text-red-700" :title="props.title">
        <span
          @click="confirmCancel"
          class="flex hover:bg-slate-200 rounded-full items-center p-1"
        >
          <Base-Icon :path="props.icon" />
        </span>
      </CardBoxComponentTitle>
      <hr />
      <main class="mt-5">
        <span class="text-lg text-red-500">
          ¿Estás Seguro que desea eliminar a este Cliente? <br />
          Una vez eliminado los datos ya no hay vuelta atrás
        </span>
        <div class="flex justify-evenly mt-5">
          <el-button @click="confirmCancel" plain>Cancelar</el-button>

          <el-button @click="deleteData" :loading="isLoading" type="danger"
            >Eliminar</el-button
          >
        </div>
      </main>
    </CardBox>
  </OverlayLayer>
</template>
