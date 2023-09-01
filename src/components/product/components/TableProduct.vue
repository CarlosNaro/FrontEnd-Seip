<script setup lang="ts">
import { mdiTrashCan, mdiClose, mdiArchiveEdit } from "@mdi/js";
import { onMounted, computed } from "vue";
import { IMProduct } from "../models/IProduct";
import useProductStore from "../stores/productStore";


const { getProduct, setProduct } = useProductStore();
const productList = computed(() => getProduct());
const isModelDelete = ref(false);
const isModelEdit = ref(false);
const ID = ref();
const Product = ref()

onMounted(() => {
  setProduct();
});

const isActiveDelete = (id: any) => {
  isModelDelete.value = !isModelDelete.value;
  ID.value = id;
};

const isActiveEdit = (item : IMProduct) => {
  isModelEdit.value = !isModelEdit.value;
  Product.value = item;
};

</script>
<template>
  <Delete-Product
    v-if="isModelDelete"
    v-model="isModelDelete"
    title="Eliminar  Productos"
    :icon="mdiClose" 
    :id-product="ID"
    />

    <EditProduct
    v-if="isModelEdit"
    v-model="isModelEdit"
    title="Actualizar Producto"
    :icon="mdiClose"
    :product="Product"
    />
  <div class="rounded-2xl flex-col bg-white flex mb-6">
    <table>
      <thead>
        <tr>
          <th />
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Creado</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in productList" :key="index">
          <td class="border-b-0 lg:w-6 before:hidden">
            <UserAvatar
              :username="item.name"
              :avatar="item.image"
              class="w-24 h-24 mx-auto lg:w-8 lg:h-8"
            />
          </td>

          <td data-label="Name">{{ item.name }}</td>
          <td data-label="Description">{{ item.description }}</td>
          <td data-label="Creado" class="lg:w-1 whitespace-nowrap">
            <small class="text-gray-500 dark:text-slate-400">{{
              item.date
            }}</small>
          </td>
          <td class="before:hidden lg:w-1 whitespace-nowrap">
            <div class="flex justify-start lg:justify-end">
              <button class="btn-edit mr-2" @click="isActiveEdit(item)" >
                <BaseIcon :path="mdiArchiveEdit" />
              </button>

              <button class="btn-delete" @click="isActiveDelete(item.id)" >
                <BaseIcon :path="mdiTrashCan" />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
