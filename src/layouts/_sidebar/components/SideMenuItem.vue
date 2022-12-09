<script  setup lang="ts">
import { RouterLink } from "vue-router";
import BaseIcon from '../../../components/BaseIcon.vue';
import { useRouter } from "vue-router";

export interface Imenu{
  to:string,
  icon:string,
  label:string
}

const props = defineProps<{ 
  item:Imenu
}>()

const router = useRouter()

const logout = ()=>{
  if(props.item.label == "Logout"){
    localStorage.clear()
    router.push({name:"Login"})
  }
}
</script>

<template>
  <li>
    <component
      :is="props.item.to ? RouterLink : 'a'"
      v-slot="vSlot"
      :to="props.item.to ?? null"
      class="flex cursor-pointer py-3"
      @click="logout"
    >
      <Base-Icon
        v-if="props.item.icon"
        :path="props.item.icon"
        class="flex-none"
        :class="[vSlot && vSlot.isExactActive ]"
        w="w-16"
        :size="18"
      />

      <span
        class="grow text-ellipsis line-clamp-1"
        :class="[
          'pr-12',
          vSlot && vSlot.isExactActive ,
        ]"
        >{{ props.item.label }}</span
      >
  
    </component>

  </li>
</template>


