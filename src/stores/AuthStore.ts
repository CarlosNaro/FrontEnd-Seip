// Usamos el composition APi de vuejs 3
import { reactive } from "vue";
import  apiInstance  from "./indexApi";

//creacion del state
const state = reactive({
  dataUser: [],
});

export default function useAuthStore() {
  //variable get
  const getAuth = () => state.dataUser;

  // const setAuth =async () => {
  //   try {

  //     await apiInstance.get('auth/users/').then((respon)=>{
  //       console.log(respon)
  //     })
      
  //   } catch (error) {
  //     console.error(error)
  //   }
    
  // }


  // fuincion encargada de traer los datos
  const loginAuth = async (jwt_create: any) => {
    console.log("Data enviada ", jwt_create);
    try {
        const {data,status} = await apiInstance.post("auth/jwt/create/", jwt_create)
        if(status == 200){
            // alert("dato Correcto::::")
            // console.log(status)
            localStorage.setItem("token-user",JSON.stringify(data))

        }else{
            console.log(status)
        }
        
    } catch (e) {
        console.error("Error :", e);
    }
  };

  return { loginAuth,  getAuth };
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
