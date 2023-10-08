import axios from "axios";
import { getItem } from "../core/actions/localStorage";

const url = import.meta.env.VITE_APP_API_URL_LOCAL as string;

const useAxios = axios.create({ baseURL: url });

// export interface IJwtDecode {
//   token_type: string;
//   exp: number;
//   jti: string;
//   user_id: number;
// }

/* An interceptor that is used to add the token to the header of the request. */

useAxios.interceptors.request.use(
  function (config: any) {
    const token =
      getItem(`${import.meta.env.VITE_APP_APP_NAME}_token`) || ("" as string);
    //
    if (token) config.headers.Authorization = `JWT ${token.access}`;

    return config;
  },
  function (err: any) {
    return Promise.reject(err.response.status);
  }
);

export default useAxios;

// if (token) {
//   // const decode = jwt_decode(auth_token.access) as IJwtDecode;
//   // const current_time = Date.now() / 1000;
//   config.headers.Authorization = `JWT ${token.access}`;

//   // if (decode.exp < current_time) {
//   //   // Si ha expirado, redirige al usuario al login
//   //   localStorage.clear();
//   //   router.push({ name: "Login" });
//   // }
// }
