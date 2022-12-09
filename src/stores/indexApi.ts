import axios from "axios";
import { getItem } from "./actions/localStorage";

const BASE_URL = "http://127.0.0.1:8000/";
const apiInstance = axios.create({ baseURL: BASE_URL });
const valor = getItem("token-user");
//pasar un parametro al hacer una petición al servidor

if (valor) {
  apiInstance.interceptors.request.use(
    (request: any) => {
      request.headers = valor.access;
      return request;
    },
    (error) => error
  );
}

// capturando la respuesta del servidor en caso de error
apiInstance.interceptors.response.use(
  (response: any) => response,
  (err) => {
    return Promise.reject(err.response.status);
  }
);

export default apiInstance;

// api.interceptors=(reque)=>{}
// https://www.youtube.com/watch?v=2He8bOUsHAM&ab_channel=JuanCabello%7CiTana
