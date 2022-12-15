// Usamos el composition APi de vuejs 3
import { reactive, ref } from "vue";
import router from "../router";
import { setItem,getItem } from "./actions/localStorage";
import apiInstance from "./indexApi";
import jwt_decode from "jwt-decode";
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

  // expiración de token 

  const expiredToken =(token:any)=>{
    token = jwt_decode(token)
    const expired = ref(false)
    if(token!=""){
      const current_time = Date.now()/1000
      if(token.exp < current_time){
        expired.value = true
        router.push({ name: "Login" });
      }
    }else{
      expired.value = true
    }
    return expired.value
  }


  return { loginAuth, getAuth, setExpens };
}

