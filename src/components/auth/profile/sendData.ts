import { form, model } from "./index.vue";

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
