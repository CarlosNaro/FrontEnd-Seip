import { getItem } from "../../../../core/interceptors/localStorage";
import {
  userStore,
  IUser,
  IJwtDecode,
  IUserUpdate,
  IChangePassword,
} from "../models/IUser";
import service from "../../../../core/modules/axios";
import jwtDecode from "jwt-decode";
import { ElMessage } from "element-plus";
/* create state  */

const state = reactive<userStore>({
  user: null,
});

const token = getItem("token");
const id = jwtDecode(token.access) as IJwtDecode;

export default function useUserStore() {
  const getUser = () => state.user;

  const setUser = async () => {
    try {
      const { data, status } = await service.post(` user/getUserById/${id}/ `);
      if (status == 200)
        state.user = data as IUser;
      console.log(state.user);
      
    } catch (error: any) {
      console.log(error);
      ElMessage.error(error.message);
    }
  };

  const userUpdate = async (model: IUserUpdate): Promise<boolean> => {
    try {
      await service.put(`users/user/${model.id}/`, model);
      setUser();
      ElMessage.success("Usuario actualizado correctamente");
      return true;
    } catch (error: any) {
      ElMessage.error(error.message);
      return false;
    }
  };

  const changePassword = async (model: IChangePassword): Promise<boolean> => {
    try {
      await service.post("change-password/", model);
      ElMessage.success("Contraseña Actualizada Correctamente");
      return true;
    } catch (error: any) {
      // console.log(error.response.data.detail);
      ElMessage.error(error.response.data.detail);
      return false;
    }
  };
  return { setUser, getUser, userUpdate, changePassword };
}
