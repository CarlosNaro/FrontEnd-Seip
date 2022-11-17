import useAuthStore from '../stores/AuthStore'

const useAuth = ()=>{

    const AuthStore = useAuthStore()

    const createUser = async(user:any)=>{

        console.log("usuario creado", user)

        return{ok:false, message:"EMAIL_EXISTS"}
    }

    return{
        createUser
    }
}

export default useAuth