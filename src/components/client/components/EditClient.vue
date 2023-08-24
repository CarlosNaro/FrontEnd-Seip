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

const phoneNumber = props.client.phone
  ? parseInt(Object(props.client.phone))
  : "";

const documentNumber = props.client.document
  ? parseInt(Object(props.client.document))
  : "";

const model = ref<IFClientEdit>({
  id: props.client.id,
  name: props.client.name,
  document: documentNumber,
  description: props.client.description,
  phone: phoneNumber,
} as IFClientEdit);

const emit = defineEmits(["update:modelValue"]);
const form = ref();
const isLoading = ref(false);
const { updateClient } = useClientStore();

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

const sendData = () => {
  form.value.validate(async (valid: boolean) => {
    if (!valid) {
      ElMessage.warning("Por favor, rellenar los campos correctamente");
      return;
    }
    isLoading.value = true;
    const status = await updateClient(model.value);
    isLoading.value = false;
    if (status) value.value = false;
  });
};
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
      <br />
      <div>
        <el-form
          :model="model"
          :rules="clientRules"
          ref="form"
          label-position="top"
        >
          <el-form-item label="Nombre(s)" prop="name">
            <el-input v-model="model.name" size="large" placeholder="Nombre" />
          </el-form-item>

          <el-form-item label="N°Documento" prop="document">
            <el-input
              v-model.number="model.document"
              maxlength="8"
              size="large"
              placeholder="N° documento"
            />
          </el-form-item>

          <el-form-item label="Descripción">
            <el-input
              v-model="model.description"
              size="large"
              placeholder="Descripción del cliente"
            />
          </el-form-item>

          <el-form-item label="Teléfono / Celular" prop="phone">
            <el-input
              v-model.number="model.phone"
              maxlength="9"
              size="large"
              placeholder="N° de contacto"
            />
          </el-form-item>

          <el-form-item>
            <el-button
              @click="sendData"
              :loading="isLoading"
              class="w-full"
              type="primary"
              >Actualizar</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </CardBox>
  </OverlayLayer>
</template>
