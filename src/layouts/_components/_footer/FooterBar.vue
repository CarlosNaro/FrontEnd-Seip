<script setup lang="ts" > 
import { containerMaxW } from "../../../config";
import { reactive, ref } from "vue";
import BaseLevel from "@/components/BaseLevel.vue";
import JustboilLogo from "@/components/JustboilLogo.vue";

const year = new Date().getFullYear();

const hora = ref()

setInterval(()=>{
  const date = new Date()
  const clock = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
  hora.value = clock
},1000)

</script>

<template>
  <footer class="py-2 px-6" :class="containerMaxW">
    <div class="text-center md:text-left">
        <b
          >&copy;{{ year }},
          <!-- <a href="https://justboil.me/" target="_blank">Developer (Naro)</a>.</b -->
          <a  target="_blank">Developer (Naro)</a>.</b
        >
        <slot />
        <span> {{hora}} </span>
      </div>
  </footer>
</template>
