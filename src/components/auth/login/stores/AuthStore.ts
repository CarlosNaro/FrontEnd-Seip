//  composition APi de vue.js 3
import { reactive, ref } from "vue";
import { setItem } from "../../../../core/interceptors/localStorage";
import service from "../../../../core/modules/axios";
import { ILogin } from "../models/ILogin";
import { ElMessage } from "element-plus";

const authLogin = async (model: ILogin): Promise<boolean> => {
  try {
    const { data } = await service.post("auth/token/", model);

    setItem("token", data);
    ElMessage.success(`Welcome ${data.username}`);
    return true;
  } catch (error: any) {
    ElMessage.error(error.message);
    return false;
  }
};
export default authLogin;
