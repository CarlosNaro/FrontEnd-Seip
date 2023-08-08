<script lang="ts" setup>
import OverlayLayer from "./OverlayLayer.vue";
import CardBoxTitle from "../components/CardBoxTitle.vue";
import BaseIcon from "../components/BaseIcon.vue";
// import { mdiClose } from "@mdi/js";
import { computed, ref } from "vue";
import router from "../router";
import {
  mdiAccount,
  mdiMail,
  mdiAsterisk,
  mdiFormTextboxPassword,
  mdiLock,
} from "@mdi/js";

// const props = defineProps<{
//   title: String;
//   //   modelValue: Boolean;
//   //   icon:string
// }>();
const email = ref();
// const emit = defineEmits(["update:modelValue", "cancel"]);

// const value = computed({
//   get: () => props.modelValue,
//   set: (valor) => emit("update:modelValue", valor),
// });

// const confirmCancel = (valor: any) => {
//   value.value = false;
//   emit(valor);
// };
// const Cancel = () => confirmCancel("cancel");

// window.addEventListener("keydown", (e: any) => {
//   if (e.key === "Escape") {
//     Cancel();
//   }
// });

const loginView = () => {
  router.push({ name: "Login" });
  console.log("welcome Login ");
};

const Email = () => {
  console.log("hola mundo");
};
</script>
<template enter-class=" w-auto">
  <div class="bg-slate-100 h-screen flex items-center justify-center">
    <div
      class="p-6 flex flex-col rounded-2xl shadow-lg w-10/12 md:w-auto lg:w-2/5 xl:w-3/12 z-50 text-red-600"
    >
      <CardBoxTitle title="Recupera tu cuenta" />
      <span> Introduce tu correo electrónico para buscar tu cuenta. </span>

      <div class="relative">
        <label for="" class="text-gray-700 font-bold">E-mail</label>
        <input
          v-model="email"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="input-forms-icons"
          placeholder="default@example.com"
        />
        <BaseIcon
          class="absolute top-8 left-0 z-10 pointer-events-none text-gray-500"
          :path="mdiMail"
        />
      </div>

      <hr />

      <div class="flex p-5 gap-2 flex-wrap md:flex-nowrap">
        <button
          type="submit"
          class="negative-button font-bold relative w-full"
          @click="loginView"
        >
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <BaseIcon :path="mdiLock" />
          </span>
          Cancelar
        </button>

        <button
          type="submit"
          class="positive-button font-bold relative w-full"
          @click="Email"
        >
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <BaseIcon :path="mdiLock" />
          </span>
          Buscar
        </button>
      </div>

      <slot />
    </div>
  </div>
</template>

<style scoped>
.max-h-modal {
  max-height: calc(100vh - 160px);
}
</style>
