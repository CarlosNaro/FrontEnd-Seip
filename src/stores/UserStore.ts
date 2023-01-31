import {reactive} from 'vue'
import apiInstance from './indexApi'

const state = reactive({
    dataUser: [] ,
    
})


export default function useUserStore (){

    const getUser = ()=> state.dataUser 
// fuincion encargada de traer los datos del usuario 
    const setUser = async ()=>{
        try {
            const {data, status} = await apiInstance.get('users/user/')
            if(status == 200) state.dataUser = data 
        } catch (e) {
            console.error(e)
        }
    }


    return {getUser, setUser}
}