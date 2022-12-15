import axios from "axios";
import { getItem } from "./actions/localStorage";
import  useAuthStore  from './AuthStore'

const BASE_URL = "http://127.0.0.1:8000/";
const apiInstance = axios.create({ baseURL: BASE_URL });



export default apiInstance;

apiInstance.interceptors.request.use(
    function(config:any){
         const auth_token = getItem("token-user")
        if(auth_token){
            config.headers.Authorization = `JWT ${auth_token.access}`
        }    
        return config
    },
    function(err){
        return Promise.reject(err.response.status)
    }
)