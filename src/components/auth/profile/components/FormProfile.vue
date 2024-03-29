<script setup lang="ts">
import { Calendar, Search, User } from "@element-plus/icons-vue";
import CardBoxComponentTitle from "../../../CardBoxComponentTitle.vue";
import BaseIcon from "../../../BaseIcon.vue";
import CardBox from "../../../CardBox.vue";
import { ref, reactive, watch, computed, onMounted } from "vue";
import OverlayLayer from "../../../OverlayLayer.vue";
import { IUser, userStore, IUserUpdate } from "../models/IUser";
import useUserStore from "../stores/userStore";
import userRules from "../rules/userRules";
import { ElMessage } from "element-plus";

const props = defineProps<{
  title: string;
  modelValue: boolean;
  icon: string;
  user: IUser;
}>();

const { userUpdate } = useUserStore();

const isLoading = ref(false);
const form = ref();

const model = reactive<IUserUpdate>({
  id: props.user.id,
  username: props.user.username,
  first_name: props.user.first_name,
  last_name: props.user.last_name,
  email: props.user.email,
});

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const confirmCancel = () => {
  value.value = false;
};

const Cancel = () => confirmCancel();

window.addEventListener("keydown", (e: any) => {
  if (e.key === "Escape") Cancel();
});

const sendData = async (): Promise<void> => {
  form.value.validate(async (valid: boolean) => {
    if (!valid) {
      ElMessage.warning("Por favor, rellenar los campos correctamente");
      return;
    }
    isLoading.value = true;
    const status = await userUpdate(model);
    isLoading.value = false;
    if (status) value.value = false;
  });
};
</script>
<template>
  <OverlayLayer v-show="value" @overlay-click="Cancel">
    <CardBox
      class="p-4 shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
    >
      <CardBoxComponentTitle :title="props.title">
        <span
          class="flex hover:bg-slate-200 rounded-full items-center p-1"
          @click="Cancel"
        >
          <BaseIcon class="w-auto h-auto" :path="props.icon" />
        </span>
      </CardBoxComponentTitle>
      <hr />
      <div class="mt-4">
        <el-form
          label-position="top"
          :model="model"
          :rules="userRules"
          ref="form"
        >
          <el-form-item label="Nombre(s)" prop="first_name">
            <el-input
              size="large"
              v-model="model.first_name"
              :prefix-icon="User"
              placeholder="Pepito Grillo"
            />
          </el-form-item>
          <el-form-item label="Apellidos" prop="last_name">
            <el-input
              size="large"
              v-model="model.last_name"
              :prefix-icon="User"
              placeholder="De las Torres "
            />
          </el-form-item>
          <el-form-item label="Correo Electrónico " prop="email">
            <el-input
              size="large"
              v-model="model.email"
              :prefix-icon="User"
              placeholder="De las Torres "
            />
          </el-form-item>

          <el-form-item class="" label="Usuario " prop="username">
            <el-input
              size="large"
              v-model="model.username"
              :prefix-icon="User"
              placeholder="De las Torres "
            />
          </el-form-item>

          <el-form-item>
            <el-button
              class="w-full"
              type="primary"
              @click="sendData"
              :loading="isLoading"
              >Actualizar</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </CardBox>
  </OverlayLayer>
</template>

<style></style>
