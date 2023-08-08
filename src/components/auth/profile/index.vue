<script setup lang="ts">
// import FormProfile from "./components/FormProfile";
import { ref, computed, onMounted, watch } from "vue";
import { mdiAccount, mdiClose } from "@mdi/js";

const avatar =
  "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

const isModalActive = ref(false);

console.log("active ", isModalActive.value);

const isActive = () => {
  isModalActive.value = !isModalActive.value;
  console.log("isActive ****", isModalActive.value);
};

watch(isModalActive, (nuevoValor, viejoValor) => {
  console.log(`La variable cambió de ${viejoValor} a ${nuevoValor}`);
  // Aquí puedes ejecutar cualquier otra lógica que desees realizar cuando la variable cambia.
});

const menu = reactive({
  icon: mdiAccount,
  title: "Profile",
  main: Boolean,
});
</script>
<template>
  <!-- <CardBox title="  hola" :icon="mdiAccount" v-model="isModalActive" /> -->
  <FormProfile
    v-show="isModalActive"
    title="Actualizar Portafolio"
    v-model="isModalActive"
    :icon="mdiClose"
  />
  <SectionTitleLineWithButton
    :icon="menu.icon"
    :title="menu.title"
    :main="menu.main"
  />

  <div class="flex w-auto flex-col items-center">
    <!-- <h1 class="text-lg md:text-5xl font-semibold text-indigo-600 mb-5">
      Carlos Alonso Naro Saldaña
    </h1> -->

    <UserCard :avatar="avatar"> </UserCard>

    <div class="bg-white md:w-8/12 rounded-lg text-sm md:text-base">
      <ol class="mx-4 my-4">
        <li>Nombre: {{ "carlos alonso" }}</li>
        <li>Apellido: {{ "Naro saldaña" }}</li>

        <li>Correo: {{ "elmaximolider75@mdiGmail.com" }}</li>
        <li>Usuario: {{ "developer" }}</li>
        <li>Ultimo acceso: {{ "08 de agosto del 2022 agsgsjsj bshah" }}</li>
      </ol>
    </div>
  </div>

  <div class="flex flex-col md:flex-row md:justify-evenly mt-2">
    <!-- class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" -->
    <button class="positive-button mb-2 md:mb-0" @click="isActive">
      Update Profile
    </button>

    <button class="positive-button">Change Password</button>
  </div>

  <!-- <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div>
      <form class="formulario">
        <div class="relative pb-5" id="cuerpo">
          <label class="text-gray-700 font-bold">First Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autocomplete="Name"
            class="input-forms-icons"
            placeholder="First Name"
          />
          <BaseIcon
            class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
            :path="mdiAccount"
          />
        </div>

        <div class="flex flex-col md:flex-row justify-between">
          <div class="relative pb-5 md:w-3/5" id="cuerpo">
            <label class="text-gray-700 font-bold">Last Name</label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              autocomplete="last_name"
              class="input-forms-icons"
              placeholder="Last Name"
            />
            <BaseIcon
              class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
              :path="mdiAccount"
            />
          </div>

          <div class="relative pb-5" id="cuerpo">
            <label class="text-gray-700 font-bold">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              class="input-forms-icons"
              placeholder="Username"
            />
            <BaseIcon
              class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
              :path="mdiAccount"
            />
            <span v-if="rules.required" :class="rules.target">{{
              rules.Message
            }}</span>
          </div>
        </div>

        <div class="relative pb-5">
          <label for="" class="text-gray-700 font-bold">E-mail</label>
          <input
            name="email"
            type="email"
            autocomplete="email"
            class="input-forms-icons"
            placeholder="default@example.com"
          />
          <BaseIcon
            class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
            :path="mdiMail"
          />
        </div>

        <div>
          <button
            type="submit"
            class="positive-button font-bold relative w-full"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <BaseIcon :path="mdiLock" />
            </span>
            Save
          </button>
        </div>
      </form>
    </div>

    <div>
      <form>
        <div class="relative pb-5">
          <label class="text-gray-700 font-bold">Current password</label>
          <input
            type="text"
            required
            onselect="alert(123)"
            class="input-forms-icons"
            placeholder="Name"
          />

          <BaseIcon
            class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
            :path="mdiAsterisk"
          />
        </div>

        <div class="relative pb-5">
          <label for="" class="text-gray-700 font-bold">New password</label>
          <input
            type="text"
            required
            class="input-forms-icons"
            placeholder=""
          />
          <BaseIcon
            class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
            :path="mdiFormTextboxPassword"
          />
        </div>

        <div class="relative pb-5">
          <label for="" class="text-gray-700 font-bold">Confirm password</label>
          <input
            type="text"
            required
            class="input-forms-icons"
            placeholder=""
          />
          <BaseIcon
            class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
            :path="mdiFormTextboxPassword"
          />
        </div>

        <div>
          <button
            type="submit"
            class="positive-button font-bold relative w-full"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <BaseIcon :path="mdiLock" />
            </span>
            Save
          </button>
        </div>
      </form>
    </div>
  </div> -->
</template>
<style></style>
