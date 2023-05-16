import {reactive} from 'vue'
import apiInstance from './indexApi'
import { getItem } from './actions/localStorage'

export interface IUser {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  is_staff: boolean;
  is_active: boolean;
}
const state = reactive({
    dataUser: [] ,
    // users :<IUser[]>([]),
})


export default function useUserStore (){

    const getUser = ()=> state.dataUser
// fuincion encargada de traer los datos del usuario 
    const setUser = async ()=>{
        try {
            const token = getItem('token')
            const {data, status} = await apiInstance.get('users/user/') 
            if(status == 200){
                data.filter((item:any )=>{if (item.id == token.id) state.dataUser = item  }) 
            }
        } catch (e) {
            console.error(e)
        }
    }
    return {getUser, setUser}
}