import { reactive } from "vue";
import service from "../../../core/modules/axios";
import { IProductStore, IFProduct, IFProductEdit } from "../models/IProduct";
import { ElMessage } from "element-plus";

const state = reactive<IProductStore>({
  product: null,
});

export default function useProductStore() {
  const getProduct = () => state.product;

  const setProduct = async () => {
    try {
      const { data, status } = await service.get("apunte/product/");
      if (status == 200) state.product = data;
    } catch (error: any) {
      ElMessage.error(error.message);
    }
  };

  const sendProduct = async (model: IFProduct): Promise<boolean> => {
    try {
      const form = new FormData();

      form.append("name", model.name);
      form.append("description", model.description!);
      form.append("image", model.image ? model.image : "");

      await service.post("apunte/product/", form);
      setProduct();
      ElMessage.success("Producto registrado correctamente");
      return true;
    } catch (error: any) {
      ElMessage.error(error.message);
      return false;
    }
  };

  const updateProduct = async (model: IFProductEdit): Promise<boolean> => {
    try {
      const form = new FormData();

      form.append("id", model.id.toString());
      form.append("name", model.name);
      form.append("description", model.description!);
      form.append("image", model.image ? model.image : "");

      await service.put(`apunte/product/${model.id}/`, form);
      setProduct();
      ElMessage.success("Producto actualizado correctamente");
      return true;
    } catch (error: any) {
      ElMessage.error(error.message);
      return false;
    }
  };

  const deleteProduct = async (id: number): Promise<boolean> => {
    try {
      await service.delete(`apunte/product/${id}/`);
      setProduct();
      ElMessage.warning("Producto eliminado correctamente");
      return true;
    } catch (error: any) {
      ElMessage.error(error.message);
      return false;
    }
  };

  return { getProduct, setProduct, sendProduct, deleteProduct, updateProduct };
}
