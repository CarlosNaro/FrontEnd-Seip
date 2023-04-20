import axios from "axios";
import { getItem } from "./actions/localStorage";
import { ref } from "vue";
const BASE_URL = "http://127.0.0.1:8000/";
const api = axios.create({ baseURL: BASE_URL });
import router from "../router";
import jwt_decode from "jwt-decode";

// export interface IJwtDecode {
//   token_type: string;
//   exp: number;
//   jti: string;
//   user_id: number;
// }


/* An interceptor that is used to add the token to the header of the request. */
export default api;

api.interceptors.request.use(
    function (config: any) {
      const token = getItem("token");
  
      if (token) {
        // const decode = jwt_decode(auth_token.access) as IJwtDecode;
        // const current_time = Date.now() / 1000;
        config.headers.Authorization = `JWT ${token.access}`;
  
        // if (decode.exp < current_time) {
        //   // Si ha expirado, redirige al usuario al login
        //   localStorage.clear();
        //   router.push({ name: "Login" });
        // }
      }
  
      return config;
    },
    function (err:any) {
      return Promise.reject(err.response.status);
    }
  );
  