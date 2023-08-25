import { reactive } from "vue";
import { IMClientStore, IFClient, IFClientEdit } from "../models/IClient";
import service from "../../../core/modules/axios";
import { ElMessage } from "element-plus";

const state = reactive<IMClientStore>({
  client: null,
});

export default function useClientStore() {
  const getClient = () => state.client;

  const setClient = async () => {
    try {
      const { data, status } = await service.get("apunte/client/");
      if (status == 200) state.client = data;
    } catch (error: any) {
      ElMessage.error(error);
    }
  };

  const sendClient = async (model: IFClient): Promise<boolean> => {
    try {
      await service.post("apunte/client/", model);
      setClient();
      ElMessage.success(" Cliente registrado exitosamente ");
      return true;
    } catch (error: any) {
      ElMessage.error(error.message);
      return false;
    }
  };

  const deleteClient = async (id: any): Promise<boolean> => {
    try {
      await service.delete(`apunte/client/${id}/`);
      setClient();
      ElMessage.warning("Cliente eliminado del registro SEIP");
      return true;
    } catch (error: any) {
      ElMessage.error(error.message);
      return false;
    }
  };

  const updateClient = async (model: any): Promise<boolean> => {
    try {
      await service.put(`apunte/client/${model.id}/`, model);
      setClient();
      ElMessage.success("Cliente actualizado correctamente");
      return true;
    } catch (error: any) {
      ElMessage.error(error.message);
      return false;
    }
  };

  return { getClient, setClient, sendClient, deleteClient, updateClient };
}
