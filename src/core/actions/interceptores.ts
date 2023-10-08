// import service from "../modules/axios";
// import { getItem } from "./localStorage";

// service.interceptors.request.use(
//   function (config: any) {
//     const auth_token = getItem("token-user");
//     if (auth_token) {
//       config.headers.Authorization = `JWT ${auth_token.access}`;
//     }
//     return config;
//   },
//   function (err) {
//     return Promise.reject(err);
//   }
// );

// service.interceptors.response.use(function (response:any) {
//     // Cualquier código de estado que este dentro del rango de 2xx causa la ejecución de esta función
//     // Haz algo con los datos de la respuesta
//      return response.data;

//   }, function (error) {
//     // Cualquier código de estado que este fuera del rango de 2xx causa la ejecución de esta función
//     // Haz algo con el error
//     return Promise.reject(error.response.status);
//   });
