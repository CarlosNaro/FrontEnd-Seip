<script setup lang="ts">
import { mdiTrashCan, mdiClose, mdiArchiveEdit } from "@mdi/js";
import {onMounted, computed} from "vue" 
import useProductStore  from "../stores/productStore"


const { getProduct, setProduct  } = useProductStore()

const productList = computed(()=> getProduct())

onMounted(() => {
  setProduct()
})

</script>
<template>
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
        <tr v-for="(item, index) in productList" :key="index" >
          <td class="border-b-0 lg:w-6 before:hidden">
            <UserAvatar
              :username="item.name"
              class="w-24 h-24 mx-auto lg:w-6 lg:h-6"
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
              <button  class="btn-edit mr-2">
                <BaseIcon :path="mdiArchiveEdit" />
              </button>

              <button  class="btn-delete">
                <BaseIcon :path="mdiTrashCan" />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>