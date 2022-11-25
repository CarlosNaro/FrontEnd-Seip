// Usamos el composition APi de vuejs 3
import { reactive} from 'vue'
import { api } from './indexApi'


//creacion del state
const state = reactive({
    dataLogin :"",
    IsAuthenticated:false
})

export default function useAuthStore(){
    //variable get 
    const getAuth = (()=>{
        
            state.access,
            state.IsAuthenticated
    })

    // fuincion encargada de traer los datos 
    const setAuth = async (users:any) =>{
        console.log("Data enviada ",users)
        try {
            await api.post("auth/jwt/create/",users).then(
               response=>{
                     console.log("data jwt: ",response)
                }
            ) 
            
            // const acces = state.access

            // axios.defaults.headers.common['Authorization'] = "JWT" + acces 
            // console.log('develve :', data)
        } catch (e) {
            console.error(e)
        }
    }

    return { setAuth, getAuth}

}
