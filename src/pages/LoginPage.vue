<script lang="ts" setup>
import { mdiLock, mdiClose } from "@mdi/js";
import BaseIcon from "../components/BaseIcon.vue";
import useAuthStore from "../stores/AuthStore";
import CardBoxAlert from "../components/CardBoxAlert.vue";
import {
  reactive,
  ref,
  onMounted,
  computed,
  watchEffect,
  onBeforeUpdate,
} from "vue";

//variables
const loginForm = reactive({
  username: "",
  password: "",
});

// const isModalActiveAlert = ref(false);
const {isModalActiveAlert} = useAuthStore()



const submitLogin = () => {
  console.log("welcom,e");
  const estanVacias = Object.values(loginForm).every((valor) => !valor);
  if (!estanVacias) {
    if (!loginForm.username || !loginForm.password) {
      console.log(" uno de los formularios esta lleno ");
      isModalActiveAlert.value = true;
      loginForm.username = "";
      loginForm.password = "";
    } else {
      useAuthStore().autenticationUser(loginForm)
      loginForm.username = "";
      loginForm.password = "";
    }
    
  } else {
    isModalActiveAlert.value = true;
    console.log("todos vacios", isModalActiveAlert.value);
  }
};

onMounted(() => {
  console.log("onMounted:: ", isModalActiveAlert.value);
});

watchEffect(async () => {
  console.log("watchEffect:: ", isModalActiveAlert.value);
});
</script>

<template>
  <CardBoxAlert
    title="Authentication Error"
    :icon="mdiClose"
    v-model="isModalActiveAlert"
  >
    <p>Username or password <b>incorrect¡</b></p>
  </CardBoxAlert>

  <div
    class="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div
      class="w-full lg:w-1/4 max-w-md space-y-8 shadow-lg p-4 shadow-slate-400 relative"
    >
      <div
        class="mx-auto h-32 w-32 rounded-full p-3 shadow-2xl shadow-slate-400 absolute z-10 inset-x-0 -top-20"
      >
        <img
          class="mx-auto h-32 w-auto hover:h-36 transition-all"
          src="../assets/logo01.svg"
          alt="Iquitos Technology"
        />
      </div>
      <form class="pt-10 space-y-6">
        <div class="flex flex-col gap-4">
          <div class="relative">
            <label for="" class="text-gray-700">User</label>
            <input
              type="text"
              required
              v-model="loginForm.username"
              autocomplete="user"
              class="input-forms"
              placeholder="User"
            />
          </div>
          <div>
            <label for="" class="text-gray-700">Password</label>
            <input
              v-model="loginForm.password"
              required
              type="password"
              class="input-forms"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="text-sm text-right">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
            >Forgot your password?</a
          >
        </div>

        <div>
          <button
            type="submit"
            @click.prevent="submitLogin"
            class="positive-button relative w-full"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <BaseIcon :path="mdiLock" />
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
