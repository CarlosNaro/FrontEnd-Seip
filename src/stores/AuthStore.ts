// Usamos el composition APi de vuejs 3
import { reactive } from "vue";
import router from "../router";
import {getItem, setItem } from "./actions/localStorage";
import api from "./indexApi";
import jwt_decode from "jwt-decode";
//creacion del state
const state = reactive({
  Data: [],
});
//::::

export default function useAuthStore() {
  //variable get
  const getAuth = state.Data
  // function for authentication

  const autenticationUser = async (dataUser: any) => {
    try {
      const {data, status} = await api.post('auth/jwt/create/',dataUser)
      console.log(data)

      setItem("token",data)
      router.push({ name: "Dashboard" })

    } catch (e) {
      // console.log(e.response.statusText)
      console.log("segundo")
    }
  };

  return {
    autenticationUser,
    
  };
}
