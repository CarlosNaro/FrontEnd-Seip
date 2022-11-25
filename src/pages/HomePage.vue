<script lang="ts" setup>
import LayoutAuthenticated from '../layouts/LayoutAuthenticated.vue';
import SectionMain from '../components/SectionMain.vue';
import useOrdersStore from  '../stores/AuthStore'
import {onMounted, computed} from 'vue'

// const order = useOrdersStore().setOrders()
// const get = computed(()=>useOrdersStore().getOrders())
 

onMounted(() => {
    
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