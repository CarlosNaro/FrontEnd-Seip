import { reactive } from "vue";
import service from "../../../core/modules/axios";
import { IProductStore, IFProduct } from "../models/IProduct";
import { ElMessage } from "element-plus";

const state = reactive<IProductStore>({
  product: null,
});

export default function useProductStore() {
  const getProduct = () => state.product;
  
  const setProduct = async () => {
    try {
      const { data, status } = await service.get("apunte/product/");
      console.log("data: ", data);
      if (status == 200) state.product = data;
    } catch (error: any) {
      console.log("Error al obtener los datos de la tabla", error);
      ElMessage.error(error.message);
    }
  };

  const sendProduct = async (model: IFProduct): Promise<boolean> => {
    try {
      console.log("model: ", model.image!);

      const form = new FormData()

      form.append("name", model.name )
      form.append("description", model.description )
      form.append("image", model.image? model.image : "" )


      await service.post("apunte/product/", form);
      setProduct();
      ElMessage.success("Producto agregado");
      return true;
    } catch (error: any) {
      ElMessage.error(error.message);
      return false;
    }
  };

  const deleteProduct = async( id:number ):Promise<boolean> => {
    try {
      await service.delete(`apunte/product/${id}/`);
      setProduct();
      ElMessage.warning("Producto eliminado");
      return true; 
    } catch (error:any ) {
      ElMessage.error( error.message );
      return false;
    }

  };

  return { getProduct, setProduct, sendProduct, deleteProduct };
}
