<script lang="ts" setup>
import {useLayoutStore} from '../actions/layout'
import SideMenuLayer from './SideMenuLayer.vue'




const layoutStore = useLayoutStore();
// definir props 
const props = defineProps<{
    menu:Array<string>
}>()
 


 

</script>
<template>

    
        <SideMenuLayer
        :menu="props.menu"
        :class="[
      layoutStore.state.isAsideMobileExpanded ? 'left-0' : '-left-60 lg:left-0',
      { 'lg:hidden xl:flex': !layoutStore.state.isAsideLgActive },
    ]"
        />
   
</template>