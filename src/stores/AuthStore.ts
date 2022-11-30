// Usamos el composition APi de vuejs 3
import { reactive } from "vue";
import { api } from "./indexApi";

//creacion del state
const state = reactive({
  dataUser: [],
});

export default function useAuthStore() {
  //variable get
  const getAuth = () => state.dataUser;

  // fuincion encargada de traer los datos
  const setAuth = async (jwt_create: any) => {
    console.log("Data enviada ", jwt_create);
    try {
        const {data,status} = await api.post("auth/jwt/create/", jwt_create)
        if(status == 401){
            alert("dato erroneo")
        }else{
            console.log(data)
        }
        
    } catch (e) {
        console.error("Error :", e);
    }
  };

  return { setAuth, getAuth };
}








// axios.defaults.headers.common['Authorization'] = "JWT" + acces
      // console.log('develve :', data)
//https://www.youtube.com/watch?v=fuqPuyX1UF8&t=298s&ab_channel=LesKoding

// const {data, status} = await api.get("auth/jwt/create/",{
//     headers:{
//         autentication
//     }
// })

// try {
//     await api.post("auth/jwt/create/",jwt_create).then((response)=>{

//         const {data, status} = response

//         if( status == 200){
//             // alert("satus "+ data)
//             state.dataUser = data
//             //localStorage.setItem("token-naro",JSON.stringify(data))
//             console.log(state.dataUser)
//         }else{
//             state.dataUser = data
//                 alert("satus distinto de 200 "+ state.dataUser)
//         }
//     })
//     // axios.defaults.headers.common['Authorization'] = "JWT" + acces
//     // console.log('develve :', data)
// } catch (e) {
//     console.error('Error:: ',e)
// }
