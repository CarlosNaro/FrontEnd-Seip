// Usamos el composition APi de vuejs 3
import { reactive,ref } from "vue";
import router from "../router";
import { setItem } from "./actions/localStorage";
import api from "./indexApi";


//creacion del state
const state = reactive({
  Data: [],
});
// varible para activar el modal alert al resivior una respuesta 401 de loguin
const isModalActiveAlert = ref()
//::::

export default function useAuthStore() {
  //variable get
  // const getAuth = state.Data
  
  isModalActiveAlert.value = false

  // function for authentication
  const autenticationUser = async (dataUser: any) => {
    try {
      const {data, status} = await api.post('auth/token/',dataUser)
      console.log(data)

      setItem("token",data)
      router.push({ name: "Dashboard" })

    } catch (e) {
      // console.log("respuesta " ,e.response.statusText)
      isModalActiveAlert.value = true
      console.log("segundo")
    }
  };
  
  return {
    autenticationUser,
    isModalActiveAlert,
  };
}
