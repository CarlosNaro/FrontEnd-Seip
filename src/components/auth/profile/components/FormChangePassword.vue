<script setup lang="ts">
import OverlayLayer from "../../../OverlayLayer.vue";
import BaseIcon from "../../../BaseIcon.vue";
import { reactive, computed, ref, onMounted, watch } from "vue";
import { mdiAsterisk, mdiFormTextboxPassword } from "@mdi/js";
import useUserStore from "../stores/userStore";
import passwordRules from "../rules/changePasswordRules";
import { ElMessage } from "element-plus";
import { IChangePassword } from "../models/IUser";

const model = reactive<IChangePassword>({
  current_password: "",
  new_password: "",
  confirm_password: "",
}) as IChangePassword;

const { changePassword } = useUserStore();
const emit = defineEmits(["update:modelValue"]);
const form = ref();
const view = ref(false);
const type = ref("password");

const checkPassword = computed(() => {
  return [
    {
      validator: (rule: any, value: string, callback: any) => {
        if (value != model.new_password) {
          callback(new Error("Las contraseñas no coinciden"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ];
});

const sendData = async (): Promise<void> => {
  form.value.validate(async (valid: boolean) => {
    if (!valid) {
      ElMessage.warning("Por favor, rellenar los campos correctamente");
      return;
    }
  });
  // const status = await changePassword(model);
  // if (status) ElMessage.success("Contraseña actualizada correctamente");
};

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
</script>

<template>
  <CardBox>
    <el-form
      ref="form"
      label-position="top"
      class="grid grid-cols-1 lg:grid-cols-2 gap-x-10"
      :model="model"
      :rules="passwordRules"
    >
      <el-form-item label="Contraseña actual" prop="current_password">
        <el-input
          class="forms_password"
          size="large"
          :type="type"
          placeholder="Contraseña actual"
          v-model="model.current_password"
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
          v-model="model.new_password"
        />
        <BaseIcon
          class="absolute z-10 pointer-events-none text-gray-500"
          :path="mdiFormTextboxPassword"
        />
      </el-form-item>

      <el-form-item
        :rules="checkPassword"
        label="Confirmar contraseña"
        prop="confirm_password"
      >
        <el-input
          class="forms_password"
          size="large"
          :type="type"
          placeholder="Confirmar contraseña"
          v-model="model.confirm_password"
        />
        <BaseIcon
          class="absolute z-10 pointer-events-none text-gray-500"
          :path="mdiFormTextboxPassword"
        />
      </el-form-item>

      <el-form-item class="self-end justify-self-end">
        <el-button @click="sendData" type="primary">Actualizar</el-button>
      </el-form-item>

      <!-- <el-form-item>
          <el-checkbox v-model="view">Mostrar contraseña</el-checkbox>
        </el-form-item> -->
    </el-form>
  </CardBox>
</template>

<!-- <style>
.forms_password .el-input__wrapper {
  @apply pl-6;
}
</style> -->
