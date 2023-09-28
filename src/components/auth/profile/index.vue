<script setup lang="ts">
import {
  ref,
  reactive,
  computed,
  onMounted,
  watch,
  onBeforeMount,
  watchEffect,
} from "vue";
import {
  mdiClose,
  mdiCameraWireless,
  mdiAsterisk,
  mdiFormTextboxPassword,
} from "@mdi/js";
import useUserStore from "./stores/userStore";
import { IUser, IUserUpdate, IChangePassword, userStore } from "./models/IUser";
import { getItem } from "../../../core/interceptors/localStorage";

const user = getItem("user");
const { setUser, getUser } = useUserStore();
const model = ref<IUserUpdate | null>(null);

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

//inicio cambiar contraseña
const view = ref(false);
const type = ref("password");

const modelPass = reactive<IChangePassword>({
  current_password: "",
  new_password: "",
  confirm_password: "",
}) as IChangePassword;

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

// cambiar contraseña fin
</script>
<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <CardBox class="lg:justify-self-center lg:w-10/12 hover-Card">
      <div
        class="flex py-5 lg:py-2 md:flex-row lg:flex-col items-center lg:text-center rounded-3xl"
      >
        <div class="flex flex-col items-center justify-center">
          <p class="text-slate-400 font-bold text-lg mb-2">Administrador</p>
          <UserAvatar class="relative w-8/12 lg:w-3/5" username="paulo">
            <button class="btnCamera">
              <BaseIcon
                class="hover:-12"
                size="20"
                w=""
                h="10"
                :path="mdiCameraWireless"
              />
            </button>
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
    <pre class="text-black">{{ model }}</pre>
    <CardBox
      class="lg:col-start-2 lg:col-span-2 justify-center px-8 hover-Card"
    >
      <el-form
        label-position="top"
        size="large"
        class="grid grid-cols-1 lg:grid-cols-2 gap-x-10"
      >
        <el-form-item label="Nombre(s) ">
          <el-input placeholder="Nombre Completo" />
        </el-form-item>

        <el-form-item label="Apellido(s) ">
          <el-input placeholder="Apellido Completo " />
        </el-form-item>

        <el-form-item label="Usuario">
          <el-input placeholder="User " />
        </el-form-item>

        <el-form-item label="Correo Electrónico ">
          <el-input placeholder="exemplo@gmail.com" />
        </el-form-item>

        <el-form-item class="lg:col-start-2 justify-self-end bg-yellow-200">
          <el-button type="primary">Save</el-button>
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

  <!-- <div class="flex w-auto flex-col items-center">
    <div class="mb-5 text-center">
      <h1 class="text-3xl font-semibold text-indigo-600">Bienvenido</h1>
      <h1 class="text-lg md:text-5xl font-semibold text-indigo-600">
        {{ user.username }}
      </h1>
    </div>

    <div class="bg-white md:w-8/12 rounded-lg text-sm md:text-base">
      <ol v-for="(item, index) in userInfo" :key="index" class="mx-4 my-4">
        <li>Nombre: {{ item?.first_name }}</li>
        <li>Apellido: {{ item?.last_name }}</li>

        <li>Correo: {{ item?.email }}</li>
        <li>Usuario: {{ item?.username }}</li>
        <li>Ultimo acceso: {{ item?.last_login }}</li>
      </ol>
    </div>
  </div> -->

  <!-- <div class="flex flex-col md:flex-row md:justify-evenly mt-3 py-2">
    <button class="positive-button mb-2 md:mb-0" @click="isActiveUserUpdate">
      Update Profile
    </button>
    <button class="positive-button" @click="isActiveChangePassword">
      Change Password
    </button>
  </div> -->
</template>
<style scoped>
.btnCamera {
  @apply flex items-center absolute p-2 shadow-xl border-none  -bottom-1 right-5 rounded-full bg-blue-500 text-white transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300;
}

.hover-Card {
  @apply hover:shadow-lg ease-in-out delay-150 transition duration-300;
}
</style>
