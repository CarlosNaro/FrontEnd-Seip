// trabajando con cmpositions API
import { reactive } from 'vue'
import { api }  from './indexApi'

// definimos el state


const state = reactive({
    access:'',
    refresh:''
})

export default function useExpensStore(){
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



}

