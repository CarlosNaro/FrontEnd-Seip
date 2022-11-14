<script setup lang="ts">
import SideBar from './_components/SideBar.vue';
import menuSidebar from './actions/menuSideBar'
import {reactive} from 'vue'


//const menu = menuSidebar

</script>
<template>
    <div>

        

        <SideBar :menu="menuSidebar" />
    </div>
</template>