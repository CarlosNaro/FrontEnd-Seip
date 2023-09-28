<script setup lang="ts">
import useUserStore from "./stores/userStore";
import { IUserUpdate, IChangePassword } from "./models/IUser";
import { getItem } from "../../../core/interceptors/localStorage";
import userRules from "./rules/userRules";
import { ElMessage } from "element-plus";
import type { UploadProps, UploadRawFile } from "element-plus";
import {
  ref,
  reactive,
  computed,
  onMounted,
  watch,
} from "vue";
import {
  mdiCameraWireless,
  mdiAsterisk,
  mdiFormTextboxPassword,
} from "@mdi/js";

const user = getItem("user");
const { setUser, getUser, userUpdate } = useUserStore();
const model = ref<IUserUpdate>({} as IUserUpdate);
const view = ref(false);
const type = ref("password");
const form = ref();
const isLoading = ref(false);
const upload = ref();
const image = ref() 
const visibleImg = ref(false)

const modelPass = reactive<IChangePassword>({
  current_password: "",
  new_password: "",
  confirm_password: "",
}) as IChangePassword;

onMounted(async () => {
  await setUser();
  const data = computed(() => getUser());
  if (!data.value) {
    return;
  }
  model.value = {
    id: data.value.id,
    first_name: data.value.first_name,
    last_name: data.value.last_name,
    email: data.value.email,
    username: data.value.username,
    image: data.value.image,
  };
});

const viewPassword = () => {
  if (view.value) {
    type.value = "text";
  } else {
    type.value = "password";
  }
};

watch(view, () => {
  viewPassword();
});

const sendData = async (): Promise<void> =>{
  form.value.validate(async (valid: boolean) => {
    if (!valid) {
      ElMessage.warning("Por favor, rellenar los campos correctamente");
      return;
    }
    isLoading.value = true;
    const status = await userUpdate(model.value);
    isLoading.value = false;
  });

} 

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
    image.value = e.target.result;
    visibleImg.value = true;
  };
  reader.readAsDataURL(file);
};

</script>
<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <pre>{{model}}</pre>
    <CardBox class="lg:justify-self-center lg:w-10/12 hover-Card">
      <div
        class="flex py-5 lg:py-2 md:flex-row lg:flex-col items-center lg:text-center rounded-3xl"
      >
        <div class="flex flex-col items-center justify-center">
          <p class="text-slate-400 font-bold text-lg mb-2">Administrador</p>
          <UserAvatar class="relative w-8/12 lg:w-3/5" :username="user.username"  >
            <img v-if="visibleImg" :src="image" alt="">
            <el-upload
              ref="upload"
              class="btnCamera"
              :limit="1"
              :on-exceed="handleExceed"
              :on-change="handleChanges"
              :auto-upload="false"
              :show-file-list="false"
            >
            <template #trigger>

              <BaseIcon
                class="hover:-12"
                size="20"
                w=""
                h="10"
                :path="mdiCameraWireless"
              />
            </template>
           
            

          </el-upload>
            
          </UserAvatar>
        </div>

        <div>
          <h1 class="font-bold text-lg mt-5">{{ user.username }}</h1>
          <p class="text-sm">
            Last login <b>12 mins ago</b> from <b>127.0.0.1</b>
          </p>
        </div>
      </div>
    </CardBox>
    <CardBox
      class="lg:col-start-2 lg:col-span-2 justify-center px-8 hover-Card"
    >
      <el-form
        label-position="top"
        size="large"
        class="grid grid-cols-1 lg:grid-cols-2 gap-x-10"
        :model="model"
        :rules="userRules"
        ref="form"
      >
        <el-form-item label="Nombre(s) " prop="first_name" >
          <el-input v-model="model.first_name" placeholder="Nombre Completo" />
        </el-form-item>

        <el-form-item label="Apellido(s) " prop="last_name" >
          <el-input v-model="model.last_name" placeholder="Apellido Completo " />
        </el-form-item>

        <el-form-item label="Usuario" prop="username" >
          <el-input v-model="model.username" placeholder="User " />
        </el-form-item>

        <el-form-item label="Correo Electrónico" prop="email" >
          <el-input v-model="model.email" placeholder="exemplo@gmail.com" />
        </el-form-item>

        <el-form-item class="lg:col-start-2 justify-self-end bg-yellow-200">
          <el-button @click="sendData" :loading="isLoading" type="primary">Save</el-button>
        </el-form-item>
      </el-form>
    </CardBox>

    <CardBox class="lg:col-start-2 lg:col-span-2 p-8 hover-Card">
      <el-form
        ref="form"
        label-position="top"
        class="grid grid-cols-1 lg:grid-cols-2 gap-x-10"
        :model="modelPass"
      >
        <el-form-item label="Contraseña actual" prop="current_password">
          <el-input
            class="forms_password"
            size="large"
            :type="type"
            placeholder="Contraseña actual"
            v-model="modelPass.current_password"
          />
          <BaseIcon
            class="absolute z-10 pointer-events-none text-gray-500"
            :path="mdiAsterisk"
          />
        </el-form-item>

        <el-form-item label="Nueva contraseña" prop="new_password">
          <el-input
            class="forms_password"
            size="large"
            :type="type"
            placeholder="Nueva contraseña"
            v-model="modelPass.new_password"
          />
          <BaseIcon
            class="absolute z-10 pointer-events-none text-gray-500"
            :path="mdiFormTextboxPassword"
          />
        </el-form-item>

        <!-- :rules="checkPassword" -->
        <el-form-item label="Confirmar contraseña" prop="confirm_password">
          <el-input
            class="forms_password"
            size="large"
            :type="type"
            placeholder="Confirmar contraseña"
            v-model="modelPass.confirm_password"
          />
          <BaseIcon
            class="absolute z-10 pointer-events-none text-gray-500"
            :path="mdiFormTextboxPassword"
          />
        </el-form-item>

        <el-form-item class="self-end justify-self-end">
          <el-button type="primary">Actualizar</el-button>
        </el-form-item>

        <!-- <el-form-item>
          <el-checkbox v-model="view">Mostrar contraseña</el-checkbox>
        </el-form-item> -->
      </el-form>
    </CardBox>
  </div>

 
</template>
<style scoped>
.btnCamera {
  @apply flex items-center absolute p-2 shadow-xl border-none  -bottom-1 right-5 rounded-full bg-blue-500 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300;
}

.hover-Card {
  @apply hover:shadow-lg ease-in-out delay-150 transition duration-300;
}
</style>
