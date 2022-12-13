<script lang="ts" setup>
import LayoutAuthenticated from "../layouts/LayoutAuthenticated.vue";
import SectionMain from "../components/SectionMain.vue";
import SectionTitleLineWithButton from "../components/SectionTitleLineWithButton.vue";
import { onMounted, reactive, computed } from "vue";
import useAuthStore from '../stores/AuthStore'
import {getItem} from '../stores/actions/localStorage'
import { mdiFamilyTree } from "@mdi/js";


const menu = reactive({
  icon: mdiFamilyTree,
  title: "Prueba",
  main: Boolean,
 
});

const getExpen = computed(()=>useAuthStore().getAuth())
const setExpen = useAuthStore().setExpens()

const valor = getItem("token-user")

onMounted(() => {
  // useAuthStore().setAuth()
  console.log("llamada en el Home ",valor );

});
</script>
<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="menu.icon"
        :title="menu.title" 
        :main="menu.main"
      >
        <!-- <button
            type="submit"
            class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            @click="isModalActive = true"
            >
            New Expen
          </button> -->
      </SectionTitleLineWithButton>

      <!-- <span>Welcome to humbrella</span> -->

      <span v-for="(item, index) in getExpen" :key="item" >
      {{item}}</span>

    </SectionMain>
  </LayoutAuthenticated>
</template>
