<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { IFClient, IMClient, IFClientEdit } from "../models/IClient";
import clientRules from "../rules/clientRules";
import { ElMessage } from "element-plus";
import useClientStore from "../stores/clientStore";

const props = defineProps<{
  title: string;
  icon: string;
  modelValue: boolean;
  client: IMClient;
}>();

const model = reactive({
  id: props.client.id,
  name: props.client.name,
  document: props.client.document,
  description: props.client.description,
  phone: props.client.phone,
});

const emit = defineEmits(["update:modelValue"]);
const form = ref();
const isLoading = ref(false);

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const confirmCancel = () => {
  value.value = false;
};
window.addEventListener("keydown", (e: any) => {
  if (e.key == "Escape") confirmCancel();
});

// const sendData = async (): Promise<void> => {
//   console.log("Datos Nuevos ", props.client);
//   //   form.value.validate(async (valid: boolean) => {
//   //     if (!valid) {
//   //       ElMessage.warning("Por favor, rellenar los campos correctamente");
//   //       return;
//   //     }

//   //     isLoading.value = true;
//   //     const status = await sendClient(model);
//   //     isLoading.value = false;
//   //     if (status) value.value = false;
//   //   });
// };
</script>
<template>
  <OverlayLayer v-show="value" @overlay-click="confirmCancel">
    <CardBox>
      <CardBox-Component-Title :title="props.title">
        <span
          @click="confirmCancel"
          class="flex hover:bg-slate-200 rounded-full items-center p-1"
        >
          <Base-Icon :path="props.icon" />
        </span>
      </CardBox-Component-Title>
      <hr />
      <pre>{{ props.client }}</pre>
      <div>
        <el-form :rules="clientRules" ref="form" label-position="top">
          <el-form-item label="Nombre(s)" prop="name">
            <el-input size="large" placeholder="Nombre" />
          </el-form-item>

          <el-form-item label="N°Documento" prop="document">
            <el-input maxlength="8" size="large" placeholder="N° documento" />
          </el-form-item>

          <el-form-item label="Descripción">
            <el-input size="large" placeholder="Descripción del cliente" />
          </el-form-item>

          <el-form-item label="Teléfono / Celular" prop="phone">
            <el-input maxlength="9" size="large" placeholder="N° de contacto" />
          </el-form-item>

          <el-form-item>
            <el-button
              @click=""
              :loading="isLoading"
              class="w-full"
              type="primary"
              >Crear</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </CardBox>
  </OverlayLayer>
</template>
