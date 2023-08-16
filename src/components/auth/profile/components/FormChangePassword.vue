<script setup lang="ts">
import OverlayLayer from "../../../OverlayLayer.vue";
import BaseIcon from "../../../BaseIcon.vue";
import { reactive, computed, ref } from "vue";
import { mdiAsterisk, mdiFormTextboxPassword } from "@mdi/js";
import useUserStore from "../stores/userStore";
import passwordRules from "../rules/changePasswordRules";
import { ElMessage } from "element-plus";
const props = defineProps<{
  title: string;
  modelValue: boolean;
  icon: string;
}>();

const model = reactive({
  current_password: "",
  new_password: "",
  confirm_password: "",
});

const { changePassword } = useUserStore();
const emit = defineEmits(["update:modelValue"]);
const form = ref();

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
          <el-form-item label="Current password" prop="current_password">
            <input
              type="text"
              class="input-forms-icons"
              placeholder="Name"
              v-model="model.current_password"
            />
            <BaseIcon
              class="absolute z-10 pointer-events-none text-gray-500"
              :path="mdiAsterisk"
            />
          </el-form-item>

          <el-form-item label="New password" prop="new_password">
            <input
              type="text"
              class="input-forms-icons"
              placeholder="Name"
              v-model="model.new_password"
            />
            <BaseIcon
              class="absolute z-10 pointer-events-none text-gray-500"
              :path="mdiFormTextboxPassword"
            />
          </el-form-item>

          <el-form-item label="Confirm password" prop="confirm_password">
            <input
              type="text"
              class="input-forms-icons"
              placeholder="Name"
              v-model="model.confirm_password"
            />
            <BaseIcon
              class="absolute z-10 pointer-events-none text-gray-500"
              :path="mdiFormTextboxPassword"
            />
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
