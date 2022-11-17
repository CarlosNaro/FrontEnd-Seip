// trabajando con cmpositions API
import { reactive } from 'vue'
import axios from 'axios'
import { api }  from './indexApi'

// definimos el state


const state = reactive({
    access:'',
    refresh:'',
    user :''
})

export default function useAuthStore(){
   

    const postUsers = async (datalogin:any)=>{
        try {
            console.log('data enviada: ', datalogin) 
          const {data,status} = await axios.post('http://127.0.0.1:8000/admin/auth/token/login/',datalogin)
         
          
          console.log('data login: ', data )
          console.log(":::::::::::::::::::::::::")
          const resp = data.auth_token

          console.log('data login: ', resp )

        } catch (e) {
          console.error(e)
        }
      }
   
   
   
    // const getUsers = (state:any)=>{
    //     if(localStorage.getItem("access")){
    //         state.access = localStorage.getItem("access")    
    //     }else{
    //         state.access = ' '
    //     }
    // }



    function InitialStore(state:any){

        if(localStorage.getItem("access")){
            state.access = localStorage.getItem("access")    
        }else{
            state.access = ' '
        }

    }

    function setAccess(state:any ,access:any){
        state.access = access
    }

    return{postUsers}

}

