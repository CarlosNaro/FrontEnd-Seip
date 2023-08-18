<script setup lang="ts">
import OverlayLayer from "../../../OverlayLayer.vue";
import BaseIcon from "../../../BaseIcon.vue";
import { reactive, computed, ref, onMounted, watch } from "vue";
import { mdiAsterisk, mdiFormTextboxPassword } from "@mdi/js";
import useUserStore from "../stores/userStore";
import passwordRules from "../rules/changePasswordRules";
import { ElMessage, imageProps } from "element-plus";
import { IChangePassword } from "../models/IUser";
import { ca } from "element-plus/es/locale";

const props = defineProps<{
  title: string;
  modelValue: boolean;
  icon: string;
}>();

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

// const checkPassword = computed(() => {
//   return [
//     {
//       validator: (rule: any, value: string, callback: any) => {
//         if (value != model.new_password) {
//           callback(new Error("Las contraseñas no coinciden"));
//         } else {
//           callback();
//         }
//       },
//       trigger: "blur",
//     },
//   ];
// });

const checkPassword = computed(() => {
      return [
        {
          validator: (rule:any, value:string, callback:any) => {
            if (value !== model.new_password) {
              callback(new Error("Las contraseñas no coinciden"));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }
      ];
    });

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const confirmCancel = () => {
  value.value = false;
};
window.addEventListener("keydown", (e: any) => {
  if (e.key == "Escape") confirmCancel();
});

const sendPassword = () => {
  form.value.validate(async (valid: boolean) => {
    if (!valid) {
      ElMessage.warning("Por favor, rellenar los campos correctamente");
      return;
    }
  });
  // changePassword(model);
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
  <OverlayLayer v-show="value" @overlay-click="confirmCancel">
    <Card-Box>
      <Card-Box-Component-Title :title="props.title">
        <span
          @click="confirmCancel"
          class="flex hover:bg-slate-200 rounded-full items-center p-1"
        >
          <Base-Icon class="w-auto h-auto" :path="props.icon" />
        </span>
      </Card-Box-Component-Title>
      <hr />

      <div>
        <el-form
          :model="model"
          :rules="passwordRules"
          ref="form"
          label-position="top"
        >
          <el-form-item label="Contraseña actual" prop="current_password">
            <el-input class="pruebita  " 
              size="large"
              :type="type"
              placeholder="Contraseña actual"
              v-model="model.current_password"
            />
            <BaseIcon
              class="absolute right-0 z-10 pointer-events-none text-gray-500"
              :path="mdiAsterisk"
            />
          </el-form-item>

          <el-form-item label="Nueva contraseña" prop="new_password">
            <el-input
              size="large"
              :type="type"
              placeholder="Nueva contraseña"
              v-model="model.new_password"
            />
            <BaseIcon
              class="absolute right-0 z-10 pointer-events-none text-gray-500"
              :path="mdiFormTextboxPassword"
            />
          </el-form-item>

          <el-form-item label="Confirmar contraseña" prop="confirm_password">
            <el-input
              size="large"
              :type="type"
              :rules="checkPassword"
              placeholder="Confirmar contraseña"
              v-model="model.confirm_password"
            />
            <BaseIcon
              class="absolute right-0 z-10 pointer-events-none text-gray-500"
              :path="mdiFormTextboxPassword"
            />
          </el-form-item>

          <el-form-item>
            <el-checkbox v-model="view">Mostrar contraseña</el-checkbox>
          </el-form-item>

          <el-form-item>
            <el-button @click="sendPassword" class="w-full" type="primary"
              >Actualizar</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </Card-Box>
  </OverlayLayer>
</template>

<style >


</style>
