<script lang="ts" setup>
import { ref } from "vue";
import { ILogin } from "./models/ILogin";
import loginRules from "./rules/loginRules";
import { ElMessage } from "element-plus";

const form = ref();
const model = ref<ILogin>({
  user: "",
  password: "",
} as ILogin);



const isLoading = ref(false);

const setLogin = async (): Promise<void> => {
  form.value.validate(async (valid: boolean) => {
    if (!valid) {
      ElMessage.warning("Por favor, rellenar los campos correctamente");
      return;
    }

    console.log(" Login Iniciado")

  });

  // form.value.validate(async (valid: boolean) => {
  //   if (!valid) {
  //     ElMessage.error("Por favor, rellene los campos correctamente");
  //     return;
  //   }
  //   isLoading.value = true;
  //   const status = await authLogin(model.value);
  //   isLoading.value = false;
  //   if (status) router.push(routesConfig.Home);
  // });
};
</script>

<template>
  <!-- <div class=" flex  h-screen items-center">
    <el-row  class="bg-green-100 w-full" justify="center" >
      <el-col :span="12"  >
        <el-card class=" box-card">
          <div v-for="o in 7" :key="o" class="">
            {{ "List item " + o }}
          </div>

        </el-card>
      </el-col>
      
    </el-row>
  </div> -->
  <!-- <el-row :gutter="10">
    <el-col :span="6"><div class="grid-content bg-purple-300">asds</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple-300">asds</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple-300">asds</div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple-300"> as </div></el-col>
  </el-row> -->

  <div class=" h-screen bg-gray-100 flex items-center justify-center p-2">
    
    <div class="flex bg-white p-4 flex-col md:flex-row w-3/6   justify-center  ">
      
      <div class=" w-full ">
        
        <div class=" flex  justify-center md:justify-start pb-4  ">
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
            ref="form"
          >
            <el-form-item label="" prop="user">
              <el-input
                size="large"
                placeholder="Usuario"
                v-model="model.user"
              ></el-input>
            </el-form-item>

            <el-form-item label="" prop="password">
              <el-input
                size="large"
                placeholder="Contraseña"
                v-model="model.password"
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="setLogin"
                >Iniciar Sesion</el-button
              >
            </el-form-item>

            <el-link class=" " href="/recoveryPassword" target="_blank"
              >¿Olvido su contraseña?</el-link
            >
          </el-form>
        </div>

      </div>

      <div class=" w-full card-img hidden md:flex md:items-center   border-l border-gray-300">
        <img class="img2 " src="./src/homepage.gif" />
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
