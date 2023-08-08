// import api from "../../../../stores/indexApi";
import service from "../../../../core/modules/axios";
const resetPasswordStore = async (model: any): Promise<boolean> => {
  try {
    console.log("entrando al store ", model);
    const { data } = await service.post("auth/users/reset_password", model);
    console.log("respuesta ", data);

    return true;
  } catch (error) {
    console.log("error ", error);
    return false;
  }
};

export default resetPasswordStore;
