import { reactive } from 'vue';
import service from '../../../core/modules/axios';
import { IProductStore } from '../models/IProduct';
import { ElMessage } from 'element-plus';

const state = reactive<IProductStore>({
    product:null
})

export default function useProductStore() {
    const getProduct = () => state.product
    const setProduct = async()=>{
        try {
          const { data, status } = await service.get("apunte/product/")
          if ( status == 200 ) state.product = data 
          } catch(error:any) {
            console.log('Error al obtener los datos de la tabla', error);
            ElMessage.error(error.message);
        }
    }

    return{ getProduct, setProduct }
}

