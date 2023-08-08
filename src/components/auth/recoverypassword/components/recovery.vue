<script lang="ts" setup>
import { FormInstance, ElMessage } from "element-plus";
import { computed, ref, reactive } from "vue";
import routesConfig from "../../../../router/routesConfig";
import resetPasswordStore from "../store/resetStore";
import {
  mdiAccount,
  mdiMail,
  mdiAsterisk,
  mdiFormTextboxPassword,
  mdiLock,
} from "@mdi/js";

const router = useRouter();
const modelEmail = reactive({
  email: "",
});

const form = ref();

const rules = reactive({
  email: [
    {
      required: true,
      message: "Por favor ingrese su correo electrónico",
      trigger: "blur",
    },
    {
      type: "email",
      message: "Por favor ingrese un correo electrónico válido",
      trigger: "blur",
    },
  ],
});

const loginView = () => {
  router.push(routesConfig.Login);
};

const sendEmail = async (): Promise<void> => {
  form.value.validate((valid: boolean) => {
    if (!valid) {
      ElMessage.warning("Por favor, rellenar los campos correctamente");
      return;
    }

    resetPasswordStore(modelEmail.email);
    console.log(" Login Iniciado");
  });
};
</script>
<template enter-class=" w-auto">
  <div class="bg-slate-100 h-screen flex items-center justify-center p-3">
    <div class="p-6 flex flex-col rounded-lg shadow-lg md:w-2/5 bg-white z-50">
      <span class="font-bold text-2xl pb-4">Cambiar la Contraseña</span>
      <hr />
      <span class="pb-4 pt-2 text-justify">
        Introduce el correo electrónico, al cual se le enviara el enlace para
        restablecer contraseña
        <br />
        <b> Verificar la bandeja de Span </b>
      </span>

      <div class=" ">
        <el-form
          label-width="80px"
          label-position="top"
          :model="modelEmail"
          :rules="rules"
          ref="form"
        >
          <el-form-item label="" prop="email" class="flex">
            <el-input
              size="large"
              placeholder="Email"
              v-model="modelEmail.email"
            />
          </el-form-item>

          <div class="flex flex-col md:justify-end md:flex-row">
            <el-form-item>
              <el-button class="w-full" type="info" @click="loginView"
                >Cancelar
              </el-button>
            </el-form-item>

            <el-form-item>
              <el-button
                class="md:ml-3 w-full"
                type="primary"
                @click="sendEmail"
                >Enviar</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>

      <!-- <div class="flex p-5 gap-2 flex-wrap md:flex-nowrap">
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
      </div> -->
    </div>
  </div>
</template>
