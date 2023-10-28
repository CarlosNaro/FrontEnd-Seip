<script setup lang="ts">
import { ref } from "vue";
import { ILogin } from "./models/ILogin";
import loginRules from "./rules/loginRules";
import { ElMessage } from "element-plus";
import routesConfig from "../../../router/routesConfig";
import authLogin from "./actions/authLogin";

const router = useRouter();
const form = ref();
const model = ref<ILogin>({
  username: "",
  password: "",
} as ILogin);

const isLoading = ref(false);

const setLogin = async (): Promise<void> => {
  form.value.validate(async (valid: boolean) => {
    if (!valid) {
      ElMessage.warning("Por favor, rellenar los campos correctamente");
      return;
    }
    isLoading.value = true;
    const status = await authLogin(model.value);
    isLoading.value = false;
    if (status) router.push(routesConfig.Home);
  });
};

const recoveryPassword = () => {
  router.push(routesConfig.RecoverPassword);
};
</script>

<template>
  <div class="h-screen bg-gray-100 flex items-center justify-center p-4">
    <div
      class="flex bg-white p-4 py-8 w-full md:w-4/6 lg:w-3/6 flex-col md:flex-row justify-center">
      <div class="w-full">
        <div class="flex justify-center md:justify-start pb-4">
          <img class="w-44" src="./src/isologoiqt.png" />
        </div>

        <div class="pb-4 font-semibold">
          <span> Inicio de sesión </span>
        </div>

        <div class="md:mr-10">
          <el-form
            label-width="80px"
            label-position="top"
            :model="model"
            :rules="loginRules"
            ref="form">
            <el-form-item label="" prop="username">
              <el-input
                size="large"
                placeholder="Usuario"
                v-model="model.username"></el-input>
            </el-form-item>

            <el-form-item label="" prop="password">
              <el-input
                size="large"
                placeholder="Contraseña"
                v-model="model.password"
                type="password"
                @keyup.enter="setLogin"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="setLogin" :loading="isLoading"
                >Iniciar Sesion</el-button
              >
            </el-form-item>

            <el-link class=" " @click="recoveryPassword" target="_blank"
              >¿Olvido su contraseña?</el-link
            >
          </el-form>
        </div>
      </div>

      <div
        class="w-full card-img hidden md:flex md:items-center border-l border-gray-300">
        <img class="img2" src="./src/homepage.gif" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .card-img{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    background: #FFFFFF 0% 0%;
    border-left: 2px solid lightgrey;
}

.img1{
    width: 30%;
}

.img2{
    width: 60%;
} */
</style>
./stores/authLogin ./actions/authLogin
