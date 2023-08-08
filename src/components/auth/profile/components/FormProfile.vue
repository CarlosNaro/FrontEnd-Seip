<script setup lang="ts">
import { Calendar, Search, User } from "@element-plus/icons-vue";
import { ref, watchPostEffect, watchSyncEffect, watchEffect, watch } from "vue";
import {
  mdiAccount,
  mdiMail,
  mdiAsterisk,
  mdiFormTextboxPassword,
  mdiLock,
} from "@mdi/js";

const props = defineProps<{
  title: string;
  modelValue: boolean;
  icon: string;
}>();
const value = ref(props.modelValue);
// const emit = defineEmits(["update:modelValue", "cancel"]);
watch(value, (nuevoValor, viejoValor) => {
  console.log(`La for,s ${viejoValor} a ${nuevoValor}`);
  // Aquí puedes ejecutar cualquier otra lógica que desees realizar cuando la variable cambia.
});
</script>
<template>
  <CardBox :title="props.title" :icon="props.icon" v-model="modelValue">
    <div class="">
      <el-form label-position="top">
        <el-form-item label="Nombres">
          <el-input :prefix-icon="User" placeholder="Pepito Grillo" />
        </el-form-item>
        <el-form-item label="Apellidos">
          <el-input :prefix-icon="User" placeholder="De las Torres " />
        </el-form-item>
        <el-form-item label="Correo Electronico ">
          <el-input :prefix-icon="User" placeholder="De las Torres " />
        </el-form-item>

        <el-form-item class="" label="Usuario ">
          <el-input :prefix-icon="User" placeholder="De las Torres " />
        </el-form-item>
      </el-form>
      <!-- <form>
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
      <div class="flex flex-col md:flex-row">
        <div class="relative pb-5" id="cuerpo">
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
        <button type="submit" class="positive-button font-bold relative w-full">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <BaseIcon :path="mdiLock" />
          </span>
          Save
        </button>
      </div>
    </form> -->
    </div>
  </CardBox>
</template>

<style></style>
