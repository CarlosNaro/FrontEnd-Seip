<script lang="ts" setup>
import LayoutAuthenticated from "../layouts/LayoutAuthenticated.vue";
import SectionMain from "../components/SectionMain.vue";
import SectionTitleLineWithButton from "../components/SectionTitleLineWithButton.vue";
import { onMounted, reactive, computed, ref } from "vue";
import useAuthStore from '../stores/AuthStore'
import {getItem} from '../stores/actions/localStorage'
import { mdiFamilyTree } from "@mdi/js";
import jwt_decode from "jwt-decode";
 

const getExpent = computed(()=> useAuthStore().getAuth() )
const setExpent = useAuthStore().setExpens()

const valor = getItem("token-user")
const menu = reactive({
  icon: mdiFamilyTree,
  title: "Prueba",
  main: Boolean,
 
});
// var token = valor;
const decoded =  jwt_decode(valor.access);



const TokenExpired =(token:any)=>{
  token =  jwt_decode(token);
  console.log(token, "Decodificado")
  const expired = ref(false)
  console.log("asas: ", token.exp)
  if(token != ""){
    const current_time = Date.now()/1000
    if(token.exp < current_time){
      expired.value = true
    }
  }else{
      expired.value = true
    }
  console.log("expired", expired.value )
  return console.log(expired.value)
}


onMounted(() => {
  // useAuthStore().setAuth()
  // console.log("llamada en el Home ",valor );
  console.log(decoded)
  TokenExpired(valor.access)
  
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

      <span v-for="(item, index) in getExpent " :key="item" >{{item}}</span>

    </SectionMain>
  </LayoutAuthenticated>
</template>
