<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import useProductStore from "../stores/productStore";
import { IFProduct } from "../models/IProduct";
import { ElMessage } from "element-plus";
import productRules from "../rules/productRules";
import { UploadFilled } from "@element-plus/icons-vue";
import { Plus } from "@element-plus/icons-vue";
import type {
  UploadProps,
  UploadUserFile,
  UploadInstance,
  UploadRawFile,
} from "element-plus";
import { genFileId } from "element-plus";

const props = defineProps<{
  title: string;
  icon: string;
  modelValue: boolean;
}>();

const model = ref<IFProduct>({
  name: "",
  description: "",
  image: "",
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
  console.log("model a enviar ", fileList.value);
  // form.value.validate(async (valid: boolean) => {
  //   if (!valid) {
  //     ElMessage.warning("Por favor, rellenar los campos correctamente");
  //     return;
  //   }

  //   isLoading.value = true;
  //   const status = await sendProduct(model.value);
  //   isLoading.value = true;
  //   if (status) value.value = false;
  // });
};

// manejo de imagenes

const fileList = ref<UploadUserFile[]>();
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const upload = ref<UploadInstance>();

// función que verifica el limite de archivos
const handleExceed: UploadProps["onExceed"] = (files) => {
  upload.value!.clearFiles();
  const file = files[0] as UploadRawFile;
  // file.uid = genFileId();
  console.log("asdasd", files);
  upload.value!.handleStart(file);
};

const handlePictureCardPreview: UploadProps["onPreview"] = (uploadFile) => {
  console.log("handlePictureCardPreview", uploadFile);
  dialogImageUrl.value = uploadFile.url!;
  dialogVisible.value = true;
};
const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (rawFile.type !== "image/jpeg") {
    console.log("beforeAvatarUpload ", rawFile);
    // ElMessage.error("Avatar picture must be JPG format!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error("Avatar picture size can not exceed 2MB!");
    return false;
  }
  return true;
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
        <el-upload
          v-model="fileList"
          class="upload-demo"
          :limit="1"
          :on-preview="handlePictureCardPreview"
        >
          <!-- <el-icon class="el-icon--upload"><upload-filled /></el-icon> -->
          <template #trigger>
            <el-button type="primary">select file</el-button>
          </template>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png files with a size less than 500kb
            </div>
          </template>
        </el-upload>

        <template>
          <el-dialog v-model="dialogVisible">
            <img w-full :src="dialogImageUrl" alt="Preview Image" />
          </el-dialog>
        </template>
      </div>

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
