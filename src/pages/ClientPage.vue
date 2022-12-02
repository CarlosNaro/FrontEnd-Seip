<script lang="ts" setup>
import LayoutAuthenticated from '../layouts/LayoutAuthenticated.vue';
import SectionMain from '../components/SectionMain.vue';
import {onMounted} from 'vue'

onMounted(() => {
    const token = localStorage.getItem("token-user")
    // useAuthStore().setAuth()
    console.log("llamada en el Client ",token)    
})
</script>
<template>
    <LayoutAuthenticated>

        <SectionMain>
            <span>Welcome to Clients</span>
        </SectionMain>

    </LayoutAuthenticated>

</template>