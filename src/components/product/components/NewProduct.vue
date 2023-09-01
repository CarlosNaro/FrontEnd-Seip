<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import useProductStore from "../stores/productStore";
import { IFProduct } from "../models/IProduct";
import { ElMessage } from "element-plus";
import productRules from "../rules/productRules";
import type {
  UploadProps,
  UploadUserFile,
  UploadInstance,
  UploadRawFile,
  UploadFiles,
} from "element-plus";


const props = defineProps<{
  title: string;
  icon: string;
  modelValue: boolean;
}>();

const model = ref<IFProduct>({
  name: "",
  description: "",
  image: null,
} as IFProduct);

const { sendProduct } = useProductStore();
const emit = defineEmits(["update:modelValue"]);
const form = ref();
const isLoading = ref(false);
const upload = ref();
const valueImage = ref();
const visibleImg = ref(false);

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
  model.value.image = uploadFile.raw
  uploadImage(dataUpdate);
  if (upload.value) {
    console.log("upload ", upload.value);
  } else {
    console.log("upload no existe");
  }
};
// lectura de imgen para poder mostrar lo en el img:src
const uploadImage = (file: any) => {
  let reader = new FileReader();
  reader.onload = (e: any) => {
    valueImage.value = e.target.result;
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
          enctype="multipart/form-data"
          :model="model"
          ref="form"
          :rules="productRules"
          label-position="top"
        >
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
              class="bg-red-50 w-32 h-32"
              :src="valueImage"
              alt="sa"
            />
          </div>

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
