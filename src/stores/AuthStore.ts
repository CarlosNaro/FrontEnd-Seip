// Usamos el composition APi de vuejs 3
import { reactive } from "vue";
import router from "../router";
import { setItem } from "./actions/localStorage";
import apiInstance from "./indexApi";

//creacion del state
const state = reactive({
  expens: [],

});

export default function useAuthStore() {
  //variable get
  const getAuth = () => state.expens;

  // fuincion encargada de traer los datos
  const loginAuth = async (jwt_create: any) => {
    console.log("Data enviada ", jwt_create);
    try {
      const { data, status } = await apiInstance.post(
        "auth/jwt/create/",
        jwt_create
      );

      if (status == 200) {
        
        setItem("token-user", data )
        router.push({ name: "Dashboard" });
      } else {
        // console.log(status);
      }
    } catch (e) {
      console.error("Error :", e);
    }
  };

  const setExpens = async () => {
    try {
      const { data, status } = await apiInstance.get("apunte/expense/");
      if (status == 200) {
        state.expens = data;
        
      }
    } catch (e) {
        console.error(e)
    }
  };


  return { loginAuth, getAuth, setExpens };
}

