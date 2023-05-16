<script  setup lang="ts">
import BaseIcon from '../../../components/BaseIcon.vue';
import { useRouter,RouterLink } from "vue-router";
import { useLayoutStore } from '../stores/layout';
import { getItem } from '../../../stores/actions/localStorage';
import { onMounted } from 'vue';
import {
  mdiChevronUp,
  mdiChevronDown,
  mdiSunAngleOutline,
  mdiCalculator,
  mdiAccount,
  mdiLogout
} from "@mdi/js";


export interface Imenu{
  to:string,
  icon:string,
  label:string,
  is_admin:boolean,
  isLogout:boolean
}

const token = getItem("token")



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


// v-if="item.is_admin == token.is_admin || item.isLogout"


</script>
<template>
  
  <li>
    
    <component
      :is="props.item.to ? RouterLink : 'a'"
      v-slot="vSlot"
      :to="props.item.to ?? null"
      class="flex cursor-pointer py-3  "
      :class="{ 'active':  props.item.to == router.currentRoute.value.path }"
      @click="logout"
    >

    
      <Base-Icon
      v-if="props.item.icon"
      :path="props.item.icon "
      class="flex-none"
      :class="[vSlot]"
      w="w-16"
      :size="18"
      />

    <span 
      class="grow text-ellipsis line-clamp-1 "
      :class="[
        'pr-12',
        vSlot  ,
      ]"
      >{{ props.item.label }}</span
    >
  
    </component>

  </li>
</template>


<style scoped>
 .active{
    color: black

    
  }
</style>

