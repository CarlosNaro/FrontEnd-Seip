//  composition APi de vue.js 3
import { setItem, getItem } from "../../../../core/actions/localStorage";
import service from "../../../../modules/axios";
import { ILogin } from "../models/ILogin";
import { ElMessage } from "element-plus";

const authLogin = async (model: ILogin): Promise<boolean> => {
  try {
    const { data } = await service.post("auth/token/", model);
    const APPNAME = import.meta.env.VITE_APP_APP_NAME as string;
    setItem(`${APPNAME}_token`, data.token);
    setItem(`${APPNAME}_user`, data.user);

    ElMessage.success(`Bienvenido ${data.user.username}`);
    return true;
  } catch (error: any) {
    ElMessage.error(error.message);
    return false;
  }
};

export default authLogin;
