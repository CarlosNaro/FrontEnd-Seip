<script setup lang="ts">
import useClientStore from "../stores/clientStore";
import { computed, onMounted } from "vue";
import { mdiTrashCan, mdiClose, mdiArchiveEdit } from "@mdi/js";
import { IMClient } from "../models/IClient";

const { setClient, getClient } = useClientStore();
const ListClient = computed(() => getClient());
const isModelDelete = ref(false);
const isModelEdit = ref(false);
const ID = ref();
const Client = ref();

onMounted(() => {
  setClient();
});

// falta arrglar logica del delete
const isActiveDelete = (id: any) => {
  isModelDelete.value = !isModelDelete.value;
  ID.value = id;
};
const isActiveEdit = (item: any) => {
  isModelEdit.value = !isModelEdit.value;
  console.log("sads ", item);
  Client.value = item;
};
</script>
<template>
  <DeleteClient
    v-if="isModelDelete"
    title="Eliminar Cliente"
    :icon="mdiClose"
    v-model="isModelDelete"
    :id-client="ID"

  />
  <EditClient
    title="Actualización de datos del cliente"
    :icon="mdiClose"
    v-if="Client && isModelEdit "
    v-model="isModelEdit"
    :client="Client"
  />
  <div class="rounded-2xl flex-col bg-white flex mb-6">
    <table>
      <thead>
        <tr>
          <th />
          <th>Nombre</th>
          <th>Documento</th>
          <th>Descripcion</th>
          <th>Telefono</th>
          <th>Creado</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in ListClient" :key="index">
          <td class="border-b-0 lg:w-6 before:hidden">
            <UserAvatar
              :username="item.name"
              class="w-24 h-24 mx-auto lg:w-6 lg:h-6"
            />
          </td>

          <td data-label="Name">{{ item.name }}</td>
          <td data-label="Document">{{ item.document }}</td>
          <td data-label="Description">{{ item.description }}</td>
          <td data-label="Phone">{{ item.phone }}</td>

          <td data-label="Date" class="lg:w-1 whitespace-nowrap">
            <small class="text-gray-500 dark:text-slate-400">{{
              item.date
            }}</small>
          </td>
          <td class="before:hidden lg:w-1 whitespace-nowrap">
            <div class="flex justify-start lg:justify-end">
              <button @click="isActiveEdit(item)" class="btn-edit mr-2">
                <BaseIcon :path="mdiArchiveEdit" />
              </button>

              <button @click="isActiveDelete(item.id)" class="btn-delete">
                <BaseIcon :path="mdiTrashCan" />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
