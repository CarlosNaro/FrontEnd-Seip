import {
  userStore,
  IUser,
  IProfile,
  IProfileEdit,
  IChangePassword,
} from "../models/IUser";
import service from "../../../../modules/axios";
import { ElMessage } from "element-plus";
import { getItem, setItem } from "../../../../core/actions/localStorage";

const APPNAME = import.meta.env.VITE_APP_APP_NAME as string;

/* create state  */
const state = reactive<userStore>({
  profile: null,
  user: null,
});

export default function useUserStore() {
  const getData = () => state;

  const uploadProfile = async () => {
    try {
      const { data, status } = await service.post("user/getUserByID/");
      if (status == 200) {
        state.profile = data.profile as IProfile;
        state.user = data.user as IUser;
        console.log("login ", data.user);

        // setItem(`${APPNAME}_user`, data.user);
      }
    } catch (error: any) {
      ElMessage.error(error.message);
    }
  };

  const updateProfile = async (
    modelProfile: IProfileEdit,
    modelUser: IUser
  ): Promise<boolean> => {
    try {
      if (!modelProfile && !modelUser) return false;

      const formData = new FormData();

      if (typeof modelProfile.image === "string") {
        formData.append("id", modelProfile.id.toString());
        formData.append("first_name", modelProfile.first_name);
        formData.append("last_name", modelProfile.last_name);
        formData.append("email", modelProfile.email);
        formData.append("user_id", modelProfile.user_id.toString());
      } else {
        formData.append("id", modelProfile.id.toString());
        formData.append("first_name", modelProfile.first_name);
        formData.append("last_name", modelProfile.last_name);
        formData.append("email", modelProfile.email);
        formData.append("image", modelProfile.image);
        formData.append("user_id", modelProfile.user_id.toString());
      }

      await service.put(`user/profile/${modelProfile.id}/`, formData);
      console.log("edit: user ", modelUser);

      // await service.put(`user/django/${modelUser.id}/`, modelUser);

      uploadProfile();
      console.log("state ", state.profile);
      console.log("User ", state.user);

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
  return { uploadProfile, getData, updateProfile, changePassword };
}
