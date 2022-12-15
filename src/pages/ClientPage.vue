<script lang="ts" setup>
import LayoutAuthenticated from '../layouts/LayoutAuthenticated.vue';
import SectionMain from '../components/SectionMain.vue';
import useAuthStore from '../stores/AuthStore'
import {onMounted} from "vue"


onMounted(() => {
//   useAuthStore().expiredToken()  
})


</script>
<template>
    <LayoutAuthenticated>
        <SectionMain>

            <span>Welcome to Clients</span>

        </SectionMain>
    </LayoutAuthenticated>

</template>