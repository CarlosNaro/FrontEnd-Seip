<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import useProductStore from "../stores/productStore";
import { IFProduct } from "../models/IProduct";
import { ElMessage } from "element-plus";
import productRules from "../rules/productRules";

const props = defineProps<{
  title: string;
  icon: string;
  modelValue: boolean;
}>();

const model = ref<IFProduct>({
  name: "",
  description: "",
} as IFProduct);

const { sendProduct } = useProductStore();
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

const sendData = () => {
  form.value.validate(async (valid: boolean) => {
    if (!valid) {
      ElMessage.warning("Por favor, rellenar los campos correctamente");
      return;
    }

    isLoading.value = true;
    const status = await sendProduct(model.value);
    isLoading.value = true;
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
      <div>
        <el-form
          :model="model"
          ref="form"
          :rules="productRules"
          label-position="top"
        >
          <el-form-item label="Nombre " prop="name">
            <el-input v-model="model.name" />
          </el-form-item>
          <el-form-item label="Descripción">
            <el-input v-model="model.description" />
          </el-form-item>

          <el-form-item>
            <el-button
              :isLoading="isLoading"
              @click="sendData"
              class="w-full"
              type="primary"
              >Crear
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </CardBox>
  </OverlayLayer>
</template>
