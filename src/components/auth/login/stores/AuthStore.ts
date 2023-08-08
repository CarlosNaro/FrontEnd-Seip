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
    console.log("data ", data);
    ElMessage.success(`Welcome ${data.username}`);
    return true;
  } catch (error: any) {
    ElMessage.error(error.message);
    return false;
  }
};
export default authLogin;

//creation oof the state
// const state = reactive({
//   Data: [],
// });

// export default function useAuthStore() {
//   //variable get
//   // const getAuth = state.Data

//   // function for authentication
//   const userAuthentication = async (userData: ILogin) => {
//     try {
//       console.log("meodelos ", userData);
//       const { data, status } = await api.post("auth/token/", userData);
//       setItem("token", data);
//       console.log("Logueado");
//       // router.push({ name: "Dashboard" });
//     } catch (e) {
//       // console.log("Response " ,e.response.statusText)
//       console.log("segundo");
//     }
//   };

//   return {
//     userAuthentication,
//   };
// }
