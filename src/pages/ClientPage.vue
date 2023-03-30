<script lang="ts" setup>
import LayoutAuthenticated from '../layouts/LayoutAuthenticated.vue';
import SectionMain from '../components/SectionMain.vue';
import useAuthStore from '../stores/Prueba/AuthStore'
import {computed, onMounted, ref} from "vue"


 
// const expireds =  ref(useAuthStore().expiredToken())

// onMounted(() => {
//    console.log("naro ",expireds.value)
// })


</script>
<template>
    <LayoutAuthenticated>
        <SectionMain>

            <span>Welcome to Clients</span>

        </SectionMain>
    </LayoutAuthenticated>

</template>