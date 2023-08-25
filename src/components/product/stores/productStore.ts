import { reactive } from 'vue';
import service from '../../../core/modules/axios';
import { IProductStore, IFProduct } from '../models/IProduct';
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

    const sendProduct = async( model: IFProduct  ):Promise<boolean> =>{
        try {
            

            await service.post("apunte/product/", model)
            setProduct()
            ElMessage.success("Producto agregado")
            return true
        } catch (error:any  ) {
            ElMessage.error(error.message)
            return false
        }

    }

    const deleteProduct= () =>{


    }


    

    return{ getProduct, setProduct, sendProduct }
}

