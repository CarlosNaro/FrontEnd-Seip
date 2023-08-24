import axios from "axios";
import { ref, reactive } from "vue";
import { getItem } from "../interceptors/localStorage";
const BASE_URL = "http://127.0.0.1:8000/";
// const BASE_URL = "http://192.168.43.179:8000/";
// const BASE_URL = "http://192.168.43.53:8000/";


const service = axios.create({ baseURL: BASE_URL });

// export interface IJwtDecode {
//   token_type: string;
//   exp: number;
//   jti: string;
//   user_id: number;
// }

/* An interceptor that is used to add the token to the header of the request. */

service.interceptors.request.use(
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
  function (err: any) {
    return Promise.reject(err.response.status);
  }
);

export default service;
