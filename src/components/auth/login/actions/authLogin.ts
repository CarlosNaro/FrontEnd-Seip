import { setItem } from "../../../../core/actions/localStorage" 
import service from "../../../../modules/axios";
import { ILogin } from "../models/ILogin";
import { ElMessage } from "element-plus";

const authLogin = async (model: ILogin): Promise<boolean> => {
  try {
    const { data } = await service.post("auth/token/", model);
    const APP_NAME = import.meta.env.VITE_APP_APP_NAME as string;
    setItem(`${APP_NAME}_token`, data.token);
    setItem(`${APP_NAME}_user`, data.user);

    ElMessage.success(`Welcome ${data.user.username}`);
    return true;
  } catch (error: any) {
    ElMessage.error(error.message);
    return false;
  }
};

export default authLogin;
