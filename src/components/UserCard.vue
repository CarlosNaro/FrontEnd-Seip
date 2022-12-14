<script setup lang="ts">
import { computed, ref } from "vue";
// import { useMainStore } from "@/stores/main";
import { mdiCheckDecagram } from "@mdi/js";
//import BaseLevel from "@/components/BaseLevel.vue";
import UserAvatarCurrentUser from "@/components/UserAvatarCurrentUser.vue";
//import CardBox from "@/components/CardBox.vue";
//import FormCheckRadio from "@/components/FormCheckRadio.vue";
//import PillTag from "@/components/PillTag.vue";
import UserAvatar from "./UserAvatar.vue";

// const mainStore = useMainStore();

const userName = "Alonso Naro"
const  username = "avatar"
const  avatar = "sad"

const userSwitchVal = ref(false);
</script>

<template>
  <!-- <img src= "../assets/avatar.jpg" alt="" srcset=""> -->
  <div class="p-5 rounded-2xl ">
    <div class=" flex items-center flex-wrap lg:justify-center">
      <UserAvatar :username="username"  class="lg:mx-12 sm:mr-5 " />
      <div class="space-y-3 text-center md:text-left lg:mx-12 ">   
        <h1 class="text-2xl">
          Howdy, <b>{{ userName }}</b
          >!
        </h1>
        <p>Last login <b>12 mins ago</b> from <b>127.0.0.1</b></p>
      </div>
    </div>
  </div>
  
</template>
