import axios from 'axios'

const BASE_URL='http://127.0.0.1:8000/'
const apiInstance = axios.create({baseURL:BASE_URL})

// pasar un parametro al hacer una petición al servidor 
// apiInstance.interceptors.request.use(
//     (request:any)=>{
//         request.headers["IP"] = "192.168.1.220"
//         return request
//     },
//     (error) => error
// )

// capturando la respuesta del servidor en caso de error 
apiInstance.interceptors.response.use(
    (response:any)=> response,
    (err) => {
        return Promise.reject(err.response.status)
    }
)

export default apiInstance


// api.interceptors=(reque)=>{}
// https://www.youtube.com/watch?v=2He8bOUsHAM&ab_channel=JuanCabello%7CiTana