import axios from "axios";
import { getItem } from "./actions/localStorage";
import jwt_decode from "jwt-decode";
import { ref } from "vue";
import router from "../router";
const BASE_URL = "http://127.0.0.1:8000/";
const api = axios.create({ baseURL: BASE_URL });

// export interface IJwtDecode {
//   token_type: string;
//   exp: number;
//   jti: string;
//   user_id: number;
// }


/* An interceptor that is used to add the token to the header of the request. */
export default api;

// apiInstance.interceptors.request.use(
//     function (config: any) {
//       const auth_token = getItem("token-user");
  
//       if (auth_token) {
//         // const decode = jwt_decode(auth_token.access) as IJwtDecode;
//         // const current_time = Date.now() / 1000;
//         config.headers.Authorization = `JWT ${auth_token.access}`;
  
//         // if (decode.exp < current_time) {
//         //   // Si ha expirado, redirige al usuario al login
//         //   localStorage.clear();
//         //   router.push({ name: "Login" });
//         // }
//       }
  
//       return config;
//     },
//     function (err) {
//       return Promise.reject(err.response.status);
//     }
//   );
  