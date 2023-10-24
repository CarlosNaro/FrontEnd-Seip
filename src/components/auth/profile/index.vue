<script setup lang="ts">
import { mdiCameraWireless } from "@mdi/js";
import useUserStore from "./stores/userStore";
import { IProfileEdit, IUser } from "./models/IUser";
import { getItem } from "../../../core/actions/localStorage";
import profileRules from "./rules/profileRules";
import { ElMessage } from "element-plus";
import type { UploadProps, UploadRawFile } from "element-plus";
import { ref, computed, onMounted } from "vue";

const { uploadProfile, getData, updateProfile } = useUserStore();
const modelProfile = ref<IProfileEdit>({} as IProfileEdit);
const modelUser = ref<IUser>({} as IUser);
const form = ref();
const isLoading = ref(false);
const upload = ref();
const image = ref();
const basePath = import.meta.env.VITE_APP_API_URL_LOCAL as string;
const appName = import.meta.env.VITE_APP_APP_NAME;
const userLocal = getItem(`${appName}_user`);
const cargo = ref();
cargo.value = userLocal.is_admin ? "Administrador" : "Trabajador";

onMounted(async () => {
  await uploadProfile();
  const profile = computed(() => getData().profile);
  const user = computed(() => getData().user);

  if (!profile.value || !user.value) {
    return;
  }

  modelProfile.value = {
    id: profile.value.id,
    first_name: profile.value.first_name,
    last_name: profile.value.last_name,
    email: profile.value.email,
    image: basePath + profile.value.image,
    user_id: profile.value.user_id,
  };
  image.value = modelProfile.value.image;

  modelUser.value = {
    id: user.value.id,
    is_admin: user.value.is_admin,
    username: user.value.username,
  };
});

const handleExceed: UploadProps["onExceed"] = (files) => {
  upload.value!.clearFiles();
  const file = files[0] as UploadRawFile;
  upload.value!.handleStart(file);
};
// función que lee el archivo y lo muestra en miniatura en el componente
const handleChanges: UploadProps["onChange"] = (uploadFile, uploadFiles) => {
  const dataUpdate = uploadFile.raw;
  modelProfile.value.image = uploadFile.raw;
  uploadImage(dataUpdate);
};

// lectura de imgen para poder mostrar lo en el img:src
const uploadImage = (file: any) => {
  let reader = new FileReader();
  reader.onload = (e: any) => {
    image.value = e.target.result;
    // visibleImg.value = true;
  };
  reader.readAsDataURL(file);
};

const checkUser = computed(() => {
  return [
    {
      validator: (rule: any, value: string, callback: any) => {
        if (!modelUser.value.username) {
          callback(new Error("Campo requerido"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ];
});

const sendData = async (): Promise<void> => {
  form.value.validate(async (valid: boolean) => {
    if (!valid) {
      ElMessage.warning("Por favor, rellenar los campos correctamente");
      return;
    }
    isLoading.value = true;
    const status = await updateProfile(modelProfile.value, modelUser.value);
    isLoading.value = false;
  });
};
</script>
<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <CardBox id="CardBox" class="lg:justify-self-center lg:w-10/12 px-2">
      <div
        class="flex py-5 lg:py-2 flex-col md:flex-row lg:flex-col items-center lg:text-center rounded-3xl"
      >
        <div class="flex flex-col items-center justify-center mx-2">
          <p class="text-slate-400 font-bold text-lg mb-2">
            {{ cargo }}
          </p>

          <UserAvatar
            class="flex justify-center relative"
            :username="userLocal.username"
            :avatar="image"
            :size="200"
          >
            <el-upload
              ref="upload"
              class="btnCamera"
              :limit="1"
              :on-exceed="handleExceed"
              :on-change="handleChanges"
              :show-file-list="false"
              :auto-upload="false"
            >
              <BaseIcon
                class="hover:-12"
                size="20"
                w=""
                h="10"
                :path="mdiCameraWireless"
              />
            </el-upload>
          </UserAvatar>
        </div>

        <div class="text-center md:text-left md:ml-5 lg:text-center lg:ml-0">
          <h1 class="font-bold text-lg mt-2 md:mt-5">
            {{ userLocal.username }}
          </h1>
          <p class="text-sm">
            Last login <b>12 mins ago</b> from <b>127.0.0.1</b>
          </p>
        </div>
      </div>
    </CardBox>

    <CardBox
      id="CardBox"
      class="lg:col-start-2 lg:col-span-2 justify-center px-8"
    >
      <el-form
        label-position="top"
        size="large"
        class="grid grid-cols-1 lg:grid-cols-2 gap-x-10"
        :model="modelProfile"
        :rules="profileRules"
        ref="form"
      >
        <el-form-item label="Nombre(s) " prop="first_name">
          <el-input
            v-model="modelProfile.first_name"
            placeholder="Nombre Completo"
          />
        </el-form-item>

        <el-form-item label="Apellido(s) " prop="last_name">
          <el-input
            v-model="modelProfile.last_name"
            placeholder="Apellido Completo "
          />
        </el-form-item>

        <el-form-item :rules="checkUser" label="Usuario" prop="username">
          <el-input v-model="modelUser.username" placeholder="username" />
        </el-form-item>

        <el-form-item label="Correo Electrónico" prop="email">
          <el-input
            v-model="modelProfile.email"
            placeholder="exemplo@gmail.com"
          />
        </el-form-item>

        <el-form-item class="lg:col-start-2 justify-self-end bg-yellow-200">
          <el-button @click="sendData" :loading="isLoading" type="primary"
            >Save</el-button
          >
        </el-form-item>
      </el-form>
    </CardBox>

    <div
      id="CardBox"
      class="lg:col-start-2 lg:col-span-2 rounded-2xl p-8 bg-white"
    >
      <FormChangePassword />
    </div>
  </div>
</template>
<style scoped>
.btnCamera {
  @apply flex items-center bottom-0  p-2 absolute   rounded-full bg-blue-500 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300;
}

#CardBox {
  @apply hover:shadow-lg ease-in-out delay-150 transition duration-300;
}
</style>
