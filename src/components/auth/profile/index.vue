<script setup lang="ts">
import { ref, reactive, computed, onMounted, watch } from "vue";
import { mdiClose } from "@mdi/js";
import useUserStore from "./stores/userStore";
import { IUser, IUserUpdate, userStore } from "./models/IUser";
import { getItem } from "../../../core/interceptors/localStorage";

const user = getItem("token");
const isModalActiveUserUpdate = ref(false);
const isModalActiveChangePassword = ref(false);

const { setUser, getUser } = useUserStore();
const userInfo = computed(() => getUser() as userStore);
const set_User = setUser();

// watch(isModalActive, (nuevoValor, viejoValor) => {
//   // isModalActive.value = true;
//   console.log(`La variable cambió de** ${viejoValor} a ${nuevoValor}`);
//   // Aquí puedes ejecutar cualquier otra lógica que desees realizar cuando la variable cambia.
// });

const isActiveUserUpdate = () => {
  isModalActiveUserUpdate.value = !isModalActiveUserUpdate.value;
};
const isActiveChangePassword = () => {
  isModalActiveChangePassword.value = !isModalActiveChangePassword.value;
};
</script>
<template>
  <FormChangePassword
    v-if="isModalActiveChangePassword"
    title="Cambiar Contraseña"
    :icon="mdiClose"
    v-model="isModalActiveChangePassword"
  />

  <FormProfile
    v-if="isModalActiveUserUpdate"
    v-for="(item, index) in userInfo"
    :key="index"
    title="Actualizar Datos"
    v-model="isModalActiveUserUpdate"
    :icon="mdiClose"
    :user="item"
  />

  <div class="flex w-auto flex-col items-center">
    <div class="mb-5 text-center">
      <h1 class="text-3xl font-semibold text-indigo-600">Bienvenido</h1>
      <h1 class="text-lg md:text-5xl font-semibold text-indigo-600">
        {{ user.username }}
      </h1>
    </div>

    <!-- <UserCard :avatar="avatar"> </UserCard> -->

    <div class="bg-white md:w-8/12 rounded-lg text-sm md:text-base">
      <ol v-for="(item, index) in userInfo" :key="index" class="mx-4 my-4">
        <li>Nombre: {{ item?.first_name }}</li>
        <li>Apellido: {{ item?.last_name }}</li>

        <li>Correo: {{ item?.email }}</li>
        <li>Usuario: {{ item?.username }}</li>
        <li>Ultimo acceso: {{ item?.last_login }}</li>
      </ol>
    </div>
  </div>

  <div class="flex flex-col md:flex-row md:justify-evenly mt-3 py-2">
    <button class="positive-button mb-2 md:mb-0" @click="isActiveUserUpdate">
      Update Profile
    </button>
    <button class="positive-button" @click="isActiveChangePassword">
      Change Password
    </button>
  </div>
</template>
<style></style>
