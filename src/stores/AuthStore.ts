// Usamos el composition APi de vuejs 3
import { reactive} from 'vue'
import { api } from './indexApi'


//creacion del state
const state = reactive({
    dataUser:[],
})

export default function useAuthStore(){
    //variable get 
    const getAuth = (()=> state.dataUser)

    // fuincion encargada de traer los datos 
    const setAuth = async (jwt_create:any) =>{
        console.log("Data enviada ",jwt_create)
        try {
            await api.post("auth/jwt/create/",jwt_create).then((response:any)=>{
                const {data, status} = response
                if( status == 200){
                    alert("satus "+ status)
                }else{
                    state.dataUser = data
                        alert("satus distinto de 200 "+ state.dataUser)
                }
            })
            // axios.defaults.headers.common['Authorization'] = "JWT" + acces 
            // console.log('develve :', data)
        } catch (e) {
            console.error('Error:: ',e)
        }
    }

    return { setAuth, getAuth}

}
