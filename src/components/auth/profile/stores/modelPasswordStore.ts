import { reactive } from "vue";
import { IChangePassword } from "../models/IUser";

export const modelChangePassword = reactive<IChangePassword>({
  current_password: "",
  new_password: "",
  confirm_password: "",
});
