<script lang="ts" setup>
import LayoutAuthenticated from '../layouts/LayoutAuthenticated.vue';
import SectionMain from '../components/SectionMain.vue';
import useAuthStore from '../stores/AuthStore';
import {onMounted, computed, reactive} from 'vue'

// const order = useOrdersStore().setOrders()
// const get = computed(()=>useOrdersStore().getOrders())


onMounted(() => {
    const token =  localStorage.getItem("token-user") 
    // useAuthStore().setAuth()
    console.log("llamada en el Home ",token)    
})

</script>
<template>
    <LayoutAuthenticated>

        <SectionMain>
            <span>Welcome to humbrella</span>
            <!-- <span v-for="( item, index) in get" :key="index">
                {{item}}
            </span> -->
        </SectionMain>

    </LayoutAuthenticated>

</template>