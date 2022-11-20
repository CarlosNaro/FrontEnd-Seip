<script  setup lang="ts">
import { RouterLink } from "vue-router";
import BaseIcon from '../../../components/BaseIcon.vue';
import { ref, reactive} from 'vue'


export interface Imenu{
  to:string,
  icon:string,
  label:string

}

const props = defineProps<{ 
  item:Imenu
}>()

//const emit = defineEmits(["menu-click"]);

// const componentClass = computed(() => [
//   props.isDropdownList ? "py-3 px-6 text-sm" : "py-3",

// ]);

// const hasDropdown = computed(() => !!props.item);

//function active(){return "color: blue text-sm"} 

// const menuClick = (event:any,) => {
//   emit("menu-click", event, props.item);
// };

</script>

<template>
  <li>
    <component
      :is="props.item.to ? RouterLink : 'a'"
      v-slot="vSlot"
      :to="props.item.to ?? null"
      class="flex cursor-pointer py-3"         
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

<style scoped>
/* .active{
  @apply text-yellow-500
} */
</style>
