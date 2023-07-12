<script lang="ts" setup>

// import { , type FormInstance } from 'element-plus'
import { FormInstance, ElMessage } from "element-plus";

// import { mdiClose } from "@mdi/js";
import { computed, ref, reactive } from "vue";
import router from "../../../../router";
import {
  mdiAccount,
  mdiMail,
  mdiAsterisk,
  mdiFormTextboxPassword,
  mdiLock,
} from "@mdi/js";

// const rules = [

// ];

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

const sendEmail = async (): Promise<void> => {
  form.value.validate((valid: boolean) => {
    if (!valid) {
      ElMessage.warning("Por favor, rellenar los campos correctamente");
      return;
    }

    console.log(" Login Iniciado");
  });
};

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
      class="p-6 flex flex-col rounded-lg shadow-lg bg-white w-6/12 lg:w-3/5 xl:w-3/12 z-50 text-red-600"
    >
      <span class="font-bold text-2xl pb-5">Cambiar la Contraseña</span>
      <span class="pb-4">
        Introduce tu correo electrónico al cual se le enviara el enlace para
        restablecer contraseña <br />
        <br />
        Verificar la bandeja de Span
      </span>

      <div class=" ">
        <el-form
          label-width="80px"
          label-position="top"
          :model="modelEmail"
          :rules="rules"
          ref="form"
        >
          <el-form-item label="" prop="email" class=" flex  "  >
            <el-input
              size="large"
              placeholder="Email"
              v-model="modelEmail.email"
            />
         
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="sendEmail"
              >Iniciar Sesion</el-button
            >
          </el-form-item>

          <!-- <el-link class=" " href="/recoveryPassword" target="_blank"
              >¿Olvido su contraseña?</el-link
            > -->
        </el-form>

        <!-- <label for="" class="text-gray-700 font-bold">E-mail</label> -->
        <!-- <input
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
      /> -->
      </div>

      <!-- <div class=" flex p-5 gap-2 flex-wrap md:flex-nowrap ">
      <button type="submit" class="negative-button font-bold relative w-full" @click="loginView" >
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <BaseIcon :path="mdiLock" />
        </span>
        Cancelar 
      </button>

      <button type="submit" class="positive-button font-bold relative w-full" @click="Email" >
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
          <BaseIcon :path="mdiLock" />
        </span>
        Buscar 
      </button>
    </div> -->
    </div>
  </div>
</template>

<style scoped>
.max-h-modal {
  max-height: calc(100vh - 160px);
}
</style>
