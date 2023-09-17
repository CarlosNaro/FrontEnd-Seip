//  composition APi de vue.js 3
import { setItem, getItem } from "../../../../core/interceptors/localStorage";
import service from "../../../../core/modules/axios";
import { ILogin } from "../models/ILogin";
import { ElMessage } from "element-plus";

const authStore = async (model: ILogin): Promise<boolean> => {
  try {
    const { data } = await service.post("auth/token/", model);
    setItem("token", data.token);
    setItem("user", data.user);
    ElMessage.success(`Welcome ${data.user.username}`);
    return true;
  } catch (error: any) {
    ElMessage.error(error.message);
    return false;
  }
};

export default authStore;
