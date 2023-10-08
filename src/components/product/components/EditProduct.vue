<script setup lang="ts">
import { IFProductEdit, IMProduct } from "../models/IProduct";
import productRules from "../rules/productRules";
import { ref, computed } from "vue";
import { ElMessage, type UploadProps, type UploadRawFile } from "element-plus";
import useProductStore from "../stores/productStore";

const props = defineProps<{
  title: string;
  icon: string;
  modelValue: boolean;
  product: IMProduct;
}>();

const model = ref<IFProductEdit>({
  id: props.product.id,
  name: props.product.name,
  description: props.product.description,
  image: props.product.image,
} as IFProductEdit);

const { updateProduct } = useProductStore();
const isLoading = ref(false);
const form = ref();
const emit = defineEmits(["update:modelValue"]);
const upload = ref();
const imageNew = ref();

const visibleImg = model.value.image ? ref(true) : ref(false);

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

// función que verifica el limite de archivos
const handleExceed: UploadProps["onExceed"] = (files) => {
  upload.value!.clearFiles();
  const file = files[0] as UploadRawFile;
  upload.value!.handleStart(file);
};
// función que lee el archivo y lo muestra en miniatura en el componente
const handleChanges: UploadProps["onChange"] = (uploadFile, uploadFiles) => {
  const dataUpdate = uploadFile.raw;
  model.value.image = uploadFile.raw;
  uploadImage(dataUpdate);
};
// lectura de imgen para poder mostrar lo en el img:src
const uploadImage = (file: any) => {
  let reader = new FileReader();
  reader.onload = (e: any) => {
    imageNew.value = e.target.result;
    visibleImg.value = true;
  };
  reader.readAsDataURL(file);
};

const sendData = () => {
  form.value.validate(async (valid: boolean) => {
    if (!valid) {
      ElMessage.warning("Por favor, rellenar los campos correctamente");
      return;
    }

    isLoading.value = true;
    const status = await updateProduct(model.value);
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

      <div class="flex">
        <el-upload
          ref="upload"
          class="upload-demo"
          :limit="1"
          :on-exceed="handleExceed"
          :on-change="handleChanges"
          :auto-upload="false"
        >
          <template #trigger>
            <el-button type="primary">select file</el-button>
          </template>

          <template #tip>
            <div class="el-upload__tip text-red text-xs">
              limit 1 file <br />
              jpg/png files with a size less than 500kb
            </div>
          </template>
        </el-upload>
        <img
          v-if="visibleImg"
          class="bg-red-50 w-28 h-32 border-dashed border-2 border-indigo-600 shadow-lg"
          :src="imageNew ? imageNew : valueImage"
          alt="#"
        />
      </div>

      <div>
        <el-form
          enctype="multipart/form-data"
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
              class="w-full"
              type="primary"
              @click="sendData"
            >
              Crear
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </CardBox>
  </OverlayLayer>
</template>
